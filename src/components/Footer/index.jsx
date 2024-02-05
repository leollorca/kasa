import './style.sass';

import Logo from '../Logo';

function Footer() {
  return (
    <footer>
      <Logo isFooter={true} />
      <div>© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;