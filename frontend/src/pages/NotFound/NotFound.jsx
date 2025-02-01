import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="number-glitch">404</div>
        <h1 className="title">Oops! Lost in the Digital Kitchen</h1>
        <p className="message">
          The page you're looking for seems to have slipped off the delivery route.
          Don't worry, our best chefs are working on it!
        </p>
        <div className="animation-container">
          <div className="pizza-animation">🍕</div>
          <div className="burger-animation">🍔</div>
          <div className="taco-animation">🌮</div>
        </div>
        <button 
          className="home-button"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;