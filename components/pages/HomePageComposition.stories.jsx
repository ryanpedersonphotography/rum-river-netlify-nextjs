import Header from 'components/layout/Header';
import HomeHero from 'components/sections/HomeHero';
import Section from 'components/layout/Section';
import Container from 'components/primitives/Container';
import Grid from 'components/primitives/Grid';
import Spacer from 'components/primitives/Spacer';
import SectionHeader from 'components/primitives/SectionHeader';
import MediaBlock from 'components/primitives/MediaBlock';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import ScheduleTourForm from 'components/sections/ScheduleTourForm';
import Footer from 'components/layout/Footer';

export default {
  title: 'Pages/Home (Composition)',
  parameters: { layout: 'fullscreen' },
};

export const Default = () => (
  <div>
    {/* Header */}
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100 }}>
      <Header transparent />
    </div>

    {/* Hero - using h1 here since this is the page composition */}
    <div style={{ height: '600px', overflow: 'hidden' }}>
      <div style={{
        background: `var(--gradient-hero), url('/images/hero/bg-hero.jpg') center/cover`,
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <Container size="lg" padding="lg">
          <div style={{ maxWidth: 'var(--container-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
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
          </div>
        </Container>
      </div>
    </div>

    {/* Why Choose Section */}
    <Section
      noContainer
      size="lg"
      tone="brand"
      align="center"
      style={{ background: 'var(--gradient-blocks)' }}
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          {/* Block 01 */}
          <MediaBlock layout="image-right" gap="xl" tone="brand" number="01">
            <MediaBlock.Content>
              <Heading level={2} noMargin>A Picturesque Location For Your Special Event</Heading>
              <Text size="lg" weight="medium">Near Milaca, Saint Paul, St Cloud, and Brainerd MN</Text>
              <Text>
                When it comes to special occasions such as weddings, birthday parties, or other events,
                it is important to have the perfect setting. You want to ensure that your event is at a
                location that people will remember.
              </Text>
              <Text>
                Here at Rum River Barn, we understand the importance of your special occasion. We are
                different from other special event venues because we allow you to pretty much run the show.
              </Text>
            </MediaBlock.Content>
            <MediaBlock.Media>
              <div style={{
                width: '100%',
                aspectRatio: '16/10',
                background: 'var(--muted)',
                borderRadius: 'var(--r-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--fg)',
              }}>
                Barn Interior Image
              </div>
            </MediaBlock.Media>
          </MediaBlock>

          {/* Block 02 */}
          <MediaBlock layout="image-left" gap="xl" tone="brand" number="02">
            <MediaBlock.Content>
              <Heading level={2} noMargin>Rum River Barn & Vineyard</Heading>
              <Text size="lg" weight="medium">Milaca, St. Cloud, Saint Paul, and Brainerd MN</Text>
              <Text>
                Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding
                venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured
                old oak forests, and white pines next to a whispering brook.
              </Text>
              <Text>
                Enjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests
                and developed for the past 100 years.
              </Text>
            </MediaBlock.Content>
            <MediaBlock.Media>
              <div style={{
                width: '100%',
                aspectRatio: '16/10',
                background: 'var(--muted)',
                borderRadius: 'var(--r-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--fg)',
              }}>
                Property Field Image
              </div>
            </MediaBlock.Media>
          </MediaBlock>
        </div>
      </Container>
    </Section>

    {/* Schedule Tour Form */}
    <ScheduleTourForm
      formName="home-schedule-tour-demo"
      tone="brand"
      background="gradient-blocks"
      header={{
        accent: 'Schedule Your Tour',
        title: 'Start Planning Your Perfect Day',
        description: "We'd love to show you around our beautiful venue and discuss your wedding vision.",
        align: 'center',
      }}
      fields={[
        { type: 'text', name: 'name', label: 'Your Name *', required: true, full: true, autoComplete: 'name', placeholder: 'Jane Doe' },
        { type: 'email', name: 'email', label: 'Email Address *', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
        { type: 'tel', name: 'phone', label: 'Phone Number *', required: true, autoComplete: 'tel', placeholder: '(555) 123-4567' },
        { type: 'date', name: 'proposedEventDate', label: 'Proposed Event Date' },
        { type: 'date', name: 'preferredTourDate', label: 'Preferred Tour Date *', required: true },
        { type: 'select', name: 'preferredTourTime', label: 'Preferred Tour Time', options: ['10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'] },
        { type: 'select', name: 'guestCount', label: 'Estimated Guest Count', options: ['50-100', '100-150', '150-200', '200+'] },
        { type: 'textarea', name: 'message', label: 'Additional Information', full: true, rows: 6 },
      ]}
      submitText="Schedule Tour"
    />

    {/* Footer */}
    <Footer />
  </div>
);

// Simplified composition with fewer sections
export const Minimal = () => (
  <div>
    <Header />

    <div style={{ height: '600px', overflow: 'hidden' }}>
      <HomeHero
        accent="Where Dreams Begin"
        title="Rum River Wedding Barn"
        subtitle="Your perfect venue awaits"
        ctaText="Get Started"
        ctaHref="#"
        showScrollIndicator={false}
      />
    </div>

    <Section size="lg" align="center">
      <Container size="md">
        <SectionHeader
          align="center"
          accent="Get In Touch"
          title="Let's Talk About Your Event"
        />
        <Spacer size="xl" />
        <div style={{ textAlign: 'center' }}>
          <Text>Contact us to learn more about our venue and availability.</Text>
        </div>
      </Container>
    </Section>

    <Footer />
  </div>
);

// Dark mode preview - toggle toolbar to light to compare
export const DarkPreview = {
  parameters: {
    globals: { theme: "dark" },
  },
};

