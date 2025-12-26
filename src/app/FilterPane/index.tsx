"use client";

import { useState } from "react";
import { OfficeLocation, VisaSponsorship } from "../data/company_types/enums";

export interface FilterState {
  officeLocations: OfficeLocation[];
  visaSponsorships: VisaSponsorship[];
  canCreateAccountOnCareersSite: boolean;
}

interface FilterPaneProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

// Checkmark icon component
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

// Chevron icon component for accordion
function ChevronIcon({ isOpen, className }: { isOpen: boolean; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

// Badge component for filter options
function FilterBadge({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center gap-1.5
        px-3.5 py-2 rounded-lg font-medium text-sm
        transition-all duration-150 ease-out
        hover:scale-[1.03] active:scale-[0.97]
        focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black/50
        ${isSelected
          ? "bg-white/10 text-white backdrop-blur-sm border border-white/20 shadow-lg shadow-black/20"
          : "bg-black/20 text-gray-400 border border-white/5 hover:text-gray-200 hover:bg-white/5 hover:border-white/10 backdrop-blur-sm"
        }
      `}
    >
      {/* Checkmark icon */}
      {isSelected && (
        <CheckIcon className="w-3.5 h-3.5 text-white animate-in fade-in zoom-in duration-150" />
      )}
      <span className="select-none whitespace-nowrap">{label}</span>
    </button>
  );
}

// Filter section component with accordion functionality
function FilterSection({
  title,
  count,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  count: number;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-2 text-left hover:bg-white/5 rounded-lg px-1 transition-colors duration-150"
      >
        <div className="flex items-center gap-2">
          <ChevronIcon
            isOpen={isOpen}
            className="w-4 h-4 text-gray-400 transition-transform duration-200"
          />
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {title}
          </h3>
        </div>
        {count > 0 && (
          <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold text-white bg-white/20 rounded-full backdrop-blur-sm">
            {count}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="flex flex-wrap gap-2 pl-6 pt-2 pb-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

export default function FilterPane({ filters, onFiltersChange }: FilterPaneProps) {
  const [isOfficeLocationsOpen, setIsOfficeLocationsOpen] = useState(true);
  const [isVisaSponsorshipOpen, setIsVisaSponsorshipOpen] = useState(true);
  const [isCanCreateAccountOpen, setIsCanCreateAccountOpen] = useState(true);

  const toggleOfficeLocation = (location: OfficeLocation) => {
    const newLocations = filters.officeLocations.includes(location)
      ? filters.officeLocations.filter((l) => l !== location)
      : [...filters.officeLocations, location];
    onFiltersChange({ ...filters, officeLocations: newLocations });
  };

  const toggleVisaSponsorship = (sponsorship: VisaSponsorship) => {
    const newSponsorships = filters.visaSponsorships.includes(sponsorship)
      ? filters.visaSponsorships.filter((s) => s !== sponsorship)
      : [...filters.visaSponsorships, sponsorship];
    onFiltersChange({ ...filters, visaSponsorships: newSponsorships });
  };

  const toggleCanCreateAccount = () => {
    onFiltersChange({ ...filters, canCreateAccountOnCareersSite: !filters.canCreateAccountOnCareersSite });
  };

  const clearAllFilters = () => {
    onFiltersChange({ officeLocations: [], visaSponsorships: [], canCreateAccountOnCareersSite: false });
  };

  const hasActiveFilters = filters.officeLocations.length > 0 || filters.visaSponsorships.length > 0 || filters.canCreateAccountOnCareersSite;
  const totalActiveFilters = filters.officeLocations.length + filters.visaSponsorships.length + (filters.canCreateAccountOnCareersSite ? 1 : 0);

  return (
    <div className="fixed top-6 left-6 z-50 w-[340px] animate-in fade-in slide-in-from-left-5 duration-300">
      {/* Main container with glassmorphism effect */}
      <div className="backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white">Filters</h2>
              {totalActiveFilters > 0 && (
                <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold text-white bg-white/20 rounded-full backdrop-blur-sm">
                  {totalActiveFilters}
                </span>
              )}
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-medium text-gray-400 hover:text-white transition-colors duration-150 px-2 py-1 rounded hover:bg-white/5"
              >
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* Filter sections */}
        <div className="px-5 py-4 space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Office Locations */}
          <FilterSection
            title="Office Locations"
            count={filters.officeLocations.length}
            isOpen={isOfficeLocationsOpen}
            onToggle={() => setIsOfficeLocationsOpen(!isOfficeLocationsOpen)}
          >
            {Object.values(OfficeLocation).map((location) => (
              <FilterBadge
                key={location}
                label={location}
                isSelected={filters.officeLocations.includes(location)}
                onClick={() => toggleOfficeLocation(location)}
              />
            ))}
          </FilterSection>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Visa Sponsorship */}
          <FilterSection
            title="Visa Sponsorship"
            count={filters.visaSponsorships.length}
            isOpen={isVisaSponsorshipOpen}
            onToggle={() => setIsVisaSponsorshipOpen(!isVisaSponsorshipOpen)}
          >
            {Object.values(VisaSponsorship).map((sponsorship) => (
              <FilterBadge
                key={sponsorship}
                label={sponsorship}
                isSelected={filters.visaSponsorships.includes(sponsorship)}
                onClick={() => toggleVisaSponsorship(sponsorship)}
              />
            ))}
          </FilterSection>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Can Create Account on Careers Site */}
          <FilterSection
            title="Can Create Account"
            count={filters.canCreateAccountOnCareersSite ? 1 : 0}
            isOpen={isCanCreateAccountOpen}
            onToggle={() => setIsCanCreateAccountOpen(!isCanCreateAccountOpen)}
          >
            <FilterBadge
              label="Can create account on careers site"
              isSelected={filters.canCreateAccountOnCareersSite}
              onClick={toggleCanCreateAccount}
            />
          </FilterSection>
        </div>
      </div>
    </div>
  );
}

