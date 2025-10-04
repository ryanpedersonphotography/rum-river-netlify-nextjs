import '../styles/globals.css';
import Footer from '../components/layout/Footer';
import Navigation from '../components/Navigation';

export const metadata = {
    title: {
        template: '%s | Rum River Wedding Barn',
        default: 'Rum River Wedding Barn - Minnesota Premier Wedding Venue'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased" style={{ color: 'var(--fg)', background: 'var(--bg)' }}>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
