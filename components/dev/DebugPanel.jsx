'use client';
import React from 'react';

/**
 * Lightweight debug UI panel
 * - classes: string of applied classes
 * - data: resolved token values / computed styles object
 */
export default function DebugPanel({ classes, data }) {
  return (
    <div style={{ fontSize: 12, color: 'var(--fg)', marginBottom: 8, lineHeight: 1.35 }}>
      {classes && <pre style={{ margin: 0 }}>{classes}</pre>}
      {data ? (
        <pre style={{ margin: 0, opacity: 0.85 }}>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <pre style={{ margin: 0, opacity: 0.7 }}>Loading token values…</pre>
      )}
    </div>
  );
}