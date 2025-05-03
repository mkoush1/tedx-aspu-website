import React from 'react';
import { Phone, MapPin, Mail, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { ScrollAnimation } from './BackgroundPattern';

// Apple-inspired decorative element component
const AppleOrnament = ({ className = '' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="h-px w-14 bg-gradient-to-r from-transparent to-red-500/40"></div>
    <div className="mx-3">
      <div className="w-[3px] h-[3px] bg-red-500/50 rounded-full"></div>
    </div>
    <div className="h-px w-14 bg-gradient-to-l from-transparent to-red-500/40"></div>
  </div>
);

const Footer = () => {
  const phoneNumber = '962799989667';
  const formattedPhone = phoneNumber.replace(/(\d{3})(\d{3})(\d{6})/, '+$1 $2 $3');

  return (
    <footer id="contact" className="relative bg-black pt-20 pb-12 overflow-hidden">
      {/* Apple-inspired premium background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Premium grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Subtle radial gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-radial from-red-900/5 to-transparent opacity-80"></div>
        
        {/* Apple-style decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
        
        {/* Diagonal decorative lines - Apple style */}
        <div className="absolute top-[15%] left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/5 to-transparent transform -rotate-2"></div>
        <div className="absolute top-[35%] left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/5 to-transparent transform rotate-1"></div>
        <div className="absolute top-[65%] left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/5 to-transparent transform -rotate-1"></div>
        <div className="absolute top-[85%] left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/5 to-transparent transform rotate-2"></div>
      </div>

      <div className="container mx-auto px-4">
        <ScrollAnimation animation="luxury-fade" delay={100}>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-3 tracking-tight text-center">
            <span className="font-medium">Contact</span> <span className="font-extralight">Us</span>
          </h2>
          <AppleOrnament className="mx-auto mb-16" />
        </ScrollAnimation>

        {/* Contact Information with Apple-inspired styling */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="flex flex-col items-center group">
                <div className="relative p-4 mb-6 bg-red-900/10 rounded-full border border-red-500/10 group-hover:border-red-500/20 group-hover:bg-red-900/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-red-500" />
                  <div className="absolute inset-0 bg-red-500/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-light text-white mb-3 tracking-wide">Phone</h3>
                <a href={`tel:${phoneNumber}`} className="text-white/70 hover:text-red-300 transition-colors font-light tracking-wider text-center">
                  {formattedPhone}
                </a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="flex flex-col items-center group">
                <div className="relative p-4 mb-6 bg-red-900/10 rounded-full border border-red-500/10 group-hover:border-red-500/20 group-hover:bg-red-900/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-red-500" />
                  <div className="absolute inset-0 bg-red-500/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-light text-white mb-3 tracking-wide">Email</h3>
                <a href="mailto:info@tedxaspu.org" className="text-white/70 hover:text-red-300 transition-colors font-light tracking-wider text-center">
                  info@tedxaspu.org
                </a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="flex flex-col items-center group">
                <div className="relative p-4 mb-6 bg-red-900/10 rounded-full border border-red-500/10 group-hover:border-red-500/20 group-hover:bg-red-900/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-red-500" />
                  <div className="absolute inset-0 bg-red-500/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-light text-white mb-3 tracking-wide">Location</h3>
                <a href="https://maps.app.goo.gl/jNsNAv9Qr2Z3wZVH6" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-red-300 transition-colors font-light tracking-wider text-center">
                  Applied Science Private University<br />
                  Amman, Jordan
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        
        {/* Social Media with Apple-inspired design */}
        <ScrollAnimation animation="fade-up" delay={500}>
          <div className="text-center mb-16">
            <h3 className="text-xl font-light text-white mb-8 tracking-wide">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/company/tedxaspu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-red-600/20 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-full text-white transition-all duration-300 transform group-hover:scale-105 shadow-luxury-sm">
                  <Linkedin className="w-6 h-6" />
                </div>
              </a>
              
              <a
                href="https://www.facebook.com/share/16F2R3yrxb/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Facebook"
              >
                <div className="absolute inset-0 bg-red-600/20 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-full text-white transition-all duration-300 transform group-hover:scale-105 shadow-luxury-sm">
                  <Facebook className="w-6 h-6" />
                </div>
              </a>
              
              <a
                href="https://www.instagram.com/tedxaspu25/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-red-600/20 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-full text-white transition-all duration-300 transform group-hover:scale-105 shadow-luxury-sm">
                  <Instagram className="w-6 h-6" />
                </div>
              </a>
              
              <a
                href="https://www.youtube.com/channel/UC5dJ3eD-qj1Y4yunRuSNogg"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="YouTube"
              >
                <div className="absolute inset-0 bg-red-600/20 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-full text-white transition-all duration-300 transform group-hover:scale-105 shadow-luxury-sm">
                  <Youtube className="w-6 h-6" />
                </div>
              </a>
            </div>
          </div>
        </ScrollAnimation>
        
        {/* Divider with Apple-inspired design */}
        <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        
        {/* Copyright with Apple-inspired typography */}
        <div className="text-center">
          <p className="text-gray-500 text-sm font-light tracking-wide">
            <span>© {new Date().getFullYear()} TEDxASPU. This event is independently organized under license from TED.</span>
          </p>
          <p className="text-gray-600 text-xs font-light mt-2 tracking-wide">
            <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 