'use client';
import React from 'react';
import clsx from 'clsx';

/**
 * Input - Text input control (token-driven)
 * Props:
 *  - id: string (auto-generated from name if not provided)
 *  - name: string (required for forms)
 *  - type: 'text' | 'email' | 'password' | 'tel' | 'date' | 'number' | etc.
 *  - required: boolean
 *  - disabled: boolean
 *  - placeholder: string
 *  - aria-invalid: boolean (error state styling)
 *  - className, ...rest
 *
 * Uses tokens: --control-pad-y/x, --control-radius, --control-size, --border, --focus-ring
 */
export default function Input({
  id,
  name,
  type = 'text',
  required,
  disabled,
  placeholder,
  'aria-invalid': invalid,
  className,
  ...rest
}) {
  return (
    <input
      id={id || name}
      name={name}
      type={type}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      aria-invalid={invalid}
      className={clsx('form-control', className)}
      {...rest}
    />
  );
}