import './style.sass';

import { Link } from 'react-router-dom';

function Card({ id, title, imgPath }) {
  return (
    <Link className="card" to={`/rent/${id}`}>
      <li>
        <img src={imgPath} alt="rent preview" />
        <div className="overlay"></div>
        <h2>{title}</h2>
      </li>
    </Link>
  )
}

export default Card;