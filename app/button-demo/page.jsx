import Button from 'components/primitives/Button';

export const metadata = {
  title: 'Button Demo'
};

export default function ButtonDemo() {
  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '24px' }}>
      <h1 style={{ 
        fontFamily: 'var(--font-display)', 
        fontSize: 'var(--text-4xl)', 
        marginBottom: 'var(--space-8)' 
      }}>
        Button Component Demo
      </h1>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Tones (Solid Variant)
        </h2>
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <Button>Primary (Brand)</Button>
          <Button tone="brandAlt">Walnut</Button>
          <Button tone="accent">Champagne</Button>
          <Button tone="muted">Muted</Button>
          <Button tone="neutral">Neutral</Button>
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
          <Button>Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
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
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
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
          <Button variant="outline">Outline Brand</Button>
          <Button tone="accent" variant="outline">Outline Accent</Button>
          <Button tone="muted" variant="outline">Outline Muted</Button>
          <Button tone="neutral" variant="outline">Outline Neutral</Button>
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
          <Button variant="link">Link Brand</Button>
          <Button tone="accent" variant="link">Link Accent</Button>
          <Button tone="muted" variant="link">Muted Link</Button>
          <Button tone="neutral" variant="link">Neutral Link</Button>
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
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>Disabled Outline</Button>
            <Button variant="link" disabled>Disabled Link</Button>
          </div>
          <div>
            <Button block>Full Width Block Button</Button>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <Button as="a" href="#demo">Anchor Button</Button>
            <Button as="a" href="#demo" variant="outline">Anchor Outline</Button>
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
          <Button tone="accent" size="lg">Large Accent</Button>
          <Button tone="brandAlt" variant="outline" size="sm">Small Walnut Outline</Button>
          <Button tone="muted" variant="link" size="lg">Large Muted Link</Button>
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