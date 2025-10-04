'use client';
import Section from 'components/layout/Section';
import Container from 'components/primitives/Container';
import Grid from 'components/primitives/Grid';
import Spacer from 'components/primitives/Spacer';
import SectionHeader from 'components/primitives/SectionHeader';
import Button from 'components/primitives/Button';
import Input from 'components/primitives/Input';
import Form from 'components/forms/Form';
import { Field, Select, Textarea } from 'components/forms/controls';

/**
 * ScheduleTourForm - Wedding venue tour booking form (token-driven)
 *
 * Props:
 *  - formName: Netlify form name (default 'schedule-tour')
 *  - redirectPath: redirect after submit (default '/thank-you')
 *  - title: main heading text
 *  - subtitle: script accent text
 *  - description: lead paragraph
 *  - submitText: button text (default 'Schedule Tour')
 *  - className: additional classes
 *  - showHeader: boolean (default true)
 *
 * Uses components: Section (brand tone, gradient-blocks), Form (2-col grid), Field, Input, Select, Textarea, Button
 * All styling via design system tokens - zero hardcoded values
 */
export default function ScheduleTourForm({
  formName = 'schedule-tour',
  redirectPath = '/thank-you',
  title = "Start Planning Your Perfect Day",
  subtitle = "Schedule Your Tour",
  description = "We'd love to show you around our beautiful venue and discuss your wedding vision.",
  submitText = 'Schedule Tour',
  className = '',
  showHeader = true
}) {
  return (
    <Section
      tone="brand"
      size="lg"
      align="center"
      noContainer
      style={{ background: 'var(--gradient-blocks)' }}
    >
      {showHeader && (
        <>
          <Grid columns={1} justify="center">
            <SectionHeader
              align="center"
              accent={subtitle}
              title={title}
              description={description}
            />
          </Grid>
          <Spacer size="2xl" />
        </>
      )}

      <Container size="md" center>
        <div className="form-wrap">
            <Form
              name={formName}
              action={redirectPath}
              grid="2"
              gap="md"
              tone="surface"
              asCard={false}
            >
              {/* Full Name */}
              <Field label="Your Name" name="name" required full>
                <Input name="name" required placeholder="Jane Doe" />
              </Field>

              {/* Email */}
              <Field label="Email Address" name="email" required>
                <Input type="email" name="email" required placeholder="you@example.com" />
              </Field>

              {/* Phone */}
              <Field label="Phone Number" name="phone" required>
                <Input type="tel" name="phone" required placeholder="(555) 123-4567" />
              </Field>

              {/* Event Date */}
              <Field label="Proposed Event Date" name="proposedEventDate">
                <Input type="date" name="proposedEventDate" />
              </Field>

              {/* Tour Date */}
              <Field label="Preferred Tour Date" name="preferredTourDate" required>
                <Input type="date" name="preferredTourDate" required />
              </Field>

              {/* Tour Time */}
              <Field label="Preferred Tour Time" name="preferredTourTime">
                <Select name="preferredTourTime">
                  <option value="">Select Time</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                </Select>
              </Field>

              {/* Guest Count */}
              <Field label="Estimated Guest Count" name="guestCount">
                <Select name="guestCount">
                  <option value="">Select Range</option>
                  <option>50-100</option>
                  <option>100-150</option>
                  <option>150-200</option>
                  <option>200+</option>
                </Select>
              </Field>

              {/* Message */}
              <Field
                label="Additional Information or Questions"
                name="message"
                full
              >
                <Textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your event plans or any specific questions..."
                />
              </Field>

              {/* Submit */}
              <div
                className="field field--full"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: 'var(--space-4)'
                }}
              >
                <Button type="submit" size="lg" tone="brand">
                  {submitText}
                </Button>
              </div>
            </Form>
        </div>
      </Container>
    </Section>
  );
}
