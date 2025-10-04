'use client';
import React, { useRef } from 'react';
import clsx from 'clsx';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

/**
 * Container (token-driven)
 * Props:
 *  - as: HTML element (default 'div')
 *  - size: 'sm' | 'md' | 'lg' | 'xl' | 'full'
 *  - padding: 'none' | 'sm' | 'md' | 'lg'
 *  - center: boolean (centers content with margin auto)
 *  - debug: boolean
 *  - className, style, children, ...rest
 *
 * Uses container tokens from globals.css:
 *   --container-sm, --container-md, --container-lg, --container-xl
 */
export default function Container({
  as: Tag = 'div',
  size = 'md',
  padding = 'md',
  center = true,
  debug = false,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  const classes = clsx(
    'container',
    `container--size-${size}`,
    padding !== 'none' && `container--padding-${padding}`,
    center && 'container--center',
    className
  );

  const tokenVars = ['--container-sm', '--container-md', '--container-lg', '--container-xl', '--space-4', '--space-6', '--space-8'];
  const cssProps = ['max-width', 'padding-left', 'padding-right', 'margin-left', 'margin-right'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  return (
    <>
      {debug && <DebugPanel classes={classes} data={data} />}
      <Tag
        ref={ref}
        className={classes}
        style={style}
        {...rest}
      >
        {children}
      </Tag>
    </>
  );
}
