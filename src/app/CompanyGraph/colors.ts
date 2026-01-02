import { Field } from "../data/company_types/enums";

/**
 * Muted pastel color palette for dark theme - modern, luxurious look
 * Color themes by category:
 * - Finance (3 fields): Green shades
 * - AI/ML/Tech (6 fields): Blue/Cyan shades
 * - Hardware/Physical (4 fields): Red/Orange/Warm shades
 * - Enterprise/Gaming/Consumer (3 fields): Purple/Magenta shades
 * - Crypto: Yellow/Gold
 * - Professional Services (3 fields): Gray/Neutral shades
 */
export function getFieldColor(field: Field, nodeType?: string): { background: string; border: string } {
  switch (field) {
    // FINANCE CATEGORY - Green shades (darker to lighter)
    case Field.TraditionalFinanceAssetManagement:
      return { background: "#3d7a5a", border: "#2d6a4a" }; // Dark forest green
    case Field.FintechPaymentsBankingTechnology:
      return { background: "#4d9a6a", border: "#3d8a5a" }; // Medium green
    case Field.QuantTradingHFTMarketInfrastructure:
      return { background: "#5daa7a", border: "#4d9a6a" }; // Light green
    case Field.MarketDataFinancialTechnologyVendors:
      return { background: "#6dba8a", border: "#5daa7a" }; // Pale green

    // AI/ML/TECH CATEGORY - Blue/Cyan shades (darker to lighter)
    case Field.AIMachineLearning:
      return { background: "#5a7db8", border: "#4a6da8" }; // Deep blue
    case Field.AIInfrastructureMLOps:
      return { background: "#6a8dc8", border: "#5a7db8" }; // Medium blue
    case Field.DeveloperPlatformsTools:
      return { background: "#7a9dd8", border: "#6a8dc8" }; // Light blue
    case Field.CloudDataAnalytics:
      return { background: "#6a9daa", border: "#5a8d9a" }; // Cyan/teal
    case Field.Cybersecurity:
      return { background: "#5a8d9a", border: "#4a7d8a" }; // Dark cyan
    case Field.QuantumComputing:
      return { background: "#8aade8", border: "#7a9dd8" }; // Pale blue

    // HARDWARE/PHYSICAL CATEGORY - Red/Orange/Warm shades
    case Field.SemiconductorsHardware:
      return { background: "#b87a6a", border: "#a86a5a" }; // Terracotta
    case Field.AutonomousVehiclesRobotics:
      return { background: "#c88a7a", border: "#b87a6a" }; // Light terracotta
    case Field.AerospaceDefence:
      return { background: "#a86a5a", border: "#985a4a" }; // Dark rust
    case Field.BiotechHealthcareTech:
      return { background: "#d89a8a", border: "#c88a7a" }; // Pale coral

    // ENTERPRISE/GAMING/CONSUMER CATEGORY - Purple/Magenta shades
    case Field.BigTechAndHyperscalers:
      return { background: "#8a7ab8", border: "#7a6aa8" }; // Deep purple
    case Field.EnterpriseConsumerTech:
      return { background: "#9a8ac8", border: "#8a7ab8" }; // Medium purple
    case Field.GamingInteractiveEntertainment:
      return { background: "#aa9ad8", border: "#9a8ac8" }; // Light purple/lavender

    // CRYPTO - Yellow/Gold
    case Field.CryptoWeb3:
      return { background: "#b8a86a", border: "#a8985a" }; // Muted gold

    // PROFESSIONAL SERVICES CATEGORY - Gray/Neutral shades
    case Field.ConsultingProfessionalServices:
      return { background: "#8a8a8a", border: "#7a7a7a" }; // Medium gray
    case Field.RecruitersTalentIntermediaries:
      return { background: "#9a9a9a", border: "#8a8a8a" }; // Light gray

    default:
      return { background: "#8a8a8a", border: "#7a7a7a" };
  }
}

/**
 * Get color for non-field nodes (base, visa sponsorship)
 * Optimized for dark theme
 */
export function getNodeTypeColor(
  type: "base" | "visaSponsorship",
  level?: number
): { background: string; border: string } {
  switch (type) {
    case "base":
      return { background: "#6a6a6a", border: "#7a7a7a" }; // Lighter gray for global node
    case "visaSponsorship":
      return { background: "#5a5a5a", border: "#6a6a6a" }; // Medium gray
    default:
      return { background: "#5a5a5a", border: "#6a6a6a" };
  }
}

/**
 * Get brightness multiplier based on node level
 * Level 0 (global) = brightest, higher levels = darker
 */
export function getBrightnessForLevel(level: number, type: string): number {
  if (type === "base") return 1.0; // Global node - brightest
  if (type === "field") return 0.85; // Fields - bright
  if (type === "visaSponsorship") return 0.7; // Visa levels - medium
  if (type === "company") return 0.55; // Companies - darkest (leafs)
  return 0.7; // Default
}

/**
 * Apply brightness adjustment to a color
 */
export function applyBrightness(
  color: { background: string; border: string },
  brightness: number
): { background: string; border: string } {
  const adjustColor = (hex: string, brightness: number): string => {
    // Remove # if present
    hex = hex.replace("#", "");
    
    // Convert to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Apply brightness (brightness > 1 makes brighter, < 1 makes darker)
    const newR = Math.min(255, Math.max(0, Math.round(r * brightness)));
    const newG = Math.min(255, Math.max(0, Math.round(g * brightness)));
    const newB = Math.min(255, Math.max(0, Math.round(b * brightness)));
    
    // Convert back to hex
    return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
  };
  
  return {
    background: adjustColor(color.background, brightness),
    border: adjustColor(color.border, brightness),
  };
}

