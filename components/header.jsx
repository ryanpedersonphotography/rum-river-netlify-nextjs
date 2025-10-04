import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Wedding Site Home', href: '/' },
    { linkText: 'Style Audit', href: '/components-demo/style-audit' },
    { linkText: 'Cookbook', href: '/components-demo/cookbook' },
    { linkText: 'Accessibility', href: '/components-demo/accessibility-demo' },
    { linkText: 'Spacing Demo', href: '/components-demo/spacing-demo' },
    { linkText: 'Section Demo', href: '/components-demo/section-demo' },
    { linkText: 'Layout Demo', href: '/components-demo/layout-demo' },
    { linkText: 'Layout Patterns', href: '/components-demo/layout-patterns' },
    { linkText: 'Button Demo', href: '/components-demo/button-demo' },
    { linkText: 'Input Demo', href: '/components-demo/input-demo' },
    { linkText: 'Typography Demo', href: '/components-demo/typography-demo' },
    { linkText: 'Card Demo', href: '/components-demo/card-demo' },
    { linkText: 'Debug Demo', href: '/components-demo/debug-demo' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <Image src={netlifyLogo} alt="Netlify logo" />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <Link
                href="https://github.com/netlify-templates/next-platform-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex lg:ml-auto"
            >
                <Image src={githubLogo} alt="GitHub logo" className="w-7" />
            </Link>
        </nav>
    );
}
