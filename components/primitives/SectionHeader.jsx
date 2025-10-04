'use client';
import React, { useRef } from 'react';
import clsx from 'clsx';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

/**
 * SectionHeader (reusable section intro)
 * Props:
 *  - accent: optional script text above heading
 *  - title: main heading text (required)
 *  - description: optional lead paragraph
 *  - align: 'left' | 'center' | 'right' (default 'center')
 *  - debug: boolean
 *  - className, style, ...rest
 *
 * Spacing controlled by parent Section size via CSS custom properties:
 *   --title-gap: spacing between accent/title/description
 *   --title-mb: spacing below header block
 *
 * All token-driven, no hardcoded values
 */
export default function SectionHeader({
  accent,
  title,
  description,
  align = 'center',
  debug = false,
  className,
  style,
  ...rest
}) {
  const ref = useRef(null);

  const tokenVars = ['--font-script', '--accent', '--text-xl', '--text-lg', '--title-gap', '--title-mb'];
  const cssProps = ['font-family', 'color', 'font-size', 'text-align', 'gap', 'margin-bottom'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  return (
    <>
      {debug && <DebugPanel data={data} />}
      <div
        ref={ref}
        className={clsx('section__header', className)}
        data-align={align}
        style={style}
        {...rest}
      >
        {accent && (
          <Text
            noMargin
            size="xl"
            align={align}
            style={{
              fontFamily: 'var(--font-script)',
              color: 'var(--accent)'
            }}
          >
            {accent}
          </Text>
        )}

        <Heading noMargin level={2} align={align}>
          {title}
        </Heading>

        {description && (
          <Text
            noMargin
            size="lg"
            align={align}
            style={{ opacity: 'var(--opacity-soft)' }}
          >
            {description}
          </Text>
        )}
      </div>
    </>
  );
}
