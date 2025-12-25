"use client";

import { useMemo } from "react";
import { Graph, loadAllCompanies, buildGraph } from "./CompanyGraph";

export default function Home() {
  const graphData = useMemo(() => {
    const companies = loadAllCompanies();
    return buildGraph(companies);
  }, []);

  const handleNodeClick = (nodeId: string, node: any) => {
    console.log("Node clicked:", nodeId, node);
  };

  return (
    <div>
      <Graph data={graphData} onNodeClick={handleNodeClick} />
    </div>
  );
}
