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

export default function IsolatedLayoutDemo() {
  const [debug, setDebug] = useState(false);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Section size="md" tone="surface">
        <Stack direction="vertical" gap="md">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <Heading level={1} size="hero" debug={debug}>Isolated Layout Demo</Heading>
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
            This page is completely isolated from the website layout. No navigation, no footer, just pure layout primitives.
          </Text>
        </Stack>
      </Section>

      {/* Pattern 1: Full-Width Centered */}
      <Section size="lg" tone="brand" align="center" noContainer debug={debug}>
        <Button size="lg" tone="neutral" debug={debug}>Full-Width Centered CTA</Button>
      </Section>

      {/* Pattern 2: Full-Width Content (noContainer) */}
      <Section size="md" tone="muted" noContainer debug={debug}>
        <div style={{ padding: 'var(--space-6)' }}>
          <Container size="lg">
            <Stack direction="vertical" gap="md">
              <Heading level={2} debug={debug}>Pattern: Full-Width Content (noContainer)</Heading>
              <Text debug={debug}>
                Section has <code>noContainer={"{true}"}</code> - you manage width manually.
              </Text>
            </Stack>
          </Container>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <Grid columns="auto-fit" minItemWidth="200px" gap="md" debug={debug}>
              <Card tone="neutral" debug={debug}>
                <Text noMargin debug={debug}>Item 1</Text>
              </Card>
              <Card tone="neutral" debug={debug}>
                <Text noMargin debug={debug}>Item 2</Text>
              </Card>
              <Card tone="neutral" debug={debug}>
                <Text noMargin debug={debug}>Item 3</Text>
              </Card>
              <Card tone="neutral" debug={debug}>
                <Text noMargin debug={debug}>Item 4</Text>
              </Card>
            </Grid>
          </div>
        </div>
      </Section>

      {/* Pattern 3: Constrained Content (No Section) */}
      <div style={{ padding: 'var(--space-12) 0' }}>
        <Container size="lg" padding="md" debug={debug}>
          <Stack direction="vertical" gap="md">
            <Heading level={2} debug={debug}>Pattern: Constrained Content (No Section)</Heading>
            <Text debug={debug}>
              No Section wrapper - just Container for max-width constraint.
            </Text>
            <Card debug={debug}>
              <Text debug={debug}>
                This card is inside a Container but outside a Section.
              </Text>
            </Card>
          </Stack>
        </Container>
      </div>

      {/* Pattern 4: Asymmetric Layouts */}
      <Section size="md" tone="accent" debug={debug}>
        <Heading level={2} debug={debug}>Pattern: Asymmetric / Sidebar Layouts</Heading>
        <Text debug={debug}>Using Grid for content + sidebar patterns.</Text>

        <Grid columns={3} gap="lg" debug={debug}>
          <div style={{ gridColumn: 'span 2' }}>
            <Card tone="neutral" debug={debug}>
              <Heading level={3} debug={debug}>Main Content Area</Heading>
              <Text debug={debug}>
                This spans 2 columns. Perfect for blog posts with sidebars.
              </Text>
              <Stack direction="vertical" gap="sm" debug={debug}>
                <Text debug={debug}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Button debug={debug}>Read More</Button>
              </Stack>
            </Card>
          </div>

          <Card tone="neutral" debug={debug}>
            <Stack direction="vertical" gap="md">
              <Heading level={4} noMargin debug={debug}>Sidebar</Heading>
              <Stack direction="vertical" gap="sm">
                <Card tone="muted" padding="sm" debug={debug}>
                  <Text size="sm" noMargin debug={debug}>Widget 1</Text>
                </Card>
                <Card tone="muted" padding="sm" debug={debug}>
                  <Text size="sm" noMargin debug={debug}>Widget 2</Text>
                </Card>
                <Card tone="muted" padding="sm" debug={debug}>
                  <Text size="sm" noMargin debug={debug}>Widget 3</Text>
                </Card>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      </Section>

      {/* Pattern 5: Alternating Backgrounds */}
      <Section size="md" tone="surface" debug={debug}>
        <Stack direction="vertical" gap="md" align="center">
          <Heading level={2} debug={debug}>Pattern: Alternating Backgrounds</Heading>
          <Text debug={debug}>Stack Sections with different tones for visual rhythm.</Text>
        </Stack>
      </Section>

      <Section size="sm" tone="brand" debug={debug}>
        <Text align="center" debug={debug}>Brand tone section</Text>
      </Section>

      <Section size="sm" tone="muted" debug={debug}>
        <Text align="center" debug={debug}>Muted tone section</Text>
      </Section>

      <Section size="sm" tone="accent" debug={debug}>
        <Text align="center" debug={debug}>Accent tone section</Text>
      </Section>

      {/* Pattern 6: Progressive Constraint */}
      <Section size="lg" tone="surface" debug={debug}>
        <Heading level={2} debug={debug}>Pattern: Progressive Constraint</Heading>
        <Text debug={debug}>Section constrains to 1024px, then inner Container narrows to 768px.</Text>

        <Container size="md" center debug={debug}>
          <Card tone="brand" elevation={2} debug={debug}>
            <Stack direction="vertical" gap="md">
              <Heading level={3} noMargin debug={debug}>Narrower Content Area</Heading>
              <Text debug={debug}>
                This content is constrained to 768px within the 1024px Section.
              </Text>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button debug={debug}>Centered Action</Button>
              </div>
            </Stack>
          </Card>
        </Container>
      </Section>

      {/* Pattern 7: Full-Viewport Hero */}
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, var(--brand) 0%, var(--brand-alt) 100%)',
        color: 'var(--on-brand)'
      }}>
        <Container size="lg" padding="lg" debug={debug}>
          <Stack direction="vertical" gap="xl" align="center">
            <Heading level={1} size="hero" debug={debug} style={{ color: 'var(--on-brand)' }}>
              Pattern: Full-Viewport Hero
            </Heading>
            <Text size="xl" align="center" debug={debug} style={{ color: 'var(--on-brand)', maxWidth: '600px' }}>
              No Section component - custom full-viewport height with gradient background.
            </Text>
            <Stack direction="horizontal" gap="md">
              <Button size="lg" tone="neutral" debug={debug}>Get Started</Button>
              <Button size="lg" tone="neutral" variant="outline" debug={debug}>Learn More</Button>
            </Stack>
          </Stack>
        </Container>
      </div>

      {/* Pattern 8: Fixed-Width Constrained */}
      <Section size="lg" tone="surface" debug={debug}>
        <Container size="md" center debug={debug}>
          <Stack direction="vertical" gap="lg">
            <Heading level={2} debug={debug}>Pattern: Fixed-Width Constrained</Heading>
            <Text size="lg" debug={debug}>
              For readable content like blog posts, use a narrower Container inside a full-width Section.
            </Text>
            <Card tone="muted" padding="lg" debug={debug}>
              <Stack direction="vertical" gap="md">
                <Heading level={4} debug={debug}>Example Article Content</Heading>
                <Text debug={debug}>
                  This is a simulated blog post. Notice how the line length is constrained for readability.
                </Text>
                <Text debug={debug}>
                  The Section provides the full-width background, while Container keeps content narrow.
                </Text>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Section>

      {/* Container Size Demonstration */}
      <Section size="lg" tone="muted" debug={debug}>
        <Heading level={2} debug={debug}>Container Size Comparison</Heading>

        <Stack direction="vertical" gap="xl">
          <div>
            <Text debug={debug} style={{ marginBottom: 'var(--space-4)' }}>
              <strong>Container size="full"</strong> - No max-width constraint
            </Text>
            <Container size="full" debug={debug}>
              <Card tone="brand" debug={debug}>
                <Text noMargin debug={debug}>Full width container (100%)</Text>
              </Card>
            </Container>
          </div>

          <div>
            <Text debug={debug} style={{ marginBottom: 'var(--space-4)' }}>
              <strong>Container size="lg"</strong> - 1024px max-width
            </Text>
            <Container size="lg" center debug={debug}>
              <Card tone="brand" debug={debug}>
                <Text noMargin debug={debug}>Large container (1024px)</Text>
              </Card>
            </Container>
          </div>

          <div>
            <Text debug={debug} style={{ marginBottom: 'var(--space-4)' }}>
              <strong>Container size="md"</strong> - 768px max-width
            </Text>
            <Container size="md" center debug={debug}>
              <Card tone="brand" debug={debug}>
                <Text noMargin debug={debug}>Medium container (768px)</Text>
              </Card>
            </Container>
          </div>

          <div>
            <Text debug={debug} style={{ marginBottom: 'var(--space-4)' }}>
              <strong>Container size="sm"</strong> - 640px max-width
            </Text>
            <Container size="sm" center debug={debug}>
              <Card tone="brand" debug={debug}>
                <Text noMargin debug={debug}>Small container (640px)</Text>
              </Card>
            </Container>
          </div>
        </Stack>
      </Section>
    </div>
  );
}
