import Input from 'components/primitives/Input';

export const metadata = {
  title: 'Input Demo'
};

export default function InputDemo() {
  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '24px' }}>
      <h1 style={{ 
        fontFamily: 'var(--font-display)', 
        fontSize: 'var(--text-4xl)', 
        marginBottom: 'var(--space-8)' 
      }}>
        Input Component Demo
      </h1>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Input Types
        </h2>
        <div style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: '400px' }}>
          <Input type="text" placeholder="Text input" />
          <Input type="email" placeholder="Email input" />
          <Input type="password" placeholder="Password input" />
          <Input type="number" placeholder="Number input" />
          <Input type="search" placeholder="Search input" />
          <Input type="url" placeholder="URL input" />
          <Input type="tel" placeholder="Phone input" />
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Sizes
        </h2>
        <div style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: '400px' }}>
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input (default)" />
          <Input size="lg" placeholder="Large input" />
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          States
        </h2>
        <div style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: '400px' }}>
          <Input placeholder="Default state" />
          <Input placeholder="Focused state (click to focus)" />
          <Input disabled placeholder="Disabled input" />
          <Input defaultValue="Input with value" />
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Form Layout Example
        </h2>
        <form style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: '400px' }}>
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: 'var(--space-2)', 
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--weight-medium)'
            }}>
              Full Name
            </label>
            <Input type="text" placeholder="Enter your full name" />
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: 'var(--space-2)', 
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--weight-medium)'
            }}>
              Email Address
            </label>
            <Input type="email" placeholder="Enter your email" />
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: 'var(--space-2)', 
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--weight-medium)'
            }}>
              Phone Number
            </label>
            <Input type="tel" placeholder="(555) 123-4567" />
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: 'var(--space-2)', 
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--weight-medium)'
            }}>
              Message
            </label>
            <textarea 
              className="input"
              rows={4}
              placeholder="Enter your message..."
              style={{ resize: 'vertical', minHeight: '100px' }}
            />
          </div>
        </form>
      </section>

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Specialized Inputs
        </h2>
        <div style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: '400px' }}>
          <Input type="date" />
          <Input type="time" />
          <Input type="datetime-local" />
          <Input type="color" defaultValue="#9D6B7B" />
          <Input type="range" min="0" max="100" defaultValue="50" />
        </div>
      </section>

      <section>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Usage Code Examples
        </h2>
        <div style={{ 
          background: 'var(--surface)', 
          padding: 'var(--space-6)', 
          borderRadius: 'var(--r-md)',
          border: '1px solid var(--border)',
          fontSize: 'var(--text-sm)',
          fontFamily: 'monospace'
        }}>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Input type="text" placeholder="Default input" />`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Input type="email" size="lg" placeholder="Large email input" />`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Input type="password" size="sm" placeholder="Small password" />`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Input disabled placeholder="Disabled input" />`}</code>
          </div>
          <div>
            <code>{`<textarea className="input" rows={4} placeholder="Textarea" />`}</code>
          </div>
        </div>
      </section>
    </main>
  );
}