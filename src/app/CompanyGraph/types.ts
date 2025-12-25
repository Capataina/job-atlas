import { Field, OfficeLocation, VisaSponsorship } from "../data/company_types/enums";
import { Company } from "../data/company_types/types";

export type NodeType = "base" | "field" | "officeLocation" | "visaSponsorship" | "company";

export interface GraphNode {
  id: string;
  label: string;
  type: NodeType;
  level: number;
  data?: Company | Field | OfficeLocation | VisaSponsorship;
  field?: Field; // Store field for color coding
}

export interface GraphEdge {
  from: string;
  to: string;
  type?: "base-to-field" | "field-to-visa" | "visa-to-company";
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

