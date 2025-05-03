import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowBigDown, Calendar, MapPin, Ticket, Info } from 'lucide-react';
import { ScrollAnimation } from './BackgroundPattern';
import Logo from './Logo';

// Decorative ornament component with premium design
const PremiumOrnament = ({ className = '' }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-tedx-red-500/70"></div>
    <div className="mx-2">
      <div className="w-2 h-2 bg-tedx-red-500/70 transform rotate-45"></div>
    </div>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-tedx-red-500/70"></div>
  </div>
);

// Premium corner accents for luxury feel
const LuxuryCornerAccents = ({ color = "red-500/30", size = 32, className = "" }) => (
  <div className={`${className} pointer-events-none`}>
    {/* Top left */}
    <div className="absolute top-5 left-5">
      <div className={`h-px w-${size} bg-gradient-to-r from-${color} to-transparent`}></div>
      <div className={`h-${size} w-px bg-gradient-to-b from-${color} to-transparent`}></div>
    </div>
    
    {/* Top right */}
    <div className="absolute top-5 right-5">
      <div className={`h-px w-${size} bg-gradient-to-l from-${color} to-transparent`}></div>
      <div className={`h-${size} w-px bg-gradient-to-b from-${color} to-transparent`}></div>
    </div>
    
    {/* Bottom left */}
    <div className="absolute bottom-5 left-5">
      <div className={`h-px w-${size} bg-gradient-to-r from-${color} to-transparent`}></div>
      <div className={`h-${size} w-px bg-gradient-to-t from-${color} to-transparent`}></div>
    </div>
    
    {/* Bottom right */}
    <div className="absolute bottom-5 right-5">
      <div className={`h-px w-${size} bg-gradient-to-l from-${color} to-transparent`}></div>
      <div className={`h-${size} w-px bg-gradient-to-t from-${color} to-transparent`}></div>
    </div>
  </div>
);

