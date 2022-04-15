import React from 'react';
import Habitations from '../components/Habitations';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Home = ({ logements }) => {
  return (
    <div>
      <Header />
      <Banner />
      <Habitations element={logements} />
      <Footer />
    </div>
  );
};

export default Home;
