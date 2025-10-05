import HomeHero from './HomeHero';

export default {
  title: 'Sections/HomeHero',
  component: HomeHero,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    mediaType: {
      control: 'select',
      options: ['image', 'video'],
      description: 'Background media type',
    },
    accent: {
      control: 'text',
      description: 'Script accent text above title',
    },
    title: {
      control: 'text',
      description: 'Main hero headline',
    },
    subtitle: {
      control: 'text',
      description: 'Lead text below title',
    },
    ctaText: {
      control: 'text',
      description: 'Call-to-action button text',
    },
    ctaHref: {
      control: 'text',
      description: 'CTA button href',
    },
    mediaSrc: {
      control: 'text',
      description: 'Background image or video URL',
    },
    showScrollIndicator: {
      control: 'boolean',
      description: 'Show scroll down arrow',
    },
  },
};

// Image Background Hero
export const ImageHero = {
  args: {
    accent: 'Where Dreams Begin',
    title: 'Rum River Wedding Barn',
    subtitle: "Minnesota's premier rustic wedding venue where elegant celebrations meet natural beauty",
    ctaText: 'Come Check Out The Barn',
    ctaHref: '#',
    mediaType: 'image',
    mediaSrc: '/images/hero/bg-hero.jpg',
    showScrollIndicator: true,
  },
  render: (args) => (
    <div style={{ height: '600px', overflow: 'hidden' }}>
      <HomeHero {...args} />
    </div>
  ),
};

// Video Background Hero
export const VideoHero = {
  args: {
    accent: 'An Unforgettable Experience',
    title: 'Your Perfect Day Awaits',
    subtitle: 'Experience the magic of our venue through motion',
    ctaText: 'Watch Our Story',
    ctaHref: '#',
    mediaType: 'video',
    mediaSrc: '/videos/hero-background.mp4',
    showScrollIndicator: true,
  },
  render: (args) => (
    <div style={{ height: '600px', overflow: 'hidden' }}>
      <HomeHero {...args} />
    </div>
  ),
};

// Without Scroll Indicator
export const NoScrollIndicator = {
  args: {
    accent: 'Where Dreams Begin',
    title: 'Rum River Wedding Barn',
    subtitle: "Minnesota's premier rustic wedding venue",
    ctaText: 'Book Your Tour',
    ctaHref: '#',
    mediaType: 'image',
    mediaSrc: '/images/hero/bg-hero.jpg',
    showScrollIndicator: false,
  },
  render: (args) => (
    <div style={{ height: '600px', overflow: 'hidden' }}>
      <HomeHero {...args} />
    </div>
  ),
};

// Minimal Content
export const MinimalContent = {
  args: {
    accent: '',
    title: 'Simple & Elegant',
    subtitle: 'Less is more',
    ctaText: 'Discover More',
    ctaHref: '#',
    mediaType: 'image',
    mediaSrc: '/images/hero/bg-hero.jpg',
    showScrollIndicator: false,
  },
  render: (args) => (
    <div style={{ height: '600px', overflow: 'hidden' }}>
      <HomeHero {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Hero with minimal content - no accent text or scroll indicator',
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

