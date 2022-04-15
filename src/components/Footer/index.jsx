import React from 'react';
import './footer.css';
import logo_white from '../../assets/images/logo_white.png';

const Footer = () => {
  return (
    <div className="footer_home container">
      <img src={logo_white} alt="logo white" />
      <p className="footer_legend">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
