'use client';
import { useState } from 'react';
import Input from 'components/primitives/Input';

export default function InputDemo() {
  const [debug, setDebug] = useState(false);

  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '24px' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'var(--space-8)' }}>
        <h1 style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: 'var(--text-4xl)', 
          margin: 0
        }}>
          Input Component Demo
        </h1>
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

      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ 
          fontSize: 'var(--text-2xl)', 
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)'
        }}>
          Input Types
        </h2>
        <div style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: '400px' }}>
          <Input debug={debug} type="text" placeholder="Text input" />
          <Input debug={debug} type="email" placeholder="Email input" />
          <Input debug={debug} type="password" placeholder="Password input" />
          <Input debug={debug} type="number" placeholder="Number input" />
          <Input debug={debug} type="search" placeholder="Search input" />
          <Input debug={debug} type="url" placeholder="URL input" />
          <Input debug={debug} type="tel" placeholder="Phone input" />
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
          <Input debug={debug} size="sm" placeholder="Small input" />
          <Input debug={debug} size="md" placeholder="Medium input (default)" />
          <Input debug={debug} size="lg" placeholder="Large input" />
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
          <Input debug={debug} placeholder="Default state" />
          <Input debug={debug} placeholder="Focused state (click to focus)" />
          <Input debug={debug} disabled placeholder="Disabled input" />
          <Input debug={debug} defaultValue="Input with value" />
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
            <Input debug={debug} type="text" placeholder="Enter your full name" />
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
            <Input debug={debug} type="email" placeholder="Enter your email" />
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
            <Input debug={debug} type="tel" placeholder="(555) 123-4567" />
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
          <Input debug={debug} type="date" />
          <Input debug={debug} type="time" />
          <Input debug={debug} type="datetime-local" />
          <Input debug={debug} type="color" defaultValue="#9D6B7B" />
          <Input debug={debug} type="range" min="0" max="100" defaultValue="50" />
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
            <code>{`<Input debug={debug} type="text" placeholder="Default input" />`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Input debug={debug} type="email" size="lg" placeholder="Large email input" />`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Input debug={debug} type="password" size="sm" placeholder="Small password" />`}</code>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <code>{`<Input debug={debug} disabled placeholder="Disabled input" />`}</code>
          </div>
          <div>
            <code>{`<textarea className="input" rows={4} placeholder="Textarea" />`}</code>
          </div>
        </div>
      </section>
    </main>
  );
}