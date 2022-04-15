import { useState } from 'react';
import './carrousel.css';
import arrow_back from '../../assets/images/arrow_back.png';
import arrow_forward from '../../assets/images/arrow_forward.png';

const Carrousel = ({ element }) => {
  const totalPictures = element.pictures.length;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === totalPictures - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? totalPictures - 1 : current - 1);
  };

  if (element.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <img
        className="left_arrow"
        src={arrow_back}
        alt="back"
        onClick={prevSlide}
      />
      <img
        className="right_arrow"
        src={arrow_forward}
        alt="forward"
        onClick={nextSlide}
      />
      <span className="counter">
        {current + 1}/{totalPictures}
      </span>
      {element.pictures.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img className="slide-item" src={slide} alt="slide item" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carrousel;
