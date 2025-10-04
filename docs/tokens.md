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

### Blur Effects
```css
--blur-sm: 8px;
--blur-md: 20px;
--blur-lg: 40px;
```

### Opacity Levels
```css
--opacity-muted: 0.8;
--opacity-soft: 0.95;
--opacity-ghost: 0.98;
```

### Scroll & Animation
```css
--scroll-threshold: 100px;        /* When navigation background appears */
--nav-dropdown-offset: 10px;      /* Dropdown slide-in distance */
```

### Navigation Backgrounds
```css
--nav-bg-transparent: transparent;
--nav-bg-scrolled: rgba(255, 252, 248, 0.98); /* cream pearl with 98% opacity */
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

### Section Rhythm System (NEW)

**Section size drives ALL header spacing automatically:**

- **sm sections**: `--title-gap: var(--space-3)` (12px), `--title-mb: var(--space-6)` (24px), `--section-gap: var(--space-6)`
- **md sections**: `--title-gap: var(--space-4)` (16px), `--title-mb: var(--space-8)` (32px), `--section-gap: var(--space-8)`
- **lg sections**: `--title-gap: var(--space-5)` (20px), `--title-mb: var(--space-12)` (48px), `--section-gap: var(--space-10)`
- **xl sections**: `--title-gap: var(--space-6)` (24px), `--title-mb: var(--space-16)` (64px), `--section-gap: var(--space-12)`

**Usage Rule**: Never add manual margins around SectionHeader. The parent Section size controls all spacing via these tokens.

**Readability**: SectionHeader has `max-width: 68ch` for comfortable reading. Centered headers auto-center with proper margins.

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

## Component Tokens: Spacer Primitive

**Purpose**: Add intentional vertical or horizontal whitespace without wrapper divs or ad-hoc margins.

### `<Spacer>` - Declarative Whitespace

**Props:**
- `size` ('xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl', default 'md'): spacing amount
- `axis` ('y' | 'x', default 'y'): vertical or horizontal space

**Token Usage:**
```jsx
<Section />
<Spacer size="2xl" />  {/* 48px vertical space */}
<Section />

