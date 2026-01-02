import { Company } from "../data/company_types/types";
import { Field, VisaSponsorship } from "../data/company_types/enums";
import { GraphNode, GraphEdge, GraphData, NodeType } from "./types";

const BASE_NODE_ID = "base";
const BASE_NODE_LABEL = "Global";

/**
 * Builds a hierarchical mindmap structure:
 * base -> fields -> visa sponsorship levels -> companies
 * 
 * Structure:
 * 1. Global node (center)
 * 2. Fields (around global, each in their own space)
 * 3. Visa sponsorship levels (branching from each field)
 * 4. Companies (leaf nodes connected to visa levels)
 */
export function buildGraph(companies: Company[]): GraphData {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  // Create base node
  nodes.push({
    id: BASE_NODE_ID,
    label: BASE_NODE_LABEL,
    type: "base",
    level: 0,
  });

  // Track unique nodes
  const fieldNodes = new Map<Field, string>();
  const visaSponsorshipNodes = new Map<string, string>(); // key: "fieldId-visaSponsorship"
  const companyNodes = new Set<string>();

  // First pass: Create field nodes and connect to base
  for (const company of companies) {
    const field = company.field; // Single field instead of array
    if (!fieldNodes.has(field)) {
      const fieldNodeId = `field-${field}`;
      fieldNodes.set(field, fieldNodeId);
      nodes.push({
        id: fieldNodeId,
        label: field,
        type: "field",
        level: 1,
        data: field,
        field: field,
      });
      // Connect field to base (only fields connect to base)
      edges.push({
        from: BASE_NODE_ID,
        to: fieldNodeId,
        type: "base-to-field",
      });
    }
  }

  // Second pass: Create visa sponsorship nodes per field and connect companies
  for (const company of companies) {
    const visaSponsorship = company.visaSponsorship; // Now a simple enum value
    const field = company.field; // Single field
    
    const fieldNodeId = fieldNodes.get(field)!;
    
    // Create visa sponsorship node for this field-visa combination
    const visaKey = `${fieldNodeId}-${visaSponsorship}`;
    let visaSponsorshipNodeId = visaSponsorshipNodes.get(visaKey);
    
    if (!visaSponsorshipNodeId) {
      visaSponsorshipNodeId = `visa-${fieldNodeId}-${visaSponsorship}`;
      visaSponsorshipNodes.set(visaKey, visaSponsorshipNodeId);
      nodes.push({
        id: visaSponsorshipNodeId,
        label: visaSponsorship,
        type: "visaSponsorship",
        level: 2,
        data: visaSponsorship,
        field: field, // Add field for color coding and InspectPane navigation
      });
      // Connect visa sponsorship to field
      edges.push({
        from: fieldNodeId,
        to: visaSponsorshipNodeId,
        type: "field-to-visa",
      });
    }

    // Create company node (only once per company)
    const companyNodeId = `company-${company.id}`;
    if (!companyNodes.has(companyNodeId)) {
      companyNodes.add(companyNodeId);
      nodes.push({
        id: companyNodeId,
        label: company.name,
        type: "company",
        level: 3,
        data: company,
        field: field, // Use field for color coding
      });
    }
    
    // Connect company to visa sponsorship level
    edges.push({
      from: visaSponsorshipNodeId,
      to: companyNodeId,
      type: "visa-to-company",
    });
  }

  return { nodes, edges };
}

