# SSDLC Pipeline Dashboard

A comprehensive **Secure Software Development Lifecycle (SSDLC) Pipeline Dashboard** built with Next.js 16, React 19, and TypeScript. This dashboard provides real-time monitoring and management of security scanning, threat modeling, and secure development lifecycle metrics.

## 🚀 Features

### Security Monitoring
- **Real-time Security Scans**: Monitor multiple security scanning tools including:
  - **Semgrep (SAST)**: Static Application Security Testing
  - **OWASP ZAP (DAST)**: Dynamic Application Security Testing
  - **Snyk (SCA)**: Software Composition Analysis
  - **Secrets Scanning**: Detection and prevention of secret leakage

### Threat Modeling
- **STRIDE-based Analysis**: Comprehensive threat modeling framework
- Track identified threats, mitigations, and pending actions
- Service-level threat assessment and monitoring

### KPI Dashboard
- **Vulnerability Detection Metrics**: Track pre-merge findings
- **Secrets Leakage Prevention**: Monitor prevention rates
- **Design Changes**: Track changes from threat modeling
- **QA Risk Reduction**: Monitor critical findings reduction

### Risk Management
- Identify and track project risks
- Impact and probability assessment
- Mitigation strategy tracking
- Real-time status monitoring

### Timeline Management
- 8-week implementation roadmap
- Milestone tracking with status indicators
- Progress visualization

## 🛠️ Technology Stack

### Core Framework
- **Next.js 16.0.0**: React framework with App Router
- **React 19.2.0**: UI library
- **TypeScript 5**: Type-safe development

### UI Components
- **Radix UI**: Accessible component primitives
  - Dialog, Dropdown, Accordion, Tabs, Toast, and more
- **Shadcn/ui**: Component library built on Radix UI
- **Lucide React**: Icon library
- **Recharts**: Charting library

### Styling
- **Tailwind CSS 4.1.9**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Tailwind Animate CSS**: Animation utilities
- **class-variance-authority**: Component variant management

### Form & Validation
- **React Hook Form 7.60.0**: Form state management
- **Zod 3.25.76**: TypeScript-first schema validation
- **@hookform/resolvers**: Validation resolvers

### Additional Features
- **Vercel Analytics**: Application analytics
- **Next Themes**: Dark mode support
- **date-fns**: Date manipulation
- **Sonner**: Toast notifications

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- pnpm (preferred) or npm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Secure-Software-Development-Lifecycle--SSDLC--Pipeline.git
   cd Secure-Software-Development-Lifecycle--SSDLC--Pipeline
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles and Tailwind CSS
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component
├── components/              # React components
│   ├── header.tsx           # Dashboard header with branding
│   ├── kpi-cards.tsx        # KPI metrics cards
│   ├── risk-management.tsx  # Risk tracking component
│   ├── security-scans.tsx   # Security scanning overview
│   ├── threat-modeling.tsx  # STRIDE threat modeling
│   ├── timeline.tsx         # Project timeline component
│   ├── theme-provider.tsx   # Theme management
│   └── ui/                  # Reusable UI components (Shadcn/ui)
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── progress.tsx
│       └── ... (30+ components)
├── hooks/                   # Custom React hooks
│   ├── use-mobile.ts        # Mobile detection hook
│   └── use-toast.ts         # Toast notification hook
├── lib/                     # Utility functions
│   └── utils.ts             # Common utilities (cn, etc.)
├── public/                  # Static assets
│   └── placeholder-*        # Placeholder images
├── styles/                  # Additional styles
│   └── globals.css          # Legacy global styles
├── components.json          # Shadcn/ui configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies
├── postcss.config.mjs       # PostCSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎯 Component Overview

### Core Components

#### Header
- Displays application branding "SecureDevOps"
- Navigation and settings controls
- Notification bell for alerts

