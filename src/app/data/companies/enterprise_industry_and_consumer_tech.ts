import { Field, VisaSponsorship, CurrentATS, OfficeLocation } from "../company_types/enums";
import { Company } from "../company_types/types";

/**
 * Companies that are part of Enterprise, Industry & Consumer Tech.
 * Ocado
 * Octopus Energy
 * Trainline
 * Just Eat
 * Deliveroo
 * Expedia
 * Tripadvisor
 * Roku
 * Zynga Games
 * Runna
 * TravelPerk
 * Compare the Market
 * Hyperexponential
 * Addepar
 * Clearwater
 * Titanbay
 * Trayport
 * Aveva
 * Veeva Systems
 * Salesforce
 */
export const enterpriseIndustryAndConsumerTech: Company[] = [
  {
    id: "ocado",
    name: "Ocado",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized engineering roles in the UK.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://careers.ocadogroup.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.ocadogroup.com/",
    notes: "Online grocery and robotics platform with large engineering teams.",
  },
  {
    id: "octopus-energy",
    name: "Octopus Energy",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist tech roles; confirm per posting.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
      OfficeLocation.UnitedStates,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://octopus.energy/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://octopus.energy/",
    notes: "Energy supplier and tech platform focused on renewable energy and Kraken.",
  },
  {
    id: "trainline",
    name: "Trainline",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Sponsorship limited; roles often require UK work authorization.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.France],
    careers: {
      careersUrl: { exists: true, url: "https://careers.thetrainline.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.thetrainline.com/",
    notes: "Rail and coach ticketing platform with consumer apps and B2B APIs.",
  },
  {
    id: "just-eat",
    name: "Just Eat",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for select roles; varies by region.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.justeattakeaway.com/global/en" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.justeattakeaway.com/",
    notes: "Online food delivery marketplace operating across Europe.",
  },
  {
    id: "deliveroo",
    name: "Deliveroo",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialist engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.France, OfficeLocation.Germany],
    careers: {
      careersUrl: { exists: true, url: "https://careers.deliveroo.co.uk/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://deliveroo.co.uk/",
    notes: "Food delivery marketplace with logistics, consumer, and platform teams.",
  },
  {
    id: "expedia",
    name: "Expedia Group",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for engineering roles in US and Europe.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://lifeatexpediagroup.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.expediagroup.com/",
    notes: "Travel platform operating Expedia, Hotels.com, Vrbo, and other brands.",
  },
  {
    id: "tripadvisor",
    name: "Tripadvisor",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for select roles; varies by region.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://careers.tripadvisor.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.tripadvisor.com/",
    notes: "Travel guidance and reviews platform.",
  },
  {
    id: "roku",
    name: "Roku",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for specialized engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.roku.com/jobs" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.roku.com/",
    notes: "Streaming platform and device company.",
  },
  {
    id: "zynga",
    name: "Zynga",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for select engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.zynga.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.zynga.com/",
    notes: "Mobile and online gaming company.",
  },
  {
    id: "runna",
    name: "Runna",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "No public information on sponsorship.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Fitness training app; public hiring details not confirmed.",
  },
  {
    id: "travelperk",
    name: "TravelPerk",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist roles; confirm per posting.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.travelperk.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.travelperk.com/",
    notes: "Corporate travel management platform.",
  },
  {
    id: "compare-the-market",
    name: "Compare the Market",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Sponsorship uncommon; roles typically require UK work authorization.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.comparethemarket.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.comparethemarket.com/",
    notes: "Price comparison site for insurance and utilities.",
  },
  {
    id: "hyperexponential",
    name: "hyperexponential",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.hyperexponential.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.hyperexponential.com/",
    notes: "Insurance pricing and modeling software company.",
  },
  {
    id: "addepar",
    name: "Addepar",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.addepar.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.addepar.com/",
    notes: "Wealth management data and reporting platform.",
  },
  {
    id: "clearwater",
    name: "Clearwater Analytics",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.clearwateranalytics.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.clearwateranalytics.com/",
    notes: "Investment accounting and reporting SaaS provider.",
  },
  {
    id: "titanbay",
    name: "Titanbay",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Private markets investment platform; public careers information not confirmed.",
  },
  {
    id: "trayport",
    name: "Trayport",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialist roles in London.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.trayport.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.trayport.com/",
    notes: "Energy trading technology provider.",
  },
  {
    id: "aveva",
    name: "Aveva",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for select roles; varies by region.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.France,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.aveva.com/en/about/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.aveva.com/",
    notes: "Industrial software company for engineering and operations.",
  },
  {
    id: "veeva",
    name: "Veeva Systems",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for specialized engineering roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.veeva.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.veeva.com/",
    notes: "Cloud software for life sciences CRM, data, and quality systems.",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    fields: [Field.EnterpriseIndustryandConsumerTech],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for engineering roles across major hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.salesforce.com/en" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.salesforce.com/",
    notes: "CRM and platform company with strong enterprise cloud presence.",
  },
];
