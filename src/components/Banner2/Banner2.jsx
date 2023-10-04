import React from 'react';
import './Banner2.scss';
import BannerAbout from '../../assets/Banner2.jpg';

function Banner2() {
    return (
      <header className="banner2">
        <img src={BannerAbout} alt="Photo d'un paysage de montagnes" />
      </header>
    );
  }
  
  export default Banner2;