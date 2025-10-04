'use client';
import React, { forwardRef, useMemo, useRef } from 'react';
import clsx from 'clsx';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

const MAP = {
  tone: {
    neutral: ['--surface','--on-surface','--border'],
    brand:   ['--brand','--on-brand'],
    muted:   ['--muted','--on-muted'],
    accent:  ['--accent','--on-accent'],
  },
  padding: { sm: '--space-4', md: '--space-6', lg: '--space-8' },
  radius:  { sm: '--r-sm',    md: '--r-md',    lg: '--r-lg'    },
  shadow:  { 0: '--shadow-none', 1: '--shadow-sm', 2: '--shadow-md', 3: '--shadow-lg' },
};

/**
 * Card (token-driven surface with composition slots)
 *
 * Props:
 *  - as: element tag (div, article, section, etc.)
 *  - tone: 'neutral' | 'brand' | 'muted' | 'accent'
 *  - elevation: 0 | 1 | 2 | 3 (shadow level)
 *  - radius: 'sm' | 'md' | 'lg'
 *  - padding: 'sm' | 'md' | 'lg' (applies to body only)
 *  - align: 'left' | 'center' | 'right'
 *  - interactive: boolean (hover raise effect)
 *  - title: string (optional heading in body)
 *  - header: ReactNode (optional header slot)
 *  - footer: ReactNode (optional footer slot)
 *  - bodyClassName: string (additional classes for body wrapper)
 *  - debug: boolean (show applied classes and computed tokens)
 *  - className, style, ...rest
 *
 * Composition:
 *  <Card header={...} title="Heading" footer={...}>
 *    Body content
 *  </Card>
 *
 * Uses surface tokens from design system:
 *   --surface, --on-surface, --brand, --on-brand, --muted, --on-muted,
 *   --accent, --on-accent, --border, --shadow-*, --r-*, --space-*
 */
const Card = forwardRef(function Card({
  as: Tag = 'div',
  tone = 'neutral',
  elevation = 1,
  radius = 'md',
  padding = 'md',
  align = 'left',
  interactive = false,
  title,
  header,
  footer,
  bodyClassName,
  debug = false,
  className = '',
  style,
  children,
  ...rest
}, forwardedRef) {
  const internalRef = useRef(null);
  const ref = forwardedRef || internalRef;

  const classes = clsx(
    'card',
    `card--${tone ?? 'neutral'}`,
    `card--e${elevation ?? 1}`,
    `card--r-${radius ?? 'md'}`,
    `card--p-${padding ?? 'md'}`,
    align !== 'left' && `ta-${align}`,
    interactive && 'card--interactive',
    className
  );

  const tokenVars = useMemo(() => {
    const toneVars = MAP.tone[tone ?? 'neutral'] ?? MAP.tone.neutral;
    return [...toneVars, MAP.padding[padding ?? 'md'], MAP.radius[radius ?? 'md'], MAP.shadow[elevation ?? 1]];
  }, [tone, padding, radius, elevation]);

  const cssProps = ['background-color','color','border-color','box-shadow','border-radius','padding-top'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref?.current, enabled: debug });

  return (
    <Tag ref={ref} className={classes} style={style} {...rest}>
      {debug && <DebugPanel classes={classes} data={data} />}
      {header && <div className="card__header">{header}</div>}
      <div className={clsx('card__body', bodyClassName)}>
        {title && <h3 className="typo-heading h-4 u-mb-4">{title}</h3>}
        {children}
      </div>
      {footer && <div className="card__footer">{footer}</div>}
    </Tag>
  );
});

export default Card;
