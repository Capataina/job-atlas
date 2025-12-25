import { Field, VisaSponsorship, CurrentATS, OfficeLocation } from "../company_types/enums";
import { Company } from "../company_types/types";

/**
 * Companies that are part of Fintech, Payments, Banking Technology, and Crypto.
 * Monzo
 * Starling
 * Revolut
 * Wise
 * Zopa Bank
 * Kroo Bank
 * OakNorth
 * Allica Bank
 * LHV Bank
 * Funding Circle
 * Iwoca
 * YouLend
 * Moneybox
 * Freetrade
 * ClearScore
 * Cleo
 * Dojo
 * Stripe
 * Adyen
 * Checkout
 * GoCardless
 * Thredd
 * Yapily
 * Thought Machine
 * FNZ
 * Apron
 * Nsave
 * NewDay
 * Prima Insurance
 * Ki Insurance
 * Coinbase
 * Kraken
 * Crypto.com
 * Keyrock
 */
export const fintechCryptoPaymentsBankingTechnology: Company[] = [
  {
    id: "monzo",
    name: "Monzo",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Limited sponsorship; most roles expect UK work authorization.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.monzo.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.monzo.com/",
    notes: "UK digital bank offering current accounts and consumer finance.",
  },
  {
    id: "starling",
    name: "Starling Bank",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Limited sponsorship; typically requires UK work authorization.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.starlingbank.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.starlingbank.com/",
    notes: "UK digital bank with current accounts, SME banking, and payments.",
  },
  {
    id: "revolut",
    name: "Revolut",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for some roles across Europe and the US.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.France,
      OfficeLocation.Germany,
      OfficeLocation.Netherlands,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.revolut.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.revolut.com/",
    notes: "Global financial super-app covering payments, banking, and crypto.",
  },
  {
    id: "wise",
    name: "Wise",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist roles in EU/US/UK.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.wise.jobs/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://wise.com/",
    notes: "Cross-border payments and banking platform.",
  },
  {
    id: "zopa",
    name: "Zopa Bank",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Limited sponsorship; roles typically require UK work authorization.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.zopa.com/about/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.zopa.com/",
    notes: "UK digital bank offering savings, credit cards, and loans.",
  },
  {
    id: "kroo",
    name: "Kroo Bank",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Sponsorship limited; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.kroo.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.kroo.com/",
    notes: "UK challenger bank focused on current accounts.",
  },
  {
    id: "oaknorth",
    name: "OakNorth",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://www.oaknorth.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.oaknorth.com/",
    notes: "SME lender and credit intelligence platform.",
  },
  {
    id: "allica",
    name: "Allica Bank",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Sponsorship uncommon; UK work authorization typically required.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.allica.bank/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.allica.bank/",
    notes: "UK SME-focused bank providing lending and savings products.",
  },
  {
    id: "lhv",
    name: "LHV Bank",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship policies not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.lhv.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.lhv.com/",
    notes: "Bank offering payment and banking services; UK and European presence.",
  },
  {
    id: "funding-circle",
    name: "Funding Circle",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Sponsorship limited; roles often require UK work authorization.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://www.fundingcircle.com/uk/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.fundingcircle.com/",
    notes: "SME lending platform operating in the UK and US.",
  },
  {
    id: "iwoca",
    name: "Iwoca",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Sponsorship uncommon; roles typically UK-based.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.iwoca.co.uk/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.iwoca.co.uk/",
    notes: "SME lending platform headquartered in London.",
  },
  {
    id: "youlend",
    name: "YouLend",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.youlend.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.youlend.com/",
    notes: "Revenue-based financing platform for merchants and partners.",
  },
  {
    id: "moneybox",
    name: "Moneybox",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship policies not publicly specified.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.moneyboxapp.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.moneyboxapp.com/",
    notes: "UK savings and investment app.",
  },
  {
    id: "freetrade",
    name: "Freetrade",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://freetrade.io/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://freetrade.io/",
    notes: "UK commission-free investing platform.",
  },
  {
    id: "clearscore",
    name: "ClearScore",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.clearscore.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.clearscore.com/",
    notes: "Credit score and financial marketplace platform.",
  },
  {
    id: "cleo",
    name: "Cleo",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://web.meetcleo.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://web.meetcleo.com/",
    notes: "AI money app focused on budgeting and financial wellness.",
  },
  {
    id: "dojo",
    name: "Dojo",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.dojo.tech/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.dojo.tech/",
    notes: "Payments and card terminals provider for merchants.",
  },
  {
    id: "stripe",
    name: "Stripe",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for engineering roles across US and Europe.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
      OfficeLocation.Netherlands,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://stripe.com/jobs" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://stripe.com/",
    notes: "Global payments platform with developer-first products.",
  },
  {
    id: "adyen",
    name: "Adyen",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for key roles in Europe and the US.",
    },
    officeLocations: [
      OfficeLocation.Netherlands,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.France,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.adyen.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.adyen.com/",
    notes: "Global payments processor and financial technology platform.",
  },
  {
    id: "checkout",
    name: "Checkout.com",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialized roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
      OfficeLocation.UnitedStates,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.checkout.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.checkout.com/",
    notes: "Payments platform supporting global merchants.",
  },
  {
    id: "gocardless",
    name: "GoCardless",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist roles in the UK and Europe.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://gocardless.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://gocardless.com/",
    notes: "Account-to-account payments platform enabling bank debits.",
  },
  {
    id: "thredd",
    name: "Thredd",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
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
    notes: "Payments processing provider; public careers information not confirmed.",
  },
  {
    id: "yapily",
    name: "Yapily",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.yapily.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.yapily.com/",
    notes: "Open banking API provider.",
  },
  {
    id: "thought-machine",
    name: "Thought Machine",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized engineering roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.France,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.thoughtmachine.net/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.thoughtmachine.net/",
    notes: "Core banking technology provider with cloud-native platforms.",
  },
  {
    id: "fnz",
    name: "FNZ",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship varies by region; confirm per role.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.fnz.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.fnz.com/",
    notes: "Wealth management platform provider for financial institutions.",
  },
  {
    id: "apron",
    name: "Apron",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
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
    id: "nsave",
    name: "Nsave",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "No public information on sponsorship.",
    },
    officeLocations: [OfficeLocation.Unknown],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Public careers information not confirmed.",
  },
  {
    id: "newday",
    name: "NewDay",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.newday.co.uk/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.newday.co.uk/",
    notes: "Consumer credit and cards provider based in the UK.",
  },
  {
    id: "prima-insurance",
    name: "Prima Insurance",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "No public information on sponsorship.",
    },
    officeLocations: [OfficeLocation.Unknown],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Public careers information not confirmed.",
  },
  {
    id: "ki-insurance",
    name: "Ki Insurance",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://ki-insurance.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://ki-insurance.com/",
    notes: "Digital Lloyd's of London syndicate using algorithmic underwriting.",
  },
  {
    id: "coinbase",
    name: "Coinbase",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialist roles; varies by region.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
      OfficeLocation.Canada,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.coinbase.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.coinbase.com/",
    notes: "Crypto exchange and custody platform.",
  },
  {
    id: "kraken",
    name: "Kraken",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship policies vary by region; confirm per role.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.kraken.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.kraken.com/",
    notes: "Crypto exchange with global remote workforce.",
  },
  {
    id: "crypto-com",
    name: "Crypto.com",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://crypto.com/en/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://crypto.com/",
    notes: "Crypto exchange and payments platform.",
  },
  {
    id: "keyrock",
    name: "Keyrock",
    fields: [Field.FintechCryptoPaymentsBankingTechnology],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.Unknown],
    careers: {
      careersUrl: { exists: true, url: "https://keyrock.eu/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://keyrock.eu/",
    notes: "Digital asset liquidity provider and market maker.",
  },
];
