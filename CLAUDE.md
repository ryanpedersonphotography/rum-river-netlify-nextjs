# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ CRITICAL: Netlify Deployment Configuration

**ALWAYS deploy to this Netlify site:**
- **Site name:** `rum-river-nextjs`
- **URL:** https://rum-river-nextjs.netlify.app
- **Site ID:** bfae5319-6883-43ee-a382-2d7f063fbb9c

**Before deploying, verify link:**
```bash
netlify status  # Should show "Current project: rum-river-nextjs"
```

**If linked to wrong site, fix with:**
```bash
netlify unlink
netlify link --name rum-river-nextjs
```

**NEVER deploy to:**
- ❌ rum-river-final
- ❌ rumriverredesign
- ❌ Any other rum-river variant

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

#### 3. Component Development Workflow (Storybook-First)
1. **Document first**: Add component specification to `docs/tokens.md`
2. **Implement CSS**: Add token-driven styles to component CSS files
3. **Build React component**: Create primitive that consumes CSS tokens
4. **Create Storybook story**: Build comprehensive showcase of all variants
5. **Test in both themes**: Verify light/dark mode using Storybook theme toggle

#### 4. Design System Rules
- **Always use role tokens** (`var(--brand)`, `var(--surface)`) never raw hex
- **Follow spacing scale** - no ad-hoc values like 13px or 23px
- **Use semantic naming** - tokens describe purpose, not appearance
- **Maintain documentation** - update `docs/tokens.md` before implementing
- **Test in both themes** - light and dark mode compatibility required

## Design System Implementation Status

### ✅ Completed Components

#### Primitives (Basic Building Blocks)
1. **Button** ([Button.jsx](components/primitives/Button.jsx), [Stories](components/primitives/Button.stories.jsx))
   - 6 tones × 3 variants (solid, outline, link) × 3 sizes
   - Polymorphic `as` prop (button, anchor, any element)
   - Full accessibility with disabled states
   - Storybook: Primitives / Button

2. **Typography** ([Heading.jsx](components/primitives/Heading.jsx), [Text.jsx](components/primitives/Text.jsx), [Stories](components/primitives/Typography.stories.jsx))
   - **Heading**: Semantic levels (h1-h6) with visual size flexibility
   - **Text**: Complete size scale, weights, alignment options
   - Role-based color theming with `tone` prop
   - Storybook: Primitives / Typography

3. **Input** ([Input.jsx](components/primitives/Input.jsx), [Stories](components/primitives/Input.stories.jsx))
   - All HTML input types supported
   - Token-driven with :where() for low specificity
   - WebKit autofill support, WCAG touch targets (44px)
   - Dark mode stress test story included
   - Storybook: Primitives / Input

4. **Card** ([Card.jsx](components/primitives/Card.jsx), [Stories](components/primitives/Card.stories.jsx))
   - 4 tone variants with proper contrast
   - 4 elevation levels using shadow tokens
   - Interactive affordances for clickable cards
   - Storybook: Primitives / Card

5. **Link** ([Link.jsx](components/primitives/Link.jsx))
   - Styled anchor component with design system integration
   - Tone variants for different contexts

