import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    transparent: {
      control: 'boolean',
      description: 'Transparent background for overlaying on hero',
    },
    ctaLabel: {
      control: 'text',
      description: 'Call-to-action button text',
    },
    ctaHref: {
      control: 'text',
      description: 'CTA button link',
    },
    logoSrc: {
      control: 'text',
      description: 'Logo image URL (leave empty for text logo)',
    },
    logoAlt: {
      control: 'text',
      description: 'Logo alt text / brand name',
    },
  },
};

export const Default = {
  args: {
    transparent: false,
    ctaLabel: 'Schedule a Tour',
    ctaHref: '#',
    logoSrc: '',
    logoAlt: 'Rum River Barn',
    menuItems: [
      { label: 'Home', href: '/' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Events', href: '/events' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export const Transparent = {
  args: {
    ...Default.args,
    transparent: true,
  },
  render: (args) => (
    <div
      style={{
        background: 'linear-gradient(135deg, var(--brand), var(--brand-alt))',
        minHeight: '300px',
      }}
    >
      <Header {...args} />
      <div style={{ padding: 'var(--space-12)', textAlign: 'center', color: 'white' }}>
        <h2 style={{ margin: 0 }}>Hero content below transparent header</h2>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Transparent header for overlaying on hero sections',
      },
    },
  },
};

export const WithLogo = {
  args: {
    ...Default.args,
    logoSrc: '/storybook/logo.svg',
  },
};

export const NoCTA = {
  args: {
    ...Default.args,
    ctaLabel: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header without call-to-action button',
      },
    },
  },
};

export const CustomMenu = {
  args: {
    ...Default.args,
    menuItems: [
      { label: 'Venue', href: '/venue' },
      { label: 'Weddings', href: '/weddings' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Packages', href: '/packages' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with custom menu items',
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

