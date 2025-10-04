'use client';
import Container from 'components/primitives/Container';
import Stack from 'components/primitives/Stack';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';

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

      {/* Add sections below hero here */}
    </>
  );
}
