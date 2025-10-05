// components/docs/DesignSystemOverview.stories.jsx
import React from 'react';

const DocPage = () => (
  <div style={{ display: 'grid', gap: 'var(--space-8)', padding: 'var(--space-6)' }}>
    <header style={{ display: 'grid', gap: 'var(--space-2)' }}>
      <h1 style={{ margin: 0, fontFamily: 'var(--font-display)' }}>Design System Overview</h1>
      <p style={{ margin: 0, opacity: .8 }}>
        Rum River's single-source-of-truth token system, primitives, and section patterns.
        All components read tokens; no hardcoded colors/sizes.
      </p>
    </header>

    <section>
      <h2>Architecture</h2>
      <ul>
        <li><strong>Tokens:</strong> <code>styles/tokens.css</code> define role + scale variables</li>
        <li><strong>Primitives:</strong> <code>components/primitives</code> (Button, Card, Grid, Stack, etc.)</li>
        <li><strong>Forms:</strong> <code>components/forms</code> (Form, Field, controls)</li>
        <li><strong>Sections:</strong> <code>components/sections</code> (ScheduleTourForm, etc.)</li>
        <li><strong>Layouts:</strong> <code>components/layout</code> (Section, Header, Footer)</li>
      </ul>
    </section>

    <section>
      <h2>Theme & Modes</h2>
      <p>
        Storybook toolbar toggles <code>data-theme="light|dark"</code>. Components must use role tokens like
        <code> --bg</code>, <code> --fg</code>, <code> --surface</code>, <code> --on-surface</code>,
        <code> --brand</code>, <code> --on-brand</code>, <code> --border</code>.
      </p>
    </section>

    <section>
      <h2>Do / Don't</h2>
      <ul>
        <li>✅ Use tokens: <code>background: var(--surface)</code>, <code>color: var(--on-surface)</code></li>
        <li>✅ Use spacing tokens: <code>gap: var(--space-6)</code></li>
        <li>❌ Don't hardcode hex colors or pixel sizes in components</li>
        <li>❌ Don't import Tailwind utilities that conflict with token roles</li>
      </ul>
    </section>

    <section>
      <h2>Storybook Usage</h2>
      <ul>
        <li>Co-located stories: <code>Component.jsx</code> + <code>Component.stories.jsx</code></li>
        <li>Docs pages via <code>parameters.docs.page</code> (this page)</li>
        <li>Dark mode checks with global theme toggle</li>
        <li>A11y panel (axe) for WCAG quick checks</li>
      </ul>
    </section>
  </div>
);

export default {
  title: 'Docs/Design System Overview',
  component: DocPage,
  parameters: {
    layout: 'fullscreen',
    docs: { page: DocPage },
  },
};

export const DocsOnly = {
  render: () => <DocPage />,
};
