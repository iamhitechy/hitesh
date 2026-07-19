import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import SocialLinks from '../components/SocialLinks';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import NavigationMenu from '../components/NavigationMenu';

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hitesh",
    "jobTitle": "Design Engineer & Web Developer",
    "url": "https://hitesh.im",
    "sameAs": [
      "https://github.com/iamhitechy",
      "https://linkedin.com/in/hitesh-chaudhary-45000b39b"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Hitesh — Design Engineer & Web Developer</title>
        <meta name="description" content="Portfolio of Hitesh, a Design Engineer & Web Developer specializing in modern React applications, stunning UI/UX, and performance optimization." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
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
