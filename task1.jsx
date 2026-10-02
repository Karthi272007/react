// File name: Button.jsx
import React from 'react';

function Button({ label, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: '8px 16px', cursor: 'pointer' }}>
      {label}
    </button>
  );
}

export default Button;

// File name: Header.jsx
import React from 'react';

function Header({ title }) {
  return (
    <header style={{ background: '#f4f4f4', padding: '10px', textAlign: 'center' }}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;

// File name: Footer.jsx
import React from 'react';

function Footer({ text }) {
  return (
    <footer style={{ background: '#f4f4f4', padding: '10px', textAlign: 'center', marginTop: '20px' }}>
      <p>{text}</p>
    </footer>
  );
}

export default Footer;

// File name: Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ headerTitle, footerText, children }) {
  return (
    <div style={{ border: '1px solid #ccc', maxWidth: '600px', margin: '20px auto' }}>
      <Header title={headerTitle} />
      <main style={{ padding: '20px' }}>
        {children}
      </main>
      <Footer text={footerText} />
    </div>
  );
}

export default Layout;

// File name: UserCard.jsx
import React from 'react';

function UserCard({ name, age }) {
  return (
    <div style={{ background: '#fafafa', border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '4px' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

export default UserCard;

// File name: App.jsx
import React from 'react';
import Layout from './pages/Layout';
import UserCard from './pages/UserCard';
import Button from './pages/Button';

function App() {
  const handleButtonClick = () => {
    alert('Button clicked inside the layout page!');
  };

  return (
    <Layout 
      headerTitle="Welcome to My Website" 
      footerText="© 2026 My React App. All rights reserved."
    >
      <h2>User Dashboard</h2>

      <UserCard name="Alice Johnson" age={28} />
      <UserCard name="Bob Smith" age={34} />

      <div style={{ marginTop: '15px' }}>
        <Button label="Click Me" onClick={handleButtonClick} />
      </div>
    </Layout>
  );
}

export default App;
