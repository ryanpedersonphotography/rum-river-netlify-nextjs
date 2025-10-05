'use client';
import Container from 'components/primitives/Container';
import Stack from 'components/primitives/Stack';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';

/**
 * HomeHero - Full-viewport hero section for home page
 *
 * @param {Object} props
 * @param {string} props.accent - Script accent text (e.g., "Where Dreams Begin")
 * @param {string} props.title - Main headline
 * @param {string} props.subtitle - Lead text below title
 * @param {string} props.ctaText - Call-to-action button text
 * @param {string} props.ctaHref - CTA button link
 * @param {'image'|'video'} props.mediaType - Background media type
 * @param {string} props.mediaSrc - Background image or video source
 * @param {boolean} props.showScrollIndicator - Show scroll down arrow
 * @param {React.CSSProperties} props.style - Additional inline styles
 */
export default function HomeHero({
  accent = 'Where Dreams Begin',
  title = 'Rum River Wedding Barn',
  subtitle = "Minnesota's premier rustic wedding venue where elegant celebrations meet natural beauty",
  ctaText = 'Come Check Out The Barn',
  ctaHref = '/contact',
  mediaType = 'image',
  mediaSrc = '/images/hero/bg-hero.jpg',
  showScrollIndicator = true,
  style,
  ...rest
}) {
  const backgroundStyle = mediaType === 'image'
    ? { background: `var(--gradient-hero), url('${mediaSrc}') center/cover` }
    : { background: 'var(--gradient-hero)' };

  return (
    <div
      style={{
        ...backgroundStyle,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        ...style
      }}
      {...rest}
    >
      {mediaType === 'video' && mediaSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
        >
          <source src={mediaSrc} type="video/mp4" />
        </video>
      )}

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
            {accent}
          </Text>

          {/* Main Headline - uses h1 on page, h2 in stories */}
          <Heading
            level={2}
            size="hero"
            noMargin
            style={{
              color: 'var(--on-brand)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            {title}
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
            {subtitle}
          </Text>

          {/* CTA Button */}
          <Stack direction="horizontal" gap="md">
            <Button
              as="a"
              href={ctaHref}
              size="lg"
              style={{
                background: 'white',
                color: 'var(--brand)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 'var(--weight-medium)'
              }}
            >
              {ctaText}
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
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
      )}
    </div>
  );
}
