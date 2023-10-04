import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Logements.scss';
import Rating from "../../components/Rating/Rating.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import { CustomPrevArrow, CustomNextArrow } from "../../components/Arrow/Arrow.jsx";
import Error from '../Error/Error.jsx';

function Logements({ data }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedCard = data.find((annonce) => annonce.id === id);

  if (!selectedCard) {
    return <Error/>
  }

  const { pictures } = selectedCard;
  const shouldHideCarouselStatus = pictures.length === 1;

  return (
    <div className='logement-main'>
      <div className="banner-container">
        <Carousel
          className={`carousel-container ${shouldHideCarouselStatus ? 'hide-status' : ''}`}
          infiniteLoop={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && <CustomPrevArrow onClick={onClickHandler} />
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && <CustomNextArrow onClick={onClickHandler} />
          }
        >
          {pictures.map((picture, index) => (
            <div key={index}>
              <img src={picture} alt={selectedCard.title} />
            </div>
          ))}
        </Carousel>
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