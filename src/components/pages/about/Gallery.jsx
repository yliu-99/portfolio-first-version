import React, { useState } from "react";
import "./Gallery.scss";

function Gallery() {
  const images = [
    { src: "https://via.placeholder.com/800x400", alt: "Placeholder image 1" },
    { src: "https://via.placeholder.com/800x400", alt: "Placeholder image 2" },
    { src: "https://via.placeholder.com/800x400", alt: "Placeholder image 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="carousel">
          <div className="prev-btn" onClick={handlePrev}></div>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="carousel-image"
          />
          <div className="next-btn" onClick={handleNext}></div>
          <div className="image-counter">
            {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
        </div>
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
      </div>
    </div>
  );
}

export default Gallery;