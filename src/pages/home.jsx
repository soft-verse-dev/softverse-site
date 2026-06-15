import Navbar from '../components/softverse/navbar';
import Hero from '../components/softverse/hero';
import About from '../components/softverse/about';
import Services from '../components/softverse/services';
import Contact from '../components/softverse/contact';
import Footer from '../components/softverse/footer';

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