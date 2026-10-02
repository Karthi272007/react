// File name: ProductList.jsx
import React, { useState } from 'react';

function ProductList() {
  // 1. Initial product list with stable IDs (keys)
  const [products] = useState([
    { id: 1, name: 'Laptop Pro' },
    { id: 2, name: 'Wireless Mouse' },
    { id: 3, name: 'Mechanical Keyboard' },
    { id: 4, name: 'HD Monitor' }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isGrid, setIsGrid] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  // 4. Filter input logic
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Product Catalog</h2>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Filter by product name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '8px', marginBottom: '15px', width: '100%', maxWidth: '300px', display: 'block' }}
      />

      {/* 3. Toggle button to switch between grid and list layouts */}
      <button 
        onClick={() => setIsGrid(!isGrid)}
        style={{ padding: '8px 12px', marginBottom: '20px', cursor: 'pointer' }}
      >
        Switch to {isGrid ? 'List' : 'Grid'} Layout
      </button>

      {/* 2. Show 'No products available' when list is empty using conditional rendering */}
      {filteredProducts.length === 0 ? (
        <p style={{ color: 'red', fontStyle: 'italic' }}>No products available</p>
      ) : (
        /* 1. Render list using .map() with stable key props */
        <div style={{
          display: isGrid ? 'grid' : 'flex',
          gridTemplateColumns: 'repeat(2, 1fr)',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {filteredProducts.map(product => {
            // 5. Highlight an item on hover using conditional style/class application
            const isHovered = hoveredId === product.id;
            
            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  padding: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: isHovered ? '#e6f2ff' : '#fff',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
              >
                <strong>{product.name}</strong>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductList;
//---------------------------------------------------------------------------------------------------------------------------------
// File name: App.jsx
import React from 'react';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

export default App;
