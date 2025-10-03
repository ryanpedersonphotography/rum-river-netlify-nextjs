'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Section from 'components/layout/Section';
import Card from 'components/primitives/Card';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';

/** Utility: pull CSS vars from :root by prefix list */
function useCSSVars(prefixes = []) {
  const [vars, setVars] = useState({});
  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const out = {};
    for (let i = 0; i < styles.length; i++) {
      const name = styles[i];
      if (!name.startsWith('--')) continue;
      if (prefixes.length && !prefixes.some(p => name.startsWith(p))) continue;
      out[name] = styles.getPropertyValue(name).trim();
    }
    setVars(out);
  }, [prefixes.join('|')]);
  return vars;
}

const AuditSection = ({ title, children }) => (
  <section style={{ margin: '32px 0' }}>
    <h2 style={{ margin: '0 0 12px', fontSize: '20px' }}>{title}</h2>
    <div>{children}</div>
  </section>
);

const Swatch = ({ name, value }) => (
  <div style={{
    display:'grid', gridTemplateColumns:'160px 1fr', gap:12,
    alignItems:'center', padding:'8px 0', borderBottom:'1px solid var(--border)'
  }}>
    <code style={{ opacity:.75 }}>{name}</code>
    <div style={{ display:'flex', alignItems:'center', gap:12 }}>
      <div style={{
        width:48, height:32, borderRadius:8, background:value,
        boxShadow:'inset 0 0 0 1px var(--border)'
      }} />
      <div style={{ fontSize:14 }}>{value}</div>
    </div>
  </div>
);

const Box = ({ label, style }) => (
  <div style={{ display:'grid', gap:6, alignItems:'center' }}>
    <div style={{ height:40, borderRadius:8, ...style }} />
    <div style={{ fontSize:12, opacity:.7 }}>{label}</div>
  </div>
);

// Metadata handled by layout since this is a client component

