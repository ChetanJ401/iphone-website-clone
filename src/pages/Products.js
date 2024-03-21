import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Product.css'; // Import your CSS file

const Products = () => {
  const iphoneModel = { id: 1, name: 'iPhone 13' };

  return (
    <div className="Product">
      <h2>Products</h2>
      <img src="../images/titanium.jfif" alt={iphoneModel.name} style={{ width: '200px' }} />
      <ul>
        <li key={iphoneModel.id}>
          <Link to={`/products/${iphoneModel.id}`}>
            {iphoneModel.name}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Products;
