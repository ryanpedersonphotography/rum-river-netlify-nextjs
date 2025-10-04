'use client';
import React, { useRef } from 'react';
import clsx from 'clsx';
import Stack from 'components/primitives/Stack';
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
 * Uses primitives: Stack, Heading, Text
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

  const tokenVars = ['--font-script', '--accent', '--text-xl', '--text-lg'];
  const cssProps = ['font-family', 'color', 'font-size', 'text-align'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  return (
    <>
      {debug && <DebugPanel data={data} />}
      <Stack
        ref={ref}
        direction="vertical"
        gap="md"
        align={align === 'center' ? 'center' : 'stretch'}
        className={clsx('section-header', className)}
        style={style}
        {...rest}
      >
        {accent && (
          <Text
            size="xl"
            noMargin
            align={align}
            style={{
              fontFamily: 'var(--font-script)',
              color: 'var(--accent)'
            }}
          >
            {accent}
          </Text>
        )}

        <Heading level={2} noMargin align={align}>
          {title}
        </Heading>

        {description && (
          <Text
            size="lg"
            align={align}
            style={{ opacity: 'var(--opacity-soft)' }}
          >
            {description}
          </Text>
        )}
      </Stack>
    </>
  );
}
