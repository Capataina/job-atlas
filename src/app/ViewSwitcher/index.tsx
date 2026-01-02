"use client";

import { useState } from "react";

export type ViewMode = "graph" | "spreadsheet";

interface ViewSwitcherProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export default function ViewSwitcher({ currentView, onViewChange }: ViewSwitcherProps) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl px-2 py-2">
        <div className="flex gap-1">
          <button
            onClick={() => onViewChange("graph")}
            className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
              currentView === "graph"
                ? "bg-white/10 text-white border border-white/20 shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            Graph View
          </button>
          <button
            onClick={() => onViewChange("spreadsheet")}
            className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
              currentView === "spreadsheet"
                ? "bg-white/10 text-white border border-white/20 shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            Spreadsheet View
          </button>
        </div>
      </div>
    </div>
  );
}
