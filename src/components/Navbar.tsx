import React, { useState, useEffect } from 'react';
import { Menu, X, Ticket } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Track active section for nav highlighting
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      // Find which section is currently in view
      let currentSection = '';
      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = sectionId;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    // Initial check on mount
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const navHeight = 80; // Approximate height of the navbar
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    if (isOpen) {
      toggleMenu();
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'past-talks', label: 'Past Talks' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'sponsors', label: 'Partners' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[1000] ${
          isScrolled 
            ? 'bg-black/70 backdrop-blur-sm py-2 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]' 
            : 'bg-gradient-to-b from-black/50 via-black/30 to-transparent py-5'
        } transition-all duration-300`}
      >
        {/* Luxury top line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo 
              onClick={() => scrollToSection('hero')}
              size={isScrolled ? 'sm' : 'md'}
              className={`transition-all duration-300 transform ${isScrolled ? 'scale-90' : 'scale-100'}`}
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    px-3 py-2 text-sm lg:text-base font-medium relative group overflow-hidden
                    transition-colors duration-300
                    ${activeSection === item.id 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300' 
                      : 'text-white hover:text-gray-200'
                    }
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Hover effect */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-red-600/80 via-red-500/80 to-red-600/80 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></span>
                  )}
                </button>
              ))}
              
              {/* Get Tickets Button */}
              <a
                href="https://forms.gle/M3BTsmWRoH49FmoW9"
                className="relative ml-1 px-6 py-2.5 text-white text-sm lg:text-base font-medium rounded-full group overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-700/90 to-red-800/90 group-hover:from-red-800/90 group-hover:to-red-900/90 transition-colors duration-300"></span>
                <span className="absolute inset-0 border border-red-500/30 rounded-full"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Ticket className="w-4 h-4" />
                  <span>Buy Tickets</span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden relative z-[1001] w-10 h-10 flex items-center justify-center"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen */}
      <div 
        className={`
          fixed inset-0 z-[999] bg-black/80 backdrop-blur-md 
          transition-opacity duration-300 flex flex-col items-center justify-center
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="w-full max-w-md px-6 flex flex-col items-center justify-center space-y-6">
          {/* Navigation Links */}
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                text-lg text-center w-full py-3 relative group
                ${activeSection === item.id ? 'text-red-500' : 'text-white/90 hover:text-white'}
                transform transition-all duration-300
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
              <span className="block h-[1px] w-12 bg-gradient-to-r from-transparent via-red-500/30 to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          ))}
          
          {/* Get Tickets Button */}
          <a
            href="https://forms.gle/M3BTsmWRoH49FmoW9"
            className={`
              mt-4 px-8 py-3 bg-gradient-to-r from-red-700/90 to-red-800/90 hover:from-red-800/90 hover:to-red-900/90 
              text-white text-lg font-medium rounded-full border border-red-500/30
              transform transition-all duration-300 w-full
              ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              flex items-center justify-center gap-2
            `}
            style={{ transitionDelay: `${navItems.length * 50 + 50}ms` }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Ticket className="w-4 h-4" />
            <span>Buy Tickets</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
