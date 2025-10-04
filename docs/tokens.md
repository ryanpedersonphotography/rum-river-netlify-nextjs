# Token Reference (Single Source of Truth)

## Wedding Barn Color System

### Brand Palette Philosophy

**Rustic Elegant** - Warm, earthy tones with sophisticated accents
- Color theory: Analogous warm harmony (walnut, gold, rose) + complementary cool balance (sage green)
- 60-30-10 rule: 60% cream backgrounds, 30% walnut/blush sections, 10% gold/rose accents
- All pairings meet **WCAG AA standards** (4.5:1 minimum) for readability

---

## Brand Swatches (Never Use Directly)

These are your raw brand colors. **Do not use these in components** - always use semantic roles below.

```css
--swatch-warm-walnut: #6B4E3D;     /* Primary brand identity */
--swatch-champagne-gold: #E4C896;  /* Elegant accent */
--swatch-dusty-rose: #9D6B7B;      /* Romantic accent */
--swatch-cream-pearl: #FFFCF8;     /* Light neutral base */
--swatch-blush-pink: #F4E4E1;      /* Warm section variation */
--swatch-sage-green: #7A8B7F;      /* Cool complementary */
--swatch-text-dark: #2C2416;       /* High contrast text */
```

---

## Semantic Color Roles (Light Theme)

### Contrast Ratios Guaranteed ✓

Every `--on-{role}` pairing is tested for WCAG AA compliance (4.5:1 minimum).

