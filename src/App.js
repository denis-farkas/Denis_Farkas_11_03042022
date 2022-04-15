import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Fiche from './pages/Fiche';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('logements.json')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home logements={data} />} />
        <Route path="/Fiche/:id" element={<Fiche logements={data} />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
