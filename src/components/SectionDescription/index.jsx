import React from 'react';
import './description.css';
import Vector from '../../assets/images/Vector.png';
const SectionDescription = ({ element }) => {
  return (
    <div className="container">
      <div className="section-description row">
        <div className="description col-lg-6">
          <button
            className="button-collapse"
            data-bs-toggle="collapse"
            data-bs-target="#button1"
            aria-expanded="false"
          >
            Description
            <span className="carret">
              <img src={Vector} alt="carret" />
            </span>
          </button>
          <div id="button1" className="collapse">
            {element.description}
          </div>
        </div>
        <div className="description col-lg-6">
          <button
            className="button-collapse"
            data-bs-toggle="collapse"
            data-bs-target="#button2"
          >
            Équipements
            <span className="carret">
              <img src={Vector} alt="carret" />
            </span>
          </button>
          <div id="button2" className="collapse">
            <ul className="equipments">
              {element.equipments.map((apparel, index) => {
                return <li key={index}>{apparel}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDescription;
