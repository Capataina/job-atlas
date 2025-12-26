import { Field, VisaSponsorship, CurrentATS, OfficeLocation } from "../company_types/enums";
import { Company } from "../company_types/types";

/**
 * Companies that are part of the AI and Machine Learning field.
 * OpenAI
 * Anthropic
 * Cohere
 * xAI
 * Mistral AI
 * Perplexity
 * ElevenLabs
 * DeepL
 * Synthesia
 * InstaDeep
 * Isomorphic Labs
 * Unlikely AI
 * Reflection AI
 * Faculty
 * Encord
 * Speechmatics
 * Writer
 * V7
 * Plumerai
 * Predictiva AI
 * WeBuildAI
 * Tomoro AI
 * AI Connect
 * Neuphonic
 * Quantexa
 */
export const aiAndMachineLearning: Company[] = [
  {
    id: "openai",
    name: "OpenAI",
    field: Field.AIAndMachineLearning,  
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors specialized US roles in research, engineering, and policy.",
    },
    officeLocations: [OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://openai.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Lever,
    },
    companyUrl: "https://openai.com/",
    notes: "AI research and deployment company building frontier models and products.",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors select roles across US and UK offices.",
    },
    officeLocations: [OfficeLocation.UnitedStates, OfficeLocation.UnitedKingdom, OfficeLocation.France, OfficeLocation.Germany],
    careers: {
      careersUrl: { exists: true, url: "https://www.anthropic.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Lever,
    },
    companyUrl: "https://www.anthropic.com/",
    notes: "AI safety and research company developing frontier language models.",
  },
  {
    id: "cohere",
    name: "Cohere",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for in-demand roles in North America.",
    },
    officeLocations: [OfficeLocation.Canada, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://cohere.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Lever,
    },
    companyUrl: "https://cohere.com/",
    notes: "Enterprise AI platform focused on large language models and retrieval.",
  },
  {
    id: "xai",
    name: "xAI",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship availability not broadly advertised; varies by role.",
    },
    officeLocations: [OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://boards.greenhouse.io/xai" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://x.ai/",
    notes: "AI research company building large-scale models and products.",
  },
  {
    id: "mistral-ai",
    name: "Mistral AI",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; depends on role and location.",
    },
    officeLocations: [OfficeLocation.France],
    careers: {
      careersUrl: { exists: true, url: "https://mistral.ai/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://mistral.ai/",
    notes: "Paris-based AI company building open and proprietary foundation models.",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://www.perplexity.ai/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.perplexity.ai/",
    notes: "AI-native search and answer engine company.",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for select engineering roles in core hubs.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://boards.eu.greenhouse.io/elevenlabs" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://elevenlabs.io/",
    notes: "Voice AI platform specializing in speech synthesis and dubbing.",
  },
  {
    id: "deepl",
    name: "DeepL",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.High,
      notes: "Sponsors specialized engineering and research roles in Europe and the US.",
    },
    officeLocations: [
      OfficeLocation.Germany,
      OfficeLocation.Netherlands,
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.deepl.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://www.deepl.com/",
    notes: "Translation and writing assistant company focused on neural language models.",
  },
  {
    id: "synthesia",
    name: "Synthesia",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship evaluated case-by-case for key roles.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://www.synthesia.io/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.synthesia.io/",
    notes: "AI video generation platform using synthetic presenters and narration.",
  },
  {
    id: "instadeep",
    name: "InstaDeep",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialized roles; varies by region.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.France],
    careers: {
      careersUrl: { exists: true, url: "https://www.instadeep.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.instadeep.com/",
    notes: "Applied AI company (part of BioNTech) focused on decision-making systems.",
  },
  {
    id: "isomorphic-labs",
    name: "Isomorphic Labs",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for specialized scientific and engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://isomorphiclabs.com/careers" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://isomorphiclabs.com/",
    notes: "Alphabet subsidiary applying AI to drug discovery and computational biology.",
  },
  {
    id: "unlikely-ai",
    name: "Unlikely AI",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://jobs.unlikely.ai/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.unlikely.ai/",
    notes: "London-based AI company researching reasoning and safer model architectures.",
  },
  {
    id: "reflection-ai",
    name: "Reflection AI",
    field: Field.AIAndMachineLearning,
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
    companyUrl: "https://reflection.ai/",
    notes: "Public website and hiring details not confirmed.",
  },
  {
    id: "faculty",
    name: "Faculty",
      field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialized roles in the UK.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://jobs.ashbyhq.com/faculty" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Ashby,
    },
    companyUrl: "https://faculty.ai/",
    notes: "UK-based AI consultancy and product company focused on applied ML.",
  },
  {
    id: "encord",
    name: "Encord",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialized engineering roles.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://jobs.ashbyhq.com/Encord" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://encord.com/",
    notes: "Data-centric AI platform for labeling, curation, and model evaluation.",
  },
  {
    id: "speechmatics",
    name: "Speechmatics",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship available for select roles; varies by location.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://apply.workable.com/speechmatics/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.speechmatics.com/",
    notes: "Speech recognition company providing multilingual ASR models.",
  },
  {
    id: "writer",
    name: "Writer",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedStates],
    careers: {
      careersUrl: { exists: true, url: "https://jobs.ashbyhq.com/Writer" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://writer.com/",
    notes: "Enterprise generative AI platform for content governance and writing.",
  },
  {
    id: "v7",
    name: "V7",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom],
    careers: {
      careersUrl: { exists: true, url: "https://boards.eu.greenhouse.io/v7labs" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Greenhouse,
    },
    companyUrl: "https://www.v7labs.com/",
    notes: "Data engine for vision models covering labeling, automation, and evaluation.",
  },
  {
    id: "plumerai",
    name: "Plumerai",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Unknown,
      notes: "Sponsorship not publicly specified; confirm per role.",
    },
    officeLocations: [OfficeLocation.UnitedKingdom, OfficeLocation.Netherlands],
    careers: {
      careersUrl: { exists: true, url: "https://plumerai.recruitee.com/" },
      canCreateAccountOnCareersSite: false,
      ATS: CurrentATS.Other,
    },
    companyUrl: "https://www.plumerai.com/",
    notes: "TinyML company building efficient inference for edge devices.",
  },
  {
    id: "predictiva-ai",
    name: "Predictiva AI",
    field: Field.AIAndMachineLearning,
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
    notes: "Public website and hiring details not confirmed.",
  },
  {
    id: "webuildai",
    name: "WeBuildAI",
    field: Field.AIAndMachineLearning,
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
    notes: "Public website and hiring details not confirmed.",
  },
  {
    id: "tomoro-ai",
    name: "Tomoro AI",
    field: Field.AIAndMachineLearning,
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
    notes: "Public website and hiring details not confirmed.",
  },
  {
    id: "ai-connect",
    name: "AI Connect",
    field: Field.AIAndMachineLearning,
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
    notes: "Public website and hiring details not confirmed.",
  },
  {
    id: "neuphonic",
    name: "Neuphonic",
    field: Field.AIAndMachineLearning,
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
    notes: "Public website and hiring details not confirmed.",
  },
  {
    id: "quantexa",
    name: "Quantexa",
    field: Field.AIAndMachineLearning,
    visaSponsorship: {
      likelihood: VisaSponsorship.Medium,
      notes: "Sponsorship considered for specialized roles across hubs.",
    },
    officeLocations: [
      OfficeLocation.UnitedKingdom,
      OfficeLocation.UnitedStates,
      OfficeLocation.Canada,
    ],
    careers: {
      careersUrl: { exists: true, url: "https://www.quantexa.com/careers/" },
      canCreateAccountOnCareersSite: true,
      ATS: CurrentATS.Unknown,
    },
    companyUrl: "https://www.quantexa.com/",
    notes: "Decision intelligence platform company serving financial services and public sector.",
  },
];
