import React, { useState } from 'react';
import "./PhotoSlider.css";

import testImage from "../images/project3.png";

const PhotoSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    "project1.png",
    "project2.png",
    "project3.png"
  ];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="sliderContainer" >
      <button onClick={prevSlide}>Previous</button>
      <img className="sliderImage"
        src={require(`../images/${projectImages[currentImageIndex]}`).default}
        alt={`Project ${currentImageIndex + 1}`}
      />
      <button onClick={nextSlide}>Next</button>
      <img src={testImage} alt="testImage" width="25%" />
    </div>
  )
}

export default PhotoSlider;