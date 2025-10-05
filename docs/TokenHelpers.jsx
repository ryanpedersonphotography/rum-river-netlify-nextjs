'use client';

// Token visualization components for Storybook MDX
// Shows computed CSS custom property values at runtime

export function TokenRow({ name }) {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '200px 1fr 140px',
      gap: 'var(--space-3)',
      padding: 'var(--space-3)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-sm)',
      alignItems: 'center',
      marginBottom: 'var(--space-2)'
    }}>
      <code style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' }}>{name}</code>
      <div style={{
        height: '40px',
        background: `var(${name})`,
        borderRadius: 'var(--r-sm)',
        border: '1px solid var(--border)'
      }} />
      <code style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
        {value || '(runtime)'}
      </code>
    </div>
  );
}

export function SpaceRow({ name }) {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '200px auto 140px',
      gap: 'var(--space-3)',
      padding: 'var(--space-2)',
      alignItems: 'center',
      marginBottom: 'var(--space-1)'
    }}>
      <code style={{ fontSize: 'var(--text-sm)' }}>{name}</code>
      <div style={{
        height: '12px',
        width: `var(${name})`,
        background: 'var(--brand)',
        borderRadius: 'var(--r-sm)'
      }} />
      <code style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>{value}</code>
    </div>
  );
}

// Legacy aliases for backward compatibility
export function TokenSwatch({ name }) {
  return <TokenRow name={name} />;
}

export function SpacingToken({ name }) {
  return <SpaceRow name={name} />;
}

export function TypeScale() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'hero'];

  return (
    <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
      {sizes.map(size => (
        <div key={size} style={{ padding: 'var(--space-3)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)' }}>
          <code style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', display: 'block', marginBottom: 'var(--space-2)' }}>
            --text-{size}
          </code>
          <div style={{ fontSize: `var(--text-${size})` }}>
            The quick brown fox jumps over the lazy dog
          </div>
        </div>
      ))}
    </div>
  );
}

export function RadiusTokens() {
  const radii = ['sm', 'md', 'lg', 'full'];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--space-4)' }}>
      {radii.map(radius => (
        <div key={radius} style={{ textAlign: 'center' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'var(--brand)',
            borderRadius: `var(--r-${radius})`,
            margin: '0 auto var(--space-2)'
          }} />
          <code style={{ fontSize: 'var(--text-sm)' }}>--r-{radius}</code>
        </div>
      ))}
    </div>
  );
}

export function ShadowTokens() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-6)' }}>
      <div>
        <div style={{
          padding: 'var(--space-6)',
          background: 'var(--surface)',
          borderRadius: 'var(--r-md)',
          boxShadow: 'var(--shadow-sm)',
          textAlign: 'center'
        }}>
          Elevation 1
        </div>
        <code style={{ display: 'block', marginTop: 'var(--space-2)', fontSize: 'var(--text-xs)', textAlign: 'center' }}>
          --shadow-sm
        </code>
      </div>

      <div>
        <div style={{
          padding: 'var(--space-6)',
          background: 'var(--surface)',
          borderRadius: 'var(--r-md)',
          boxShadow: 'var(--shadow-md)',
          textAlign: 'center'
        }}>
          Elevation 2
        </div>
        <code style={{ display: 'block', marginTop: 'var(--space-2)', fontSize: 'var(--text-xs)', textAlign: 'center' }}>
          --shadow-md
        </code>
      </div>

      <div>
        <div style={{
          padding: 'var(--space-6)',
          background: 'var(--surface)',
          borderRadius: 'var(--r-md)',
          boxShadow: 'var(--shadow-lg)',
          textAlign: 'center'
        }}>
          Elevation 3
        </div>
        <code style={{ display: 'block', marginTop: 'var(--space-2)', fontSize: 'var(--text-xs)', textAlign: 'center' }}>
          --shadow-lg
        </code>
      </div>
    </div>
  );
}
