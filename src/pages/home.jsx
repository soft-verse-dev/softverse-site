import Navbar from '../components/softverse/Navbar';
import Hero from '../components/softverse/Hero';
import About from '../components/softverse/About';
import Services from '../components/softverse/Services';
import Contact from '../components/softverse/Contact';
import Footer from '../components/softverse/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}