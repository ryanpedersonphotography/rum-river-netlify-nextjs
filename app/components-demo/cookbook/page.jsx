'use client';
import { useState } from 'react';
import Container from 'components/primitives/Container';
import Stack from 'components/primitives/Stack';
import Grid from 'components/primitives/Grid';
import Spacer from 'components/primitives/Spacer';
import Card from 'components/primitives/Card';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';
import Section from 'components/layout/Section';
import SectionHeader from 'components/primitives/SectionHeader';
import MediaBlock from 'components/primitives/MediaBlock';

export default function CookbookPage() {
  const [activePattern, setActivePattern] = useState('centered-header');

  const patterns = {
    'centered-header': {
      title: 'Centered Section Header',
      description: 'Grid + SectionHeader + Spacer pattern for perfect centering',
      code: `<Section align="center" noContainer>
  <Grid columns={1} justify="center">
    <SectionHeader
      align="center"
      accent="Optional Accent"
      title="Your Section Title"
      description="Supporting description text"
    />
  </Grid>
  <Spacer size="2xl" />

  <Container size="lg">
    {/* Your content */}
  </Container>
</Section>`,
      demo: (
        <Section tone="brand" align="center" noContainer style={{ background: 'var(--gradient-blocks)' }}>
          <Grid columns={1} justify="center">
            <SectionHeader
              align="center"
              accent="Example Pattern"
              title="Perfectly Centered Header"
              description="Using Grid for centering, SectionHeader for content, and Spacer for token-driven spacing"
            />
          </Grid>
          <Spacer size="2xl" />
          <Container size="lg">
            <Text align="center">Your content goes here...</Text>
          </Container>
        </Section>
      )
    },
    'feature-grid': {
      title: 'Feature Grid with Cards',
      description: 'Auto-responsive grid for feature cards',
      code: `<Section size="lg">
  <SectionHeader
    align="center"
    accent="Our Features"
    title="What We Offer"
    description="Discover our amazing features"
  />

  <Grid columns="auto-fit" minItemWidth="280px" gap="lg">
    <Card tone="brand" elevation={2}>
      <Heading level={4}>Feature One</Heading>
      <Text>Description of the feature...</Text>
    </Card>
    <Card tone="accent" elevation={2}>
      <Heading level={4}>Feature Two</Heading>
      <Text>Description of the feature...</Text>
    </Card>
    <Card tone="muted" elevation={2}>
      <Heading level={4}>Feature Three</Heading>
      <Text>Description of the feature...</Text>
    </Card>
  </Grid>
</Section>`,
      demo: (
        <Section size="lg" tone="surface">
          <SectionHeader
            align="center"
            accent="Our Features"
            title="What We Offer"
            description="Auto-responsive grid that adapts to screen size"
          />
          <Grid columns="auto-fit" minItemWidth="280px" gap="lg">
            <Card tone="brand" elevation={2}>
              <Heading level={4}>Fast</Heading>
              <Text>Lightning quick performance</Text>
            </Card>
            <Card tone="accent" elevation={2}>
              <Heading level={4}>Flexible</Heading>
              <Text>Adapts to your needs</Text>
            </Card>
            <Card tone="muted" elevation={2}>
              <Heading level={4}>Reliable</Heading>
              <Text>Rock solid stability</Text>
            </Card>
          </Grid>
        </Section>
      )
    },
    'content-media': {
      title: 'Content + Media Block',
      description: 'Alternating image-text layout pattern',
      code: `<Section noContainer tone="brand">
  <Container size="lg">
    <MediaBlock layout="image-right" gap="xl" number="01">
      <MediaBlock.Content>
        <Heading level={3}>Section Title</Heading>
        <Text>Your content here...</Text>
      </MediaBlock.Content>
      <MediaBlock.Media>
        <img src="/your-image.jpg" alt="..." />
      </MediaBlock.Media>
    </MediaBlock>

    <Spacer size="2xl" />

    <MediaBlock layout="image-left" gap="xl" number="02">
      <MediaBlock.Content>
        <Heading level={3}>Another Section</Heading>
        <Text>More content...</Text>
      </MediaBlock.Content>
      <MediaBlock.Media>
        <img src="/your-image2.jpg" alt="..." />
      </MediaBlock.Media>
    </MediaBlock>
  </Container>
</Section>`,
      demo: (
        <Section noContainer tone="brand" style={{ background: 'var(--gradient-blocks)' }}>
          <Container size="lg">
            <MediaBlock layout="image-right" gap="xl" tone="brand" number="01">
              <MediaBlock.Content>
                <Heading level={3} noMargin>First Section</Heading>
                <Text>Content on the left, image on the right</Text>
              </MediaBlock.Content>
              <MediaBlock.Media>
                <div style={{
                  background: 'var(--muted)',
                  height: '200px',
                  borderRadius: 'var(--r-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text>Image Placeholder</Text>
                </div>
              </MediaBlock.Media>
            </MediaBlock>

            <Spacer size="2xl" />

            <MediaBlock layout="image-left" gap="xl" tone="brand" number="02">
              <MediaBlock.Content>
                <Heading level={3} noMargin>Second Section</Heading>
                <Text>Image on the left, content on the right</Text>
              </MediaBlock.Content>
              <MediaBlock.Media>
                <div style={{
                  background: 'var(--muted)',
                  height: '200px',
                  borderRadius: 'var(--r-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text>Image Placeholder</Text>
                </div>
              </MediaBlock.Media>
            </MediaBlock>
          </Container>
        </Section>
      )
    },
    'cta-section': {
      title: 'Call-to-Action Section',
      description: 'Centered CTA with buttons using Stack',
      code: `<Section tone="accent" align="center">
  <Stack direction="vertical" gap="lg" align="center">
    <Heading level={2}>Ready to Get Started?</Heading>
    <Text size="lg">Join thousands of satisfied customers</Text>
    <Stack direction="horizontal" gap="md">
      <Button size="lg" tone="brand">Get Started</Button>
      <Button size="lg" variant="outline" tone="neutral">Learn More</Button>
    </Stack>
  </Stack>
</Section>`,
      demo: (
        <Section tone="accent" align="center">
          <Stack direction="vertical" gap="lg" align="center">
            <Heading level={2}>Ready to Get Started?</Heading>
            <Text size="lg">Join thousands of satisfied customers</Text>
            <Stack direction="horizontal" gap="md">
              <Button size="lg" tone="brand">Get Started</Button>
              <Button size="lg" variant="outline" tone="neutral">Learn More</Button>
            </Stack>
          </Stack>
        </Section>
      )
    }
  };

  const currentPattern = patterns[activePattern];

  return (
    <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8)' }}>
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={1} size="4xl">Component Cookbook</Heading>
        <Text size="lg" style={{ opacity: 'var(--opacity-soft)' }}>
          Reusable patterns and recipes for building with our design system
        </Text>
      </div>

      {/* Pattern Selector */}
      <Card tone="surface" elevation={1} style={{ marginBottom: 'var(--space-8)' }}>
        <Text size="sm" weight="medium" noMargin style={{ marginBottom: 'var(--space-3)' }}>
          Select a Pattern:
        </Text>
        <Stack direction="horizontal" gap="sm" wrap>
          {Object.entries(patterns).map(([key, pattern]) => (
            <Button
              key={key}
              size="sm"
              tone={activePattern === key ? 'brand' : 'neutral'}
              variant={activePattern === key ? 'solid' : 'outline'}
              onClick={() => setActivePattern(key)}
            >
              {pattern.title}
            </Button>
          ))}
        </Stack>
      </Card>

      {/* Pattern Display */}
      <Stack direction="vertical" gap="xl">
        {/* Description */}
        <div>
          <Heading level={2}>{currentPattern.title}</Heading>
          <Text size="lg">{currentPattern.description}</Text>
        </div>

        {/* Code Example */}
        <div>
          <Text size="sm" weight="medium" noMargin style={{ marginBottom: 'var(--space-2)' }}>
            Code:
          </Text>
          <Card tone="muted" elevation={0}>
            <pre style={{
              overflow: 'auto',
              fontSize: 'var(--text-sm)',
              lineHeight: 1.6,
              margin: 0
            }}>
              <code>{currentPattern.code}</code>
            </pre>
          </Card>
        </div>

        {/* Live Demo */}
        <div>
          <Text size="sm" weight="medium" noMargin style={{ marginBottom: 'var(--space-2)' }}>
            Live Demo:
          </Text>
          <Card tone="surface" elevation={0} padding="none">
            {currentPattern.demo}
          </Card>
        </div>

        {/* Key Benefits */}
        <Card tone="brand" elevation={1}>
          <Heading level={3} size="lg" noMargin style={{ marginBottom: 'var(--space-3)' }}>
            Why This Pattern Works
          </Heading>
          <Stack direction="vertical" gap="sm">
            <Text noMargin>✅ <strong>Token-driven:</strong> Uses spacing scale (no hardcoded values)</Text>
            <Text noMargin>✅ <strong>Reusable:</strong> Copy-paste into your components</Text>
            <Text noMargin>✅ <strong>Responsive:</strong> Adapts to all screen sizes</Text>
            <Text noMargin>✅ <strong>Accessible:</strong> Semantic HTML and proper structure</Text>
            <Text noMargin>✅ <strong>Maintainable:</strong> Single source of truth from design system</Text>
          </Stack>
        </Card>
      </Stack>
    </main>
  );
}
