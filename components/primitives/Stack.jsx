'use client';
import React, { useRef } from 'react';
import clsx from 'clsx';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

/**
 * Stack (token-driven flexbox)
 * Props:
 *  - direction: 'vertical' | 'horizontal'
 *  - gap: 'xs' | 'sm' | 'md' | 'lg' | 'xl' (maps to spacing tokens)
 *  - align: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
 *  - justify: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
 *  - wrap: boolean
 *  - debug: boolean
 *  - className, style, children, ...rest
 *
 * Uses spacing tokens from globals.css:
 *   --space-1 through --space-12
 */
export default function Stack({
  direction = 'vertical',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  debug = false,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  const classes = clsx(
    'stack',
    `stack--${direction}`,
    `stack--gap-${gap}`,
    align !== 'stretch' && `stack--align-${align}`,
    justify !== 'start' && `stack--justify-${justify}`,
    wrap && 'stack--wrap',
    className
  );

  const tokenVars = ['--space-2', '--space-3', '--space-4', '--space-6', '--space-8'];
  const cssProps = ['gap', 'flex-direction', 'align-items', 'justify-content'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  return (
    <>
      {debug && <DebugPanel classes={classes} data={data} />}
      <div
        ref={ref}
        className={classes}
        style={style}
        {...rest}
      >
        {children}
      </div>
    </>
  );
}