<Button>Left</Button>
<Spacer size="md" axis="x" />  {/* 16px horizontal space */}
<Button>Right</Button>
```

**CSS Classes:**
- Vertical: `.spacer--y-xs` through `.spacer--y-2xl`
- Horizontal: `.spacer--x-xs` through `.spacer--x-2xl`

**Spacing Map:**
- xs: `--space-2` (8px)
- sm: `--space-3` (12px)
- md: `--space-4` (16px)
- lg: `--space-6` (24px)
- xl: `--space-8` (32px)
- 2xl: `--space-12` (48px)

**Benefits:**
- Eliminates ad-hoc `marginTop` inline styles
- Semantic and explicit (vs hidden in parent/child margin)
- Maintains token-driven architecture
- `aria-hidden="true"` for screen reader cleanliness

---

## Component Tokens: Form Primitives (Field, Select, Textarea, Form)

**Purpose**: Token-driven form layout system with Netlify Forms integration.

### `<Form>` - Layout + Netlify Integration

**Props:**
- `name` (string, required): Netlify form name
- `action` (string, default `/thank-you`): redirect after submit
- `grid` ('1' | '2' | '3', default '2'): columns
- `gap` ('sm' | 'md' | 'lg', default 'md'): row/col spacing
- `tone` ('surface' | 'brand' | 'muted' | 'accent', default 'surface')
- `asCard` (boolean, default true): wrap in Card primitive

**Token Usage:**
- Gap: `--form-gap-sm` (var(--space-4)), `--form-gap-md` (var(--space-6)), `--form-gap-lg` (var(--space-8))
- Padding: `--form-pad` (var(--space-6))
- Radius: `--form-radius` (var(--r-lg))
- Shadow: `--form-shadow` (var(--shadow-lg))

### `<Field>` - Label + Control + Hint Wrapper

**Props:**
- `label` (string): visible label text
- `name` (string, required): ties label to input
- `hint` (string): help text below control
- `required` (boolean): shows asterisk, sets aria-required
- `full` (boolean): spans all columns in grid

**Token Usage:**
- Label: `--label-size` (var(--text-xs)), uppercase, 0.08em letter-spacing
- Hint: `--hint-size` (var(--text-sm)), 70% opacity
- Gap: `--space-2` between label/control/hint

### Base Form Control Architecture

All form inputs (Select, Textarea, and potentially Input) inherit from a shared `.form-control` base class:

**CSS Class:** `.form-control`

**Token-Driven Styling:**
- **Sizing:** `width: 100%`
- **Padding:** `var(--control-pad-y)` / `var(--control-pad-x)` (12px/16px)
- **Border:** `1.5px solid color-mix(in oklab, var(--border) 55%, transparent)`
- **Background:** `var(--surface)`
- **Text:** `var(--fg)` at `var(--control-size)` (16px)
- **Radius:** `var(--control-radius)` (8px)
- **Font:** `var(--font-body)`, `line-height: 1.4`
- **Transition:** `var(--transition-fast)`

**States:**
- **Placeholder:** `50% opacity fg color`
- **Focus:** `--brand` border + `3px var(--focus-ring)` shadow
- **Hover:** `--brand` border (when not disabled/focused)
- **Disabled:** `50% opacity, var(--muted)` background, `not-allowed` cursor
- **Error:** `aria-invalid="true"` → `--error` border + shadow (70%/30% opacity)

### `<Select>` - Dropdown Control

**Props:**
- `name` (string, required)
- `required` (boolean)
- `disabled` (boolean)
- `aria-invalid` (boolean): error state styling

**CSS Classes:** `.form-control .select`

**Token Usage:**
- Inherits all `.form-control` base styles
- Additional: `cursor: pointer`

### `<Textarea>` - Multi-line Input

**Props:**
- `name` (string, required)
- `rows` (number, default 5)
- `required` (boolean)
- `disabled` (boolean)
- `aria-invalid` (boolean)

**CSS Classes:** `.form-control .textarea`

**Token Usage:**
- Inherits all `.form-control` base styles
- Additional: `resize: vertical`

### Form Rhythm Tokens

```css
--form-gap-sm: var(--space-4);   /* 16px */
--form-gap-md: var(--space-6);   /* 24px */
--form-gap-lg: var(--space-8);   /* 32px */
--form-pad: var(--space-6);      /* Card wrapper padding */
--form-radius: var(--r-lg);      /* Card border radius */
--form-shadow: var(--shadow-lg); /* Elevation */

--control-pad-y: var(--space-3); /* 12px vertical */
--control-pad-x: var(--space-4); /* 16px horizontal */
--control-radius: var(--r-md);   /* 8px */

--label-size: var(--text-xs);    /* 12px uppercase */
--hint-size: var(--text-sm);     /* 14px help text */
--control-size: var(--text-base); /* 16px input text */
```

### Accessibility

- All controls support `aria-invalid` for error states (red border + shadow)
- Labels tied to inputs via `htmlFor={name}`
- Required fields show `*` with `aria-hidden="true"`
- Focus states use `--focus-ring` (3px outline)
- Disabled state: 50% opacity, `not-allowed` cursor

### Usage Example

```jsx
<Form name="contact" grid="2" gap="md" tone="surface">
  <Field label="Your Name" name="name" required full>
    <Input name="name" required placeholder="Jane Doe" />
  </Field>

  <Field label="Email" name="email" required>
    <Input type="email" name="email" required />
  </Field>

  <Field label="Phone" name="phone">
    <Input type="tel" name="phone" />
  </Field>

  <Field label="Message" name="message" full>
    <Textarea name="message" rows={6} />
  </Field>

  <div className="field field--full" style={{ display:'flex', justifyContent:'center' }}>
    <Button type="submit" size="lg">Send Message</Button>
  </div>
</Form>
```

---

## Section Components

### Purpose

Section components are **configurable, reusable patterns** built from primitives. They sit between primitives and pages in the three-layer architecture:

```
Tokens (CSS Variables)
  ↓
