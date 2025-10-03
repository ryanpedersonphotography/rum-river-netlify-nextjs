'use client';
import React, { useMemo, useRef } from 'react';
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
 * Card (token-driven surface)
 * Props:
 *  - as: element tag (div, article, section, etc.)
 *  - tone: 'neutral' | 'brand' | 'muted' | 'accent'
 *  - elevation: 0 | 1 | 2 | 3 (shadow level)
 *  - radius: 'sm' | 'md' | 'lg'
 *  - padding: 'sm' | 'md' | 'lg'
 *  - align: 'left' | 'center' | 'right'
 *  - interactive: boolean (hover raise effect)
 *  - debug: boolean (show applied classes and computed tokens)
 *  - className, style, ...rest
 *
 * Uses surface tokens from globals.css:
 *   --surface, --on-surface, --brand, --on-brand, --muted, --on-muted,
 *   --accent, --on-accent, --border, --shadow-*, --r-*, --space-*
 */
export default function Card({
  as: Tag = 'div',
  tone = 'neutral',
  elevation = 1,
  radius = 'md',
  padding = 'md',
  align = 'left',
  interactive = false,
  debug = false,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  const classes = useMemo(() => [
    'card',
    `card--${tone}`,
    `card--e${elevation}`,
    `card--r-${radius}`,
    `card--p-${padding}`,
    align !== 'left' && `ta-${align}`,
    interactive && 'card--interactive',
    className
  ].filter(Boolean).join(' '), [tone, elevation, radius, padding, align, interactive, className]);

  const tokenVars = useMemo(() => {
    const toneVars = MAP.tone[tone] ?? MAP.tone.neutral;
    return [...toneVars, MAP.padding[padding], MAP.radius[radius], MAP.shadow[elevation]];
  }, [tone, padding, radius, elevation]);

  const cssProps = ['background-color','color','border-color','box-shadow','border-radius','padding-top'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  return (
    <Tag ref={ref} className={classes} style={style} {...rest}>
      {debug && <DebugPanel classes={classes} data={data} />}
      {children}
    </Tag>
  );
}