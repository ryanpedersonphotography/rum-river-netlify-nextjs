import Form from './Form';
import { Field, Select, Textarea } from './controls';
import Input from 'components/primitives/Input';
import Button from 'components/primitives/Button';

export default {
  title: 'Forms/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    grid: {
      control: 'select',
      options: ['1', '2'],
      description: 'Number of columns',
    },
    gap: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Gap between form fields',
    },
    card: {
      control: 'boolean',
      description: 'Wrap form in card styling',
    },
    tone: {
      control: 'select',
      options: ['surface', 'brand', 'accent', 'muted'],
      description: 'Background tone (when card=true)',
    },
  },
};

export const ContactForm = {
  render: () => (
    <Form name="contact-demo" grid="2" gap="md" card>
      <Field label="Your Name" name="name" required full>
        <Input name="name" required placeholder="Jane Doe" />
      </Field>

      <Field label="Email" name="email" required>
        <Input type="email" name="email" required placeholder="you@example.com" />
      </Field>

      <Field label="Phone" name="phone">
        <Input type="tel" name="phone" placeholder="(555) 123-4567" />
      </Field>

      <Field label="Message" name="message" full>
        <Textarea name="message" rows={5} placeholder="Your message..." />
      </Field>

      <div className="field field--full" style={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="submit">Send Message</Button>
      </div>
    </Form>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const SingleColumn = {
  render: () => (
    <Form name="newsletter-demo" grid="1" gap="md" card>
      <Field label="Email Address" name="email" required full>
        <Input type="email" name="email" required placeholder="you@example.com" />
      </Field>

      <Field label="Your Name" name="name" full>
        <Input name="name" placeholder="Jane Doe" />
      </Field>

      <div className="field field--full">
        <Button type="submit" style={{ width: '100%' }}>Subscribe</Button>
      </div>
    </Form>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const TwoColumnLayout = {
  render: () => (
    <Form name="booking-demo" grid="2" gap="lg" card>
      <Field label="First Name" name="firstName" required>
        <Input name="firstName" required placeholder="Jane" />
      </Field>

      <Field label="Last Name" name="lastName" required>
        <Input name="lastName" required placeholder="Doe" />
      </Field>

      <Field label="Email" name="email" required>
        <Input type="email" name="email" required placeholder="you@example.com" />
      </Field>

      <Field label="Phone" name="phone">
        <Input type="tel" name="phone" placeholder="(555) 123-4567" />
      </Field>

      <Field label="Date" name="date" required>
        <Input type="date" name="date" required />
      </Field>

      <Field label="Time" name="time" required>
        <Select name="time" required>
          <option value="">Select a time</option>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="14:00">2:00 PM</option>
          <option value="15:00">3:00 PM</option>
        </Select>
      </Field>

      <Field label="Special Requests" name="requests" full>
        <Textarea name="requests" rows={4} placeholder="Any special requests or questions..." />
      </Field>

      <div className="field field--full" style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-3)' }}>
        <Button type="submit">Submit Booking</Button>
        <Button type="button" variant="outline">Cancel</Button>
      </div>
    </Form>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const NoCardStyling = {
  render: () => (
    <Form name="simple-demo" grid="1" gap="md">
      <Field label="Email" name="email" required full>
        <Input type="email" name="email" required placeholder="your@email.com" />
      </Field>

      <Field label="Password" name="password" required full>
        <Input type="password" name="password" required placeholder="••••••••" />
      </Field>

      <div className="field field--full">
        <Button type="submit">Sign In</Button>
      </div>
    </Form>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const ToneVariants = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Surface Tone</h4>
        <Form name="surface-demo" grid="1" gap="sm" card tone="surface">
          <Field label="Name" name="name" full>
            <Input name="name" placeholder="Your name" />
          </Field>
          <div className="field field--full">
            <Button size="sm" type="submit">Submit</Button>
          </div>
        </Form>
      </div>

      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Brand Tone</h4>
        <Form name="brand-demo" grid="1" gap="sm" card tone="brand">
          <Field label="Name" name="name" full>
            <Input name="name" placeholder="Your name" />
          </Field>
          <div className="field field--full">
            <Button size="sm" type="submit">Submit</Button>
          </div>
        </Form>
      </div>

      <div>
        <h4 style={{ marginBottom: 'var(--space-3)' }}>Accent Tone</h4>
        <Form name="accent-demo" grid="1" gap="sm" card tone="accent">
          <Field label="Name" name="name" full>
            <Input name="name" placeholder="Your name" />
          </Field>
          <div className="field field--full">
            <Button size="sm" type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Dark mode preview - toggle toolbar to light to compare
export const DarkPreview = {
  parameters: {
    globals: { theme: "dark" },
  },
};

