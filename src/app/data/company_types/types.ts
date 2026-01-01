import { Field, OfficeLocation, Tier, VisaSponsorship } from "./enums";


export type Company = {
  id: string;
  name: string;
  field: Field;
  tier: Tier;
  visaSponsorship: VisaSponsorship;
  officeLocations: OfficeLocation[];
  companyUrl: string;
  notes: string;
};
