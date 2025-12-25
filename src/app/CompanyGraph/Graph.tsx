"use client";

import { useEffect, useRef } from "react";
import { Network, Data, Options, DataSet } from "vis-network/standalone";
import { GraphData, GraphNode } from "./types";
import { getFieldColor, getNodeTypeColor, getBrightnessForLevel, applyBrightness } from "./colors";
import { Field } from "../data/company_types/enums";

interface GraphProps {
  data: GraphData;
  onNodeClick?: (nodeId: string, node: GraphNode) => void;
}

/**
 * Main graph component using vis-network
 */
export default function Graph({ data, onNodeClick }: GraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<Network | null>(null);
  const timeoutRefsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing timeouts
    timeoutRefsRef.current.forEach((timeout) => clearTimeout(timeout));
    timeoutRefsRef.current = [];

    // Prepare vis-network data format
    const nodes = data.nodes.map((node) => {
      let color: { background: string; border: string };

      if (node.field) {
        // Use field-based color for companies and field nodes
        color = getFieldColor(node.field, node.type);
      } else if (node.type === "field" && node.data) {
        // Fallback: use field data for field nodes
        color = getFieldColor(node.data as Field, node.type);
      } else {
        // Use type-based color for other nodes (base, visaSponsorship)
        color = getNodeTypeColor(node.type as "base" | "visaSponsorship", node.level);
      }

      // Apply brightness gradient based on level (global brighter, leafs darker)
      const brightness = getBrightnessForLevel(node.level, node.type);
      color = applyBrightness(color, brightness);

      // Add mass based on type to control repulsion
      // Higher mass = stronger repulsion effect
      // Fields get very high mass to repulse each other 8x more strongly
      // Global gets very high mass to repulse fields strongly
      // Visa nodes get higher mass to be repulsed more strongly from global node
      const mass = node.type === "base" ? 2400 : node.type === "field" ? 200 : node.type === "visaSponsorship" ? 50 : 6;

      const nodeConfig: any = {
        id: node.id,
        label: node.label,
        level: node.level,
        color: color,
        shape: getNodeShape(node.type),
        size: getNodeSize(node.type),
        mass: mass, // Higher mass for center nodes to create better separation
        font: {
          size: getFontSize(node.type),
          color: getFontColor(color.background),
          face: "Inter, system-ui, sans-serif",
          bold: true, // Bold text for better readability
        },
        borderWidth: 1.5,
      };

      // Initialize the global node at the center (0, 0)
      if (node.type === "base") {
        nodeConfig.x = 0;
        nodeConfig.y = 0;
      }

      return nodeConfig;
    });

    const edges = data.edges.map((edge) => {
      // Set different edge lengths to control pull strength
      // Longer edges = less pull, more repulsion effect
      // Shorter edges = stronger pull
      let length: number;
      switch (edge.type) {
        case "base-to-field":
          // 1/3 of current length
          length = 25; // 1/3 of 300
          break;
        case "field-to-visa":
          // 75% of current length
          length = 15; // 75% of 100
          break;
        case "visa-to-company":
          // 75% of current length
          length = 10; // 75% of 40
          break;
        default:
          length = 50; // 50% of 150
      }

      return {
        from: edge.from,
        to: edge.to,
        length: length,
        arrows: {
          to: {
            enabled: false, // No arrows for Obsidian-style
          },
        },
        smooth: {
          type: "continuous",
          roundness: 0.5,
        },
      };
    });

    // Add invisible edges from base to all visa nodes to create 5x stronger repulsion
    // Make edges extremely long so they don't pull nodes together, allowing repulsion to dominate
    const baseNodeId = "base";
    const visaNodes = data.nodes.filter(node => node.type === "visaSponsorship");

    const invisibleBaseToVisaEdges = visaNodes.map(visaNode => ({
      from: baseNodeId,
      to: visaNode.id,
      length: 100000, // Doubled (50000 * 2) to double repulsion between base and visa nodes
      width: 0, // Invisible edge
      color: {
        color: "rgba(0,0,0,0)", // Fully transparent
        highlight: "rgba(0,0,0,0)",
        hover: "rgba(0,0,0,0)",
      },
      arrows: {
        to: {
          enabled: false,
        },
      },
      smooth: {
        type: "continuous",
        roundness: 0.5,
      },
    }));

    // Combine regular edges with invisible base-to-visa edges
    const allEdges = [...edges, ...invisibleBaseToVisaEdges];

    const visData: Data = {
      nodes: new DataSet(nodes as any),
      edges: new DataSet(allEdges as any),
    };

    // Configure network options for Obsidian-style force-directed graph
    // Extreme spacing and repulsion for clear level separation
    const options: Options = {
      physics: {
        enabled: true,
        stabilization: {
          enabled: true,
          iterations: 1500,
          fit: false, // Auto-fit to make graph more usable
          updateInterval: 25,
        },
        barnesHut: {
          gravitationalConstant: -10000000, // 5x stronger repulsion (-360000 * 5)
          centralGravity: 0.01, // Very light central pull (reduced to allow more spreading)
          springLength: 100, // 50% shorter (200 / 2) for more compact layout
          springConstant: 0.015, // Lower spring constant to allow more repulsion
          damping: 0.6, // Higher damping to settle faster
          avoidOverlap: 8, // 5x stronger overlap avoidance (8 * 5)
        },
        maxVelocity: 275, // Allow faster movement for spreading
        timestep: 0.3, // Smaller timestep for smoother movement
      },
      interaction: {
        dragNodes: true,
        dragView: true,
        zoomView: true,
        selectConnectedEdges: true,
        hover: true,
        tooltipDelay: 200,
      },
      nodes: {
        borderWidth: 1.5,
        shadow: {
          enabled: true,
          color: "rgba(0,0,0,0.2)",
          size: 4,
          x: 2,
          y: 2,
        },
        font: {
          face: "Inter, system-ui, sans-serif",
          strokeWidth: 8, // Very thick stroke for maximum readability
          strokeColor: "rgba(0,0,0,1)", // Fully opaque black stroke for maximum contrast
        },
        scaling: {
          min: 80,
          max: 300,
        },
        margin: {
          top: 50,
          right: 50,
          bottom: 50,
          left: 50,
        },
        chosen: {
          node: (values: any, id: any, selected: boolean, hovering: boolean) => {
            if (hovering || selected) {
              if (values.size) {
                values.size = values.size * 1.15;
              }
              if (values.font && values.font.size) {
                values.font.size = values.font.size * 1.1;
              }
              if (values.borderWidth) {
                values.borderWidth = values.borderWidth * 1.5;
              }
            }
          },
          label: false,
        },
      },
      edges: {
        width: 0.6, // Thinner edges for less visual weight
        color: {
          color: "rgba(150, 150, 150, 0.2)", // More transparent
          highlight: "rgba(200, 200, 200, 0.7)",
          hover: "rgba(175, 175, 175, 0.5)",
        },
        smooth: {
          enabled: true,
          type: "continuous",
          roundness: 0.5, // More curved for longer distances
        },
        arrows: {
          to: {
            enabled: false,
          },
        },
      },
    };

    // Create network
    const network = new Network(containerRef.current, visData, options);
    networkRef.current = network;

    // Center the view on the base node after network is created
    // Use setTimeout to ensure network is fully initialized
    const timeout1 = setTimeout(() => {
      if (networkRef.current) {
        networkRef.current.moveTo({ position: { x: 0, y: 0 }, scale: 1 });
      }
    }, 100);
    timeoutRefsRef.current.push(timeout1);

    // Center view again after a delay to account for stabilization
    const timeout2 = setTimeout(() => {
      if (networkRef.current) {
        networkRef.current.moveTo({ position: { x: 0, y: 0 }, scale: 1 });
      }
    }, 2000);
    timeoutRefsRef.current.push(timeout2);

    // Keep physics enabled at all times for dynamic, interactive graph

    // Handle node click events - recenter on clicked node (Obsidian-style)
    network.on("click", (params) => {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0] as string;
        const node = data.nodes.find((n) => n.id === nodeId);

        // Recenter the view on the clicked node (Obsidian-style behavior)
        if (networkRef.current) {
          networkRef.current.focus(nodeId, {
            scale: 1.2,
            animation: {
              duration: 500,
              easingFunction: "easeInOutQuad",
            },
          });
        }

        if (node && onNodeClick) {
          onNodeClick(nodeId, node);
        }
      }
    });

    // Cleanup
    return () => {
      // Clear all pending timeouts
      timeoutRefsRef.current.forEach((timeout) => clearTimeout(timeout));
      timeoutRefsRef.current = [];

      if (networkRef.current) {
        networkRef.current.destroy();
        networkRef.current = null;
      }
    };
  }, [data, onNodeClick]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#1a1a1a", // Dark, modern background
      }}
    />
  );
}

