import React from 'react';
import Button from '../primitives/Button';
import Card from '../primitives/Card';

const DocPage = () => (
  <div style={{ display: 'grid', gap: 'var(--space-6)', padding: 'var(--space-6)' }}>
    <header>
      <h1 style={{ margin: 0, fontFamily: 'var(--font-display)' }}>Dark Mode Audit</h1>
      <p style={{ margin: '0.5em 0 0', opacity: 0.8 }}>
        Toggle the Storybook theme (toolbar sun/moon icon) and verify role tokens flip:
        <code> --bg</code>, <code> --fg</code>, <code> --surface</code>, <code> --on-surface</code>,
        <code> --brand</code>, <code> --on-brand</code>, <code> --border</code>.
      </p>
    </header>

    <section style={{ display: 'grid', gap: 'var(--space-4)' }}>
      <h2>Surface Card (should invert)</h2>
      <div
        style={{
          padding: 'var(--space-6)',
          background: 'var(--surface)',
          color: 'var(--on-surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-md)',
        }}
      >
        <h3 style={{ marginTop: 0 }}>Surface Background</h3>
        <p style={{ opacity: 0.85 }}>
          This block uses <code>background: var(--surface)</code> and <code>color: var(--on-surface)</code>.
          It should flip from light cream to dark gray when you toggle the theme.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <Button tone="brand">Brand Button</Button>
          <Button tone="neutral" variant="outline">
            Neutral Outline
          </Button>
          <Button tone="accent">Accent</Button>
        </div>
      </div>

      <h2>Brand Band (should maintain contrast)</h2>
      <div
        style={{
          padding: 'var(--space-6)',
          background: 'var(--brand)',
          color: 'var(--on-brand)',
          borderRadius: 'var(--r-md)',
        }}
      >
        <h3 style={{ marginTop: 0 }}>Brand Background</h3>
        <p>
          Uses <code>background: var(--brand)</code> and <code>color: var(--on-brand)</code>.
          Text and buttons must remain legible in both light and dark themes.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <Button tone="neutral" variant="outline">
            Contrast Check
          </Button>
          <Button tone="neutral">Neutral on Brand</Button>
        </div>
      </div>

      <h2>Muted Section</h2>
      <div
        style={{
          padding: 'var(--space-6)',
          background: 'var(--muted)',
          color: 'var(--on-muted)',
          borderRadius: 'var(--r-md)',
        }}
      >
        <h3 style={{ marginTop: 0 }}>Muted Background</h3>
        <p style={{ opacity: 0.85 }}>
          Uses <code>background: var(--muted)</code> and <code>color: var(--on-muted)</code>.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <Button tone="brand">Brand</Button>
          <Button tone="brand-alt">Brand Alt</Button>
          <Button tone="sage">Sage</Button>
        </div>
      </div>

      <h2>Card Components</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-4)' }}>
        <Card tone="surface" elevation={1} padding="lg">
          <h4 style={{ marginTop: 0 }}>Surface Card</h4>
          <p>Uses surface token with elevation shadow.</p>
        </Card>
        <Card tone="brand" elevation={2} padding="lg">
          <h4 style={{ marginTop: 0, color: 'inherit' }}>Brand Card</h4>
          <p style={{ color: 'inherit' }}>Brand background with proper contrast.</p>
        </Card>
        <Card tone="muted" elevation={1} padding="lg">
          <h4 style={{ marginTop: 0 }}>Muted Card</h4>
          <p>Muted tone for subtle emphasis.</p>
        </Card>
      </div>
    </section>
  </div>
);

export default {
  title: 'Docs/Dark Mode Audit',
  component: DocPage,
  parameters: {
    layout: 'fullscreen',
    docs: { page: DocPage },
  },
};

export const Audit = {
  render: () => <DocPage />,
};
