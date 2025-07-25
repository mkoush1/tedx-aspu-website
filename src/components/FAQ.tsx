import React, { useState } from 'react';
import { Plus as PlusIcon, Minus as MinusIcon } from 'lucide-react';
import LuxuryDivider from './LuxuryDivider';

const faqs = [
  {
    question: "What is TEDxASPU 2025?",
    answer: "TEDxASPU 2025 is an independently organized TED event that brings together thought leaders, innovators, and change-makers to share ideas worth spreading. The event will feature talks on technology, entertainment, design, science, and culture, fostering an environment of inspiration and learning at Applied Science Private University."
  },
  {
    question: "When and where is the event?",
    answer: "The event will take place on AUGUST 23, 2025, from 9:00 AM to 5:00 PM at the Conference Palace, ASPU. The venue is equipped with state-of-the-art facilities and is easily accessible by public transportation. Detailed directions and parking information will be provided to registered attendees."
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="relative bg-black text-white py-20 overflow-hidden">
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
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Find answers to the most common questions about TEDxASPU 2025.
          </p>
        </div>
      
        <div className="max-w-3xl mx-auto fade-transition">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`border border-red-500/10 rounded-lg bg-gradient-to-b from-black/80 to-red-950/10 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'shadow-[0_0_15px_rgba(229,69,69,0.15)]' : ''
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-4 sm:p-6 text-left"
                >
                  <h3 className="text-base sm:text-lg font-medium text-white pr-4">{faq.question}</h3>
                  <span className="text-red-500 flex-shrink-0">
                    {activeIndex === index ? (
                      <MinusIcon className="w-5 h-5" />
                    ) : (
                      <PlusIcon className="w-5 h-5" />
                    )}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 sm:p-6 pt-0 sm:pt-0 text-white/70">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
