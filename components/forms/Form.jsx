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
 *  - card: alias for asCard
 *  - submitRender: optional function ({ submitting }) => ReactNode
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
  card,
  submitRender,
  className,
  children,
  ...rest
}) {
  // Support both 'card' and 'asCard' props
  const useCard = card !== undefined ? card : asCard;
  const gridCls = `form-grid form-grid--cols-${grid}`;

  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    if (action) {
      // Let default form submission handle redirect
      return;
    }
    // If no action (custom handling), prevent default
    e.preventDefault();
    setSubmitting(true);
    // Custom submission logic would go here
    // For now, we rely on Netlify's default handling
  };

  const wrap = (
    <form
      className={clsx(gridCls, className)}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action={action}
      onSubmit={handleSubmit}
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
      {submitRender && submitRender({ submitting })}
    </form>
  );

  return useCard ? (
    <Card tone={tone} elevation={2} radius="lg" padding="lg">
      {wrap}
    </Card>
  ) : (
    wrap
  );
}
