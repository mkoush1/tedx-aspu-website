import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  onClick,
  size = 'md'
}) => {
  const [isError, setIsError] = useState(false);
  
  // Size mapping
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  // Handle image loading error
  const handleError = () => {
    setIsError(true);
  };

  return (
    <button 
      onClick={onClick}
      className={`relative group ${className}`}
      aria-label="TEDxASPU Logo"
    >
      {/* Hover effect */}
      <div className="absolute -inset-1 bg-red-600/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Logo image with error handling */}
      {!isError ? (
        <img 
          src="https://res.cloudinary.com/dn79b1rvu/image/upload/v1744132943/logo-white_t735qg.png"
          alt="TEDxASPU Logo"
          className={`${sizeClasses[size]} w-auto drop-shadow-[0_0_12px_rgba(229,69,69,0.5)] relative z-10`}
          onError={handleError}
          loading="eager"
        />
      ) : (
        <div className={`${sizeClasses[size]} w-auto flex items-center justify-center bg-black/20 rounded-lg`}>
          <span className="text-white text-sm">TEDxASPU</span>
        </div>
      )}
    </button>
  );
};

export default Logo; 