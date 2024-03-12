import './style.sass';

import PageBanner from '../../components/PageBanner';
import Collapse from '../../components/Collapse';

import banner from '../../images/about-banner.jpg';

function About() {
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    "In lacinia maximus nibh ut commodo. Aenean ut nunc pharetra, dictum leo" +
    "vel, interdum augue. Sed nec pulvinar lorem, vel tincidunt urna." +
    "Mauris eget ultrices risus. Pellentesque purus nunc, porttitor a elit" +
    "id, aliquam tempus urna. Donec viverra suscipit est. In egestas libero" +
    "in ligula euismod, a sagittis ante hendrerit. In bibendum hendrerit" +
    "eros, sed volutpat eros placerat a. Vivamus non interdum metus," +
    "vitae ullamcorper nunc. Pellentesque eu sem tincidunt, pretium est" +
    "nec, lobortis augue."

  return (
    <main>
      <PageBanner imgPath={banner} />
      <div className="about-collapses">
        <Collapse name="Fiabilité" content={content} />
        <Collapse name="Respect" content={content} />
        <Collapse name="Service" content={content} />
        <Collapse name="Sécurité" content={content} />
      </div>
    </main>
  );
}

export default About;
