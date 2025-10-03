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