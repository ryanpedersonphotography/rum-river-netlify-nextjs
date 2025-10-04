# Token Reference (Single Source of Truth)

## Colors (Roles)

- `--bg` / `--fg` — page background + default text
- `--surface` / `--on-surface` — cards, modals, section "surface"
- `--brand` / `--on-brand` — primary CTAs (Dusty Rose on white text)
- `--brand-alt` / `--on-brand-alt` — secondary Walnut palette
- `--accent` / `--on-accent` — champagne gold highlights
- `--muted` / `--on-muted` — muted sections / panels
- `--border` — hairlines, input borders
- `--focus-ring` — accessible focus outline

### Light/Dark

- **Default**: light palette (surface = light cream, text = dark brown).
- Set `data-theme="dark"` on `<html>` or a wrapper to swap to dark neutrals (bg = near-black, fg = pale gray).

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

### Colors (Light Theme)
```css
--bg: #FBF8F4;              /* light cream background */
--fg: #2C2416;              /* dark brown text */
--surface: #FBF8F4;         /* same as bg for now */
--on-surface: #2C2416;      /* dark text on surface */
--brand: #9D6B7B;           /* dusty rose primary */
--on-brand: #FFFCF8;        /* light text on brand */
--brand-alt: #6B4E3D;       /* walnut secondary */
--on-brand-alt: #FFFCF8;    /* light text on walnut */
--accent: #E4C896;          /* champagne gold */
--on-accent: #2C2416;       /* dark text on accent */
--muted: #A08A85;           /* mauve for muted sections */
--on-muted: #FFFCF8;        /* light text on muted */
--border: #A08A85;          /* mauve for borders */
--focus-ring: rgba(157, 107, 123, 0.35); /* semi-transparent brand for focus */
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

### Hero Section
```jsx
<Section size="lg" tone="brand" align="center">
  <Stack direction="vertical" gap="lg" align="center">
    <Heading level={1} size="hero">Hero Title</Heading>
    <Text size="xl">Subtitle description</Text>
    <Stack direction="horizontal" gap="md">
      <Button size="lg">Primary CTA</Button>
      <Button size="lg" variant="outline">Secondary</Button>
    </Stack>
  </Stack>
</Section>
```

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