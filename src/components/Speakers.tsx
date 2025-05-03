import React from 'react';
import { Mic as MicrophoneIcon } from 'lucide-react';
import LuxuryDivider from './LuxuryDivider';

const Speakers = () => {
  return (
    <section id="speakers" className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90 z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 fade-transition">
          <div className="inline-block">
            <LuxuryDivider />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider mt-6 mb-4">
            Our Speakers
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Visionaries and thought leaders who will share their ground-breaking ideas at TEDxASPU 2025.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-4xl fade-transition">
          <div className="border border-red-500/10 rounded-lg bg-gradient-to-b from-black/80 to-red-950/10 p-8 sm:p-10 flex flex-col items-center text-center backdrop-blur-sm">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mb-6">
              <MicrophoneIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-light text-white mb-3">Speakers To Be Announced</h3>
            
            <p className="text-white/70 max-w-2xl mb-8">
              We're in the process of selecting extraordinary speakers for TEDxASPU 2025. 
              Stay tuned for announcements of inspirational thought leaders who will share 
              ideas worth spreading.
            </p>
            
            <button className="bg-gradient-to-r from-red-700 to-red-600 text-white py-3 px-8 rounded-full font-medium hover:shadow-[0_0_15px_rgba(229,69,69,0.5)] transition-all duration-300">
              Apply to Speak
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;