/**
 * Get font color based on background color (for contrast on dark theme)
 * Always use light text for readability on dark backgrounds
 */
function getFontColor(backgroundColor: string): string {
  const rgb = hexToRgb(backgroundColor);
  if (rgb) {
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    // Use pure white for maximum contrast on most nodes, dark text only for very bright nodes
    // Increased threshold to favor white text for better readability
    return brightness > 220 ? "#000000" : "#ffffff";
  }
  return "#ffffff"; // Default to pure white text for maximum readability
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
}

/**
 * Get node shape based on type - Obsidian-style uses mostly dots
 */
function getNodeShape(type: GraphNode["type"]): string {
  // Use circular nodes for Obsidian-style graph
  return "dot";
}

/**
 * Get node size based on type - center nodes are much bigger, getting smaller toward leafs
 * 5x larger sizes for maximum readability
 */
function getNodeSize(type: GraphNode["type"]): number {
  switch (type) {
    case "base":
      return 1200; // 3x larger (400 * 3)
    case "field":
      return 900; // 3x larger (300 * 3)
    case "visaSponsorship":
      return 525; // 3x larger (175 * 3)
    case "company":
      return 300; // 3x larger (100 * 3)
    default:
      return 300;
  }
}

/**
 * Get font size based on type - larger for center nodes, optimized for maximum readability
 * Heavily upscaled font sizes for maximum readability
 */
function getFontSize(type: GraphNode["type"]): number {
  switch (type) {
    case "base":
      return 1200; // Doubled (200 * 2) for maximum readability
    case "field":
      return 960; // Doubled (180 * 2) for maximum readability
    case "visaSponsorship":
      return 720; // Doubled (140 * 2) for maximum readability
    case "company":
      return 600; // Doubled (120 * 2) for maximum readability
    default:
      return 480;
  }
}

