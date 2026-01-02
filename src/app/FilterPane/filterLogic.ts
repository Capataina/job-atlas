import { Company } from "../data/company_types/types";
import { OfficeLocation, VisaSponsorship } from "../data/company_types/enums";
import { FilterState } from "./index";

/**
 * Filters companies based on the provided filter state.
 * 
 * @param companies - Array of all companies to filter
 * @param filters - Filter state containing selected office locations and visa sponsorships
 * @returns Filtered array of companies
 * 
 * Filter logic:
 * - Office locations: If any locations are selected, only include companies that have
 *   at least one of the selected locations in their officeLocations array.
 * - Visa sponsorship: If any sponsorship levels are selected, only include companies
 *   whose visa sponsorship matches one of the selected levels.
 * - If no filters are selected, returns all companies.
 */
export function filterCompanies(companies: Company[], filters: FilterState): Company[] {
  let filtered = companies;

  // Filter by office locations
  if (filters.officeLocations.length > 0) {
    filtered = filtered.filter((company) =>
      company.officeLocations.some((location) =>
        filters.officeLocations.includes(location)
      )
    );
  }

  // Filter by visa sponsorship (now a simple enum value)
  if (filters.visaSponsorships.length > 0) {
    filtered = filtered.filter((company) =>
      filters.visaSponsorships.includes(company.visaSponsorship)
    );
  }

  return filtered;
}

