"use client";

import { useMemo, useState, useCallback } from "react";
import { Graph, loadAllCompanies, buildGraph } from "./CompanyGraph";
import FilterPane, { FilterState } from "./FilterPane";
import { filterCompanies } from "./FilterPane/filterLogic";
import InspectPane from "./InspectPane";
import { GraphNode } from "./CompanyGraph/types";
import ViewSwitcher, { ViewMode } from "./ViewSwitcher";
import SpreadsheetView from "./SpreadsheetView";

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewMode>("graph");
  const [filters, setFilters] = useState<FilterState>({
    officeLocations: [],
    visaSponsorships: [],
  });

  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);

  // Load all companies once
  const allCompanies = useMemo(() => loadAllCompanies(), []);

  // Filter companies and build graph based on current filters
  const graphData = useMemo(() => {
    const filteredCompanies = filterCompanies(allCompanies, filters);
    return buildGraph(filteredCompanies);
  }, [allCompanies, filters]);

  // Filter companies for spreadsheet view
  const filteredCompanies = useMemo(() => {
    return filterCompanies(allCompanies, filters);
  }, [allCompanies, filters]);

  // Memoize the node click handler to prevent Graph re-renders
  const handleNodeClick = useCallback((nodeId: string, node: GraphNode) => {
    console.log("Node clicked:", nodeId, node);
    setSelectedNode(node);
  }, []);

  // Handle closing the InspectPane
  const handleCloseInspectPane = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <ViewSwitcher currentView={currentView} onViewChange={setCurrentView} />
      
      {currentView === "graph" ? (
        <>
          <FilterPane filters={filters} onFiltersChange={setFilters} />
          <InspectPane 
            selectedNode={selectedNode} 
            allCompanies={allCompanies} 
            onClose={handleCloseInspectPane}
          />
          <Graph data={graphData} onNodeClick={handleNodeClick} />
        </>
      ) : (
        <SpreadsheetView companies={filteredCompanies} />
      )}
    </div>
  );
}