#### KPI Cards
Four key performance indicators:
1. **Vulnerability Detection**: Pre-merge findings tracking
2. **Secrets Leakage**: Prevention rate monitoring
3. **Design Changes**: Threat modeling-driven changes
4. **QA Risk Reduction**: Critical findings reduction

#### Security Scans
Real-time monitoring of security tools:
- Progress tracking for each scan
- Findings breakdown by severity (Critical, High, Medium, Low)
- Status indicators (Completed, Running, Failed)
- Last run timestamps

#### Threat Modeling
STRIDE framework implementation:
- Service-level threat analysis
- Mitigated vs. pending threats
- Status tracking per service

#### Timeline
8-week implementation roadmap:
- Week 1-2: Integrate Security Tools
- Week 3-4: Build Python Scripts
- Week 5-6: STRIDE Threat Modeling
- Week 7-8: Secure Coding Guidelines

#### Risk Management
Comprehensive risk tracking:
- Impact and probability assessment
- Mitigation strategies
- Status monitoring (Mitigated, In Progress, Monitoring)

## 🎨 Theming

The application uses a dark theme by default with custom color tokens defined in `app/globals.css`:

- **Color System**: OKLCH color space for perceptual uniformity
- **Customizable**: Colors can be modified via CSS variables
- **Dark Mode**: Pre-configured dark theme

### Color Palette
- **Primary**: Purple/Blue for main actions
- **Accent**: Green for success states
- **Destructive**: Red for errors and critical items
- **Chart Colors**: 5 distinct colors for data visualization

## 📜 Available Scripts

```bash
# Development
pnpm dev          # Start development server (localhost:3000)

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

## 🔧 Configuration

### Next.js Configuration (`next.config.mjs`)
- **TypeScript**: Build errors ignored for rapid development
- **Images**: Unoptimized for flexibility

### TypeScript Configuration (`tsconfig.json`)
- **Strict mode**: Enabled for type safety
- **Path aliases**: `@/*` maps to project root
- **Target**: ES6 for broad compatibility

### Shadcn/ui Configuration (`components.json`)
- **Style**: New York variant
- **Base Color**: Neutral
- **CSS Variables**: Enabled for theming
- **Icon Library**: Lucide React

## 🚀 Development Workflow

1. **Start Development Server**
   ```bash
   pnpm dev
   ```

2. **Make Changes**
   - Components are in `components/`
   - Pages are in `app/`
   - Styles are in `app/globals.css`

3. **Add New Components**
   - Use Shadcn/ui CLI for UI components:
     ```bash
     npx shadcn@latest add [component-name]
     ```

4. **Build and Test**
   ```bash
   pnpm build
   pnpm start
   ```

## 🔒 Security Features

This dashboard is designed to monitor and enhance security across the SDLC:

1. **Multi-layered Scanning**: SAST, DAST, SCA, and Secrets detection
2. **Proactive Threat Modeling**: STRIDE-based analysis
3. **Risk Management**: Comprehensive tracking and mitigation
4. **Real-time Monitoring**: Live status updates and metrics
5. **KPI Tracking**: Data-driven security improvements

## 📊 Data Flow

The dashboard currently uses mock data for demonstration purposes. In a production environment:

1. **Security Scans**: Would integrate with actual CI/CD pipeline tools
2. **Threat Models**: Would connect to threat modeling platforms
3. **KPIs**: Would pull from analytics and monitoring systems
4. **Risks**: Would sync with project management tools

## 🤝 Contributing

When contributing to this project:

1. Follow the existing code style
2. Use TypeScript for all new files
3. Leverage existing UI components from `components/ui/`
4. Maintain the component structure
5. Update this README for significant changes

## 📝 License

This project is part of the Secure Software Development Lifecycle (SSDLC) initiative.

## 🔗 Related Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Documentation](https://www.radix-ui.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [OWASP SSDLC](https://owasp.org/www-project-integration-standards/)

---

**Built with ❤️ for secure software development**
