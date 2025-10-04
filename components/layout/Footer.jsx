import Section from 'components/layout/Section';
import Container from 'components/primitives/Container';
import Grid from 'components/primitives/Grid';
import Stack from 'components/primitives/Stack';
import Spacer from 'components/primitives/Spacer';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Link from 'components/primitives/Link';

/**
 * Footer - Wedding venue footer (token-driven)
 *
 * Features:
 * - 3-column responsive grid (auto-fits to screen size)
 * - Brand info, contact, and social links
 * - Token-driven spacing and typography
 * - Single source of truth from design system
 *
 * Uses: Section, Container, Grid, Stack, Heading, Text, Link primitives
 */
export default function Footer() {
  return (
    <Section
      as="footer"
      tone="muted"
      size="lg"
      align="center"
    >
      <Container size="lg">
        <Grid
          columns="auto-fit"
          minItemWidth="250px"
          gap="xl"
          justify="center"
          justifyItems="center"   // ⬅ per-cell centering
          align="start"           // ⬅ keep headings tight to the top
          className="grid--content-center"
>
          {/* Brand Column */}
          <Stack direction="vertical" gap="sm" align="center">
            <Heading level={3} size="lg" noMargin align="center">
              Rum River Barn
            </Heading>
            <Text noMargin align="center" style={{ opacity: 'var(--opacity-soft)' }}>
              Minnesota's premier wedding venue where dreams come to life
            </Text>
          </Stack>

          {/* Visit Us Column */}
          <Stack as="address" direction="vertical" gap="sm" align="center" style={{ fontStyle: 'normal' }}>
            <Heading level={4} size="md" noMargin align="center">
              Visit Us
            </Heading>
            <Stack direction="vertical" gap="xs" align="center">
              <Text noMargin size="sm" align="center">42618 78th Street</Text>
              <Text noMargin size="sm" align="center">Hillman, MN 56338</Text>
              <Link
                href="tel:+13204928584"
                tone="brand"
                underline="hover"
              >
                (320) 492-8584
              </Link>
            </Stack>
          </Stack>

          {/* Follow Along Column */}
          <Stack as="nav" aria-label="Social links" direction="vertical" gap="sm" align="center">
            <Heading level={4} size="md" noMargin align="center">
              Follow Along
            </Heading>
            <Stack direction="vertical" gap="xs" align="center">
              <Link
                href="https://facebook.com"
                external
                tone="brand"
                underline="hover"
              >
                Facebook
              </Link>
              <Link
                href="https://instagram.com"
                external
                tone="brand"
                underline="hover"
              >
                Instagram
              </Link>
              <Link
                href="https://pinterest.com"
                external
                tone="brand"
                underline="hover"
              >
                Pinterest
              </Link>
            </Stack>
          </Stack>
        </Grid>

        <Spacer size="2xl" />

        {/* Copyright Bar */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <Spacer size="lg" />
          <Text size="sm" align="center" noMargin style={{ opacity: 'var(--opacity-soft)' }}>
            © 2025 Rum River Barn. All rights reserved. | Designed with love in Minnesota
          </Text>
          <Spacer size="lg" />
        </div>
      </Container>
    </Section>
  );
}
