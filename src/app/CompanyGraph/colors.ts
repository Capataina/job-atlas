import { Field } from "../data/company_types/enums";

/**
 * Muted pastel color palette for dark theme - modern, luxurious look
 * Each field has a unique color within its theme (e.g., all finance fields are greenish but different shades)
 */
export function getFieldColor(field: Field, nodeType?: string): { background: string; border: string } {
  switch (field) {
    // Finance fields - different shades of green (themed but distinct)
    case Field.TraditionalFinance:
      return { background: "#4a8d6a", border: "#3a7d5a" }; // Darker green
    case Field.FintechCryptoPaymentsBankingTechnology:
      return { background: "#5a9d7a", border: "#4a8d6a" }; // Medium green
    case Field.QuantAndHighFrequencyTrading:
      return { background: "#6aad8a", border: "#5a9d7a" }; // Lighter green

    // AI & ML - different shades of blue
    case Field.AIAndMachineLearning:
      return { background: "#6a8db8", border: "#5a7da8" }; // Medium blue

    // Systems & Infrastructure - different shades of red/coral
    case Field.SystemsAndInfrastructure:
      return { background: "#b88a8a", border: "#a87a7a" }; // Muted red/coral

    // Developer/Cloud/SaaS - different shades of teal
    case Field.DeveloperCloudandDataSaaS:
      return { background: "#7a9d9d", border: "#6a8d8d" }; // Muted teal

    // Big Tech - different shades of purple
    case Field.BigTechAndHyperscalers:
      return { background: "#9d8ab8", border: "#8d7aa8" }; // Muted purple

    // Enterprise/Consumer - different shades of orange/peach
    case Field.EnterpriseIndustryandConsumerTech:
      return { background: "#b89d8a", border: "#a88d7a" }; // Muted orange/peach

    // Consulting - different shades of gray
    case Field.COnsultingAndProfessionalServices:
      return { background: "#8a8a8a", border: "#7a7a7a" }; // Medium gray

    // Recruiters - different shades of yellow/beige
    case Field.RecruitersAndTalentAcquisition:
      return { background: "#b8a88a", border: "#a8987a" }; // Muted yellow/beige

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

