import { Link, useLocation } from 'react-router-dom';

import './style.sass';

import Logo from '../Logo';

function Header() {
  const { pathname } = useLocation();

  return (
    <header>
      <nav>
        <Link to="/"><Logo /></Link>
        <ul>
          <li className={pathname === '/' ? 'active-page' : ''}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={pathname === '/about' ? 'active-page' : ''}>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;