import PageBanner from '../../components/PageBanner';
import Gallery from '../../components/Gallery';

import banner from '../../images/about-banner.jpg';

function About() {
  return (
    <main>
      <PageBanner imgPath={banner} />
      <Gallery />
    </main>
  );
}

export default About;
