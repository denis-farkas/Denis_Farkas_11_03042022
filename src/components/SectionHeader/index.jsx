import React from 'react';
import StarRating from '../StarRating';
import './section_header.css';

const SectionHeader = ({ element }) => {
  return (
    <div className="container">
      <div className="section_header">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-sm-12">
            <h1 className="transformed">{element.title}</h1>
            <p className="location">{element.location}</p>
            {element.tags.map((item, index) => {
              return (
                <div key={index + 1} className="badge">
                  {item}
                </div>
              );
            })}
          </div>
          <div className="portrait col-lg-3 col-md-12 col-sm-12">
            <div className="name col-lg-12 col-md-12 col-sm-12">
              <span className="identity">{element.host.name}</span>
              <img
                className="rond "
                src={element.host.picture}
                alt="portrait"
              />
            </div>
            <div className="star-rating col-12">
              <StarRating element={element} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
