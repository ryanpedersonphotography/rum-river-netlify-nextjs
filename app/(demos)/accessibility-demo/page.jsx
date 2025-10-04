'use client';
import { useState } from 'react';
import Section from 'components/layout/Section';
import Container from 'components/primitives/Container';
import Stack from 'components/primitives/Stack';
import Grid from 'components/primitives/Grid';
import Card from 'components/primitives/Card';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';
import Input from 'components/primitives/Input';
import Link from 'components/primitives/Link';

export default function AccessibilityDemo() {
  const [debug, setDebug] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8)' }}>
      <Stack direction="vertical" gap="xl">
        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Heading level={1} size="hero" debug={debug}>Accessibility & States Demo</Heading>
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
          Testing component states, keyboard navigation, focus management, and ARIA attributes.
        </Text>

        {/* Button States */}
        <Section size="sm" tone="surface">
          <Heading level={2} debug={debug}>Button States</Heading>
          <Text debug={debug}>
            Try keyboard navigation (Tab), activation (Space/Enter), and screen reader announcements.
          </Text>

          <Stack direction="vertical" gap="lg" debug={debug}>
            <div>
              <Text size="sm" debug={debug}>Default States:</Text>
              <Stack direction="horizontal" gap="md" wrap debug={debug}>
                <Button debug={debug}>Default</Button>
                <Button disabled debug={debug}>Disabled</Button>
                <Button loading={loading} onClick={handleLoadingDemo} debug={debug}>
                  {loading ? 'Loading...' : 'Click to Load'}
                </Button>
              </Stack>
            </div>

            <div>
              <Text size="sm" debug={debug}>Tone Variants (Hover/Focus):</Text>
              <Stack direction="horizontal" gap="md" wrap debug={debug}>
                <Button tone="brand" debug={debug}>Brand</Button>
                <Button tone="accent" debug={debug}>Accent</Button>
                <Button tone="neutral" debug={debug}>Neutral</Button>
                <Button tone="muted" debug={debug}>Muted</Button>
              </Stack>
            </div>

            <div>
              <Text size="sm" debug={debug}>Outline Variants:</Text>
              <Stack direction="horizontal" gap="md" wrap debug={debug}>
                <Button variant="outline" debug={debug}>Outline</Button>
                <Button variant="outline" disabled debug={debug}>Disabled</Button>
                <Button variant="outline" loading={loading} debug={debug}>Loading</Button>
              </Stack>
            </div>
          </Stack>
        </Section>

        {/* Input States */}
        <Section size="sm" tone="muted">
          <Heading level={2} debug={debug}>Input States</Heading>
          <Text debug={debug}>
            Tab through inputs to test focus rings. Disabled inputs should be skipped.
          </Text>

          <Stack direction="vertical" gap="md" debug={debug}>
            <Input type="text" placeholder="Default input (hover me)" debug={debug} />
            <Input type="text" placeholder="Disabled input" disabled debug={debug} />
            <Input type="email" placeholder="Email with focus ring" debug={debug} />
            <Input type="password" placeholder="Password input" debug={debug} />

            <div>
              <Text size="sm" debug={debug}>Size Variants:</Text>
              <Stack direction="vertical" gap="sm" debug={debug}>
                <Input size="sm" placeholder="Small input" debug={debug} />
                <Input size="md" placeholder="Medium input (default)" debug={debug} />
                <Input size="lg" placeholder="Large input" debug={debug} />
              </Stack>
            </div>
          </Stack>
        </Section>

        {/* Link States */}
        <Section size="sm" tone="accent">
          <Heading level={2} debug={debug}>Link States</Heading>
          <Text debug={debug}>
            Tab through links, test hover states, and press Enter to activate.
          </Text>

          <Stack direction="vertical" gap="md" debug={debug}>
            <div>
              <Text size="sm" debug={debug}>Tone Variants:</Text>
              <Stack direction="horizontal" gap="lg" wrap debug={debug}>
                <Link href="#brand" tone="brand" debug={debug}>Brand Link</Link>
                <Link href="#accent" tone="accent" debug={debug}>Accent Link</Link>
                <Link href="#neutral" tone="neutral" debug={debug}>Neutral Link</Link>
                <Link href="#muted" tone="muted" debug={debug}>Muted Link</Link>
              </Stack>
            </div>

            <div>
              <Text size="sm" debug={debug}>Underline Variants:</Text>
              <Stack direction="horizontal" gap="lg" wrap debug={debug}>
                <Link href="#always" underline="always" debug={debug}>Always Underlined</Link>
                <Link href="#hover" underline="hover" debug={debug}>Hover to Underline</Link>
                <Link href="#none" underline="none" debug={debug}>No Underline</Link>
              </Stack>
            </div>
          </Stack>
        </Section>

        {/* Card Interactive States */}
        <Section size="sm" tone="brand">
          <Heading level={2} debug={debug}>Card Interactive States</Heading>
          <Text debug={debug}>
            Cards with interactive prop can be focused and activated.
          </Text>

          <Grid columns="auto-fit" minItemWidth="250px" gap="md" debug={debug}>
            <Card interactive as="button" onClick={() => alert('Card 1 clicked!')} debug={debug}>
              <Heading level={4} noMargin debug={debug}>Interactive Card 1</Heading>
              <Text debug={debug}>Click or press Enter</Text>
            </Card>

            <Card interactive as="a" href="#card2" debug={debug}>
              <Heading level={4} noMargin debug={debug}>Linked Card 2</Heading>
              <Text debug={debug}>Clickable as link</Text>
            </Card>

            <Card elevation={2} debug={debug}>
              <Heading level={4} noMargin debug={debug}>Static Card 3</Heading>
              <Text debug={debug}>Not interactive</Text>
            </Card>
          </Grid>
        </Section>

        {/* Keyboard Navigation Test */}
        <Section size="sm">
          <Heading level={2} debug={debug}>Keyboard Navigation Test</Heading>
          <Text debug={debug}>
            Use Tab to navigate, Shift+Tab to go backwards, Enter/Space to activate.
          </Text>

          <Card debug={debug}>
            <Stack direction="vertical" gap="md" debug={debug}>
              <Input type="text" placeholder="First input" debug={debug} />
              <Input type="text" placeholder="Second input" debug={debug} />

              <Stack direction="horizontal" gap="md" debug={debug}>
                <Button debug={debug}>Submit</Button>
                <Button variant="outline" debug={debug}>Cancel</Button>
                <Link href="#help" debug={debug}>Need help?</Link>
              </Stack>

              <Text size="sm" debug={debug}>
                <Link href="#terms" underline="always" debug={debug}>Terms</Link> ·{' '}
                <Link href="#privacy" underline="always" debug={debug}>Privacy</Link> ·{' '}
                <Link href="#contact" underline="always" debug={debug}>Contact</Link>
              </Text>
            </Stack>
          </Card>
        </Section>

        {/* Nested Primitives Test */}
        <Section size="md" tone="surface">
          <Heading level={2} debug={debug}>Nested Primitives Test</Heading>
          <Text debug={debug}>
            Testing that primitives work correctly when nested inside each other.
          </Text>

          <Container size="lg" padding="none" debug={debug}>
            <Card tone="brand" elevation={2} debug={debug}>
              <Stack direction="vertical" gap="lg" debug={debug}>
                <Heading level={3} debug={debug}>Card with Section Content</Heading>
                <Text debug={debug}>This card contains other primitives nested inside.</Text>

                <Grid columns={2} gap="md" debug={debug}>
                  <Card tone="neutral" debug={debug}>
                    <Heading level={4} noMargin debug={debug}>Nested Card 1</Heading>
                    <Text debug={debug}>Content here</Text>
                    <Button size="sm" debug={debug}>Action</Button>
                  </Card>

                  <Card tone="neutral" debug={debug}>
                    <Heading level={4} noMargin debug={debug}>Nested Card 2</Heading>
                    <Text debug={debug}>More content</Text>
                    <Button size="sm" debug={debug}>Action</Button>
                  </Card>
                </Grid>

                <Stack direction="horizontal" gap="md" justify="center" debug={debug}>
                  <Button debug={debug}>Primary CTA</Button>
                  <Button variant="outline" tone="neutral" debug={debug}>Secondary</Button>
                </Stack>
              </Stack>
            </Card>
          </Container>
        </Section>

        {/* ARIA Attributes Info */}
        <Section size="sm" tone="muted">
          <Heading level={2} debug={debug}>ARIA Attributes Reference</Heading>
          <Card debug={debug}>
            <Stack direction="vertical" gap="sm" debug={debug}>
              <Text debug={debug}><strong>Buttons:</strong></Text>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li><code>aria-disabled="true"</code> when disabled</li>
                <li><code>aria-busy="true"</code> when loading</li>
                <li><code>tabIndex={-1}</code> when disabled (for anchors)</li>
              </ul>

              <Text debug={debug}><strong>Inputs:</strong></Text>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>Native HTML input elements (inherent accessibility)</li>
                <li><code>disabled</code> attribute removes from tab order</li>
              </ul>

              <Text debug={debug}><strong>Links:</strong></Text>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li><code>rel="noopener noreferrer"</code> for external links</li>
                <li><code>target="_blank"</code> for external links</li>
              </ul>

              <Text debug={debug}><strong>Cards:</strong></Text>
              <ul style={{ marginLeft: 'var(--space-6)' }}>
                <li><code>role="button"</code> or rendered as <code>&lt;button&gt;</code></li>
                <li>Keyboard accessible with Enter/Space</li>
                <li>Focus-visible outline: 3px solid var(--focus-ring)</li>
              </ul>
            </Stack>
          </Card>
        </Section>
      </Stack>
    </main>
  );
}
