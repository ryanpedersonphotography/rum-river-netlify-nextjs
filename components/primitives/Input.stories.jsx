import Input from './Input';

export default {
  title: 'Primitives/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'date', 'number', 'url'],
      description: 'HTML input type',
    },
    required: {
      control: 'boolean',
      description: 'Required field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export const Default = {
  args: {
    name: 'example',
    placeholder: 'Enter text...',
    type: 'text',
  },
};

export const InputTypes = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: '400px' }}>
      <div>
        <label htmlFor="text-input" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
          Text Input
        </label>
        <Input id="text-input" name="text" type="text" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email-input" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
          Email Input
        </label>
        <Input id="email-input" name="email" type="email" placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="password-input" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
          Password Input
        </label>
        <Input id="password-input" name="password" type="password" placeholder="••••••••" />
      </div>
      <div>
        <label htmlFor="tel-input" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
          Phone Input
        </label>
        <Input id="tel-input" name="phone" type="tel" placeholder="(555) 123-4567" />
      </div>
      <div>
        <label htmlFor="date-input" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
          Date Input
        </label>
        <Input id="date-input" name="date" type="date" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const States = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: '400px' }}>
      <div>
        <label htmlFor="normal-input" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
          Normal
        </label>
        <Input id="normal-input" name="normal" placeholder="Normal state" />
      </div>
      <div>
        <label htmlFor="required-input" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
          Required *
        </label>
        <Input id="required-input" name="required" required placeholder="This field is required" />
      </div>
      <div>
        <label htmlFor="disabled-input" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
          Disabled
        </label>
        <Input id="disabled-input" name="disabled" disabled placeholder="Disabled input" />
      </div>
      <div>
        <label htmlFor="error-input" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500, color: 'var(--error, #d32f2f)' }}>
          Error State
        </label>
        <Input id="error-input" name="error" aria-invalid="true" placeholder="Invalid input" />
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--error, #d32f2f)', marginTop: 'var(--space-1)', display: 'block' }}>
          This field has an error
        </span>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Comprehensive form in dark mode to test all states
export const DarkModeStressTest = {
  args: {},
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-6)', maxWidth: '500px' }}>
      <div>
        <h3 style={{ marginTop: 0, marginBottom: 'var(--space-4)' }}>
          Dark Mode Form Stress Test
        </h3>
        <p style={{ opacity: 0.8, marginBottom: 'var(--space-6)' }}>
          Testing placeholder contrast, disabled states, error states, and autofill in dark mode.
        </p>
      </div>

      <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
        <div>
          <label htmlFor="dark-text" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
            Normal Input
          </label>
          <Input id="dark-text" name="text" type="text" placeholder="Placeholder text should be readable" />
        </div>

        <div>
          <label htmlFor="dark-email" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
            Email (test autofill)
          </label>
          <Input id="dark-email" name="email" type="email" placeholder="your@email.com" autoComplete="email" />
          <span style={{ fontSize: 'var(--text-sm)', opacity: 0.7, marginTop: 'var(--space-1)', display: 'block' }}>
            Trigger browser autofill to test styling
          </span>
        </div>

        <div>
          <label htmlFor="dark-disabled" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500, opacity: 0.6 }}>
            Disabled Input
          </label>
          <Input id="dark-disabled" name="disabled" disabled placeholder="Disabled state" defaultValue="Cannot edit this" />
        </div>

        <div>
          <label htmlFor="dark-error" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500, color: 'var(--error)' }}>
            Error State *
          </label>
          <Input
            id="dark-error"
            name="error"
            type="email"
            aria-invalid="true"
            placeholder="invalid@email"
            defaultValue="not-an-email"
          />
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--error)', marginTop: 'var(--space-1)', display: 'block' }}>
            Please enter a valid email address
          </span>
        </div>

        <div>
          <label htmlFor="dark-password" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
            Password (focus state test)
          </label>
          <Input id="dark-password" name="password" type="password" placeholder="••••••••" />
          <span style={{ fontSize: 'var(--text-sm)', opacity: 0.7, marginTop: 'var(--space-1)', display: 'block' }}>
            Click to test focus ring visibility in dark mode
          </span>
        </div>

        <div>
          <label htmlFor="dark-required" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
            Required Field *
          </label>
          <Input id="dark-required" name="required" required placeholder="This field is required" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    globals: { theme: 'dark' },
  },
};

// Dark mode preview - toggle toolbar to light to compare
export const DarkPreview = {
  parameters: {
    globals: { theme: "dark" },
  },
};

