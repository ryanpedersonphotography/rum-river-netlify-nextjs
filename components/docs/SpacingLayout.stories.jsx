/**
 * Spacing & Layout System Documentation
 *
 * Visual guide to the spacing scale, layout primitives, and common patterns.
 * Use this as a reference when migrating components to the design system.
 */

import Stack from 'components/primitives/Stack';
import Grid from 'components/primitives/Grid';
import Container from 'components/primitives/Container';
import Spacer from 'components/primitives/Spacer';
import Card from 'components/primitives/Card';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';

export default {
  title: 'Docs/Spacing & Layout',
  parameters: {
    layout: 'padded',
  },
};

// Helper component for visual spacing demonstration
const SpacingBox = ({ size, token, px }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-4)',
    marginBottom: 'var(--space-3)'
  }}>
    <div style={{
      width: `var(${token})`,
      height: 'var(--space-8)',
      background: 'var(--brand)',
      borderRadius: 'var(--r-sm)',
      flexShrink: 0,
    }} />
    <div>
      <code style={{
        fontFamily: 'monospace',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-medium)',
        color: 'var(--brand)'
      }}>
        {token}
      </code>
      <Text size="sm" style={{ color: 'var(--text-muted)', margin: 0 }}>
        {size} — {px}
      </Text>
    </div>
  </div>
);

const CodeBlock = ({ children }) => (
  <pre style={{
    background: 'var(--surface-muted)',
    padding: 'var(--space-4)',
    borderRadius: 'var(--r-md)',
    overflow: 'auto',
    fontSize: 'var(--text-sm)',
    lineHeight: 1.6,
    border: '1px solid var(--border)',
  }}>
    <code>{children}</code>
  </pre>
);

const Section = ({ title, children }) => (
  <section style={{ marginBottom: 'var(--space-12)' }}>
    <Heading level={2} size="2xl" style={{
      marginBottom: 'var(--space-6)',
      fontFamily: 'var(--font-display)',
      color: 'var(--brand)'
    }}>
      {title}
    </Heading>
    {children}
  </section>
);

