import { Company } from "../data/company_types/types";
import { bigTechAndHyperscalers } from "../data/companies/big_tech_and_hyperscalers";
import { fintechCryptoPaymentsBankingTechnology } from "../data/companies/fintech_crypto_payments_banking_technology";
import { traditionalFinance } from "../data/companies/traditional_finance";
import { aiAndMachineLearning } from "../data/companies/ai_and_machine_learning";
import { systemsAndInfrastructure } from "../data/companies/systems_and_infrastructure";
import { developerCloudAndDataSaaS } from "../data/companies/developer_cloud_and_data_saas";
import { quantAndHighFrequencyTrading } from "../data/companies/quant_and_high_frequency_trading";
import { enterpriseIndustryAndConsumerTech } from "../data/companies/enterprise_industry_and_consumer_tech";
import { consultingAndProfessionalServices } from "../data/companies/consulting_and_professional_services";
import { recruitersAndTalentAcquisition } from "../data/companies/recruiters_and_talent_acquisition";

/**
 * Aggregates all companies from all data files
 */
export function loadAllCompanies(): Company[] {
  return [
    ...bigTechAndHyperscalers,
    ...fintechCryptoPaymentsBankingTechnology,
    ...traditionalFinance,
    ...aiAndMachineLearning,
    ...systemsAndInfrastructure,
    ...developerCloudAndDataSaaS,
    ...quantAndHighFrequencyTrading,
    ...enterpriseIndustryAndConsumerTech,
    ...consultingAndProfessionalServices,
    ...recruitersAndTalentAcquisition,
  ];
}

