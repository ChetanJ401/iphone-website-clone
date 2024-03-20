import React from 'react';
import '../styles/Header.css'
import logo from '../OIP.jfif'; // Adjust the path as needed

const Header = () => {
  return (
    <div className="Welcome">
    {/* <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div> */}
    <h1>Welcome to I-phone</h1>
    <p>Discover the innovative world of Apple and shop everything iPhone.</p>
  </div>
  );
}

export default Header;
