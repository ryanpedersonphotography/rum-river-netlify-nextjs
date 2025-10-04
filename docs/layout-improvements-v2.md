# Layout Improvements (Conservative Approach)

## Current State Analysis ✅

### What's Working Perfectly - DON'T CHANGE
1. **Header Rhythm System** - Locked and working beautifully
   - `--title-gap` and `--title-mb` fully control SectionHeader spacing
   - Section size variants drive header spacing (sm/md/lg/xl)
   - `h2 + .typo-text` margins keyed off `section--size-*` tokens
   - Zero ad-hoc margins in pages

2. **Component Architecture**
   - Section, Container, Stack, Grid all token-driven
   - SectionHeader primitive is clean and reusable
   - MediaBlock pattern works well
   - Debug system consistent across all components

3. **Homepage Implementation**
   - Uses primitives correctly
   - Only ONE ad-hoc margin found: `marginTop: var(--space-12)` on line 125
   - Pattern 7 hero implementation is solid

### What's Actually Missing (After Real Usage Audit)

Based on scanning actual page implementations, here are the **only** gaps:

---

## Minimal Improvements Needed

### 1. Lock Down Remaining Ad-Hoc Spacing

**Issue:** Pages still use inline `style={{ marginTop: 'var(--space-12)' }}`

**Solution:** Add a Spacer primitive for intentional vertical rhythm

```jsx
// components/primitives/Spacer.jsx
export default function Spacer({ size = 'md', axis = 'y' }) {
  return <div className={`spacer spacer--${axis}-${size}`} />;
}
```

**CSS in globals.css:**
```css
/* Spacer - intentional whitespace without wrapper divs */
.spacer--y-xs { height: var(--space-2) !important; }
.spacer--y-sm { height: var(--space-3) !important; }
.spacer--y-md { height: var(--space-4) !important; }
.spacer--y-lg { height: var(--space-6) !important; }
.spacer--y-xl { height: var(--space-8) !important; }
.spacer--y-2xl { height: var(--space-12) !important; }

.spacer--x-xs { width: var(--space-2) !important; display: inline-block; }
.spacer--x-sm { width: var(--space-3) !important; display: inline-block; }
.spacer--x-md { width: var(--space-4) !important; display: inline-block; }
.spacer--x-lg { width: var(--space-6) !important; display: inline-block; }
.spacer--x-xl { width: var(--space-8) !important; display: inline-block; }
```

**Usage:**
```jsx
// Before
<div style={{ marginTop: 'var(--space-12)' }}>

// After
<Spacer size="2xl" />
```

---

### 2. Add `as` Prop to Existing Primitives

**Issue:** Can't use semantic HTML (`<main>`, `<article>`, `<nav>`, etc.)

**Solution:** Add `as` prop (polymorphic pattern you already use in Button)

```jsx
// Section.jsx
export default function Section({
  as: Tag = 'section',  // ADD THIS
  tone = 'neutral',
  // ... rest unchanged
}) {
  return <Tag className={classes}>{/* ... */}</Tag>;
}

// Container.jsx
export default function Container({
  as: Tag = 'div',  // ADD THIS
  size = 'md',
  // ... rest unchanged
}) {
  return <Tag className={classes}>{/* ... */}</Tag>;
}

// Stack.jsx, Grid.jsx - same pattern
```

**Usage:**
```jsx
<Section as="article" tone="brand">
<Container as="main" size="lg">
<Stack as="nav" direction="horizontal">
```

---

### 3. Section Content Alignment (Hero Pattern Enhancement)

**Issue:** Pattern 7 heroes need manual div wrapper for vertical centering:
```jsx
<div style={{
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center'  // Can't do this on Section currently
}}>
```

**Solution:** Add flexbox content alignment to Section (ONLY when noContainer=true)

