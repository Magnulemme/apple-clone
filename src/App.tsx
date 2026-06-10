import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Products from './components/Products';
import Performance from './components/Performance';
import Features from './components/Features';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Inizializza Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Sincronizza Lenis con GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="relative bg-black">
        <Hero />
        <Products />
        <Showcase />
        <Performance />
        <Features />
        <Highlights />
      </div>
      <Footer />
    </div>
  )
}

export default App
