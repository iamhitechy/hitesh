import Hero from '../components/Hero';
import Experience from '../components/Experience';
import SocialLinks from '../components/SocialLinks';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import NavigationMenu from '../components/NavigationMenu';

export default function Home() {
  return (
    <>
      <div className="page">
        <div>
          <Hero />
        </div>
        <div id="main-section" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, filter: 'none', transform: 'translate(0px, 0px)' }}>
          <Experience />
          <SocialLinks />
          <Projects />
          <Footer />
        </div>
      </div>
      <NavigationMenu />
    </>
  );
}
