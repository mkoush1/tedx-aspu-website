import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowBigDown, Calendar, MapPin, Ticket, Info } from 'lucide-react';
import { ScrollAnimation } from './BackgroundPattern';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHighEndDevice, setIsHighEndDevice] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetDate = useRef(new Date('2025-07-07T00:00:00'));
  
  // Device and performance detection with better accuracy
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
    
    // Add load event with progressive enhancement
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.add('content-loaded');
    }, isMobile ? 300 : 500);
    
    // Scroll detection - only track if scrolled (for performance)
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 50) {
        setHasScrolled(true);
        
        // Once scrolled, remove listener to save resources
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
  }, [isMobile]);
  
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
    
    // Request next frame - more efficient than setInterval
    animationFrameRef.current = requestAnimationFrame(() => {
      // Only update seconds frequently if user hasn't scrolled and isn't on mobile
      if (!hasScrolled && !isMobile) {
        updateCountdown();
      }
    });
  }, [hasScrolled, isMobile]);

  // Set up and clean up the countdown timer with adaptive refresh rate
  useEffect(() => {
    updateCountdown();
    
    // Use different update intervals based on device and scroll state
    let interval;
    if (hasScrolled || isMobile) {
      // Slower updates for better performance on mobile or when not in view
      const intervalTime = isMobile ? 60000 : 30000; // 1 minute for mobile, 30 seconds otherwise
      interval = setInterval(updateCountdown, intervalTime);
    } else if (isTablet) {
      // Medium frequency for tablets
      interval = setInterval(updateCountdown, 10000); // 10 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateCountdown, hasScrolled, isMobile, isTablet]);

  // Optimized video background loading
  useEffect(() => {
    // Lazy load YouTube video with intersection observer
    if (videoRef.current) {
      // Only load video on desktop or high-end mobile devices
      if (isMobile && !isHighEndDevice) {
        // Don't load video on low-end mobile devices
        return;
      }
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.target instanceof HTMLVideoElement) {
            if (!entry.target.src) {
              // Customize video quality based on device
              const quality = isMobile ? 'low' : 'medium';
              
              entry.target.src = `https://media-hosting.imagekit.io//d363ebe62e1b422f/video-output-7DA270A3-826C-45AF-A51E-4A2B9DE84B17-1.mov?Expires=1837196846&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xNwInVQ8on2NpL2now08jFbNoqI~H3cKGPoWBlVwCG5rjsPUWAsxzgkI-5rhfwC51HAdG3AHmP7PDezj0mAodBKvxGWAI36SSKYNNy2qG3ETqQoLPrie4nyBrHmfbBz2zmjZwHQj33COVhJEQnC1Z~p1PvW4NormbDEsR2Rqf~rayv0St2cSmHBwOMqBzOjW3pVa59TeT~sa~M~XxFi09UybsJNfFDTaF7x7LTVkKrbG3u1lg0z98XHBLsLdKXbwsrPnSj8z-xUcHNeU43N2FqZqmLwhdZi9O4KO-a-2ru64NCWiiSLQ2i3CNcbj9vVsTFLjtkNTPmjOTWiN95jNPw__`;
            }
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(videoRef.current);
      return () => observer.disconnect();
    }
  }, [isMobile, isHighEndDevice]);

  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden text-white"
      aria-label="Hero Section"
    >
      {/* Video background with optimized loading */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {(!isMobile || isHighEndDevice) && (
          <video
            ref={videoRef as any}
            className="absolute w-full h-full object-cover scale-110 origin-center"
            autoPlay
            muted
            loop
            playsInline
            style={{
              filter: isMobile ? 'brightness(0.5)' : 'brightness(0.6) contrast(1.1)',
            }}
          >
            <source 
              src="https://media-hosting.imagekit.io//d363ebe62e1b422f/video-output-7DA270A3-826C-45AF-A51E-4A2B9DE84B17-1.mov?Expires=1837196846&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xNwInVQ8on2NpL2now08jFbNoqI~H3cKGPoWBlVwCG5rjsPUWAsxzgkI-5rhfwC51HAdG3AHmP7PDezj0mAodBKvxGWAI36SSKYNNy2qG3ETqQoLPrie4nyBrHmfbBz2zmjZwHQj33COVhJEQnC1Z~p1PvW4NormbDEsR2Rqf~rayv0St2cSmHBwOMqBzOjW3pVa59TeT~sa~M~XxFi09UybsJNfFDTaF7x7LTVkKrbG3u1lg0z98XHBLsLdKXbwsrPnSj8z-xUcHNeU43N2FqZqmLwhdZi9O4KO-a-2ru64NCWiiSLQ2i3CNcbj9vVsTFLjtkNTPmjOTWiN95jNPw__" 
              type="video/quicktime"
            />
          </video>
        )}
        
        {/* Fallback background color/image for mobile or when video fails */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
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
      
      <div className="container mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center justify-center min-h-[100svh]">
        {/* Main content wrapper */}
        <div className="flex flex-col items-center justify-center -mt-16 sm:-mt-20 stagger-fade loaded">
          {/* TEDxASPU Logo */}
          <ScrollAnimation animation="fade-in" delay={100} rootMargin="0px 0px 50px 0px">
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-center">
                <img 
                  src="https://media-hosting.imagekit.io//0175c99f3d9242af/logo-white.png?Expires=1836924074&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EfdL9paqXHQxuaYE5TxpvCDTGtk09skcFJSYPC4NHSEjkwdaLIO4QH0grD9XBkVF6088uCF67UN67Ne~hsmirDsYNtF2VOazQe8vO5LKfKqxYfEx3bMEaeaA5dixkgWWd4y9HqjgKuLPnRd44QhqLQs0phFNtZk-IlpVoQ6P2gfYfSp5G8w0B6IzxpxqUVJN1G6XCdRkDX~M7zQ3wjaQgeD~woV1fHY7x1ut5ACbDgN3XLTj4dbJnCZl8965KqB31zN0L27mylSC7ecuMqsQpGfj5pb6yFnlg~uQZ9Pr~j0YLnFmQZLII77qAbddEV1iQZNUuSpK47erD6E4QrXGNQ__"
                  alt="TEDxASPU Logo"
                  className="h-12 sm:h-16 md:h-20 w-auto premium-image"
                  loading="eager"
                  width={isMobile ? 120 : 180}
                  height={isMobile ? 40 : 60}
                />
              </div>
            </div>
          </ScrollAnimation>
          
          {/* IDEAS WORTH SPREADING */}
          <ScrollAnimation animation="fade-in" delay={300} rootMargin="0px 0px 50px 0px">
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wider mb-2">
                Ideas Worth Spreading
              </h3>
              <h3 className="font-arabic text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wider mb-2">
                أفكار تستحق النشر
              </h3>
              
              {/* Decorative line */}
              <div className="luxury-divider"></div>
            </div>
          </ScrollAnimation>

          {/* Event date */}
          <ScrollAnimation animation="fade-up" delay={500} rootMargin="0px 0px 50px 0px">
            <h2 className="text-lg sm:text-xl text-white/80 font-light tracking-wider mb-6 sm:mb-10">JULY 7, 2025</h2>
          </ScrollAnimation>
          
          {/* Countdown Timer - Optimized rendering */}
          <ScrollAnimation animation="fade-up" delay={700} rootMargin="0px 0px 50px 0px">
            <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10">
              <CountdownUnit value={countdown.days} label="Days" delay={0} isMobile={isMobile} isHighEndDevice={isHighEndDevice} />
              <CountdownUnit value={countdown.hours} label="Hours" delay={100} isMobile={isMobile} isHighEndDevice={isHighEndDevice} />
              <CountdownUnit value={countdown.minutes} label="Minutes" delay={200} isMobile={isMobile} isHighEndDevice={isHighEndDevice} />
              <CountdownUnit value={countdown.seconds} label="Seconds" delay={300} isMobile={isMobile} isHighEndDevice={isHighEndDevice} />
            </div>
          </ScrollAnimation>
          
          {/* Event Details Summary - Location and Time */}
          <ScrollAnimation animation="fade-up" delay={800} rootMargin="0px 0px 50px 0px">
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
          </ScrollAnimation>
          
          {/* CTA Buttons */}
          <ScrollAnimation animation="fade-up" delay={900} rootMargin="0px 0px 50px 0px">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
              <a 
                href="#tickets"
                className="btn-primary hover:shadow-[0_0_15px_rgba(229,69,69,0.5)] transition-all duration-300 text-center"
                aria-label="Get Tickets"
              >
                <Ticket className="w-4 h-4 mr-2" />
                Get Tickets
              </a>
          <a
            href="#about"
                className="btn-secondary transition-all duration-300 text-center"
                aria-label="Learn More About TEDxASPU"
          >
                <Info className="w-4 h-4 mr-2" />
            Learn More
              </a>
            </div>
          </ScrollAnimation>
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
