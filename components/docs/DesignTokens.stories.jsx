// components/docs/DesignTokens.stories.jsx
import React, { useEffect, useState } from 'react';

// Small helpers that *don't* assume SSR and safely read computed styles
function TokenSwatch({ name }) {
  const [value, setValue] = useState('');
  useEffect(() => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    setValue(v);
  }, [name]);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '200px 1fr 140px',
      gap: 'var(--space-3)',
      padding: 'var(--space-3)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-sm)',
      background: 'var(--surface)',
      color: 'var(--on-surface)',
      alignItems: 'center'
    }}>
      <code>{name}</code>
      <div style={{
        height: 32,
        borderRadius: 'var(--r-sm)',
        border: '1px solid var(--border)',
        background: `var(${name})`
      }} />
      <code style={{ fontSize: 'var(--text-xs)', opacity: .8 }}>{value || '—'}</code>
    </div>
  );
}

function SpacingToken({ name }) {
  const [value, setValue] = useState('');
  useEffect(() => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    setValue(v);
  }, [name]);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '200px 1fr 120px',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }}>
      <code>{name}</code>
      <div style={{
        height: 16,
        width: `var(${name})`,
        background: 'var(--brand)',
        borderRadius: 'var(--r-sm)',
        border: '1px solid var(--border)'
      }} />
      <code style={{ fontSize: 'var(--text-xs)', opacity: .8 }}>{value || '—'}</code>
    </div>
  );
}

const DocPage = () => (
  <div style={{ display: 'grid', gap: 'var(--space-8)', padding: 'var(--space-6)' }}>
    <header style={{ display: 'grid', gap: 'var(--space-2)' }}>
      <h1 style={{ margin: 0, fontFamily: 'var(--font-display)' }}>Design Tokens</h1>
      <p style={{ margin: 0, opacity: .8 }}>
        Live token viewer using the same CSS custom properties as the app. Toggle the Storybook theme toolbar to see dark mode values.
      </p>
    </header>

    <section>
      <h2>Role Colors</h2>
      <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
        {['--bg','--fg','--surface','--on-surface','--brand','--on-brand','--muted','--on-muted','--accent','--on-accent','--border'].map(n => (
          <TokenSwatch key={n} name={n} />
        ))}
      </div>
    </section>

    <section>
      <h2>Spacing Scale</h2>
      <div style={{ display: 'grid', gap: 'var(--space-2)' }}>
        {['--space-1','--space-2','--space-3','--space-4','--space-5','--space-6','--space-8','--space-10','--space-12','--space-16','--space-20','--space-24']
          .map(n => <SpacingToken key={n} name={n} />)}
      </div>
    </section>

    <section>
      <h2>Typography Tokens</h2>
      <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)' }}>Display – var(--font-display)</div>
          <div style={{ fontFamily: 'var(--font-body)' }}>Body – var(--font-body)</div>
          <div style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-xl)' }}>Script – var(--font-script)</div>
        </div>
        <div style={{ display: 'grid', gap: 'var(--space-1)' }}>
          {['--text-xs','--text-sm','--text-base','--text-lg','--text-xl','--text-2xl','--text-3xl','--text-4xl','--text-5xl','--text-6xl'].map(n => (
            <div key={n} style={{ fontSize: `var(${n})` }}>
              <code style={{ opacity: .7, marginRight: 'var(--space-2)' }}>{n}</code>
              The quick brown fox jumps over the lazy dog.
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default {
  title: 'Docs/Design Tokens',
  component: DocPage,
  parameters: {
    layout: 'fullscreen',
    docs: { page: DocPage },
  },
};

export const DocsOnly = {
  render: () => <DocPage />,
};
