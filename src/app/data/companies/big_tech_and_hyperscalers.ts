import { Field, VisaSponsorship, CurrentATS, OfficeLocation } from "../company_types/enums";
import { Company } from "../company_types/types";

/**
 * Companies that are part of the Big Tech and Hyperscalers field.
 * Google
 * DeepMind
 * Microsoft
 * Amazon
 * AWS
 * Apple
 * Meta
 * IBM
 * ARM
 * NVIDIA
 * AMD
 * Qualcomm
 * Samsung
 * Huawei
 * HP
 * TikTok
 * ByteDance
 * Salesforce
 * Oracle
 * Adobe
 * Cisco
 * LinkedIn
 * Uber
 * Waymo
 * Spotify
 * Snap
 * Canonical
 * GitHub
 * Woven by Toyota
 */
export const bigTechAndHyperscalers: Company[] = [
  {
    id: "google",
    name: "Google",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Established history of sponsoring skilled worker visas across major hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.google.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.google.com/",
    notes: "Search, ads, cloud, and devices; heavy investment in core systems and AI research.",
  },
  {
    id: "deepmind",
    name: "DeepMind",
    fields: [Field.BigTechAndHyperscalers, Field.AIAndMachineLearning],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Regularly sponsors research and engineering talent across core locations.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://deepmind.google/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.deepmind.com/",
    notes: "Alphabet AI research lab focused on fundamental research and applied ML.",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Established history of sponsoring skilled worker visas across major hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://jobs.careers.microsoft.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.microsoft.com/",
    notes: "Cloud, OS, productivity, and developer infrastructure with global engineering hubs.",
  },
  {
    id: "amazon",
    name: "Amazon",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Consistent sponsorship for high-demand tech roles across regions.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.amazon.jobs/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.amazon.com/",
    notes: "Consumer, logistics, and cloud infrastructure roles at large scale.",
  },
  {
    id: "aws",
    name: "AWS",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Consistent sponsorship for cloud infrastructure talent across regions.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.amazon.jobs/en/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.amazon.com/",
    notes:
      "Cloud services provider focused on distributed systems, networking, and developer tooling.",
  },
  {
    id: "apple",
    name: "Apple",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Regularly sponsors specialized hardware, systems, and software roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://jobs.apple.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.apple.com/",
    notes: "Hardware, software, and services roles with emphasis on devices and platforms.",
  },
  {
    id: "meta",
    name: "Meta",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Consistent sponsorship for software and research roles across major hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.metacareers.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.meta.com/",
    notes: "Social, AR/VR, and infrastructure engineering at global scale.",
  },
  {
    id: "ibm",
    name: "IBM",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for specialized engineering and consulting roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.ibm.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.ibm.com/",
    notes: "Hybrid cloud, AI, consulting, and research with long-running enterprise footprint.",
  },
  {
    id: "arm",
    name: "ARM",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors specialized silicon and software engineering roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.arm.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.arm.com/",
    notes: "CPU and IP design with focus on low-power architectures and tooling.",
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    fields: [Field.BigTechAndHyperscalers, Field.AIAndMachineLearning],
    visaSponsorship: {
      likelihood: VisaSponsorship.VeryHigh,
      notes: "Active sponsorship for specialized hardware, systems, and AI talent.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.nvidia.com/en-us/about-nvidia/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.nvidia.com/",
    notes: "GPU, systems, and AI platform company with strong research and product focus.",
  },
  {
    id: "amd",
    name: "AMD",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors skilled roles across CPU, GPU, and software engineering.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.amd.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.amd.com/",
    notes: "CPU, GPU, and data center silicon with software optimization teams.",
  },
  {
    id: "qualcomm",
    name: "Qualcomm",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for core silicon, wireless, and AI product teams.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.qualcomm.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.qualcomm.com/",
    notes: "Wireless, mobile compute, and automotive silicon with strong IP portfolio.",
  },
  {
    id: "samsung",
    name: "Samsung",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regional sponsorship for semiconductor, devices, and software roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.samsung.com/us/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.samsung.com/",
    notes: "Consumer electronics, semiconductor, and mobile engineering across global labs.",
  },
  {
    id: "huawei",
    name: "Huawei",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship depends on region due to regulatory and export controls.",
    },
    officeLocations: [
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.huawei.com/en/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.huawei.com/",
    notes: "Telecom infrastructure, devices, and cloud services with regional R&D centers.",
  },
  {
    id: "hp",
    name: "HP",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship varies by business unit and region.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://jobs.hp.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.hp.com/",
    notes: "PCs, printing, and related services with global sales and engineering offices.",
  },
  {
    id: "tiktok",
    name: "TikTok",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors specialized engineering and safety roles across major hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.tiktok.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.tiktok.com/",
    notes: "Short-form video platform with large-scale content, ads, and safety engineering.",
  },
  {
    id: "bytedance",
    name: "ByteDance",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors engineering roles for global products and infrastructure.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://jobs.bytedance.com/en" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.bytedance.com/",
    notes:
      "Parent company of TikTok with platforms spanning content, gaming, and enterprise tools.",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsorship available for core product, platform, and infrastructure roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
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
    notes: "CRM and platform company with strong presence in enterprise cloud and developer tools.",
  },
  {
    id: "oracle",
    name: "Oracle",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for database, cloud, and applications engineering roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.oracle.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.oracle.com/",
    notes: "Databases, cloud infrastructure, and enterprise applications.",
  },
  {
    id: "adobe",
    name: "Adobe",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors creative cloud, document services, and platform engineering roles.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.adobe.com/us/en" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.adobe.com/",
    notes: "Creative and document cloud products with strong focus on design and ML.",
  },
  {
    id: "cisco",
    name: "Cisco",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Network, security, and collaboration roles with sponsorship options in major hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://jobs.cisco.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.cisco.com/",
    notes: "Networking, security, and collaboration platforms with large enterprise footprint.",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Consistently sponsors software and data roles across core locations.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.linkedin.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.linkedin.com/",
    notes: "Professional network with talent marketplace, ads, and learning products.",
  },
  {
    id: "uber",
    name: "Uber",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors high-need engineering roles; varies by city and team.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.uber.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.uber.com/",
    notes: "Mobility, delivery, and logistics platform with strong marketplace engineering.",
  },
  {
    id: "waymo",
    name: "Waymo",
    fields: [Field.BigTechAndHyperscalers, Field.AIAndMachineLearning],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized autonomy and systems roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://waymo.com/joinus/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Lever,
    },
    companyUrl: "https://waymo.com/",
    notes: "Autonomous driving technology company spun out of Google X.",
  },
  {
    id: "spotify",
    name: "Spotify",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors high-need engineering and research roles in core hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Netherlands,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.lifeatspotify.com/jobs" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://www.spotify.com/",
    notes: "Audio streaming company with investments in personalization, ads, and creator tools.",
  },
  {
    id: "snap",
    name: "Snap",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for select engineering roles; varies by region.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.snap.com/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://www.snap.com/",
    notes: "AR camera company behind Snapchat with ad tech and cloud services.",
  },
  {
    id: "canonical",
    name: "Canonical",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Remote-first hiring; sponsorship considered for key engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://canonical.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://canonical.com/",
    notes: "Publisher of Ubuntu, hiring globally for open source and cloud tooling.",
  },
  {
    id: "github",
    name: "GitHub",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors specialized roles, primarily in the US, Canada, and UK.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
      OfficeLocation.UnitedKingdom,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://github.careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://github.com/",
    notes: "Developer platform company focused on collaboration, CI/CD, and code security.",
  },
  {
    id: "woven-by-toyota",
    name: "Woven by Toyota",
    fields: [Field.BigTechAndHyperscalers],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized autonomy and platform roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://www.woven.toyota/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Lever,
    },
    companyUrl: "https://www.woven.toyota/",
    notes: "Toyota's software and autonomy arm building mobility and smart city platforms.",
  },
];
