import React from 'react';
import { Clock, Calendar, Star } from 'lucide-react';
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

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 bg-black text-white relative overflow-hidden">
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
      
      <div className="container mx-auto px-4 relative z-20">
        <ScrollAnimation animation="luxury-fade">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-3 tracking-tight">
              <span className="font-medium">Event</span> <span className="font-light">Schedule</span>
            </h2>
            <LuxuryDivider className="mx-auto mb-6" />
            <p className="text-lg text-white/80 max-w-3xl mx-auto font-light tracking-wide">
              Join us for an inspiring day featuring thought-provoking talks, networking, and entertainment.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="fade-up" threshold={0.15}>
            <div className="relative bg-black/40 backdrop-blur-lg border border-white/5 rounded-2xl p-12 text-center overflow-hidden shadow-luxury-md">
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
              
              {/* Subtle animated particles */}
              <div className="absolute top-10 left-1/4 w-1 h-1 rounded-full bg-red-400/20 animate-float" style={{ animationDuration: '15s' }}></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-red-400/30 animate-float" style={{ animationDuration: '18s' }}></div>
              <div className="absolute bottom-1/2 left-10 w-1 h-1 rounded-full bg-red-400/20 animate-float" style={{ animationDuration: '20s' }}></div>
              <div className="absolute bottom-20 right-40 w-1 h-1 rounded-full bg-red-400/30 animate-float" style={{ animationDuration: '12s' }}></div>
              
              <ScrollAnimation animation="fade-in" delay={300}>
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 bg-red-900/10 rounded-full blur-md"></div>
                  <div className="absolute inset-0 border border-red-500/20 rounded-full"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <Calendar className="w-10 h-10 text-red-500" />
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={400}>
                <h3 className="text-3xl sm:text-4xl font-light text-white mb-6 tracking-tight relative z-10">
                  Schedule To Be Announced
                </h3>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={500}>
                <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light tracking-wide relative z-10">
                  We're finalizing an exciting schedule filled with inspiring talks, entertainment, 
                  and networking opportunities. Stay tuned for the full schedule announcement.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={600}>
                <div className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-luxury-sm relative z-10">
                  <Star className="w-6 h-6 text-red-500" />
                  <span className="text-xl font-light text-white tracking-wide">July 7, 2025</span>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Schedule; 