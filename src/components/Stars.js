import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import './stars.css';

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    if (stars >= index + 1) {
      // Full star
      return <BsStarFill key={index} className="star-icon" />;
    } else if (stars >= number) {
      // Half star
      return <BsStarHalf key={index} className="star-icon" />;
    } else {
      // Empty star
      return <BsStar key={index} className="star-icon" />;
    }
  });

  return (
    <div className="star-container">
      <div className='star'>{tempStars}</div>
      
      <p className="reviews">({reviews} Reviews)</p>
    </div>
  );
};

export default Stars;
