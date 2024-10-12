import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="page">
      <h1>Главная страница</h1>
      <nav>
        <Link to="/about">О нас</Link>
      </nav>
    </div>
  );
};

export default HomePage;
