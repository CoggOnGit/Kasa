

import React from 'react';
import './Gallery.css';
import Card from '../Card/Card.jsx'; 
import { annonceList } from '../../data/annonceList'; 

function Gallery() {
  return (
    <div className="all-gallery">
    <div className="gallery">
      {annonceList.map((annonce) => (
        <Card
          key={annonce.id}
          title={annonce.title}
          image={annonce.cover}
        />
      ))}
    </div>
    </div>
  );
}

export default Gallery;





