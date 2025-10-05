# Pull Request

## Description

<!-- Describe what this PR changes and why -->

## Type of Change

- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

---

## ✅ Token-Locked Checklist

### Design System Compliance

- [ ] **No hardcoded values** - All colors use `var(--brand)`, `var(--accent)`, etc. (no hex codes)
- [ ] **No hardcoded spacing** - All spacing uses `var(--space-*)` tokens (no px values)
- [ ] **4px grid alignment** - All spacing values are multiples of 4px
- [ ] **Theme compatibility** - Tested in both light AND dark modes (use theme toggle)
- [ ] **Semantic tokens** - Uses role-based tokens (`--brand`) not raw values

### Component Quality

- [ ] **Story created/updated** - Component has comprehensive Storybook stories
- [ ] **All variants shown** - Stories demonstrate all size/tone/variant combinations
- [ ] **Controls configured** - Interactive controls work for all key props
- [ ] **Token-driven examples** - Story examples use tokens, not hardcoded styles

### Accessibility

- [ ] **Labels present** - Form controls have associated labels (`htmlFor` + `id`)
- [ ] **Focus visible** - Focus states use `--focus-ring` token and are clearly visible
- [ ] **Contrast checked** - Color combinations pass WCAG AA (4.5:1 for text)
- [ ] **Semantic HTML** - Proper element choices (`nav`, `header`, `main`, etc.)
- [ ] **Heading hierarchy** - Only one `<h1>` per page; proper h2 → h3 → h4 nesting
- [ ] **A11y panel clean** - Storybook accessibility addon shows no critical violations

### Code Quality

- [ ] **No Tailwind conflicts** - Utility classes don't compete with primitives
- [ ] **Props match patterns** - Component API follows existing primitive patterns
- [ ] **TypeScript types** (if applicable) - Props are typed correctly
- [ ] **No console errors** - Storybook and app run without errors

### Testing & Validation

- [ ] **Storybook builds** - `npm run build-storybook` succeeds
- [ ] **Theme toggle tested** - All components adapt correctly to light/dark
- [ ] **Responsive tested** - Works on mobile, tablet, and desktop viewports
- [ ] **Cross-browser** (if UI-critical) - Tested in Chrome, Firefox, Safari

---

## 🔍 How to Verify Token Usage

1. **Inspect in DevTools:**
   - Right-click component → Inspect → Computed tab
   - Should show `var(--token-name)`, not raw hex or px values

2. **Search for violations:**
   ```bash
   # Search for hex colors (should only be in tokens.css)
   grep -r "#[0-9a-fA-F]" styles/components/

   # Search for hardcoded px (should only be in base reset)
   grep -r ": [0-9]*px" styles/components/
   ```

3. **Run stylelint:**
   ```bash
   npx stylelint "styles/**/*.css"
   ```

---

## Screenshots

<!-- Add screenshots of the component in light and dark modes -->

### Light Mode
<!-- Screenshot here -->

### Dark Mode
<!-- Screenshot here -->

---

## Related Issues

<!-- Link to related issues: Closes #123 -->

---

## Reviewer Notes

<!-- Any specific areas you want reviewers to focus on? -->
