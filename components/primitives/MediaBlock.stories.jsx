import MediaBlock from './MediaBlock';
import Heading from './Heading';
import Text from './Text';
import Button from './Button';

export default {
  title: 'Primitives/MediaBlock',
  component: MediaBlock,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['image-right', 'image-left'],
      description: 'Image position',
    },
    number: {
      control: 'text',
      description: 'Optional number label (e.g., "01", "02")',
    },
    tone: {
      control: 'select',
      options: ['default', 'brand', 'accent', 'muted'],
      description: 'Text color tone',
    },
  },
};

export const Default = {
  args: {
    layout: 'image-right',
    children: (
      <>
        <MediaBlock.Content>
          <Heading level={3} noMargin>Feature Title</Heading>
          <Text>
            This is a media block with content on the left and an image placeholder on the right.
            Perfect for feature sections and content showcases.
          </Text>
          <Button style={{ marginTop: 'var(--space-4)' }}>Learn More</Button>
        </MediaBlock.Content>
        <MediaBlock.Media>
          <div style={{
            background: 'var(--muted)',
            borderRadius: 'var(--r-lg)',
            aspectRatio: '4/3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--fg)',
          }}>
            Image Placeholder
          </div>
        </MediaBlock.Media>
      </>
    ),
  },
  parameters: {
    layout: 'padded',
  },
};

export const ImageLeft = {
  render: () => (
    <MediaBlock layout="image-left">
      <MediaBlock.Content>
        <Heading level={3} noMargin>Image on Left</Heading>
        <Text>
          The media block adapts to show the image on either side of the content.
        </Text>
        <Button variant="outline" style={{ marginTop: 'var(--space-4)' }}>
          View Details
        </Button>
      </MediaBlock.Content>
      <MediaBlock.Media>
        <div style={{
          background: 'linear-gradient(135deg, var(--brand), var(--accent))',
          borderRadius: 'var(--r-lg)',
          aspectRatio: '4/3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}>
          Image
        </div>
      </MediaBlock.Media>
    </MediaBlock>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const WithNumberedLabel = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-12)' }}>
      <MediaBlock layout="image-right" number="01">
        <MediaBlock.Content>
          <Heading level={3} noMargin>First Step</Heading>
          <Text>
            Numbered media blocks are perfect for step-by-step processes or feature lists.
          </Text>
        </MediaBlock.Content>
        <MediaBlock.Media>
          <div style={{
            background: 'var(--brand)',
            borderRadius: 'var(--r-lg)',
            aspectRatio: '1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}>
            1
          </div>
        </MediaBlock.Media>
      </MediaBlock>

      <MediaBlock layout="image-left" number="02">
        <MediaBlock.Content>
          <Heading level={3} noMargin>Second Step</Heading>
          <Text>
            Alternate the layout for visual variety in a sequence.
          </Text>
        </MediaBlock.Content>
        <MediaBlock.Media>
          <div style={{
            background: 'var(--accent)',
            borderRadius: 'var(--r-lg)',
            aspectRatio: '1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}>
            2
          </div>
        </MediaBlock.Media>
      </MediaBlock>

      <MediaBlock layout="image-right" number="03">
        <MediaBlock.Content>
          <Heading level={3} noMargin>Third Step</Heading>
          <Text>
            Complete the process with a clear conclusion.
          </Text>
        </MediaBlock.Content>
        <MediaBlock.Media>
          <div style={{
            background: 'var(--muted)',
            borderRadius: 'var(--r-lg)',
            aspectRatio: '1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--fg)',
          }}>
            3
          </div>
        </MediaBlock.Media>
      </MediaBlock>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const ToneVariants = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
      <MediaBlock layout="image-right" tone="brand">
        <MediaBlock.Content>
          <Heading level={4} noMargin>Brand Tone</Heading>
          <Text>Text colored with brand tone</Text>
        </MediaBlock.Content>
        <MediaBlock.Media>
          <div style={{ background: 'var(--brand)', borderRadius: 'var(--r-md)', height: '100px' }} />
        </MediaBlock.Media>
      </MediaBlock>

      <MediaBlock layout="image-right" tone="accent">
        <MediaBlock.Content>
          <Heading level={4} noMargin>Accent Tone</Heading>
          <Text>Text colored with accent tone</Text>
        </MediaBlock.Content>
        <MediaBlock.Media>
          <div style={{ background: 'var(--accent)', borderRadius: 'var(--r-md)', height: '100px' }} />
        </MediaBlock.Media>
      </MediaBlock>

      <MediaBlock layout="image-right" tone="muted">
        <MediaBlock.Content>
          <Heading level={4} noMargin>Muted Tone</Heading>
          <Text>Text colored with muted tone</Text>
        </MediaBlock.Content>
        <MediaBlock.Media>
          <div style={{ background: 'var(--muted)', borderRadius: 'var(--r-md)', height: '100px' }} />
        </MediaBlock.Media>
      </MediaBlock>
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

