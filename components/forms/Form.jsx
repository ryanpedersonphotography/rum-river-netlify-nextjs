'use client';
import React from 'react';
import clsx from 'clsx';
import Card from 'components/primitives/Card';

/**
 * Form - Token-driven form layout with Netlify integration
 * Props:
 *  - name: Netlify form name (required)
 *  - action: redirect path (default /thank-you)
 *  - grid: '1' | '2' | '3' (default '2')
 *  - gap: 'sm' | 'md' | 'lg' (default 'md')
 *  - tone: 'surface' | 'brand' | 'muted' | 'accent' (default 'surface')
 *  - asCard: wrap in Card primitive (default true)
 *  - className, ...rest
 *
 * Uses tokens: --form-gap-*, --form-pad, --form-radius, --form-shadow
 *
 * Netlify Forms Setup:
 * - Adds hidden form-name field
 * - Adds honeypot bot-field for spam protection
 * - Sets data-netlify="true" for Netlify detection
 * - Redirects to action path on success
 */
export default function Form({
  name,
  action = '/thank-you',
  grid = '2',
  gap = 'md',
  tone = 'surface',
  asCard = true,
  className,
  children,
  ...rest
}) {
  const gridCls = `form-grid form-grid--cols-${grid}`;

  const wrap = (
    <form
      className={clsx(gridCls, className)}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action={action}
      style={{ '--form-gap': `var(--form-gap-${gap})` }}
      {...rest}
    >
      <input type="hidden" name="form-name" value={name} />
      <p style={{ display: 'none' }}>
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      {children}
    </form>
  );

  return asCard ? (
    <Card tone={tone} elevation={2} radius="lg" padding="lg">
      {wrap}
    </Card>
  ) : (
    wrap
  );
}
