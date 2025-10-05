import SectionHeader from './SectionHeader';
import Section from 'components/layout/Section';
import Grid from 'components/primitives/Grid';
import Container from 'components/primitives/Container';
import Spacer from 'components/primitives/Spacer';

export default {
  title: 'Primitives/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
};

export const Default = {
  args: {
    accent: 'Example Pattern',
    title: 'Section Header Title',
    description: 'This is a description that provides context about the section content below.',
    align: 'left',
  },
};

export const Centered = {
  args: {
    accent: 'Centered Layout',
    title: 'Perfectly Centered Header',
    description: 'Using align prop to center all text content',
    align: 'center',
  },
};

// Cookbook pattern - centered header in branded section
export const CenteredBandPattern = {
  render: () => (
    <Section align="center" noContainer tone="brand" style={{ background: 'var(--gradient-blocks)' }}>
      <Grid columns={1} justify="center">
        <SectionHeader
          align="center"
          accent="Example Pattern"
          title="Perfectly Centered Header"
          description="Using Grid/Container + token spacing for proper layout rhythm"
        />
      </Grid>
      <Spacer size="2xl" />
      <Container size="md">
        <div style={{
          padding: 'var(--space-6)',
          background: 'var(--surface)',
          borderRadius: 'var(--r-lg)',
          textAlign: 'center'
        }}>
          Content goes here
        </div>
      </Container>
    </Section>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Common pattern from cookbook: centered header in branded section with gradient background',
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

