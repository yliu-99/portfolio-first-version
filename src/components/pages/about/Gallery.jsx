import React, { useState } from "react";
import "./Gallery.scss"; // Assuming you have a Gallery.scss for styling

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

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="carousel">
        <button className="prev-btn" onClick={handlePrev}>
          &#8249;
        </button>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="carousel-image"
        />
        <button className="next-btn" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Gallery;