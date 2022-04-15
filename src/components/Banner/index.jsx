import React from 'react';
import './banner.css';
import banner_accueil from '../../assets/images/banner_accueil.png';
const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="overlay overlay-secondary has-bg-img w-100">
          <div className="overlay-content align-items-center justify-content-center text-white">
            Chez vous, partout et ailleurs
          </div>
          <img className="bg-img" src={banner_accueil} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
