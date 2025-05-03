import React from 'react';

interface LuxuryDividerProps {
  width?: string;
  color?: string;
  className?: string;
  variant?: 'simple' | 'ornate' | 'double';
  animated?: boolean;
  vertical?: boolean;
}

/**
 * A premium divider component with multiple style variants
 */
const LuxuryDivider: React.FC<LuxuryDividerProps> = ({
  width = 'w-24', 
  color = 'red-500', 
  className = '',
  variant = 'simple',
  animated = false,
  vertical = false
}) => {
  const baseClass = `${vertical ? 'h-24 w-px' : 'h-px'} ${width} ${className}`;
  const animationClass = animated ? 'animate-pulse-subtle' : '';
  
  // Render different variants
  switch (variant) {
    case 'ornate':
      return (
        <div className={`flex items-center justify-center ${vertical ? 'flex-col' : ''} ${animationClass}`}>
          <div className={`${baseClass} bg-gradient-to-r from-transparent via-${color}/50 to-transparent`}></div>
          <div className={`mx-2 ${vertical ? 'my-2 mx-0' : ''}`}>
            <div className={`w-2 h-2 bg-${color}/70 transform rotate-45`}></div>
          </div>
          <div className={`${baseClass} bg-gradient-to-r from-transparent via-${color}/50 to-transparent`}></div>
        </div>
      );
      
    case 'double':
      return (
        <div className={`relative ${vertical ? 'h-24' : 'w-full'} flex flex-col items-center justify-center ${animationClass}`}>
          <div className={`${baseClass} ${vertical ? 'absolute left-1/2 -translate-x-1/2' : ''} bg-gradient-to-r from-transparent via-${color}/40 to-transparent`}></div>
          <div 
            className={`${baseClass} ${vertical ? 'absolute left-1/2 -translate-x-1/2 translate-x-1' : 'mt-1'} bg-gradient-to-r from-transparent via-${color}/20 to-transparent`}
            style={vertical ? { marginTop: '4px' } : {}}
          ></div>
        </div>
      );
    
    case 'simple':
    default:
      return (
        <div 
          className={`${baseClass} ${animationClass} ${vertical ? '' : 'mx-auto'} bg-gradient-to-r from-transparent via-${color}/50 to-transparent`}
        ></div>
      );
  }
};

export default LuxuryDivider;

/**
 * A scrolling indicator with premium styling
 */
export const ScrollIndicator: React.FC<{className?: string, color?: string}> = ({ 
  className = '', 
  color = 'red-500' 
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="text-sm text-gray-400 uppercase tracking-widest mb-2">Scroll</div>
      <div className={`h-10 w-5 rounded-full border border-${color}/30 flex items-center justify-center`}>
        <div 
          className={`h-1.5 w-1.5 rounded-full bg-${color}`}
          style={{
            animation: 'scrollIndicator 1.5s ease-in-out infinite'
          }}
        ></div>
      </div>
      <style jsx>{`
        @keyframes scrollIndicator {
          0% { transform: translateY(-4px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(4px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

/**
 * A collection of premium text highlight effects
 */
export const LuxuryHighlight: React.FC<{
  children: React.ReactNode;
  variant?: 'underline' | 'background' | 'glow';
  color?: string;
  className?: string;
}> = ({ 
  children, 
  variant = 'underline', 
  color = 'red-500',
  className = ''
}) => {
  switch (variant) {
    case 'background':
      return (
        <span className={`px-2 py-0.5 bg-${color}/10 text-${color} rounded ${className}`}>
          {children}
        </span>
      );
    case 'glow':
      return (
        <span 
          className={`relative inline-block text-${color} ${className}`}
          style={{ textShadow: `0 0 8px rgba(229, 62, 62, 0.3)` }}
        >
          {children}
        </span>
      );
    case 'underline':
    default:
      return (
        <span className={`relative inline-block ${className}`}>
          {children}
          <span className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${color} to-transparent`}></span>
        </span>
      );
  }
}; 