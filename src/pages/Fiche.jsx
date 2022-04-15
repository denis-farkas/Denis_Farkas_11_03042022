import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import SectionHeader from '../components/SectionHeader';
import SectionDescription from '../components/SectionDescription';
import SectionApparels from '../components/SectionApparels';
import Footer from '../components/Footer';

const Fiche = ({ logements }) => {
  const { id } = useParams();

  return logements
    .filter((item) => item.id === id)
    .map((item) => (
      <div key={item.id}>
        <Header />
        <Carrousel element={item} />
        <SectionHeader element={item} />
        <SectionDescription element={item} />
        <SectionApparels element={item} />
        <Footer />
      </div>
    ));
};

export default Fiche;
