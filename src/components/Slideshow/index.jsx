import './style.sass';

import { useState } from 'react';

import previousIcon from '../../images/previous.svg';
import nextIcon from '../../images/next.svg';

function Slideshow({ photos }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  function goToNextPhoto() {
    if (currentPhoto === photos.length - 1) {
      setCurrentPhoto(0);
    } else {
      setCurrentPhoto(currentPhoto + 1);
    }
  }

  function goToPreviousPhoto() {
    if (currentPhoto === 0) {
      setCurrentPhoto(photos.length - 1);
    } else {
      setCurrentPhoto(currentPhoto - 1);
    }
  }

  return (
    <div className="slideshow">
      <img src={photos[currentPhoto]} />
      <div className='controls'>
        <img onClick={goToPreviousPhoto} src={previousIcon} />
        <img onClick={goToNextPhoto} src={nextIcon} />
      </div>
      <div className='numbering'>
        {`${currentPhoto + 1}/${photos.length}`}
      </div>
    </div>
  )
}

export default Slideshow;