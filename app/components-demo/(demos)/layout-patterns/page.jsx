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

export default function LayoutPatterns() {
  const [debug, setDebug] = useState(false);

  return (
    <>
      {/* Header - Constrained */}
      <Section size="md" tone="surface">
        <Stack direction="vertical" gap="md">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <Heading level={1} size="hero" debug={debug}>Layout Patterns</Heading>
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
            Full-width vs constrained layouts, content strategies, and composition patterns.
          </Text>
        </Stack>
      </Section>

      {/* Pattern 1: Full-Width Background, Constrained Content (DEFAULT) */}
      <Section size="lg" tone="brand" align="center" debug={debug}>
        <Stack direction="vertical" gap="lg" align="center">
          <Heading level={2} debug={debug}>Pattern 1: Full-Width Background</Heading>
          <Text size="lg" debug={debug}>
            Section provides full-width background color, content is centered with max-width.
          </Text>
          <Text debug={debug} style={{ opacity: 0.9 }}>
            <strong>Use case:</strong> Hero sections, feature bands, CTAs
          </Text>
          <Stack direction="horizontal" gap="md">
            <Button size="lg" tone="neutral" debug={debug}>Primary CTA</Button>
            <Button size="lg" tone="neutral" variant="outline" debug={debug}>Secondary</Button>
          </Stack>
        </Stack>
      </Section>

      {/* Pattern 2: Full-Width Content (noContainer) */}
      <Section size="md" tone="muted" noContainer debug={debug}>
        <div style={{ padding: 'var(--space-6)' }}>
          <Container size="lg">
            <Stack direction="vertical" gap="md">
              <Heading level={2} debug={debug}>Pattern 2: Full-Width Content (noContainer)</Heading>
              <Text debug={debug}>
                Section has <code>noContainer={"{true}"}</code> - you manage width manually.
              </Text>
              <Text debug={debug}>
                <strong>Use case:</strong> Full-width images, edge-to-edge grids, custom layouts
              </Text>
            </Stack>
          </Container>

          {/* Full-width grid demonstration */}
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Grid columns="auto-fit" minItemWidth="200px" gap="md" debug={debug}>
              <Card tone="neutral" debug={debug}>
                <Text noMargin debug={debug}>Full Width Item 1</Text>
              </Card>
              <Card tone="neutral" debug={debug}>
                <Text noMargin debug={debug}>Full Width Item 2</Text>
              </Card>
              <Card tone="neutral" debug={debug}>
                <Text noMargin debug={debug}>Full Width Item 3</Text>
              </Card>
              <Card tone="neutral" debug={debug}>
                <Text noMargin debug={debug}>Full Width Item 4</Text>
              </Card>
            </Grid>
          </div>
        </div>
      </Section>

      {/* Pattern 3: Constrained Section (no background) */}
      <div style={{ padding: 'var(--space-12) 0' }}>
        <Container size="lg" padding="md" debug={debug}>
          <Stack direction="vertical" gap="md">
            <Heading level={2} debug={debug}>Pattern 3: Constrained Content (No Section)</Heading>
            <Text debug={debug}>
              No Section wrapper - just Container for max-width constraint.
            </Text>
            <Text debug={debug}>
              <strong>Use case:</strong> Blog posts, documentation, simple content blocks
            </Text>
            <Card debug={debug}>
              <Text debug={debug}>
                This card is inside a Container but outside a Section. The page background shows through.
              </Text>
            </Card>
          </Stack>
        </Container>
      </div>

      {/* Pattern 4: Asymmetric Layouts */}
      <Section size="md" tone="accent" debug={debug}>
        <Heading level={2} debug={debug}>Pattern 4: Asymmetric / Sidebar Layouts</Heading>
        <Text debug={debug}>Using Grid for content + sidebar patterns.</Text>

        <Grid columns={3} gap="lg" debug={debug}>
          <div style={{ gridColumn: 'span 2' }}>
            <Card tone="neutral" debug={debug}>
              <Heading level={3} debug={debug}>Main Content Area</Heading>
              <Text debug={debug}>
                This spans 2 columns. Perfect for blog posts with sidebars,
                product pages with specs, or dashboard layouts.
              </Text>
              <Stack direction="vertical" gap="sm" debug={debug}>
                <Text debug={debug}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

      {/* Pattern 5: Alternating Full-Width Sections */}
      <Section size="md" tone="surface" debug={debug}>
        <Stack direction="vertical" gap="md" align="center">
          <Heading level={2} debug={debug}>Pattern 5: Alternating Backgrounds</Heading>
          <Text debug={debug}>Stack multiple Sections with different tones for visual rhythm.</Text>
        </Stack>
      </Section>

      <Section size="sm" tone="brand" debug={debug}>
        <Text align="center" debug={debug}>Brand tone section - Full width background</Text>
      </Section>

      <Section size="sm" tone="muted" debug={debug}>
        <Text align="center" debug={debug}>Muted tone section - Creates visual bands</Text>
      </Section>

      <Section size="sm" tone="accent" debug={debug}>
        <Text align="center" debug={debug}>Accent tone section - Highlights special content</Text>
      </Section>

      {/* Pattern 6: Nested Containers for Progressive Constraint */}
      <Section size="lg" tone="surface" debug={debug}>
        <Heading level={2} debug={debug}>Pattern 6: Progressive Constraint</Heading>
        <Text debug={debug}>Section constrains to --container-lg (1024px), then inner Container narrows further.</Text>

        <Container size="md" padding="none" debug={debug}>
          <Card tone="brand" elevation={2} debug={debug}>
            <Stack direction="vertical" gap="md">
              <Heading level={3} noMargin debug={debug}>Narrower Content Area</Heading>
              <Text debug={debug}>
                This content is constrained to 768px (Container size="md") within the 1024px Section.
                Perfect for long-form reading or centered CTAs.
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
              Pattern 7: Full-Viewport Hero
            </Heading>
            <Text size="xl" align="center" debug={debug} style={{ color: 'var(--on-brand)', maxWidth: '600px' }}>
              No Section component - custom full-viewport height with gradient background.
              Container centers the content.
            </Text>
            <Stack direction="horizontal" gap="md">
              <Button size="lg" tone="neutral" debug={debug}>Get Started</Button>
              <Button size="lg" tone="neutral" variant="outline" debug={debug}>Learn More</Button>
            </Stack>
          </Stack>
        </Container>
      </div>

      {/* Pattern 8: Fixed-Width Constrained (Blog/Docs) */}
      <Section size="lg" tone="surface" debug={debug}>
        <Container size="md" center debug={debug}>
          <Stack direction="vertical" gap="lg">
            <Heading level={2} debug={debug}>Pattern 8: Fixed-Width Constrained</Heading>
            <Text size="lg" debug={debug}>
              For readable content like blog posts or documentation, use a narrower Container
              inside a full-width Section background. This creates optimal reading line length.
            </Text>
            <Card tone="muted" padding="lg" debug={debug}>
              <Stack direction="vertical" gap="md">
                <Heading level={4} debug={debug}>Example Article Content</Heading>
                <Text debug={debug}>
                  This is a simulated blog post or documentation article. Notice how the line length
                  is constrained to improve readability. Research shows that 60-80 characters per
                  line is optimal for reading comprehension.
                </Text>
                <Text debug={debug}>
                  The Section provides the full-width background (surface tone), while the Container
                  with size="md" (768px) keeps the content narrow and centered.
                </Text>
              </Stack>
            </Card>
            <Text debug={debug} style={{ opacity: 0.7 }}>
              <strong>Code:</strong> <code>&lt;Section&gt;&lt;Container size="md"&gt;...&lt;/Container&gt;&lt;/Section&gt;</code>
            </Text>
          </Stack>
        </Container>
      </Section>

      {/* Pattern Comparison Table */}
      <Section size="lg" tone="surface" debug={debug}>
        <Heading level={2} debug={debug}>Pattern Quick Reference</Heading>

        <div style={{
          overflowX: 'auto',
          marginTop: 'var(--space-6)'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 'var(--text-sm)'
          }}>
            <thead>
              <tr style={{ background: 'var(--muted)', color: 'var(--on-muted)' }}>
                <th style={{ padding: 'var(--space-3)', textAlign: 'left' }}>Pattern</th>
                <th style={{ padding: 'var(--space-3)', textAlign: 'left' }}>Code</th>
                <th style={{ padding: 'var(--space-3)', textAlign: 'left' }}>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: 'var(--space-3)' }}>Full-width BG</td>
                <td style={{ padding: 'var(--space-3)' }}><code>&lt;Section tone="brand"&gt;</code></td>
                <td style={{ padding: 'var(--space-3)' }}>Heroes, CTAs, feature bands</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: 'var(--space-3)' }}>Full-width content</td>
                <td style={{ padding: 'var(--space-3)' }}><code>&lt;Section noContainer&gt;</code></td>
                <td style={{ padding: 'var(--space-3)' }}>Edge-to-edge grids, images</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: 'var(--space-3)' }}>Constrained only</td>
                <td style={{ padding: 'var(--space-3)' }}><code>&lt;Container size="lg"&gt;</code></td>
                <td style={{ padding: 'var(--space-3)' }}>Blog posts, documentation</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: 'var(--space-3)' }}>Sidebar layout</td>
                <td style={{ padding: 'var(--space-3)' }}><code>&lt;Grid columns={3}&gt;</code></td>
                <td style={{ padding: 'var(--space-3)' }}>Content + sidebar, dashboards</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: 'var(--space-3)' }}>Alternating bands</td>
                <td style={{ padding: 'var(--space-3)' }}><code>Multiple &lt;Section&gt; stacked</code></td>
                <td style={{ padding: 'var(--space-3)' }}>Visual rhythm, variety</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: 'var(--space-3)' }}>Progressive constraint</td>
                <td style={{ padding: 'var(--space-3)' }}><code>&lt;Section&gt;&lt;Container size="sm"&gt;</code></td>
                <td style={{ padding: 'var(--space-3)' }}>Reading content, centered CTAs</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: 'var(--space-3)' }}>Full-viewport</td>
                <td style={{ padding: 'var(--space-3)' }}><code>&lt;div minHeight="100vh"&gt;</code></td>
                <td style={{ padding: 'var(--space-3)' }}>Splash screens, landing pages</td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--space-3)' }}>Fixed-width (blog/docs)</td>
                <td style={{ padding: 'var(--space-3)' }}><code>&lt;Section&gt;&lt;Container size="md"&gt;</code></td>
                <td style={{ padding: 'var(--space-3)' }}>Articles, documentation, readable content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Best Practices */}
      <Section size="md" tone="muted" debug={debug}>
        <Heading level={2} debug={debug}>Best Practices</Heading>

        <Grid columns={2} gap="lg" debug={debug}>
          <Card debug={debug}>
            <Heading level={4} debug={debug}>✅ Do This</Heading>
            <ul style={{ marginLeft: 'var(--space-6)', lineHeight: 1.8 }}>
              <li>Use Section for full-width backgrounds</li>
              <li>Use Container when you only need max-width</li>
              <li>Set <code>noContainer</code> for edge-to-edge layouts</li>
              <li>Combine Section + Container for progressive constraint</li>
              <li>Use tone props instead of custom backgrounds</li>
            </ul>
          </Card>

          <Card debug={debug}>
            <Heading level={4} debug={debug}>❌ Don't Do This</Heading>
            <ul style={{ marginLeft: 'var(--space-6)', lineHeight: 1.8 }}>
              <li>Don't add inline max-width styles</li>
              <li>Don't use Tailwind container classes</li>
              <li>Don't hardcode background colors</li>
              <li>Don't nest Sections inside Sections</li>
              <li>Don't use px/py directly on Section</li>
            </ul>
          </Card>
        </Grid>
      </Section>
    </>
  );
}
