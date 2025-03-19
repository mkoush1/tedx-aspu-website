import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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

const faqs = [
  {
    question: "What is TEDxASPU 2025?",
    answer: "TEDxASPU 2025 is an independently organized TED event that brings together thought leaders, innovators, and change-makers to share ideas worth spreading. The event will feature talks on technology, entertainment, design, science, and culture, fostering an environment of inspiration and learning at Applied Science Private University."
  },
  {
    question: "When and where is the event?",
    answer: "The event will take place on July 7, 2025, from 9:00 AM to 5:00 PM at the Conference Palace, ASPU. The venue is equipped with state-of-the-art facilities and is easily accessible by public transportation. Detailed directions and parking information will be provided to registered attendees."
  },
  {
    question: "How can I get tickets?",
    answer: "Will be announced soon."
  },
  {
    question: "What's included in the event program?",
    answer: "Will be announced soon."
  },
  {
    question: "Are there speaking opportunities?",
    answer: "Now open for applications. Share your innovative ideas and inspiring stories with our audience. Selected speakers will receive professional coaching and support in developing their talks. Apply through our website or contact us directly."
  },
  {
    question: "What about food and refreshments?",
    answer: "Will be announced soon."
  },
  {
    question: "Will the talks be recorded?",
    answer: "Yes, all talks will be professionally recorded and made available on the official TEDx YouTube channel within 30 days after the event. Speakers retain the rights to their ideas while granting TED the right to distribute the talks under the standard TED license."
  },
  {
    question: "Is there a dress code?",
    answer: "Business casual attire is recommended. The event is a professional gathering that encourages comfortable yet presentable attire. Remember, you might be networking with industry leaders and appearing in event photos and videos."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black text-white relative overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <ScrollAnimation animation="luxury-fade">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-3 tracking-tight">
              <span className="font-medium">Frequently Asked</span> <span className="font-light">Questions</span>
            </h2>
            <LuxuryDivider className="mx-auto mb-6" />
            <p className="text-lg text-white/80 max-w-3xl mx-auto font-light tracking-wide">
              Everything you need to know about TEDxASPU 2025. Can't find your answer? Feel free to contact us.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimation 
              key={index} 
              animation="fade-up" 
              delay={index * 100} 
              threshold={0.1}
            >
              <div 
                className={`
                  relative bg-black/40 backdrop-blur-lg border border-white/5 rounded-xl overflow-hidden transition-all duration-500
                  ${openIndex === index ? 'shadow-luxury-md' : 'shadow-luxury-sm'}
                `}
              >
                {/* Decorative corner accent - only on active item */}
                {openIndex === index && (
                  <>
                    <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
                      <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
                      <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-red-500/40 to-transparent"></div>
                    </div>
                    <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                      <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
                      <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-red-500/40 to-transparent"></div>
                    </div>
                  </>
                )}
                
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-light text-white pr-8 tracking-wide">{faq.question}</span>
                  <span className={`
                    relative flex-shrink-0 ml-4 p-3 rounded-full transition-all duration-500
                    ${openIndex === index ? 'bg-red-900/10 text-red-400' : 'bg-white/5 text-white/60'}
                  `}>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                    {openIndex === index && (
                      <div className="absolute inset-0 bg-red-500/5 rounded-full blur-md"></div>
                    )}
                  </span>
                </button>
                <div 
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="p-6 pt-0 text-white/70 font-light leading-relaxed tracking-wide border-t border-white/5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={faqs.length * 100 + 200}>
          <div className="text-center mt-20">
            <p className="text-white/60 mb-8 font-light tracking-wide">Still have questions?</p>
            <a 
              href="#contact" 
              className="group relative overflow-hidden inline-flex"
            >
              <div className="absolute inset-0 rounded-full bg-red-600 blur-sm opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-red-700 to-red-800 px-8 py-4 text-white text-lg font-medium tracking-wide text-center transform group-hover:scale-[1.03] transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Contact Us
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

export default FAQ;
