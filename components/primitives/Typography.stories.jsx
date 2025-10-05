import Heading from './Heading';
import Text from './Text';

export default {
  title: 'Primitives/Typography',
  tags: ['autodocs'],
};

// Heading Component Stories
export const Headings = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
      <div>
        <Heading level={1}>Heading Level 1</Heading>
        <Text size="sm" tone="muted">Default display size</Text>
      </div>
      <div>
        <Heading level={2}>Heading Level 2</Heading>
        <Text size="sm" tone="muted">Section heading</Text>
      </div>
      <div>
        <Heading level={3}>Heading Level 3</Heading>
        <Text size="sm" tone="muted">Subsection heading</Text>
      </div>
      <div>
        <Heading level={4}>Heading Level 4</Heading>
        <Text size="sm" tone="muted">Card or component heading</Text>
      </div>
      <div>
        <Heading level={5}>Heading Level 5</Heading>
        <Text size="sm" tone="muted">Small heading</Text>
      </div>
      <div>
        <Heading level={6}>Heading Level 6</Heading>
        <Text size="sm" tone="muted">Smallest heading</Text>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'All heading levels with semantic HTML (h1-h6)',
      },
    },
  },
};

export const HeadingTones = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
      <Heading level={2}>Default (inherits parent color)</Heading>
      <Heading level={2} tone="brand">Brand Tone</Heading>
      <Heading level={2} tone="accent">Accent Tone</Heading>
      <Heading level={2} tone="muted">Muted Tone</Heading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Heading color variants using role-based tokens',
      },
    },
  },
};

// Text Component Stories
export const TextSizes = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
      <Text size="xs">Extra small text (--text-xs)</Text>
      <Text size="sm">Small text (--text-sm)</Text>
      <Text size="md">Medium text / body default (--text-md)</Text>
      <Text size="lg">Large text (--text-lg)</Text>
      <Text size="xl">Extra large text (--text-xl)</Text>
      <Text size="2xl">2X large text (--text-2xl)</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete type scale from design system tokens',
      },
    },
  },
};

export const TextWeights = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
      <Text weight="normal">Normal weight (400)</Text>
      <Text weight="medium">Medium weight (500)</Text>
      <Text weight="semibold">Semibold weight (600)</Text>
      <Text weight="bold">Bold weight (700)</Text>
    </div>
  ),
};

export const TextTones = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
      <Text>Default (inherits parent color)</Text>
      <Text tone="brand">Brand tone</Text>
      <Text tone="accent">Accent tone</Text>
      <Text tone="muted">Muted tone</Text>
    </div>
  ),
};

export const TextAlignment = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
      <Text align="left">Left aligned text (default)</Text>
      <Text align="center">Center aligned text</Text>
      <Text align="right">Right aligned text</Text>
    </div>
  ),
};

export const TextCombinations = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
      <div>
        <Heading level={2} noMargin>Typography System</Heading>
        <Text size="lg" tone="muted">
          A complete set of text components using design system tokens
        </Text>
      </div>
      <div>
        <Text size="sm" weight="semibold" tone="brand">OVERLINE TEXT</Text>
        <Heading level={3} noMargin>Feature Title</Heading>
        <Text>
          Body text with normal weight and default sizing. Perfect for paragraphs and longer content blocks.
        </Text>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Common patterns combining Heading and Text components',
      },
    },
  },
};

// Dark mode preview - toggle toolbar to light to compare
export const DarkPreview = {
  parameters: {
    globals: { theme: "dark" },
  },
};

