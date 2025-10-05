import { Field, Select, Textarea } from './controls';
import Input from 'components/primitives/Input';

export default {
  title: 'Forms/Controls',
  tags: ['autodocs'],
};

// Field Component
export const FieldExamples = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-6)', maxWidth: '500px' }}>
      <Field label="Text Input" name="text">
        <Input name="text" placeholder="Enter text" />
      </Field>

      <Field label="Required Field" name="required" required>
        <Input name="required" required placeholder="This field is required" />
      </Field>

      <Field label="With Helper Text" name="helper" helper="This is helper text to guide the user">
        <Input name="helper" placeholder="Input with helper" />
      </Field>

      <Field label="Error State" name="error" error="This field has an error">
        <Input name="error" aria-invalid="true" placeholder="Invalid input" />
      </Field>

      <Field label="Full Width Field" name="full" full>
        <Input name="full" placeholder="This field spans full width in a grid" />
      </Field>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Field wrapper component with label, helper text, and error state support',
      },
    },
  },
};

// Select Component
export const SelectExamples = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-6)', maxWidth: '500px' }}>
      <Field label="Basic Select" name="basic">
        <Select name="basic">
          <option value="">Choose an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Select>
      </Field>

      <Field label="Required Select" name="required-select" required>
        <Select name="required-select" required>
          <option value="">Please select...</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </Select>
      </Field>

      <Field label="Disabled Select" name="disabled-select">
        <Select name="disabled-select" disabled>
          <option value="">Disabled</option>
          <option value="1">Option 1</option>
        </Select>
      </Field>

      <Field label="Select with Groups" name="grouped">
        <Select name="grouped">
          <option value="">Choose a time</option>
          <optgroup label="Morning">
            <option value="9">9:00 AM</option>
            <option value="10">10:00 AM</option>
            <option value="11">11:00 AM</option>
          </optgroup>
          <optgroup label="Afternoon">
            <option value="13">1:00 PM</option>
            <option value="14">2:00 PM</option>
            <option value="15">3:00 PM</option>
          </optgroup>
        </Select>
      </Field>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Select dropdown component with various states and configurations',
      },
    },
  },
};

// Textarea Component
export const TextareaExamples = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-6)', maxWidth: '600px' }}>
      <Field label="Basic Textarea" name="basic-textarea">
        <Textarea name="basic-textarea" rows={4} placeholder="Enter your message..." />
      </Field>

      <Field label="Required Textarea" name="required-textarea" required>
        <Textarea name="required-textarea" rows={4} required placeholder="This field is required" />
      </Field>

      <Field label="Disabled Textarea" name="disabled-textarea">
        <Textarea name="disabled-textarea" rows={4} disabled placeholder="Disabled textarea" />
      </Field>

      <Field label="Tall Textarea" name="tall-textarea" helper="Extra tall for longer content">
        <Textarea name="tall-textarea" rows={8} placeholder="This textarea has 8 rows..." />
      </Field>

      <Field label="Short Textarea" name="short-textarea">
        <Textarea name="short-textarea" rows={2} placeholder="Compact textarea..." />
      </Field>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Textarea component for multi-line text input',
      },
    },
  },
};

// Complete Form Example
export const CompleteFormExample = {
  render: () => (
    <form style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: '600px', padding: 'var(--space-6)', background: 'var(--surface)', borderRadius: 'var(--r-lg)' }}>
      <Field label="Full Name" name="name" required>
        <Input name="name" required placeholder="Jane Doe" />
      </Field>

      <Field label="Email Address" name="email" required helper="We'll never share your email">
        <Input type="email" name="email" required placeholder="you@example.com" />
      </Field>

      <Field label="Phone Number" name="phone">
        <Input type="tel" name="phone" placeholder="(555) 123-4567" />
      </Field>

      <Field label="Preferred Contact Method" name="contact-method" required>
        <Select name="contact-method" required>
          <option value="">Please select...</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="text">Text Message</option>
        </Select>
      </Field>

      <Field label="Your Message" name="message" required full>
        <Textarea name="message" rows={6} required placeholder="Tell us what you're looking for..." />
      </Field>

      <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
        <button type="button" className="btn btn-outline">Cancel</button>
        <button type="submit" className="btn btn-solid">Send Message</button>
      </div>
    </form>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Complete form demonstrating all form controls working together',
      },
    },
  },
};

// Dark mode preview - toggle toolbar to light to compare
export const DarkPreview = {
  parameters: {
    globals: { theme: "dark" },
  },
};

