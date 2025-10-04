# Layout & Primitive Improvements

## Overview

This document outlines improvements to make layout primitives more useful while maintaining the token-driven, single-source-of-truth design system.

## Current State Analysis

### What's Working Well ✅
- Fully token-driven (no hardcoded values)
- Consistent debug system across components
- Clear separation: Section (full-width bg) vs Container (max-width)
- Stack and Grid have comprehensive flex/grid controls
- All spacing uses `!important` to override Tailwind reset

### Areas for Improvement

## Proposed Improvements

### 1. Section Component Enhancements

**Current Issues:**
- `align` prop only affects text-align, not flexbox centering
- No `as` prop for semantic HTML (section, div, article, etc.)
- Missing common patterns (split layout, content + sidebar)

**Proposed Changes:**
```jsx
<Section
  as="article"              // NEW: Semantic HTML element
  tone="brand"
  size="lg"
  align="center"            // KEEP: text-align
  contentAlign="center"     // NEW: flexbox align-items (for vertical centering)
  contentJustify="center"   // NEW: flexbox justify-content
  noContainer={false}
  minHeight="60vh"          // NEW: Common pattern for hero sections
  debug={false}
>
```

**Use Cases:**
- Hero sections with vertically centered content
- Full-viewport splash screens
- Content that needs both text-align AND flexbox alignment

---

### 2. Container Component Enhancements

**Current Issues:**
- No `as` prop for semantic HTML
- Padding options limited (sm/md/lg)

**Proposed Changes:**
```jsx
<Container
  as="div"                  // NEW: Semantic HTML element
  size="md"                 // KEEP: sm|md|lg|xl|full
  padding="md"              // KEEP: none|sm|md|lg
  paddingY="lg"             // NEW: Vertical-only padding
  paddingX="md"             // NEW: Horizontal-only padding
  center={true}             // KEEP: margin auto
  maxWidth="600px"          // NEW: Custom max-width (overrides size)
  debug={false}
>
```

**Use Cases:**
- Article/blog content with custom readable width
- Asymmetric padding needs
- Semantic `<main>`, `<article>` containers

---

### 3. Stack Component Enhancements

**Current Issues:**
- No `as` prop for semantic HTML
- Missing reverse direction
- No responsive direction change

**Proposed Changes:**
```jsx
<Stack
  as="div"                  // NEW: Semantic HTML (ul, nav, etc.)
  direction="vertical"      // KEEP: vertical|horizontal
  reverse={false}           // NEW: flex-direction-reverse
  gap="md"                  // KEEP: xs|sm|md|lg|xl
  align="stretch"           // KEEP: start|center|end|stretch|baseline
  justify="start"           // KEEP: start|center|end|between|around|evenly
  wrap={false}              // KEEP: flex-wrap
  responsive={{             // NEW: Breakpoint-based direction
    base: 'vertical',
    md: 'horizontal'
  }}
  debug={false}
>
```

**Use Cases:**
- Navigation lists with `<nav><ul>`
- Responsive layouts (stack vertically on mobile, horizontal on desktop)
- Reverse visual order without changing HTML

---

### 4. Grid Component Enhancements

**Current Issues:**
- Auto-responsive grids require manual minItemWidth
- No named layout patterns (sidebar, asymmetric)

**Proposed Changes:**
```jsx
<Grid
  as="div"                  // NEW: Semantic HTML element
  columns={3}               // KEEP: number | 'auto-fit' | 'auto-fill'
  gap="md"                  // KEEP: xs|sm|md|lg|xl
  minItemWidth="250px"      // KEEP: For auto-responsive
  pattern="sidebar"         // NEW: sidebar|asymmetric|masonry
  sidebarWidth="300px"      // NEW: For sidebar pattern
  mainFirst={true}          // NEW: Main content before sidebar in HTML
  align="stretch"           // KEEP: start|center|end|stretch
  justify="stretch"         // KEEP: start|center|end|stretch
  responsive={{             // NEW: Breakpoint-based columns
    base: 1,
    md: 2,
    lg: 3
  }}
  debug={false}
>
```

**Common Patterns:**
```jsx
// Blog with sidebar
<Grid pattern="sidebar" sidebarWidth="300px" gap="lg">
  <div>Main content</div>
  <aside>Sidebar widgets</aside>
</Grid>

// Responsive product grid
<Grid responsive={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="md">
  <ProductCard />
  <ProductCard />
  <ProductCard />
</Grid>

// Asymmetric feature grid
<Grid pattern="asymmetric" columns={3} gap="lg">
  <div style={{gridColumn: 'span 2'}}>Featured item</div>
  <div>Secondary item</div>
</Grid>
```

---

### 5. New Primitive: Flex

