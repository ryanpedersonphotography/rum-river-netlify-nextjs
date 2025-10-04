'use client';
import { useState } from 'react';
import Section from 'components/layout/Section';
import Container from 'components/primitives/Container';
import Heading from 'components/primitives/Heading';
import Text from 'components/primitives/Text';
import Button from 'components/primitives/Button';
import Input from 'components/primitives/Input';
import Stack from 'components/primitives/Stack';
import Form from 'components/forms/Form';
import { Field, Select, Textarea } from 'components/forms/controls';
import ScheduleTourForm from 'components/forms/ScheduleTourForm';

export default function FormDemo() {
  const [debug, setDebug] = useState(false);

  return (
    <main>
      <Section size="lg">
        <Container size="lg">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
            <Heading level={1} noMargin>Form Primitives Demo</Heading>
            <button
              onClick={() => setDebug(d => !d)}
              style={{
                padding: 'var(--space-2) var(--space-4)',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-sm)',
                cursor: 'pointer',
                fontSize: 'var(--text-sm)'
              }}
            >
              {debug ? '🔧 Debug ON' : '🔧 Debug OFF'}
            </button>
          </div>

          <Stack direction="vertical" gap="xl">
            {/* Contact Form - 2-column grid */}
            <div>
              <Heading level={2}>Contact Form (2-column grid)</Heading>
              <Text>Default form with Card wrapper, 2-column responsive grid</Text>
              <Form name="contact-demo" grid="2" gap="md" tone="surface">
                <Field label="Full Name" name="fullName" required full>
                  <Input name="fullName" required placeholder="Jane Doe" debug={debug} />
                </Field>

                <Field label="Email Address" name="email" required>
                  <Input type="email" name="email" required placeholder="you@example.com" debug={debug} />
                </Field>

                <Field label="Phone Number" name="phone" hint="Include area code">
                  <Input type="tel" name="phone" placeholder="(555) 123-4567" debug={debug} />
                </Field>

                <Field label="Preferred Contact Method" name="contactMethod">
                  <Select name="contactMethod">
                    <option value="">Select...</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text Message</option>
                  </Select>
                </Field>

                <Field label="Event Type" name="eventType">
                  <Select name="eventType">
                    <option value="">Select...</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="party">Private Party</option>
                  </Select>
                </Field>

                <Field label="Message" name="message" hint="Tell us about your event plans" full>
                  <Textarea name="message" rows={6} placeholder="Your message here..." />
                </Field>

                <div className="field field--full" style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-4)' }}>
                  <Button type="submit" size="lg" tone="brand">Send Message</Button>
                </div>
              </Form>
            </div>

            {/* Newsletter Signup - 1-column grid */}
            <div>
              <Heading level={2}>Newsletter Signup (1-column grid)</Heading>
              <Text>Simple form with muted tone, single column layout</Text>
              <Form name="newsletter-demo" grid="1" gap="sm" tone="muted">
                <Field label="Email Address" name="email" required>
                  <Input type="email" name="email" required placeholder="your@email.com" debug={debug} />
                </Field>

                <div className="field" style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button type="submit" tone="brandAlt">Subscribe</Button>
                </div>
              </Form>
            </div>

            {/* 3-column grid example */}
            <div>
              <Heading level={2}>Event Details (3-column grid)</Heading>
              <Text>Wide form demonstrating 3-column responsive layout</Text>
              <Form name="event-demo" grid="3" gap="lg" tone="accent">
                <Field label="Event Name" name="eventName" required full>
                  <Input name="eventName" required placeholder="Annual Gala" debug={debug} />
                </Field>

                <Field label="Event Date" name="eventDate" required>
                  <Input type="date" name="eventDate" required debug={debug} />
                </Field>

                <Field label="Start Time" name="startTime" required>
                  <Input type="time" name="startTime" required debug={debug} />
                </Field>

                <Field label="End Time" name="endTime" required>
                  <Input type="time" name="endTime" required debug={debug} />
                </Field>

                <Field label="Venue Type" name="venueType">
                  <Select name="venueType">
                    <option value="">Select...</option>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="both">Both</option>
                  </Select>
                </Field>

                <Field label="Expected Guests" name="expectedGuests">
                  <Input type="number" name="expectedGuests" placeholder="100" debug={debug} />
                </Field>

                <Field label="Budget Range" name="budgetRange">
                  <Select name="budgetRange">
                    <option value="">Select...</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-20k">$10,000 - $20,000</option>
                    <option value="over-20k">Over $20,000</option>
                  </Select>
                </Field>

                <Field label="Special Requests" name="specialRequests" full>
                  <Textarea name="specialRequests" rows={4} placeholder="Catering preferences, accessibility needs, etc." />
                </Field>

                <div className="field field--full" style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button type="submit" size="lg" tone="accent">Submit Event Details</Button>
                </div>
              </Form>
            </div>

            {/* Standalone controls */}
            <div>
              <Heading level={2}>Standalone Controls</Heading>
              <Text>Individual form controls demonstrating token-driven styling</Text>
              <Stack direction="vertical" gap="lg">
                <div>
                  <Heading level={3}>Select Dropdown</Heading>
                  <Select name="standalone-select">
                    <option value="">Choose an option...</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </Select>
                </div>

                <div>
                  <Heading level={3}>Textarea</Heading>
                  <Textarea name="standalone-textarea" rows={4} placeholder="Enter your text here..." />
                </div>

                <div>
                  <Heading level={3}>Field with Hint</Heading>
                  <Field
                    label="Password"
                    name="password"
                    hint="Must be at least 8 characters"
                    required
                  >
                    <Input type="password" name="password" required debug={debug} />
                  </Field>
                </div>

                <div>
                  <Heading level={3}>Error State (aria-invalid)</Heading>
                  <Text size="sm">Controls with <code>aria-invalid="true"</code> show error styling</Text>
                  <Stack direction="vertical" gap="md">
                    <Input type="email" aria-invalid="true" placeholder="invalid@example" debug={debug} />
                    <Select aria-invalid="true">
                      <option>Invalid selection</option>
                    </Select>
                    <Textarea aria-invalid="true" placeholder="Invalid input..." rows={3} />
                  </Stack>
                </div>

                <div>
                  <Heading level={3}>Disabled State</Heading>
                  <Stack direction="vertical" gap="md">
                    <Input disabled placeholder="Disabled input" debug={debug} />
                    <Select disabled>
                      <option>Disabled select</option>
                    </Select>
                    <Textarea disabled placeholder="Disabled textarea" rows={3} />
                  </Stack>
                </div>
              </Stack>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Schedule Tour Form - Full Component Demo */}
      <ScheduleTourForm />
    </main>
  );
}
