'use client';
import React, { useRef } from 'react';
import clsx from 'clsx';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

/**
 * MediaBlock (token-driven content + image layout)
 * Props:
 *  - layout: 'image-right' | 'image-left' (default 'image-right')
 *  - gap: 'sm' | 'md' | 'lg' | 'xl' (maps to spacing tokens)
 *  - tone: 'surface' | 'brand' | 'muted' | 'accent' (text color context)
 *  - number: optional string for numbered blocks (e.g., "01")
 *  - debug: boolean
 *  - className, style, ...rest
 *
 * Slots:
 *  - <MediaBlock.Content>: headings, text, buttons
 *  - <MediaBlock.Media>: <img>, video, etc.
 *
 * Uses tokens from globals.css:
 *   --space-4 through --space-8, --accent, --on-brand, --r-lg, --shadow-lg
 */
export default function MediaBlock({
  layout = 'image-right',
  gap = 'lg',
  tone = 'surface',
  number,
  debug = false,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  const classes = clsx(
    'media-block',
    `media-block--${layout}`,
    `media-block--gap-${gap}`,
    `media-block--tone-${tone}`,
    className
  );

  // Inject number into Content slot if provided
  const slotted = React.Children.map(children, (child) => {
    if (!child) return null;

    // If this is MediaBlock.Content and we have a number, inject it
    if (child.type?.displayName === 'MediaBlock.Content' && number) {
      return (
        <div className="content">
          <div className="number">{number}</div>
          {child.props.children}
        </div>
      );
    }

    return child;
  });

  const tokenVars = ['--space-4', '--space-6', '--space-8', '--accent', '--on-brand', '--r-lg', '--shadow-lg'];
  const cssProps = ['gap', 'grid-template-columns', 'color', 'border-radius', 'box-shadow'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  return (
    <>
      {debug && <DebugPanel classes={classes} data={data} />}
      <div ref={ref} className={classes} style={style} {...rest}>
        {slotted}
      </div>
    </>
  );
}

function Content({ children, className, ...rest }) {
  return <div className={clsx('content', className)} {...rest}>{children}</div>;
}
Content.displayName = 'MediaBlock.Content';

function Media({ children, className, ...rest }) {
  return <div className={clsx('media', className)} {...rest}>{children}</div>;
}
Media.displayName = 'MediaBlock.Media';

MediaBlock.Content = Content;
MediaBlock.Media = Media;
