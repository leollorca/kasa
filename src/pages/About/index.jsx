import './style.sass';

import PageBanner from '../../components/PageBanner';
import Collapse from '../../components/Collapse';

import banner from '../../images/about-banner.jpg';

function About() {
  return (
    <main>
      <PageBanner imgPath={banner} />
      <div className="about-collapses">
        <Collapse name="Fiabilité" />
        <Collapse name="Respect" />
        <Collapse name="Service" />
        <Collapse name="Sécurité" />
      </div>
    </main>
  );
}

export default About;
