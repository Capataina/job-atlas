import { Field, VisaSponsorship, CurrentATS, OfficeLocation } from "../company_types/enums";
import { Company } from "../company_types/types";

/**
 * Companies that are part of Traditional Finance & Asset Management.
 * Goldman Sachs
 * JPMorgan Chase
 * Morgan Stanley
 * Citi
 * UBS
 * Deutsche Bank
 * BNP Paribas
 * HSBC
 * Wells Fargo
 * Barclays
 * Lloyds
 * NatWest Group
 * BlackRock
 * Vanguard
 * Pimco
 * Capital Group
 * Blackstone
 * Apollo
 * Ares
 * Neuberger Berman
 * State Street
 * MUFG
 * Schroders
 * Close Brothers
 * Jefferies
 * Phoenix Group
 * Legal & General
 */
export const traditionalFinance: Company[] = [
  {
    id: "goldman-sachs",
    name: "Goldman Sachs",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for engineering and quantitative roles in major hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.goldmansachs.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.goldmansachs.com/",
    notes: "Global investment bank with engineering-heavy trading and risk platforms.",
  },
  {
    id: "jpmorgan",
    name: "JPMorgan Chase",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for software, infrastructure, and quant roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.jpmorgan.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.jpmorganchase.com/",
    notes: "Global bank with large technology and quantitative engineering teams.",
  },
  {
    id: "morgan-stanley",
    name: "Morgan Stanley",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for specialized engineering and quant roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.morganstanley.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.morganstanley.com/",
    notes: "Investment bank with significant technology and analytics platforms.",
  },
  {
    id: "citi",
    name: "Citi",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for high-need engineering and quant roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://jobs.citi.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.citi.com/",
    notes: "Global bank with large markets, treasury, and services technology teams.",
  },
  {
    id: "ubs",
    name: "UBS",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist roles across major hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.ubs.com/global/en/careers.html" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.ubs.com/",
    notes: "Wealth management and investment bank with global engineering footprint.",
  },
  {
    id: "deutsche-bank",
    name: "Deutsche Bank",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specific engineering and quant roles.",
    },
    officeLocations: [
      OfficeLocation.Germany,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.db.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.db.com/",
    notes: "Global investment bank with markets, transaction banking, and technology teams.",
  },
  {
    id: "bnp-paribas",
    name: "BNP Paribas",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized roles; varies by country.",
    },
    officeLocations: [
      OfficeLocation.France,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://group.bnpparibas/en/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://group.bnpparibas/",
    notes: "European bank with corporate, investment banking, and securities services.",
  },
  {
    id: "hsbc",
    name: "HSBC",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for select engineering and risk roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.UnitedStates,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.hsbc.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.hsbc.com/",
    notes: "Global bank with retail, commercial, and markets businesses.",
  },
  {
    id: "wells-fargo",
    name: "Wells Fargo",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for high-need engineering roles in the US.",
    },
    officeLocations: [OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://www.wellsfargo.com/about/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.wellsfargo.com/",
    notes: "US bank with consumer, commercial, and markets technology teams.",
  },
  {
    id: "barclays",
    name: "Barclays",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialist roles; varies by location.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://search.jobs.barclays/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://home.barclays/",
    notes: "UK bank with investment banking and technology centers.",
  },
  {
    id: "lloyds",
    name: "Lloyds Banking Group",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Sponsorship limited; typically hires with existing work authorization in the UK.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.lloydsbankinggroup.com/careers.html" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.lloydsbankinggroup.com/",
    notes: "UK retail and commercial bank with digital banking teams.",
  },
  {
    id: "natwest",
    name: "NatWest Group",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Sponsorship limited and role-dependent in the UK.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://jobs.natwestgroup.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.natwestgroup.com/",
    notes: "UK bank with retail, commercial, and markets technology teams.",
  },
  {
    id: "blackrock",
    name: "BlackRock",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for Aladdin engineering and analytics roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.blackrock.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.blackrock.com/",
    notes: "Asset manager with large technology platform (Aladdin) and data teams.",
  },
  {
    id: "vanguard",
    name: "Vanguard",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for select technology roles in the US.",
    },
    officeLocations: [OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://www.vanguardjobs.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.vanguard.com/",
    notes: "Investment management firm with retail and institutional platforms.",
  },
  {
    id: "pimco",
    name: "PIMCO",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized investment and technology roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.pimco.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.pimco.com/",
    notes: "Fixed income investment manager with technology and analytics teams.",
  },
  {
    id: "capital-group",
    name: "Capital Group",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialized technology roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.capitalgroup.com/careers.html" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.capitalgroup.com/",
    notes: "Asset manager known for the American Funds and global technology teams.",
  },
  {
    id: "blackstone",
    name: "Blackstone",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized technology and investment roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.blackstone.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.blackstone.com/",
    notes: "Alternative asset manager with technology platforms across businesses.",
  },
  {
    id: "apollo",
    name: "Apollo",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist technology roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.apollo.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.apollo.com/",
    notes: "Alternative asset manager with credit, private equity, and insurance platforms.",
  },
  {
    id: "ares",
    name: "Ares Management",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for select roles; confirm per posting.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.aresmgmt.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.aresmgmt.com/",
    notes: "Alternative asset manager across credit, private equity, and real assets.",
  },
  {
    id: "neuberger-berman",
    name: "Neuberger Berman",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.nb.com/global/en/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.nb.com/",
    notes: "Investment manager with technology and data teams supporting multi-asset strategies.",
  },
  {
    id: "state-street",
    name: "State Street",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized roles; varies by region.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.statestreet.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.statestreet.com/",
    notes: "Custody bank and asset servicer with technology platforms like Alpha.",
  },
  {
    id: "mufg",
    name: "MUFG",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship depends on region and business unit.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://careers.mufgamericas.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.mufg.jp/english",
    notes: "Global bank with corporate, investment banking, and treasury services.",
  },
  {
    id: "schroders",
    name: "Schroders",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for select roles in the UK and Europe.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.Germany, OfficeLocation.France],
    careers: {
      careersUrl: { exists: true, url: "https://www.schroders.com/en/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.schroders.com/",
    notes: "Asset manager with technology, data, and quant teams.",
  },
  {
    id: "close-brothers",
    name: "Close Brothers",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Sponsorship uncommon; typically requires existing UK work authorization.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.closebrothers.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.closebrothers.com/",
    notes: "UK merchant banking group with lending and wealth businesses.",
  },
  {
    id: "jefferies",
    name: "Jefferies",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized roles in US/UK.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://careers.jefferies.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.jefferies.com/",
    notes: "Investment bank with public markets and investment banking technology needs.",
  },
  {
    id: "phoenix-group",
    name: "Phoenix Group",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Sponsorship not common; roles typically require UK work authorization.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.thephoenixgroup.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.thephoenixgroup.com/",
    notes: "UK savings and retirement business with technology and data teams.",
  },
  {
    id: "legal-and-general",
    name: "Legal & General",
    fields: [Field.TraditionalFinance],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Sponsorship limited; verify per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://careers.legalandgeneral.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.legalandgeneral.com/",
    notes: "Insurance, retirement, and investment business headquartered in the UK.",
  },
];
