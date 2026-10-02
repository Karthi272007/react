// File name: FetchOnMount.jsx
import React, { useState, useEffect } from 'react';

function FetchOnMount() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '4px' }}>
      <h3>1. Fetch on Mount</h3>
      {loading ? <p>Loading users...</p> : (
        <ul style={{ paddingLeft: '20px', margin: '5px 0' }}>
          {users.slice(0, 3).map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
      )}
    </div>
  );
}

export default FetchOnMount;
//--------------------------------------------------------------------------------------------------------------------------------------------
// File name: MemoizedRefresh.jsx
import React, { useState, useCallback } from 'react';

function MemoizedRefresh() {
  const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString());

  const handleRefresh = useCallback(() => {
    setTimestamp(new Date().toLocaleTimeString());
  }, []);

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '4px' }}>
      <h3>2. Memoized Refresh (`useCallback`)</h3>
      <p>Last Refreshed: {timestamp}</p>
      <button onClick={handleRefresh} style={{ padding: '6px 12px', cursor: 'pointer' }}>
        Refresh Time
      </button>
    </div>
  );
}

export default MemoizedRefresh;
//--------------------------------------------------------------------------------------------------------------------------------------------
// File name: DerivedValue.jsx
import React, { useState, useMemo } from 'react';

function DerivedValue() {
  const [numbers] = useState([10, 20, 30, 40, 50]);
  const [count, setCount] = useState(0);

  const expensiveSum = useMemo(() => {
    console.log('Computing expensive derived value...');
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '4px' }}>
      <h3>3. Expensive Derived Value (`useMemo`)</h3>
      <p>Numbers: {numbers.join(', ')}</p>
      <p><strong>Sum (Derived):</strong> {expensiveSum}</p>
      <button onClick={() => setCount(count + 1)} style={{ padding: '6px 12px', cursor: 'pointer' }}>
        Re-render Trigger ({count})
      </button>
    </div>
  );
}

export default DerivedValue;
//--------------------------------------------------------------------------------------------------------------------------------------------
// File name: FilteredEffect.jsx
import React, { useState, useEffect } from 'react';

function FilteredEffect() {
  const [filterId, setFilterId] = useState('1');
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    console.log(`Refetching due to filter change: ${filterId}`);
    fetch(`https://jsonplaceholder.typicode.com/todos/${filterId}`)
      .then(res => res.json())
      .then(data => setTodo(data))
      .catch(err => console.error(err));
  }, [filterId]);

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '4px' }}>
      <h3>4. Effect Dependencies (Filter Change)</h3>
      <label>Select Todo ID (1-5): </label>
      <select value={filterId} onChange={(e) => setFilterId(e.target.value)} style={{ padding: '4px' }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      {todo && <p style={{ marginTop: '8px' }}><strong>Todo Title:</strong> {todo.title}</p>}
    </div>
  );
}

export default FilteredEffect;
//--------------------------------------------------------------------------------------------------------------------------------------------
// File name: CleanupEffect.jsx
import React, { useState, useEffect } from 'react';

function CleanupEffect() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '4px' }}>
      <h3>5. Effect Cleanup Demo</h3>
      <button onClick={() => setShow(!show)} style={{ padding: '6px 12px', cursor: 'pointer', marginBottom: '8px' }}>
        {show ? 'Unmount Timer Component' : 'Mount Timer Component'}
      </button>
      {show && <TimerWithCleanup />}
    </div>
  );
}

function TimerWithCleanup() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick running...');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('Cleanup: Timer cleared on unmount!');
    };
  }, []);

  return <p style={{ color: 'green', fontStyle: 'italic', margin: '4px 0' }}>Timer is active (check console for cleanup logs)</p>;
}

export default CleanupEffect;
//--------------------------------------------------------------------------------------------------------------------------------------------
// File name: App.jsx
import React from 'react';
import FetchOnMount from './pages/FetchOnMount';
import MemoizedRefresh from './pages/MemoizedRefresh';
import DerivedValue from './pages/DerivedValue';
import FilteredEffect from './pages/FilteredEffect';
import CleanupEffect from './pages/CleanupEffect';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2>React Advanced Hooks Dashboard</h2>
      <FetchOnMount />
      <MemoizedRefresh />
      <DerivedValue />
      <FilteredEffect />
      <CleanupEffect />
    </div>
  );
}

export default App;
