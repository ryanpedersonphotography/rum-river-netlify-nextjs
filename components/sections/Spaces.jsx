'use client';
import React from 'react';
import clsx from 'clsx';
import Section from 'components/layout/Section';
import Container from 'components/primitives/Container';
import Card from 'components/primitives/Card';
import Stack from 'components/primitives/Stack';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';
import SectionHeader from 'components/primitives/SectionHeader';

const GAP_TO_TOKEN = {
  xs: 'var(--space-2)',
  sm: 'var(--space-3)',
  md: 'var(--space-4)',
  lg: 'var(--space-6)',
  xl: 'var(--space-8)',
};

export default function Spaces({
  header,
  items = [],
  minItemWidth = '280px',         // responsive min column width
  gap = 'lg',                      // xs|sm|md|lg|xl -> tokens
  tone = 'surface',
  background = 'none',             // 'none' | 'gradient-blocks' | 'gradient-hero'
  align = 'left',
  className,
  ...rest
}) {
  const bgStyle =
    background && background !== 'none'
      ? { background: `var(--${background})` }
      : undefined;

  const gridStyle = {
    display: 'grid',
    gap: GAP_TO_TOKEN[gap] || GAP_TO_TOKEN.lg,
    gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`,
    alignItems: 'stretch',
  };

  return (
    <Section tone={tone} align={align} noContainer className={clsx('spaces', className)} style={bgStyle} {...rest}>
      {(header?.title || header?.accent || header?.description) && (
        <div style={{ display: 'grid', justifyContent: 'center' }}>
          <SectionHeader
            accent={header?.accent}
            title={header?.title}
            description={header?.description}
            align={header?.align || align}
          />
        </div>
      )}

      <Container size="lg">
        <div style={gridStyle}>
          {items.map((it, i) => {
            const content = (
              <Card tone="surface" elevation={1} padding="lg" className="spaces__card">
                <Stack direction="vertical" gap="sm">
                  {it.imageUrl && (
                    <div className="spaces__media">
                      <img
                        src={it.imageUrl}
                        alt={it.title}
                        className="spaces__img"
                        width="0" height="0"
                        style={{ width: '100%', height: 'auto', borderRadius: 'var(--r-md)' }}
                      />
                    </div>
                  )}

                  <Heading level={3} size="lg" noMargin>{it.title}</Heading>

                  {it.subtitle && (
                    <Text size="sm" style={{ opacity: 'var(--opacity-soft)' }}>
                      {it.subtitle}
                    </Text>
                  )}

                  {it.features?.length ? (
                    <ul className="spaces__features">
                      {it.features.map((f, k) => (
                        <li key={k}><Text size="sm" noMargin>{f}</Text></li>
                      ))}
                    </ul>
                  ) : null}

                  {it.cta?.label && it.cta?.href && (
                    <div>
                      <Button as="a" href={it.cta.href} tone="brand" size="md">
                        {it.cta.label}
                      </Button>
                    </div>
                  )}
                </Stack>
              </Card>
            );

            return it.href ? (
              <a key={i} href={it.href} className="spaces__link" style={{ textDecoration: 'none' }}>
                {content}
              </a>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
