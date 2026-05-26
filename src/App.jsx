import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Location from './components/Location';
import Footer from './components/Footer';
import './styles/global.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Smooth scroll setup
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservation />
      <Location />
      <Footer />
    </div>
  );
}