#### Layout Components
6. **Section** ([Section.jsx](components/layout/Section.jsx))
   - Page section wrapper with tone variants (surface, brand, muted, accent)
   - Size options (sm, md, lg, xl, full)
   - Built-in Container support with `noContainer` override
   - Background pattern support
   - Demo: [/components-demo/section-demo](http://localhost:3005/components-demo/section-demo)

7. **Container** ([Container.jsx](components/primitives/Container.jsx))
   - Max-width wrapper with 3 size variants (sm, md, lg)
   - Polymorphic `as` prop for semantic HTML
   - Debug mode with visual boundaries
   - Responsive padding with token-driven spacing

8. **Stack** ([Stack.jsx](components/primitives/Stack.jsx))
   - Flexbox layout for vertical/horizontal stacking
   - Gap tokens (xs through 2xl)
   - Polymorphic `as` prop (div, ul, nav, etc.)
   - Alignment and justification options

9. **Grid** ([Grid.jsx](components/primitives/Grid.jsx))
   - CSS Grid layout with column presets (2, 3, 4 columns)
   - Responsive gap tokens
   - Polymorphic `as` prop for semantic HTML

10. **Spacer** ([Spacer.jsx](components/primitives/Spacer.jsx))
    - Declarative whitespace without wrapper divs
    - Vertical/horizontal spacing
    - Size variants (xs through 2xl)
    - Demo: [/components-demo/spacing-demo](http://localhost:3005/components-demo/spacing-demo)

#### Content Patterns
11. **SectionHeader** ([SectionHeader.jsx](components/primitives/SectionHeader.jsx))
    - Standardized section title pattern
    - Script accent + main heading + description
    - Alignment options (left, center)
    - Locked rhythm system with `--title-gap` and `--title-mb`

12. **MediaBlock** ([MediaBlock.jsx](components/primitives/MediaBlock.jsx))
    - Content + image layout pattern
    - Two layouts: image-right, image-left
    - Optional numbered blocks (e.g., "01", "02")
    - Tone variants for text color context
    - Slots: `<MediaBlock.Content>` and `<MediaBlock.Media>`

#### Form Components
13. **Form** ([Form.jsx](components/forms/Form.jsx))
    - Netlify Forms integration
    - Grid layout (1 or 2 columns)
    - Tone variants with optional card styling
    - Demo: [/components-demo/form-demo](http://localhost:3005/components-demo/form-demo)

14. **Form Controls** ([controls.jsx](components/forms/controls.jsx))
    - **Field**: Label + input wrapper with error states
    - **Select**: Styled select dropdown
    - **Textarea**: Multi-line text input
    - Full/half width variants

15. **ScheduleTourForm** ([ScheduleTourForm.jsx](components/forms/ScheduleTourForm.jsx))
    - Complete venue tour booking form
    - 2-column grid layout with responsive fields
    - Netlify Forms integration
    - Token-driven styling throughout

### 🎨 Design Token Categories
- **Colors**: Role-based system with light/dark theme support
- **Typography**: 3 font families, complete size scale, 4 weights
- **Spacing**: 4px grid system (`--space-1` through `--space-24`)
- **Radii**: 4 radius options for different use cases
- **Shadows**: 3-level elevation system
- **Transitions**: 4 timing presets for animations
- **Gradients**: Hero and block gradient patterns

### 📚 Storybook Documentation

**Primary URL:** http://localhost:6006

All component development and testing now happens in Storybook with:
- **19 Component Stories** - All primitives, forms, sections, and layouts
- **4 Documentation Stories** - Token Probe, Dark Mode Audit, Design Tokens, Design System Overview
- **Dark Mode Toggle** - Test all components in light and dark themes
- **A11y Testing** - Built-in accessibility panel with axe-core
- **Token Enforcement** - Stylelint ensures no hardcoded values

**Key Storybook Features:**
- Live token inspector showing computed CSS custom property values
- Dark mode stress tests for forms and inputs
- Full page composition examples
- Interactive prop controls for all components

## Development Commands

### Local Development
```bash
# Install dependencies
npm install

# Start Storybook (primary component development environment)
npm run storybook
# Opens at http://localhost:6006

# Start development server (requires Netlify CLI for full features)
netlify dev

# Alternative: standard Next.js dev (limited Netlify functionality)
npm run dev
```

### Build and Deployment
```bash
# Build the application
npm run build

# Build Storybook for deployment
npm run build-storybook

# Start production server locally
npm run start

# Linting
npm run lint        # ESLint for JavaScript/React
npm run lint:css    # Stylelint for CSS (enforces token usage)
npm run lint:all    # Both linters
```

### Storybook Development (Primary Workflow)
```bash
# Start Storybook
npm run storybook

# Navigate to component stories:
# - Primitives: Button, Typography, Input, Card, Grid, Stack, etc.
# - Forms: Form, Controls
# - Sections: HomeHero, ScheduleTourForm
# - Layout: Header, Footer, Section
# - Docs: Token Probe, Dark Mode Audit, Design Tokens

# Toggle dark mode with toolbar (sun/moon icon)
# Test all components in both light and dark themes
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

## 🔒 Design System Enforcement

### Automated Token Enforcement (Tier 1-3 Strategy)

This project enforces token usage through **3 layers of protection**:

#### **Tier 1: Pre-commit Hooks** (Husky + lint-staged)
Blocks commits with token violations before they enter the codebase.

```bash
# Runs automatically on git commit:
- Stylelint: Checks CSS for hardcoded colors/spacing
- ESLint: Checks JSX inline styles for hardcoded values
```

**Configuration:**
- [.husky/pre-commit](.husky/pre-commit) - Git hook runner
- [package.json](package.json) - lint-staged configuration

#### **Tier 2: Linting Rules**

**ESLint Custom Rule** ([eslint-local-rules.js](eslint-local-rules.js)):
- Detects hardcoded colors in `style={{ color: '#fff' }}`
- Detects hardcoded spacing in `style={{ padding: '24px' }}`
- Enforces `var(--*)` token usage in inline styles
- **Errors** in components/, **warnings** in *.stories.jsx

**Stylelint Configuration** ([stylelint.config.cjs](stylelint.config.cjs)):
- Requires `var(--space-*)` for padding/margin/gap
- Requires `var(--*)` for colors (allows `color-mix()`)
- Requires `var(--r-*)` for border-radius
- Requires `var(--text-*)` for font-size
- Allows component tokens (`--btn-*`, `--control-*`, etc.)

#### **Tier 3: CI Enforcement** (GitHub Actions)

**Workflow** ([.github/workflows/design-system-check.yml](.github/workflows/design-system-check.yml)):
- Grep checks for hardcoded hex colors (excludes *.stories.jsx)
- Grep checks for hardcoded spacing in CSS
- Runs full lint:all suite
- **Blocks PRs** if violations found

### Testing Enforcement Locally

```bash
# Test individual linters
npm run lint:css    # Stylelint (CSS token enforcement)
npm run lint:js     # ESLint (inline style enforcement)
npm run lint:all    # Both linters

# Test pre-commit hook
git add .
git commit -m "test"  # Will fail if violations exist
```

### What Gets Caught

✅ **Blocked:**
```jsx
// ❌ Hardcoded color
<div style={{ color: '#FF0000' }}>Red text</div>

// ❌ Hardcoded spacing
<div style={{ padding: '24px' }}>Content</div>
```

```css
/* ❌ Hardcoded values in CSS */
.my-class {
  color: #FF0000;
  padding: 24px;
  border-radius: 8px;
}
```

✅ **Allowed:**
```jsx
// ✅ Token-driven inline styles
<div style={{ color: 'var(--brand)', padding: 'var(--space-6)' }}>
  Content
</div>
```

```css
/* ✅ Token-driven CSS */
.my-class {
  color: var(--brand);
  padding: var(--space-6);
  border-radius: var(--r-md);
}
```

### Rollout Status

| Layer | Status | Coverage |
|-------|--------|----------|
| **Husky pre-commit** | ✅ Active | All commits |
| **ESLint inline rule** | ✅ Active | components/, app/ |
| **Stylelint CSS rule** | ✅ Active | styles/**/*.css |
| **CI PR checks** | ✅ Active | All pull requests |

**Known Violations** (to be fixed):
- `app/isolated-demo/page.jsx` - minHeight values (3 instances)
- `app/page.jsx` - minHeight value (1 instance)
- `app/thank-you/page.jsx` - icon dimensions (3 instances)
- `components/layout/Header.jsx` - logo height (1 instance)

These are tracked and will be migrated to use viewport units or container tokens.

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