import React, { useState, useEffect, useRef, useCallback } from 'react';
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

// Custom hooks for better performance
const useThrottledValue = (value: any, limit: number) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
};

function App() {
  // State management with performance optimizations
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const throttledScrollPosition = useThrottledValue(scrollPosition, 50);
  const observerRefs = useRef(new Map());
  const [activeSections, setActiveSections] = useState(new Set(['hero']));
  const [devicePerformance, setDevicePerformance] = useState('high'); // 'low', 'medium', 'high'
  
  // Check device type and performance capabilities on mount
  useEffect(() => {
    // Check device type
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    
    // Check device performance
    const checkDevicePerformance = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Simple performance estimation based on device
      if (/(iphone|ipod|android)/.test(userAgent) && !/(ipad|tablet)/.test(userAgent)) {
        // Most mobile phones
        setDevicePerformance('low');
      } else if (/(ipad|android(?!.*mobile))/.test(userAgent) || isTablet) {
        // Tablets and mid-range devices
        setDevicePerformance('medium');
      } else {
        // Desktops and high-end devices
        setDevicePerformance('high');
      }
      
      // Further refine based on memory (if available)
      if ('deviceMemory' in navigator) {
        const memory = (navigator as any).deviceMemory;
        if (memory <= 2) setDevicePerformance('low');
        else if (memory <= 4) setDevicePerformance('medium');
        else setDevicePerformance('high');
      }
    };
    
    // Check on initial load
    checkDeviceType();
    checkDevicePerformance();
    
    // Mark initial load as complete after a short delay
    const timer = setTimeout(() => {
      setInitialLoadComplete(true);
      document.body.classList.add('loaded');
    }, 1000);
    
    // Add window resize listener
    window.addEventListener('resize', checkDeviceType);
    return () => {
      window.removeEventListener('resize', checkDeviceType);
      clearTimeout(timer);
    };
  }, [isTablet]);

  // Setup IntersectionObserver to track visible sections with optimized options
  useEffect(() => {
    const observerOptions = {
      rootMargin: '0px',
      threshold: isMobile ? 0.05 : 0.1 // Lower threshold for mobile for better performance
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          setActiveSections(prev => {
            const updated = new Set(prev);
            updated.add(sectionId);
            return updated;
          });
          
          // Add active class for CSS targeting
          entry.target.classList.add('section-active');
        } else {
          setActiveSections(prev => {
            const updated = new Set(prev);
            updated.delete(sectionId);
            return updated;
          });
          
          // Remove active class
          entry.target.classList.remove('section-active');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
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
  }, [isMobile]);

  // Optimized scroll handler with performance considerations
  const handleScroll = useCallback(() => {
    // Skip parallax effects based on device performance
    if (devicePerformance === 'low') return;
    
    // Skip if still during initial loading
    if (!initialLoadComplete) return;
    
    const currentScrollPosition = window.scrollY;
    setScrollPosition(currentScrollPosition);
    
    // Only process parallax on medium and high performance devices
    if (devicePerformance === 'high' || (devicePerformance === 'medium' && !isMobile)) {
      const elements = document.querySelectorAll('.parallax-element');
      
      elements.forEach(element => {
        // Only process elements in viewport for performance
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
    }
  }, [devicePerformance, initialLoadComplete, isMobile]);
  
  // Setup optimized scroll handler with proper cleanup
  useEffect(() => {
    let ticking = false;
    
    const onScroll = () => {
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
    };
  }, [handleScroll]);
  
  // Dynamically add theme class for dark mode support
  useEffect(() => {
    // Check user preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    
    // Listen for changes
    const darkModeListener = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', darkModeListener);
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', darkModeListener);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundPattern 
        isMobile={isMobile || devicePerformance === 'low'} 
      />
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
