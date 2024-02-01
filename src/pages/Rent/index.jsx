import { useParams } from "react-router-dom";

import Slideshow from "../../components/Slideshow";

import data from "../../data.json";

function Rent() {
  const { id } = useParams();

  const rent = data.find(rent => rent.id === id);

  const tags = rent.tags.map(tag => <li>{tag}</li>);

  return (
    <main>
      <Slideshow photos={rent.pictures} />
      <h1>{rent.title}</h1>
      <h2>{rent.location}</h2>
      <ul>{tags}</ul>
    </main>
  )
}

export default Rent;