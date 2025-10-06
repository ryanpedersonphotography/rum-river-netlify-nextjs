import React from 'react';

const Section = ({ title, children }) => (
  <section style={{ marginTop: 'var(--space-8)' }}>
    <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)' }}>
      {title}
    </h2>
    <div style={{ marginTop: 'var(--space-3)', lineHeight: 1.65 }}>{children}</div>
  </section>
);

const Code = ({ children }) => (
  <pre style={{
    margin: 0,
    padding: 'var(--space-4)',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--r-sm)',
    fontSize: 'var(--text-sm)',
    overflowX: 'auto'
  }}>
    <code>{children}</code>
  </pre>
);

function EnforcementGuide() {
  return (
    <div style={{ padding: 'var(--space-8)', maxWidth: 940, margin: '0 auto' }}>
      <header>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)' }}>
          Design System Enforcement Guide
        </h1>
        <p style={{ marginTop: 'var(--space-2)', opacity: 0.85 }}>
          Our design system is enforced through a three-tier workflow: pre-commit hooks, lint rules, and CI gates.
          This page explains how it works, how to test locally, and how to request exceptions.
        </p>
      </header>

      <Section title="The 3-Tier Model">
        <ul>
          <li><strong>Tier 1 — Pre-commit:</strong> Husky + lint-staged blocks violations before they enter the repo.</li>
          <li><strong>Tier 2 — Linting:</strong> ESLint (JSX inline styles) + Stylelint (CSS) enforce token usage.</li>
          <li><strong>Tier 3 — CI:</strong> GitHub Actions blocks PRs if violations are found.</li>
        </ul>
        <Code>{`# Quick mental model
Local Commit (husky) → Linters (eslint/stylelint) → PR (CI gates)`}</Code>
      </Section>

      <Section title="What's Enforced">
        <ul>
          <li><strong>No hardcoded colors</strong> in JSX or CSS (use tokens like <code>var(--brand)</code>, <code>var(--fg)</code>).</li>
          <li><strong>No hardcoded spacing/sizing</strong> (use <code>--space-*</code>, <code>--r-*</code>, <code>--size-icon-*</code>, <code>--vh-*</code> etc.).</li>
          <li><strong>Stories are lenient:</strong> warnings allowed in <code>*.stories.jsx</code> for demo purposes.</li>
        </ul>
      </Section>

      <Section title="Example: Blocked vs Allowed">
        <p><em>JSX inline style (ESLint):</em></p>
        <Code>{`// ❌ Blocked
<div style={{ color: '#fff', padding: '24px' }} />

// ✅ Allowed (token-driven)
<div style={{ color: 'var(--on-surface)', padding: 'var(--space-6)' }} />`}</Code>

        <p style={{ marginTop: 'var(--space-4)' }}><em>CSS (Stylelint):</em></p>
        <Code>{`/* ❌ Blocked */
.button { background: #6B4E3D; border-radius: 8px; }

/* ✅ Allowed */
.button { background: var(--brand); border-radius: var(--r-md); }`}</Code>
      </Section>

      <Section title="How to Test Locally">
        <ol>
          <li>Stage your changes: <code>git add -A</code></li>
          <li>Commit: <code>git commit -m "test"</code> (pre-commit will run)</li>
          <li>Run linters directly:
            <ul>
              <li><code>npm run lint:css</code> (Stylelint)</li>
              <li><code>npm run lint:js</code> (ESLint)</li>
              <li><code>npm run lint:all</code> (both)</li>
            </ul>
          </li>
        </ol>
      </Section>

      <Section title="Escape Hatches (Rare)">
        <ul>
          <li><strong>Stories only:</strong> If you must demo a literal value, keep it inside <code>*.stories.jsx</code> to avoid CI failures.</li>
          <li><strong>Document why:</strong> Add a comment above the line:
            <Code>{`// NOTE: demo-only literal for visual teaching example
<div style={{ border: '1px dashed #ccc' }} />`}</Code>
          </li>
          <li><strong>Production code:</strong> Prefer adding a new token (e.g., <code>--size-icon-xxl</code>, <code>--vh-75</code>) rather than hardcoding.</li>
        </ul>
      </Section>

      <Section title="CI Gate (Pull Requests)">
        <p>
          All PRs run the <code>Design System Check</code> workflow. If a violation is found, CI fails and the PR can't merge.
          Fix the violation or convert the example into a Storybook-only demo.
        </p>
        <Code>{`# Where to look
.github/workflows/design-system-check.yml`}</Code>
      </Section>

      <Section title="Token Catalog (Single Source of Truth)">
        <ul>
          <li><strong>Tokens file:</strong> <code>styles/tokens.css</code></li>
          <li><strong>Docs page:</strong> "Docs / Design Tokens" (live inspector)</li>
          <li><strong>New categories:</strong> viewport sizing (<code>--vh-*</code>), icon sizes (<code>--size-icon-*</code>)</li>
        </ul>
      </Section>

      <Section title="FAQ">
        <p><strong>Q:</strong> I need a size/color not covered by tokens. <br />
        <strong>A:</strong> Add a token in <code>tokens.css</code>, document it, then use it. Don't hardcode.</p>

        <p style={{ marginTop: 'var(--space-3)' }}><strong>Q:</strong> Can I bypass the pre-commit hook? <br />
        <strong>A:</strong> Technically you can run <code>git commit --no-verify</code>, but CI will still fail your PR. Add a proper token instead.</p>
      </Section>
    </div>
  );
}

export default {
  title: 'Docs/Enforcement Guide',
  component: EnforcementGuide,
  parameters: {
    layout: 'padded',
  },
};

export const Guide = {
  render: () => <EnforcementGuide />,
};
