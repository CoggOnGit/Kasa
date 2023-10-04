import React, { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <button className="collapse-button" onClick={toggleCollapse}>
        <h2 className="collapse-title">{title}</h2>
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`svg-icon ${isRotated ? 'rotate' : ''}`}
        >
          <path
            d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.5720 23.4979L16.5000 14.4259L7.42804 23.4926C6.75862 24.1620 5.67148 24.1620 5.00206 23.4926C4.33265 22.8231 4.33265 21.7360 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
            fill="white"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;