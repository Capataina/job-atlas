import { Field, VisaSponsorship, CurrentATS, OfficeLocation } from "../company_types/enums";
import { Company } from "../company_types/types";

/**
 * Recruiters & Talent Intermediaries (not employers).
 * RedTech
 * Client Server
 * Lorien
 * Noir
 * Prism Digital
 * Realm
 * SEEKR
 * Platform
 * Intellect
 * mthree
 * Harnham
 * Haystack
 * Jack & Jill
 * Humand Talent
 * Oho Group
 * Experis
 * Opus
 * Tria
 * SGI
 * Spectrum IT
 * Premier Group
 * Primis
 * Understanding
 * Anson McCade
 * IC Resources
 * MicroTech Global
 * Morgan McKinley
 * Talan
 * Oliver James
 * Fruition Group
 * Principle Rec
 * Mondrian Alpha
 * Hunter Bond
 * eFinancialCareers
 * Selby Jennings
 * Fourier London
 * Radley James
 * Oxford Knight
 * Durlston Partners
 * Linux Recruit
 * Saragossa
 * Tempest Vane
 * McGregor Boyall
 * Albert Bow
 * Paragon Alpha
 * Oliver Bernard
 * RJC
 * Quant Capital
 * Referment
 * Stanford Black
 * Huxley
 * Harrington Starr
 */
