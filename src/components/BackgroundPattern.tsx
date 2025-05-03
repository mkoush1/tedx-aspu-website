import React, { useEffect, useState, useRef } from 'react';

interface BackgroundPatternProps {
  isMobile?: boolean;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ isMobile = false }) => {
  // Performance metrics and optimizations
  const [isVisible, setIsVisible] = useState(true);
  const patternRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer for performance optimization
  useEffect(() => {
    if (!patternRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(patternRef.current);
    return () => observer.disconnect();
  }, []);
  
  // Reduce animation complexity based on device capability
  const isHighEndDevice = !isMobile && window.matchMedia('(min-resolution: 2dppx)').matches;
  
  return (
    <div 
      ref={patternRef} 
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Main background pattern with enhanced opacity - Premium style */}
      <div className="absolute inset-0 bg-arabesque bg-repeat opacity-[0.02]"></div>
      
      {/* Premium subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Premium luxury radial gradients - optimized rendering */}
      {isVisible && !isMobile && (
        <>
          <div className="absolute -top-20 -right-20 w-[35rem] h-[35rem] bg-gradient-radial from-red-600/3 to-transparent will-change-opacity"></div>
          <div className="absolute -bottom-20 -left-20 w-[35rem] h-[35rem] bg-gradient-radial from-red-600/3 to-transparent will-change-opacity"></div>
          
          {/* Only add more complex effects for high-end devices */}
          {isHighEndDevice && (
            <>
              <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-radial from-red-500/2 to-transparent"></div>
              <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-radial from-red-500/2 to-transparent"></div>
            </>
          )}
        </>
      )}
      
      {/* Limited radial gradients for mobile */}
      {isVisible && isMobile && (
        <>
          <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-radial from-red-600/3 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-radial from-red-600/3 to-transparent"></div>
        </>
      )}
      
      {/* Subtle animated particles - disabled on mobile, staggered animation for performance */}
      {isVisible && !isMobile && isHighEndDevice && (
        <div className="stagger-fade loaded">
          <div className="absolute top-10 left-1/4 w-1 h-1 rounded-full bg-red-400/10 animate-float" style={{ animationDuration: '20s', animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-red-400/15 animate-float" style={{ animationDuration: '25s', animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/2 left-10 w-1 h-1 rounded-full bg-red-400/10 animate-float" style={{ animationDuration: '30s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-40 w-1 h-1 rounded-full bg-red-400/15 animate-float" style={{ animationDuration: '22s', animationDelay: '3s' }}></div>
        </div>
      )}
      
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      
      {/* Premium diagonal line element - simplified for better performance */}
      {isVisible && !isMobile ? (
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden opacity-[0.02]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"></div>
          <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-600/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"></div>
          <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-600/40 to-transparent"></div>
          
          {/* Diagonal lines - premium style */}
          <div className="absolute top-0 left-0 w-[200%] h-[200%] rotate-45 opacity-20">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/15 to-transparent" style={{ top: '25%' }}></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent" style={{ top: '55%' }}></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/15 to-transparent" style={{ top: '85%' }}></div>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden opacity-[0.02]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"></div>
        </div>
      )}
      
      {/* Premium shimmer effect - disabled on mobile */}
      {isVisible && !isMobile && isHighEndDevice && (
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/4 -left-full w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" style={{ animationDuration: '10s' }}></div>
          <div className="absolute top-3/4 -left-full w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
        </div>
      )}
    </div>
  );
};

export default BackgroundPattern;

// Enhanced ScrollAnimation utility component with optimized performance
export const ScrollAnimation = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  threshold = 0.1, 
  className = '', 
  rootMargin = '0px', 
  once = true
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const domRef = React.useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    // Skip if has already animated and once=true
    if (once && hasAnimated) return;
    
    // Use different thresholds for mobile vs desktop
    const actualThreshold = isMobile ? Math.min(threshold, 0.05) : threshold;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) setHasAnimated(true); // Mark this animation as completed
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      });
    }, { 
      threshold: actualThreshold,
      rootMargin // Allow customizing root margin for earlier/later animations
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, isMobile, hasAnimated, once, rootMargin]);

  // Simplified animation classes for mobile
  const getMobileAnimationClass = () => {
    // Only use minimal animations on mobile for better performance
    return 'opacity-0 transition-all duration-500 ease-out';
  };

  // Premium animation classes
  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-8 transition-all duration-800 ease-premium',
    'fade-down': 'opacity-0 -translate-y-8 transition-all duration-800 ease-premium',
    'fade-left': 'opacity-0 translate-x-8 transition-all duration-800 ease-premium',
    'fade-right': 'opacity-0 -translate-x-8 transition-all duration-800 ease-premium',
    'fade-up-right': 'opacity-0 translate-y-6 -translate-x-6 transition-all duration-800 ease-premium',
    'fade-up-left': 'opacity-0 translate-y-6 translate-x-6 transition-all duration-800 ease-premium',
    'zoom-in': 'opacity-0 scale-95 transition-all duration-800 ease-premium',
    'zoom-out': 'opacity-0 scale-105 transition-all duration-800 ease-premium',
    'flip': 'opacity-0 rotateY-90 perspective-1000 transition-all duration-800 ease-premium',
    'slide-up': 'opacity-0 translate-y-12 transition-all duration-800 ease-premium',
    'slide-down': 'opacity-0 -translate-y-12 transition-all duration-800 ease-premium',
    'reveal': 'opacity-0 transition-all duration-800 ease-premium',
    'fade-in': 'opacity-0 transition-all duration-800 ease-premium',
    // Premium animations
    'luxury-fade': 'opacity-0 transition-all duration-1200 ease-premium',
    'luxury-rise': 'opacity-0 translate-y-8 transition-all duration-1200 ease-premium',
    'luxury-slide': 'opacity-0 translate-x-8 transition-all duration-1200 ease-premium',
    'premium-zoom': 'opacity-0 scale-98 transition-all duration-1200 ease-premium',
    'premium-reveal': 'opacity-0 transition-all duration-1400 ease-premium'
  };

  // All animations on mobile just fade in
  const getMobileVisibleClass = () => 'opacity-100';

  // Premium animation visible state classes
  const visibleClasses = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-down': 'opacity-100 translate-y-0',
    'fade-left': 'opacity-100 translate-x-0',
    'fade-right': 'opacity-100 translate-x-0',
    'fade-up-right': 'opacity-100 translate-y-0 translate-x-0',
    'fade-up-left': 'opacity-100 translate-y-0 translate-x-0',
    'zoom-in': 'opacity-100 scale-100',
    'zoom-out': 'opacity-100 scale-100',
    'flip': 'opacity-100 rotateY-0',
    'slide-up': 'opacity-100 translate-y-0',
    'slide-down': 'opacity-100 translate-y-0',
    'reveal': 'opacity-100',
    'fade-in': 'opacity-100',
    // Premium animations
    'luxury-fade': 'opacity-100',
    'luxury-rise': 'opacity-100 translate-y-0',
    'luxury-slide': 'opacity-100 translate-x-0',
    'premium-zoom': 'opacity-100 scale-100',
    'premium-reveal': 'opacity-100'
  };

  // Choose animation classes based on device
  const animationClass = isMobile ? getMobileAnimationClass() : (animationClasses[animation] || animationClasses['fade-up']);
  const visibleClass = isMobile ? getMobileVisibleClass() : (visibleClasses[animation] || visibleClasses['fade-up']);

  return (
    <div
      ref={domRef}
      className={`${className} ${animationClass} ${isVisible ? visibleClass : ''} ${hasAnimated ? 'loaded-animation' : ''}`}
      style={{ 
        transitionDelay: `${isMobile ? Math.min(delay, 100) : delay}ms`,
        willChange: isMobile ? 'opacity' : 'transform, opacity'
      }}
      data-animation-state={isVisible ? 'visible' : 'hidden'}
    >
      {children}
    </div>
  );
}; 