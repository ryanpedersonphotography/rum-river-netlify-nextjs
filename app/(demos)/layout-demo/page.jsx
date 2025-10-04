'use client';
import { useState } from 'react';
import Link from 'components/primitives/Link';
import Container from 'components/primitives/Container';
import Stack from 'components/primitives/Stack';
import Grid from 'components/primitives/Grid';
import Card from 'components/primitives/Card';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';

export default function LayoutDemo() {
  const [debug, setDebug] = useState(false);

  return (
    <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8)' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'var(--space-6)' }}>
        <Heading level={1} size="hero" debug={debug}>Layout Primitives Demo</Heading>
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
        Layout primitives for composing responsive, token-driven interfaces.
      </Text>

      {/* Link Examples */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Link Component</Heading>
        <Card debug={debug}>
          <Stack direction="vertical" gap="md" debug={debug}>
            <div>
              <Text debug={debug} size="sm" noMargin>Tone Variants:</Text>
              <Stack direction="horizontal" gap="lg" debug={debug} wrap>
                <Link href="#" tone="brand" debug={debug}>Brand Link</Link>
                <Link href="#" tone="accent" debug={debug}>Accent Link</Link>
                <Link href="#" tone="muted" debug={debug}>Muted Link</Link>
                <Link href="#" tone="neutral" debug={debug}>Neutral Link</Link>
              </Stack>
            </div>

            <div>
              <Text debug={debug} size="sm" noMargin>Underline Variants:</Text>
              <Stack direction="horizontal" gap="lg" debug={debug} wrap>
                <Link href="#" underline="always" debug={debug}>Always Underlined</Link>
                <Link href="#" underline="hover" debug={debug}>Hover to Underline</Link>
                <Link href="#" underline="none" debug={debug}>Never Underlined</Link>
              </Stack>
            </div>

            <div>
              <Text debug={debug} size="sm" noMargin>External Link:</Text>
              <Link href="https://example.com" external debug={debug}>
                External Link (opens new tab)
              </Link>
            </div>
          </Stack>
        </Card>
      </section>

      {/* Container Examples */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Container Component</Heading>
        <Text debug={debug}>Max-width containers with optional padding and centering.</Text>

        <Stack direction="vertical" gap="md" debug={debug}>
          <Container size="sm" padding="md" debug={debug}>
            <Card tone="brand" debug={debug}>
              <Text noMargin debug={debug}>Small Container (640px max-width)</Text>
            </Card>
          </Container>

          <Container size="md" padding="md" debug={debug}>
            <Card tone="accent" debug={debug}>
              <Text noMargin debug={debug}>Medium Container (768px max-width)</Text>
            </Card>
          </Container>

          <Container size="lg" padding="md" debug={debug}>
            <Card tone="muted" debug={debug}>
              <Text noMargin debug={debug}>Large Container (1024px max-width - default)</Text>
            </Card>
          </Container>
        </Stack>
      </section>

      {/* Stack Examples */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Stack Component (Flexbox)</Heading>
        <Text debug={debug}>Vertical and horizontal stacking with token-driven gaps.</Text>

        <Stack direction="vertical" gap="lg" debug={debug}>
          <div>
            <Text size="sm" debug={debug}>Vertical Stack (gap="md"):</Text>
            <Stack direction="vertical" gap="md" debug={debug}>
              <Card debug={debug}><Text noMargin debug={debug}>Item 1</Text></Card>
              <Card debug={debug}><Text noMargin debug={debug}>Item 2</Text></Card>
              <Card debug={debug}><Text noMargin debug={debug}>Item 3</Text></Card>
            </Stack>
          </div>

          <div>
            <Text size="sm" debug={debug}>Horizontal Stack (gap="lg", align="center"):</Text>
            <Stack direction="horizontal" gap="lg" align="center" debug={debug} wrap>
              <Card debug={debug}><Text noMargin debug={debug}>Item A</Text></Card>
              <Card debug={debug}><Text noMargin debug={debug}>Item B</Text></Card>
              <Card debug={debug}><Text noMargin debug={debug}>Item C</Text></Card>
            </Stack>
          </div>

          <div>
            <Text size="sm" debug={debug}>Horizontal Stack (justify="between"):</Text>
            <Stack direction="horizontal" justify="between" debug={debug}>
              <Button size="sm" debug={debug}>Left</Button>
              <Button size="sm" tone="accent" debug={debug}>Center</Button>
              <Button size="sm" tone="neutral" debug={debug}>Right</Button>
            </Stack>
          </div>
        </Stack>
      </section>

      {/* Grid Examples */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Grid Component</Heading>
        <Text debug={debug}>CSS Grid layouts with responsive auto-fit patterns.</Text>

        <Stack direction="vertical" gap="lg" debug={debug}>
          <div>
            <Text size="sm" debug={debug}>2-Column Grid (gap="md"):</Text>
            <Grid columns={2} gap="md" debug={debug}>
              <Card tone="brand" debug={debug}><Text noMargin debug={debug}>Grid Item 1</Text></Card>
              <Card tone="brand" debug={debug}><Text noMargin debug={debug}>Grid Item 2</Text></Card>
              <Card tone="brand" debug={debug}><Text noMargin debug={debug}>Grid Item 3</Text></Card>
              <Card tone="brand" debug={debug}><Text noMargin debug={debug}>Grid Item 4</Text></Card>
            </Grid>
          </div>

          <div>
            <Text size="sm" debug={debug}>3-Column Grid (gap="lg"):</Text>
            <Grid columns={3} gap="lg" debug={debug}>
              <Card tone="accent" debug={debug}>
                <Heading level={4} noMargin debug={debug}>Feature 1</Heading>
                <Text debug={debug}>Description here</Text>
              </Card>
              <Card tone="accent" debug={debug}>
                <Heading level={4} noMargin debug={debug}>Feature 2</Heading>
                <Text debug={debug}>Description here</Text>
              </Card>
              <Card tone="accent" debug={debug}>
                <Heading level={4} noMargin debug={debug}>Feature 3</Heading>
                <Text debug={debug}>Description here</Text>
              </Card>
            </Grid>
          </div>

          <div>
            <Text size="sm" debug={debug}>Auto-Responsive Grid (minItemWidth="200px"):</Text>
            <Grid columns="auto-fit" minItemWidth="200px" gap="md" debug={debug}>
              <Card tone="muted" debug={debug}><Text noMargin debug={debug}>Auto 1</Text></Card>
              <Card tone="muted" debug={debug}><Text noMargin debug={debug}>Auto 2</Text></Card>
              <Card tone="muted" debug={debug}><Text noMargin debug={debug}>Auto 3</Text></Card>
              <Card tone="muted" debug={debug}><Text noMargin debug={debug}>Auto 4</Text></Card>
              <Card tone="muted" debug={debug}><Text noMargin debug={debug}>Auto 5</Text></Card>
            </Grid>
          </div>
        </Stack>
      </section>

      {/* Composition Example */}
      <section>
        <Heading level={2} debug={debug}>Composition Example</Heading>
        <Text debug={debug}>Combining primitives to build complex layouts.</Text>

        <Container size="lg" padding="none" debug={debug}>
          <Card tone="surface" elevation={2} debug={debug}>
            <Stack direction="vertical" gap="lg" debug={debug}>
              <Heading level={3} debug={debug}>Product Features</Heading>

              <Grid columns="auto-fit" minItemWidth="250px" gap="md" debug={debug}>
                <Card tone="brand" debug={debug}>
                  <Stack direction="vertical" gap="sm" debug={debug}>
                    <Heading level={4} noMargin debug={debug}>Fast</Heading>
                    <Text debug={debug}>Lightning-fast performance with optimized rendering.</Text>
                    <Link href="#" debug={debug}>Learn more →</Link>
                  </Stack>
                </Card>

                <Card tone="accent" debug={debug}>
                  <Stack direction="vertical" gap="sm" debug={debug}>
                    <Heading level={4} noMargin debug={debug}>Flexible</Heading>
                    <Text debug={debug}>Token-driven design system adapts to your brand.</Text>
                    <Link href="#" debug={debug}>Learn more →</Link>
                  </Stack>
                </Card>

                <Card tone="muted" debug={debug}>
                  <Stack direction="vertical" gap="sm" debug={debug}>
                    <Heading level={4} noMargin debug={debug}>Accessible</Heading>
                    <Text debug={debug}>Built with accessibility best practices in mind.</Text>
                    <Link href="#" debug={debug}>Learn more →</Link>
                  </Stack>
                </Card>
              </Grid>

              <Stack direction="horizontal" gap="md" justify="center" debug={debug}>
                <Button size="lg" debug={debug}>Get Started</Button>
                <Button size="lg" tone="neutral" variant="outline" debug={debug}>View Docs</Button>
              </Stack>
            </Stack>
          </Card>
        </Container>
      </section>
    </main>
  );
}
