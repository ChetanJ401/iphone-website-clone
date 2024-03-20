import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.css';

const Home = () => {
  return (
    <div class="Header">
    <header>
      <nav>
       
          <div class="ABC">
          <Link to="/">Home</Link>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/products">Products</Link>
          </div>
       
       
      </nav>
    </header>
    </div>
  );
}

export default Home;
