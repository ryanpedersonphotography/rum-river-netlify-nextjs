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

## Section (Layout Wrapper)

### Purpose
Consistent vertical rhythm + centered content. Wrap page chunks:
`<Section><Card>…</Card></Section>`.

### Tokens
- Spacing:
  - `--section-py-sm` (default `--space-8`)
  - `--section-py-md` (default `--space-10`)
  - `--section-py-lg` (default `--space-12`)
- Container:
  - `--container` (max width)
  - Side padding uses `--space-5`
- Tone → role tokens:
  - `surface` → `--surface` / `--on-surface`
  - `brand`   → `--brand` / `--on-brand`
  - `muted`   → `--muted` / `--on-muted`
  - `accent`  → `--accent` / `--on-accent`
- Align:
  - `left | center` (text-align only)

### Rules
1. Default vertical padding = **md** (mobile can collapse to **sm** if desired).
2. Content is centered to `--container` with horizontal padding `--space-5`.
3. Tone controls background/text; neutral/default is `surface`.
4. Use **lg** padding only for hero/CTA sections.