import logo from '../../images/logo.svg';
import whiteLogo from '../../images/white-logo.svg';

function Logo ({width = '210px', isFooter = false}) {
  return (
    <img src={isFooter ? whiteLogo : logo } width={width} alt="Kasa logo" />
  );
}

export default Logo;
