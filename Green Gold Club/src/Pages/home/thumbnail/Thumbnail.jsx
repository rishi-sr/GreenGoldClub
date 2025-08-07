import './thumbnail.scss'
import React, { useState, useEffect } from 'react';

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.JPG",
  "6.JPG",
  "7.jpg",
];
    

const Thumbnail = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getVisibleIndexes = () => {
    const left = (currentIndex - 1 + images.length) % images.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % images.length;
    return [left, center, right];
  };

  const visibleIndexes = getVisibleIndexes();

  return (
    <>
    <div className="thumb">
        <img src="thumb.jpg" alt="" id="thumbjpg"/>
        <h1 >Green <span>Gold</span> Club</h1>
        <img src="leaf.png" alt="" id="leaf" />
        <p id='parathumb'>“ Protecting Our Planet, Discovering Its Worth. ”</p>

        {/* Slider */}
        <div className="carousel">
      {images.map((img, index) => {
        let className = 'card hidden';
        if (index === visibleIndexes[1]) className = 'card center';
        else if (index === visibleIndexes[0]) className = 'card left';
        else if (index === visibleIndexes[2]) className = 'card right';

        return (
          <div key={index} className={className}>
            <img src={img} alt={`GGC-${index}`} />
          </div>
        );
      })}
    </div>


    {/* thumb end */}
    </div>


    
    </>
  )
}

export default Thumbnail
