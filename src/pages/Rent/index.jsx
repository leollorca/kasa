import './style.sass';

import { useParams } from "react-router-dom";

import Slideshow from "../../components/Slideshow";
import Rating from '../../components/Rating';

import data from "../../data.json";

function Rent() {
  const { id } = useParams();

  const rent = data.find(rent => rent.id === id);

  const tags = rent.tags.map((tag, index) => <li key={index}>{tag}</li>);

  const fullName = rent.host.name.split(' ');

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
      <div className="collapses">collapses</div>
    </main>
  )
}

export default Rent;