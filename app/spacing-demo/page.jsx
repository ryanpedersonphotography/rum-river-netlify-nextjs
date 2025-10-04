'use client';
import { useState } from 'react';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';

export default function SpacingDemo() {
  const [debug, setDebug] = useState(false);

  // All spacing tokens to visualize
  const spacingTokens = [
    { name: '--space-1', value: '4px' },
    { name: '--space-2', value: '8px' },
    { name: '--space-3', value: '12px' },
    { name: '--space-4', value: '16px' },
    { name: '--space-5', value: '20px' },
    { name: '--space-6', value: '24px' },
    { name: '--space-7', value: '28px' },
    { name: '--space-8', value: '32px' },
    { name: '--space-10', value: '40px' },
    { name: '--space-12', value: '48px' },
    { name: '--space-16', value: '64px' },
    { name: '--space-20', value: '80px' },
    { name: '--space-24', value: '96px' }
  ];

  return (
    <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8)' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'var(--space-6)' }}>
        <Heading level={1} size="hero" debug={debug}>Spacing Demo</Heading>
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

      <Text size="lg" debug={debug}>
        Visual representation of all spacing tokens in the design system (4px grid).
      </Text>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Spacing Scale Visualization</Heading>
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          {spacingTokens.map((token) => (
            <div key={token.name} style={{ 
              display: 'grid', 
              gridTemplateColumns: '120px 100px 1fr', 
              gap: 'var(--space-4)', 
              alignItems: 'center',
              padding: 'var(--space-3)',
              background: 'var(--surface)',
              borderRadius: 'var(--r-sm)',
              border: '1px solid var(--border)'
            }}>
              {/* Token name */}
              <code style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' }}>
                {token.name}
              </code>
              
              {/* Expected value */}
              <Text size="sm" debug={debug}>
                {token.value}
              </Text>
              
              {/* Visual bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{
                  height: '20px',
                  width: `var(${token.name})`,
                  background: 'linear-gradient(90deg, var(--brand), var(--accent))',
                  borderRadius: 'var(--r-sm)',
                  minWidth: '4px'
                }} />
                <Text size="xs" debug={debug} style={{ opacity: 0.7 }}>
                  width: var({token.name})
                </Text>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Spacing in Use</Heading>
        <Text debug={debug}>
          Examples of spacing tokens applied to real components:
        </Text>
        
        <div style={{ 
          display: 'grid', 
          gap: 'var(--space-6)', 
          marginTop: 'var(--space-4)',
          padding: 'var(--space-6)',
          background: 'var(--surface)',
          borderRadius: 'var(--r-md)',
          border: '1px solid var(--border)'
        }}>
          {/* Small spacing example */}
          <div style={{ padding: 'var(--space-2)', background: 'var(--muted)', borderRadius: 'var(--r-sm)' }}>
            <Text size="sm" debug={debug}>
              Small padding (--space-2 = 8px)
            </Text>
          </div>

          {/* Medium spacing example */}
          <div style={{ padding: 'var(--space-4)', background: 'var(--muted)', borderRadius: 'var(--r-sm)' }}>
            <Text debug={debug}>
              Medium padding (--space-4 = 16px)
            </Text>
          </div>

          {/* Large spacing example */}
          <div style={{ padding: 'var(--space-6)', background: 'var(--muted)', borderRadius: 'var(--r-sm)' }}>
            <Text size="lg" debug={debug}>
              Large padding (--space-6 = 24px)
            </Text>
          </div>

          {/* Extra large spacing example */}
          <div style={{ padding: 'var(--space-8)', background: 'var(--muted)', borderRadius: 'var(--r-sm)' }}>
            <Text size="xl" debug={debug}>
              Extra large padding (--space-8 = 32px)
            </Text>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={2} debug={debug}>Margin Examples</Heading>
        <div style={{ 
          padding: 'var(--space-4)',
          background: 'var(--surface)',
          borderRadius: 'var(--r-md)',
          border: '1px solid var(--border)'
        }}>
          <div style={{
            marginBottom: 'var(--space-4)',
            padding: 'var(--space-3)',
            background: 'var(--brand)',
            color: 'var(--on-brand)',
            borderRadius: 'var(--r-sm)',
            border: '2px solid var(--on-brand)'
          }}>
            <Text debug={debug} noMargin>
              margin-bottom: 16px (--space-4)
            </Text>
          </div>

          <div style={{
            marginBottom: 'var(--space-8)',
            padding: 'var(--space-3)',
            background: 'var(--brand)',
            color: 'var(--on-brand)',
            borderRadius: 'var(--r-sm)',
            border: '2px solid var(--on-brand)'
          }}>
            <Text debug={debug} noMargin>
              margin-bottom: 32px (--space-8)
            </Text>
          </div>

          <div style={{
            marginBottom: 'var(--space-12)',
            padding: 'var(--space-3)',
            background: 'var(--brand)',
            color: 'var(--on-brand)',
            borderRadius: 'var(--r-sm)',
            border: '2px solid var(--on-brand)'
          }}>
            <Text debug={debug} noMargin>
              margin-bottom: 48px (--space-12)
            </Text>
          </div>

          <div style={{ 
            padding: 'var(--space-3)', 
            background: 'var(--brand)',
            color: 'var(--on-brand)',
            borderRadius: 'var(--r-sm)'
          }}>
            <Text debug={debug} noMargin>
              No margin (final element)
            </Text>
          </div>
        </div>
      </section>

      <section>
        <Heading level={2} debug={debug}>Usage Code Examples</Heading>
        <div style={{ 
          background: 'var(--surface)', 
          padding: 'var(--space-6)', 
          borderRadius: 'var(--r-md)',
          border: '1px solid var(--border)',
          fontSize: 'var(--text-sm)',
          fontFamily: 'monospace'
        }}>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`padding: var(--space-2);  /* 8px */`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`margin: var(--space-4);   /* 16px */`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`gap: var(--space-6);      /* 24px */`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`padding: var(--space-8);  /* 32px */`}</code>
          </div>
          <div>
            <code>{`margin-top: var(--space-12); /* 48px */`}</code>
          </div>
        </div>
      </section>
    </main>
  );
}