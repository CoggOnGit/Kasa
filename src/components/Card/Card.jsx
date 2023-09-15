

import React from 'react';
import './Card.css';

function Card({ title, image }) {
  return (
    <a className="card">
      <img src={image} alt={title} />
      <div className="card-title">
        <div className="card-text">
            <h2>{title}</h2>
        </div>
      </div>
    </a>
  );
}

export default Card;