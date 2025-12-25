import { Field, VisaSponsorship, CurrentATS, OfficeLocation } from "../company_types/enums";
import { Company } from "../company_types/types";

/**
 * Companies that are part of the Quant Trading, HFT & Market Infrastructure field.
 * Jane Street
 * Optiver
 * IMC Trading
 * Flow Traders
 * Jump Trading
 * DRW
 * Tower Research
 * Hudson River Trading
 * Citadel
 * Citadel Securities
 * Two Sigma
 * G-Research
 * XTX
 * WorldQuant
 * QRT
 * Squarepoint
 * Maven
 * Schonfeld
 * DV Trading
 * Mako
 * Brevan Howard
 * Balyasny (BAM)
 * Verition
 * Cubist Systematic
 * Winton
 * Arctic Lake
 * Bloomberg
 * CME Group
 * ICE
 * Cboe
 */
export const quantAndHighFrequencyTrading: Company[] = [
  {
    id: "jane-street",
    name: "Jane Street",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Consistent sponsorship for trading and engineering roles across hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.janestreet.com/join-jane-street/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.janestreet.com/",
    notes: "Quantitative trading firm with strong software and research focus.",
  },
  {
    id: "optiver",
    name: "Optiver",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Regular sponsorship for trading, research, and engineering in EU/US.",
    },
    officeLocations: [
      OfficeLocation.Netherlands,
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.optiver.com/working-at-optiver/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.optiver.com/",
    notes: "Market maker specializing in options and electronic trading.",
  },
  {
    id: "imc-trading",
    name: "IMC Trading",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Regular sponsorship for trading and engineering roles.",
    },
    officeLocations: [
      OfficeLocation.Netherlands,
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.imc.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.imc.com/",
    notes: "Global market maker with focus on low-latency trading and research.",
  },
  {
    id: "flow-traders",
    name: "Flow Traders",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for trading and engineering roles in core hubs.",
    },
    officeLocations: [
      OfficeLocation.Netherlands,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.flowtraders.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.flowtraders.com/",
    notes: "Liquidity provider specializing in ETPs and digital assets.",
  },
  {
    id: "jump-trading",
    name: "Jump Trading",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Regular sponsorship for research, trading, and engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.jumptrading.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.jumptrading.com/",
    notes: "Quantitative trading firm with focus on research and technology.",
  },
  {
    id: "drw",
    name: "DRW",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for specialized trading and engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://drw.com/work-at-drw" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://drw.com/",
    notes: "Diverse trading firm across asset classes with strong tech focus.",
  },
  {
    id: "tower-research",
    name: "Tower Research Capital",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for engineering and trading in key hubs.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.tower-research.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.tower-research.com/",
    notes: "Quant trading firm focusing on low-latency strategies.",
  },
  {
    id: "hudson-river-trading",
    name: "Hudson River Trading",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for research and engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.hudsonrivertrading.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.hudsonrivertrading.com/",
    notes: "Algorithmic trading firm with emphasis on research and systems engineering.",
  },
  {
    id: "citadel",
    name: "Citadel",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Regular sponsorship for investment, research, and engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.citadel.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.citadel.com/",
    notes: "Global alternative investment firm with systematic and fundamental strategies.",
  },
  {
    id: "citadel-securities",
    name: "Citadel Securities",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Regular sponsorship for trading and engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.citadelsecurities.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.citadelsecurities.com/",
    notes: "Market-making firm across asset classes with strong technology focus.",
  },
  {
    id: "two-sigma",
    name: "Two Sigma",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Consistent sponsorship for engineering and research roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.twosigma.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.twosigma.com/",
    notes: "Systematic investment manager using data science and technology.",
  },
  {
    id: "g-research",
    name: "G-Research",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for qualified research and engineering roles in the UK.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.gresearch.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.gresearch.com/",
    notes: "London-based quantitative research and technology firm.",
  },
  {
    id: "xtx-markets",
    name: "XTX Markets",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for specialized quant and engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://www.xtxmarkets.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.xtxmarkets.com/",
    notes: "Systematic liquidity provider with focus on FX and equities.",
  },
  {
    id: "worldquant",
    name: "WorldQuant",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for select research and engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.worldquant.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.worldquant.com/",
    notes: "Quant investment firm with distributed research teams.",
  },
  {
    id: "qrt",
    name: "Qube Research & Technologies",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for specialist quant and engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.France],
    careers: {
      careersUrl: { exists: true, url: "https://www.qube-rt.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.qube-rt.com/",
    notes: "Systematic trading firm with offices in London and Paris.",
  },
  {
    id: "squarepoint",
    name: "Squarepoint Capital",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for select quantitative and engineering roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.squarepoint-capital.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.squarepoint-capital.com/",
    notes: "Global investment management firm with systematic strategies.",
  },
  {
    id: "maven",
    name: "Maven Securities",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for select trading and engineering roles in London.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.mavensecurities.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.mavensecurities.com/",
    notes: "Proprietary trading firm headquartered in London.",
  },
  {
    id: "schonfeld",
    name: "Schonfeld",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized roles; varies by region.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.schonfeld.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.schonfeld.com/",
    notes: "Multi-manager investment firm with systematic and discretionary teams.",
  },
  {
    id: "dv-trading",
    name: "DV Trading",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not consistently advertised; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.Canada],
    careers: {
      careersUrl: { exists: true, url: "https://dvtrading.co/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://dvtrading.co/",
    notes: "Proprietary trading firm active across asset classes.",
  },
  {
    id: "mako",
    name: "Mako",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.mako.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.mako.com/",
    notes: "Options market maker based in London.",
  },
  {
    id: "brevan-howard",
    name: "Brevan Howard",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist roles in core hubs.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://www.brevanhoward.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.brevanhoward.com/",
    notes: "Global macro hedge fund with systematic teams.",
  },
  {
    id: "balyasny",
    name: "Balyasny Asset Management (BAM)",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for select systematic and engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.bamfunds.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.bamfunds.com/",
    notes: "Multi-manager investment firm with systematic and discretionary strategies.",
  },
  {
    id: "verition",
    name: "Verition",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialized roles in the US and UK.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://verition.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://verition.com/",
    notes: "Multi-strategy hedge fund with systematic teams.",
  },
  {
    id: "cubist-systematic",
    name: "Cubist Systematic Strategies",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized roles; part of Point72.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.point72.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.point72.com/",
    notes: "Systematic investment business within Point72.",
  },
  {
    id: "winton",
    name: "Winton",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist research and engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.winton.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.winton.com/",
    notes: "Systematic investment manager based in London.",
  },
  {
    id: "arctic-lake",
    name: "Arctic Lake",
    fields: [Field.QuantAndHighFrequencyTrading],
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
    notes: "Public careers information not confirmed.",
  },
  {
    id: "bloomberg",
    name: "Bloomberg",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for specialized engineering roles across hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
      OfficeLocation.Netherlands,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.bloomberg.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.bloomberg.com/company/",
    notes: "Financial data, news, and trading systems provider.",
  },
  {
    id: "cme-group",
    name: "CME Group",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for select engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.cmegroup.com/company/careers.html" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.cmegroup.com/",
    notes: "Derivatives marketplace operating futures and options exchanges.",
  },
  {
    id: "ice",
    name: "Intercontinental Exchange (ICE)",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized roles; confirm per posting.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.theice.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.theice.com/",
    notes: "Operator of exchanges, clearing houses, and data services including NYSE.",
  },
  {
    id: "cboe",
    name: "Cboe Global Markets",
    fields: [Field.QuantAndHighFrequencyTrading],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for select engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.cboe.com/about/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.cboe.com/",
    notes: "Exchange operator providing equities, options, and market data services.",
  },
];
