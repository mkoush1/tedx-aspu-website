import React, { useState, useEffect, useRef } from 'react';
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
  // Track if initial load is complete
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  // Track scroll position to optimize rendering
  const [scrollPosition, setScrollPosition] = useState(0);
  // Ref to track if an element is in viewport
  const observerRefs = useRef(new Map());
  // Track active sections for animation optimization
  const [activeSections, setActiveSections] = useState(new Set(['hero']));
  
  useEffect(() => {
    // Mark initial load as complete after a short delay
    const timer = setTimeout(() => {
      setInitialLoadComplete(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
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

  // Setup IntersectionObserver to track visible sections
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          setActiveSections(prev => {
            const updated = new Set(prev);
            updated.add(sectionId);
            return updated;
          });
        } else {
          setActiveSections(prev => {
            const updated = new Set(prev);
            updated.delete(sectionId);
            return updated;
          });
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px',
      threshold: 0.1
    });
    
    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
      observerRefs.current.set(section.id, section);
    });
    
    return () => {
      observerRefs.current.forEach((_, id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Enhanced scroll experience with subtle parallax effect - disabled on mobile
  const handleScroll = () => {
    // Skip parallax effects on mobile for better performance
    if (isMobile) return;
    
    // Skip if still during initial loading to prevent choppy animations
    if (!initialLoadComplete) return;
    
    const currentScrollPosition = window.scrollY;
    setScrollPosition(currentScrollPosition);
    
    const elements = document.querySelectorAll('.parallax-element');
    
    elements.forEach(element => {
      // Only process elements in viewport
      const rect = element.getBoundingClientRect();
      const isInViewport = (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0
      );
      
      if (!isInViewport) return;
      
      const speed = parseFloat(element.getAttribute('data-speed') || '0.1');
      const direction = element.getAttribute('data-direction') || 'vertical';
      const offset = currentScrollPosition * speed;
      
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
    let lastScrollPos = 0;
    let ticking = false;
    
    const onScroll = () => {
      lastScrollPos = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
    };
  }, [isMobile, initialLoadComplete]);
  
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