export const recruitersAndTalentAcquisition: Company[] = [
  {
    id: "redtech",
    name: "RedTech",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "client-server",
    name: "Client Server",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.client-server.com/",
    notes: "Technology recruitment agency.",
  },
  {
    id: "lorien",
    name: "Lorien",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.lorienglobal.com/",
    notes: "Technology and digital recruitment.",
  },
  {
    id: "noir",
    name: "Noir",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.noirconsulting.co.uk/",
    notes: "IT recruitment agency.",
  },
  {
    id: "prism-digital",
    name: "Prism Digital",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.prism-digital.com/",
    notes: "Cloud and DevOps recruitment.",
  },
  {
    id: "realm",
    name: "Realm",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.realmrecruit.com/",
    notes: "Recruitment consultancy.",
  },
  {
    id: "seekr",
    name: "SEEKR",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "platform",
    name: "Platform",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "intellect",
    name: "Intellect",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "mthree",
    name: "mthree",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Talent program provider; sponsorship varies by client placement.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://mthree.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://mthree.com/",
    notes: "Consultancy placing grads and technologists into client teams.",
  },
  {
    id: "harnham",
    name: "Harnham",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.harnham.com/",
    notes: "Data and analytics recruitment.",
  },
  {
    id: "haystack",
    name: "Haystack",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Recruiter/job platform; not an employer.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.haystackapp.io/",
    notes: "Tech job discovery platform.",
  },
  {
    id: "jack-and-jill",
    name: "Jack & Jill",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "humand-talent",
    name: "Humand Talent",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "oho-group",
    name: "Oho Group",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.oho.co.uk/",
    notes: "STEM recruitment agency.",
  },
  {
    id: "experis",
    name: "Experis",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Staffing provider; sponsorship varies by engagement.",
    },
    officeLocations: [
      OfficeLocation.UnitedStates,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.Canada,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.experis.com/careers" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.experis.com/",
    notes: "IT staffing and talent solutions (ManpowerGroup).",
  },
  {
    id: "opus",
    name: "Opus",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.opustalentsolutions.com/",
    notes: "Tech recruitment agency.",
  },
  {
    id: "tria",
    name: "Tria",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "sgi",
    name: "SGI",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "spectrum-it",
    name: "Spectrum IT",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "premier-group",
    name: "Premier Group",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.pg-rec.com/",
    notes: "Technology and creative recruitment.",
  },
  {
    id: "primis",
    name: "Primis",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "understanding-recruitment",
    name: "Understanding Recruitment",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: {
        exists: true,
        url: "https://www.understandingrecruitment.co.uk/careers-with-us",
      },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.understandingrecruitment.co.uk/",
    notes: "Technology recruitment agency.",
  },
  {
    id: "anson-mccade",
    name: "Anson McCade",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.ansonmccade.com/",
    notes: "Technology and finance recruitment.",
  },
  {
    id: "ic-resources",
    name: "IC Resources",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.Germany],
    careers: {
      careersUrl: { exists: true, url: "https://ic-resources.com/careers/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://ic-resources.com/",
    notes: "Semiconductor and electronics recruitment.",
  },
  {
    id: "microtech-global",
    name: "MicroTech Global",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.microtech-global.com/",
    notes: "Semiconductor recruitment.",
  },
  {
    id: "morgan-mckinley",
    name: "Morgan McKinley",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://www.morganmckinley.com/join-us" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.morganmckinley.com/",
    notes: "Recruitment and talent solutions.",
  },
  {
    id: "talan",
    name: "Talan",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Consulting/talent; sponsorship varies by role.",
    },
    officeLocations: [OfficeLocation.France, OfficeLocation.UnitedKingdom, OfficeLocation.Canada],
    careers: {
      careersUrl: { exists: true, url: "https://talan.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://talan.com/",
    notes: "Consulting and technology services with staffing components.",
  },
  {
    id: "oliver-james",
    name: "Oliver James",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.Germany, OfficeLocation.France],
    careers: {
      careersUrl: { exists: true, url: "https://www.oliverjames.com/join-us" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.oliverjames.com/",
    notes: "Insurance and financial services recruitment.",
  },
  {
    id: "fruition-group",
    name: "Fruition Group",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "principle-rec",
    name: "Principle Rec",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "mondrian-alpha",
    name: "Mondrian Alpha",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.mondrian-alpha.com/",
    notes: "Systematic and tech recruitment.",
  },
  {
    id: "hunter-bond",
    name: "Hunter Bond",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.hunterbond.com/",
    notes: "Tech and finance recruitment.",
  },
  {
    id: "efinancialcareers",
    name: "eFinancialCareers",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Job board; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.efinancialcareers.com/",
    notes: "Finance and tech job board.",
  },
  {
    id: "selby-jennings",
    name: "Selby Jennings",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.Germany,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.selbyjennings.com/join-us" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.selbyjennings.com/",
    notes: "Financial sciences and technology recruitment.",
  },
  {
    id: "fourier-london",
    name: "Fourier London",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://fourier.london/",
    notes: "Quant and tech recruitment.",
  },
  {
    id: "radley-james",
    name: "Radley James",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.radleyjames.com/",
    notes: "Technology and finance recruitment.",
  },
  {
    id: "oxford-knight",
    name: "Oxford Knight",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.oxfordknight.co.uk/",
    notes: "Quant and software recruitment.",
  },
  {
    id: "durlston-partners",
    name: "Durlston Partners",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.durlstonpartners.com/",
    notes: "Quant, tech, and data recruitment.",
  },
  {
    id: "linux-recruit",
    name: "Linux Recruit",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://linuxrecruit.co.uk/",
    notes: "DevOps and Linux recruitment.",
  },
  {
    id: "saragossa",
    name: "Saragossa",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.saragossa.co.uk/",
    notes: "Technology recruitment.",
  },
  {
    id: "tempest-vane",
    name: "Tempest Vane",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "mcgregor-boyall",
    name: "McGregor Boyall",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://www.mcgregor-boyall.com/join-us" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.mcgregor-boyall.com/",
    notes: "Technology and change recruitment.",
  },
  {
    id: "albert-bow",
    name: "Albert Bow",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "paragon-alpha",
    name: "Paragon Alpha",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.paragonalpha.com/",
    notes: "Systematic trading recruitment.",
  },
  {
    id: "oliver-bernard",
    name: "Oliver Bernard",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.oliverbernard.co.uk/",
    notes: "Technology recruitment.",
  },
  {
    id: "rjc",
    name: "RJC",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "",
    notes: "Recruitment firm.",
  },
  {
    id: "quant-capital",
    name: "Quant Capital",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.quant-capital.co.uk/",
    notes: "Quant and FinTech recruitment.",
  },
  {
    id: "referment",
    name: "Referment",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://referment.com/",
    notes: "Referral-based recruitment platform.",
  },
  {
    id: "stanford-black",
    name: "Stanford Black",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.stanfordblack.com/",
    notes: "Technology and quant recruitment.",
  },
  {
    id: "huxley",
    name: "Huxley",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.Germany,
      OfficeLocation.France,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.huxley.com/en/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.huxley.com/",
    notes: "STEM recruitment brand within SThree.",
  },
  {
    id: "harrington-starr",
    name: "Harrington Starr",
    fields: [Field.RecruitersAndTalentAcquisition],
    visaSponsorship: { likelihood: VisaSponsorship.Unknown, notes: "Recruiter; not an employer." },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: false, reason: "No careers page found." },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.harringtonstarr.com/",
    notes: "FinTech recruitment agency.",
  },
];
