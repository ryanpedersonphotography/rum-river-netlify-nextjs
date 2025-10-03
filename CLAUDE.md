# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 (App Router) application that serves as a **design system foundation** with a comprehensive token-driven architecture. Originally a Netlify Platform starter, it has been transformed into a complete design system implementation with documentation-first component development.

### Design System Architecture

This project implements a **documentation-first, token-driven design system** with the following principles:

#### 1. Single Source of Truth
- **`/docs/tokens.md`** is the authoritative specification for all design decisions
- CSS and React components are implementations of what the documentation promises
- Never add tokens to code without first documenting them in `tokens.md`

#### 2. Token-Driven Everything
- **Zero hardcoded values** in components (no hex colors, px values, etc.)
- All styling uses CSS custom properties from the design system
- Role-based color tokens (`--brand`, `--surface`, `--accent`) not raw colors
- Semantic spacing scale based on 4px grid

#### 3. Component Development Workflow
1. **Document first**: Add component specification to `docs/tokens.md`
2. **Implement CSS**: Add token-driven styles to `styles/globals.css`
3. **Build React component**: Create primitive that consumes CSS tokens
4. **Demo page**: Build comprehensive showcase of all variants
5. **Add to navigation**: Make accessible for testing

#### 4. Design System Rules
- **Always use role tokens** (`var(--brand)`, `var(--surface)`) never raw hex
- **Follow spacing scale** - no ad-hoc values like 13px or 23px
- **Use semantic naming** - tokens describe purpose, not appearance
- **Maintain documentation** - update `docs/tokens.md` before implementing
- **Test in both themes** - light and dark mode compatibility required

## Design System Implementation Status

### ✅ Completed Components
1. **Button System** (`/components/primitives/Button.jsx`)
   - 5 tones × 3 variants × 3 sizes
   - Polymorphic (can render as button, anchor, or any element)
   - Full accessibility support with proper disabled states

2. **Input System** (`/components/primitives/Input.jsx`)
   - All HTML input types supported
   - 3 size variants with token-driven spacing
   - Focus states using design system focus ring

3. **Typography System** (`/components/primitives/Heading.jsx`, `/Text.jsx`)
   - Semantic heading levels with visual size flexibility
   - Role-based color theming
   - Complete weight and alignment options

4. **Card/Surface System** (`/components/primitives/Card.jsx`)
   - 4 tone variants with proper contrast
   - 4 elevation levels using shadow tokens
   - Interactive affordances for clickable cards

### 🎨 Design Token Categories
- **Colors**: Role-based system with light/dark theme support
- **Typography**: 3 font families, complete size scale, 4 weights
- **Spacing**: 4px grid system (`--space-1` through `--space-24`)
- **Radii**: 4 radius options for different use cases
- **Shadows**: 3-level elevation system
- **Transitions**: 4 timing presets for animations

### 📱 Demo Pages
- `/style-audit` - Live token visualization with theme toggle
- `/button-demo` - All button variants and combinations
- `/input-demo` - Form controls and input types
- `/typography-demo` - Complete typography showcase
- `/card-demo` - Surface components and layouts

## Development Commands

### Local Development
```bash
# Install dependencies
npm install

# Start development server (requires Netlify CLI for full features)
netlify dev

# Alternative: standard Next.js dev (limited Netlify functionality)
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

### Design System Development
```bash
# Always run style audit to test token changes
open http://localhost:8888/style-audit

# Test components across all demo pages
open http://localhost:8888/button-demo
open http://localhost:8888/input-demo
open http://localhost:8888/typography-demo
open http://localhost:8888/card-demo
```

## File Structure & Organization

### Core Design System Files
```
/docs/tokens.md              # Single source of truth for all design decisions
/styles/globals.css           # Token definitions and component CSS
/components/primitives/       # Token-driven React components
  ├── Button.jsx             # Button system with tone variants
  ├── Input.jsx              # Form input components
  ├── Heading.jsx             # Typography headings
  ├── Text.jsx               # Body text components
  └── Card.jsx               # Surface/card components
```

### Demo & Testing Pages
```
/app/style-audit/            # Live token visualization with theme toggle
/app/button-demo/            # Button component showcase
/app/input-demo/             # Input component examples
/app/typography-demo/        # Typography system demo
/app/card-demo/              # Card/surface examples
```

### Token Architecture
- **Global tokens** in `:root` - base design system values
- **Dark theme** in `:root[data-theme="dark"]` - theme overrides
- **Component tokens** - scoped variables for specific components
- **Role-based colors** - semantic naming (`--brand`, `--surface`) not raw values

## Design System Rules & Best Practices

### 🚫 Never Do This:
```css
/* DON'T: Hardcoded values */
.my-component {
  color: #9D6B7B;
  padding: 24px;
  border-radius: 8px;
}
```

### ✅ Always Do This:
```css
/* DO: Token-driven approach */
.my-component {
  color: var(--brand);
  padding: var(--space-6);
  border-radius: var(--r-md);
}
```

### Component Development Pattern:
1. **Document in `/docs/tokens.md`** first
2. **Add CSS using tokens** in `styles/globals.css`
3. **Build React component** that maps props to CSS classes
4. **Create demo page** showcasing all variants
5. **Test both themes** using style audit page

### Token Naming Conventions:
- **Colors**: Role-based (`--brand`, `--surface`, `--accent`)
- **Spacing**: Numbered scale (`--space-1` through `--space-24`)
- **Typography**: Semantic sizes (`--text-xs` through `--text-hero`)
- **Component tokens**: Scoped (`--btn-bg`, `--input-border`)

## Legacy Netlify Features (Preserved)

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
// Design System Primitives
import Button from 'components/primitives/Button';
import Input from 'components/primitives/Input';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Card from 'components/primitives/Card';

// Legacy Components
import { Header } from 'components/header';
import { Footer } from 'components/footer';

// Utils
import { getNetlifyContext, uniqueName } from 'utils';
```

## Migration Strategy for Existing Sites

When bringing your existing design to this foundation:

### Phase 1: Token Alignment
1. **Map existing colors** to role tokens in `docs/tokens.md`
2. **Update spacing values** to match 4px grid system
3. **Test token changes** using `/style-audit` page

### Phase 2: Component Migration
1. **Replace hardcoded buttons** with `<Button>` primitives
2. **Migrate form inputs** to `<Input>` components
3. **Convert text elements** to `<Heading>` and `<Text>` primitives
4. **Wrap content** in `<Card>` components where appropriate

### Phase 3: Layout Implementation
1. **Use container tokens** for consistent widths
2. **Apply spacing scale** for consistent rhythm
3. **Test responsive behavior** across breakpoints
4. **Verify theme compatibility** in both light and dark modes

### Example Migration:
```jsx
// BEFORE: Hardcoded styling
<div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">Section Title</h2>
  <p className="text-lg">Content goes here</p>
  <button className="bg-white text-purple-500 px-4 py-2 rounded">
    Action
  </button>
</div>

// AFTER: Token-driven primitives
<Card tone="brand" elevation={2} padding="lg">
  <Heading level={2} noMargin>Section Title</Heading>
  <Text size="lg">Content goes here</Text>
  <Button tone="neutral">Action</Button>
</Card>
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