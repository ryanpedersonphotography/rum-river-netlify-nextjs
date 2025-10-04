'use client';
import { useState } from 'react';
import Section from 'components/layout/Section';
import Card from 'components/primitives/Card';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';

export default function SectionDemo() {
  const [debug, setDebug] = useState(false);

  return (
    <div>
      {/* Header Section */}
      <Section size="md" tone="surface">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'var(--space-6)' }}>
          <Heading level={1} size="hero" debug={debug}>Section Demo</Heading>
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
        <Text size="lg" debug={debug}>
          Test Section component with different sizes, tones, and layouts.
        </Text>
      </Section>

      {/* Size Variations */}
      <Section size="sm" tone="surface" debug={debug}>
        <Heading level={2} debug={debug}>Small Section (size=&quot;sm&quot;)</Heading>
        <Text debug={debug}>
          This section uses --section-py-sm for compact vertical padding. 
          Perfect for tight layouts or mobile views.
        </Text>
        <Card debug={debug}>
          <Text debug={debug}>Card inside small section</Text>
        </Card>
      </Section>

      <Section size="md" tone="muted" debug={debug}>
        <Heading level={2} debug={debug}>Medium Section (size=&quot;md&quot;)</Heading>
        <Text debug={debug}>
          This section uses --section-py-md for standard vertical padding. 
          This is the default section size for most content.
        </Text>
        <div style={{ display: 'grid', gap: 'var(--space-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <Card debug={debug}>
            <Heading level={4} noMargin debug={debug}>Feature 1</Heading>
            <Text debug={debug}>Content in first card</Text>
          </Card>
          <Card debug={debug}>
            <Heading level={4} noMargin debug={debug}>Feature 2</Heading>
            <Text debug={debug}>Content in second card</Text>
          </Card>
        </div>
      </Section>

      <Section size="lg" tone="brand" debug={debug}>
        <Heading level={2} debug={debug}>Large Section (size=&quot;lg&quot;)</Heading>
        <Text debug={debug}>
          This section uses --section-py-lg for generous vertical padding. 
          Great for hero sections, CTAs, and featured content.
        </Text>
        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', marginTop: 'var(--space-4)' }}>
          <Button tone="neutral" debug={debug}>Primary Action</Button>
          <Button tone="neutral" variant="outline" debug={debug}>Secondary</Button>
        </div>
      </Section>

      {/* Tone Variations */}
      <Section size="md" tone="surface" debug={debug}>
        <Heading level={2} debug={debug}>Surface Tone (default)</Heading>
        <Text debug={debug}>
          Uses --surface background with --on-surface text. Clean, neutral appearance.
        </Text>
      </Section>

      <Section size="md" tone="accent" debug={debug}>
        <Heading level={2} debug={debug}>Accent Tone</Heading>
        <Text debug={debug}>
          Uses --accent background (champagne gold) with --on-accent text. 
          Perfect for highlighting special content.
        </Text>
        <Card tone="neutral" debug={debug}>
          <Text debug={debug}>Neutral card on accent background</Text>
        </Card>
      </Section>

      <Section size="md" tone="muted" debug={debug}>
        <Heading level={2} debug={debug}>Muted Tone</Heading>
        <Text debug={debug}>
          Uses --muted background with --on-muted text. 
          Subtle sections for supporting content.
        </Text>
      </Section>

      {/* Alignment Tests */}
      <Section size="md" tone="surface" align="center" debug={debug}>
        <Heading level={2} debug={debug}>Center Aligned Section</Heading>
        <Text debug={debug}>
          This section has align=&quot;center&quot; which centers all text content.
          Useful for hero sections and featured content.
        </Text>
        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', marginTop: 'var(--space-4)' }}>
          <Button debug={debug}>Centered Button</Button>
        </div>
      </Section>

      <Section size="md" tone="surface" align="left" debug={debug}>
        <Heading level={2} debug={debug}>Left Aligned Section (default)</Heading>
        <Text debug={debug}>
          This section has align=&quot;left&quot; which is the default alignment.
          Most content sections use left alignment for readability.
        </Text>
      </Section>

      {/* Complex Layout */}
      <Section size="lg" tone="brand" align="center" debug={debug}>
        <Heading level={2} debug={debug}>Hero Section Example</Heading>
        <Text size="lg" debug={debug}>
          Large section with brand background, center alignment, and generous padding.
          Perfect for homepage heroes and major CTAs.
        </Text>
        
        <div style={{ 
          display: 'grid', 
          gap: 'var(--space-6)', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          marginTop: 'var(--space-6)'
        }}>
          <Card tone="neutral" debug={debug}>
            <Heading level={4} noMargin debug={debug}>Feature</Heading>
            <Text debug={debug}>Description of key feature</Text>
            <Button size="sm" debug={debug}>Learn More</Button>
          </Card>
          
          <Card tone="neutral" debug={debug}>
            <Heading level={4} noMargin debug={debug}>Benefit</Heading>
            <Text debug={debug}>Description of main benefit</Text>
            <Button size="sm" debug={debug}>Get Started</Button>
          </Card>
          
          <Card tone="neutral" debug={debug}>
            <Heading level={4} noMargin debug={debug}>Solution</Heading>
            <Text debug={debug}>Description of solution</Text>
            <Button size="sm" debug={debug}>Try Now</Button>
          </Card>
        </div>
      </Section>

      {/* Token Testing */}
      <Section size="md" tone="surface" debug={debug}>
        <Heading level={2} debug={debug}>Section Spacing Tokens</Heading>
        <Text debug={debug}>
          The Section component uses these spacing tokens for vertical padding:
        </Text>
        
        <div style={{ 
          background: 'var(--surface)', 
          padding: 'var(--space-6)', 
          borderRadius: 'var(--r-md)',
          border: '1px solid var(--border)',
          fontSize: 'var(--text-sm)',
          fontFamily: 'monospace',
          marginTop: 'var(--space-4)'
        }}>
          <div style={{ marginBottom: 'var(--space-2)' }}>
            <code>size=&quot;sm&quot; → --section-py-sm: var(--space-8)  /* 32px */</code>
          </div>
          <div style={{ marginBottom: 'var(--space-2)' }}>
            <code>size=&quot;md&quot; → --section-py-md: var(--space-10) /* 40px */</code>
          </div>
          <div>
            <code>size=&quot;lg&quot; → --section-py-lg: var(--space-12) /* 48px */</code>
          </div>
        </div>
      </Section>

      {/* Usage Examples */}
      <Section size="md" tone="surface" debug={debug}>
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
            <code>{`<Section size="sm" tone="surface">Compact section</Section>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Section size="md" tone="brand">Standard brand section</Section>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Section size="lg" tone="accent" align="center">Hero section</Section>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Section tone="muted">Muted background section</Section>`}</code>
          </div>
          <div>
            <code>{`<Section debug={true}>Section with debug panel</Section>`}</code>
          </div>
        </div>
      </Section>
    </div>
  );
}