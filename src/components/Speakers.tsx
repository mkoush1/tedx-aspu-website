import React from 'react';
import { Calendar, Star, Users2 } from 'lucide-react';
import { ScrollAnimation } from './BackgroundPattern';

// Apple-inspired decorative element component
const LuxuryDivider = ({ className = '' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-500/60 to-transparent"></div>
    <div className="mx-3">
      <div className="w-1 h-1 bg-red-500/60 rounded-full"></div>
    </div>
    <div className="h-px w-16 bg-gradient-to-l from-transparent via-red-500/60 to-transparent"></div>
  </div>
);

const Speakers = () => {
  return (
    <section id="speakers" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Premium subtle grid overlay - Apple style */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Luxury radial gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-red-900/5 to-transparent rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-red-900/5 to-transparent rounded-full opacity-30 blur-2xl"></div>
      
      {/* Apple-style decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-3 tracking-tight">
              <span className="font-medium">Our</span> <span className="font-light">Speakers</span>
            </h2>
            <LuxuryDivider className="mx-auto mb-6" />
          </div>

          {/* Banner Card */}
          <div className="relative bg-black/40 backdrop-blur-lg border border-white/5 rounded-2xl overflow-hidden shadow-luxury-lg">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden">
              <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-red-500/40 to-transparent"></div>
              <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-red-500/40 to-transparent"></div>
            </div>
            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-red-500/40 to-transparent"></div>
              <div className="absolute top-0 right-0 w-12 h-px bg-gradient-to-l from-red-500/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-px h-12 bg-gradient-to-t from-red-500/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-12 h-px bg-gradient-to-r from-red-500/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
              <div className="absolute bottom-0 right-0 w-px h-12 bg-gradient-to-t from-red-500/40 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-12 h-px bg-gradient-to-l from-red-500/40 to-transparent"></div>
            </div>
            
            <div className="p-8 text-center">
              {/* Star Icon */}
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 bg-red-900/10 rounded-full blur-md"></div>
                <div className="absolute inset-0 border border-red-500/20 rounded-full"></div>
                <div className="relative h-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-red-500" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-light text-white mb-3 tracking-tight">
                Speakers To Be Announced
              </h3>
              
              {/* Description */}
              <p className="text-base text-white/80 mb-8 max-w-lg mx-auto font-light">
                We're carefully selecting an inspiring lineup of speakers who will share groundbreaking ideas
                and unforgettable stories. Stay tuned for the announcement!
              </p>
              
              {/* Info Boxes */}
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
                {/* Box 1 */}
                <div className="relative bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 overflow-hidden group h-[140px] flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Users2 className="w-7 h-7 text-red-500 mb-2" />
                  <span className="text-xl font-light text-white">10</span>
                  <p className="text-white/70 text-sm font-light">Expected Speakers</p>
                </div>
                
                {/* Box 2 */}
                <div className="relative bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 overflow-hidden group h-[140px] flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Calendar className="w-7 h-7 text-red-500 mb-2" />
                  <span className="text-xl font-light text-white">July 7</span>
                  <p className="text-white/70 text-sm font-light">Event Date</p>
                </div>
              </div>
              
              {/* Button */}
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="group relative overflow-hidden inline-flex"
                >
                  <div className="absolute inset-0 rounded-full bg-red-600 blur-sm opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-red-700 to-red-800 px-6 py-3 text-white text-base font-medium tracking-wide text-center transform group-hover:scale-[1.03] transition-all duration-300">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Apply to Speak
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
