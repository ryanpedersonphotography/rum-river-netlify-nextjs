'use client';
import { useState } from 'react';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';

export default function TypographyDemo() {
  const [debug, setDebug] = useState(false);

  return (
    <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8)' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'var(--space-6)' }}>
        <Heading level={1} size="hero" debug={debug}>Typography Demo</Heading>
        <button
          onClick={() => setDebug(d => !d)}
          style={{
            padding: 'var(--space-2) var(--space-4)',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-sm)',
            cursor: 'pointer',
            fontSize: 'var(--text-sm)'
          }}
        >
          {debug ? '🔧 Debug ON' : '🔧 Debug OFF'}
        </button>
      </div>
      <Text debug={debug} size="lg" align="center" tone="on-surface">
        Token-driven typography, clean and consistent.
      </Text>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Heading Hierarchy</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <Heading level={1} size="hero" debug={debug}>Hero Heading (Responsive)</Heading>
          <Heading level={1} debug={debug}>H1 - Main Page Title</Heading>
          <Heading level={2} debug={debug}>H2 - Section Heading</Heading>
          <Heading level={3} debug={debug}>H3 - Subsection Heading</Heading>
          <Heading level={4} debug={debug}>H4 - Minor Heading</Heading>
          <Heading level={5} debug={debug}>H5 - Small Heading</Heading>
          <Heading level={6} debug={debug}>H6 - Smallest Heading</Heading>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Text Sizes</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
          <Text debug={debug} size="xl">Extra Large Text (20px)</Text>
          <Text debug={debug} size="lg">Large Text (18px)</Text>
          <Text debug={debug} size="base">Base Text (16px) - Default body size</Text>
          <Text debug={debug} size="sm">Small Text (14px)</Text>
          <Text debug={debug} size="xs">Extra Small Text (12px)</Text>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Font Weights</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
          <Text debug={debug} weight="regular">Regular Weight (400)</Text>
          <Text debug={debug} weight="medium">Medium Weight (500)</Text>
          <Text debug={debug} weight="semibold">Semibold Weight (600)</Text>
          <Text debug={debug} weight="bold">Bold Weight (700)</Text>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Text Alignment</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <Text debug={debug} align="left">Left aligned text (default)</Text>
          <Text debug={debug} align="center">Center aligned text</Text>
          <Text debug={debug} align="right">Right aligned text</Text>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Color Tones</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
          <Text debug={debug}>Default text color (uses --fg token)</Text>
          <Text debug={debug} tone="brand">Brand colored text</Text>
          <Text debug={debug} tone="on-surface">On-surface tone</Text>
          <Heading level={3} debug={debug} tone="brand">Brand colored heading</Heading>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Semantic vs Visual Sizing</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <Heading level={3} debug={debug} size="1">H3 element with H1 visual size</Heading>
          <Heading level={2} size="6">H2 element with H6 visual size</Heading>
          <Heading as="div" size="3">Div element styled as H3</Heading>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Mixed Typography Layout</Heading>
        <Heading level={3} debug={debug} weight="semibold" tone="brand">Brand Emphasis Section</Heading>
        <Text debug={debug} size="lg">
          This is a larger introduction paragraph that sets up the content below. 
          It uses the large text size for better visual hierarchy.
        </Text>
        <Text debug={debug}>
          This is regular body text that follows standard content flow. 
          Notice how the line height and spacing create comfortable reading rhythm.
        </Text>
        <Text debug={debug} size="sm" tone="on-surface">
          This is smaller supporting text that might be used for captions, 
          disclaimers, or secondary information.
        </Text>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>No Margin Examples</Heading>
        <div style={{ 
          background: 'var(--surface)', 
          padding: 'var(--space-4)', 
          borderRadius: 'var(--r-md)',
          border: '1px solid var(--border)'
        }}>
          <Heading level={4} noMargin>Heading with no margin</Heading>
          <Text debug={debug} noMargin>Text with no margin</Text>
          <Text debug={debug} size="sm" noMargin>Small text with no margin</Text>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Font Family Showcase</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
          <div>
            <Text debug={debug} size="sm" weight="medium">Display Font (Playfair Display):</Text>
            <Heading level={3} debug={debug} noMargin>The quick brown fox jumps over the lazy dog</Heading>
          </div>
          <div>
            <Text debug={debug} size="sm" weight="medium">Body Font (Montserrat):</Text>
            <Text debug={debug} noMargin>The quick brown fox jumps over the lazy dog</Text>
          </div>
          <div>
            <Text debug={debug} size="sm" weight="medium">Script Font (Dancing Script):</Text>
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
        <Heading level={2} debug={debug}>Usage Code Examples</Heading>
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
            <code>{`<Heading level={2} debug={debug}>Section Title</Heading>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Text debug={debug} size="lg" align="center">Large intro text</Text>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Text debug={debug}>Default body text</Text>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Heading as="h3" size="3" weight="semibold" tone="brand">Brand Heading</Heading>`}</code>
          </div>
          <div>
            <code>{`<Text debug={debug} tone="brand" noMargin>Brand colored text without margin</Text>`}</code>
          </div>
        </div>
      </section>
    </main>
  );
}