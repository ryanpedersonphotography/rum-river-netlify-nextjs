import Stack from './Stack';
import Card from './Card';
import Button from './Button';

export default {
  title: 'Primitives/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Stack direction',
    },
    gap: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Gap size from spacing scale',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Align items',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between'],
      description: 'Justify content',
    },
  },
};

export const Default = {
  args: {
    direction: 'vertical',
    gap: 'md',
    children: (
      <>
        <Card padding="md" elevation={1}>Stack Item 1</Card>
        <Card padding="md" elevation={1}>Stack Item 2</Card>
        <Card padding="md" elevation={1}>Stack Item 3</Card>
      </>
    ),
  },
  parameters: {
    layout: 'padded',
  },
};

export const Vertical = {
  render: () => (
    <Stack direction="vertical" gap="lg">
      <Card padding="lg" elevation={1}>First Item</Card>
      <Card padding="lg" elevation={1}>Second Item</Card>
      <Card padding="lg" elevation={1}>Third Item</Card>
    </Stack>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Horizontal = {
  render: () => (
    <Stack direction="horizontal" gap="md">
      <Button>First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="link">Third</Button>
    </Stack>
  ),
};

export const GapSizes = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Gap: xs</h4>
        <Stack gap="xs">
          <Card padding="sm" elevation={1}>Item</Card>
          <Card padding="sm" elevation={1}>Item</Card>
          <Card padding="sm" elevation={1}>Item</Card>
        </Stack>
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Gap: md</h4>
        <Stack gap="md">
          <Card padding="sm" elevation={1}>Item</Card>
          <Card padding="sm" elevation={1}>Item</Card>
          <Card padding="sm" elevation={1}>Item</Card>
        </Stack>
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Gap: 2xl</h4>
        <Stack gap="2xl">
          <Card padding="sm" elevation={1}>Item</Card>
          <Card padding="sm" elevation={1}>Item</Card>
          <Card padding="sm" elevation={1}>Item</Card>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Alignment = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Align: start (default)</h4>
        <Stack direction="horizontal" gap="md" align="start" style={{ height: '100px', border: '1px dashed var(--border)' }}>
          <Card padding="md" elevation={1}>Short</Card>
          <Card padding="lg" elevation={1}>Medium Height</Card>
          <Card padding="sm" elevation={1}>Tall Content Block</Card>
        </Stack>
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Align: center</h4>
        <Stack direction="horizontal" gap="md" align="center" style={{ height: '100px', border: '1px dashed var(--border)' }}>
          <Card padding="md" elevation={1}>Short</Card>
          <Card padding="lg" elevation={1}>Medium</Card>
          <Card padding="sm" elevation={1}>Tall</Card>
        </Stack>
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Align: stretch</h4>
        <Stack direction="horizontal" gap="md" align="stretch" style={{ height: '100px', border: '1px dashed var(--border)' }}>
          <Card padding="md" elevation={1}>Stretched</Card>
          <Card padding="lg" elevation={1}>Items</Card>
          <Card padding="sm" elevation={1}>Equal Height</Card>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Justification = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Justify: start</h4>
        <Stack direction="horizontal" gap="md" justify="start" style={{ border: '1px dashed var(--border)', padding: 'var(--space-4)' }}>
          <Button size="sm">One</Button>
          <Button size="sm">Two</Button>
          <Button size="sm">Three</Button>
        </Stack>
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Justify: center</h4>
        <Stack direction="horizontal" gap="md" justify="center" style={{ border: '1px dashed var(--border)', padding: 'var(--space-4)' }}>
          <Button size="sm">One</Button>
          <Button size="sm">Two</Button>
          <Button size="sm">Three</Button>
        </Stack>
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Justify: between</h4>
        <Stack direction="horizontal" gap="md" justify="between" style={{ border: '1px dashed var(--border)', padding: 'var(--space-4)' }}>
          <Button size="sm">One</Button>
          <Button size="sm">Two</Button>
          <Button size="sm">Three</Button>
        </Stack>
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

