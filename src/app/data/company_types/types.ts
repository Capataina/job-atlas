import { CurrentATS, Field, OfficeLocation, VisaSponsorship } from "./enums";

export type Careers =
  | {
      careersUrl: { exists: true; url: string };
      canCreateAccountOnCareersSite: boolean;
      ATS: CurrentATS;
    }
  | {
      careersUrl: { exists: false; reason: "No careers page found." };
      canCreateAccountOnCareersSite: false;
      ATS: CurrentATS.Unknown;
    };

export type Company = {
  id: string;
  name: string;
  field: Field;
  visaSponsorship: {
    likelihood: VisaSponsorship;
    notes: string;
  };
  officeLocations: OfficeLocation[];
  careers: Careers;
  companyUrl: string;
  notes: string;
};
