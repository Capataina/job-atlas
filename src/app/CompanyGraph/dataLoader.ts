import { Company } from "../data/company_types/types";
import { bigTechAndHyperscalers } from "../data/companies/BigTechAndHyperscalers";
import { aiAndMachineLearning } from "../data/companies/AIMachineLearning";
import { aiInfrastructureMLOps } from "../data/companies/AIInfrastructureMLOps";
import { developerPlatformsTools } from "../data/companies/DeveloperPlatformsTools";
import { cloudDataAnalytics } from "../data/companies/CloudDataAnalytics";
import { cybersecurity } from "../data/companies/Cybersecurity";
import { enterpriseConsumerTech } from "../data/companies/EnterpriseConsumerTech";
import { gamingInteractiveEntertainment } from "../data/companies/GamingInteractiveEntertainment";
import { fintechPaymentsBankingTechnology } from "../data/companies/FintechPaymentsBankingTechnology";
import { cryptoWeb3 } from "../data/companies/CryptoWeb3";
import { traditionalFinanceAssetManagement } from "../data/companies/TraditionalFinanceAssetManagement";
import { quantTradingHFTMarketInfrastructure } from "../data/companies/QuantTradingHFTMarketInfrastructure";
import { marketDataFinancialTechnologyVendors } from "../data/companies/MarketDataFinancialTechnologyVendors";
import { semiconductorsHardware } from "../data/companies/SemiconductorsHardware";
import { quantumComputing } from "../data/companies/QuantumComputing";
import { autonomousVehiclesRobotics } from "../data/companies/AutonomousVehiclesRobotics";
import { aerospaceDefence } from "../data/companies/AerospaceDefence";
import { biotechHealthcareTech } from "../data/companies/BiotechHealthcareTech";
import { consultingProfessionalServices } from "../data/companies/ConsultingProfessionalServices";
import { recruitersTalentIntermediaries } from "../data/companies/RecruitersTalentIntermediaries";

/**
 * Aggregates all companies from all data files
 */
export function loadAllCompanies(): Company[] {
  return [
    ...bigTechAndHyperscalers,
    ...aiAndMachineLearning,
    ...aiInfrastructureMLOps,
    ...developerPlatformsTools,
    ...cloudDataAnalytics,
    ...cybersecurity,
    ...enterpriseConsumerTech,
    ...gamingInteractiveEntertainment,
    ...fintechPaymentsBankingTechnology,
    ...cryptoWeb3,
    ...traditionalFinanceAssetManagement,
    ...quantTradingHFTMarketInfrastructure,
    ...marketDataFinancialTechnologyVendors,
    ...semiconductorsHardware,
    ...quantumComputing,
    ...autonomousVehiclesRobotics,
    ...aerospaceDefence,
    ...biotechHealthcareTech,
    ...consultingProfessionalServices,
    ...recruitersTalentIntermediaries,
  ];
}
