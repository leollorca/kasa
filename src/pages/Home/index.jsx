import PageBanner from '../../components/PageBanner';
import Gallery from '../../components/Gallery';

import banner from '../../images/home-banner.jpg';

function Home() {
  return (
    <main>
      <PageBanner
        imgPath={banner}
        line="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </main>
  );
}

export default Home;
