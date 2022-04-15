import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ element }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={element.cover} alt={element.title} />
      <Link key={element.index} to={`/Fiche/${element.id}`}>
        <div className="card-img-overlay">
          <p className="text-left">{element.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
