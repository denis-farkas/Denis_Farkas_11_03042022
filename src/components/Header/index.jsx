import React from 'react';
import Logo from '../Logo';

import Navigation from '../Navigation';
import './header.css';

const Header = () => {
  return (
    <div className="page-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Logo />
          </div>
          <div className="col">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
