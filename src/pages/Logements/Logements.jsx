import React from 'react';
import { useParams } from 'react-router-dom';
import './Logements.scss';
import Rating from "../../components/Rating/Rating.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import Error from "../Error/Error.jsx";

function Logements({ data }) {
  const { id } = useParams();
  const selectedCard = data.find((annonce) => annonce.id === id);

  if (!selectedCard) {
    return <Error/>
  }

  return (
    <div className='logement-main'>
      <div className="banner-container">
      <Carousel pictures={selectedCard.pictures} />
      </div>

      <div className='logement-details'>
        <div className='logement-p1'>
          <h1>{selectedCard.title}</h1>
          <h2>{selectedCard.location}</h2>
          {selectedCard.tags.map((tag, index) => (
            <span key={index} className={`tag ${tag.toLowerCase()}`}>
              {tag}
            </span>
          ))}
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