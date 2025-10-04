import { Header } from '../../components/header';

export default function ComponentsDemoLayout({ children }) {
    return (
        <div style={{
            maxWidth: 'var(--container)',
            margin: '0 auto',
            padding: 'var(--space-8)'
        }}>
            {/* Demo Navigation - links to other component demos */}
            <div style={{
                marginBottom: 'var(--space-12)',
                paddingBottom: 'var(--space-8)',
                borderBottom: '1px solid var(--border)'
            }}>
                <Header />
            </div>

            {/* Component demo content */}
            <main>{children}</main>
        </div>
    );
}
