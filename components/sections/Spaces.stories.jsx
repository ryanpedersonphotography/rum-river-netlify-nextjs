import Spaces from './Spaces';

const sample = [
  {
    title: 'The Barn',
    subtitle: 'Ceremony & Reception • Up to 220 guests',
    imageUrl: '/storybook/spaces/barn.jpg',
    features: ['Rustic beams', 'String lights', 'Dance floor'],
    cta: { label: 'View Details', href: '#' },
  },
  {
    title: 'Oak Grove',
    subtitle: 'Outdoor ceremony under the trees',
    imageUrl: '/storybook/spaces/oak-grove.jpg',
    features: ['Shaded seating', 'Golden hour views'],
    cta: { label: 'View Details', href: '#' },
  },
  {
    title: 'Meadow',
    subtitle: 'Photos & cocktail hour',
    imageUrl: '/storybook/spaces/meadow.jpg',
    features: ['Wildflowers', 'Wide open sky'],
    cta: { label: 'View Details', href: '#' },
  },
];

export default {
  title: 'Sections/Spaces',
  component: Spaces,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    tone: { control: 'select', options: ['surface','brand','muted','accent','neutral'] },
    background: { control: 'select', options: ['none','gradient-blocks','gradient-hero'] },
    gap: { control: 'select', options: ['xs','sm','md','lg','xl'] },
    minItemWidth: { control: 'text' },
    align: { control: 'select', options: ['left','center','right'] },
  },
};

export const Default = {
  args: {
    header: {
      accent: 'Our Venue',
      title: 'Explore the Spaces',
      description: 'Ceremony settings, reception areas, and photo-perfect spots.',
      align: 'center',
    },
    items: sample,
    tone: 'surface',
    background: 'none',
    gap: 'lg',
    minItemWidth: '280px',
    align: 'center',
  },
};

export const DenseGrid = {
  args: { ...Default.args, gap: 'sm', minItemWidth: '240px' },
};

export const BrandedBand = {
  args: { ...Default.args, tone: 'brand', background: 'gradient-blocks' },
};

export const DarkPreview = {
  args: { ...Default.args },
  parameters: { globals: { theme: 'dark' } },
};