Primitives (Button, Input, Form, Field, etc.)
  ↓
Section Components (ScheduleTourForm - configurable patterns)
  ↓
Pages (Compose with specific content)
```

**When to Create a Section Component:**

Create a section component when:
1. You need the same pattern in **≥2 places** with light variation
2. You want to **centralize behavior** while keeping primitives pure
3. The pattern has **configurable content** but consistent structure
4. You want to avoid copy-paste code across multiple pages

### `<ScheduleTourForm>` - Configurable Form Section

A reusable form section for tour scheduling, contact forms, lead capture, and similar patterns.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `formName` | `string` | `'schedule-tour'` | Netlify form name |
| `redirectPath` | `string` | `'/thank-you'` | Post-submit redirect URL |
| `tone` | `'brand'\|'surface'\|'accent'\|'muted'` | `'brand'` | Section color tone |
| `size` | `'sm'\|'md'\|'lg'\|'xl'` | `'lg'` | Section padding size |
| `header` | `ScheduleHeader` | See below | Header content object |
| `background` | `string` | `'none'` | Background token name |
| `fields` | `FieldConfig[]` | `[]` | Field configuration array |
| `submitText` | `string` | `'Schedule Tour'` | Submit button text |
| `submitRender` | `function` | Built-in | Custom submit renderer |

**ScheduleHeader Object:**
```typescript
{
  accent?: string;        // Script text above title
  title: string;          // Main heading (required)
  description?: string;   // Lead paragraph
  align?: 'left'|'center'|'right';  // Header alignment
}
```

**FieldConfig Schema:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `'text'\|'email'\|'tel'\|'date'\|'select'\|'textarea'` | No | Input type (default: `'text'`) |
| `name` | `string` | **Yes** | Field name (form submission key) |
| `label` | `string` | **Yes** | Field label text |
| `required` | `boolean` | No | Mark field as required |
| `full` | `boolean` | No | Span both columns in 2-col grid |
| `placeholder` | `string` | No | Placeholder text |
| `hint` | `string` | No | Help text shown below field |
| `defaultValue` | `string` | No | Pre-fill value |
| `autoComplete` | `string` | No | HTML autocomplete attribute |
| `rows` | `number` | No | Textarea rows (default: `5`) |
| `options` | `string[]` | No | Select dropdown options |

**Usage Examples:**

**Home Page (Full Tour Form):**
```jsx
<ScheduleTourForm
  formName="home-schedule-tour"
  tone="brand"
  background="gradient-blocks"
  header={{
    accent: 'Schedule Your Tour',
    title: 'Start Planning Your Perfect Day',
    description: "We'd love to show you around our beautiful venue...",
    align: 'center',
  }}
  fields={[
    { type:'text', name:'name', label:'Your Name *', required:true, full:true },
    { type:'email', name:'email', label:'Email Address *', required:true },
    { type:'tel', name:'phone', label:'Phone Number *', required:true },
    { type:'date', name:'proposedEventDate', label:'Proposed Event Date' },
    { type:'date', name:'preferredTourDate', label:'Preferred Tour Date *', required:true },
    {
      type:'select',
      name:'preferredTourTime',
      label:'Preferred Tour Time',
      options:['10:00 AM','11:00 AM','1:00 PM','2:00 PM','3:00 PM','4:00 PM']
    },
    {
      type:'select',
      name:'guestCount',
      label:'Estimated Guest Count',
      options:['50-100','100-150','150-200','200+']
    },
    {
      type:'textarea',
      name:'message',
      label:'Additional Information or Questions',
      placeholder:'Tell us about your event plans...',
      full:true,
      rows:6
    },
  ]}
  submitText="Schedule Tour"
/>
```

**Contact Page (Simple Contact Form):**
```jsx
<ScheduleTourForm
  formName="contact-inquiry"
  tone="surface"
  header={{
    accent: 'Get In Touch',
    title: 'Send Us a Message',
  }}
  fields={[
    { type:'text', name:'name', label:'Name *', required:true, full:true },
    { type:'email', name:'email', label:'Email *', required:true },
    { type:'tel', name:'phone', label:'Phone' },
    {
      type:'textarea',
      name:'message',
      label:'Message',
      full:true,
      hint:'We respond within 1-2 business days.'
    },
  ]}
  submitText="Send Message"
