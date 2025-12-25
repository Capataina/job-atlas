import { Field, VisaSponsorship, CurrentATS, OfficeLocation } from "../company_types/enums";
import { Company } from "../company_types/types";

/**
 * Companies that are part of Consulting & Professional Services (non-recruitment).
 * McKinsey
 * BCG
 * Deloitte
 * PwC
 * EY
 * KPMG
 * Accenture
 * Capgemini
 * CGI
 * Expleo
 * Reply
 * Solirius Reply
 * Softwire
 * DXC
 * Alten
 */
export const consultingAndProfessionalServices: Company[] = [
  {
    id: "mckinsey",
    name: "McKinsey",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist tech roles; varies by office.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.mckinsey.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.mckinsey.com/",
    notes: "Strategy and implementation consulting with digital and analytics practices.",
  },
  {
    id: "bcg",
    name: "Boston Consulting Group (BCG)",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialist tech roles; varies by office.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.bcg.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Proprietary,
    },
    companyUrl: "https://www.bcg.com/",
    notes: "Global strategy firm with digital, engineering, and data teams (BCG X).",
  },
  {
    id: "deloitte",
    name: "Deloitte",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship varies by member firm and role.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
      OfficeLocation.Canada,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://apply.deloitte.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.deloitte.com/",
    notes: "Professional services network with technology and advisory practices.",
  },
  {
    id: "pwc",
    name: "PwC",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship depends on territory and practice; confirm per role.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
      OfficeLocation.Canada,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.pwc.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.pwc.com/",
    notes: "Professional services firm with assurance, tax, and consulting practices.",
  },
  {
    id: "ey",
    name: "EY",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship varies by member firm; confirm per role.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
      OfficeLocation.Canada,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.ey.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.ey.com/",
    notes: "Professional services firm with consulting and technology practices.",
  },
  {
    id: "kpmg",
    name: "KPMG",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship varies by member firm; confirm per role.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
      OfficeLocation.Canada,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.kpmgcareers.co.uk/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://home.kpmg/",
    notes: "Professional services firm with consulting and technology teams.",
  },
  {
    id: "accenture",
    name: "Accenture",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Regular sponsorship for technology and consulting roles in major hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
      OfficeLocation.Canada,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.accenture.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.accenture.com/",
    notes: "Technology and consulting services firm with global delivery network.",
  },
  {
    id: "capgemini",
    name: "Capgemini",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship varies by region; confirm per role.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.capgemini.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.capgemini.com/",
    notes: "Consulting and IT services firm with cloud and engineering practices.",
  },
  {
    id: "cgi",
    name: "CGI",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialized roles; varies by region.",
    },
    officeLocations: [
      OfficeLocation.Canada,
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.France,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.cgi.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.cgi.com/",
    notes: "IT and business consulting services with government and commercial clients.",
  },
  {
    id: "expleo",
    name: "Expleo",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.France, OfficeLocation.UnitedKingdom, OfficeLocation.Germany],
    careers: {
      careersUrl: { exists: true, url: "https://careers.expleo.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://expleo.com/",
    notes: "Engineering, quality, and technology consulting firm.",
  },
  {
    id: "reply",
    name: "Reply",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship varies by country; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.Germany, OfficeLocation.France],
    careers: {
      careersUrl: { exists: true, url: "https://www.reply.com/en/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.reply.com/",
    notes: "Consulting and systems integration network with specialist brands.",
  },
  {
    id: "solirius-reply",
    name: "Solirius Reply",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "No public information on sponsorship; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Consulting brand within Reply; public careers page not confirmed.",
  },
  {
    id: "softwire",
    name: "Softwire",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Low,
      notes: "Sponsorship limited; roles typically require UK work authorization.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.softwire.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.softwire.com/",
    notes: "UK software consultancy delivering bespoke systems.",
  },
  {
    id: "dxc",
    name: "DXC Technology",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized roles; varies by region.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Germany,
      OfficeLocation.France,
      OfficeLocation.Canada,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://careers.dxc.com/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Workday,
    },
    companyUrl: "https://www.dxc.com/",
    notes: "IT services and consulting provider.",
  },
  {
    id: "alten",
    name: "Alten",
    fields: [Field.COnsultingAndProfessionalServices],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship varies by country; confirm per role.",
    },
    officeLocations: [OfficeLocation.France, OfficeLocation.UnitedKingdom, OfficeLocation.Germany],
    careers: {
      careersUrl: { exists: true, url: "https://www.alten.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.alten.com/",
    notes: "Engineering and technology consulting firm.",
  },
];
