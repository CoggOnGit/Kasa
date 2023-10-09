import React, { useState } from 'react';
import './Carousel.scss'; 

const Carousel = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className={`carousel-container ${pictures.length === 1 ? 'single-image' : ''}`}>
        <div className="carousel-arrows">
            <div className="carousel-arrow" onClick={prevSlide}>
                <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Précédent</title>
                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                </svg>
            </div>
            <div className="carousel-arrow" onClick={nextSlide}>
                <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Suivant</title>
                    <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                </svg>
            </div>
        </div>
        <div className="carousel-pagination">{`${currentSlide + 1} / ${pictures.length}`}</div>
        <div className="carousel-content">
            {pictures.map((picture, index) => (
            <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                <img src={picture} alt={`Slide ${index + 1}`} />
            </div>
            ))}
        </div>
    </div>
  );
};

export default Carousel;