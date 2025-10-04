import clsx from 'clsx';

/**
 * Spacer (token-driven whitespace)
 *
 * Purpose: Add intentional vertical or horizontal rhythm without wrapper divs or ad-hoc margins
 *
 * Props:
 *  - size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' (maps to spacing tokens)
 *  - axis: 'y' | 'x' (default 'y' for vertical space)
 *
 * Uses spacing tokens from globals.css:
 *   --space-2 through --space-12
 *
 * Example:
 *   <Section />
 *   <Spacer size="2xl" />
 *   <Section />
 */
export default function Spacer({
  size = 'md',
  axis = 'y'
}) {
  const className = clsx(
    'spacer',
    `spacer--${axis}-${size}`
  );

  return <div className={className} aria-hidden="true" />;
}
