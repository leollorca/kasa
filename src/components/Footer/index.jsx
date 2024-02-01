import './style.sass';

import Logo from '../Logo';

function Footer() {
  return (
    <footer>
      <Logo width={'122px'} isFooter={true} />
      <div>© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;