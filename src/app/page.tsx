"use client";

import { useMemo, useState } from "react";
import { Graph, loadAllCompanies, buildGraph } from "./CompanyGraph";
import FilterPane, { FilterState } from "./FilterPane";
import { filterCompanies } from "./FilterPane/filterLogic";

export default function Home() {
  const [filters, setFilters] = useState<FilterState>({
    officeLocations: [],
    visaSponsorships: [],
  });

  // Load all companies once
  const allCompanies = useMemo(() => loadAllCompanies(), []);

  // Filter companies and build graph based on current filters
  const graphData = useMemo(() => {
    const filteredCompanies = filterCompanies(allCompanies, filters);
    return buildGraph(filteredCompanies);
  }, [allCompanies, filters]);

  const handleNodeClick = (nodeId: string, node: any) => {
    console.log("Node clicked:", nodeId, node);
  };

  return (
    <div className="relative w-full h-screen">
      <FilterPane filters={filters} onFiltersChange={setFilters} />
      <Graph data={graphData} onNodeClick={handleNodeClick} />
    </div>
  );
}
