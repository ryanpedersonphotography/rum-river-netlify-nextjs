/**
 * ESLint Local Rules - Design System Token Enforcement
 *
 * Custom rule to prevent hardcoded colors and spacing in inline styles.
 * All styling must use CSS custom properties from the design system.
 */

const noHardcodedStyles = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce CSS token usage in inline styles',
      category: 'Design System',
      recommended: true,
    },
    messages: {
      colorToken: 'Use CSS token for "{{prop}}" (e.g., var(--brand), var(--surface))',
      spacingToken: 'Use spacing/sizing tokens for "{{prop}}" (e.g., var(--space-4), var(--r-md))',
    },
  },
  create(context) {
    const TOKEN = /var\(--[\w-]+\)/;
    const HEX = /#[0-9a-f]{3,8}/i;
    const RGB = /rgba?\(/i;
    const PX_UNITS = /\b\d+(\.\d+)?(px|rem|em)\b/;
    const VIEWPORT_UNITS = /\b\d+(\.\d+)?(vh|vw)\b/;
    const VIEWPORT_PROPS = /(min|max)?(width|height)/i; // Allow vh/vw for width/height props

    const isLiteral = (node) => node && node.type === 'Literal';

    return {
      JSXAttribute(node) {
        if (node.name?.name !== 'style') return;
        const expr = node.value?.type === 'JSXExpressionContainer' ? node.value.expression : null;
        if (!expr || expr.type !== 'ObjectExpression') return;

        expr.properties.forEach((prop) => {
          if (prop.type !== 'Property') return;
          const key = prop.key?.name || prop.key?.value;
          const valNode = prop.value;
          if (!isLiteral(valNode)) return;

          const val = String(valNode.value || '');

          // Color-like props must use tokens
          if (/(^|-)color$|background|fill|stroke|shadow/i.test(key)) {
            if ((HEX.test(val) || RGB.test(val)) && !TOKEN.test(val)) {
              context.report({
                node: prop,
                messageId: 'colorToken',
                data: { prop: key },
              });
            }
          }

          // Spacing & sizing must use tokens (with exceptions)
          if (/(margin|padding|gap|width|height|top|right|bottom|left|inset|border-radius)/i.test(key)) {
            // Allow: 0, tokens, viewport units for width/height props
            if (val === '0') return;
            if (TOKEN.test(val)) return;
            if (VIEWPORT_PROPS.test(key) && VIEWPORT_UNITS.test(val)) return; // Allow vh/vw for sizing

            // Disallow: hardcoded px/rem/em values
            if (PX_UNITS.test(val)) {
              context.report({
                node: prop,
                messageId: 'spacingToken',
                data: { prop: key },
              });
            }
          }
        });
      },
    };
  },
};

module.exports = {
  rules: {
    'no-hardcoded-inline-styles': noHardcodedStyles,
  },
};
