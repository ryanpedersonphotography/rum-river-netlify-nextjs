'use client';
import React, { useMemo, useRef } from 'react';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

const TONE_VARS = {
  surface: ['--surface','--on-surface','--border'],
  brand:   ['--brand','--on-brand'],
  muted:   ['--muted','--on-muted'],
  accent:  ['--accent','--on-accent'],
};

export default function Section({
  as: Tag = 'section',
  size = 'md',          // 'sm' | 'md' | 'lg'
  tone = 'surface',     // 'surface' | 'brand' | 'muted' | 'accent'
  align = 'left',       // 'left' | 'center'
  debug = false,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  const classes = useMemo(() => [
    'section',
    size && `section--${size}`,
    tone && `section--${tone}`,
    align === 'center' && 'section--center',
    className
  ].filter(Boolean).join(' '), [size, tone, align, className]);

  const tokenVars = [...(TONE_VARS[tone] || TONE_VARS.surface), '--container', '--space-5', '--section-py-sm','--section-py-md','--section-py-lg'];
  const cssProps  = ['background-color','color','padding-top','padding-bottom'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  return (
    <Tag ref={ref} className={classes} style={style} {...rest}>
      {debug && <DebugPanel classes={classes} data={data} />}
      <div className="section__inner">
        {children}
      </div>
    </Tag>
  );
}