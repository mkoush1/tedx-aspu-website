import React from 'react';
import { ScrollAnimation } from './BackgroundPattern';

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(248,113,113,0.05),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:30px_30px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="inline-block mb-3">
            <div className="text-xs uppercase tracking-widest text-red-500 font-semibold mb-2">Get In Touch</div>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full"></div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={200} className="max-w-lg mx-auto">
          <p className="mb-10 text-lg text-gray-600">
            Have any questions or inquiries? Feel free to reach out to us!
            We're here to help with any information you need about TEDxASPU 2025.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={400}>
          <a
            href="mailto:info@tedxaspu.org"
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Email Us
          </a>
        </ScrollAnimation>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-4 left-1/4 w-8 h-8 rounded-full bg-red-50"></div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-red-50"></div>
        <div className="absolute bottom-1/3 right-1/5 w-4 h-4 rounded-full bg-red-50"></div>
      </div>
    </section>
  );
};

export default Contact;
