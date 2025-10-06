'use client';
import Link from 'components/primitives/Link';
import Button from 'components/primitives/Button';
import Container from 'components/primitives/Container';

/**
 * Header - Site header/navigation
 *
 * @param {Object} props
 * @param {boolean} props.transparent - Transparent background (for overlaying on hero)
 * @param {string} props.ctaLabel - Call-to-action button text
 * @param {string} props.ctaHref - CTA button link
 * @param {Array} props.menuItems - Navigation menu items [{label, href}, ...]
 * @param {string} props.logoSrc - Logo image source
 * @param {string} props.logoAlt - Logo alt text
 */
export default function Header({
  transparent = false,
  ctaLabel = 'Schedule a Tour',
  ctaHref = '/contact',
  menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
  ],
  logoSrc = null,
  logoAlt = 'Rum River Barn',
}) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: transparent ? 'transparent' : 'var(--bg)',
        borderBottom: transparent ? 'none' : '1px solid var(--border)',
        backdropFilter: transparent ? 'blur(8px)' : 'none',
      }}
    >
      <Container size="lg">
        <nav
          aria-label="Primary"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--space-4) 0',
          }}
        >
          {/* Logo / Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={logoAlt}
                style={{ height: 'var(--size-icon-lg)', width: 'auto' }}
              />
            ) : (
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--weight-bold)',
                  color: transparent ? 'var(--on-brand)' : 'var(--brand)',
                }}
              >
                {logoAlt}
              </span>
            )}
          </div>

          {/* Navigation Menu */}
          <ul
            style={{
              display: 'flex',
              gap: 'var(--space-6)',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              alignItems: 'center',
            }}
          >
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  underline="hover"
                  style={{
                    color: transparent ? 'var(--on-brand)' : 'var(--fg)',
                    fontWeight: 'var(--weight-medium)',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* CTA Button */}
            {ctaLabel && (
              <li>
                <Button
                  as="a"
                  href={ctaHref}
                  size="sm"
                  style={{
                    background: transparent ? 'rgba(255,255,255,0.9)' : 'var(--brand)',
                    color: transparent ? 'var(--brand)' : 'white',
                  }}
                >
                  {ctaLabel}
                </Button>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
