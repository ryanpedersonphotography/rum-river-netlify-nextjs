'use client';
import React, { useRef } from 'react';
import clsx from 'clsx';
import NextLink from 'next/link';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

/**
 * Link (token-driven)
 * Props:
 *  - href: string (required)
 *  - tone: 'brand' | 'accent' | 'muted' | 'neutral' | 'inherit'
 *  - underline: 'always' | 'hover' | 'none'
 *  - external: boolean (opens in new tab)
 *  - debug: boolean
 *  - className, style, children, ...rest
 *
 * Uses link tokens from globals.css:
 *   --link-color, --link-hover-color, --link-underline
 */
export default function Link({
  href = '#',
  tone = 'brand',
  underline = 'hover',
  external = false,
  debug = false,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  const classes = clsx(
    'link',
    `link--tone-${tone}`,
    `link--underline-${underline}`,
    className
  );

  const tokenVars = ['--brand', '--accent', '--muted', '--on-surface', '--fg'];
  const cssProps = ['color', 'text-decoration-color'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  // External link props
  const externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  // Use Next.js Link for internal, regular anchor for external
  const isExternal = external || href.startsWith('http') || href.startsWith('mailto:');

  if (isExternal) {
    return (
      <>
        {debug && <DebugPanel classes={classes} data={data} />}
        <a
          ref={ref}
          href={href}
          className={classes}
          style={style}
          {...externalProps}
          {...rest}
        >
          {children}
        </a>
      </>
    );
  }

  return (
    <>
      {debug && <DebugPanel classes={classes} data={data} />}
      <NextLink
        ref={ref}
        href={href}
        className={classes}
        style={style}
        {...rest}
      >
        {children}
      </NextLink>
    </>
  );
}