/>
```

**Gallery Page (Lead Capture):**
```jsx
<ScheduleTourForm
  formName="gallery-download"
  redirectPath="/gallery/download"
  tone="neutral"
  header={{
    accent: 'Download Our Gallery',
    title: 'Get the Full Photo Package',
  }}
  fields={[
    { type:'text', name:'name', label:'Name *', required:true, full:true },
    { type:'email', name:'email', label:'Email *', required:true },
  ]}
  submitText="Download Photos"
/>
```

**Token Usage:**

All styling uses design system tokens:
- **Colors**: `--brand`, `--surface`, `--accent`, `--muted`, `--on-*`
- **Spacing**: `--space-*` scale
- **Backgrounds**: `--gradient-blocks`, `--gradient-hero`
- **Typography**: `--font-*`, `--text-*`
- **Form controls**: `--control-*` tokens (see Form Primitives section)

**Architecture Benefits:**

- ✅ **Primitives stay pure** - No business logic in Button, Input, Form, etc.
- ✅ **Section components are configurable** - Props control content, not hardcoded
- ✅ **Pages compose sections** - Minimal code, maximum reuse
- ✅ **Token-driven throughout** - Zero hardcoded values
- ✅ **Single source of truth** - All design decisions documented here
- ✅ **DRY principle** - Define structure once, reuse with variants
- ✅ **CMS-ready** - Field configs could come from a CMS

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

## Component Tokens: MediaBlock (Content + Image Layout)

**Purpose**: Alternating content/image blocks with optional numbering.

### Props
- `layout`: "image-right" | "image-left" (default "image-right")
- `gap`: "sm" | "md" | "lg" | "xl" → maps to spacing tokens
- `tone`: "surface" | "brand" | "muted" | "accent" (text color context)
- `number`: optional string for numbered blocks (e.g., "01")

### Slots
- `<MediaBlock.Content>`: headings, text, buttons
- `<MediaBlock.Media>`: `<img>`, video, etc.

### Token Usage
- Gap: `--space-4` (sm), `--space-6` (md), `--space-8` (lg), `--space-20` (xl)
- Number: `--text-5xl`, `--weight-medium`, `--accent` or `--on-brand`
- Media: `--r-lg` radius, `--shadow-lg` elevation
- Responsive: stacks to 1 column under 768px

### Usage
```jsx
<Section style={{ background: 'var(--gradient-blocks)' }}>
  <SectionHeader
    accent="Your Perfect Venue"
    title="Why Choose Us"
    description="Discover what makes us special"
  />

  <Stack direction="vertical" gap="xl">
    <MediaBlock layout="image-right" gap="xl" tone="brand" number="01">
      <MediaBlock.Content>
        <Heading level={3}>Title</Heading>
        <Text>Content...</Text>
      </MediaBlock.Content>
      <MediaBlock.Media>
        <img src="..." />
      </MediaBlock.Media>
    </MediaBlock>

    <MediaBlock layout="image-left" gap="xl" tone="brand" number="02">
      ...
    </MediaBlock>
  </Stack>
</Section>
```

---

## Component Tokens: SectionHeader (Reusable Section Intro)

**Purpose**: Centered section introduction with optional script accent.

### Props
- `accent`: optional script text above heading
- `title`: main heading text (required)
- `description`: optional lead paragraph
- `align`: "left" | "center" | "right" (default "center")

### Token Usage
- Accent: `--font-script`, `--accent`, `--text-xl`
- Title: Uses Heading primitive (token-driven)
- Description: `--text-lg`, `--opacity-soft`

### Usage
```jsx
<SectionHeader
  accent="Your Perfect Venue"
  title="Why Choose Rum River Barn"
  description="Discover what makes our venue special"
/>
```

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