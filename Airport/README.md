# ✈️ Airport Operations & Flight Management Dashboard

A comprehensive **Next.js + TypeScript** web application for managing airport operations, flight schedules, passenger information, gate assignments, and real-time operational metrics.

## 🚀 Features

### Flight Management
- Real-time flight schedule display with status tracking
- Flight search and filtering capabilities
- Delay monitoring and tracking
- Gate assignment management
- Aircraft turnaround timing

### Passenger Management
- Complete passenger manifest lookup
- Security clearance tracking
- Boarding status monitoring
- Special assistance flags
- Search by name, email, or passport

### Gate Operations
- Gate availability tracking
- Terminal-based gate organization
- Gate capacity management
- Real-time gate assignment display

### Operational Metrics
- On-time performance tracking
- Delay analytics and reporting
- Security queue monitoring
- Passenger boarding progress
- Gate utilization metrics
- Airport weather conditions

## 📁 Project Structure

```
Airport/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Dashboard home page
│   ├── globals.css             # Global styles
│   ├── flights/
│   │   └── page.tsx           # Flight management page
│   ├── passengers/
│   │   └── page.tsx           # Passenger lookup page
│   ├── gates/
│   │   └── page.tsx           # Gate management page
│   └── operations/
│       └── page.tsx           # Operations center
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── Alert.tsx
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Loading.tsx
│   │   ├── StatusIndicator.tsx
│   │   └── Table.tsx
│   ├── flights/                # Flight-specific components
│   │   └── FlightCard.tsx
│   ├── passengers/             # Passenger-specific components
│   │   └── PassengerCard.tsx
│   └── operations/             # Operations components
├── lib/
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces for all entities
│   ├── data/
│   │   └── mock-data.ts       # Mock data for development
│   ├── services/
│   │   └── data-service.ts    # Server actions for data fetching
│   └── utils/
│       └── formatters.ts      # Utility functions for formatting and styling
├── public/
│   ├── icons/
│   └── images/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── jest.config.ts
├── jest.setup.ts
└── README.md
```

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library
- **State Management**: React Hooks + Server Actions
- **Icons**: Lucide React

## 📦 Installation

```bash
cd Airport
npm install
```

## 🏃 Running the Application

### Development
```bash
npm run dev
```
The application will start at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

### Testing
```bash
npm run test
npm run test:watch
```

### Linting
```bash
npm run lint
```

## 📊 Data Models:

### Flight
- ID, Flight Number, Airline
- Scheduled/Actual departure and arrival times
- Status (on-time, delayed, boarding, landed, cancelled)
- Routes, Aircraft, Gate assignments
- Passenger counts and capacity

### Passenger
- Personal information (name, email, phone)
- Passport number
- Flight assignment
- Seat number
- Status tracking (checked-in, boarding, boarded, no-show)
- Security clearance status
- Special assistance requirements

### Gate
- Gate number and terminal assignment
- Status (available, occupied, maintenance, closed)
- Capacity
- Flight assignment
- Type (domestic/international)

### Aircraft
- Registration and model info
- Capacity
- Current location
- Status (in-service, turnaround, maintenance, parked)
- Turnaround and maintenance timing

### Airport Status
- Runway capacity and utilization
- Security queue times
- Weather conditions
- Operational status (normal, degraded, emergency)

### Operational Metrics
- Flight statistics (on-time %, delays, cancellations)
- Passenger metrics (checked-in, boarding %)
- Gate utilization
- Security clearance rates

## 🎨 UI Components

### Core Components
- **Alert**: Info, warning, error, and success notifications
- **Badge**: Status indicators and tags
- **Button**: Various button styles with loading states
- **Card**: Container components for content organization
- **Table**: Data display tables with sorting capabilities
- **Loading**: Skeleton loaders and spinners
- **StatusIndicator**: Visual status indicators

### Domain Components
- **FlightCard**: Flight information display
- **PassengerCard**: Passenger information display

## 🔧 Configuration

### Tailwind CSS
Configured in `tailwind.config.ts` with custom colors for flight statuses.

### TypeScript
Strict mode enabled. Path aliases configured for clean imports using `@/`.

### Jest Testing
Configured to work with Next.js and React components.

## 📝 Code Standards

- Follow Next.js App Router conventions
- Use TypeScript for type safety
- Client components must include `'use client'` directive
- Server actions use `'use server'` directive
- Use Tailwind CSS for all styling
- Components follow single responsibility principle
- Comprehensive error handling and loading states

## 🔐 Security Considerations

- All form inputs are validated
- Passenger data is masked appropriately
- API routes validate all incoming data
- No sensitive data in client-side code

## 📄 License

This project is part of the Airport Operations Dashboard system.

## 🤝 Contributing

Follow the code standards outlined in `.github/copilot-instructions.md`
