import './style.sass';

import { useState } from 'react';

import open from '../../images/open.svg';
import closed from '../../images/closed.svg';

function Collapse({ name, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="name" onClick={() => setIsOpen(!isOpen)}>
        <span>{name}</span>
        <img src={isOpen ? open : closed} alt="collapse state icon" />
      </div>
      {(isOpen && content) && <ul className="content">{content}</ul>}
    </div>
  )
}

export default Collapse;