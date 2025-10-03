'use client';
import React, { useRef } from 'react';
import clsx from 'clsx';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

/**
 * Input (token-driven)
 * Props:
 *  - type: 'text' | 'email' | 'password' | 'number' | etc.
 *  - size: 'sm' | 'md' | 'lg'
 *  - disabled: boolean
 *  - debug: boolean (show applied classes and computed tokens)
 *  - className, style, ...rest
 *
 * Uses input tokens from globals.css:
 *   --input-bg, --input-fg, --input-border, --input-placeholder,
 *   --input-focus-ring, --input-radius, --input-padding-y/x, --input-font-size
 */
export default function Input({
  type = 'text',
  size = 'md',
  disabled = false,
  debug = false,
  className,
  style,
  ...rest
}) {
  const ref = useRef(null);
  
  const classes = clsx(
    'input',
    size === 'sm' && 'input-sm',
    size === 'lg' && 'input-lg',
    className
  );

  const tokenVars = ['--input-bg','--input-fg','--input-border','--input-placeholder','--input-focus-ring','--input-radius','--input-padding-y','--input-padding-x','--input-font-size'];
  const cssProps  = ['background-color','color','border-color','padding-top','padding-left','border-radius','outline-color'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  return (
    <div>
      {debug && <DebugPanel classes={classes} data={data} />}
      <input
        ref={ref}
        type={type}
        className={classes}
        style={style}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
}