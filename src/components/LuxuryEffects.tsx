import React, { useEffect, useRef } from 'react';

/**
 * LuxuryParallax - Creates a subtle parallax effect on scroll for premium feel
 */
export const LuxuryParallax = ({ children, speed = 0.1, direction = 'vertical', className = '' }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = scrollPosition * speed;
      
      if (direction === 'horizontal') {
        element.style.transform = `translateX(${offset}px)`;
      } else {
        element.style.transform = `translateY(${offset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);
  
  return (
    <div 
      ref={elementRef} 
      className={`will-change-transform ${className}`}
      style={{ 
        transition: 'transform 0.1s cubic-bezier(0.19, 1, 0.22, 1)',
      }}
    >
      {children}
    </div>
  );
};

/**
 * LuxuryHoverEffect - Creates premium hover effects for elements
 */
export const LuxuryHoverEffect = ({ children, className = '', scale = '1.03', glowColor = 'rgba(255,0,0,0.2)' }) => {
  return (
    <div className={`group relative ${className}`}>
      {/* Hover glow effect */}
      <div className="absolute -inset-1 rounded-lg bg-transparent group-hover:bg-gradient-to-r from-transparent via-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:blur-md"
           style={{ 
             background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
             transform: 'translate3d(0, 0, 0)'
           }}
      ></div>
      
      {/* Content with scale effect */}
      <div className={`relative transition-all duration-300 ease-out group-hover:scale-${scale} z-10`}>
        {children}
      </div>
    </div>
  );
};

/**
 * LuxuryCornerAccents - Adds elegant corner accents to elements
 */
export const LuxuryCornerAccents = ({ 
  children, 
  className = '', 
  color = 'red-500/40', 
  size = 8,
  variant = 'all'
}) => {
  // Determine which corners to show based on variant
  const showTopLeft = variant === 'all' || variant === 'top' || variant === 'left' || variant === 'topLeft';
  const showTopRight = variant === 'all' || variant === 'top' || variant === 'right' || variant === 'topRight';
  const showBottomLeft = variant === 'all' || variant === 'bottom' || variant === 'left' || variant === 'bottomLeft';
  const showBottomRight = variant === 'all' || variant === 'bottom' || variant === 'right' || variant === 'bottomRight';
  
  return (
    <div className={`relative ${className}`}>
      {/* Top Left */}
      {showTopLeft && (
        <div className={`absolute top-0 left-0 w-${size} h-${size} overflow-hidden z-20`}>
          <div className={`absolute top-0 left-0 w-px h-${size} bg-gradient-to-b from-${color} to-transparent`}></div>
          <div className={`absolute top-0 left-0 w-${size} h-px bg-gradient-to-r from-${color} to-transparent`}></div>
        </div>
      )}
      
      {/* Top Right */}
      {showTopRight && (
        <div className={`absolute top-0 right-0 w-${size} h-${size} overflow-hidden z-20`}>
          <div className={`absolute top-0 right-0 w-px h-${size} bg-gradient-to-b from-${color} to-transparent`}></div>
          <div className={`absolute top-0 right-0 w-${size} h-px bg-gradient-to-l from-${color} to-transparent`}></div>
        </div>
      )}
      
      {/* Bottom Left */}
      {showBottomLeft && (
        <div className={`absolute bottom-0 left-0 w-${size} h-${size} overflow-hidden z-20`}>
          <div className={`absolute bottom-0 left-0 w-px h-${size} bg-gradient-to-t from-${color} to-transparent`}></div>
          <div className={`absolute bottom-0 left-0 w-${size} h-px bg-gradient-to-r from-${color} to-transparent`}></div>
        </div>
      )}
      
      {/* Bottom Right */}
      {showBottomRight && (
        <div className={`absolute bottom-0 right-0 w-${size} h-${size} overflow-hidden z-20`}>
          <div className={`absolute bottom-0 right-0 w-px h-${size} bg-gradient-to-t from-${color} to-transparent`}></div>
          <div className={`absolute bottom-0 right-0 w-${size} h-px bg-gradient-to-l from-${color} to-transparent`}></div>
        </div>
      )}
      
      {children}
    </div>
  );
};

/**
 * LuxuryTextReveal - Creates a luxury text reveal animation similar to Apple marketing
 */
export const LuxuryTextReveal = ({ children, className = '', delay = 0 }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        className="transform translate-y-full animate-text-reveal"
        style={{ 
          animationDelay: `${delay}ms`,
          animationFillMode: 'forwards',
          animationDuration: '1.2s',
          animationTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)'
        }}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * LuxuryGradientBorder - Adds a premium gradient border to elements
 */
export const LuxuryGradientBorder = ({ 
  children, 
  className = '', 
  borderWidth = 1,
  gradientFrom = 'transparent', 
  gradientVia = 'red-500/60', 
  gradientTo = 'transparent',
  animate = false
}) => {
  const gradientClass = `from-${gradientFrom} via-${gradientVia} to-${gradientTo}`;
  
  return (
    <div className={`relative p-[1px] bg-clip-padding ${className}`}>
      <div className={`absolute inset-0 rounded-[inherit] bg-gradient-to-r ${gradientClass} ${animate ? 'animate-gradient-x' : ''}`}
           style={{ padding: `${borderWidth}px` }}></div>
      <div className="relative bg-black rounded-[inherit] z-10">
        {children}
      </div>
    </div>
  );
};

/**
 * LuxuryGlassmorphism - Creates an Apple-inspired glassmorphism effect
 */
export const LuxuryGlassmorphism = ({ 
  children, 
  className = '', 
  blur = 'backdrop-blur-apple',
  bgOpacity = 'bg-black/40',
  borderOpacity = 'border-white/10'
}) => {
  return (
    <div className={`${bgOpacity} ${blur} border ${borderOpacity} rounded-2xl relative overflow-hidden shadow-luxury-sm ${className}`}>
      {/* Optional subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px' 
           }}>
      </div>
      
      {children}
    </div>
  );
};

/**
 * LuxuryScanline - Adds a subtle scanline effect for a premium digital feel
 */
export const LuxuryScanline = ({ className = '', color = 'white/5', speed = 2 }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div 
        className={`absolute left-0 right-0 h-[100px] bg-${color} animate-scan-line`}
        style={{ 
          height: '6px', 
          filter: 'blur(4px)',
          animationDuration: `${speed}s`
        }}
      ></div>
    </div>
  );
};

/**
 * LuxuryAnimatedGradient - Creates a subtly animated gradient background
 */
export const LuxuryAnimatedGradient = ({ 
  className = '', 
  children, 
  colors = ['rgba(139,0,0,0.05)', 'rgba(0,0,0,0)'],
  duration = 20
}) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const gradient = gradientRef.current;
    if (!gradient) return;
    
    let position = 0;
    
    const animate = () => {
      position = (position + 0.1) % 360;
      gradient.style.background = `linear-gradient(${position}deg, ${colors.join(', ')})`;
      requestAnimationFrame(animate);
    };
    
    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [colors]);
  
  return (
    <div className={`relative ${className}`}>
      <div 
        ref={gradientRef} 
        className="absolute inset-0 transition-all duration-1000 ease-linear"
        style={{ background: `linear-gradient(0deg, ${colors.join(', ')})` }}
      ></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

/**
 * Apple-style premium highlight component
 */
export const LuxuryHighlight = ({ children, className = '', color = 'red-500/20' }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className={`absolute bottom-0 left-0 right-0 h-[0.15em] bg-${color} rounded-full`}></span>
    </span>
  );
};

export default {
  LuxuryParallax,
  LuxuryHoverEffect,
  LuxuryCornerAccents,
  LuxuryTextReveal,
  LuxuryGradientBorder,
  LuxuryGlassmorphism,
  LuxuryScanline,
  LuxuryAnimatedGradient,
  LuxuryHighlight
}; 