```jsx
// Section.jsx - ADD THESE PROPS
export default function Section({
  as: Tag = 'section',
  tone = 'neutral',
  size = 'md',
  align = 'left',           // KEEP - text-align
  contentAlign,             // NEW - flexbox align-items (only with noContainer)
  contentJustify,           // NEW - flexbox justify-content (only with noContainer)
  minHeight,                // NEW - common for heroes
  noContainer = false,
  // ... rest
}) {
  const innerStyle = {
    ...(minHeight && { minHeight }),
    ...(contentAlign && noContainer && {
      display: 'flex',
      alignItems: contentAlign === 'center' ? 'center' : `flex-${contentAlign}`
    }),
    ...(contentJustify && noContainer && {
      justifyContent: contentJustify === 'center' ? 'center' : `flex-${contentJustify}`
    })
  };

  return (
    <Tag className={classes} style={style}>
      <div className="section__inner" style={innerStyle}>
        {/* ... */}
      </div>
    </Tag>
  );
}
```

**Usage:**
```jsx
// Before (manual wrapper)
<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
  <Container size="lg">Hero content</Container>
</div>

// After (declarative props)
<Section noContainer minHeight="100vh" contentAlign="center">
  <Container size="lg">Hero content</Container>
</Section>
```

---

### 4. Container Asymmetric Padding

**Issue:** Sometimes need different X/Y padding (forms, narrow content)

**Solution:** Add `paddingY` and `paddingX` props

```jsx
// Container.jsx
export default function Container({
  as: Tag = 'div',
  size = 'md',
  padding = 'md',    // KEEP - applies to both X and Y
  paddingX,          // NEW - horizontal only
  paddingY,          // NEW - vertical only
  // ... rest
}) {
  const classes = clsx(
    'container',
    `container--size-${size}`,
    // If paddingX/Y specified, use those instead of padding
    paddingX ? `container--padding-x-${paddingX}` : (padding !== 'none' && `container--padding-${padding}`),
    paddingY && `container--padding-y-${paddingY}`,
    center && 'container--center',
    className
  );
}
```

**CSS:**
```css
/* Add to globals.css */
.container--padding-x-sm { padding-left: var(--space-4) !important; padding-right: var(--space-4) !important; }
.container--padding-x-md { padding-left: var(--space-6) !important; padding-right: var(--space-6) !important; }
.container--padding-x-lg { padding-left: var(--space-8) !important; padding-right: var(--space-8) !important; }

.container--padding-y-sm { padding-top: var(--space-4) !important; padding-bottom: var(--space-4) !important; }
.container--padding-y-md { padding-top: var(--space-6) !important; padding-bottom: var(--space-6) !important; }
.container--padding-y-lg { padding-top: var(--space-8) !important; padding-bottom: var(--space-8) !important; }
```

---

## Summary: Minimal Changes Only

### Phase 1 (Do Now)
1. ✅ Create Spacer primitive (eliminates ad-hoc margin)
2. ✅ Add `as` prop to Section, Container, Stack, Grid (semantic HTML)

### Phase 2 (Consider Later)
3. ⏸ Add Section `minHeight`, `contentAlign`, `contentJustify` (hero pattern)
4. ⏸ Add Container `paddingX`, `paddingY` (asymmetric padding)

### What We're NOT Doing
- ❌ Responsive props (use CSS media queries)
- ❌ Grid patterns/presets (too opinionated)
- ❌ New Flex/Cluster primitives (Stack/Grid handle these)
- ❌ Custom Container widths (use existing size variants)

---

## Validation Against Your Rules

✅ **Header rhythm locked**: No changes to `--title-gap`, `--title-mb`, or SectionHeader
✅ **Token-driven**: All new features use CSS custom properties
✅ **No ad-hoc spacing**: Spacer primitive eliminates inline margins
✅ **Single source of truth**: Document in tokens.md → implement in globals.css → consume in components
✅ **Backwards compatible**: All changes are additive, zero breaking changes
✅ **Keep what works**: Section rhythm system untouched

---

## Next Steps

1. Review this plan
2. If approved, implement Phase 1 only (Spacer + `as` props)
3. Test on existing pages
4. Consider Phase 2 only if hero pattern becomes repetitive
