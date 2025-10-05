import Card from './Card';
import Heading from './Heading';
import Text from './Text';
import Button from './Button';

export default {
  title: 'Primitives/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'select',
      options: ['surface', 'brand', 'accent', 'muted'],
      description: 'Background tone from design system',
    },
    elevation: {
      control: 'select',
      options: [0, 1, 2, 3],
      description: 'Shadow depth level',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal spacing',
    },
  },
};

export const Default = {
  args: {
    children: (
      <>
        <Heading level={3} noMargin>Card Title</Heading>
        <Text>This is a basic card with default surface tone and elevation.</Text>
      </>
    ),
    tone: 'surface',
    elevation: 1,
    padding: 'md',
  },
};

export const AllTones = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-4)' }}>
      <Card tone="surface" padding="lg">
        <Heading level={4} noMargin>Surface</Heading>
        <Text size="sm">Default card background</Text>
      </Card>
      <Card tone="brand" padding="lg">
        <Heading level={4} noMargin>Brand</Heading>
        <Text size="sm">Branded card background</Text>
      </Card>
      <Card tone="accent" padding="lg">
        <Heading level={4} noMargin>Accent</Heading>
        <Text size="sm">Accent card background</Text>
      </Card>
      <Card tone="muted" padding="lg">
        <Heading level={4} noMargin>Muted</Heading>
        <Text size="sm">Muted card background</Text>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Elevations = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-6)' }}>
      <Card elevation={0} padding="lg">
        <Heading level={5} noMargin>Elevation 0</Heading>
        <Text size="sm">No shadow</Text>
      </Card>
      <Card elevation={1} padding="lg">
        <Heading level={5} noMargin>Elevation 1</Heading>
        <Text size="sm">Subtle shadow</Text>
      </Card>
      <Card elevation={2} padding="lg">
        <Heading level={5} noMargin>Elevation 2</Heading>
        <Text size="sm">Medium shadow</Text>
      </Card>
      <Card elevation={3} padding="lg">
        <Heading level={5} noMargin>Elevation 3</Heading>
        <Text size="sm">Strong shadow</Text>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const PaddingOptions = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
      <Card padding="none" elevation={1}>
        <div style={{ padding: 'var(--space-2)', background: 'var(--accent)', opacity: 0.1 }}>
          Padding: none
        </div>
      </Card>
      <Card padding="sm" elevation={1}>
        <div style={{ background: 'var(--accent)', opacity: 0.1 }}>
          Padding: sm
        </div>
      </Card>
      <Card padding="md" elevation={1}>
        <div style={{ background: 'var(--accent)', opacity: 0.1 }}>
          Padding: md (default)
        </div>
      </Card>
      <Card padding="lg" elevation={1}>
        <div style={{ background: 'var(--accent)', opacity: 0.1 }}>
          Padding: lg
        </div>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const ContentCard = {
  render: () => (
    <Card tone="surface" elevation={2} padding="lg" style={{ maxWidth: '400px' }}>
      <Heading level={3} noMargin>Feature Title</Heading>
      <Text tone="muted" size="sm">Published on October 4, 2025</Text>
      <Text style={{ marginTop: 'var(--space-4)' }}>
        This is a content card showcasing how multiple primitives work together
        with the card component to create rich UI patterns.
      </Text>
      <div style={{ marginTop: 'var(--space-6)', display: 'flex', gap: 'var(--space-3)' }}>
        <Button size="sm">Learn More</Button>
        <Button size="sm" variant="outline">Share</Button>
      </div>
    </Card>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Example of a complete content card with heading, text, and actions',
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

