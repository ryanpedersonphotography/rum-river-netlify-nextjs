'use client';
import React, { useMemo, useState, useEffect } from 'react';

import Section from 'components/layout/Section';
import Container from 'components/primitives/Container';
import Grid from 'components/primitives/Grid';
import SectionHeader from 'components/primitives/SectionHeader';
import Spacer from 'components/primitives/Spacer';

import Form from 'components/forms/Form';
import { Field, Select, Textarea } from 'components/forms/controls';
import Input from 'components/primitives/Input';
import Button from 'components/primitives/Button';

/** @typedef {import('types/fields.schema').FieldConfig} FieldConfig */
/** @typedef {import('types/fields.schema').ScheduleHeader} ScheduleHeader */

/**
 * ScheduleTourForm - Configurable form section component
 *
 * A reusable section component that renders forms with configurable fields.
 * Uses existing primitives underneath while providing a clean API for
 * common form patterns (tour booking, contact, lead capture, etc.)
 *
 * @param {Object} props
 * @param {string} props.formName - Netlify form name (default: 'schedule-tour')
 * @param {string} props.redirectPath - Post-submit redirect (default: '/thank-you')
 * @param {string} props.tone - Section tone: 'brand'|'surface'|'accent'|'muted' (default: 'brand')
 * @param {string} props.size - Section size: 'sm'|'md'|'lg'|'xl' (default: 'lg')
 * @param {ScheduleHeader} props.header - Header content object
 * @param {string} props.background - Background token name: 'gradient-blocks'|'gradient-hero'|'none' (default: 'none')
 * @param {FieldConfig[]} props.fields - Field configuration array
 * @param {string} props.submitText - Submit button text (default: 'Schedule Tour')
 * @param {Function} props.submitRender - Optional custom submit button renderer: ({ submitting }) => ReactNode
 * @param {string} props.className - Additional CSS classes
 *
 * @example
 * <ScheduleTourForm
 *   formName="home-schedule-tour"
 *   tone="brand"
 *   background="gradient-blocks"
 *   header={{
 *     accent: 'Schedule Your Tour',
 *     title: 'Start Planning Your Perfect Day',
 *     description: "We'd love to show you around...",
 *   }}
 *   fields={[
 *     { type:'text', name:'name', label:'Name *', required:true, full:true },
 *     { type:'email', name:'email', label:'Email *', required:true },
 *   ]}
 *   submitText="Schedule Tour"
 * />
 */
export default function ScheduleTourForm({
  formName = 'schedule-tour',
  redirectPath = '/thank-you',
  tone = 'brand',
  size = 'lg',
  header = {
    accent: 'Schedule Your Tour',
    title: 'Start Planning Your Perfect Day',
    description: "We'd love to show you around our beautiful venue and discuss your wedding vision.",
    align: 'center',
  },
  background = 'none',
  fields = [],
  submitText = 'Schedule Tour',
  submitRender,
  className,
}) {
  const [values, setValues] = useState({});

  // Initialize default values
  useEffect(() => {
    const initial = {};
    for (const f of fields) {
      if (f?.defaultValue !== undefined) initial[f.name] = f.defaultValue;
    }
    if (Object.keys(initial).length) setValues((v) => ({ ...initial, ...v }));
  }, [fields]);

  const handleChange = (name) => (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setValues((v) => ({ ...v, [name]: value }));
  };

  // Render fields dynamically based on type
  const renderedFields = useMemo(() => {
    return fields.map((f) => {
      const common = {
        id: f.name,
        name: f.name,
        required: !!f.required,
        placeholder: f.placeholder,
        defaultValue: f.defaultValue,
        autoComplete: f.autoComplete,
        onChange: handleChange(f.name),
        'aria-invalid': false,
      };

      let control = null;
      switch (f.type) {
        case 'select':
          control = (
            <Select {...common}>
              <option value="" />
              {(f.options || []).map((opt) =>
                typeof opt === 'string'
                  ? <option key={opt} value={opt}>{opt}</option>
                  : <option key={opt.value} value={opt.value}>{opt.label}</option>
              )}
            </Select>
          );
          break;
        case 'textarea':
          control = <Textarea {...common} rows={f.rows || 5} />;
          break;
        case 'date':
        case 'email':
        case 'tel':
        case 'text':
        default:
          control = <Input {...common} type={f.type || 'text'} />;
          break;
      }

      return (
        <Field
          key={f.name}
          label={f.label}
          name={f.name}
          required={f.required}
          hint={f.hint}
          full={f.full}
        >
          {control}
        </Field>
      );
    });
  }, [fields]);

  // Map background token to CSS custom property
  const sectionStyle =
    background && background !== 'none'
      ? { background: `var(--${background})` }
      : undefined;

  // Default submit renderer (used if submitRender not provided)
  const defaultSubmitRender = ({ submitting }) => (
    <div
      className="field field--full"
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 'var(--space-4)'
      }}
    >
      <Button type="submit" tone={tone} size="lg" disabled={submitting}>
        {submitting ? 'Submitting…' : submitText}
      </Button>
    </div>
  );

  return (
    <Section
      tone={tone}
      size={size}
      align={header.align || 'center'}
      noContainer
      style={sectionStyle}
      className={className}
    >
      <Grid columns={1} justify="center">
        <SectionHeader
          align={header.align || 'center'}
          accent={header.accent}
          title={header.title}
          description={header.description}
        />
      </Grid>

      <Spacer size="2xl" />

      <Container size="md" center>
        <div className="form-wrap">
          <Form
            name={formName}
            action={redirectPath}
            grid="2"
            gap="md"
            tone="surface"
            asCard={false}
            submitRender={submitRender || defaultSubmitRender}
          >
            {renderedFields}
          </Form>
        </div>
      </Container>
    </Section>
  );
}
