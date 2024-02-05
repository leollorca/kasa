import logo from '../../images/logo.svg';
import whiteLogo from '../../images/white-logo.svg';

function Logo ({ isFooter = false }) {
  return (
    <img className="logo" src={isFooter ? whiteLogo : logo } alt="Kasa logo" />
  );
}

export default Logo;
