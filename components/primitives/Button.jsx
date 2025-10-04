'use client';
import React, { useMemo, useRef } from 'react';
import clsx from 'clsx';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

/**
 * Button (token-driven)
 * Props:
 *  - as: 'button' | 'a' | any element
 *  - tone: 'brand' | 'brandAlt' | 'accent' | 'muted' | 'neutral'
 *  - variant: 'solid' | 'outline' | 'link'
 *  - size: 'sm' | 'md' | 'lg'
 *  - block: boolean (full width)
 *  - disabled: boolean
 *  - className, style, ...rest
 *
 * Uses role tokens from globals.css:
 *   --brand, --on-brand, --brand-alt, --on-brand-alt, --accent, --on-accent,
 *   --muted, --on-muted, --surface, --on-surface, --border
 */
export default function Button({
  as: Tag = 'button',
  tone = 'brand',
  variant = 'solid',
  size = 'md',
  block = false,
  disabled = false,
  loading = false,
  debug = false,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  // Map tone → role tokens (no hex here)
  const toneBg = {
    brand:    'var(--brand)',
    brandAlt: 'var(--brand-alt)',
    accent:   'var(--accent)',
    muted:    'var(--muted)',
    neutral:  'var(--surface)',      // neutral solid = surface
  }[tone] || 'var(--brand)';

  const toneFg = {
    brand:    'var(--on-brand)',
    brandAlt: 'var(--on-brand-alt)',
    accent:   'var(--on-accent)',
    muted:    'var(--on-muted)',
    neutral:  'var(--on-surface)',
  }[tone] || 'var(--on-brand)';

  const toneStroke = {
    brand:    'var(--brand)',
    brandAlt: 'var(--brand-alt)',
    accent:   'var(--accent)',
    muted:    'var(--muted)',
    neutral:  'var(--border)',       // neutral outline/link use hairline
  }[tone] || 'var(--brand)';

  // Variant → CSS vars your .btn consumes (globals.css @layer components)
  //  - solid: bg/fg from tone
  //  - outline: transparent bg, text/stroke = tone color
  //  - link: transparent bg, underlined text = tone color
  const styleVars =
    variant === 'solid'
      ? { '--btn-bg': toneBg, '--btn-fg': toneFg }
      : variant === 'outline'
      ? { '--btn-bg': 'transparent', '--btn-fg': toneStroke, '--btn-shadow': `inset 0 0 0 1px ${toneStroke}` }
      : /* link */
        { '--btn-bg': 'transparent', '--btn-fg': toneStroke, '--btn-shadow': 'none' };

  // Compose classes from your existing utilities
  const classes = clsx(
    'btn',
    variant === 'outline' && 'btn-outline',
    variant === 'link' && 'btn-link',
    size === 'sm' && 'btn-sm',
    size === 'lg' && 'btn-lg',
    loading && 'btn--loading',
    block && 'w-full',
    className
  );

  // a11y: anchors can be aria-disabled; buttons use disabled attr
  const isAnchor = Tag === 'a';
  const isDisabled = disabled || loading;
  const a11yProps =
    isAnchor && isDisabled
      ? { 'aria-disabled': true, 'aria-busy': loading, tabIndex: -1, onClick: (e) => e.preventDefault() }
      : loading ? { 'aria-busy': true } : {};
  const buttonProps = Tag === 'button' ? { type: 'button', disabled: isDisabled } : {};

  // Debug data
  const tokenVars = ['--brand','--on-brand','--brand-alt','--on-brand-alt','--accent','--on-accent','--muted','--on-muted','--surface','--on-surface','--border','--space-2','--space-3','--space-4','--space-5','--space-6','--space-7','--r-full'];
  const cssProps  = ['background-color','color','border-color','padding-top','padding-left','border-radius','box-shadow'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  return (
    <Tag ref={ref} className={classes} style={{ ...styleVars, ...style }} {...buttonProps} {...a11yProps} {...rest}>
      {debug && <DebugPanel classes={classes} data={data} />}
      {children}
    </Tag>
  );
}