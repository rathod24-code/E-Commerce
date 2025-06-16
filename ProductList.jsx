import React from 'react';

const ProductList = ({ products, onBook }) => (
  <div>
    <h2>Products</h2>
    {products.map(product => (
      <div key={product.id}>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <button onClick={() => onBook(product.id)}>Book Now</button>
      </div>
    ))}
  </div>
);

export default ProductList;
