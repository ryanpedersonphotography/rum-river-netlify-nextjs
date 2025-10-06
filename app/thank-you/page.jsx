'use client';
import Section from 'components/layout/Section';
import Container from 'components/primitives/Container';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';
import Stack from 'components/primitives/Stack';
import Card from 'components/primitives/Card';

/**
 * Thank You Page - Form submission success (token-driven)
 *
 * Displayed after successful Netlify Forms submission
 * Uses design system tokens for all styling
 */
export default function ThankYouPage() {
  return (
    <Section
      size="lg"
      tone="brand"
      align="center"
      style={{ background: 'var(--gradient-hero)', minHeight: '60vh', display: 'flex', alignItems: 'center' }}
    >
      <Container size="md" center>
        <Card tone="surface" elevation={3} padding="lg" style={{ textAlign: 'center' }}>
          <Stack direction="vertical" gap="lg" align="center">
            {/* Success Icon */}
            <div style={{
              width: 'var(--size-icon-xl)',
              height: 'var(--size-icon-xl)',
              borderRadius: 'var(--r-full)',
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'var(--text-4xl)'
            }}>
              ✓
            </div>

            {/* Script Accent */}
            <Text
              size="xl"
              noMargin
              style={{
                fontFamily: 'var(--font-script)',
                color: 'var(--accent)'
              }}
            >
              Thank You
            </Text>

            {/* Main Heading */}
            <Heading level={1} size="4xl" noMargin align="center">
              We've Received Your Message
            </Heading>

            {/* Description */}
            <Text size="lg" align="center" style={{ maxWidth: '60ch' }}>
              Thank you for reaching out to Rum River Barn! We're excited to help you plan your special event.
              Our team will review your information and get back to you within 24 hours.
            </Text>

            {/* Additional Info */}
            <Text align="center" style={{ opacity: 'var(--opacity-muted)' }}>
              In the meantime, feel free to explore our venue photos or check out our available packages.
            </Text>

            {/* Action Buttons */}
            <Stack direction="horizontal" gap="md" justify="center" wrap>
              <Button as="a" href="/" size="lg" tone="brand">
                Return Home
              </Button>
              <Button as="a" href="/contact" size="lg" variant="outline" tone="brand">
                Contact Us Again
              </Button>
            </Stack>

            {/* Contact Info */}
            <div style={{
              marginTop: 'var(--space-8)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--border)'
            }}>
              <Text size="sm" align="center" style={{ opacity: 'var(--opacity-muted)' }}>
                Questions? Call us at <strong>612-801-0546</strong>
              </Text>
            </div>
          </Stack>
        </Card>
      </Container>
    </Section>
  );
}
