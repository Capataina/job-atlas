# Atlas

> A visual, non-linear job exploration and lightweight tracking web app — built to make large sets of companies browsable, filterable, and actionable without turning into a spreadsheet.

---

## Why Atlas exists

Once your target set grows beyond a few dozen companies, linear tools start to break down.

A typical workflow becomes:

- scrolling through long lists
- losing context between categories
- repeatedly re-evaluating the same companies
- struggling to answer simple multi-constraint questions like:
  - “Which companies match my location constraints?”
  - “Which companies are more likely to sponsor visas?”
  - “Which subset should I focus on today?”

Spreadsheets can represent the data, but they often impose a different kind of cost: they become visually dense, cognitively heavy, and awkward to _browse_ as an evolving landscape.

Atlas exists to treat this as a navigation problem rather than a formatting problem:

- build a structured universe of companies
- let you explore it non-linearly
- apply hard filters to remove irrelevant branches
- click through to careers pages to apply

The goal is not to replace job boards or application systems.
The goal is to make it easy to **identify the right set of companies under your current constraints** and **jump to the place where you actually apply**.

---

## What Atlas focuses on

Atlas is intentionally built around a simple, repeatable loop:

1. Set constraints using filters (e.g., geography, visa feasibility, sector)
2. Browse the remaining landscape non-linearly
3. Click a company to view details
4. Open its careers page and apply

It prioritises:

- **Exploration**: seeing the shape of the search space quickly
- **Control**: pruning irrelevant branches via hard filters
- **Speed**: minimal friction between “selection” and “application”
- **Extensibility**: keeping the model flexible enough to add tracking later

---

## Core concepts

### Non-linear navigation

Atlas is designed so you don’t have to move through a single fixed order.

Instead of scrolling a document, you navigate by selecting what matters _now_:

- choose constraints
- select categories
- inspect individual companies

This makes it possible to explore the same dataset from different angles without duplicating information or reorganising the entire list.

---

### Facet-driven organisation

Atlas treats company attributes as first-class filters and navigation targets.

Examples of “facets” include:

- sector/category groupings (e.g., fintech, high-tech)
- geography (e.g., countries or cities)
- visa sponsorship feasibility buckets (e.g., “easy”, “difficult”)
- simple process labels (e.g., “already applied” later)

A company can belong to multiple facets simultaneously. This is the key property that enables:

- “visa-friendly” intersected with “fintech”
- “Toronto” intersected with “high-tech”
- “Netherlands” intersected with “visa-friendly” intersected with “fintech”

without forcing companies into a single hierarchy.

---

### Obsidian-style graph traversal

Atlas uses an interactive graph representation to make browsing tactile:

- Clicking a **facet/category node** recenters the graph around that node, effectively making it the new “head”.
- Clicking a **company node** opens a floating, moveable inspector panel containing company details and outbound links (especially the careers page).

This combination supports both:

- exploration (pivoting around different dimensions)
- execution (opening the careers page and applying)

---

### Hard filters that prune the graph

Filters are not just “highlighting”.
They are designed to **remove** irrelevant parts of the landscape.

Example:

- If you exclude “difficult sponsorship”, companies classified under that bucket disappear.
- Facet nodes that no longer connect to any remaining companies also disappear.

This creates a strong “micro-control” feel:
you shape the space, then browse what remains.

---

## Future plans

Atlas is deliberately starting as a lightweight exploration tool.
Over time, it can grow into a personal job search cockpit without becoming heavy.

Planned expansions include:

### Authentication (optional)

- Add sign-in using a managed service (e.g., an off-the-shelf auth provider) to avoid building custom auth flows.
- Keep the experience minimal: sign in to sync your own data across devices.

### Data persistence

- Store personal state such as:
  - “already applied”
  - “shortlisted”
  - notes per company
  - last checked date
  - saved filter presets / saved views

### Quality-of-life features

- Import/export your dataset
- Export your personal state as JSON
- Saved “queues” (e.g., “Apply this week”)
- Better enrichment over time (more consistent location and visa tagging)

These are intentionally deferred so Atlas stays useful early and avoids scope creep.

---

## Roadmap

Atlas is built in phases. Each milestone should be demo-able and have clear exit criteria.

### 0) Foundations

