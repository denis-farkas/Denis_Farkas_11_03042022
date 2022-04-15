import React from 'react';
import './section_header.css';

const SectionHeader = ({ element }) => {
  return (
    <div className="container-fluid">
      <div className="section_header">
        <div className="row">
          <div className="col-lg-9">
            <h1 className="transformed">{element.title}</h1>
            <p className="location">{element.location}</p>
            {element.tags.map((item) => {
              return <div className="badge">{item}</div>;
            })}
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-5"></div>
              <div className="name col-lg-4">{element.host.name}</div>
              <div className="portrait col-lg-3">
                <img
                  className="rond "
                  src={element.host.picture}
                  alt="portrait"
                />
              </div>
            </div>
            <div className="stars"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
