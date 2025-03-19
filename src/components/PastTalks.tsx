import React from 'react';
import { Play, ThumbsUp, Eye } from 'lucide-react';
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

const featuredTalks = [
  {
    id: 1,
    title: "All the experiences I've gone through in my past | Shahd Jihad | TEDxASPU",
    speaker: {
      name: "Shahd Jihad",
      role: "Writer and Digital Content Presenter"
    },
    description: "A distinguished writer and digital content presenter at RMG/Roya Media Group. Known for her exceptional storytelling abilities, Shahd has contributed to numerous prominent platforms, including Arab Television and Al Jazeera Television.",
    videoId: "IAFUo4sjf8s",
    views: "2.5K",
    likes: "312"
  },
  {
    id: 2,
    title: "Mental Health Awareness | Dr. Laith Al-Abbadi | TEDxASPU",
    speaker: {
      name: "Dr. Laith Al-Abbadi",
      role: "Psychiatrist and Mental Health Advocate"
    },
    description: "Psychiatrist at Mind Clinic and champion for mental wellness. With a wealth of experience and expertise, Dr. Laith utilizes his platform to raise awareness about critical mental health issues.",
    videoId: "qOwmvstmwmQ",
    views: "3.1K",
    likes: "428"
  },
  {
    id: 3,
    title: "Empowering the Next Generation | Odai Baqaeen | TEDxASPU",
    speaker: {
      name: "Odai Baqaeen",
      role: "Entrepreneur and Leadership Coach"
    },
    description: "A dynamic entrepreneur and certified trainer with over 13 years in many fields including leadership and coaching. As the co-founder of 180 Degrees for Empowering People, he's on a mission to empower the new generation of leaders.",
    videoId: "KZwbDOCi4xw",
    views: "2.8K",
    likes: "385"
  }
];

const PastTalks = () => {
  return (
    <section id="past-talks" className="py-24 bg-black text-white relative overflow-hidden">
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
              <span className="font-medium">Past</span> <span className="font-light">Talks</span>
            </h2>
            <LuxuryDivider className="mx-auto mb-6" />
            <p className="text-lg text-white/80 max-w-3xl mx-auto font-light tracking-wide">
              Explore our collection of inspiring talks from previous TEDxASPU events that continue to spark conversations and inspire change.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTalks.map((talk, index) => (
            <ScrollAnimation 
              key={talk.id} 
              animation="fade-up"
              delay={index * 150}
              threshold={0.1}
            >
              <div className="relative bg-black/40 backdrop-blur-lg border border-white/5 rounded-2xl overflow-hidden group h-full shadow-luxury-sm hover:shadow-luxury-md transition-all duration-500">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden z-30">
                  <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-red-500/40 to-transparent"></div>
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden z-30">
                  <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-red-500/40 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-red-500/40 to-transparent"></div>
                </div>
                
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${talk.videoId}/maxresdefault.jpg`}
                    alt={talk.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:opacity-90 transition-opacity duration-500">
                    <a 
                      href={`https://www.youtube.com/watch?v=${talk.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="relative w-16 h-16 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-500">
                        {/* Play button glow */}
                        <div className="absolute inset-0 bg-red-600/30 rounded-full blur-md"></div>
                        <div className="relative bg-gradient-to-br from-red-700 to-red-800 rounded-full w-full h-full flex items-center justify-center">
                          <div className="absolute inset-0 border border-red-500/30 rounded-full"></div>
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </a>
                  </div>
                  
                  {/* Decorative red accent */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500/70 to-red-600/70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                
                <div className="p-7">
                  <div className="mb-4">
                    <h3 className="text-xl font-light text-white mb-3 leading-tight tracking-wide">{talk.title}</h3>
                    <p className="text-white/70 text-sm font-light">{talk.speaker.name}</p>
                    <p className="text-red-400 text-sm font-light tracking-wide">{talk.speaker.role}</p>
                  </div>
                  
                  <p className="text-white/60 text-sm mb-5 line-clamp-2 font-light tracking-wide">
                    {talk.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-white/50 font-light">
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-white/70" />
                      <span>{talk.views}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ThumbsUp className="w-4 h-4 text-white/70" />
                      <span>{talk.likes}</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={300}>
          <div className="text-center mt-16">
            <a
              href="https://youtube.com/playlist?list=PL_6YyWdpFmMH3cA34oINeFeuRp_SWxpzu"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex"
            >
              <div className="absolute inset-0 rounded-full bg-red-600 blur-sm opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-red-700 to-red-800 px-8 py-4 text-white text-lg font-medium tracking-wide text-center transform group-hover:scale-[1.03] transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Watch All Talks
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

export default PastTalks;
