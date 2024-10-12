import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="page">
      <h1>О нас</h1>
      <nav>
        <Link to="/">Главная страница</Link>
      </nav>
    </div>
  );
};

export default AboutPage;
