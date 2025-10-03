# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 (App Router) application demonstrating Netlify Platform features including Edge Functions, Blob Store, and Image CDN. It's designed as a starter template showcasing both implicit and explicit usage of Netlify Core Primitives.

## Development Commands

### Local Development
```bash
# Install dependencies
npm install

# Start development server (requires Netlify CLI)
netlify dev

# Alternative: standard Next.js dev (limited functionality)
npm run dev
```

### Build and Deployment
```bash
# Build the application
npm run build

# Start production server locally
npm run start

# Linting
npm run lint
```

## Architecture

### Application Structure
- **App Router**: Uses Next.js 15 App Router with file-based routing in `/app`
- **Components**: Reusable UI components in `/components` directory
- **Utils**: Utility functions in `utils.js` (browser/server detection, random generators)
- **Styling**: Tailwind CSS with global styles in `/styles/globals.css`

### Key Features Demonstrated
1. **Netlify Blobs**: Object storage for user-generated shapes (`/app/blobs`)
2. **Edge Functions**: Geographic routing via Edge Functions (`/netlify/edge-functions/rewrite.js`)
3. **Image CDN**: Image optimization demonstrations (`/app/image-cdn`)
4. **Server Actions**: Next.js Server Actions for blob uploads (`/app/blobs/actions.js`)
5. **Route Handlers**: API routes for dynamic content (`/app/quotes/random/route.js`)

### Netlify Integration
- **Runtime**: Requires Netlify Next Runtime v5
- **Context Detection**: Uses `process.env.CONTEXT` for environment-aware rendering
- **Automatic Deployment**: Serverless Functions auto-deployed from Route Handlers and Server Actions
- **Edge Functions**: Geographic content delivery via edge computing

## Import Conventions

The project uses absolute imports with `baseUrl: "."` configured in `jsconfig.json`:
```javascript
// Components
import { Card } from 'components/card';
import { Header } from 'components/header';

// Utils
import { getNetlifyContext, uniqueName } from 'utils';
```

## Environment Variables

- `CONTEXT`: Netlify deployment context (dev, deploy-preview, production)
- `NEXT_PUBLIC_DISABLE_UPLOADS`: Controls upload functionality in production demos

## Development Notes

### Local Development Requirements
- **Netlify CLI**: Required for full local functionality (blobs, edge functions)
- **Linking**: Use `netlify link` to connect local dev to deployed site for consistent runtime

### Component Patterns
- Server Components by default (App Router)
- Client Components marked with `'use client'` directive
- Server Actions in separate files (e.g., `actions.js`)
- Shared utilities in root-level `utils.js`

### Styling Approach
- Tailwind CSS with utility-first methodology
- Custom CSS classes defined in `globals.css`
- Background patterns and noise textures via public assets
- Responsive design with mobile-first approach

## Testing and Quality

Run linting before commits:
```bash
npm run lint
```

The project uses ESLint with Next.js configuration for code quality enforcement.