import Spacer from './Spacer';
import Card from './Card';

export default {
  title: 'Primitives/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Spacing size from design system scale',
    },
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Spacing direction',
    },
  },
};

export const Default = {
  args: {
    size: 'md',
    direction: 'vertical',
  },
  render: (args) => (
    <div>
      <Card padding="md" elevation={1}>Content Above</Card>
      <Spacer {...args} />
      <Card padding="md" elevation={1}>Content Below</Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const VerticalSizes = {
  render: () => (
    <div>
      <Card padding="sm" elevation={1}>Block 1</Card>
      <Spacer size="xs" />
      <Card padding="sm" elevation={1}>xs spacing</Card>
      <Spacer size="sm" />
      <Card padding="sm" elevation={1}>sm spacing</Card>
      <Spacer size="md" />
      <Card padding="sm" elevation={1}>md spacing</Card>
      <Spacer size="lg" />
      <Card padding="sm" elevation={1}>lg spacing</Card>
      <Spacer size="xl" />
      <Card padding="sm" elevation={1}>xl spacing</Card>
      <Spacer size="2xl" />
      <Card padding="sm" elevation={1}>2xl spacing</Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'All vertical spacing sizes from the design system scale',
      },
    },
  },
};

export const HorizontalSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Card padding="sm" elevation={1}>Start</Card>
      <Spacer size="xs" direction="horizontal" />
      <Card padding="sm" elevation={1}>xs</Card>
      <Spacer size="sm" direction="horizontal" />
      <Card padding="sm" elevation={1}>sm</Card>
      <Spacer size="md" direction="horizontal" />
      <Card padding="sm" elevation={1}>md</Card>
      <Spacer size="lg" direction="horizontal" />
      <Card padding="sm" elevation={1}>lg</Card>
      <Spacer size="xl" direction="horizontal" />
      <Card padding="sm" elevation={1}>xl</Card>
      <Spacer size="2xl" direction="horizontal" />
      <Card padding="sm" elevation={1}>End</Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Horizontal spacing using the Spacer component',
      },
    },
  },
};

export const SectionSpacing = {
  render: () => (
    <div>
      <Card padding="lg" elevation={1}>
        <h3 style={{ margin: 0 }}>Section 1</h3>
        <p style={{ margin: 0, marginTop: 'var(--space-2)' }}>Content for the first section</p>
      </Card>
      <Spacer size="2xl" />
      <Card padding="lg" elevation={1}>
        <h3 style={{ margin: 0 }}>Section 2</h3>
        <p style={{ margin: 0, marginTop: 'var(--space-2)' }}>Large spacing between major sections</p>
      </Card>
      <Spacer size="lg" />
      <Card padding="lg" elevation={1}>
        <h3 style={{ margin: 0 }}>Section 3</h3>
        <p style={{ margin: 0, marginTop: 'var(--space-2)' }}>Medium spacing between related sections</p>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Using Spacer to create consistent vertical rhythm',
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

