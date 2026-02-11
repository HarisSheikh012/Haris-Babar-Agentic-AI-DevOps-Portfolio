
import React from 'react';
import { HARIS_CV } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 border-t border-white/10 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mono mb-12 uppercase tracking-widest text-white/40">Core Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {HARIS_CV.skills.map((skill, idx) => (
            <div key={idx} className="bg-black p-8 group hover:bg-white/[0.02] transition-colors">
              <h3 className="mono text-[#ff4d00] mb-6 text-sm">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-lg text-white/80 flex items-center gap-2">
                    <span className="w-1 h-1 bg-white/20 group-hover:bg-[#ff4d00] transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
