# Storybook for Rum River Design System

Storybook is our component development environment and living documentation.

## Quick Start

```bash
# Development
npm run storybook        # Starts at localhost:6006

# Build
npm run build-storybook  # Creates static build in storybook-static/
```

## CSS Import Order (Critical)

Storybook imports CSS in `.storybook/preview.css` in this exact order:

1. Tailwind v4 (`@import "tailwindcss"`)
2. Design tokens (`../styles/tokens.css`) ← Single source of truth
3. Base layer (`../styles/base.css`)
4. Component layer (all `../styles/components/*.css` files)
5. Utilities layer (`../styles/utilities.css`)

⚠️ **Never change this order** - it ensures proper cascade and token application.

## Writing Stories

### File Location

Co-locate stories with components:

```
components/
  primitives/
    Button.jsx
    Button.stories.jsx  ← next to component
```

### Basic Story Structure

```javascript
import MyComponent from './MyComponent';

export default {
  title: 'Primitives/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],  // Enable auto-generated docs
};

export const Default = {
  args: {
    // component props
  },
};

export const Variant = {
  render: () => <MyComponent prop="value" />,
};
```

### Token-Driven Stories (Required)

❌ **Bad**: Hardcoded values

```jsx
<div style={{ padding: '24px', color: '#9D6B7B', borderRadius: '8px' }}>
```

✅ **Good**: Use design tokens

```jsx
<div style={{
  padding: 'var(--space-6)',
  color: 'var(--brand)',
  borderRadius: 'var(--r-md)'
}}>
```

### Using Controls

```javascript
export default {
  argTypes: {
    tone: {
      control: 'select',
      options: ['brand', 'accent', 'muted', 'neutral'],
      description: 'Color tone from design system',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};
```

## Theme Toggle

Use the toolbar theme switcher (sun/moon icons) to test components in light/dark mode. All stories automatically get the theme decorator that applies `data-theme="light|dark"` to the wrapper.

## Accessibility

The a11y addon runs axe-core checks on every story.

### A11y Panel

- Check the "Accessibility" tab in the addon panel
- Shows WCAG violations (categorized by severity)
- Fix issues before merging

### A11y Checklist

- ✅ Labels tied to form controls (`htmlFor` + `id`)
- ✅ Heading hierarchy is semantic (h1 → h2 → h3)
- ✅ Color contrast ratios pass WCAG AA (4.5:1 for text)
- ✅ Focus states are visible (`:focus-visible` with `--focus-ring`)
- ✅ Disabled states are clear (reduced opacity + cursor)
- ✅ Interactive elements have accessible names

## Component Categories

### Primitives (components/primitives/)

Basic building blocks:

- Button, Input, Card
- Typography (Heading, Text)
- Layout (Container, Stack, Grid, Spacer)
- Content (SectionHeader, MediaBlock)

### Forms (components/forms/)

Form primitives:

- Form, Field
- Select, Textarea
- Token-driven with `.form-control` base class

### Sections (components/sections/)

Configurable patterns built from primitives:

- ScheduleTourForm (field array config)
- Future: Hero, FeatureGrid, etc.

### Layouts (components/layout/)

Page-level wrappers:

- Section (tone, size, background)
- Header, Footer

## Adding New Components

Step-by-step:

### 1. Create component in appropriate directory

```
components/primitives/NewComponent.jsx
```

### 2. Add token-driven CSS in `styles/components/`

```css
.new-component {
  padding: var(--space-4);
  color: var(--brand);
}
```

### 3. Import CSS in `.storybook/preview.css`

```css
@import "../styles/components/new-component.css";
```

### 4. Create story file

```
components/primitives/NewComponent.stories.jsx
```

### 5. Write 3-5 stories showing variants

```javascript
export const Default = { args: {...} };
export const Variant1 = { render: () => ... };
export const Variant2 = { render: () => ... };
```

### 6. Test in Storybook

- Check theme toggle works
- Review a11y panel
- Test interactive controls

### 7. Update this doc if you add a new pattern

## Troubleshooting

### Styles not loading

- Check CSS import order in `.storybook/preview.css`
- Verify component CSS uses `@layer components`
- Check browser console for import errors

### Theme toggle not working

- Verify `data-theme` attribute changes in DOM
- Check CSS uses `[data-theme="dark"]` selectors in `tokens.css`
- Ensure decorator is applied in `.storybook/preview.js`

### Tokens showing as literal strings

- Verify `tokens.css` is imported before component CSS
- Check `:root` declarations in `tokens.css`
- Clear Storybook cache: `rm -rf node_modules/.cache/storybook`

## Resources

- [Full Design System Docs](/docs/tokens.md)
- [Storybook Docs](https://storybook.js.org/docs)
- [Next.js + Storybook](https://storybook.js.org/docs/get-started/nextjs)
- [Accessibility Addon](https://storybook.js.org/addons/@storybook/addon-a11y)
