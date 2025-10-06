/**
 * Stylelint Configuration - Design System Token Enforcement
 *
 * Focused on enforcing CSS custom property usage for:
 * - Colors (must use var(--brand), var(--surface), etc.)
 * - Spacing (must use var(--space-*) for padding/margin/gap)
 * - Border radius (must use var(--r-*) or component tokens)
 * - Font sizes (must use var(--text-*))
 *
 * This config only enforces design system compliance - no style/formatting rules.
 */
module.exports = {
  rules: {
    // ============================================================
    // DESIGN SYSTEM TOKEN ENFORCEMENT
    // ============================================================

    // Require CSS custom properties for specific property types
    'declaration-property-value-disallowed-list': {
      // Spacing: allow 0, auto, or CSS variables
      '/^(padding|margin|gap)$/': [
        // Disallow: literal px/rem/em values
        // Allow: 0, auto, var(--*)
        /^(?!(0|auto|var\(--)).*$/,
      ],

      // Colors: allow transparent, currentColor, inherit, var(--), or color-mix()
      '/^(color|background|background-color)$/': [
        // Disallow: hex, named colors (except transparent/currentColor)
        // Allow: transparent, currentColor, inherit, var(--), color-mix()
        /^(?!(transparent|currentColor|inherit|var\(--|color-mix\()).*$/i,
      ],

      // Border colors: same as colors
      '/^border(-\w+)?-color$/': [
        /^(?!(transparent|currentColor|inherit|var\(--|color-mix\()).*$/i,
      ],

      // Border-radius: allow 0, percentages, or CSS variables
      '/^border(-\w+)?-radius$/': [
        // Allow: 0, 50%, 9999px (pill shape), var(--*)
        /^(?!(0|50%|9999px|var\(--)).*$/,
      ],

      // Font-size: require CSS variables or inherit
      '^font-size$': [
        // Allow: inherit, var(--*)
        /^(?!(inherit|var\(--)).*$/,
      ],
    },
  },

  ignoreFiles: [
    '**/node_modules/**',
    '**/storybook-static/**',
    '**/.next/**',
    '**/dist/**',
    '**/out/**',
  ],
};
