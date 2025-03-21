import React from 'react';

interface BackgroundPatternProps {
  isMobile?: boolean;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ isMobile = false }) => {
  // Reduced animations for mobile
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Main background pattern with enhanced opacity - Apple style */}
      <div className="absolute inset-0 bg-arabesque bg-repeat opacity-[0.02]"></div>
      
      {/* Apple-inspired subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Premium luxury radial gradients - Apple style, reduced for mobile */}
      {!isMobile && (
        <>
          <div className="absolute -top-20 -right-20 w-[40rem] h-[40rem] bg-gradient-radial from-red-600/3 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] bg-gradient-radial from-red-600/3 to-transparent blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-radial from-red-500/2 to-transparent blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-red-500/2 to-transparent blur-xl"></div>
        </>
      )}
      
      {/* Limited radial gradients for mobile */}
      {isMobile && (
        <>
          <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-radial from-red-600/3 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-radial from-red-600/3 to-transparent"></div>
        </>
      )}
      
      {/* Subtle animated particles - disabled on mobile */}
      {!isMobile && (
        <>
          <div className="absolute top-10 left-1/4 w-1 h-1 rounded-full bg-red-400/10 animate-float" style={{ animationDuration: '20s', animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-red-400/15 animate-float" style={{ animationDuration: '25s', animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/2 left-10 w-1 h-1 rounded-full bg-red-400/10 animate-float" style={{ animationDuration: '30s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-40 w-1 h-1 rounded-full bg-red-400/15 animate-float" style={{ animationDuration: '22s', animationDelay: '3s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 rounded-full bg-white/20 animate-float" style={{ animationDuration: '18s', animationDelay: '5s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 rounded-full bg-white/20 animate-float" style={{ animationDuration: '24s', animationDelay: '6s' }}></div>
        </>
      )}
      
      {/* Apple-style subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      
      {/* Luxury diagonal line element - Apple inspired, simplified for mobile */}
      {!isMobile ? (
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden opacity-[0.02]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"></div>
          <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-600/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"></div>
          <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-600/40 to-transparent"></div>
          
          {/* Diagonal lines - premium style */}
          <div className="absolute top-0 left-0 w-[200%] h-[200%] rotate-45 opacity-20">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent" style={{ top: '10%' }}></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/15 to-transparent" style={{ top: '25%' }}></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent" style={{ top: '40%' }}></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/15 to-transparent" style={{ top: '55%' }}></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent" style={{ top: '70%' }}></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/15 to-transparent" style={{ top: '85%' }}></div>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden opacity-[0.02]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"></div>
        </div>
      )}
      
      {/* Apple-inspired shimmer effect - disabled on mobile */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/4 -left-full w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-2/4 -right-full w-[200%] h-[1px] bg-gradient-to-l from-transparent via-white to-transparent animate-shimmer" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 -left-full w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
        </div>
      )}
    </div>
  );
};

export default BackgroundPattern;

// Luxury-enhanced ScrollAnimation utility component
export const ScrollAnimation = ({ children, animation = 'fade-up', delay = 0, threshold = 0.1, className = '' }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const domRef = React.useRef();
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
    // Only observe if hasn't animated yet
    if (hasAnimated) return;
    
    // Use different thresholds for mobile vs desktop
    const actualThreshold = isMobile ? Math.min(threshold, 0.05) : threshold;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true); // Mark this animation as completed
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: actualThreshold });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, isMobile, hasAnimated]);

  // Simplified animation classes for mobile
  const getMobileAnimationClass = (animation) => {
    // Only use minimal animations on mobile for better performance
    switch(animation) {
      case 'fade-up':
      case 'fade-down':
      case 'fade-left':
      case 'fade-right':
      case 'fade-up-right':
      case 'fade-up-left':
      case 'luxury-rise':
      case 'luxury-slide': 
        return 'opacity-0 transition-all duration-500 ease-out';
      case 'zoom-in':
      case 'zoom-out':
      case 'apple-zoom':
        return 'opacity-0 transition-all duration-500 ease-out';
      default:
        return 'opacity-0 transition-all duration-500 ease-out';
    }
  };

  // Luxury animation classes without blur effects - Apple inspired
  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-10 transition-all duration-800 ease-out',
    'fade-down': 'opacity-0 -translate-y-10 transition-all duration-800 ease-out',
    'fade-left': 'opacity-0 translate-x-10 transition-all duration-800 ease-out',
    'fade-right': 'opacity-0 -translate-x-10 transition-all duration-800 ease-out',
    'fade-up-right': 'opacity-0 translate-y-8 -translate-x-8 transition-all duration-800 ease-out',
    'fade-up-left': 'opacity-0 translate-y-8 translate-x-8 transition-all duration-800 ease-out',
    'zoom-in': 'opacity-0 scale-95 transition-all duration-800 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]',
    'zoom-out': 'opacity-0 scale-105 transition-all duration-800 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]',
    'flip': 'opacity-0 rotateY-90 perspective-1000 transition-all duration-800 ease-out',
    'slide-up': 'opacity-0 translate-y-16 transition-all duration-800 ease-[cubic-bezier(0.17,0.67,0.83,0.67)]',
    'slide-down': 'opacity-0 -translate-y-16 transition-all duration-800 ease-[cubic-bezier(0.17,0.67,0.83,0.67)]',
    'reveal': 'opacity-0 clip-path-[inset(0_100%_0_0)] transition-all duration-800 ease-[cubic-bezier(0.33,1,0.68,1)]',
    'fade-in': 'opacity-0 transition-all duration-800 ease-out',
    // Apple-inspired premium animations
    'luxury-fade': 'opacity-0 transition-all duration-1200 ease-[cubic-bezier(0.19,1,0.22,1)]',
    'luxury-rise': 'opacity-0 translate-y-8 transition-all duration-1200 ease-[cubic-bezier(0.19,1,0.22,1)]',
    'luxury-slide': 'opacity-0 translate-x-8 transition-all duration-1200 ease-[cubic-bezier(0.19,1,0.22,1)]',
    'apple-zoom': 'opacity-0 scale-[0.97] transition-all duration-1200 ease-[cubic-bezier(0.19,1,0.22,1)]',
    'apple-reveal': 'opacity-0 transition-all duration-1400 ease-[cubic-bezier(0.19,1,0.22,1)]'
  };

  // All animations on mobile just fade in
  const getMobileVisibleClass = () => 'opacity-100';

  // Apple-inspired animation visible state classes
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
    'reveal': 'opacity-100 clip-path-[inset(0_0_0_0)]',
    'fade-in': 'opacity-100',
    // Apple-inspired premium animations
    'luxury-fade': 'opacity-100',
    'luxury-rise': 'opacity-100 translate-y-0',
    'luxury-slide': 'opacity-100 translate-x-0',
    'apple-zoom': 'opacity-100 scale-100',
    'apple-reveal': 'opacity-100'
  };

  // Choose animation classes based on device
  const animationClass = isMobile ? getMobileAnimationClass(animation) : (animationClasses[animation] || animationClasses['fade-up']);
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