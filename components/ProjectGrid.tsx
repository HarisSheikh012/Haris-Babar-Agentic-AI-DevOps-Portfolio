
import React from 'react';
import { HARIS_CV } from '../constants';

const ProjectGrid: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold mono uppercase tracking-widest text-white/40 mb-4">Showcase Projects</h2>
            <p className="text-white/60">Practical applications of Agentic AI and enterprise-grade DevOps.</p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/10 mx-10 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HARIS_CV.projects.map((project, idx) => (
            <div key={idx} className="border border-white/10 p-8 hover:border-[#ff4d00]/50 transition-all relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4d00]/5 blur-[80px] pointer-events-none group-hover:bg-[#ff4d00]/20 transition-all"></div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] mono border border-white/20 px-2 py-0.5 text-white/40 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#ff4d00] transition-colors">{project.title}</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="mono text-sm text-white/40 flex items-center gap-2">
                <span>View Project Details</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">{"->"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
