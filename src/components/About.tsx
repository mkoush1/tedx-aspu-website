import React from 'react';
import { Users2, Lightbulb, Globe2, Clock, Calendar, Building2 } from 'lucide-react';
import { ScrollAnimation } from './BackgroundPattern';
import LuxuryDivider from './LuxuryDivider';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
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
              <span className="font-medium">About</span> <span className="font-light">TEDxASPU</span>
            </h2>
            <LuxuryDivider className="mx-auto mb-6" />
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="relative bg-black/40 backdrop-blur-lg border border-white/5 p-8 rounded-2xl text-center overflow-hidden shadow-luxury-sm group hover:shadow-luxury-md transition-all duration-500">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
                <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-red-500/40 to-transparent"></div>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
                <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-red-500/40 to-transparent"></div>
              </div>
              
              <div className="relative">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-red-900/10 rounded-full blur-md"></div>
                  <div className="absolute inset-0 border border-red-500/20 rounded-full"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <Users2 className="w-8 h-8 text-red-500" />
                  </div>
                </div>
                <h3 className="text-3xl font-light text-white mb-2 tracking-tight">400<span className="text-red-500">+</span></h3>
                <p className="text-white/70 font-light tracking-wide">Attendees</p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="relative bg-black/40 backdrop-blur-lg border border-white/5 p-8 rounded-2xl text-center overflow-hidden shadow-luxury-sm group hover:shadow-luxury-md transition-all duration-500">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
                <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-red-500/40 to-transparent"></div>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
                <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-red-500/40 to-transparent"></div>
              </div>
              
              <div className="relative">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-red-900/10 rounded-full blur-md"></div>
                  <div className="absolute inset-0 border border-red-500/20 rounded-full"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-red-500" />
                  </div>
                </div>
                <h3 className="text-3xl font-light mb-2 tracking-tight">August 23<span style={{ color: 'rgb(var(--color-accent))' }}>, 2025</span></h3>
                <p className="font-light tracking-wide opacity-70">Mark Your Calendar</p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </ScrollAnimation>
          
          {/* Speakers */}
          <ScrollAnimation animation="fade-up" delay={600} className="h-full">
            <div className="relative bg-black/40 backdrop-blur-lg border border-white/5 p-8 rounded-2xl text-center overflow-hidden shadow-luxury-sm group hover:shadow-luxury-md transition-all duration-500 h-full">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
                <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-red-500/40 to-transparent"></div>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
                <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-red-500/40 to-transparent"></div>
              </div>
              
              <div className="relative">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-red-900/10 rounded-full blur-md"></div>
                  <div className="absolute inset-0 border border-red-500/20 rounded-full"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-red-500" />
                  </div>
                </div>
                <h3 className="text-3xl font-light mb-2 tracking-tight">10</h3>
                <p className="font-light tracking-wide opacity-70">Inspiring Speakers</p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <div className="relative bg-black/40 backdrop-blur-lg border border-white/5 p-8 rounded-2xl text-center overflow-hidden shadow-luxury-sm group hover:shadow-luxury-md transition-all duration-500">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
                <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-red-500/40 to-transparent"></div>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
                <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-red-500/40 to-transparent"></div>
              </div>
              
              <div className="relative">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-red-900/10 rounded-full blur-md"></div>
                  <div className="absolute inset-0 border border-red-500/20 rounded-full"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-red-500" />
                  </div>
                </div>
                <h3 className="text-3xl font-light text-white mb-2 tracking-tight">8</h3>
                <p className="text-white/70 font-light tracking-wide">Hours of Content</p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <ScrollAnimation animation="fade-right">
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-white mb-4 tracking-tight">What is TEDx?</h3>
              <LuxuryDivider className="mb-6" />
              <p className="text-white/80 leading-relaxed font-light tracking-wide">
                TEDx is a program of local, self-organized events that bring people together to share 
                a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to 
                spark deep discussion and connection.
              </p>
              <p className="text-white/80 leading-relaxed font-light tracking-wide">
                These local, self-organized events are branded TEDx, where x = independently organized 
                TED event. The TED Conference provides general guidance, but individual TEDx events are 
                self-organized.
              </p>
              <div className="pt-4">
                <a 
                  href="https://www.ted.com/about/programs-initiatives/tedx-program" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden inline-flex"
                >
                  <div className="absolute inset-0 rounded-full bg-red-600/5 blur-sm opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative overflow-hidden rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 text-white text-sm font-medium tracking-wide text-center transform group-hover:scale-[1.03] transition-all duration-300">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Learn More About TEDx
                    </span>
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black/20"></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury-lg">
              <img
                src="https://imgs.search.brave.com/fhazLGE_eK0rmPo-VVeiSzXVQQlpN1xz7Lk5Ff80BOQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXZ5c2Nob2xhcnMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA2L2hvd190/b19ob3N0X2FfdGVk/eF9ldmVudF9hc19h/X2hpZ2hfc2Nob29s/X3N0dWRlbnQuanBn"
                alt="TEDx Event Experience"
                className="w-full h-full object-cover rounded-2xl relative z-10"
              />
              
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 rounded-2xl z-10"></div>
              
              {/* Date badge with luxury styling */}
              <div className="absolute -bottom-4 right-4 bg-gradient-to-br from-red-700 to-red-800 text-white p-6 rounded-2xl shadow-luxury-md z-20 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-arabesque bg-cover opacity-5"></div>
                <div className="absolute inset-0 border border-red-500/20 rounded-2xl"></div>
                {/* Corner dots */}
                <div className="absolute top-2 left-2 w-0.5 h-0.5 rounded-full bg-red-300/60"></div>
                <div className="absolute top-2 right-2 w-0.5 h-0.5 rounded-full bg-red-300/60"></div>
                <div className="absolute bottom-2 left-2 w-0.5 h-0.5 rounded-full bg-red-300/60"></div>
                <div className="absolute bottom-2 right-2 w-0.5 h-0.5 rounded-full bg-red-300/60"></div>
                
                <p className="text-2xl font-light tracking-wider relative z-10">August <span className="font-medium">23</span>, 2025</p>
                <p className="text-sm text-white/80 font-light tracking-wider relative z-10">Mark Your Calendar</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Conference Palace Section */}
        <div className="relative mt-24 py-24">
          <div className="container mx-auto px-4 relative z-20">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-16">
                <h3 className="text-4xl sm:text-5xl font-light text-white mb-4 tracking-tight">
                  The Venue: <span className="text-red-500">Conference Palace</span>
                </h3>
                <LuxuryDivider className="mx-auto mb-6" />
                <p className="text-white/70 max-w-3xl mx-auto text-lg font-light">
                  Experience the grandeur of Jordan's most sophisticated conference facility, 
                  where innovation meets elegance.
                </p>
              </div>
            </ScrollAnimation>

            {/* New Image and Info Layout */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <ScrollAnimation animation="fade-right">
                <div className="relative group">
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-luxury-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
                    <img
                      src="https://res.cloudinary.com/dn79b1rvu/image/upload/v1746311138/WhatsApp_Image_2025-05-04_at_01.23.23_d37ca011_s7zplr.jpg"
                      alt="Conference Palace"
                      className="w-full h-[500px] object-cover object-center rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Decorative elements */}
                    <div className="absolute inset-0 border border-red-500/20 rounded-2xl"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 border border-red-500/20 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border border-red-500/20 rounded-full"></div>
                  </div>
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-8 -right-8 bg-black/80 backdrop-blur-sm border border-red-500/20 p-6 rounded-2xl shadow-luxury-md">
                    <div className="text-3xl font-light text-white mb-1">700<span className="text-red-500">+</span></div>
                    <div className="text-white/70 text-sm">Seating Capacity</div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-left">
                <div className="space-y-8">
                  <div className="bg-black/40 backdrop-blur-sm border border-red-500/10 rounded-2xl p-8">
                    <h4 className="text-xl font-medium text-red-500 mb-4">About the Venue</h4>
                    <p className="text-white/80 leading-relaxed font-light">
                      Established in 2004, the Conference Palace stands as Jordan's most modern conference facility. 
                      It features cutting-edge audio-visual equipment and theatrical lighting, designed with the latest 
                      engineering and technical methods.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/40 backdrop-blur-sm border border-red-500/10 rounded-2xl p-6">
                      <h5 className="text-lg font-medium text-red-500 mb-3">Vision</h5>
                      <p className="text-white/80 text-sm leading-relaxed font-light">
                        A distinguished center across the region providing various activities for a preeminent competitive position.
                      </p>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm border border-red-500/10 rounded-2xl p-6">
                      <h5 className="text-lg font-medium text-red-500 mb-3">Mission</h5>
                      <p className="text-white/80 text-sm leading-relaxed font-light">
                        Implementing high-quality cultural, social, and academic activities for the community.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <ScrollAnimation animation="fade-right">
                <div className="bg-black/40 backdrop-blur-sm border border-red-500/10 rounded-2xl p-8 hover:border-red-500/20 transition-all duration-500">
                  <h4 className="text-xl font-medium mb-6 text-red-500 flex items-center gap-3">
                    <span className="w-8 h-px bg-gradient-to-r from-red-500/50 to-transparent"></span>
                    State-of-the-Art Facilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <ul className="text-white/80 leading-relaxed font-light space-y-4">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                        Digital audio systems with wireless capabilities
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                        Specialized theatrical lighting systems
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                        Simultaneous translation into three languages
                      </li>
                    </ul>
                    <ul className="text-white/80 leading-relaxed font-light space-y-4">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                        Digital video and cinema systems
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                        Live TV broadcasting system
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                        VIP lounge with separate sound system
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-left">
                <div className="bg-black/40 backdrop-blur-sm border border-red-500/10 rounded-2xl p-8 hover:border-red-500/20 transition-all duration-500">
                  <h4 className="text-xl font-medium mb-6 text-red-500 flex items-center gap-3">
                    <span className="w-8 h-px bg-gradient-to-r from-red-500/50 to-transparent"></span>
                    Additional Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <ul className="text-white/80 leading-relaxed font-light space-y-4">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                        Remote-controlled theater suspension systems
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                        Advanced smoke devices for special effects
                      </li>
                    </ul>
                    <ul className="text-white/80 leading-relaxed font-light space-y-4">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                        Wired and wireless communication systems
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                        Miniature conference room with live theater feed
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation animation="fade-up">
              <div className="flex justify-center mt-12">
                <a 
                  href="https://www.asu.edu.jo/en/ASU-Center/Pages/ConferencePalace.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden inline-flex"
                >
                  <div className="absolute inset-0 rounded-full bg-red-600/5 blur-sm opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-red-900/20 to-black/20 backdrop-blur-sm border border-red-500/20 px-8 py-4 text-white text-sm font-medium tracking-wide text-center transform group-hover:scale-[1.03] transition-all duration-300">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Learn More About The Venue
                    </span>
                  </div>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
