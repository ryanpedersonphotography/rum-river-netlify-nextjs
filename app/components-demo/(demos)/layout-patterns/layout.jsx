export default function LayoutPatternsLayout({ children }) {
    return (
        <div style={{
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            width: '100vw',
            marginTop: 'calc(-1 * var(--space-8))'
        }}>
            {children}
        </div>
    );
}
