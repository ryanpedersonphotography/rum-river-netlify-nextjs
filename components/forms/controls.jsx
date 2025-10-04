'use client';
import React from 'react';
import clsx from 'clsx';

/**
 * Field - Label + Control + Hint wrapper (token-driven)
 * Props:
 *  - label: string (visible label text)
 *  - name: string (required, ties label to input)
 *  - hint: string (help text below control)
 *  - required: boolean (shows asterisk, sets aria-required)
 *  - full: boolean (spans all columns in grid)
 *  - className, ...rest
 *
 * Uses tokens: --space-2, --label-size, --hint-size
 */
export const Field = ({
  label,
  name,
  hint,
  required,
  full,
  children,
  className,
  ...rest
}) => (
  <div className={clsx('field', full && 'field--full', className)} {...rest}>
    {label && (
      <label className="label" htmlFor={name}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
    )}
    <div className="control">{children}</div>
    {hint && <div className="help">{hint}</div>}
  </div>
);

/**
 * Select - Dropdown control (token-driven)
 * Props:
 *  - name: string (required)
 *  - required: boolean
 *  - disabled: boolean
 *  - aria-invalid: boolean (error state styling)
 *  - className, ...rest
 *
 * Uses tokens: --control-pad-y/x, --control-radius, --control-size, --border, --focus-ring
 */
export const Select = ({
  id,
  name,
  required,
  disabled,
  children,
  'aria-invalid': invalid,
  className,
  ...rest
}) => (
  <select
    id={id || name}
    name={name}
    required={required}
    disabled={disabled}
    aria-invalid={invalid}
    className={clsx('form-control', 'select', className)}
    {...rest}
  >
    {children}
  </select>
);

/**
 * Textarea - Multi-line input (token-driven)
 * Props:
 *  - name: string (required)
 *  - rows: number (default 5)
 *  - required: boolean
 *  - disabled: boolean
 *  - placeholder: string
 *  - aria-invalid: boolean (error state styling)
 *  - className, ...rest
 *
 * Uses tokens: --control-pad-y/x, --control-radius, --control-size, --border, --focus-ring
 */
export const Textarea = ({
  id,
  name,
  required,
  disabled,
  placeholder,
  rows = 5,
  'aria-invalid': invalid,
  className,
  ...rest
}) => (
  <textarea
    id={id || name}
    name={name}
    required={required}
    disabled={disabled}
    placeholder={placeholder}
    rows={rows}
    aria-invalid={invalid}
    className={clsx('form-control', 'textarea', className)}
    {...rest}
  />
);
