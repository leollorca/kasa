import './style.sass';

import Card from "../Card";

import rentals from "../../data.json";

function Gallery() {

  const cards = rentals.map(({ id, title, cover }, index) => {
    return (
      <Card
        key={index}
        id={id}
        title={title}
        imgPath={cover}
      />
    );
  });

  return (
    <ul className="gallery">
      {cards}
    </ul>
  );
}

export default Gallery;
