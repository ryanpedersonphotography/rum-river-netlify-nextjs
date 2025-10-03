'use client';
import React, { useMemo, useRef } from 'react';
import clsx from 'clsx';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

/**
 * Heading (token-driven typography)
 * Props:
 *  - as: override element tag (h1, h2, etc.)
 *  - level: 1-6 (semantic heading level, ignored if 'as' provided)
 *  - size: 'hero'|'1'|'2'|'3'|'4'|'5'|'6' (visual size, defaults from level)
 *  - align: 'left'|'center'|'right'
 *  - weight: 'regular'|'medium'|'semibold'|'bold'
 *  - tone: 'brand'|'on-brand'|'on-surface' (color override)
 *  - noMargin: boolean (removes default bottom margin)
 *  - className, style, ...rest
 *
 * Uses typography tokens from globals.css:
 *   --font-display, --text-hero through --text-xl, --weight-*, --fg, role colors
 */
export default function Heading({
  as,
  level = 2,
  size,
  align = 'left',
  weight = 'bold',
  tone,
  noMargin = false,
  debug = false,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  
  // Determine the semantic HTML tag
  const Tag = as || `h${Math.min(Math.max(level, 1), 6)}`;
  
  // Map level to size if size not explicitly provided
  const sizeClass = size ? `h-${size}` : `h-${Math.min(Math.max(level, 1), 6)}`;

  const classes = useMemo(() => clsx(
    'typo-heading',
    sizeClass,
    `w-${weight}`,
    `ta-${align}`,
    tone && `tone-${tone}`,
    noMargin && '!mb-0',
    className
  ), [sizeClass, weight, align, tone, noMargin, className]);

  const tokenVars = ['--font-display','--text-xl','--text-2xl','--text-3xl','--text-4xl','--text-5xl','--text-6xl','--text-hero','--fg'];
  const cssProps  = ['font-family','font-size','color','margin-bottom','line-height','letter-spacing'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  return (
    <Tag ref={ref} className={classes} style={style} {...rest}>
      {debug && <DebugPanel classes={classes} data={data} />}
      {children}
    </Tag>
  );
}