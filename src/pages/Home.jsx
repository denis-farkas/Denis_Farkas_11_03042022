import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Habitations from '../components/Habitations';
import Banner from '../components/Banner';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('logements.json')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Banner />
      <Habitations element={data} />
    </div>
  );
};

export default Home;
