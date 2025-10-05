import Footer from './Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export const Default = {
  render: () => <Footer />,
};

// Footer with custom theme context
export const OnBrandBackground = {
  render: () => (
    <div style={{ background: 'var(--brand)', padding: 0 }}>
      <Footer />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Footer displayed on a brand-colored background to show contrast',
      },
    },
  },
};

// Footer in dark mode context
export const DarkMode = {
  render: () => <Footer />,
  parameters: {
    docs: {
      description: {
        story: 'Footer automatically adapts to dark theme via theme toggle in toolbar',
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