- [x] Repository structure and conventions
- [x] Baseline UI layout (graph canvas + fixed filter pane + inspector shell)
- [x] Minimal data format definition (companies + facets + links)
- [x] Local development workflow and build/run scripts
- [x] Basic error handling strategy (missing fields, broken links)
- [x] Seed dataset stub for development

**Exit criteria**

- The app boots reliably in development
- A minimal dataset renders without crashes
- The UI skeleton is stable enough to iterate on

---

### 1) Data model: companies + facets

- [x] Define canonical company schema:
  - name
  - tags/facets
  - careers link (primary)
  - website link (secondary)
  - locations (if available)
- [x] Define canonical facet schema:
  - facet id
  - label
  - facet group (e.g., sector/location/visa)
- [x] Define edge generation rules (company ↔ facet membership)
- [x] Validate input data on load (report missing careers links, unknown facets)

**Exit criteria**

- Companies load from static data reliably
- Facets are generated deterministically
- The app can report “data quality” issues without breaking

---

### 2) Graph rendering baseline

- [x] Render company nodes and facet nodes
- [x] Distinguish node types visually (company vs facet)
- [x] Support pan/zoom smoothly
- [x] Node selection (single click)
- [x] Basic label strategy (avoid clutter)

**Exit criteria**

- The graph is usable at moderate scale without becoming unreadable
- Clicking nodes reliably identifies the target node

---

### 3) Obsidian-style traversal (recenter)

- [x] Click facet → recenter around that node
- [x] Define neighbourhood expansion rules (e.g., 1-hop and optional 2-hop)
- [x] Keep traversal stable and reversible (back stack or breadcrumb)
- [x] Avoid “graph soup” by limiting visible nodes intelligently

**Exit criteria**

- You can pivot around any facet without losing orientation
- Traversal feels predictable: focus changes, graph updates, context remains clear

---

### 4) Fixed filter pane (hard pruning)

- [x] Fixed top-left filter pane UI
- [x] Filter groups (sector/location/visa at minimum)
- [x] Include/exclude logic per group
- [x] Hard pruning behaviour:
  - non-matching companies removed
  - disconnected facets removed
- [x] Clear “active filters” display

**Exit criteria**

- Setting filters produces a smaller, cleaner graph
- Excluding a bucket (e.g. “difficult sponsorship”) visibly cuts it out of the graph
- Filters and traversal work together without inconsistent states

---

### 5) Company inspector panel (moveable overlay)

- [ ] Click company → open inspector panel
- [ ] Panel shows:
  - company name
  - tags/facets (read-only)
  - locations (if present)
  - careers link (primary action)
  - website link (secondary action)
- [ ] Panel is moveable (drag)
- [ ] Panel close behaviour (escape key and close button)

**Exit criteria**

- Company inspection is fast and does not disrupt navigation
- Careers link is always obvious and one click away

---

### 6) Search and jump-to

- [ ] Search by company name
- [ ] Search by facet name
- [ ] Selecting a search result focuses the node
- [ ] Optional: recentre on selection if it’s a facet

**Exit criteria**

- You can reach any company within seconds without manual navigation

---

### 7) Graph usability and performance pass

- [ ] Limit visible neighbourhood size for readability
- [ ] Improve label behaviour (e.g., show labels on hover / at zoom thresholds)
- [ ] Stabilise layout behaviour to avoid constant jitter
- [ ] Ensure interaction remains responsive at dataset scale

**Exit criteria**

- The graph stays smooth and readable with the full dataset loaded
- Navigation does not degrade due to node/edge count

---

### 8) Data maintenance workflow

- [ ] Clear instructions for editing and extending the dataset
- [ ] Optional helpers:
  - lightweight validation script
  - consistency checks (duplicate names, missing links)
- [ ] Import/export hooks if needed later

**Exit criteria**

- Updating company data is straightforward and doesn’t require touching UI logic
- Dataset changes don’t silently break filters or traversal

---

## Summary

Atlas is a lightweight, exploration-first job search tool built around a simple idea:
large company landscapes should be **navigated**, not scrolled.

It combines:

- a fixed filter pane for hard constraints
- Obsidian-style graph traversal for non-linear browsing
- a company inspector panel for quick details and careers-page routing

The aim is to reduce cognitive load, keep the workflow fast, and leave room to add persistence and tracking later without turning Atlas into a heavyweight system.
