// File name: CounterReducer.jsx
import React, { useReducer, useEffect } from 'react';

const initialState = {
  count: Number(localStorage.getItem('count')) || 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('count', state.count);
  }, [state.count]);

  return (
    <div style={{ margin: '10px 0', padding: '15px', border: '1px solid #ccc' }}>
      <h3>Counter: {state.count}</h3>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{ margin: '0 5px' }}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default CounterReducer;
//----------------------------------------------------------------------------------------------------------------------------------

// File name: LiveInput.jsx
import React, { useState, useRef } from 'react';

function LiveInput() {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ margin: '10px 0', padding: '15px', border: '1px solid #ccc' }}>
      <h3>Live Preview & Ref Focus</h3>
      <input 
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleFocus} style={{ marginLeft: '10px' }}>Focus</button>
      <p><strong>Preview:</strong> {text}</p>
    </div>
  );
}

export default LiveInput;
//----------------------------------------------------------------------------------------------------------------------------------
// File name: ThemeToggle.jsx
import React, { useState } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyle = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
    padding: '15px',
    border: '1px solid #ccc',
    margin: '10px 0',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={themeStyle}>
      <h3>Theme Switcher</h3>
      <label>
        <input 
          type="checkbox" 
          checked={darkMode} 
          onChange={() => setDarkMode(!darkMode)} 
        />
        {' '}Dark Mode
      </label>
    </div>
  );
}

export default ThemeToggle;
//----------------------------------------------------------------------------------------------------------------------------------
// File name: App.jsx
import React from 'react';
import CounterReducer from './pages/CounterReducer';
import LiveInput from './pages/LiveInput';
import ThemeToggle from './pages/ThemeToggle';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>React Hooks & State Management Dashboard</h2>
      <CounterReducer />
      <LiveInput />
      <ThemeToggle />
    </div>
  );
}

export default App;
