import { useLocation } from 'react-router-dom';

import Carrousel from '../components/Carrousel';
import SectionHeader from '../components/SectionHeader';
import SectionDescription from '../components/SectionDescription';
import SectionApparels from '../components/SectionApparels';

const Fiche = () => {
  const location = useLocation();
  const logement = location.state?.element;
  return (
    <div key={logement.id}>
      <Carrousel element={logement} />
      <SectionHeader element={logement} />
      <SectionDescription element={logement} />
      <SectionApparels element={logement} />
    </div>
  );
};

export default Fiche;
