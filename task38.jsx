import { useState } from "react";

/*
1. Create two lists: one with stable keys, one with index keys;
   measure re-renders.
*/

function ListItem({ product }) {
  console.log("Rendered:", product.name);

  return <li>{product.name}</li>;
}

function KeyExample() {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
  ]);

  const addProduct = () => {
    setProducts([
      { id: Date.now(), name: "Mango" },
      ...products,
    ]);
  };

  return (
    <div>
      <h1>Stable Key vs Index Key</h1>

      <button onClick={addProduct}>
        Add Product
      </button>

      <h2>Stable Keys</h2>

      <ul>
        {products.map((product) => (
          <ListItem
            key={product.id}
            product={product}
          />
        ))}
      </ul>

      <h2>Index Keys</h2>

      <ul>
        {products.map((product, index) => (
          <ListItem
            key={index}
            product={product}
          />
        ))}
      </ul>
    </div>
  );
}


/*
2. Implement a component that conditionally reorders items;
   observe reconciliation.
*/

function Product({ product }) {
  console.log("Rendered:", product.name);

  return (
    <li>
      {product.name}
    </li>
  );
}

function ReorderExample() {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
  ]);

  const reorderProducts = () => {
    setProducts([...products].reverse());
  };

  return (
    <div>
      <h1>Reconciliation Example</h1>

      <button onClick={reorderProducts}>
        Reverse List
      </button>

      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </div>
  );
}


/*
3. Demonstrate how missing keys cause incorrect item preservation
   on edit.
*/

function MissingKeyExample() {
  const [products, setProducts] = useState([
    "Apple",
    "Banana",
    "Orange",
  ]);

  return (
    <>
      <button onClick={() => setProducts([...products].reverse())}>
        Reverse
      </button>

      <br></br>

      {products.map((product, index) => (
        <input key={index} defaultValue={product} />
      ))}
    </>
  );
}


/*
4. Add a 'Shuffle' button and verify items remain matched
   by key after shuffle.
*/

function ShuffleExample() {
  const [products, setProducts] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango",
  ]);

  const shuffleProducts = () => {
    setProducts([...products].sort(() => Math.random() - 0.5));
  };

  return (
    <>
      <button onClick={shuffleProducts}>
        Shuffle
      </button>

      {products.map((product) => (
        <p key={product}>{product}</p>
      ))}
    </>
  );
}


/*
5. Profile renders (React DevTools) to compare
   with/without keys.
*/

function ProductItem({ name }) {
  console.log("Rendered:", name);

  return <p>{name}</p>;
}

function ProfileExample() {
  const [products, setProducts] = useState([
    "Apple",
    "Banana",
    "Orange",
  ]);

  const shuffleProducts = () => {
    setProducts([...products].reverse());
  };

  return (
    <>
      <button onClick={shuffleProducts}>
        Shuffle
      </button>

      {products.map((product) => (
        <ProductItem key={product} name={product} />
      ))}
    </>
  );
}


export {
  KeyExample,
  ReorderExample,
  MissingKeyExample,
  ShuffleExample,
  ProfileExample
};
