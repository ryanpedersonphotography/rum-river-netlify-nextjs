import React, { useEffect, useRef, useState } from 'react';

const TokenProbe = () => {
  const [tokens, setTokens] = useState({});
  const [theme, setTheme] = useState('');
  const rafRef = useRef();

  useEffect(() => {
    // SSR guard
    if (typeof window === 'undefined') return;

    const root = document.documentElement;

    const readTarget = () => {
      // Prefer :root; if wrapper is used, fall back to the first [data-theme] ancestor
      const wrapper = document.querySelector('[data-theme]') || root;
      return { root, target: wrapper };
    };

    const readTokens = () => {
      const { target } = readTarget();
      const get = (n) => getComputedStyle(target).getPropertyValue(n).trim();
      const currentTheme =
        target.getAttribute('data-theme') ||
        root.getAttribute('data-theme') ||
        'none';

      setTheme(currentTheme);
      setTokens({
        '--bg': get('--bg'),
        '--fg': get('--fg'),
        '--surface': get('--surface'),
        '--on-surface': get('--on-surface'),
        '--brand': get('--brand'),
        '--on-brand': get('--on-brand'),
        '--border': get('--border'),
        '--focus-ring': get('--focus-ring'),
      });

      console.table({
        theme: currentTheme,
        bg: get('--bg'),
        fg: get('--fg'),
        surface: get('--surface'),
        onSurface: get('--on-surface'),
        brand: get('--brand'),
        onBrand: get('--on-brand'),
        border: get('--border'),
      });
    };

    // Initial read (next frame to ensure CSS loaded)
    rafRef.current = requestAnimationFrame(readTokens);

    // Observe theme attribute on both root and any wrapper
    const observer = new MutationObserver(readTokens);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    const wrapper = document.querySelector('[data-theme]');
    if (wrapper && wrapper !== document.documentElement) {
      observer.observe(wrapper, {
        attributes: true,
        attributeFilter: ['data-theme'],
      });
    }

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div style={{
      padding: 'var(--space-6)',
      background: 'var(--surface)',
      border: '2px solid var(--border)',
      borderRadius: 'var(--r-md)',
      color: 'var(--on-surface)',
    }}>
      <h2 style={{ marginTop: 0 }}>Token Probe</h2>
      <p style={{ opacity: 0.8 }}>
        Use the toolbar to toggle theme. Values below should change in real time.
      </p>

      <div style={{
        marginTop: 'var(--space-4)',
        padding: 'var(--space-4)',
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-sm)',
        fontFamily: 'monospace',
        fontSize: 'var(--text-sm)',
      }}>
        <div style={{ marginBottom: 'var(--space-3)', fontWeight: 'bold' }}>
          Current Theme: <code>{theme}</code>
        </div>
        {Object.entries(tokens).map(([name, value]) => (
          <div key={name} style={{
            display: 'grid',
            gridTemplateColumns: '140px 1fr',
            gap: 'var(--space-2)',
            padding: 'var(--space-1) 0',
          }}>
            <code>{name}:</code>
            <code style={{ opacity: 0.75 }}>{value || '(not set)'}</code>
          </div>
        ))}
      </div>
    </div>
  );
};

export default {
  title: 'Docs/Token Probe',
  parameters: {
    layout: 'padded',
  },
};

export const Probe = {
  render: () => <TokenProbe />,
};
