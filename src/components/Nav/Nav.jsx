import React from 'react';
import Logo from '../../assets/logo.png'; 
import './Nav.css';

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo Kasa" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">À Propos</a></li>
      </ul>
    </nav>
  );
}

export default Nav;