**Purpose:** Simpler alternative to Stack for basic flex needs

```jsx
<Flex
  as="div"
  direction="row"           // row|column
  wrap={false}              // boolean
  gap="md"                  // xs|sm|md|lg|xl
  align="center"            // start|center|end|stretch|baseline
  justify="between"         // start|center|end|between|around|evenly
  debug={false}
>
```

**Why separate from Stack?**
- Stack is opinionated (direction: vertical default)
- Flex is more explicit (direction: row default)
- Different mental models for different use cases

---

### 6. New Primitive: Spacer

**Purpose:** Add whitespace between elements without wrapping divs

```jsx
<Spacer size="lg" />        // Vertical space: --space-6
<Spacer size="xl" axis="x" /> // Horizontal space: --space-8
```

**Renders as:**
```html
<div class="spacer spacer--y-lg"></div>
```

---

### 7. New Primitive: Cluster

**Purpose:** Inline elements with wrapping and consistent gaps (tags, chips, pill buttons)

```jsx
<Cluster
  gap="sm"
  align="center"
  justify="start"
  debug={false}
>
  <Button size="sm">Tag 1</Button>
  <Button size="sm">Tag 2</Button>
  <Button size="sm">Tag 3</Button>
</Cluster>
```

**CSS:**
```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cluster-gap);
  align-items: var(--cluster-align);
  justify-content: var(--cluster-justify);
}
```

---

## Token Additions Required

### globals.css additions:

```css
/* Section enhancements */
--section-min-height-sm: 40vh;
--section-min-height-md: 60vh;
--section-min-height-lg: 80vh;
--section-min-height-full: 100vh;

/* Container custom widths */
--container-xs: 480px;
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;

/* Breakpoints (for responsive props) */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;

/* Spacer axis */
.spacer--y-xs { height: var(--space-2); }
.spacer--y-sm { height: var(--space-3); }
.spacer--y-md { height: var(--space-4); }
.spacer--y-lg { height: var(--space-6); }
.spacer--y-xl { height: var(--space-8); }

.spacer--x-xs { width: var(--space-2); display: inline-block; }
.spacer--x-sm { width: var(--space-3); display: inline-block; }
.spacer--x-md { width: var(--space-4); display: inline-block; }
.spacer--x-lg { width: var(--space-6); display: inline-block; }
.spacer--x-xl { width: var(--space-8); display: inline-block; }

/* Cluster */
.cluster {
  display: flex;
  flex-wrap: wrap;
}

/* Grid patterns */
.grid--pattern-sidebar {
  grid-template-columns: 1fr var(--sidebar-width, 300px);
}
.grid--pattern-sidebar-left {
  grid-template-columns: var(--sidebar-width, 300px) 1fr;
}
.grid--pattern-asymmetric-2-1 {
  grid-template-columns: 2fr 1fr;
}
.grid--pattern-asymmetric-1-2 {
  grid-template-columns: 1fr 2fr;
}
```

---

## Implementation Priority

### Phase 1: Core Enhancements (Do First)
1. Add `as` prop to Section, Container, Stack, Grid
2. Add Section `minHeight` and flexbox alignment props
3. Add Stack `reverse` prop
4. Add Container `paddingX`/`paddingY` props

### Phase 2: New Primitives
1. Create Spacer component
2. Create Flex component
3. Create Cluster component

### Phase 3: Advanced Features
1. Add responsive props to Stack/Grid
2. Add Grid pattern presets
3. Add Container custom maxWidth

---

## Migration Impact

### Breaking Changes: NONE ✅

All changes are additive - existing components continue to work exactly as before.

### Recommended Refactors (Optional):

**Before:**
```jsx
<Section tone="brand" noContainer>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh'
  }}>
    <Container size="md">Content</Container>
  </div>
</Section>
```

**After:**
```jsx
<Section
  tone="brand"
  noContainer
  minHeight="60vh"
  contentAlign="center"
  contentJustify="center"
>
  <Container size="md">Content</Container>
</Section>
```

---

## Questions for Review

1. **Responsive props**: Should we implement breakpoint-based props or use CSS media queries only?
2. **Flex vs Stack**: Do we need both or consolidate into one component?
3. **Grid patterns**: Are sidebar/asymmetric patterns useful or too opinionated?
4. **Priority**: Which phase should we implement first?

---

## Summary

These improvements maintain the design system's core principles:
- ✅ Token-driven (all values from CSS custom properties)
- ✅ Single source of truth (tokens.md → globals.css → components)
- ✅ No hardcoded values in components
- ✅ Backwards compatible (no breaking changes)
- ✅ Debug mode support across all primitives

The enhancements make common layout patterns easier to implement while preserving the flexibility to compose custom layouts.
