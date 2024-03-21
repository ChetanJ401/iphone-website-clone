import React from 'react';
import { Link } from 'react-router-dom';
import iphoneImage from '../titanium.jfif'; // Adjust the path to your image file

const Home = () => {
  return (
    <div className="Header">
      <header>
        <nav>
          <div className="ABC">
            <div className="NavLinks">
            <Link to="/">Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/products">Products</Link>
            </div>
            
          </div>
        </nav>
      </header>
      <div className="ImageContainer">
        <img src={iphoneImage} alt="iPhone" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Home;
