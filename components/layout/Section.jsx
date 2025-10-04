'use client';
import React, { useRef } from 'react';
import clsx from 'clsx';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

const TONE_VARS = {
  neutral: ['--surface','--on-surface','--border'],
  surface: ['--surface','--on-surface','--border'],
  brand:   ['--brand','--on-brand'],
  muted:   ['--muted','--on-muted'],
  accent:  ['--accent','--on-accent'],
};

export default function Section({
  as: Tag = 'section',
  tone = 'neutral',
  variant = 'default',
  size = 'md',
  align = 'left',
  noContainer = false,
  debug = false,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  const classes = clsx(
    'section',
    `section--tone-${tone}`,
    `section--variant-${variant}`,
    `section--size-${size}`,
    `section--align-${align}`,
    className
  );

  const tokenVars = [...(TONE_VARS[tone] || TONE_VARS.neutral), '--container', '--space-5', '--section-py-sm','--section-py-md','--section-py-lg'];
  const cssProps  = ['background-color','color','padding-top','padding-bottom'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  return (
    <Tag ref={ref} className={classes} style={style} {...rest}>
      {debug && <DebugPanel classes={classes} data={data} />}
      {noContainer ? (
        <div className="section__inner">{children}</div>
      ) : (
        <div className="section__inner">
          <div className="section__container">{children}</div>
        </div>
      )}
    </Tag>
  );
}