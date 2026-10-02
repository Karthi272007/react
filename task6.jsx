// File name: Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '15px', background: '#f4f4f4', marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff' }}>About</Link>
      <Link to="/users" style={{ textDecoration: 'none', color: '#007bff' }}>Users</Link>
    </nav>
  );
}

export default Navbar;

// File name: Home.jsx
import React from 'react';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Home Page</h2>
      <p>Welcome to our application!</p>
    </div>
  );
}

export default Home;

// File name: About.jsx
import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>About Page</h2>
      <p>This is a learning project built with React Router.</p>
    </div>
  );
}

export default About;

// File name: Users.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const userList = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Users List</h2>
      <ul style={{ paddingLeft: '20px' }}>
        {userList.map(user => (
          <li key={user.id} style={{ marginBottom: '8px' }}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

// File name: UserDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Details</h2>
      <p>Viewing details for User ID: <strong>{id}</strong></p>
      
      <button 
        onClick={() => navigate('/users')}
        style={{ padding: '6px 12px', cursor: 'pointer', marginTop: '10px' }}
      >
        Back to Users
      </button>
    </div>
  );
}

export default UserDetail;

// File name: App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'sans-serif' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
