import { Field, OfficeLocation, Tier, VisaSponsorship } from "../company_types/enums";
import { Company } from "../company_types/types";

export const bigTechAndHyperscalers: Company[] = [
  {
    id: "alphabet",
    name: "Alphabet",
    field: Field.BigTechAndHyperscalers,
    tier: Tier.Tier1,
    visaSponsorship: VisaSponsorship.VeryHigh,
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.Canada, OfficeLocation.UnitedKingdom, OfficeLocation.Netherlands, OfficeLocation.Germany, OfficeLocation.France],
    companyUrl: "https://alphabet.com",
    notes: "Alphabet is a global technology holding company best known as the parent of Google, overseeing core internet infrastructure such as Search, YouTube, Android, Chrome, and Google Cloud, alongside frontier research and moonshot subsidiaries including DeepMind (AI research), Waymo (autonomous driving), Verily (health tech), and X (moonshot incubator). It operates at massive global scale, invests heavily in long-term research, and is widely regarded as one of the strongest environments for elite engineering, applied research, and internal mobility across domains.",
  },
  {
    id: "google",
    name: "Google",
    field: Field.BigTechAndHyperscalers,
    tier: Tier.Tier1,
    visaSponsorship: VisaSponsorship.VeryHigh,
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.Canada, OfficeLocation.UnitedKingdom, OfficeLocation.Netherlands, OfficeLocation.Germany, OfficeLocation.France],
    companyUrl: "https://google.com",
    notes: "Google is a global technology company operating some of the world’s most widely used consumer and enterprise platforms, including Search, YouTube, Android, Chrome, Gmail, Maps, and Google Cloud. It runs internet-scale production systems with billions of users, sets industry standards in distributed systems and developer tooling, and is a major driver of applied AI through products, infrastructure, and research integration. Google is widely regarded as a premier environment for large-scale systems engineering, data-intensive products, and long-term technical career growth.",
  },
];