export default function StyleAudit() {
  const [isDark, setIsDark] = useState(false);
  const originalNoiseRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    // remember original noise var (whatever your globals.css sets)
    const styles = getComputedStyle(root);
    originalNoiseRef.current =
      styles.getPropertyValue('--background-image-noise')?.trim() || 'none';

    // init theme based on current attribute
    const dark = root.getAttribute('data-theme') === 'dark';
    setIsDark(dark);

    // ensure light mode starts with no overlay
    if (!dark) {
      root.style.setProperty('--background-image-noise', 'none');
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !isDark;

    if (nextDark) {
      // dark: restore the overlay/noise
      root.setAttribute('data-theme', 'dark');
      root.style.setProperty(
        '--background-image-noise',
        originalNoiseRef.current || 'none'
      );
    } else {
      // light: remove overlay/noise
      root.removeAttribute('data-theme');
      root.style.setProperty('--background-image-noise', 'none');
    }

    setIsDark(nextDark);
  };

  // Adjust these prefixes to match your token names
  const vars = useCSSVars([
    '--bg','--fg','--surface','--on-surface','--brand','--on-brand','--brand-alt','--on-brand-alt',
    '--accent','--on-accent','--muted','--on-muted','--border','--focus-ring',
    '--space-','--text-','--font-','--weight-','--r-','--shadow-','--container'
  ]);

  const colorKeys = useMemo(() => Object.keys(vars)
    .filter(k => ['--bg','--fg','--surface','--on-surface','--brand','--on-brand','--brand-alt','--on-brand-alt',
      '--accent','--on-accent','--muted','--on-muted','--border','--focus-ring']
      .some(key => k.startsWith(key)))
    .sort(), [vars]);

  const spacingKeys = useMemo(() => Object.keys(vars).filter(k => k.startsWith('--space-')).sort((a,b)=>{
    const na = parseInt(a.replace('--space-',''),10);
    const nb = parseInt(b.replace('--space-',''),10);
    return na - nb;
  }), [vars]);

  const textKeys = useMemo(() => Object.keys(vars).filter(k => k.startsWith('--text-')).sort((a,b)=>{
    const sz = s => parseFloat(vars[s]);
    return (sz(a)||0) - (sz(b)||0);
  }), [vars]);

  const fontKeys = useMemo(() => Object.keys(vars).filter(k => k.startsWith('--font-')).sort(), [vars]);
  const weightKeys = useMemo(() => Object.keys(vars).filter(k => k.startsWith('--weight-')).sort(), [vars]);
  const radiusKeys = useMemo(() => Object.keys(vars).filter(k => k.startsWith('--r-')).sort(), [vars]);
  const shadowKeys = useMemo(() => Object.keys(vars).filter(k => k.startsWith('--shadow-')).sort(), [vars]);

  return (
    <Section size="md" tone="surface">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ margin:'0 0 8px', fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)' }}>
            Style Audit
          </h1>
          <p style={{ opacity:.7, margin:'0', fontFamily: 'var(--font-body)' }}>
            This page reads your current CSS variables and renders the real styles. Print to PDF for a snapshot.
          </p>
        </div>
        <button 
          onClick={toggleTheme}
          style={{
            padding: 'var(--space-3) var(--space-4)',
            background: 'var(--brand)',
            color: 'var(--on-brand)',
            border: 'none',
            borderRadius: 'var(--r-md)',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--weight-medium)',
            transition: 'var(--transition-fast)'
          }}
          onMouseOver={(e) => e.target.style.opacity = '0.9'}
          onMouseOut={(e) => e.target.style.opacity = '1'}
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Colors */}
      <AuditSection title="Colors (Roles)">
        {colorKeys.length === 0 ? <em>No role color tokens found.</em> :
          colorKeys.map(k => (
            <Swatch key={k} name={k} value={vars[k]} />
          ))
        }
      </AuditSection>

      {/* Spacing */}
      <AuditSection title="Spacing Scale">
        <div style={{ display:'grid', gap:12 }}>
          {spacingKeys.map(k => (
            <div key={k} style={{ display:'grid', gridTemplateColumns:'100px 1fr', gap:12, alignItems:'center' }}>
              <code style={{ opacity:.75 }}>{k}</code>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ 
                  height:12, 
                  width: vars[k], 
                  background:'linear-gradient(90deg, var(--brand), var(--accent))', 
                  borderRadius:6 
                }} />
                <div style={{ fontSize:12, opacity:.7 }}>{vars[k]}</div>
              </div>
            </div>
          ))}
        </div>
      </AuditSection>

      {/* Typography */}
      <AuditSection title="Typography">
        <div style={{ display:'grid', gap:16 }}>
          <div>
            <h3 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 600 }}>Font Families</h3>
            {fontKeys.map(k => (
              <div key={k} style={{ display:'grid', gridTemplateColumns:'140px 1fr', gap:12, alignItems:'center', marginBottom: 8 }}>
                <code style={{ opacity:.75 }}>{k}</code>
                <div style={{ fontFamily: vars[k], fontSize: '18px' }}>
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 600 }}>Font Weights</h3>
            {weightKeys.map(k => (
              <div key={k} style={{ display:'grid', gridTemplateColumns:'140px 1fr', gap:12, alignItems:'center', marginBottom: 8 }}>
                <code style={{ opacity:.75 }}>{k}</code>
                <div style={{ fontWeight: vars[k], fontSize: '18px' }}>
                  Weight {vars[k]} — The quick brown fox
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 600 }}>Text Sizes</h3>
            {textKeys.map(k => (
              <div key={k} style={{ display:'grid', gridTemplateColumns:'140px 1fr', gap:12, alignItems:'center', marginBottom: 8 }}>
                <code style={{ opacity:.75 }}>{k}</code>
                <div style={{ fontSize: vars[k], lineHeight:1.25 }}>
                  The quick brown fox — {vars[k]}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, padding: 16, background: 'var(--surface)', borderRadius: 'var(--r-md)' }}>
            <div style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-4xl)', marginBottom:8, color: 'var(--fg)' }}>
              Display Heading (Playfair Display)
            </div>
            <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--text-base)', color: 'var(--fg)' }}>
              Body text using Montserrat. This should be readable on the surface background.
            </div>
            <div style={{ fontFamily:'var(--font-script)', fontSize:'var(--text-lg)', marginTop: 8, color: 'var(--accent)' }}>
              Script accent text (Dancing Script)
            </div>
          </div>
        </div>
      </AuditSection>

      {/* Radii & Shadows */}
      <AuditSection title="Radii & Shadows">
        <div style={{ marginBottom: 16 }}>
          <h3 style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: 600, color: 'var(--fg)' }}>Border Radius</h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))', gap:16 }}>
            {radiusKeys.map(k => (
              <Box key={k} label={`${k}: ${vars[k]}`} style={{ 
                background:'var(--surface)', 
                border: '1px solid var(--border)',
                borderRadius: vars[k] 
              }} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: 600, color: 'var(--fg)' }}>Shadows</h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))', gap:16 }}>
            {shadowKeys.map(k => (
              <Box key={k} label={`${k}`} style={{ 
                background:'var(--surface)', 
                boxShadow: vars[k], 
                borderRadius:'var(--r-md)' 
              }} />
            ))}
          </div>
        </div>
      </AuditSection>

      {/* Component Examples */}
      <AuditSection title="Component Examples (Current System)">
        <div style={{ display:'grid', gap:24 }}>
          
          {/* Buttons using current classes */}
          <div>
            <h3 style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: 600, color: 'var(--fg)' }}>Buttons (Current .btn classes)</h3>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <button className="btn">Primary Button</button>
              <button className="btn btn-lg">Large Button</button>
              <button className="btn" disabled>Disabled Button</button>
            </div>
          </div>

          {/* Cards */}
          <div>
            <h3 style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: 600, color: 'var(--fg)' }}>Cards</h3>
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div style={{ 
                background: 'var(--surface)', 
                padding: 'var(--space-6)', 
                borderRadius: 'var(--r-md)', 
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border)'
              }}>
                <h4 style={{ 
                  margin: '0 0 8px', 
                  fontFamily: 'var(--font-display)', 
                  fontSize: 'var(--text-xl)',
                  color: 'var(--fg)'
                }}>
                  Example Card
                </h4>
                <p style={{ 
                  margin: 0, 
                  color: 'var(--on-surface)', 
                  fontSize: 'var(--text-sm)' 
                }}>
                  This card uses token-based styling with surface background, proper spacing, and semantic colors.
                </p>
              </div>

              <Card tone="brand" elevation={2} radius="md" padding="md">
                <Heading level={4} noMargin>Brand Card</Heading>
                <Text>This card demonstrates the brand color with proper contrast text.</Text>
              </Card>
            </div>
          </div>

          {/* Color Palette Demo */}
          <div>
            <h3 style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: 600, color: 'var(--fg)' }}>Color Palette in Use</h3>
            <div style={{ display: 'grid', gap: 8 }}>
              <div style={{ 
                background: 'var(--bg)', 
                color: 'var(--fg)', 
                padding: 'var(--space-4)', 
                borderRadius: 'var(--r-sm)',
                border: '1px solid var(--border)'
              }}>
                Page Background (--bg) with default text (--fg)
              </div>
              <div style={{ 
                background: 'var(--surface)', 
                color: 'var(--on-surface)', 
                padding: 'var(--space-4)', 
                borderRadius: 'var(--r-sm)',
                border: '1px solid var(--border)'
              }}>
                Surface background with surface text
              </div>
              <div style={{ 
                background: 'var(--muted)', 
                color: 'var(--on-muted)', 
                padding: 'var(--space-4)', 
                borderRadius: 'var(--r-sm)'
              }}>
                Muted section with contrasting text
              </div>
              <div style={{ 
                background: 'var(--accent)', 
                color: 'var(--on-accent)', 
                padding: 'var(--space-4)', 
                borderRadius: 'var(--r-sm)'
              }}>
                Accent background (champagne gold) with dark text
              </div>
            </div>
          </div>
        </div>
      </AuditSection>

      {/* Token Summary */}
      <AuditSection title="Token Summary">
        <div style={{ 
          background: 'var(--surface)', 
          padding: 'var(--space-6)', 
          borderRadius: 'var(--r-md)',
          border: '1px solid var(--border)'
        }}>
          <p style={{ margin: '0 0 12px', fontSize: 'var(--text-sm)', color: 'var(--on-surface)' }}>
            <strong>Total tokens found:</strong> {Object.keys(vars).length}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, fontSize: 'var(--text-sm)' }}>
            <div>Colors: {colorKeys.length}</div>
            <div>Spacing: {spacingKeys.length}</div>
            <div>Typography: {textKeys.length + fontKeys.length + weightKeys.length}</div>
            <div>Radii: {radiusKeys.length}</div>
            <div>Shadows: {shadowKeys.length}</div>
          </div>
        </div>
      </AuditSection>
    </Section>
  );
}