// Subtle scanline effect for premium look
const LuxuryScanline = ({ color = "white/5", speed = 10 }) => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div 
      className={`absolute inset-0 bg-${color}`}
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 50%)`,
        backgroundSize: '100% 4px',
        backgroundRepeat: 'repeat',
        animation: `scanline ${speed}s linear infinite`,
        opacity: 0.05
      }}
    ></div>
  </div>
);

// Premium countdown unit with optimized display
const CountdownUnit = ({ value, label, delay = 0, isMobile = false, isHighEndDevice = false }) => (
  <div className="flex flex-col items-center">
    <div
      className={`${isMobile ? 'bg-black/60' : 'glass-dark'} rounded-lg px-2 sm:px-4 py-2 sm:py-3 w-16 sm:w-20 md:w-24 text-center mb-1 sm:mb-2 animate-fade-in`}
      style={{ 
        animationDelay: `${delay}ms`,
        boxShadow: isHighEndDevice && !isMobile ? '0 4px 20px rgba(229, 62, 62, 0.1)' : 'none'
      }}
    >
      <span className="text-xl sm:text-2xl md:text-3xl font-light text-white">
        {value < 10 ? `0${value}` : value}
      </span>
    </div>
    <span className="text-xs sm:text-sm uppercase text-white/70 animate-fade-in" style={{ animationDelay: `${delay + 100}ms` }}>
      {label}
    </span>
  </div>
);

const Hero = () => {
  // State management with performance optimizations
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isHighEndDevice, setIsHighEndDevice] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetDate = useRef(new Date('2025-07-26T00:00:00'));
  
  // Device detection and setup
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      
      // Enhanced device capability detection
      const devicePixelRatio = window.devicePixelRatio || 1;
      const hasHighRes = devicePixelRatio >= 2;
      const hasGoodMemory = 'deviceMemory' in navigator ? (navigator as any).deviceMemory > 4 : true;
      const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      setIsHighEndDevice(!isMobile && hasHighRes && hasGoodMemory && !hasReducedMotion);
      setReduceMotion(hasReducedMotion);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    // Add load event with consistent enhancement
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.add('content-loaded');
    }, 500);
    
    // Scroll detection - only track if scrolled (for performance)
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 50) {
        setHasScrolled(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadTimer);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hasScrolled, isMobile]);

  // Add a video loading handler to ensure it plays on mobile
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Force video play on load
      const playVideo = () => {
        video.play().catch(err => {
          console.error("Video playback failed", err);
          // Add fallback background if video fails
          video.style.display = 'none';
        });
      };

      // Handle video loading errors
      const handleError = () => {
        console.error("Video loading failed");
        video.style.display = 'none';
      };
      
      video.addEventListener('error', handleError);
      
      // Try to play on load
      playVideo();
      
      // Also try to play on user interaction
      const handleInteraction = () => {
        playVideo();
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('click', handleInteraction);
      };
      
      document.addEventListener('touchstart', handleInteraction);
      document.addEventListener('click', handleInteraction);
      
      return () => {
        video.removeEventListener('error', handleError);
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('click', handleInteraction);
      };
    }
  }, []);

  // Optimized countdown timer with performance considerations
  const updateCountdown = useCallback(() => {
    const now = new Date();
    const difference = targetDate.current.getTime() - now.getTime();
    
    if (difference <= 0) {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    setCountdown({ days, hours, minutes, seconds });
  }, []);

  // Set up and clean up the countdown timer
  useEffect(() => {
    // Initial update
    updateCountdown();
    
    // Update every second
    const interval = setInterval(updateCountdown, 1000);
    
    return () => {
      clearInterval(interval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateCountdown]);

  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden text-white"
      aria-label="Hero Section"
    >
      {/* Video background with optimized loading */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* Mobile-optimized fallback background */}
        <div className="absolute inset-0 bg-black z-0"></div>
        
        {/* Video element */}
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover scale-110 origin-center z-10"
          autoPlay
          muted
          loop
          playsInline
          style={{
            filter: isMobile ? 'brightness(0.4) contrast(1.2)' : 'brightness(0.6) contrast(1.1)',
          }}
        >
          <source 
            src="https://media-hosting.imagekit.io//d363ebe62e1b422f/video-output-7DA270A3-826C-45AF-A51E-4A2B9DE84B17-1.mov?Expires=1837196846&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xNwInVQ8on2NpL2now08jFbNoqI~H3cKGPoWBlVwCG5rjsPUWAsxzgkI-5rhfwC51HAdG3AHmP7PDezj0mAodBKvxGWAI36SSKYNNy2qG3ETqQoLPrie4nyBrHmfbBz2zmjZwHQj33COVhJEQnC1Z~p1PvW4NormbDEsR2Rqf~rayv0St2cSmHBwOMqBzOjW3pVa59TeT~sa~M~XxFi09UybsJNfFDTaF7x7LTVkKrbG3u1lg0z98XHBLsLdKXbwsrPnSj8z-xUcHNeU43N2FqZqmLwhdZi9O4KO-a-2ru64NCWiiSLQ2i3CNcbj9vVsTFLjtkNTPmjOTWiN95jNPw__" 
            type="video/mp4"
          />
        </video>

        {/* Overlay gradient for better text readability */}
        <div className={`absolute inset-0 bg-gradient-to-b ${isMobile ? 'from-black/80 via-black/70 to-black/80' : 'from-black/70 via-black/60 to-black/70'} z-20`}></div>
      </div>
      
      {/* Premium subtle overlay - optimized for different devices */}
      {!isMobile && isHighEndDevice && !reduceMotion && (
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      )}
      
      {/* Premium effects - only on desktop and high-end devices */}
      {!isMobile && isHighEndDevice && isLoaded && !reduceMotion && (
        <>
          <LuxuryScanline color="white/3" speed={5} />
          <LuxuryCornerAccents color="red-500/30" size={32} className="w-full h-full absolute inset-0 z-10 pointer-events-none" />
          
          {/* Premium animated gradient overlays */}
          <div className="absolute inset-0 bg-gradient-radial from-tedx-red-900/10 to-transparent opacity-20"></div>
        </>
      )}
      
      {/* Universal gradient overlays - works on all devices */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-30 flex flex-col items-center justify-center min-h-[100svh]">
        {/* Main content wrapper */}
        <div className="flex flex-col items-center justify-center -mt-16 sm:-mt-20">
          {/* TEDxASPU Logo */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center justify-center">
              <Logo size="lg" />
            </div>
          </div>
          
          {/* IDEAS WORTH SPREADING */}
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wider mb-2">
              Ideas Worth Spreading
            </h3>
            <h3 className="font-arabic text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wider mb-2">
              أفكار تستحق النشر
            </h3>
          </div>
          
          {/* Event date */}
          <div className="text-lg sm:text-xl text-white/80 font-light tracking-wider mb-6 sm:mb-10">
            JULY 26, 2025
          </div>
          
          {/* Countdown Timer - without ScrollAnimation wrapper */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10">
            <CountdownUnit value={countdown.days} label="DAYS" delay={0} isMobile={isMobile} isHighEndDevice={isHighEndDevice} />
            <CountdownUnit value={countdown.hours} label="HOURS" delay={100} isMobile={isMobile} isHighEndDevice={isHighEndDevice} />
            <CountdownUnit value={countdown.minutes} label="MINUTES" delay={200} isMobile={isMobile} isHighEndDevice={isHighEndDevice} />
            <CountdownUnit value={countdown.seconds} label="SECONDS" delay={300} isMobile={isMobile} isHighEndDevice={isHighEndDevice} />
          </div>
          
          {/* Event Details Summary - Location and Time - without ScrollAnimation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-10 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-tedx-red-500" />
              <span className="text-sm sm:text-base font-inter">Applied Science Private University</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-tedx-red-500" />
              <span className="text-sm sm:text-base font-inter">10:00 AM - 5:00 PM</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <button 
              className="btn-primary hover:shadow-[0_0_15px_rgba(229,69,69,0.5)] transition-all duration-300 text-center cursor-not-allowed"
              aria-label="Tickets Coming Soon"
            >
              <Ticket className="w-4 h-4 mr-2" />
              Coming Soon
            </button>
            <a
              href="#about"
              className="btn-secondary transition-all duration-300 text-center"
              aria-label="Learn More About TEDxASPU"
            >
              <Info className="w-4 h-4 mr-2" />
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll indicator with optimized animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1200ms' }}>
          <div className="flex flex-col items-center text-white/50 text-sm animate-pulse-subtle">
            <span className="sr-only">Scroll down for more content</span>
            <span aria-hidden="true">Scroll</span>
            <ArrowBigDown className="h-5 w-5 mt-1" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
