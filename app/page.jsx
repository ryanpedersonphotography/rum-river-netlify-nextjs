'use client';
import Container from 'components/primitives/Container';
import Stack from 'components/primitives/Stack';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div style={{
        background: `var(--gradient-hero), url('/images/hero/bg-hero.jpg') center/cover`,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        color: 'white'
      }}>
        <Container size="lg" padding="lg">
          <Stack direction="vertical" gap="xl" style={{ maxWidth: '700px' }}>
            {/* Script Accent */}
            <Text
              as="p"
              size="xl"
              style={{
                fontFamily: 'var(--font-script)',
                color: 'var(--accent)',
                marginBottom: 0
              }}
              noMargin
            >
              Where Dreams Begin
            </Text>

            {/* Main Headline */}
            <Heading
              level={1}
              size="hero"
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
                opacity: 0.95,
                lineHeight: 1.8,
                marginBottom: 'var(--space-8)'
              }}
            >
              Minnesota&apos;s premier rustic wedding venue where elegant celebrations meet natural beauty
            </Text>

            {/* CTA Button */}
            <div>
              <Button
                as="a"
                href="/contact"
                tone="brand-alt"
                size="lg"
                style={{
                  background: 'white',
                  color: 'var(--brand)',
                  borderColor: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 'var(--weight-medium)'
                }}
              >
                Come Check Out The Barn
              </Button>
            </div>
          </Stack>
        </Container>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: 'var(--on-brand)',
          opacity: 0.8
        }}>
          <div style={{
            fontSize: '1.5rem',
            animation: 'bounce 2s infinite'
          }}>
            ↓
          </div>
        </div>
      </div>

      {/* Add sections below hero here */}
    </>
  );
}
