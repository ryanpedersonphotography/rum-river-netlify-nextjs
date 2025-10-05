import Container from './Container';
import Card from './Card';

export default {
  title: 'Primitives/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Max width preset',
    },
    debug: {
      control: 'boolean',
      description: 'Show debug boundaries',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    size: 'md',
    children: (
      <Card padding="lg" elevation={1}>
        <h3 style={{ margin: 0 }}>Container Content</h3>
        <p style={{ margin: 0, marginTop: 'var(--space-2)' }}>
          This content is constrained by the container's max-width.
        </p>
      </Card>
    ),
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-8)', padding: 'var(--space-6)' }}>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Small (sm)</h4>
        <Container size="sm" debug>
          <Card padding="lg" elevation={1}>
            Small container - ideal for narrow content like forms
          </Card>
        </Container>
      </div>

      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Medium (md) - Default</h4>
        <Container size="md" debug>
          <Card padding="lg" elevation={1}>
            Medium container - default for most content
          </Card>
        </Container>
      </div>

      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Large (lg)</h4>
        <Container size="lg" debug>
          <Card padding="lg" elevation={1}>
            Large container - for wide layouts and dashboards
          </Card>
        </Container>
      </div>
    </div>
  ),
};

export const WithDebug = {
  args: {
    size: 'md',
    debug: true,
    children: (
      <Card padding="lg" elevation={1}>
        <h3 style={{ margin: 0 }}>Debug Mode</h3>
        <p style={{ margin: 0, marginTop: 'var(--space-2)' }}>
          Debug mode shows the container boundaries with a dashed outline.
        </p>
      </Card>
    ),
  },
};

export const NestedContainers = {
  render: () => (
    <Container size="lg" debug style={{ padding: 'var(--space-6)' }}>
      <h2 style={{ marginTop: 0 }}>Large Outer Container</h2>
      <Container size="md" debug>
        <Card padding="lg" elevation={1}>
          <h3 style={{ margin: 0 }}>Medium Inner Container</h3>
          <p style={{ margin: 0, marginTop: 'var(--space-2)' }}>
            You can nest containers for progressive width constraints.
          </p>
        </Card>
      </Container>
    </Container>
  ),
};

// Dark mode preview - toggle toolbar to light to compare
export const DarkPreview = {
  parameters: {
    globals: { theme: "dark" },
  },
};

