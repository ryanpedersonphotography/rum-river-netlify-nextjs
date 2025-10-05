import Button from './Button';

export default {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'select',
      options: ['brand', 'brandAlt', 'accent', 'muted', 'neutral'],
      description: 'Color tone from design system',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'link'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size preset from spacing scale',
    },
    as: {
      control: 'text',
      description: 'HTML element or component to render as',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

// Default story with interactive controls
export const Default = {
  args: {
    children: 'Button',
    tone: 'brand',
    variant: 'solid',
    size: 'md',
  },
};

// All tones showcase
export const AllTones = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
      <Button>Primary (Brand)</Button>
      <Button tone="brandAlt">Walnut</Button>
      <Button tone="accent">Champagne</Button>
      <Button tone="muted">Muted</Button>
      <Button tone="neutral">Neutral</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available color tones from the design system',
      },
    },
  },
};

// All variants showcase
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

// All sizes showcase
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// Disabled state
export const Disabled = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

// Polymorphic (as link)
export const AsLink = {
  args: {
    as: 'a',
    href: '#',
    children: 'Link Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button component can render as any HTML element using the `as` prop',
      },
    },
  },
};

// Full combination matrix
export const ToneVariantMatrix = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
      {['brand', 'brandAlt', 'accent', 'muted', 'neutral'].map(tone => (
        <div key={tone}>
          <h4 style={{ marginBottom: 'var(--space-3)', fontFamily: 'var(--font-display)' }}>
            {tone.charAt(0).toUpperCase() + tone.slice(1)}
          </h4>
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <Button tone={tone} variant="solid">Solid</Button>
            <Button tone={tone} variant="outline">Outline</Button>
            <Button tone={tone} variant="link">Link</Button>
          </div>
        </div>
      ))}
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

