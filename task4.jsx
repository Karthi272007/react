// File name: TextInput.jsx
import React from 'react';

function TextInput({ label, type = 'text', value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
        {label}:
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ padding: '8px', width: '100%', maxWidth: '300px', boxSizing: 'border-box' }}
      />
    </div>
  );
}

export default TextInput;
//---------------------------------------------------------------------------------------------------------------------------------------------

// File name: SignupForm.jsx
import React, { useState } from 'react';
import TextInput from './TextInput';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = name.trim() !== '' && isEmailValid && password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setSubmittedData({ name, email, password: '••••••••' });
    }
  };

  const handleClear = () => {
    setName('');
    setEmail('');
    setPassword('');
    setSubmittedData(null);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h2>Signup Form</h2>
      
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <div style={{ marginTop: '15px' }}>
          <button 
            type="submit" 
            disabled={!isFormValid}
            style={{ 
              padding: '8px 15px', 
              marginRight: '10px', 
              cursor: isFormValid ? 'pointer' : 'not-allowed',
              backgroundColor: isFormValid ? '#007bff' : '#cccccc',
              color: '#fff',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Submit
          </button>

          <button 
            type="button" 
            onClick={handleClear}
            style={{ 
              padding: '8px 15px', 
              cursor: 'pointer',
              backgroundColor: '#6c757d',
              color: '#fff',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Clear
          </button>
        </div>
      </form>

      {/* Preview Panel */}
      {submittedData && (
        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
          <h3>Form Data Preview</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default SignupForm;
//---------------------------------------------------------------------------------------------------------------------------------------------
// File name: App.jsx
import React from 'react';
import SignupForm from './pages/SignupForm';

function App() {
  return (
    <div>
      <SignupForm />
    </div>
  );
}

export default App;
