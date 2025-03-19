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
  // Enhanced scroll experience with subtle parallax effect
  const handleScroll = () => {
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
  
  // Setup scroll handler
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundPattern />
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
