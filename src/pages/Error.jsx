import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="container">
      <div className="col-lg-12">
        <h1 className="big">404</h1>
      </div>
      <div className="col-lg-12">
        <h2 className="medium">
          Oups! La page que vous demandez n'existe pas.
        </h2>
      </div>
      <div className="col-lg-12">
        <Link key={1} to={`/`}>
          <p className="small">Retournez sur la page d'accueil</p>
        </Link>
      </div>
    </div>
  );
};

export default Error;
