'use client';
import React, { useRef } from 'react';
import clsx from 'clsx';
import useResolvedTokens from 'components/dev/useResolvedTokens';
import DebugPanel from 'components/dev/DebugPanel';

/**
 * Grid (token-driven CSS grid)
 * Props:
 *  - as: HTML element (default 'div')
 *  - columns: number | 'auto-fit' | 'auto-fill' | '1' | '2' | '3' | '4'
 *  - gap: 'xs' | 'sm' | 'md' | 'lg' | 'xl' (maps to spacing tokens)
 *  - minItemWidth: string (e.g., '250px', '20rem') - for auto-responsive grids
 *  - align: 'start' | 'center' | 'end' | 'stretch'
 *  - justify: 'start' | 'center' | 'end' | 'stretch'
 *  - debug: boolean
 *  - className, style, children, ...rest
 *
 * Uses spacing tokens from globals.css:
 *   --space-2 through --space-8
 */
export default function Grid({  
  as: Tag = 'div',
  columns = 'auto-fit',
  gap = 'md',
  minItemWidth = '250px',
  align = 'stretch',
  justify = 'stretch',
  justifyItems = 'stretch', 
  debug = false,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  const classes = clsx(
    'grid',
    `grid--gap-${gap}`,
    typeof columns === 'number' && `grid--cols-${columns}`,
    columns === 'auto-fit' && 'grid--auto-fit',
    columns === 'auto-fill' && 'grid--auto-fill',
    align !== 'stretch' && `grid--align-${align}`,
    justify !== 'stretch' && `grid--justify-${justify}`,
    className
  );

  const tokenVars = ['--space-2', '--space-3', '--space-4', '--space-6', '--space-8'];
  const cssProps = ['gap', 'grid-template-columns', 'align-items', 'justify-items'];
  const data = useResolvedTokens({ tokenVars, cssProps, scope: ref.current, enabled: debug });

  // Custom grid template for auto-responsive
  const gridStyle = (columns === 'auto-fit' || columns === 'auto-fill') ? {
    '--grid-min-item-width': minItemWidth,
    ...style
  } : style;

  return (
    <>
      {debug && <DebugPanel classes={classes} data={data} />}
      <Tag
        ref={ref}
        className={classes}
        style={gridStyle}
        {...rest}
      >
        {children}
      </Tag>
    </>
  );
}
