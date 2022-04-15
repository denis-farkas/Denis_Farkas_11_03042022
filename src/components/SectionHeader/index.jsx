import React from 'react';

const SectionHeader = ({ element }) => {
  return (
    <div className="container-fluid">
      <div className="section_header">
        <div className="row">
          <div className="col-lg-10">
            <h5 className="voir">{element.title}</h5>
            <p>{element.location}</p>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
