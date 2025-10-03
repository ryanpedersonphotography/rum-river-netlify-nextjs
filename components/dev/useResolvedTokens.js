'use client';
import { useEffect, useState } from 'react';

/**
 * Reads CSS custom properties OR computed CSS properties from a target element.
 * - tokenVars: array of CSS var names, e.g. ['--brand','--on-brand']
 * - cssProps: array of computed style keys, e.g. ['background-color','color']
 * - scope: HTMLElement to read from (defaults to document.documentElement)
 * - enabled: boolean to control if the hook should run (default true)
 */
export default function useResolvedTokens({ tokenVars = [], cssProps = [], scope, enabled = true }) {
  const [values, setValues] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !enabled) return;
    const target = scope ?? document.documentElement;

    const read = () => {
      const cs = getComputedStyle(target);
      const out = {};

      tokenVars.forEach(n => { out[n] = cs.getPropertyValue(n).trim() || '(unset)'; });
      cssProps.forEach(p => { out[p] = cs.getPropertyValue(p) || '(unset)'; });

      setValues(out);
    };

    const id = requestAnimationFrame(read);
    const mo = new MutationObserver(read);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => { cancelAnimationFrame(id); mo.disconnect(); };
  // keep deps stable
  }, [scope, enabled, JSON.stringify(tokenVars), JSON.stringify(cssProps)]);

  return values;
}