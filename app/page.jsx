'use client';
import Container from 'components/primitives/Container';
import Stack from 'components/primitives/Stack';
import Grid from 'components/primitives/Grid';
import Spacer from 'components/primitives/Spacer';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';
import Section from 'components/layout/Section';
import SectionHeader from 'components/primitives/SectionHeader';
import MediaBlock from 'components/primitives/MediaBlock';
import ScheduleTourForm from 'components/forms/ScheduleTourForm';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Pattern 7: Full-Viewport Hero */}
      <div style={{
        background: `var(--gradient-hero), url('/images/hero/bg-hero.jpg') center/cover`,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <Container size="lg" padding="lg">
          <Stack direction="vertical" gap="xl" style={{ maxWidth: 'var(--container-md)' }}>
            {/* Script Accent */}
            <Text
              as="p"
              size="xl"
              noMargin
              style={{
                fontFamily: 'var(--font-script)',
                color: 'var(--accent)'
              }}
            >
              Where Dreams Begin
            </Text>

            {/* Main Headline */}
            <Heading
              level={1}
              size="hero"
              noMargin
              style={{
                color: 'var(--on-brand)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}
            >
              Rum River Wedding Barn
            </Heading>

            {/* Lead Text */}
            <Text
              size="xl"
              style={{
                color: 'var(--on-brand)',
                opacity: 'var(--opacity-soft)',
                lineHeight: 1.8
              }}
            >
              Minnesota&apos;s premier rustic wedding venue where elegant celebrations meet natural beauty
            </Text>

            {/* CTA Button */}
            <Stack direction="horizontal" gap="md">
              <Button
                as="a"
                href="/contact"
                size="lg"
                style={{
                  background: 'white',
                  color: 'var(--brand)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 'var(--weight-medium)'
                }}
              >
                Come Check Out The Barn
              </Button>
            </Stack>
          </Stack>
        </Container>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: 'var(--space-8)',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: 'var(--on-brand)',
          opacity: 'var(--opacity-muted)'
        }}>
          <div style={{
            fontSize: 'var(--text-3xl)',
            animation: 'bounce 2s infinite'
          }}>
            ↓
          </div>
        </div>
      </div>

      {/* Why Choose Rum River Barn - Pattern with MediaBlock */}
      <Section
        noContainer
        size="lg"
        tone="brand"
        align="center"
        style={{
          background: 'var(--gradient-blocks)'
        }}
      >
        <Grid columns={1} justify="center">
          <SectionHeader
            align="center"
            accent="Your Perfect Venue"
            title="Why Choose Rum River Barn"
            description="Discover what makes our venue the perfect setting for your unforgettable celebration"
          />
        </Grid>

        <Spacer size="2xl" />

        <Container size="lg">
          <div>
            {/* Block 01 */}
            <MediaBlock layout="image-right" gap="xl" tone="brand" number="01">
              <MediaBlock.Content>
                <Heading level={3} noMargin>A Picturesque Location For Your Special Event</Heading>
                <Text size="lg" weight="medium">Near Milaca, Saint Paul, St Cloud, and Brainerd MN</Text>
                <Text>
                  When it comes to special occasions such as weddings, birthday parties, or other events,
                  it is important to have the perfect setting. You want to ensure that your event is at a
                  location that people will remember.
                </Text>
                <Text>
                  Here at Rum River Barn, we understand the importance of your special occasion. We are
                  different from other special event venues because we allow you to pretty much run the show.
                  When you choose us, you do not have to worry about us saying no.
                </Text>
                <Text>
                  Our goal is to help you have your perfect day. We tend to book up fast, so don&apos;t wait—call
                  us today at <strong>612-801-0546</strong>!
                </Text>
              </MediaBlock.Content>
              <MediaBlock.Media>
                <img
                  src="/images/venue/barn-interior-ceiling-beams-lighting.jpg"
                  alt="Special event venue"
                  width={800}
                  height={500}
                />
              </MediaBlock.Media>
            </MediaBlock>

            {/* Block 02 */}
            <MediaBlock layout="image-left" gap="xl" tone="brand" number="02">
              <MediaBlock.Content>
                <Heading level={3} noMargin>Rum River Barn & Vineyard</Heading>
                <Text size="lg" weight="medium">Milaca, St. Cloud, Saint Paul, and Brainerd MN</Text>
                <Text>
                  Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding
                  venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured
                  old oak forests, and white pines next to a whispering brook, we offer Minnesota&apos;s premier
                  barn wedding venue and country special events venue for your custom special event.
                </Text>
                <Text>
                  Enjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests
                  and developed for the past 100 years.
                </Text>
              </MediaBlock.Content>
              <MediaBlock.Media>
                <img
                  src="/images/venue/property-field-wildflowers-natural.jpg"
                  alt="Rum River Barn and Vineyard"
                  width={800}
                  height={500}
                />
              </MediaBlock.Media>
            </MediaBlock>
          </div>
        </Container>
      </Section>

      {/* Schedule Tour Form */}
      <ScheduleTourForm />
    </>
  );
}
