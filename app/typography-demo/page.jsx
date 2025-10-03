import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';

export const metadata = {
  title: 'Typography Demo'
};

export default function TypographyDemo() {
  return (
    <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8)' }}>
      <Heading level={1} size="hero" align="center">Welcome to Rum River</Heading>
      <Text size="lg" align="center" tone="on-surface">
        Token-driven typography, clean and consistent.
      </Text>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Heading Hierarchy</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <Heading level={1} size="hero">Hero Heading (Responsive)</Heading>
          <Heading level={1}>H1 - Main Page Title</Heading>
          <Heading level={2}>H2 - Section Heading</Heading>
          <Heading level={3}>H3 - Subsection Heading</Heading>
          <Heading level={4}>H4 - Minor Heading</Heading>
          <Heading level={5}>H5 - Small Heading</Heading>
          <Heading level={6}>H6 - Smallest Heading</Heading>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Text Sizes</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
          <Text size="xl">Extra Large Text (20px)</Text>
          <Text size="lg">Large Text (18px)</Text>
          <Text size="base">Base Text (16px) - Default body size</Text>
          <Text size="sm">Small Text (14px)</Text>
          <Text size="xs">Extra Small Text (12px)</Text>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Font Weights</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
          <Text weight="regular">Regular Weight (400)</Text>
          <Text weight="medium">Medium Weight (500)</Text>
          <Text weight="semibold">Semibold Weight (600)</Text>
          <Text weight="bold">Bold Weight (700)</Text>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Text Alignment</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <Text align="left">Left aligned text (default)</Text>
          <Text align="center">Center aligned text</Text>
          <Text align="right">Right aligned text</Text>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Color Tones</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
          <Text>Default text color (uses --fg token)</Text>
          <Text tone="brand">Brand colored text</Text>
          <Text tone="on-surface">On-surface tone</Text>
          <Heading level={3} tone="brand">Brand colored heading</Heading>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Semantic vs Visual Sizing</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <Heading level={3} size="1">H3 element with H1 visual size</Heading>
          <Heading level={2} size="6">H2 element with H6 visual size</Heading>
          <Heading as="div" size="3">Div element styled as H3</Heading>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Mixed Typography Layout</Heading>
        <Heading level={3} weight="semibold" tone="brand">Brand Emphasis Section</Heading>
        <Text size="lg">
          This is a larger introduction paragraph that sets up the content below. 
          It uses the large text size for better visual hierarchy.
        </Text>
        <Text>
          This is regular body text that follows standard content flow. 
          Notice how the line height and spacing create comfortable reading rhythm.
        </Text>
        <Text size="sm" tone="on-surface">
          This is smaller supporting text that might be used for captions, 
          disclaimers, or secondary information.
        </Text>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>No Margin Examples</Heading>
        <div style={{ 
          background: 'var(--surface)', 
          padding: 'var(--space-4)', 
          borderRadius: 'var(--r-md)',
          border: '1px solid var(--border)'
        }}>
          <Heading level={4} noMargin>Heading with no margin</Heading>
          <Text noMargin>Text with no margin</Text>
          <Text size="sm" noMargin>Small text with no margin</Text>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Font Family Showcase</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
          <div>
            <Text size="sm" weight="medium">Display Font (Playfair Display):</Text>
            <Heading level={3} noMargin>The quick brown fox jumps over the lazy dog</Heading>
          </div>
          <div>
            <Text size="sm" weight="medium">Body Font (Montserrat):</Text>
            <Text noMargin>The quick brown fox jumps over the lazy dog</Text>
          </div>
          <div>
            <Text size="sm" weight="medium">Script Font (Dancing Script):</Text>
            <div style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'var(--text-2xl)',
              color: 'var(--accent)'
            }}>
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        </div>
      </section>

      <section>
        <Heading level={2}>Usage Code Examples</Heading>
        <div style={{ 
          background: 'var(--surface)', 
          padding: 'var(--space-6)', 
          borderRadius: 'var(--r-md)',
          border: '1px solid var(--border)',
          fontSize: 'var(--text-sm)',
          fontFamily: 'monospace'
        }}>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Heading level={1} size="hero" align="center">Hero Title</Heading>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Heading level={2}>Section Title</Heading>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Text size="lg" align="center">Large intro text</Text>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Text>Default body text</Text>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Heading as="h3" size="3" weight="semibold" tone="brand">Brand Heading</Heading>`}</code>
          </div>
          <div>
            <code>{`<Text tone="brand" noMargin>Brand colored text without margin</Text>`}</code>
          </div>
        </div>
      </section>
    </main>
  );
}