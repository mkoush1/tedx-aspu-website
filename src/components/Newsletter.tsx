import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { ScrollAnimation } from './BackgroundPattern';

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionState('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // TODO: Replace with actual newsletter signup API call
      if (Math.random() > 0.5) { // Simulate random success/failure for demo
        throw new Error('Failed to subscribe. Please try again later.');
      }
      
      setSubmissionState('success');
      setEmail('');
    } catch (error) {
      setSubmissionState('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] to-[#6B0000]">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-300/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-200/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center text-white mb-16">
            <div className="inline-block mb-3">
              <div className="text-xs uppercase tracking-widest text-red-200 font-semibold mb-2">Newsletter</div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Stay Updated</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-300 to-red-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive updates, speaker announcements, and early-bird ticket opportunities.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-xl mx-auto">
          <ScrollAnimation animation="fade-in" threshold={0.1}>
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/90 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-900 placeholder-gray-500 shadow-inner"
                  required
                  disabled={submissionState === 'loading' || submissionState === 'success'}
                />
                <button
                  type="submit"
                  disabled={submissionState === 'loading' || submissionState === 'success'}
                  className={`
                    px-8 py-4 rounded-xl font-semibold flex items-center justify-center min-w-[140px] shadow-lg
                    ${submissionState === 'success' 
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white cursor-default'
                      : submissionState === 'error'
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                      : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                    }
                    transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105
                  `}
                >
                  {submissionState === 'loading' && (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Subscribing...
                    </>
                  )}
                  {submissionState === 'success' && (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Subscribed!
                    </>
                  )}
                  {submissionState === 'error' && (
                    <>
                      <XCircle className="w-5 h-5 mr-2" />
                      Try Again
                    </>
                  )}
                  {submissionState === 'idle' && (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Subscribe
                    </>
                  )}
                </button>
              </div>
              
              {submissionState === 'error' && (
                <p className="mt-4 text-red-300 text-sm flex items-center">
                  <XCircle className="w-4 h-4 mr-2" />
                  {errorMessage}
                </p>
              )}
              
              {submissionState === 'success' && (
                <p className="mt-4 text-green-300 text-sm flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Thank you for subscribing! Check your email for confirmation.
                </p>
              )}
            </form>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-white/70 text-sm text-center mt-6">
              By subscribing, you agree to receive updates about TEDxASPU 2025. 
              You can unsubscribe at any time.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
