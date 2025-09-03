import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Produkt 1' },
    { id: 2, name: 'Produkt 2' },
    { id: 3, name: 'Produkt 3' }
  ];

  return (
    <div>
      <h2>Produkte</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;