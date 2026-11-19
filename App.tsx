
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectGrid from './components/ProjectGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import AgentChat from './components/AgentChat';
import { HARIS_CV } from './constants';

const App: React.FC = () => {
  // Flatten all skill items for the marquee
  const allTools = HARIS_CV.skills.flatMap(group => group.items);
  // Duplicate for seamless loop
  const marqueeTools = [...allTools, ...allTools, ...allTools];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen grid-bg selection:bg-[#ff4d00] selection:text-white">
      <Navbar />

      <main>
        <Hero />

        {/* Sliding Tech Ecosystem Section */}
        <div className="py-12 border-y border-white/10 bg-black overflow-hidden relative group">
          <div className="max-w-7xl mx-auto px-6 relative z-10 mb-6">
            <p className="mono text-[10px] text-white/30 uppercase tracking-[0.4em] text-center">
              Core Technologies & Ecosystem
            </p>
          </div>

          <div className="flex whitespace-nowrap marquee-container">
            <div className="flex animate-marquee hover:[animation-play-state:paused] gap-12 items-center">
              {marqueeTools.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span
                    className="text-lg md:text-xl font-bold mono text-white/40 hover:text-white transition-colors cursor-default uppercase tracking-widest"
                  >
                    {tool}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
            .marquee-container {
              mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            }
          `}</style>
        </div>

        <SkillsSection />
        <ProjectGrid />
        <ExperienceTimeline />

        {/* Footer */}
        <footer className="py-24 px-6 border-t border-white/10 bg-black">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <span className="mono font-bold uppercase tracking-[0.2em] text-2xl">Haris Babar</span>
              </div>
              <p className="text-white/40 max-w-sm mb-8 leading-relaxed text-sm">
                Software Engineer specializing in AI & Full Stack, building the next generation of autonomous business systems.
                Merging scalable full-stack web applications with advanced agentic reasoning and cloud infrastructure.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href={HARIS_CV.links.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#ff4d00] transition-colors mono text-xs uppercase tracking-widest border-b border-white/10 pb-1">GitHub</a>
                <a href={HARIS_CV.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#ff4d00] transition-colors mono text-xs uppercase tracking-widest border-b border-white/10 pb-1">LinkedIn</a>
                <a href={`mailto:${HARIS_CV.email}`} className="text-white/40 hover:text-[#ff4d00] transition-colors mono text-xs uppercase tracking-widest border-b border-white/10 pb-1">Email</a>
              </div>
            </div>

            <div>
              <h4 className="mono text-xs text-white/30 uppercase mb-8 tracking-widest font-bold">Navigation</h4>
              <ul className="space-y-4 text-white/60 text-sm font-medium">
                <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className="hover:text-white transition-colors">Stack</a></li>
                <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')} className="hover:text-white transition-colors">Timeline</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mono text-xs text-white/30 uppercase mb-8 tracking-widest font-bold">Contact Details</h4>
              <ul className="space-y-6 text-white/60">
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/20 uppercase mono">Email</span>
                  <span className="text-sm mono hover:text-white cursor-pointer">{HARIS_CV.email}</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/20 uppercase mono">Phone</span>
                  <span className="text-sm mono">{HARIS_CV.phone}</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/20 uppercase mono">Location</span>
                  <span className="text-sm mono">Multan, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] mono text-white/20 uppercase tracking-widest">
            <span>© 2026 Haris Babar. All rights reserved.</span>
            <div className="flex gap-4">
              <span>Software Engineer (AI & Full Stack)</span>
            </div>
          </div>
        </footer>
      </main>

      <AgentChat />
    </div>
  );
};

export default App;
