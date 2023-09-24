import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Logements.css';
import Rating from "../../components/Rating/Rating.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";

function Logements({ data }) {

  const { id } = useParams();
  const selectedCard = data.find((annonce) => annonce.id === id);

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  return (
    <div className='logement-main'>
      <div className="banner-container">
        <Carousel infiniteLoop={true}>
          {selectedCard.pictures.map((picture, index) => (
            <div key={index}>
              <img src={picture} alt={`Image ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className='logement-details'>
        <div className='logement-p1'>
          <div className='logement-p1-top'>
            <h1>{selectedCard.title}</h1>
            <h2>{selectedCard.location}</h2>
          </div>
          <div className='logement-p1-bas'>
            {selectedCard.tags.map((tag) => (
            <span key={tag} className={`tag ${tag.toLowerCase()}`}>
              {tag}
            </span>
            ))}          
          </div>
        </div>
  
        <div className='logement-p2'>
          <div className='logement-p2-top'>
            <div className='host-name'>
              <div className='host-first-name'>{selectedCard.host.name.split(' ')[0]}</div>
              <div className='host-last-name'>{selectedCard.host.name.split(' ')[1]}</div>
            </div>
            <img src={selectedCard.host.picture} alt={selectedCard.host.name} />
          </div>
          <div className='logement-p2-bas'>
            <Rating rating={selectedCard.rating} />
          </div>
        </div>
      </div>

      <div className='logement-collapse'>
        <Collapse title="Description" className='collapse-description' content={selectedCard.description} />
        <Collapse title="Équipements" content={selectedCard.equipments.map((equipment, index) => (
          <span key={index} className={`equipement ${equipment.toLowerCase()}`}>
            {equipment}
          </span>
        ))}/>
      </div>
    </div>
  );
  
}

export default Logements;