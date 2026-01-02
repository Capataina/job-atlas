"use client";

import { useMemo, useState } from "react";
import { Company } from "../data/company_types/types";
import { Field, Tier, VisaSponsorship, OfficeLocation } from "../data/company_types/enums";

interface SpreadsheetViewProps {
  companies: Company[];
}

type SortField = "name" | "field" | "tier" | "visaSponsorship" | "officeLocations";
type SortDirection = "asc" | "desc";

// Semantic ordering for enums
const TIER_ORDER = {
  [Tier.Tier1]: 1,
  [Tier.Tier2]: 2,
  [Tier.Tier3]: 3,
  [Tier.Tier4]: 4,
};

const VISA_ORDER = {
  [VisaSponsorship.VeryHigh]: 1,
  [VisaSponsorship.High]: 2,
  [VisaSponsorship.Medium]: 3,
  [VisaSponsorship.Low]: 4,
  [VisaSponsorship.VeryLow]: 5,
  [VisaSponsorship.Unknown]: 6,
};

export default function SpreadsheetView({ companies }: SpreadsheetViewProps) {
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [fieldFilter, setFieldFilter] = useState<Field | "all">("all");
  const [tierFilter, setTierFilter] = useState<Tier | "all">("all");
  const [visaFilter, setVisaFilter] = useState<VisaSponsorship | "all">("all");
  const [locationFilter, setLocationFilter] = useState<OfficeLocation | "all">("all");

  // Get unique values for filters
  const uniqueFields = useMemo(() => Object.values(Field), []);
  const uniqueTiers = useMemo(() => Object.values(Tier), []);
  const uniqueVisas = useMemo(() => Object.values(VisaSponsorship), []);
  const uniqueLocations = useMemo(() => Object.values(OfficeLocation), []);

  // Filter and sort companies
  const filteredAndSortedCompanies = useMemo(() => {
    let result = [...companies];

    // Apply filters
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(
        (company) =>
          company.name.toLowerCase().includes(search) ||
          company.notes.toLowerCase().includes(search)
      );
    }

    if (fieldFilter !== "all") {
      result = result.filter((company) => company.field === fieldFilter);
    }

    if (tierFilter !== "all") {
      result = result.filter((company) => company.tier === tierFilter);
    }

    if (visaFilter !== "all") {
      result = result.filter((company) => company.visaSponsorship === visaFilter);
    }

    if (locationFilter !== "all") {
      result = result.filter((company) => company.officeLocations.includes(locationFilter));
    }

    // Apply sorting with semantic ordering
    result.sort((a, b) => {
      let comparison = 0;

      switch (sortField) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "field":
          comparison = a.field.localeCompare(b.field);
          break;
        case "tier":
          comparison = TIER_ORDER[a.tier] - TIER_ORDER[b.tier];
          break;
        case "visaSponsorship":
          comparison = VISA_ORDER[a.visaSponsorship] - VISA_ORDER[b.visaSponsorship];
          break;
        case "officeLocations":
          comparison = a.officeLocations.join(", ").localeCompare(b.officeLocations.join(", "));
          break;
        default:
          return 0;
      }

      return sortDirection === "asc" ? comparison : -comparison;
    });

    return result;
  }, [companies, searchTerm, fieldFilter, tierFilter, visaFilter, locationFilter, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return (
        <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    return sortDirection === "asc" ? (
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFieldFilter("all");
    setTierFilter("all");
    setVisaFilter("all");
    setLocationFilter("all");
  };

  return (
    <div className="w-full h-screen bg-[#0a0a0a] pt-20 px-6 pb-6 overflow-hidden">
      <div className="max-w-[1800px] mx-auto h-full flex flex-col gap-3">
        {/* Filters Section */}
        <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Search */}
            <div className="lg:col-span-2">
              <input
                type="text"
                placeholder="Search companies or notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
              />
            </div>

            {/* Field Filter */}
            <select
              value={fieldFilter}
              onChange={(e) => setFieldFilter(e.target.value as Field | "all")}
              className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
            >
              <option value="all">All Fields</option>
              {uniqueFields.map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>

            {/* Tier Filter */}
            <select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value as Tier | "all")}
              className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
            >
              <option value="all">All Tiers</option>
              {uniqueTiers.map((tier) => (
                <option key={tier} value={tier}>
                  {tier}
                </option>
              ))}
            </select>

            {/* Visa Filter */}
            <select
              value={visaFilter}
              onChange={(e) => setVisaFilter(e.target.value as VisaSponsorship | "all")}
              className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
            >
              <option value="all">All Visa Levels</option>
              {uniqueVisas.map((visa) => (
                <option key={visa} value={visa}>
                  {visa}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/10">
            {/* Location Filter */}
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value as OfficeLocation | "all")}
              className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
            >
              <option value="all">All Locations</option>
              {uniqueLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                {filteredAndSortedCompanies.length} of {companies.length} companies
              </span>
              <button
                onClick={clearFilters}
                className="px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl flex-1 overflow-hidden flex flex-col">
          <div className="overflow-auto flex-1">
            <table className="w-full">
              <thead className="bg-black/40 sticky top-0 z-10 border-b border-white/10">
                <tr>
                  <th
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-white/5 transition-colors select-none"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex items-center gap-2">
                      Company {getSortIcon("name")}
                    </div>
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-white/5 transition-colors select-none"
                    onClick={() => handleSort("field")}
                  >
                    <div className="flex items-center gap-2">
                      Field {getSortIcon("field")}
                    </div>
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-white/5 transition-colors select-none"
                    onClick={() => handleSort("tier")}
                  >
                    <div className="flex items-center gap-2">
                      Tier {getSortIcon("tier")}
                    </div>
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-white/5 transition-colors select-none"
                    onClick={() => handleSort("visaSponsorship")}
                  >
                    <div className="flex items-center gap-2">
                      Visa {getSortIcon("visaSponsorship")}
                    </div>
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-white/5 transition-colors select-none"
                    onClick={() => handleSort("officeLocations")}
                  >
                    <div className="flex items-center gap-2">
                      Locations {getSortIcon("officeLocations")}
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Notes
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Website
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredAndSortedCompanies.map((company) => (
                  <tr key={company.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="font-medium text-white">{company.name}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm text-gray-300">{company.field}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-md ${
                          company.tier === Tier.Tier1
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                            : company.tier === Tier.Tier2
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : company.tier === Tier.Tier3
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                        }`}
                      >
                        {company.tier.split(" - ")[0]}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-md ${
                          company.visaSponsorship === VisaSponsorship.VeryHigh ||
                          company.visaSponsorship === VisaSponsorship.High
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : company.visaSponsorship === VisaSponsorship.Medium
                            ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                            : company.visaSponsorship === VisaSponsorship.Low ||
                              company.visaSponsorship === VisaSponsorship.VeryLow
                            ? "bg-red-500/20 text-red-300 border border-red-500/30"
                            : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                        }`}
                      >
                        {company.visaSponsorship}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm text-gray-300 max-w-xs">
                        {company.officeLocations.join(", ")}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm text-gray-400 max-w-md line-clamp-2">
                        {company.notes}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <a
                        href={company.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm hover:underline inline-flex items-center gap-1"
                      >
                        Visit
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
