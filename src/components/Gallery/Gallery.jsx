import React from 'react';
import './Gallery.css';
import Card from '../Card/Card.jsx';
import { Link } from 'react-router-dom';
import { annonceList } from '../../data/annonceList';

function Gallery() {
  return (
    <div className="all-gallery">
      <div className="gallery">
        {annonceList.map((annonce) => (
          <Link to={`/logements/${annonce.id}`} key={annonce.id}>
            <Card
              title={annonce.title}
              image={annonce.cover}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;





