import './style.sass';

import filledStar from '../../images/filled-star.svg';
import emptyStar from '../../images/empty-star.svg';

function Rating({ rating }) {
  const filledStars = 
    Array.from({ length: Number(rating) }).map((_, index) => {
      return <img key={index} src={filledStar} alt="filled star" />
    });

  const emptyStars = 
    Array.from({ length: 5 - Number(rating) }).map((_, index) => {
      return <img key={index} src={emptyStar} alt="empty star" />
    });

  const stars = [...filledStars, ...emptyStars];

  return (
    <div className="rating">
      {stars}
    </div>
  )
}

export default Rating;