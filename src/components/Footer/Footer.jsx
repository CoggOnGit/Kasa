import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo-Blanc.png'; 

function Footer() {
    return (
      <section className="footer">
        <div className="logo-blanc">
        <img src={Logo} alt="Logo Kasa" />
        </div>
        <h2 className="footer-text">© 2020 Kasa. All rights reserved</h2>
      </section>
    );
  }
  
  export default Footer;