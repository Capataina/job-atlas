import { Field, VisaSponsorship, CurrentATS, OfficeLocation } from "../company_types/enums";
import { Company } from "../company_types/types";

/**
 * Companies that are part of the Developer Platforms, Cloud, Data & Infra SaaS field.
 * Cloudflare
 * Databricks
 * Snowflake
 * MongoDB
 * Elastic
 * Redis
 * Snyk
 * Okta
 * Palo Alto Networks
 * Fortinet
 * Check Point
 * Zscaler
 * ServiceNow
 * Splunk
 * Vercel
 * MathWorks
 * Dataiku
 * Automata
 * Proton
 * Luminance
 * OpenText
 * InterSystems
 * Matillion
 * Zendesk
 */
export const developerCloudAndDataSaaS: Company[] = [
  {
    id: "cloudflare",
    name: "Cloudflare",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for specialized engineering roles across major hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.cloudflare.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.cloudflare.com/",
    notes: "Global cloud network and security platform for developers and enterprises.",
  },
  {
    id: "databricks",
    name: "Databricks",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for engineering roles in US and Europe.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.databricks.com/company/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://www.databricks.com/",
    notes: "Lakehouse platform company providing data, AI, and ML tooling.",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors cloud data roles across North America and Europe.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.snowflake.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.snowflake.com/",
    notes: "Cloud data platform offering storage, compute, and data sharing services.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for engineering roles across major hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.mongodb.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://www.mongodb.com/",
    notes: "Document database company with managed services and developer tooling.",
  },
  {
    id: "elastic",
    name: "Elastic",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors distributed teams across North America and Europe.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.elastic.co/about/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://www.elastic.co/",
    notes: "Search, observability, and security platform built on the Elastic Stack.",
  },
  {
    id: "redis",
    name: "Redis",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialized roles; varies by region.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://redis.io/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://redis.io/",
    notes: "In-memory data platform company behind Redis OSS and managed services.",
  },
  {
    id: "snyk",
    name: "Snyk",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for key engineering roles in US/UK/Canada.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://snyk.io/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://snyk.io/",
    notes: "Developer security platform for code, dependencies, containers, and IaC.",
  },
  {
    id: "okta",
    name: "Okta",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for identity engineering roles in core hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.okta.com/company/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.okta.com/",
    notes: "Identity and access management platform for workforce and customer IAM.",
  },
  {
    id: "palo-alto-networks",
    name: "Palo Alto Networks",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for high-need security engineering roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.paloaltonetworks.com/company/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.paloaltonetworks.com/",
    notes: "Cybersecurity platform company spanning network, cloud, and endpoint security.",
  },
  {
    id: "fortinet",
    name: "Fortinet",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship varies by region; available for specialized security roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.France,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.fortinet.com/corporate/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.fortinet.com/",
    notes: "Network security and firewall company with broad product portfolio.",
  },
  {
    id: "check-point",
    name: "Check Point",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not consistently advertised; confirm per role.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.checkpoint.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.checkpoint.com/",
    notes: "Cybersecurity company known for network security, cloud, and endpoint products.",
  },
  {
    id: "zscaler",
    name: "Zscaler",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for in-demand cloud security roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.zscaler.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.zscaler.com/",
    notes: "Cloud security company delivering secure access service edge (SASE) products.",
  },
  {
    id: "servicenow",
    name: "ServiceNow",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for platform and infrastructure roles in major hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.servicenow.com/careers.html" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.servicenow.com/",
    notes: "Workflow automation and platform company serving enterprise customers.",
  },
  {
    id: "splunk",
    name: "Splunk",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for specialized observability and security roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.splunk.com/en_us/careers.html" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.splunk.com/",
    notes: "Observability and security analytics platform company.",
  },
  {
    id: "vercel",
    name: "Vercel",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Remote-first hiring; sponsorship varies by role and location.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://vercel.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://vercel.com/",
    notes: "Frontend cloud platform for building, deploying, and hosting web applications.",
  },
  {
    id: "mathworks",
    name: "MathWorks",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for specialized engineering roles in US and Europe.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: {
        exists: true,
        url: "https://www.mathworks.com/company/jobs/opportunities.html",
      },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.mathworks.com/",
    notes: "MATLAB and Simulink tools provider for engineering and scientific computing.",
  },
  {
    id: "dataiku",
    name: "Dataiku",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for select roles in Europe and North America.",
    },
    officeLocations: [
      OfficeLocation.France,
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.dataiku.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://www.dataiku.com/",
    notes: "Data science and MLOps platform for enterprise analytics and AI workflows.",
  },
  {
    id: "automata",
    name: "Automata",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
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
    id: "proton",
    name: "Proton",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.Unknown],
    careers: {
      careersUrl: { exists: true, url: "https://careers.proton.me/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Lever,
    },
    companyUrl: "https://proton.me/",
    notes: "Privacy-focused email, VPN, and cloud services provider.",
  },
  {
    id: "luminance",
    name: "Luminance",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.luminance.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.luminance.com/",
    notes: "AI platform for document review and legal workflows.",
  },
  {
    id: "opentext",
    name: "OpenText",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized roles; varies by region.",
    },
    officeLocations: [
      OfficeLocation.Canada,
      OfficeLocation.UnitedStates,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.opentext.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.opentext.com/",
    notes: "Enterprise information management and content services company.",
  },
  {
    id: "intersystems",
    name: "InterSystems",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialized healthcare and data platform roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.intersystems.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.intersystems.com/",
    notes: "Data platform and healthcare technology company known for IRIS and TrakCare.",
  },
  {
    id: "matillion",
    name: "Matillion",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://www.matillion.com/company/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://www.matillion.com/",
    notes: "Data integration and transformation platform for cloud data warehouses.",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    field: Field.DeveloperCloudandDataSaaS,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for select engineering roles; varies by region.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
      OfficeLocation.Netherlands,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://jobs.zendesk.com/us/en" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.zendesk.com/",
    notes: "Customer experience and support software company.",
  },
];
