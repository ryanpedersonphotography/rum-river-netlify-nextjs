'use client';
import { useState } from 'react';
import Card from 'components/primitives/Card';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';
import Section from 'components/layout/Section';

export default function CardDemo() {
  const [debug, setDebug] = useState(false);

  return (
    <Section size="md" tone="surface">
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'var(--space-6)' }}>
        <Heading level={1} size="hero">Card Component Demo</Heading>
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
      <Text size="lg" align="center" tone="on-surface">
        Token-driven surface components with role-based theming.
      </Text>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Card Tones</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <Card debug={debug}>
            <Heading level={4} noMargin debug={debug}>Neutral Card</Heading>
            <Text debug={debug}>Uses surface + on-surface + border tokens. This is the default card style.</Text>
          </Card>

          <Card tone="brand" elevation={2} debug={debug}>
            <Heading level={4} noMargin debug={debug}>Brand Card</Heading>
            <Text debug={debug}>Great for hero overlays, CTAs, and brand emphasis sections.</Text>
          </Card>

          <Card tone="muted" debug={debug}>
            <Heading level={4} noMargin debug={debug}>Muted Panel</Heading>
            <Text debug={debug}>Perfect for subtle sections, sidebars, and supporting content.</Text>
          </Card>

          <Card tone="accent" elevation={2} debug={debug}>
            <Heading level={4} noMargin debug={debug}>Accent Card</Heading>
            <Text debug={debug}>Highlight cards using champagne gold for special callouts and features.</Text>
          </Card>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Elevation Levels</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <Card elevation={0} debug={debug}>
            <Heading level={5} noMargin debug={debug}>Flat (0)</Heading>
            <Text debug={debug}>No shadow - inline with content</Text>
          </Card>

          <Card elevation={1} debug={debug}>
            <Heading level={5} noMargin debug={debug}>Subtle (1)</Heading>
            <Text debug={debug}>Light shadow - default cards</Text>
          </Card>

          <Card elevation={2} debug={debug}>
            <Heading level={5} noMargin debug={debug}>Raised (2)</Heading>
            <Text debug={debug}>Medium shadow - featured content</Text>
          </Card>

          <Card elevation={3} debug={debug}>
            <Heading level={5} noMargin debug={debug}>Floating (3)</Heading>
            <Text debug={debug}>Heavy shadow - modals, overlays</Text>
          </Card>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Border Radius</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <Card radius="sm" debug={debug}>
            <Heading level={5} noMargin debug={debug}>Small Radius</Heading>
            <Text debug={debug}>Tight radius for lists and compact layouts</Text>
          </Card>

          <Card radius="md" debug={debug}>
            <Heading level={5} noMargin debug={debug}>Medium Radius</Heading>
            <Text debug={debug}>Standard card radius - default</Text>
          </Card>

          <Card radius="lg" debug={debug}>
            <Heading level={5} noMargin debug={debug}>Large Radius</Heading>
            <Text debug={debug}>Generous radius for featured panels</Text>
          </Card>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Padding Scale</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
          <Card padding="sm" debug={debug}>
            <Heading level={5} noMargin debug={debug}>Small Padding</Heading>
            <Text debug={debug}>Compact spacing for tight layouts</Text>
          </Card>

          <Card padding="md" debug={debug}>
            <Heading level={5} noMargin debug={debug}>Medium Padding</Heading>
            <Text debug={debug}>Default card padding - balanced and comfortable</Text>
          </Card>

          <Card padding="lg" debug={debug}>
            <Heading level={5} noMargin debug={debug}>Large Padding</Heading>
            <Text debug={debug}>Generous spacing for featured blocks and hero sections</Text>
          </Card>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Interactive Cards</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <Card interactive debug={debug}>
            <Heading level={4} noMargin debug={debug}>Clickable Card</Heading>
            <Text debug={debug}>Hover to see the lift effect. Great for links and buttons.</Text>
          </Card>

          <Card tone="brand" interactive elevation={2} debug={debug}>
            <Heading level={4} noMargin debug={debug}>Interactive Brand</Heading>
            <Text debug={debug}>Brand card with hover interaction for CTAs.</Text>
          </Card>

          <Card tone="muted" interactive as="button" style={{ cursor: 'pointer', border: 'none' }} debug={debug}>
            <Heading level={4} noMargin debug={debug}>Button Card</Heading>
            <Text debug={debug}>Actual button element with card styling.</Text>
          </Card>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2}>Complex Card Layouts</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
          <Card tone="brand" elevation={2} padding="lg" debug={debug}>
            <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
              <Heading level={3} noMargin debug={debug}>Featured Section</Heading>
              <Text size="lg" debug={debug}>
                This is a larger card with generous padding, brand theming, and elevated shadow.
                Perfect for hero sections and important announcements.
              </Text>
              <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
                <Button tone="neutral" debug={debug}>Learn More</Button>
                <Button variant="outline" tone="neutral" debug={debug}>Get Started</Button>
              </div>
            </div>
          </Card>

          <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Card debug={debug}>
              <Heading level={4} noMargin debug={debug}>Article Card</Heading>
              <Text size="sm" tone="on-surface" style={{ opacity: 0.8 }} debug={debug}>
                Published March 15, 2024
              </Text>
              <Text debug={debug}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore.
              </Text>
              <Button variant="link" size="sm" debug={debug}>Read More →</Button>
            </Card>

            <Card tone="muted" debug={debug}>
              <Heading level={4} noMargin debug={debug}>Stats Panel</Heading>
              <div style={{ display: 'grid', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text size="sm" debug={debug}>Total Users</Text>
                  <Text size="sm" weight="bold" debug={debug}>1,284</Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text size="sm" debug={debug}>Active Today</Text>
                  <Text size="sm" weight="bold" debug={debug}>142</Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text size="sm" debug={debug}>Growth Rate</Text>
                  <Text size="sm" weight="bold" tone="brand" debug={debug}>+12%</Text>
                </div>
              </div>
            </Card>

            <Card tone="accent" interactive debug={debug}>
              <Heading level={4} noMargin debug={debug}>Special Offer</Heading>
              <Text debug={debug}>
                Limited time promotion with accent theming for maximum visibility.
              </Text>
              <Button tone="neutral" size="sm" debug={debug}>Claim Offer</Button>
            </Card>
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
            <code>{`<Card>Default neutral card</Card>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Card tone="brand" elevation={2}>Brand card with elevation</Card>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Card tone="muted" interactive>Interactive muted card</Card>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Card tone="accent" radius="lg" padding="lg">Large accent card</Card>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Card as="article" elevation={0}>Flat article card</Card>`}</code>
          </div>
          <div>
            <code>{`<Card as="button" interactive>Button element with card styling</Card>`}</code>
          </div>
        </div>
      </section>
    </Section>
  );
}