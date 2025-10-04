export default function IsolatedLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ color: 'var(--fg)', background: 'var(--bg)' }}>
        {children}
      </body>
    </html>
  );
}
