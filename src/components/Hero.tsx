import React, { useState, useEffect } from 'react';
import { ArrowBigDown, Calendar, MapPin, Ticket, Info } from 'lucide-react';
import { LuxuryCornerAccents, LuxuryScanline, LuxuryTextReveal, LuxuryAnimatedGradient, LuxuryHighlight } from './LuxuryEffects';

// Decorative ornament component for Apple-inspired luxury design
const LuxuryOrnament = ({ className = '' }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-600/70"></div>
    <div className="mx-2">
      <div className="w-2 h-2 bg-red-600/70 transform rotate-45"></div>
    </div>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-600/70"></div>
  </div>
);

// Apple-inspired premium countdown unit for luxury styling
const CountdownUnit = ({ value, label, delay }) => (
  <div 
    className="relative group bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-xl p-4 sm:p-6 rounded-2xl text-center overflow-hidden shadow-luxury-md animate-slide-up" 
    style={{animationDelay: `${delay}ms`}}
  >
    {/* Subtle corner dots */}
    <div className="absolute top-2 left-2 w-0.5 h-0.5 rounded-full bg-red-500/40"></div>
    <div className="absolute top-2 right-2 w-0.5 h-0.5 rounded-full bg-red-500/40"></div>
    <div className="absolute bottom-2 left-2 w-0.5 h-0.5 rounded-full bg-red-500/40"></div>
    <div className="absolute bottom-2 right-2 w-0.5 h-0.5 rounded-full bg-red-500/40"></div>
    
    {/* Decorative borders */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-600/20 to-transparent"></div>
    <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-600/20 to-transparent"></div>
    
    {/* Content with premium typography */}
    <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-red-100 tracking-tight">{value}</div>
    <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium text-red-300/90">{label}</div>
    
    {/* Apple-style hover effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-red-900/10 to-transparent transition-opacity duration-700"></div>
  </div>
);

const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-07-07T00:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden text-white">
      {/* YouTube background video with enhanced styling */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="absolute w-[calc(100%+200px)] sm:w-[calc(100%+300px)] h-[calc(100%+200px)] sm:h-[calc(100%+300px)] -top-[100px] sm:-top-[150px] -left-[100px] sm:-left-[150px] min-w-[200%] min-h-[200%] max-w-none max-h-none opacity-90"
          src="https://www.youtube.com/embed/KZwbDOCi4xw?autoplay=1&mute=1&controls=0&showinfo=0&start=56&end=87&loop=1&playlist=KZwbDOCi4xw&disablekb=1&modestbranding=1&iv_load_policy=3&cc_load_policy=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          style={{
            filter: 'brightness(0.3) contrast(1.3) saturate(1.1)',
            border: 'none',
            objectFit: 'cover',
            position: 'absolute',
            transform: 'scale(1.2)',
          }}
        ></iframe>
      </div>
      
      {/* Premium subtle grid overlay - Apple style */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Apple-inspired scanline effect */}
      <LuxuryScanline color="white/3" speed={5} />
      
      {/* Luxury Corner Accents */}
      <LuxuryCornerAccents color="red-500/30" size={32} className="w-full h-full absolute inset-0 z-10 pointer-events-none" />
      
      {/* Background animated gradient */}
      <LuxuryAnimatedGradient 
        className="absolute inset-0 z-5 opacity-30" 
        colors={['rgba(139,0,0,0.15)', 'rgba(0,0,0,0)']} 
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center justify-center min-h-[100svh]">
        {/* Main content wrapper */}
        <div className="flex flex-col items-center justify-center -mt-16 sm:-mt-20 fade-transition">
          {/* TEDxASPU Logo */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center justify-center">
              <img 
                src="https://media-hosting.imagekit.io//0175c99f3d9242af/logo-white.png?Expires=1836924074&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EfdL9paqXHQxuaYE5TxpvCDTGtk09skcFJSYPC4NHSEjkwdaLIO4QH0grD9XBkVF6088uCF67UN67Ne~hsmirDsYNtF2VOazQe8vO5LKfKqxYfEx3bMEaeaA5dixkgWWd4y9HqjgKuLPnRd44QhqLQs0phFNtZk-IlpVoQ6P2gfYfSp5G8w0B6IzxpxqUVJN1G6XCdRkDX~M7zQ3wjaQgeD~woV1fHY7x1ut5ACbDgN3XLTj4dbJnCZl8965KqB31zN0L27mylSC7ecuMqsQpGfj5pb6yFnlg~uQZ9Pr~j0YLnFmQZLII77qAbddEV1iQZNUuSpK47erD6E4QrXGNQ__"
                alt="TEDxASPU Logo"
                className="h-12 sm:h-16 md:h-20 w-auto drop-shadow-[0_0_15px_rgba(229,69,69,0.4)] fade-transition"
              />
            </div>
          </div>
          
          {/* IDEAS WORTH SPREADING */}
          <div className="mb-12 sm:mb-16 fade-transition">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wider mb-2">
              Ideas Worth Spreading
            </h3>
            
            {/* Decorative line */}
            <div className="w-20 sm:w-24 h-[1px] mx-auto bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
          </div>

          {/* Event date */}
          <h2 className="text-lg sm:text-xl text-white/80 font-light tracking-wider mb-6 sm:mb-10 fade-transition">JULY 7, 2025</h2>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 fade-transition">
            <div className="flex flex-col items-center">
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg px-2 sm:px-4 py-2 sm:py-3 w-16 sm:w-20 md:w-24 text-center mb-1 sm:mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-light text-white">
                  {countdown.days}
                </span>
              </div>
              <span className="text-xs sm:text-sm uppercase text-white/70">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg px-2 sm:px-4 py-2 sm:py-3 w-16 sm:w-20 md:w-24 text-center mb-1 sm:mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-light text-white">
                  {countdown.hours}
                </span>
              </div>
              <span className="text-xs sm:text-sm uppercase text-white/70">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg px-2 sm:px-4 py-2 sm:py-3 w-16 sm:w-20 md:w-24 text-center mb-1 sm:mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-light text-white">
                  {countdown.minutes}
                </span>
              </div>
              <span className="text-xs sm:text-sm uppercase text-white/70">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg px-2 sm:px-4 py-2 sm:py-3 w-16 sm:w-20 md:w-24 text-center mb-1 sm:mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-light text-white">
                  {countdown.seconds}
                </span>
              </div>
              <span className="text-xs sm:text-sm uppercase text-white/70">Seconds</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto fade-transition">
            <a 
              href="#tickets"
              className="bg-gradient-to-r from-red-700 to-red-600 text-white py-3 px-8 rounded-full font-medium hover:shadow-[0_0_15px_rgba(229,69,69,0.5)] transition-all duration-300 text-center"
            >
              Get Tickets
            </a>
          <a
            href="#about"
              className="border border-white/20 bg-black/30 backdrop-blur-sm text-white py-3 px-8 rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center"
          >
            Learn More
          </a>
        </div>
      </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-transition">
          <div className="flex flex-col items-center text-white/50 text-sm animate-pulse">
            <span>Scroll</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
