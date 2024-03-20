import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Product.css';

const Products = () => {
  const iphoneModel = { id: 1, name: 'iPhone 13', imageUrl: 'url_to_image.jpg' };

  return (
    <div className="Product">
      <div className="product-heading">
        <h2>Products</h2>
      </div>
      <div className="product-image">
        <img src={iphoneModel.imageUrl} alt={iphoneModel.name} style={{ width: '100px', marginRight: '10px' }} />
      </div>
      <div className="product-name">
        <ul>
          <li key={iphoneModel.id}>
            <Link to={`/products/${iphoneModel.id}`}>
              {iphoneModel.name}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}



export default Products;