export const DocsOnly = () => (
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    {/* Header */}
    <div style={{ marginBottom: 'var(--space-12)', textAlign: 'center' }}>
      <Heading level={1} size="hero" style={{
        marginBottom: 'var(--space-4)',
        fontFamily: 'var(--font-display)'
      }}>
        Spacing & Layout System
      </Heading>
      <Text size="xl" style={{ color: 'var(--text-muted)' }}>
        Visual guide to spacing tokens, layout primitives, and common patterns
      </Text>
    </div>

    {/* Spacing Scale */}
    <Section title="Spacing Scale (4px Grid System)">
      <Text size="lg" style={{ marginBottom: 'var(--space-6)' }}>
        All spacing follows a 4px grid system. Use these tokens instead of hardcoded px values.
      </Text>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--space-6)',
        marginBottom: 'var(--space-8)'
      }}>
        <div>
          <Heading level={3} size="lg" style={{ marginBottom: 'var(--space-4)' }}>
            Micro Spacing (1-6)
          </Heading>
          <SpacingBox size="xs" token="--space-1" px="4px" />
          <SpacingBox size="sm" token="--space-2" px="8px" />
          <SpacingBox size="md" token="--space-3" px="12px" />
          <SpacingBox size="lg" token="--space-4" px="16px" />
          <SpacingBox size="xl" token="--space-5" px="20px" />
          <SpacingBox size="2xl" token="--space-6" px="24px" />
        </div>

        <div>
          <Heading level={3} size="lg" style={{ marginBottom: 'var(--space-4)' }}>
            Component Spacing (8-12)
          </Heading>
          <SpacingBox size="3xl" token="--space-8" px="32px" />
          <SpacingBox size="4xl" token="--space-10" px="40px" />
          <SpacingBox size="5xl" token="--space-12" px="48px" />
        </div>

        <div>
          <Heading level={3} size="lg" style={{ marginBottom: 'var(--space-4)' }}>
            Section Spacing (16-24)
          </Heading>
          <SpacingBox size="6xl" token="--space-16" px="64px" />
          <SpacingBox size="7xl" token="--space-20" px="80px" />
          <SpacingBox size="8xl" token="--space-24" px="96px" />
        </div>
      </div>

      <Card tone="muted" padding="lg">
        <Heading level={4} size="md" noMargin style={{ marginBottom: 'var(--space-3)' }}>
          ❌ Don't use hardcoded values
        </Heading>
        <CodeBlock>{`// Bad - hardcoded px values
<div style={{ padding: '24px', gap: '16px' }}>

// Bad - arbitrary values
<div style={{ marginBottom: '23px' }}>`}</CodeBlock>

        <Spacer size="md" />

        <Heading level={4} size="md" noMargin style={{ marginBottom: 'var(--space-3)' }}>
          ✅ Do use spacing tokens
        </Heading>
        <CodeBlock>{`// Good - semantic tokens
<div style={{ padding: 'var(--space-6)', gap: 'var(--space-4)' }}>

// Good - using Stack/Grid primitives
<Stack gap="lg">
<Grid gap="md">`}</CodeBlock>
      </Card>
    </Section>

    {/* Container System */}
    <Section title="Container System">
      <Text size="lg" style={{ marginBottom: 'var(--space-6)' }}>
        Containers constrain content width and provide consistent padding.
      </Text>

      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Container size="sm" debug>
          <Card tone="muted" padding="md">
            <Text weight="medium">Small Container (640px max-width)</Text>
            <Text size="sm" style={{ color: 'var(--text-muted)' }}>
              Best for: forms, narrow content, reading text
            </Text>
          </Card>
        </Container>
      </div>

      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Container size="md" debug>
          <Card tone="muted" padding="md">
            <Text weight="medium">Medium Container (960px max-width)</Text>
            <Text size="sm" style={{ color: 'var(--text-muted)' }}>
              Best for: standard content, articles, default sections
            </Text>
          </Card>
        </Container>
      </div>

      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Container size="lg" debug>
          <Card tone="muted" padding="md">
            <Text weight="medium">Large Container (1200px max-width)</Text>
            <Text size="sm" style={{ color: 'var(--text-muted)' }}>
              Best for: wide layouts, grids, galleries
            </Text>
          </Card>
        </Container>
      </div>

      <CodeBlock>{`import Container from 'components/primitives/Container';

// Default medium container
<Container>
  <YourContent />
</Container>

// Small container for forms
<Container size="sm">
  <Form />
</Container>

// Large container for galleries
<Container size="lg">
  <Grid columns={3}>
    <Gallery />
  </Grid>
</Container>`}</CodeBlock>
    </Section>

    {/* Stack Component */}
    <Section title="Stack Component (Flexbox Layout)">
      <Text size="lg" style={{ marginBottom: 'var(--space-6)' }}>
        Stack arranges children in a row or column with consistent gaps.
      </Text>

      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Heading level={3} size="lg" style={{ marginBottom: 'var(--space-4)' }}>
          Vertical Stack (Default)
        </Heading>
        <Stack gap="md" style={{ padding: 'var(--space-4)', background: 'var(--surface-muted)', borderRadius: 'var(--r-md)' }}>
          <Card tone="neutral" padding="sm"><Text noMargin>Item 1</Text></Card>
          <Card tone="neutral" padding="sm"><Text noMargin>Item 2</Text></Card>
          <Card tone="neutral" padding="sm"><Text noMargin>Item 3</Text></Card>
        </Stack>
      </div>

      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Heading level={3} size="lg" style={{ marginBottom: 'var(--space-4)' }}>
          Horizontal Stack
        </Heading>
        <Stack direction="horizontal" gap="md" style={{ padding: 'var(--space-4)', background: 'var(--surface-muted)', borderRadius: 'var(--r-md)' }}>
          <Card tone="neutral" padding="sm"><Text noMargin>Item 1</Text></Card>
          <Card tone="neutral" padding="sm"><Text noMargin>Item 2</Text></Card>
          <Card tone="neutral" padding="sm"><Text noMargin>Item 3</Text></Card>
        </Stack>
      </div>

      <CodeBlock>{`import Stack from 'components/primitives/Stack';

// Vertical stack with medium gap
<Stack gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
</Stack>

// Horizontal stack for buttons
<Stack direction="horizontal" gap="sm">
  <Button>Primary</Button>
  <Button tone="neutral">Cancel</Button>
</Stack>

// Gap sizes: xs, sm, md, lg, xl, 2xl`}</CodeBlock>
    </Section>

    {/* Grid Component */}
    <Section title="Grid Component (CSS Grid Layout)">
      <Text size="lg" style={{ marginBottom: 'var(--space-6)' }}>
        Grid creates responsive column layouts with consistent gaps.
      </Text>

      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Heading level={3} size="lg" style={{ marginBottom: 'var(--space-4)' }}>
          2 Column Grid
        </Heading>
        <Grid columns={2} gap="md">
          <Card tone="muted" padding="md"><Text noMargin>Column 1</Text></Card>
          <Card tone="muted" padding="md"><Text noMargin>Column 2</Text></Card>
        </Grid>
      </div>

      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Heading level={3} size="lg" style={{ marginBottom: 'var(--space-4)' }}>
          3 Column Grid
        </Heading>
        <Grid columns={3} gap="lg">
          <Card tone="muted" padding="md"><Text noMargin>Col 1</Text></Card>
          <Card tone="muted" padding="md"><Text noMargin>Col 2</Text></Card>
          <Card tone="muted" padding="md"><Text noMargin>Col 3</Text></Card>
        </Grid>
      </div>

      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Heading level={3} size="lg" style={{ marginBottom: 'var(--space-4)' }}>
          4 Column Grid
        </Heading>
        <Grid columns={4} gap="sm">
          <Card tone="muted" padding="sm"><Text size="sm" noMargin>1</Text></Card>
          <Card tone="muted" padding="sm"><Text size="sm" noMargin>2</Text></Card>
          <Card tone="muted" padding="sm"><Text size="sm" noMargin>3</Text></Card>
          <Card tone="muted" padding="sm"><Text size="sm" noMargin>4</Text></Card>
        </Grid>
      </div>

      <CodeBlock>{`import Grid from 'components/primitives/Grid';

// 3-column feature grid
<Grid columns={3} gap="lg">
  <FeatureCard />
  <FeatureCard />
  <FeatureCard />
</Grid>

// Responsive: columns auto-adjust on mobile
// Gap sizes: xs, sm, md, lg, xl`}</CodeBlock>
    </Section>

    {/* Spacer Component */}
    <Section title="Spacer Component (Declarative Whitespace)">
      <Text size="lg" style={{ marginBottom: 'var(--space-6)' }}>
        Spacer creates whitespace without wrapper divs. Perfect for vertical rhythm.
      </Text>

      <Card tone="muted" padding="lg">
        <Text noMargin>Content block 1</Text>
        <Spacer size="xs" />
        <div style={{ height: '2px', background: 'var(--border)' }} />
        <Text size="sm" style={{ color: 'var(--text-muted)' }}>↑ xs spacer (4px)</Text>

        <Text noMargin>Content block 2</Text>
        <Spacer size="md" />
        <div style={{ height: '2px', background: 'var(--border)' }} />
        <Text size="sm" style={{ color: 'var(--text-muted)' }}>↑ md spacer (12px)</Text>

        <Text noMargin>Content block 3</Text>
        <Spacer size="xl" />
        <div style={{ height: '2px', background: 'var(--border)' }} />
        <Text size="sm" style={{ color: 'var(--text-muted)' }}>↑ xl spacer (20px)</Text>
      </Card>

      <Spacer size="lg" />

      <CodeBlock>{`import Spacer from 'components/primitives/Spacer';

// Vertical spacing between sections
<Section>Content 1</Section>
<Spacer size="xl" />
<Section>Content 2</Section>

// Horizontal spacing
<Stack direction="horizontal">
  <Button>Left</Button>
  <Spacer size="md" horizontal />
  <Button>Right</Button>
</Stack>`}</CodeBlock>
    </Section>

    {/* Common Patterns */}
    <Section title="Common Layout Patterns">
      <Text size="lg" style={{ marginBottom: 'var(--space-6)' }}>
        Real-world examples combining spacing and layout primitives.
      </Text>

      <Heading level={3} size="lg" style={{ marginBottom: 'var(--space-4)' }}>
        Pattern 1: Card Grid Gallery
      </Heading>
      <Container size="lg">
        <Grid columns={3} gap="lg">
          <Card tone="neutral" padding="lg" elevation={1}>
            <Stack gap="sm">
              <div style={{
                height: '120px',
                background: 'var(--surface-muted)',
                borderRadius: 'var(--r-sm)'
              }} />
              <Heading level={4} size="md" noMargin>Feature 1</Heading>
              <Text size="sm" noMargin>Description text</Text>
            </Stack>
          </Card>
          <Card tone="neutral" padding="lg" elevation={1}>
            <Stack gap="sm">
              <div style={{
                height: '120px',
                background: 'var(--surface-muted)',
                borderRadius: 'var(--r-sm)'
              }} />
              <Heading level={4} size="md" noMargin>Feature 2</Heading>
              <Text size="sm" noMargin>Description text</Text>
            </Stack>
          </Card>
          <Card tone="neutral" padding="lg" elevation={1}>
            <Stack gap="sm">
              <div style={{
                height: '120px',
                background: 'var(--surface-muted)',
                borderRadius: 'var(--r-sm)'
              }} />
              <Heading level={4} size="md" noMargin>Feature 3</Heading>
              <Text size="sm" noMargin>Description text</Text>
            </Stack>
          </Card>
        </Grid>
      </Container>

      <Spacer size="lg" />

      <CodeBlock>{`<Container size="lg">
  <Grid columns={3} gap="lg">
    <Card tone="neutral" padding="lg" elevation={1}>
      <Stack gap="sm">
        <Image />
        <Heading level={4}>Feature Title</Heading>
        <Text size="sm">Description</Text>
      </Stack>
    </Card>
    {/* More cards... */}
  </Grid>
</Container>`}</CodeBlock>

      <Spacer size="2xl" />

      <Heading level={3} size="lg" style={{ marginBottom: 'var(--space-4)' }}>
        Pattern 2: Form Layout
      </Heading>
      <Container size="sm">
        <Card tone="neutral" padding="lg">
          <Stack gap="md">
            <Heading level={3} size="xl" noMargin>Contact Form</Heading>
            <Text>Fill out the form below</Text>
            <Spacer size="sm" />

            <Stack gap="sm">
              <div style={{
                padding: 'var(--space-3)',
                background: 'var(--surface-muted)',
                borderRadius: 'var(--r-sm)',
                border: '1px solid var(--border)'
              }}>
                <Text size="sm" noMargin style={{ color: 'var(--text-muted)' }}>Name input</Text>
              </div>
              <div style={{
                padding: 'var(--space-3)',
                background: 'var(--surface-muted)',
                borderRadius: 'var(--r-sm)',
                border: '1px solid var(--border)'
              }}>
                <Text size="sm" noMargin style={{ color: 'var(--text-muted)' }}>Email input</Text>
              </div>
              <div style={{
                padding: 'var(--space-6)',
                background: 'var(--surface-muted)',
                borderRadius: 'var(--r-sm)',
                border: '1px solid var(--border)'
              }}>
                <Text size="sm" noMargin style={{ color: 'var(--text-muted)' }}>Message textarea</Text>
              </div>
            </Stack>

            <div style={{
              padding: 'var(--space-3)',
              background: 'var(--brand)',
              color: 'var(--on-brand)',
              borderRadius: 'var(--r-md)',
              textAlign: 'center',
              fontWeight: 'var(--weight-medium)'
            }}>
              Submit Button
            </div>
          </Stack>
        </Card>
      </Container>

      <Spacer size="lg" />

      <CodeBlock>{`<Container size="sm">
  <Card tone="neutral" padding="lg">
    <Stack gap="md">
      <Heading level={3}>Contact Form</Heading>
      <Text>Fill out the form below</Text>
      <Spacer size="sm" />

      <Stack gap="sm">
        <Input name="name" label="Name" />
        <Input name="email" label="Email" />
        <Textarea name="message" label="Message" />
      </Stack>

      <Button type="submit">Submit</Button>
    </Stack>
  </Card>
</Container>`}</CodeBlock>
    </Section>

    {/* Migration Guide */}
    <Section title="Migration Quick Reference">
      <Card tone="brand" padding="lg">
        <Heading level={3} size="xl" noMargin style={{ marginBottom: 'var(--space-4)', color: 'var(--on-brand)' }}>
          When migrating components:
        </Heading>
        <Stack gap="md" style={{ color: 'var(--on-brand)' }}>
          <Text noMargin>1. Replace hardcoded margins/padding with Stack or Spacer</Text>
          <Text noMargin>2. Replace flex/grid divs with Stack/Grid primitives</Text>
          <Text noMargin>3. Wrap content in Container for consistent max-width</Text>
          <Text noMargin>4. Use gap tokens (xs through 2xl) instead of px values</Text>
          <Text noMargin>5. Test in Storybook dark mode to verify token usage</Text>
        </Stack>
      </Card>
    </Section>
  </div>
);

DocsOnly.storyName = 'Spacing & Layout Guide';
