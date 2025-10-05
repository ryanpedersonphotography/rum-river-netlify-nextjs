import Grid from './Grid';
import Card from './Card';

export default {
  title: 'Primitives/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4],
      description: 'Number of columns',
    },
    gap: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Gap size from spacing scale',
    },
  },
};

export const Default = {
  args: {
    columns: 3,
    gap: 'md',
    children: (
      <>
        <Card padding="lg" elevation={1}>Grid Item 1</Card>
        <Card padding="lg" elevation={1}>Grid Item 2</Card>
        <Card padding="lg" elevation={1}>Grid Item 3</Card>
        <Card padding="lg" elevation={1}>Grid Item 4</Card>
        <Card padding="lg" elevation={1}>Grid Item 5</Card>
        <Card padding="lg" elevation={1}>Grid Item 6</Card>
      </>
    ),
  },
  parameters: {
    layout: 'padded',
  },
};

export const TwoColumns = {
  render: () => (
    <Grid columns={2} gap="lg">
      <Card padding="lg" elevation={1}>Column 1</Card>
      <Card padding="lg" elevation={1}>Column 2</Card>
      <Card padding="lg" elevation={1}>Column 3</Card>
      <Card padding="lg" elevation={1}>Column 4</Card>
    </Grid>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const ThreeColumns = {
  render: () => (
    <Grid columns={3} gap="md">
      <Card padding="lg" elevation={1}>1</Card>
      <Card padding="lg" elevation={1}>2</Card>
      <Card padding="lg" elevation={1}>3</Card>
      <Card padding="lg" elevation={1}>4</Card>
      <Card padding="lg" elevation={1}>5</Card>
      <Card padding="lg" elevation={1}>6</Card>
    </Grid>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const FourColumns = {
  render: () => (
    <Grid columns={4} gap="sm">
      <Card padding="md" elevation={1}>1</Card>
      <Card padding="md" elevation={1}>2</Card>
      <Card padding="md" elevation={1}>3</Card>
      <Card padding="md" elevation={1}>4</Card>
      <Card padding="md" elevation={1}>5</Card>
      <Card padding="md" elevation={1}>6</Card>
      <Card padding="md" elevation={1}>7</Card>
      <Card padding="md" elevation={1}>8</Card>
    </Grid>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const GapSizes = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Gap: xs</h4>
        <Grid columns={3} gap="xs">
          <Card padding="sm" elevation={1}>Item</Card>
          <Card padding="sm" elevation={1}>Item</Card>
          <Card padding="sm" elevation={1}>Item</Card>
        </Grid>
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Gap: md</h4>
        <Grid columns={3} gap="md">
          <Card padding="sm" elevation={1}>Item</Card>
          <Card padding="sm" elevation={1}>Item</Card>
          <Card padding="sm" elevation={1}>Item</Card>
        </Grid>
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Gap: xl</h4>
        <Grid columns={3} gap="xl">
          <Card padding="sm" elevation={1}>Item</Card>
          <Card padding="sm" elevation={1}>Item</Card>
          <Card padding="sm" elevation={1}>Item</Card>
        </Grid>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Dark mode preview - toggle toolbar to light to compare
export const DarkPreview = {
  parameters: {
    globals: { theme: "dark" },
  },
};

