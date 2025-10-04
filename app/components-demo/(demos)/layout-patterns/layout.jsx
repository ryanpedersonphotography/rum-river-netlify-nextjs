export default function LayoutPatternsLayout({ children }) {
    return (
        <div style={{
            margin: '0 -1.5rem',
            width: 'calc(100% + 3rem)'
        }} className="sm:-mx-12 sm:w-[calc(100%+6rem)]">
            {children}
        </div>
    );
}
