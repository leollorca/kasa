import logo from '../../images/logo.svg';
import footerLogo from '../../images/logo-white.svg';

function Logo ({width = '210px', isFooter = false}) {
  return (
    <img src={isFooter ? footerLogo : logo } width={width} alt="Kasa logo" />
  );
}

export default Logo;
