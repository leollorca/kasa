import './style.sass';

import { useParams, Navigate } from "react-router-dom";

import Slideshow from "../../components/Slideshow";
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';

import data from "../../data.json";

function Rent() {
  const { id } = useParams();

  const rent = data.find(rent => rent.id === id);

  if (!rent) {
    return <Navigate to="/*" />;
  }

  const tags = rent.tags.map((tag, index) => <li key={index}>{tag}</li>);

  const fullName = rent.host.name.split(' ');

  const equipments = 
    rent.equipments.map((equipment, index) => <li key={index}>{equipment}</li>);

  return (
    <main>
      <Slideshow photos={rent.pictures} />
      <div className="rent-infos">
        <div className='left'>
          <h1>{rent.title}</h1>
          <h2>{rent.location}</h2>
          <ul className="tags">{tags}</ul>
        </div>
        <div className='right'>
          <div className='host'>
            <div className='full-name'>
              <span>{fullName[0]}</span>
              <span>{fullName[1]}</span>
            </div>
            <div className='avatar'>
              <img src={rent.host.picture} alt={rent.host.name} />
            </div>
          </div>
          <Rating rating={rent.rating} />
        </div>
      </div>
      <div className="rent-collapses">
        <Collapse name="Description" content={rent.description} />
        <Collapse name=" Équipements" content={equipments} />
      </div>
    </main>
  )
}

export default Rent;