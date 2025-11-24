
# ✈️ Airport Operations & Flight Management Application

This is a **Next.js-based Airport Operations Dashboard** built with **TypeScript** that allows administrators and airline staff to view and manage airport status, incoming and outgoing flights, aircraft data, passenger manifests, gate assignments, delays, and live operational metrics. The application uses **React components**, **server actions**, and **client components** as part of the Next.js App Router system. Please follow all guidelines below when contributing.

---

## 📌 Code Standards

### ✅ Required Before Each Commit

* Run `npm run lint` and ensure all code adheres to project formatting and TypeScript rules
* Run `npm run test` to verify all tests pass successfully
* Validate that all components follow **Next.js App Router conventions**
* Client components **must** begin with `'use client'` if they use browser APIs, React state, or event listeners
* Update **README.md** and any relevant architectural documentation when new features or data models are introduced
* Confirm the repository structure description is accurate in the Copilot Instructions / Developer Docs
* Ensure all API routes follow consistent naming and validation patterns
* Confirm data models (Flights, Gates, Passengers, Aircraft, Staff) are updated in `lib/types` when needed

---

## 🧩 TypeScript and React Patterns

### Data & Components

* Always use **TypeScript interfaces/types** for:

  * Flight data
  * Passenger data
  * Gate/terminal structures
  * Aircraft metadata
  * Check-in / security / boarding states
* Components must follow:

  * **Function-based + hooks**
  * **Single Responsibility Principle**
  * Clean, modular design with strong separation of UI & logic

### State Management

* Use React state only where needed
* Global operational state (e.g., airport status, severe delays, weather alerts) should use:

  * Server actions
  * Context
  * Or a dedicated state management layer in `lib`

### API & Backend Patterns

* Use Next.js Server Actions or API routes for:

  * Loading real-time flight data
  * Searching passenger manifests
  * Updating gate assignments
  * Syncing aircraft turnaround timing
  * Returning operational metrics (on-time %, delay groups, security queue levels)

---

## 🎨 Styling Guidelines

* Prioritize **Tailwind CSS** for all styling
* Only create custom CSS when unavoidable
* Use Tailwind utility classes for:

  * Status indicators (on-time, delayed, boarding, landed)
  * Tables and data views
  * Dashboard widgets
  * Cards and panels

---

## 🛠 Development Flow

* Install dependencies: `npm install`
* Start development: `npm run dev`
* Build for production: `npm run build`
* Run linting: `npm run lint`
* Run tests: `npm run test`

---

## 📁 Repository Structure

```
app/
  flights/            # Flight list pages, flight details, schedule views
  passengers/         # Passenger lookup, manifests, detail pages
  gates/              # Gate assignments, gate status boards
  operations/         # Airport state dashboards, weather, metrics
  api/                # Backend API endpoints (if not using server actions)

components/
  ui/                 # Reusable components: badges, tables, modals
  flights/            # Flight-specific components
  passengers/         # Passenger data components
  operations/         # Dashboards, alerts, KPI widgets
  __tests__/          # Component tests

lib/
  data/               # Mock datasets, sample schedules, demo manifests
  services/           # Business logic for flight handling, passenger lookup
  utils/              # Helpers, formatters, time utilities
  types/              # TypeScript interfaces for all major entities

public/
  icons/              # Airline logos, aircraft icons, terminal maps
  images/

tests/
  integration/
  unit/

README.md
```

---

## 🧭 Key Development Guidelines

1. **Determine if a component requires `'use client'`**
   Only use it if the component needs React hooks or browser-specific functionality.

2. **Accessibility Requirements**

   * All images require meaningful `alt` text
   * Decorative images should use `alt=""`
   * Always maintain proper table semantics for flight and passenger listings

3. **Next.js Best Practices**

   * Prefer Server Components for data-heavy views (flight schedule, airport metrics)
   * Use loading and error UI states
   * Implement streaming where beneficial (live flight board)

4. **Performance Optimization**

   * Memoize expensive operations
   * Use pagination or infinite scroll for large passenger lists
   * Cache flight data using built-in fetch caching layers

5. **Data Integrity & Safety**

   * Validate all incoming data from API routes or Server Actions
   * Ensure passenger data handling follows privacy standards
   * Sanitize dynamic values in URLs & form inputs

---

## ✨ Functional Requirements Overview

The application should support:

### Flight Operations

* Departures & arrivals board
* Real-time delay tracking
* Gate and terminal mapping
* Aircraft turnaround timers
* Crew status integration (if applicable)

### Passenger Management

* Passenger manifest lookup
* Individual passenger details
* Check-in state, security clearance, boarding status
* Special assistance flags

### Airport Status

* Weather conditions
* Security checkpoint wait times
* Runway/terminal operational state
* Live alerts (system outages, major delays, emergency notifications)


