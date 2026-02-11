
import React from 'react';
import { HARIS_CV } from '../constants';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openChat = () => {
    const trigger = document.getElementById('chat-trigger');
    if (trigger) trigger.click();
  };

  return (
    <section id="about" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* Text Content */}
        <div className="lg:col-span-7">
          <div className="mono text-[#ff4d00] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff4d00] animate-pulse"></span>
            ~/haris-babar/cloud-devops-enthusiast
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
            Agentic AI & DevOps. <br />
            <span className="text-white/40 text-3xl md:text-5xl">Cloud & DevOps Enthusiastic Engineer.</span>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-white/60 mb-10 leading-relaxed font-light">
            Building the future of automation with a focus on scalable agentic systems.
            Designing intelligent multi-agent architectures integrated with robust cloud infrastructure as a Cloud & DevOps Enthusiastic engineer.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={openChat}
              className="bg-[#ff4d00] text-white px-8 py-3 rounded-sm text-sm font-bold hover:bg-[#e64500] transition-all transform hover:-translate-y-1 mono shadow-lg shadow-[#ff4d00]/20"
            >
              Consult Agent
            </button>
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="border border-white/20 px-8 py-3 rounded-sm text-sm font-bold hover:bg-white/5 transition-all transform hover:-translate-y-1 mono text-center"
            >
              View Projects →
            </a>
          </div>
        </div>

        {/* Profile Card Section */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] aspect-[4/5] group">

            {/* Background Atmosphere Glow - Gray/Soft Style */}
            <div className="absolute -inset-4 bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>

            {/* Main Card */}
            <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] transition-transform duration-500 group-hover:scale-[1.02]">

              {/* Profile Image */}
              <img
                src="/profile.png"
                alt="Haris Babar"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Information Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                <div className="space-y-0.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {HARIS_CV.name}
                  </h2>
                  <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#a0a0a0] uppercase">
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>

              {/* Subtle inner border glow */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none"></div>

      <style>{`
        /* Smooth Fade In */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        #about {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
