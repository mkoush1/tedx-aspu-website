import React from 'react';
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

const SponsorCard = ({ delay = 0, type = 'platinum' }) => {
  const getGradient = () => {
    if (type === 'platinum') return 'from-[#E5E4E2]/5 to-[#E5E4E2]/10';
    if (type === 'gold') return 'from-[#FFD700]/5 to-[#FFD700]/10';
    return 'from-[#C0C0C0]/5 to-[#C0C0C0]/10';
  };

  const getBorderColor = () => {
    if (type === 'platinum') return 'border-[#E5E4E2]/20';
    if (type === 'gold') return 'border-[#FFD700]/20';
    return 'border-[#C0C0C0]/20';
  };

  const getIconColor = () => {
    if (type === 'platinum') return 'text-[#E5E4E2]';
    if (type === 'gold') return 'text-[#FFD700]';
    return 'text-[#C0C0C0]';
  };

  return (
    <ScrollAnimation animation="apple-zoom" delay={delay}>
      <div className="relative group">
        {/* Card with Apple-inspired design */}
        <div className={`relative bg-black/40 backdrop-blur-lg border ${getBorderColor()} rounded-2xl overflow-hidden shadow-luxury-sm group hover:shadow-luxury-md transition-all duration-500`}>
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
            <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-red-500/40 to-transparent"></div>
          </div>
          <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
            <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-red-500/40 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-8 h-8 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-px h-8 bg-gradient-to-t from-red-500/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-8 h-px bg-gradient-to-r from-red-500/40 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-px h-8 bg-gradient-to-t from-red-500/40 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-8 h-px bg-gradient-to-l from-red-500/40 to-transparent"></div>
          </div>
          
          <div className="bg-gradient-to-br p-10 flex flex-col items-center justify-center relative z-10">
            <div className="relative mb-8">
              {/* Circular glow effect behind the logo - Apple style */}
              <div className="absolute inset-0 rounded-full bg-red-500/5 blur-md"></div>
              
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-lg rounded-full border border-white/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`font-medium text-2xl tracking-widest ${getIconColor()}`}>TED</div>
                </div>
                <div className="absolute -inset-1 border border-red-500/10 rounded-full group-hover:border-red-500/20 transition-all duration-700"></div>
              </div>
            </div>
            
            <div className="text-white font-light text-xl tracking-wide mb-1">Coming Soon</div>
            <div className="text-white/60 text-sm font-light tracking-wide">Premium Partner</div>
            
            {/* Elegant accent line - Apple style */}
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent mt-4"></div>
          </div>
          
          {/* Hover effect */}
          <div className={`absolute inset-0 bg-gradient-to-t ${getGradient()} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const PartnerTypeHeading = ({ title, color }) => {
  const getGradient = () => {
    if (color === 'platinum') return 'from-[#E5E4E2] via-[#F5F5F5] to-[#E5E4E2]';
    if (color === 'gold') return 'from-[#FFD700] via-[#FFDF46] to-[#FFD700]';
    return 'from-[#C0C0C0] via-[#E8E8E8] to-[#C0C0C0]';
  };
  
  return (
    <ScrollAnimation animation="luxury-fade">
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h3 className={`text-2xl sm:text-3xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r ${getGradient()}`}>
            {title}
          </h3>
          <div className="mt-3">
            <LuxuryDivider />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 bg-black text-white relative overflow-hidden">
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
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-3 tracking-tight">
              <span className="font-medium">Our</span> <span className="font-light">Partners</span>
            </h2>
            <LuxuryDivider className="mx-auto mb-6" />
            <p className="text-lg text-white/80 max-w-3xl mx-auto font-light tracking-wide">
              Prestigious organizations supporting TEDxASPU 2025 with a shared commitment to spreading innovative ideas.
            </p>
          </div>
        </ScrollAnimation>

        {/* Platinum Partners */}
        <div className="mb-24">
          <PartnerTypeHeading title="Platinum Partners" color="platinum" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <SponsorCard delay={100} type="platinum" />
            <SponsorCard delay={200} type="platinum" />
            <SponsorCard delay={300} type="platinum" />
          </div>
        </div>

        {/* Gold Partners */}
        <div className="mb-24">
          <PartnerTypeHeading title="Gold Partners" color="gold" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <SponsorCard delay={400} type="gold" />
            <SponsorCard delay={500} type="gold" />
            <SponsorCard delay={600} type="gold" />
          </div>
        </div>

        {/* Silver Partners */}
        <div>
          <PartnerTypeHeading title="Silver Partners" color="silver" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SponsorCard delay={700} type="silver" />
            <SponsorCard delay={800} type="silver" />
            <SponsorCard delay={900} type="silver" />
            <SponsorCard delay={1000} type="silver" />
          </div>
        </div>
        
        {/* Become a partner CTA - Apple inspired */}
        <ScrollAnimation animation="fade-up" delay={1100}>
          <div className="text-center mt-24">
            <a
              href="#contact"
              className="group relative overflow-hidden inline-flex"
            >
              <div className="absolute inset-0 rounded-full bg-red-600 blur-sm opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-red-700 to-red-800 px-8 py-4 text-white text-lg font-medium tracking-wide text-center transform group-hover:scale-[1.03] transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Become a Partner
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute inset-0 bg-gradient-to-br from-red-800 to-red-900"></span>
                </span>
              </div>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Sponsors; 