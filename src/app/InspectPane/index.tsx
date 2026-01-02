"use client";

import { useState, useEffect } from "react";
import { Company } from "../data/company_types/types";
import { Field, VisaSponsorship, OfficeLocation } from "../data/company_types/enums";
import { GraphNode } from "../CompanyGraph/types";

// Navigation history types
type ViewType = "field" | "visa" | "company";

interface FieldView {
  type: "field";
  field: Field;
}

interface VisaView {
  type: "visa";
  field: Field;
  visaLikelihood: VisaSponsorship;
}

interface CompanyView {
  type: "company";
  company: Company;
}

type View = FieldView | VisaView | CompanyView;

interface InspectPaneProps {
  selectedNode: GraphNode | null;
  allCompanies: Company[];
  onClose?: () => void;
}

// Back arrow icon component
function BackIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
}

// External link icon
function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

// Close/X icon component
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export default function InspectPane({ selectedNode, allCompanies, onClose }: InspectPaneProps) {
  const [viewHistory, setViewHistory] = useState<View[]>([]);

  // Update view when selected node changes
  useEffect(() => {
    if (!selectedNode) {
      setViewHistory([]);
      return;
    }

    if (selectedNode.type === "field") {
      const field = selectedNode.data as Field;
      setViewHistory([{ type: "field", field }]);
    } else if (selectedNode.type === "visaSponsorship") {
      const visaLikelihood = selectedNode.data as VisaSponsorship;
      if (selectedNode.field) {
        setViewHistory([{ type: "visa", field: selectedNode.field, visaLikelihood }]);
      }
    } else if (selectedNode.type === "company") {
      const company = selectedNode.data as Company;
      setViewHistory([{ type: "company", company }]);
    }
  }, [selectedNode]);

  // Navigate to a new view
  const navigateTo = (view: View) => {
    setViewHistory([...viewHistory, view]);
  };

  // Go back to previous view
  const goBack = () => {
    if (viewHistory.length > 1) {
      setViewHistory(viewHistory.slice(0, -1));
    }
  };

  if (!selectedNode || viewHistory.length === 0) {
    return null;
  }

  const currentView = viewHistory[viewHistory.length - 1];

  return (
    <div className="fixed top-6 right-6 z-50 w-[400px] animate-in fade-in slide-in-from-right-5 duration-300">
      <div className="backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
        {/* Header with back button and close button */}
        <div className="px-5 py-4 border-b border-white/10">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {viewHistory.length > 1 && (
                <button
                  onClick={goBack}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-150 text-gray-400 hover:text-white"
                  title="Go back"
                >
                  <BackIcon className="w-5 h-5" />
                </button>
              )}
              <h2 className="text-lg font-bold text-white">
                {currentView?.type === "field" && "Field Details"}
                {currentView?.type === "visa" && "Visa Sponsorship"}
                {currentView?.type === "company" && "Company Details"}
              </h2>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-150 text-gray-400 hover:text-white"
                title="Close"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-5 py-4 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          {currentView?.type === "field" && (
            <FieldViewContent
              field={currentView.field}
              companies={allCompanies}
              onNavigate={navigateTo}
            />
          )}
          {currentView?.type === "visa" && (
            <VisaViewContent
              field={currentView.field}
              visaLikelihood={currentView.visaLikelihood}
              companies={allCompanies}
              onNavigate={navigateTo}
            />
          )}
          {currentView?.type === "company" && (
            <CompanyViewContent company={currentView.company} />
          )}
        </div>
      </div>
    </div>
  );
}

// Field view: Show visa sponsorship breakdown
function FieldViewContent({
  field,
  companies,
  onNavigate,
}: {
  field: Field;
  companies: Company[];
  onNavigate: (view: View) => void;
}) {
  const fieldCompanies = companies.filter((c) => c.field === field);

  // Group companies by visa sponsorship likelihood
  const visaGroups = Object.values(VisaSponsorship).map((visa) => {
    const companiesInGroup = fieldCompanies
      .filter((c) => c.visaSponsorship === visa)
      .sort((a, b) => a.name.localeCompare(b.name));
    return { visa, companies: companiesInGroup };
  }).filter((g) => g.companies.length > 0);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Field
        </h3>
        <p className="text-white font-medium">{field}</p>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Visa Sponsorship Breakdown
        </h3>
        <div className="space-y-2">
          {visaGroups.map(({ visa, companies: groupCompanies }) => (
            <button
              key={visa}
              onClick={() => onNavigate({ type: "visa", field, visaLikelihood: visa })}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-150 text-left group"
            >
              <div>
                <div className="text-white font-medium">{visa}</div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {groupCompanies.length} {groupCompanies.length === 1 ? "company" : "companies"}
                </div>
              </div>
              <BackIcon className="w-4 h-4 text-gray-400 group-hover:text-white rotate-180 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Total Companies
        </h3>
        <p className="text-2xl font-bold text-white">{fieldCompanies.length}</p>
      </div>
    </div>
  );
}

// Visa view: Show companies in this field with this visa likelihood
function VisaViewContent({
  field,
  visaLikelihood,
  companies,
  onNavigate,
}: {
  field: Field;
  visaLikelihood: VisaSponsorship;
  companies: Company[];
  onNavigate: (view: View) => void;
}) {
  const filteredCompanies = companies
    .filter((c) => c.field === field && c.visaSponsorship === visaLikelihood)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Field
        </h3>
        <p className="text-white font-medium">{field}</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Visa Sponsorship Likelihood
        </h3>
        <p className="text-white font-medium">{visaLikelihood}</p>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Companies ({filteredCompanies.length})
        </h3>
        <div className="space-y-2">
          {filteredCompanies.map((company) => (
            <button
              key={company.id}
              onClick={() => onNavigate({ type: "company", company })}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-150 text-left group"
            >
              <span className="text-white font-medium">{company.name}</span>
              <BackIcon className="w-4 h-4 text-gray-400 group-hover:text-white rotate-180 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Company view: Show all company details
function CompanyViewContent({ company }: { company: Company }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Company Name
        </h3>
        <p className="text-xl font-bold text-white">{company.name}</p>
      </div>

      {company.notes && (
        <>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Description
            </h3>
            <p className="text-white leading-relaxed">{company.notes}</p>
          </div>
        </>
      )}

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Field
        </h3>
        <p className="text-white font-medium">{company.field}</p>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Visa Sponsorship
        </h3>
        <p className="text-white font-medium">{company.visaSponsorship}</p>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Office Locations
        </h3>
        <div className="flex flex-wrap gap-2">
          {company.officeLocations.map((location) => (
            <span
              key={location}
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm font-medium border border-white/20"
            >
              {location}
            </span>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Company Website
        </h3>
        <a
          href={company.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-150 border border-white/20 hover:border-white/30"
        >
          Visit Website
          <ExternalLinkIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

