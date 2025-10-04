'use client';
import { useState } from 'react';
import Button from 'components/primitives/Button';

export default function ButtonDemo() {
  const [debug, setDebug] = useState(false);

  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '24px' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'var(--space-8)' }}>
        <h1 style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: 'var(--text-4xl)', 
          margin: 0
        }}>
          Button Component Demo
        </h1>
        <button
          onClick={() => setDebug(d => !d)}
          style={{
            padding: 'var(--space-2) var(--space-4)',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-sm)',
            cursor: 'pointer',
            fontSize: 'var(--text-sm)'
          }}
        >
          {debug ? '🔧 Debug ON' : '🔧 Debug OFF'}
        </button>
      </div>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Tones (Solid Variant)
        </h2>
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <Button debug={debug}>Primary (Brand)</Button>
          <Button tone="brandAlt" debug={debug}>Walnut</Button>
          <Button tone="accent" debug={debug}>Champagne</Button>
          <Button tone="muted" debug={debug}>Muted</Button>
          <Button tone="neutral" debug={debug}>Neutral</Button>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Variants
        </h2>
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <Button debug={debug}>Solid</Button>
          <Button variant="outline" debug={debug}>Outline</Button>
          <Button variant="link" debug={debug}>Link</Button>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Sizes
        </h2>
        <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="sm" debug={debug}>Small</Button>
          <Button size="md" debug={debug}>Medium</Button>
          <Button size="lg" debug={debug}>Large</Button>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Outline Variants
        </h2>
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <Button variant="outline" debug={debug}>Outline Brand</Button>
          <Button tone="accent" variant="outline" debug={debug}>Outline Accent</Button>
          <Button tone="muted" variant="outline" debug={debug}>Outline Muted</Button>
          <Button tone="neutral" variant="outline" debug={debug}>Outline Neutral</Button>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Link Variants
        </h2>
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <Button variant="link" debug={debug}>Link Brand</Button>
          <Button tone="accent" variant="link" debug={debug}>Link Accent</Button>
          <Button tone="muted" variant="link" debug={debug}>Muted Link</Button>
          <Button tone="neutral" variant="link" debug={debug}>Neutral Link</Button>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          States & Special Cases
        </h2>
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <Button disabled debug={debug}>Disabled</Button>
            <Button variant="outline" disabled debug={debug}>Disabled Outline</Button>
            <Button variant="link" disabled debug={debug}>Disabled Link</Button>
          </div>
          <div>
            <Button block debug={debug}>Full Width Block Button</Button>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <Button as="a" href="#demo" debug={debug}>Anchor Button</Button>
            <Button as="a" href="#demo" variant="outline" debug={debug}>Anchor Outline</Button>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Mixed Combinations
        </h2>
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <Button tone="accent" size="lg" debug={debug}>Large Accent</Button>
          <Button tone="brandAlt" variant="outline" size="sm" debug={debug}>Small Walnut Outline</Button>
          <Button tone="muted" variant="link" size="lg" debug={debug}>Large Muted Link</Button>
        </div>
      </section>

      <section>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Usage Code Examples
        </h2>
        <div style={{ 
          background: 'var(--surface)', 
          padding: 'var(--space-6)', 
          borderRadius: 'var(--r-md)',
          border: '1px solid var(--border)',
          fontSize: 'var(--text-sm)',
          fontFamily: 'monospace'
        }}>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Button>Primary</Button>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Button tone="brandAlt">Walnut Solid</Button>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Button variant="outline">Outline Brand</Button>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Button tone="accent" variant="outline">Outline Accent</Button>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Button tone="muted" variant="link">Muted Link</Button>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Button size="lg">Large</Button>`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Button block>Full Width</Button>`}</code>
          </div>
          <div>
            <code>{`<Button disabled>Disabled</Button>`}</code>
          </div>
        </div>
      </section>
    </main>
  );
}