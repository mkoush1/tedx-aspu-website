import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Schedule from './components/Schedule';
import PastTalks from './components/PastTalks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackgroundPattern from './components/BackgroundPattern';

function App() {
  // Check if device is mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add window resize listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Enhanced scroll experience with subtle parallax effect - disabled on mobile
  const handleScroll = () => {
    // Skip parallax effects on mobile for better performance
    if (isMobile) return;
    
    const scrollPosition = window.scrollY;
    const elements = document.querySelectorAll('.parallax-element');
    
    elements.forEach(element => {
      const speed = parseFloat(element.getAttribute('data-speed') || '0.1');
      const direction = element.getAttribute('data-direction') || 'vertical';
      const offset = scrollPosition * speed;
      
      if (direction === 'horizontal') {
        (element as HTMLElement).style.transform = `translateX(${offset}px)`;
      } else {
        (element as HTMLElement).style.transform = `translateY(${offset}px)`;
      }
    });
  };
  
  // Setup scroll handler with debounce for better performance
  useEffect(() => {
    let scrollTimeout: number | null = null;
    
    const onScroll = () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      
      scrollTimeout = window.requestAnimationFrame(() => {
        handleScroll();
      });
    };
    
    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
    };
  }, [isMobile]);
  
  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundPattern isMobile={isMobile} />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <PastTalks />
        <Speakers />
        <Sponsors />
        <Schedule />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
