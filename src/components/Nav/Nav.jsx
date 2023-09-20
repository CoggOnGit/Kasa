import React from 'react';
import Logo from '../../assets/logo.png'; 
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo Kasa" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À Propos</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

