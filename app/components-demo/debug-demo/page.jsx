'use client';

import Section from 'components/layout/Section';
import Card from 'components/primitives/Card';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';
import Input from 'components/primitives/Input';

export default function DebugDemo() {
  return (
    <>
      <Section size="md" tone="surface">
        <Heading level={1} size="hero" align="center">Debug Mode Demo</Heading>
        <Text size="lg" align="center">
          Add the `debug` prop to any component to see its tokens and computed styles.
        </Text>
      </Section>

      <Section size="md" tone="surface">
        <Heading level={2}>Card Debug Examples</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          <Card tone="neutral" debug>
            <Heading level={4} noMargin debug>Neutral Card</Heading>
            <Text debug>Shows surface tokens, border, and default shadow.</Text>
          </Card>
          
          <Card tone="brand" elevation={2} debug>
            <Heading level={4} noMargin debug>Brand Card</Heading>
            <Text debug>Shows brand/on-brand tokens with elevation 2.</Text>
          </Card>
        </div>
      </Section>

      <Section size="md" tone="muted">
        <Heading level={2}>Typography Inheritance Test</Heading>
        <Card tone="brand" padding="lg" debug>
          <Heading level={3} noMargin debug>Color Inheritance</Heading>
          <Text size="lg" debug>
            Typography components inherit color from their parent Card tone.
            This text should be white (--on-brand) without explicit tone props.
          </Text>
        </Card>
      </Section>

      <Section size="md" tone="surface">
        <Heading level={2}>Button Debug Examples</Heading>
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
          <Button tone="brand" debug>Brand Solid</Button>
          <Button tone="brand" variant="outline" debug>Brand Outline</Button>
          <Button tone="brand" variant="link" debug>Brand Link</Button>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <Button size="sm" debug>Small</Button>
          <Button size="md" debug>Medium</Button>
          <Button size="lg" debug>Large</Button>
        </div>
      </Section>

      <Section size="md" tone="surface">
        <Heading level={2}>Input Debug Example</Heading>
        <div style={{ maxWidth: '400px' }}>
          <Input type="text" placeholder="Debug input field" debug />
        </div>
      </Section>

      <Section size="lg" tone="brand" align="center" debug>
        <Card tone="neutral" elevation={3} padding="lg" debug>
          <Heading level={2} noMargin debug>Full Stack Debug</Heading>
          <Text size="lg" debug>
            Section with debug showing brand background and large padding.
            Contains a neutral card with elevation 3.
          </Text>
          <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
            <Button tone="brand" debug>Action</Button>
            <Input placeholder="Enter value" style={{ flex: 1 }} debug />
          </div>
        </Card>
      </Section>

      <Section size="md" tone="surface">
        <Heading level={2}>Debug Panel Features</Heading>
        <Card padding="lg">
          <Text size="lg" weight="semibold">What the debug panel shows:</Text>
          <ul style={{ marginTop: 'var(--space-3)', marginBottom: 0, paddingLeft: 'var(--space-6)' }}>
            <li><Text>CSS classes being applied to the component</Text></li>
            <li><Text>Token values from CSS custom properties</Text></li>
            <li><Text>Computed styles (background, color, padding, etc.)</Text></li>
            <li><Text>Live updates when theme changes</Text></li>
            <li><Text>Scoped reading from the actual element</Text></li>
          </ul>
          
          <Text size="lg" weight="semibold" style={{ marginTop: 'var(--space-6)' }}>How to use:</Text>
          <pre style={{ 
            background: 'var(--surface)', 
            border: '1px solid var(--border)',
            padding: 'var(--space-4)', 
            borderRadius: 'var(--r-md)',
            marginTop: 'var(--space-3)',
            overflowX: 'auto'
          }}>
{`<Card tone="brand" debug>
  <Heading debug>Title</Heading>
  <Text debug>Content</Text>
  <Button debug>Click</Button>
</Card>`}
          </pre>
        </Card>
      </Section>
    </>
  );
}