
import React from 'react';
import { HARIS_CV } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mono mb-16 uppercase tracking-widest text-white/40">Professional Timeline</h2>
        
        <div className="space-y-px bg-white/10 border border-white/10">
          {HARIS_CV.experience.map((exp, idx) => (
            <div key={idx} className="bg-black p-10 flex flex-col md:flex-row gap-8 items-start hover:bg-white/[0.01] transition-colors">
              <div className="md:w-1/4">
                <div className="mono text-sm text-[#ff4d00] mb-2">{exp.period}</div>
                <div className="text-white/40 text-sm font-medium uppercase tracking-tighter">{exp.location}</div>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                <div className="mono text-white/60 mb-6 flex items-center gap-2 italic">
                  @ {exp.company}
                </div>
                
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-white/60 flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-px bg-[#ff4d00]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