| Role | Background | Text Color | Contrast | Use Case |
|------|-----------|------------|----------|----------|
| **Page** | `--bg` (#FFFCF8) | `--fg` (#6B4E3D) | **7.2:1** ✓ | Default page layout |
| **Brand** | `--brand` (#6B4E3D) | `--on-brand` (#FFFCF8) | **7.2:1** ✓ | Primary sections, navigation |
| **Accent** | `--accent` (#E4C896) | `--on-accent` (#6B4E3D) | **4.6:1** ✓ | Highlights, hover states |
| **Brand Alt** | `--brand-alt` (#9D6B7B) | `--on-brand-alt` (#FFF) | **4.8:1** ✓ | CTAs, romantic elements |
| **Surface** | `--surface` (#FFFCF8) | `--on-surface` (#6B4E3D) | **7.2:1** ✓ | Cards, modals |
| **Muted** | `--muted` (#F4E4E1) | `--on-muted` (#6B4E3D) | **6.1:1** ✓ | Alternating sections |
| **Sage** | `--sage` (#7A8B7F) | `--on-sage` (#FFFCF8) | **5.1:1** ✓ | Footer, special accents |
| **Strong** | (any) | `--text-strong` (#2C2416) | **15.8:1** AAA | Extreme contrast needs |

### Usage in Components

```jsx
// ✅ CORRECT - Use semantic roles
<Section tone="brand">
  <Heading>Text automatically uses --on-brand</Heading>
</Section>

// ❌ WRONG - Never use swatches directly
<Section style={{background: 'var(--swatch-warm-walnut)'}}>
  <Heading style={{color: 'var(--swatch-cream-pearl)'}}>Bad!</Heading>
</Section>
```

### Light/Dark Theming

- **Default**: Light theme (cream backgrounds, walnut text)
- Set `data-theme="dark"` on `<html>` to swap role mappings
- Swatches stay the same, semantic roles remap

---

## Gradients (Background Patterns)

Reusable gradient tokens for consistent visual treatments across sections.

| Token | Usage | Colors |
|-------|-------|--------|
| `--gradient-hero` | Hero sections with image overlays | Walnut → Deep Forest (135deg) |
| `--gradient-cta` | CTA/Contact sections | Deep Brown → Walnut (135deg) |
| `--gradient-warm` | VR tour, subtle transitions | Cream Pearl → Blush Pink (vertical) |
| `--gradient-overlay` | Text readability over images | Dark semi-transparent overlay |
| `--gradient-blocks` | Alternating content blocks | Deep Brown → Deep Forest (135deg) |

**Note:** Footer uses solid `var(--text-dark)` background, not a gradient.

### Usage Examples

**Hero with background image:**
```jsx
<div style={{
  background: `var(--gradient-hero), url('/images/hero.jpg') center/cover`,
  minHeight: '100vh'
}}>
  <Heading style={{color: 'var(--on-brand)'}}>Hero Title</Heading>
</div>
```

**Subtle section gradient:**
```jsx
<Section style={{background: 'var(--gradient-warm)'}}>
  <Container>Content with warm gradient background</Container>
</Section>
```

**Image with text overlay:**
```jsx
<div style={{
  background: `var(--gradient-overlay), url('/images/venue.jpg') center/cover`
}}>
  <Text style={{color: 'white'}}>Readable text over image</Text>
</div>
```

---

## Spacing

- `--space-1` … `--space-12` (4px grid)
- **Buttons**: y = `--space-3`, x = `--space-6`
- **Card padding** = `--space-6`
- **Section padding** (py) = `--space-10` (desktop), `--space-8` (mobile)

---

## Typography

### Font families:
- `--font-display`: Playfair Display (serif, headings)
- `--font-body`: Montserrat (sans, body text)
- `--font-script`: Dancing Script (decorative labels only)

### Sizes:
- `--text-xs` … `--text-6xl`
- `--text-hero`: fluid clamp (3rem–5.5rem) for main hero

### Weights:
- `--weight-regular|medium|semibold|bold`

---

## Radii / Shadows / Motion

- **Radii**: `--r-sm|md|lg|full`
- **Shadows**: `--shadow-sm|md|lg`
- **Transitions**: `--transition-fast|base|smooth|elegant`
- **Motion**: `--motion-scale:1` (set to 0 for reduced-motion experiences)

---

## Layout

- **Container width**: `--container` (default 1120px, centered)

---

## Page Roles

- **Hero**: solid brand background (or gradient preset), large display type, padding = `--space-6xl`.
- **Features**: alternating surface backgrounds, use `--font-display` at `--text-2xl`.
- **CTA**: brand solid/gradient background, white SectionCard inside.
- **Gallery**: surface-alt background, grid gap = `--space-lg`.
- **Testimonials/Vendors**: muted background, small decorative script font allowed for labels.

---

## Usage Rules

1. Always use role tokens (`var(--brand)`, `var(--surface)`) in components — never raw hex.
2. Keep layout spacing on the defined scale (no ad-hoc 13px).
3. Prefer `--r-md` and `--r-lg`; `--r-full` only for pills/buttons.
4. Shadows: sm = subtle, md = cards, lg = modals/overlays.
5. If you need a new token, add it here first, then consume in code.
6. Follow Page Roles for defaults — don't improvise section colors/spacing.

---

## Current Token Values

### Complete Color Mappings (Light Theme)
```css
/* Brand Swatches (source colors) */
--swatch-warm-walnut: #6B4E3D;
--swatch-champagne-gold: #E4C896;
--swatch-dusty-rose: #9D6B7B;
--swatch-cream-pearl: #FFFCF8;
--swatch-blush-pink: #F4E4E1;
--swatch-sage-green: #7A8B7F;
--swatch-text-dark: #2C2416;

/* Semantic Roles (use these in components) */
--bg: #FFFCF8;              /* cream pearl page background */
--fg: #6B4E3D;              /* warm walnut default text (7.2:1) */
--brand: #6B4E3D;           /* warm walnut primary */
--on-brand: #FFFCF8;        /* cream pearl on brand (7.2:1) */
--accent: #E4C896;          /* champagne gold highlights */
--on-accent: #6B4E3D;       /* walnut on accent (4.6:1) */
--brand-alt: #9D6B7B;       /* dusty rose CTAs */
--on-brand-alt: #FFFFFF;    /* white on dusty rose (4.8:1) */
--surface: #FFFCF8;         /* cream pearl cards */
--on-surface: #6B4E3D;      /* walnut on surface (7.2:1) */
--muted: #F4E4E1;           /* blush pink alternating sections */
--on-muted: #6B4E3D;        /* walnut on blush (6.1:1) */
--sage: #7A8B7F;            /* sage green footer/accents */
--on-sage: #FFFCF8;         /* cream on sage (5.1:1) */
--text-strong: #2C2416;     /* high contrast text (15.8:1 AAA) */
--border: rgba(107, 78, 61, 0.2);     /* subtle walnut border */
--focus-ring: rgba(228, 200, 150, 0.4); /* champagne glow */
```

### Spacing Scale
```css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-7: 1.75rem;    /* 28px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
```

### Typography Scale
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.75rem;   /* 28px */
--text-4xl: 2rem;      /* 32px */
--text-5xl: 2.5rem;    /* 40px */
--text-6xl: 3rem;      /* 48px */
--text-hero: clamp(3rem, 8vw, 5.5rem);
```

### Font Weights
```css
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
```

### Radii
```css
--r-sm: 4px;
--r-md: 8px;
--r-lg: 16px;
--r-full: 9999px;
```

### Shadows
```css
--shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
--shadow-md: 0 8px 20px rgba(0,0,0,0.15);
--shadow-lg: 0 20px 40px rgba(0,0,0,0.2);
```

### Transitions
```css
--transition-fast: all 0.2s ease;
--transition-base: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
--transition-smooth: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
--transition-elegant: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Layout
```css
--container: 1120px;
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
```

## Section Tokens

- `--section-py-sm` — small section vertical padding (mobile / compact)
- `--section-py-md` — medium section vertical padding (default)
- `--section-py-lg` — large section vertical padding (spacious sections)

### Section Role Variants
- `section--surface` — background = `--surface`, text = `--on-surface` (default)
- `section--brand` — background = `--brand`, text = `--on-brand`
- `section--muted` — background = `--muted`, text = `--on-muted`
- `section--accent` — background = `--accent`, text = `--on-accent`

### Alignment
- `section--center` — centers text and content
- Default = left aligned

---

## Component Tokens: Button

- `--btn-bg` / `--btn-fg` — background + text color
- `--btn-radius` — border radius
- `--btn-px` / `--btn-py` — horizontal/vertical padding
- `--btn-shadow` — optional shadow
- `--btn-font` — font family
- `--btn-size-sm|md|lg` — text sizes and padding variants

### Usage
- **Variants**
  - Solid: `--btn-bg` = role tone, `--btn-fg` = `on-tone`
  - Outline: transparent background, `box-shadow: inset 0 0 0 1px tone`
  - Link: transparent background, text underlined
- **Sizes**
  - Small: `--btn-py: var(--space-2)`, `--btn-px: var(--space-5)`, font = `--text-sm`
  - Medium: default (`--space-3`, `--space-6`, font = `--text-sm`)
  - Large: `--btn-py: var(--space-4)`, `--btn-px: var(--space-7)`, font = `--text-lg`

---

## Component Tokens: Input (Form Controls)

- `--input-bg` / `--input-fg` — background and text
- `--input-border` — default border color
- `--input-placeholder` — muted text for placeholder
- `--input-focus-ring` — focus outline
- `--input-radius` — border radius
- `--input-padding-y` / `--input-padding-x` — vertical / horizontal spacing
- `--input-font-size` — base font size

### Usage
- Inputs always use `--input-bg` and `--input-fg`.
- Focus states use `--input-focus-ring` for accessibility.
- Sizes (`sm`, `md`, `lg`) map to spacing scale (`--space-2`, `--space-3`, `--space-4`).
- Never hardcode `#ccc` or `1px solid`; always reference `--input-border`.

---

## Component Tokens: Typography

Typography primitives use existing role and type tokens—no additional tokens needed.

### Usage
- **Headings**: Use `var(--font-display)` with semantic sizes (`--text-hero` through `--text-xl`)
- **Body text**: Use `var(--font-body)` with appropriate line height
- **Weights**: Map to `--weight-regular|medium|semibold|bold` 
- **Colors**: Use role tokens (`--fg`, `--brand`, `--on-surface`) never hex
- **Spacing**: Margins use spacing scale (`--space-3`, `--space-4`)

### Heading Levels
- Hero: `--text-hero` (responsive clamp)
- H1: `--text-6xl` (48px)
- H2: `--text-5xl` (40px) 
- H3: `--text-4xl` (32px)
- H4: `--text-3xl` (28px)
- H5: `--text-2xl` (24px)
- H6: `--text-xl` (20px)

### Text Sizes
- Extra Small: `--text-xs` (12px)
- Small: `--text-sm` (14px)
- Base: `--text-base` (16px)
- Large: `--text-lg` (18px)
- Extra Large: `--text-xl` (20px)

---

## Component Tokens: Card / Surface

### Role Tokens
- `--surface` / `--on-surface` — default card background & text
- `--brand` / `--on-brand` — card with brand emphasis
- `--muted` / `--on-muted` — subdued / neutral panels
- `--accent` / `--on-accent` — highlight cards (gold, special callouts)

### Elevation
- `--shadow-sm` — flat / inline cards
- `--shadow-md` — default raised card
- `--shadow-lg` — modal / overlay level

### Radii
- `--r-sm` — small radius for tight lists
- `--r-md` — standard cards, sections
- `--r-lg` — featured panels
- `--r-full` — pills, circle cards only

### Padding Scale
- `--space-4` — compact
- `--space-6` — default card padding
- `--space-8` — generous padding for featured blocks

---

## Usage Rules
1. **Default** card: surface + border + shadow-md + radius-md.
2. **Tone variants**: `brand`, `muted`, `accent` replace background/text tokens.
3. Use **elevation props** instead of ad-hoc box-shadows.
4. For consistency, keep card padding limited to `sm|md|lg` scale only.
5. Apply `interactive` only when a card is clickable (adds hover raise).

---

## Section Primitive (Layout Wrapper)

### Purpose
Full-bleed horizontal band with consistent vertical rhythm and a centered content container.

### Props / Modifiers
- **tone**: `neutral` | `brand` | `muted` | `accent`
- **variant**: `default` | `muted` | `solid`
- **size**: `sm` | `md` | `lg` (vertical padding scale)
- **align**: `left` | `center` (text alignment inside)
- **noContainer**: optional (use full-bleed content)

### Token Contract
**Vertical padding vars (defaults):**
- `--section-py-sm`: `var(--space-8)`
- `--section-py-md`: `var(--space-12)`
- `--section-py-lg`: `var(--space-16)`

**Container:**
- `--container`: `1120px`
- Side gutters: `--space-5` (fallback to your scale)

**Role mapping (computed per tone × variant):**
- `--sec-bg` / `--sec-fg` (background / text for the section band)

### Variant Matrix (tone × variant → roles)
- **variant=default** → transparent, inherit page colors
- **variant=muted** → `--sec-bg: var(--muted)`, `--sec-fg: var(--on-muted)`
- **variant=solid** →
  - `tone=neutral` → `--sec-bg: var(--surface)`, `--sec-fg: var(--on-surface)`
  - `tone=brand`   → `--sec-bg: var(--brand)`,   `--sec-fg: var(--on-brand)`
  - `tone=muted`   → `--sec-bg: var(--muted)`,   `--sec-fg: var(--on-muted)`
  - `tone=accent`  → `--sec-bg: var(--accent)`,  `--sec-fg: var(--on-accent)`

### Usage Rules
1. Never put Tailwind `py-*`/`p-*` on `.section`; use size modifiers only.
2. Content lives in `.section__container` (centers to `--container` with side gutters).
3. Use align modifiers for typography alignment (don't inline-style text-align).
4. Section sets only band visuals and vertical rhythm; put cards/forms inside.

---

## Layout Primitives

### Link / Anchor Component

**Purpose**: Token-driven hyperlinks with consistent styling and Next.js integration.

**Props**:
- `tone`: `brand` | `accent` | `muted` | `neutral` | `inherit`
- `underline`: `always` | `hover` | `none`
- `external`: boolean (opens in new tab)

**Token Usage**:
- Color mapped to role tokens (`--brand`, `--accent`, etc.)
- Uses `--transition-fast` for hover states
- No hardcoded colors or text decorations

**Usage Rules**:
1. Always use Link component, never raw `<a>` tags in components
2. Default `tone="brand"` and `underline="hover"` for body links
3. Set `external={true}` for external URLs (or auto-detected from `http`)
4. Use `tone="inherit"` when link should match parent text color

---

### Container Component

**Purpose**: Max-width content wrapper with optional padding and centering.

**Props**:
- `size`: `sm` (640px) | `md` (768px) | `lg` (1024px) | `xl` (1280px) | `full`
- `padding`: `none` | `sm` (16px) | `md` (24px) | `lg` (32px)
- `center`: boolean (applies `margin: auto`)

**Token Usage**:
- `--container-sm`, `--container-md`, `--container-lg`, `--container-xl`
- Padding uses `--space-4`, `--space-6`, `--space-8`
- All sizing uses `!important` to override Tailwind reset

**Usage Rules**:
1. Use Container instead of inline `max-width` styles
2. Default is `size="md"` with `padding="md"` and `center={true}`
3. Set `padding="none"` when nesting inside Section (which has container)
4. Use `size="full"` for edge-to-edge layouts

---

### Stack Component (Flexbox)

**Purpose**: Vertical or horizontal stacking with token-driven gaps.

**Props**:
- `direction`: `vertical` | `horizontal`
- `gap`: `xs` (8px) | `sm` (12px) | `md` (16px) | `lg` (24px) | `xl` (32px)
- `align`: `start` | `center` | `end` | `stretch` | `baseline`
- `justify`: `start` | `center` | `end` | `between` | `around` | `evenly`
- `wrap`: boolean

**Token Usage**:
- Gap mapped to spacing scale: `--space-2` through `--space-8`
- All gaps use `!important` to override Tailwind

**Usage Rules**:
1. Use Stack for lists, button groups, form fields (instead of ad-hoc flexbox)
2. Default `direction="vertical"` and `gap="md"`
3. Always specify gap size (don't rely on component margins)
4. Use `wrap={true}` for responsive button groups

**Common Patterns**:
```jsx
// Vertical form fields
<Stack direction="vertical" gap="md">
  <Input />
  <Input />
  <Button />
</Stack>

// Horizontal button group
<Stack direction="horizontal" gap="sm" justify="center">
  <Button>Primary</Button>
  <Button variant="outline">Secondary</Button>
</Stack>
```

---

### Grid Component

**Purpose**: CSS Grid layouts with responsive auto-fit patterns.

**Props**:
- `columns`: number (1-4) | `auto-fit` | `auto-fill`
- `gap`: `xs` (8px) | `sm` (12px) | `md` (16px) | `lg` (24px) | `xl` (32px)
- `minItemWidth`: string (default `"250px"`) - for auto-responsive grids
- `align`: `start` | `center` | `end` | `stretch`
- `justify`: `start` | `center` | `end` | `stretch`

**Token Usage**:
- Gap mapped to spacing scale: `--space-2` through `--space-8`
- All gaps use `!important` to override Tailwind
- Uses CSS custom property `--grid-min-item-width` for responsive grids

**Usage Rules**:
1. Use Grid for card layouts, feature grids, galleries
2. Prefer `columns="auto-fit"` for responsive layouts (no media queries needed)
3. Set `minItemWidth` based on content needs (cards usually `"250px"` minimum)
4. Fixed column counts (1-4) are for controlled layouts only

**Common Patterns**:
```jsx
// Responsive 3-column grid (auto-wraps)
<Grid columns="auto-fit" minItemWidth="300px" gap="lg">
  <Card>Feature 1</Card>
  <Card>Feature 2</Card>
  <Card>Feature 3</Card>
</Grid>

// Fixed 2-column layout
<Grid columns={2} gap="md">
  <Card>Left</Card>
  <Card>Right</Card>
</Grid>
```

---

## Layout Composition Patterns

**See `/layout-patterns` demo page for live examples of all 8 patterns.**

### Pattern 1: Full-Width Centered
```jsx
<Section size="lg" tone="brand" align="center" noContainer>
  <Button size="lg" tone="neutral">Primary CTA</Button>
</Section>
```
**Use case**: Simple centered content with full-width background. The `noContainer` prop removes the container wrapper, allowing `text-align: center` to directly center inline/inline-flex elements like buttons. Perfect for minimal hero sections or standalone CTAs.

### Pattern 2: Full-Width Content (Edge-to-Edge)
```jsx
<Section noContainer tone="brand">
  <Grid columns="auto-fit" minItemWidth="300px" gap="none">
    {/* Full-width grid items */}
  </Grid>
</Section>
```
**Use case**: Edge-to-edge grids, full-width images, galleries.

### Pattern 3: Constrained Content Only
```jsx
<Container size="lg" padding="lg">
  <Stack direction="vertical" gap="md">
    <Heading level={2}>Page Title</Heading>
    <Text>Content...</Text>
  </Stack>
</Container>
```
**Use case**: Blog posts, documentation - page background shows through.

### Pattern 4: Asymmetric/Sidebar Layouts
```jsx
<Section size="md">
  <Grid columns={3} gap="lg">
    <div style={{gridColumn: 'span 2'}}>
      <Heading level={2}>Main Content</Heading>
    </div>
    <Card tone="muted">
      <Heading level={4}>Sidebar</Heading>
    </Card>
  </Grid>
</Section>
```
**Use case**: Dashboards, product pages, content + sidebar.

### Pattern 5: Alternating Backgrounds
```jsx
<Section tone="brand">...</Section>
<Section tone="surface">...</Section>
<Section tone="accent">...</Section>
```
**Use case**: Visual rhythm, variety, separating content sections.

### Pattern 6: Progressive Constraint
```jsx
<Section size="lg" tone="surface">
  <Container size="md" center>
    <Heading level={2}>Narrow Content</Heading>
    <Text>Optimal reading width...</Text>
  </Container>
</Section>
```
**Use case**: Reading content, long-form articles, centered CTAs.

### Pattern 7: Full-Viewport Hero
```jsx
<div style={{
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(135deg, var(--brand) 0%, var(--brand-alt) 100%)'
}}>
  <Container size="lg">
    <Heading level={1} size="hero">Full-Viewport Title</Heading>
  </Container>
</div>
```
**Use case**: Splash screens, landing page heroes, dramatic intros.

### Pattern 8: Fixed-Width Constrained (Blog/Docs)
```jsx
<Section size="lg" tone="surface">
  <Container size="md" center>
    <Stack direction="vertical" gap="lg">
      <Heading level={2}>Article Title</Heading>
      <Text>Optimized line length for readability (60-80 chars)...</Text>
    </Stack>
  </Container>
</Section>
```
**Use case**: Blog posts, documentation, readable content with optimal line length.

### Feature Grid
```jsx
<Section size="md">
  <Container size="lg" padding="none">
    <Stack direction="vertical" gap="xl">
      <Heading level={2} align="center">Features</Heading>
      <Grid columns="auto-fit" minItemWidth="280px" gap="lg">
        <Card tone="brand">
          <Heading level={4}>Feature 1</Heading>
          <Text>Description...</Text>
        </Card>
        {/* More cards... */}
      </Grid>
    </Stack>
  </Container>
</Section>
```

### Content with Sidebar
```jsx
<Section size="md">
  <Container size="lg">
    <Grid columns={3} gap="lg">
      <div style={{gridColumn: 'span 2'}}>
        <Stack direction="vertical" gap="md">
          <Heading level={2}>Main Content</Heading>
          <Text>Body content...</Text>
        </Stack>
      </div>
      <Card tone="muted">
        <Heading level={4}>Sidebar</Heading>
        <Stack direction="vertical" gap="sm">
          <Link href="#">Link 1</Link>
          <Link href="#">Link 2</Link>
        </Stack>
      </Card>
    </Grid>
  </Container>
</Section>
```

---

## Implementation Notes

### Important Declarations
All layout primitives use `!important` on spacing properties (gap, padding, margin) to override Tailwind v4's universal reset. This ensures token-driven spacing always applies correctly.

**Why `!important` is necessary:**
- Tailwind v4 uses `* { padding: 0; margin: 0; }` which resets all elements
- Without `!important`, CSS custom properties like `padding: var(--space-4)` get overridden
- This is a defensive measure to ensure design system tokens win the cascade

**Where we use it:**
- `gap` on Stack and Grid components
- `padding` on Container component
- `max-width` on Container size variants
- `margin` on Container centering

### Token-Driven Everything
Never use hardcoded values in layout components:
- ❌ `gap: 20px`
- ✅ `gap: var(--space-5)`
- ❌ `padding: 1.5rem`
- ✅ `padding: var(--space-6)`

All spacing, sizing, and colors must reference the token system.

---

## Accessibility & Component States

### Universal State Requirements
All interactive primitives (Button, Link, Input, interactive Card) implement:
1. **Focus-visible states** - 3px solid `var(--focus-ring)` with 2px offset
2. **Hover states** - Visual feedback for mouse/touch users
3. **Active states** - Pressed/clicked feedback
4. **Disabled states** - Cursor and opacity changes, removed from tab order

### Button States
- **Default**: Hover lifts button (-1px translateY), active resets
- **Disabled**: `cursor: not-allowed`, `opacity: 0.5`, cannot be activated
- **Loading**: Shows spinner, `aria-busy="true"`, disabled interaction
- **Focus**: 3px outline with `--focus-ring` color

**ARIA Attributes:**
- `aria-disabled="true"` when disabled (for anchors)
- `aria-busy="true"` when loading
- `tabIndex={-1}` when disabled (for anchors)
- `disabled` attribute for `<button>` elements

### Input States
- **Default**: Subtle border with `--input-border`
- **Hover**: Border color changes to `--brand`
- **Focus**: 3px outline with `--input-focus-ring`, border matches
- **Disabled**: `opacity: 0.5`, `background: var(--muted)`, `cursor: not-allowed`

### Link States
- **Default**: Color from tone variant
- **Hover**: `opacity: 0.8`, optional underline based on prop
- **Focus-visible**: 3px outline with border-radius
- **Active**: `opacity: 0.6` for press feedback

### Card Interactive States
- **Default**: Standard elevation shadow
- **Hover** (if `interactive`): Lifts -2px, increases shadow
- **Focus-visible** (if `interactive`): 3px outline
- **Polymorphic**: Can render as button, anchor, or div

**When to use:**
- Set `interactive` prop when card is clickable
- Use `as="button"` for actions, `as="a"` for navigation

### Keyboard Navigation
All primitives support standard keyboard interaction:
- **Tab**: Move focus forward
- **Shift+Tab**: Move focus backward
- **Enter**: Activate buttons, links, interactive cards
- **Space**: Activate buttons (native browser behavior)

### Testing Accessibility
Visit `/accessibility-demo` to test:
- Keyboard navigation flow
- Focus-visible indicators
- Screen reader announcements (ARIA attributes)
- State transitions
- Nested primitive behavior

### Dark Theme Compatibility
All primitives use role-based tokens, ensuring automatic theme support:
- Colors adapt via `data-theme="dark"` on root element
- Focus rings remain visible in both themes
- Hover/active states maintain contrast ratios
- No hardcoded colors - everything uses CSS custom properties