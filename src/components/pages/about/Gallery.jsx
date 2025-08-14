import React, { useState } from "react";
import "./Gallery.scss";

function Gallery() {
const img = [
  { src: "https://i.postimg.cc/MpJXq406/7-CDB96-FE-C6-AE-47-A5-A8-D9-F551-D0867484.jpg", alt: "" },
  { src: "https://i.postimg.cc/fbBb7RGy/DSC-5874.jpg", alt: "" },
  { src: "https://i.postimg.cc/Tw13tXx9/DSC-5875.jpg", alt: "" },
  { src: "https://i.postimg.cc/PJ8rkzPv/DSC-5936.jpg", alt: "" },
  { src: "https://i.postimg.cc/HjDWWcyZ/DSC-5948.jpg", alt: "" },
  { src: "https://i.postimg.cc/NGy103Xm/DSC-5964.jpg", alt: "" },
  { src: "https://i.postimg.cc/jqGynM69/DSC-6413.jpg", alt: "" },
  { src: "https://i.postimg.cc/pXzzfKqd/DSC-7177.jpg", alt: "" },
  { src: "https://i.postimg.cc/8zGWts0m/DSC-7822.jpg", alt: "" },
  { src: "https://i.postimg.cc/MpYB4qk2/DSC-7842.jpg", alt: "" },
  { src: "https://i.postimg.cc/VNLtPp1S/DSC-8066.jpg", alt: "" },
  { src: "https://i.postimg.cc/3wSv81Jt/DSC-8725.jpg", alt: "" },
  { src: "https://i.postimg.cc/JnSHJhXJ/DSC-8831.jpg", alt: "" },
  { src: "https://i.postimg.cc/LXJZnPJ2/DSC-8845.jpg", alt: "" },
  { src: "https://i.postimg.cc/Y0gGxwNP/DSC-8857.jpg", alt: "" },
  { src: "https://i.postimg.cc/rytrTS69/DSC-8869.jpg", alt: "" },
  { src: "https://i.postimg.cc/CLTfxzSp/DSC-8988.jpg", alt: "" },
  { src: "https://i.postimg.cc/15GVns3n/DSC-9003.jpg", alt: "" },
  { src: "https://i.postimg.cc/K8mktw19/DSC-9027.jpg", alt: "" },
  { src: "https://i.postimg.cc/SxVXdd8m/DSC-9032.jpg", alt: "" },
  { src: "https://i.postimg.cc/Bv6jVFcH/DSC-9444.jpg", alt: "" },
  { src: "https://i.postimg.cc/rpPDXpQb/DSC-9578.jpg", alt: "" },
  { src: "https://i.postimg.cc/gJLnYP70/DSC-9621.jpg", alt: "" },
  { src: "https://i.postimg.cc/tJ07JM0N/DSC-9639.jpg", alt: "" },
  { src: "https://i.postimg.cc/XNFpm4FH/DSC-9685.jpg", alt: "" },
  { src: "https://i.postimg.cc/Nfc5wSkg/DSC-9687.jpg", alt: "" },
  { src: "https://i.postimg.cc/c4B61hFf/DSC-9700.jpg", alt: "" },
  { src: "https://i.postimg.cc/6p6q8ZPg/DSC-9702.jpg", alt: "" },
  { src: "https://i.postimg.cc/jS85P505/DSC-9712.jpg", alt: "" },
  { src: "https://i.postimg.cc/xdcdR2nP/DSC-9713.jpg", alt: "" },
  { src: "https://i.postimg.cc/cJ2LkbJG/DSC-9768.jpg", alt: "" },
  { src: "https://i.postimg.cc/VvcLm0M7/DSC-9829.jpg", alt: "" },
  { src: "https://i.postimg.cc/JnX4f5yD/IMG-1946.jpg", alt: "" },
  { src: "https://i.postimg.cc/LsHXZ10G/IMG-8588.jpg", alt: "" },
  { src: "https://i.postimg.cc/g2yjJD4v/IMG-8589.jpg", alt: "" },
  { src: "https://i.postimg.cc/d1ftXStK/MG-0495.jpg", alt: "" }
];



  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
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
            src={img[currentIndex].src}
            alt={img[currentIndex].alt}
            className="carousel-image"
          />
          <div className="next-btn" onClick={handleNext}></div>
          <div className="image-counter">
            {String(currentIndex + 1).padStart(2, '0')} / {String(img.length).padStart(2, '0')}
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