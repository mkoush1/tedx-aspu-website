import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ 
  targetId = "about", 
  className = "" 
}) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`animate-bounce flex items-center justify-center p-2 rounded-full 
        bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 
        transition-all duration-300 ${className}`}
      aria-label="Scroll down"
    >
      <ChevronDown className="w-5 h-5 text-white/80" />
    </button>
  );
};

export default ScrollIndicator; 