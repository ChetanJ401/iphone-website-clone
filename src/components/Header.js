import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../OIP.jfif'; // Adjust the path to your image file
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="Welcome">
        <h1>Welcome to iPhone</h1>
        <p>Discover the innovative world of Apple and shop everything iPhone.</p>
      </div>
      <nav>
        
      </nav>
    </div>
  );
}

export default Header;
