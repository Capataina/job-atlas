import { Field, VisaSponsorship, CurrentATS, OfficeLocation } from "../company_types/enums";
import { Company } from "../company_types/types";

/**
 * Companies that are part of the Systems, Hardware, Robotics & Deep Infrastructure field.
 * Graphcore
 * MediaTek
 * KLA
 * Analog Devices
 * Imagination
 * lowRISC
 * Riverlane
 * Quantinuum
 * Five AI (Bosch)
 * Humanoid Robotics
 */
export const systemsAndInfrastructure: Company[] = [
  {
    id: "graphcore",
    name: "Graphcore",
    fields: [Field.SystemsAndInfrastructure],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist silicon and systems roles.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://www.graphcore.ai/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.graphcore.ai/",
    notes: "AI accelerator and systems company focused on IPU hardware and software.",
  },
  {
    id: "mediatek",
    name: "MediaTek",
    fields: [Field.SystemsAndInfrastructure],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Regional sponsorship policies not publicly specified.",
    },
    officeLocations: [OfficeLocation.Unknown],
    careers: {
      careersUrl: { exists: true, url: "https://www.mediatek.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.mediatek.com/",
    notes: "Fabless semiconductor company designing SoCs for mobile and edge devices.",
  },
  {
    id: "kla",
    name: "KLA",
    fields: [Field.SystemsAndInfrastructure],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialized semiconductor roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.Germany],
    careers: {
      careersUrl: { exists: true, url: "https://www.kla.com/company/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.kla.com/",
    notes: "Semiconductor process control and inspection systems provider.",
  },
  {
    id: "analog-devices",
    name: "Analog Devices",
    fields: [Field.SystemsAndInfrastructure],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for critical analog, mixed-signal, and IC design roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.Germany],
    careers: {
      careersUrl: { exists: true, url: "https://www.analog.com/en/about-adi/careers.html" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.analog.com/",
    notes: "Analog, mixed-signal, and power management semiconductor company.",
  },
  {
    id: "imagination",
    name: "Imagination Technologies",
    fields: [Field.SystemsAndInfrastructure],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist GPU and IP roles.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.imaginationtech.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.imaginationtech.com/",
    notes: "GPU, CPU, and AI accelerator IP provider for semiconductors and devices.",
  },
  {
    id: "lowrisc",
    name: "lowRISC",
    fields: [Field.SystemsAndInfrastructure],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship policies not publicly specified.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://lowrisc.org/jobs/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://lowrisc.org/",
    notes: "Open-source silicon and RISC-V engineering organization based in Cambridge.",
  },
  {
    id: "riverlane",
    name: "Riverlane",
    fields: [Field.SystemsAndInfrastructure],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship policies not publicly specified.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.riverlane.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.riverlane.com/",
    notes: "Quantum computing software and error-correction company based in Cambridge.",
  },
  {
    id: "quantinuum",
    name: "Quantinuum",
    fields: [Field.SystemsAndInfrastructure],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialized quantum hardware and software roles.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://careers.quantinuum.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.quantinuum.com/",
    notes: "Quantum computing company formed by Honeywell Quantum Solutions and Cambridge Quantum.",
  },
  {
    id: "five-ai",
    name: "Five AI (Bosch)",
    fields: [Field.SystemsAndInfrastructure],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship depends on Bosch group policies and role location.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.bosch.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.bosch.com/",
    notes: "Autonomous driving company acquired by Bosch; roles typically listed on Bosch careers.",
  },
  {
    id: "humanoid-robotics",
    name: "Humanoid Robotics",
    fields: [Field.SystemsAndInfrastructure],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "No public information on sponsorship policies.",
    },
    officeLocations: [OfficeLocation.Unknown],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Public website and hiring details not confirmed.",
  },
];
