'use client';
import React, { useMemo, useRef } from 'react';
import clsx from 'clsx';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

/**
 * Text (token-driven typography)
 * Props:
 *  - as: element tag (p, span, div, etc.)
 *  - size: 'xs'|'sm'|'base'|'lg'|'xl'
 *  - align: 'left'|'center'|'right'
 *  - weight: 'regular'|'medium'|'semibold'|'bold'
 *  - tone: 'brand'|'on-brand'|'on-surface' (color override)
 *  - noMargin: boolean (removes default bottom margin)
 *  - className, style, ...rest
 *
 * Uses typography tokens from globals.css:
 *   --font-body, --text-xs through --text-xl, --weight-*, --fg, role colors
 */
export default function Text({
  as: Tag = 'p',
  size = 'base',
  align = 'left',
  weight = 'regular',
  tone,
  noMargin = false,
  debug = false,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  
  const classes = useMemo(() => clsx(
    'typo-text',
    `t-${size}`,
    `w-${weight}`,
    `ta-${align}`,
    tone && `tone-${tone}`,
    noMargin && '!mb-0',
    className
  ), [size, weight, align, tone, noMargin, className]);

  const tokenVars = ['--font-body','--text-xs','--text-sm','--text-base','--text-lg','--text-xl','--fg'];
  const cssProps  = ['font-family','font-size','color','margin-bottom','line-height'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  return (
    <Tag ref={ref} className={classes} style={style} {...rest}>
      {debug && <DebugPanel classes={classes} data={data} />}
      {children}
    </Tag>
  );
}