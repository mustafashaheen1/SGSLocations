# SGS Locations - Replit Project Guide

## Overview

SGS Locations is a comprehensive location scouting platform connecting property owners with film and TV production companies across the Dallas-Fort Worth metropolitan area. The platform features 65+ filming locations and serves three primary user types: public visitors, production professionals, and property owners.

**Core Purpose**: Enable efficient discovery and booking of filming locations through advanced search, filtering, and visual browsing capabilities.

**Tech Stack**: React (via Vite), Express.js, TypeScript, PostgreSQL (via Neon), Drizzle ORM, shadcn/ui components, Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with Vite as the build tool and development server. The application uses a client-side routing approach with `wouter` for lightweight routing.

**Component Strategy**: Component-based architecture using shadcn/ui as the foundation UI library. Components are organized into:
- `/client/src/components` - Reusable business components
- `/client/src/components/ui` - shadcn/ui primitives
- `/client/src/components/examples` - Component demonstration/testing
- `/client/src/pages` - Route-level page components

**State Management**: React Query (`@tanstack/react-query`) for server state management with custom query client configuration. Local state handled through React hooks.

**Styling Approach**: Tailwind CSS with extensive custom configuration. Design system uses CSS variables for theming with light/dark mode support. Custom utility classes for elevation effects (`hover-elevate`, `active-elevate-2`). Typography follows a reference-based design inspired by Airbnb, Zillow, and Linear.

**Key Design Decisions**:
- Uses "new-york" style variant of shadcn/ui for consistent aesthetics
- Custom border radius values (9px, 6px, 3px) defined in Tailwind config
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)
- HSL color system with alpha channel support for flexible theming

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript for type safety.

**API Pattern**: RESTful API design with all routes prefixed with `/api`. The `registerRoutes` function in `server/routes.ts` centralizes route registration.

**Request/Response Flow**: 
1. JSON body parsing with raw body preservation for webhook verification
2. Request logging middleware tracks API calls with duration and response capture
3. Custom Vite middleware integration for development with HMR support

**Storage Abstraction**: Interface-based storage pattern (`IStorage`) allows swapping between in-memory (`MemStorage`) and database implementations. Current implementation uses in-memory storage for users as a placeholder.

**Session Management**: Uses `connect-pg-simple` for PostgreSQL-backed session storage (though not fully wired up yet).

**Key Architectural Decisions**:
- Separation of concerns: routes, storage interface, and Vite setup are isolated
- Development mode integrates Vite middleware for seamless SPA development
- Production mode serves static built assets from `dist/public`

### Database & ORM

**Database**: PostgreSQL via Neon serverless driver (`@neondatabase/serverless`) with WebSocket support for serverless environments.

**ORM**: Drizzle ORM chosen for type-safe database operations with minimal overhead. Schema defined in `shared/schema.ts` and shared between client and server.

**Schema Organization**:
- `users` table: Simple structure with id (UUID), username, password
- Zod integration via `drizzle-zod` for runtime validation matching database schema
- Type inference using Drizzle's `$inferSelect` for type safety

**Migration Strategy**: Drizzle Kit configured to output migrations to `/migrations` directory. Push-based workflow using `npm run db:push` for schema synchronization.

**Connection Pooling**: Uses Neon's connection pooling with WebSocket constructor override for compatibility.

**Key Decisions**:
- Schema co-location in `shared/` allows both client and server to import types
- UUID primary keys with PostgreSQL's `gen_random_uuid()` for distributed ID generation
- Validation schemas derived from database schema to maintain single source of truth

### Form Handling & Validation

**Form Library**: React Hook Form (`react-hook-form`) for performant form state management.

**Validation**: Zod schemas integrated via `@hookform/resolvers` for consistent validation across forms and API.

**Pattern**: Forms use controlled components with validation happening at field and form levels.

### Build & Development

**Development**: 
- Vite dev server with HMR
- Express server runs concurrently handling API routes
- Replit-specific plugins for error overlay and development banner

**Production Build**:
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js` as ESM
- Static file serving from built assets

**TypeScript Configuration**:
- Strict mode enabled
- Path aliases match Vite configuration
- Incremental compilation for faster rebuilds
- Shared types across client/server via `shared/` directory

## External Dependencies

### UI Component Library
- **shadcn/ui**: Comprehensive component library built on Radix UI primitives
  - Provides 30+ accessible, customizable components
  - Installed components: Button, Card, Input, Select, Dialog, Tabs, Toast, Dropdown Menu, Sheet, Checkbox, and many more
  - All components support theming via CSS variables

### Database & Backend Services
- **Neon Database**: Serverless PostgreSQL hosting
  - WebSocket-based connections for serverless compatibility
  - Configured via `DATABASE_URL` environment variable
  - Requires active provisioned database

### State & Data Management
- **TanStack Query**: Server state management with caching, refetching, and optimistic updates
- **React Hook Form**: Performant form state with minimal re-renders
- **Zod**: Schema validation used for both forms and database schemas

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Google Fonts**: Inter, Outfit, System UI, and Space Grotesk for typography hierarchy
- **class-variance-authority**: Type-safe component variants
- **Lucide React**: Icon library for consistent iconography

### Routing
- **wouter**: Minimal client-side routing library (3KB alternative to React Router)

### Development Tools
- **Vite**: Fast build tool and dev server with HMR
- **esbuild**: Production bundler for server code
- **TypeScript**: Type safety across entire stack
- **Drizzle Kit**: Database migration and schema management CLI

### Asset Management
- Static assets stored in `attached_assets/` directory
- Images aliased via `@assets` for clean imports
- Design guidelines documented in `design_guidelines.md`

### Key Integration Points
- Database connection requires `DATABASE_URL` environment variable
- Vite dev server proxies API requests to Express backend
- Session storage (when implemented) will use PostgreSQL via connect-pg-simple
- Form validation schemas derive from Drizzle schemas for consistency