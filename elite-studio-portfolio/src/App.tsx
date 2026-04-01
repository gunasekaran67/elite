import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

export default function App() {
  return (
    <div className="bg-secondary min-h-screen selection:bg-primary selection:text-secondary relative">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
