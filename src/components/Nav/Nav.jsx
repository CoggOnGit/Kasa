import React from 'react';
import Logo from '../../assets/logo.png'; 
import './Nav.scss';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo Kasa" />
      </div>
      <ul className="nav-links">
        <li><NavLink to="/">Accueil</NavLink></li>
        <li><NavLink to="/about">À Propos</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;

