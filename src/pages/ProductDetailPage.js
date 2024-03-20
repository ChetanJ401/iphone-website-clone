import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();

  // Simulated product data (replace with actual data)
  const products = [
    { id: '1', name: 'iPhone 13', description: 'The ultimate iPhone.', price: '$999' },
    { id: '2', name: 'iPhone SE', description: 'Lots to love. Less to spend.', price: '$399' },
    { id: '3', name: 'iPhone 12', description: 'Blast past fast.', price: '$799' },
    // Add more iPhone models
  ];

  const product = products.find(product => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default ProductDetailPage;
