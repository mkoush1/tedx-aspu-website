import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowBigDown, Calendar, MapPin } from 'lucide-react';

// Enhanced animation component with consistent branding
const SmoothFadeIn = ({ children, delay = 0, duration = 0.6 }: { children: React.ReactNode; delay?: number; duration?: number }) => (
  <div
    className="opacity-0 animate-fadeIn"
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      animationFillMode: 'forwards'
    }}
  >
    {children}
  </div>
);

// Luxury corner accents with consistent brand colors - now used on all devices
const LuxuryCornerAccents = ({ color = "tedx-red-500/30", size = 32, className = "" }: { color?: string; size?: number; className?: string }) => (
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

// Subtle scanline effect with consistent design language - now used on all devices
const LuxuryScanline = ({ color = "white/5", speed = 10 }: { color?: string; speed?: number }) => (
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

// Premium countdown unit with consistent styling for all devices
const CountdownUnit = ({ 
  value, 
  label, 
  delay = 0
}: { 
  value: number; 
  label: string; 
  delay?: number;
}) => (
  <div 
    className="flex flex-col items-center transform transition-all duration-500 ease-out hover:scale-105"
  >
    <div
      className="relative overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl
                 px-2 sm:px-4 py-3 sm:py-4 w-[65px] sm:w-[90px] md:w-[100px] text-center mb-2
                 transform transition-all duration-300 hover:border-tedx-red-500/30"
      style={{ 
        animationDelay: `${delay}ms`,
        boxShadow: '0 8px 32px rgba(229, 62, 62, 0.1)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
      <span className="relative text-2xl sm:text-3xl md:text-4xl font-light">
        {value < 10 ? `0${value}` : value}
      </span>
    </div>
    <span className="text-[10px] sm:text-sm uppercase tracking-wider text-white/70 font-medium">
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetDate = useRef(new Date('2025-07-07T00:00:00'));
  
  // Device-agnostic loading and setup
  useEffect(() => {
    // Check for reduced motion preference
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduceMotion(hasReducedMotion);
    
    // Add load event with consistent enhancement
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.add('content-loaded');
    }, 500);
    
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
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadTimer);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  
  // Optimized countdown timer with consistent behavior
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
      // Only update seconds frequently if user hasn't scrolled
      if (!hasScrolled) {
        updateCountdown();
      }
    });
  }, [hasScrolled]);

  // Set up and clean up the countdown timer with consistent refresh rate
  useEffect(() => {
    updateCountdown();
    
    // Use the same update intervals for all devices
    const interval: number = setInterval(updateCountdown, 30000) as unknown as number; // 30 seconds for all devices
    
    return () => {
      clearInterval(interval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateCountdown]);

  // Add a video loading handler to ensure it plays on mobile
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Force video play on load
      const playVideo = () => {
        video.play().catch(err => {
          console.error("Video playback failed", err);
        });
      };
      
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
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('click', handleInteraction);
      };
    }
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden text-white"
    >
      {/* Mobile-optimized HTML5 video background with multiple formats */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-black">
        {/* Mobile-optimized fallback background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(/mobile-bg.jpg)'
          }}
        ></div>
        
        {/* Direct video element without fancy positioning */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <video
            ref={videoRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.7) contrast(1.05)'
            }}
            autoPlay
            playsInline
            muted
            loop
            poster="/mobile-bg.jpg"
            preload="auto"
          >
            {/* Use multiple source formats for better compatibility */}
            <source 
              src="https://media-hosting.imagekit.io//d363ebe62e1b422f/video-output-7DA270A3-826C-45AF-A51E-4A2B9DE84B17-1.mov?Expires=1837196846&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xNwInVQ8on2NpL2now08jFbNoqI~H3cKGPoWBlVwCG5rjsPUWAsxzgkI-5rhfwC51HAdG3AHmP7PDezj0mAodBKvxGWAI36SSKYNNy2qG3ETqQoLPrie4nyBrHmfbBz2zmjZwHQj33COVhJEQnC1Z~p1PvW4NormbDEsR2Rqf~rayv0St2cSmHBwOMqBzOjW3pVa59TeT~sa~M~XxFi09UybsJNfFDTaF7x7LTVkKrbG3u1lg0z98XHBLsLdKXbwsrPnSj8z-xUcHNeU43N2FqZqmLwhdZi9O4KO-a-2ru64NCWiiSLQ2i3CNcbj9vVsTFLjtkNTPmjOTWiN95jNPw__" 
              type="video/mp4" 
            />
          </video>
        </div>

        {/* Mobile-optimized gradient overlays */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/75 via-black/65 to-black/75 pointer-events-none"></div>
      </div>
      
      {/* Premium subtle overlay - now shown on all devices */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Premium effects - now shown on all devices */}
      {isLoaded && !reduceMotion && (
        <>
          <LuxuryScanline color="white/3" speed={5} />
          <LuxuryCornerAccents color="tedx-red-500/30" size={32} className="w-full h-full absolute inset-0 z-10 pointer-events-none" />
          
          {/* Premium animated gradient overlays */}
          <div className="absolute inset-0 bg-gradient-radial from-tedx-red-900/10 to-transparent opacity-20"></div>
        </>
      )}
      
      {/* Bottom gradient for better readability */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-20"></div>
      
      {/* Content wrapper - fully responsive with improved mobile support */}
      <div className="relative z-30 w-full min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          {/* TEDxASPU Logo - improved responsive sizing */}
          <div className="w-[120px] xs:w-[140px] sm:w-[160px] md:w-[200px] lg:w-[220px] mx-auto mb-4 sm:mb-6">
            <img 
              src="https://media-hosting.imagekit.io//0175c99f3d9242af/logo-white.png"
              alt="TEDxASPU Logo"
              className="w-full h-auto"
              loading="eager"
              width={220}
              height={73}
            />
          </div>
          
          {/* Ideas Worth Spreading - improved responsive text */}
          <div className="flex flex-col items-center space-y-2 mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-wide text-center">
              Ideas Worth Spreading
            </h3>
            <h3 className="font-arabic text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-light text-center">
              أفكار تستحق النشر
            </h3>
            <div className="w-16 xs:w-20 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-tedx-red-500/50 to-transparent mt-3 sm:mt-4"></div>
          </div>

          {/* Event date - improved responsive text */}
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl text-white font-light tracking-wider mb-6 sm:mb-8 md:mb-10 text-center">
            JULY 7, 2025
          </h2>
          
          {/* Countdown Timer - improved responsive grid */}
          <div className="grid grid-cols-4 gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5 mb-6 sm:mb-8 md:mb-10 w-full max-w-[85vw] xs:max-w-[90vw] sm:max-w-[600px] mx-auto">
            <CountdownUnit value={countdown.days} label="DAYS" delay={0} />
            <CountdownUnit value={countdown.hours} label="HOURS" delay={100} />
            <CountdownUnit value={countdown.minutes} label="MINUTES" delay={200} />
            <CountdownUnit value={countdown.seconds} label="SECONDS" delay={300} />
          </div>
          
          {/* Event Details - improved responsive layout */}
          <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-white text-center xs:text-left">
            <div className="flex items-center gap-1.5 xs:gap-2">
              <MapPin className="h-3.5 xs:h-4 sm:h-5 w-3.5 xs:w-4 sm:w-5 text-tedx-red-500" />
              <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-light">Applied Science Private University</span>
            </div>
            <div className="hidden xs:block h-3 xs:h-4 w-px bg-white/20"></div>
            <div className="flex items-center gap-1.5 xs:gap-2">
              <Calendar className="h-3.5 xs:h-4 sm:h-5 w-3.5 xs:w-4 sm:w-5 text-tedx-red-500" />
              <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-light">10:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - responsive positioning */}
      <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <SmoothFadeIn delay={1}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs xs:text-sm text-white/60 uppercase tracking-wider">Scroll</span>
            <ArrowBigDown className="w-5 h-5 xs:w-6 xs:h-6 text-white/60 animate-bounce" />
          </div>
        </SmoothFadeIn>
      </div>
    </section>
  );
};

export default Hero;
