
import React from 'react';

const Navbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id.startsWith('mailto')) return;
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="mono font-bold tracking-tighter text-xl uppercase cursor-default">Haris Babar</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-white transition-colors">About</a>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-white transition-colors">Stack</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-white transition-colors">Timeline</a>
          <a href="mailto:harisbabar012@gmail.com" className="bg-[#ff4d00] text-white px-4 py-2 rounded-sm hover:bg-[#e64500] transition-colors mono text-[10px] tracking-widest">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
