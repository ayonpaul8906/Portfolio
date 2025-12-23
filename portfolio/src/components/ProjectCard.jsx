import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const ExternalLinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

export default function ProjectCard({ title, desc, tech, image, github, live, link, slug, index }) {
  const to = link ?? (slug ? `/projects/${slug}` : "#");

  return (
      <div className="group relative bg-[#0f0f0f] border border-white/10 overflow-hidden transition-all duration-500 hover:border-amber-500/50">
        {/* Scanning Line Animation (Gaming HUD Effect) */}
        <div className="absolute inset-0 w-full h-[2px] bg-amber-500/20 z-20 top-0 group-hover:animate-scan pointer-events-none" />

        {/* IMAGE SECTION */}
        <div className="relative h-56 overflow-hidden border-b border-white/10">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />
          
          {/* HUD Overlay */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-black/80 backdrop-blur-md border border-amber-500/50 text-amber-500 text-[10px] font-mono px-2 py-1 uppercase tracking-tighter">
              Scenario #{index + 1}
            </span>
          </div>

          {/* Action Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 pointer-events-none group-hover:pointer-events-auto z-10">
            <a href={live} target="_blank" rel="noopener noreferrer" onClick={(e)=>{ e.stopPropagation(); }} className="relative z-20 p-3 bg-amber-500 text-black rounded-full hover:scale-110 transition-transform">
              <ExternalLinkIcon />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" onClick={(e)=>{ e.stopPropagation(); }} className="relative z-20 p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
              <GitHubIcon />
            </a>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="p-6 relative z-20">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-black uppercase tracking-tighter text-white group-hover:text-amber-500 transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-gray-400 text-sm line-clamp-2 mb-4 font-medium leading-relaxed">
            {desc}
          </p>

          {/* Tech Pills (Strategy Requirements) */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t) => (
              <span key={t} className="text-[10px] font-mono font-bold text-gray-500 border border-white/10 px-2 py-0.5 uppercase group-hover:border-amber-500/30 group-hover:text-amber-200 transition-colors">
                {t}
              </span>
            ))}
          </div>

          {/* The "Move" Execution Link */}
          <div className="pt-4 border-t border-white/5">
            <Link
              to={to}
              onClick={(e)=>{ if(to === '#'){ e.preventDefault(); } }}
              role={to === '#' ? 'link' : undefined}
              aria-disabled={to === '#'}
              className="flex items-center justify-between text-xs font-black uppercase tracking-[0.2em] text-amber-500 hover:text-white transition-colors"
            >
              <span>Execute Strategy</span>
              <span className="group-hover:translate-x-2 text-3xl transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Decorative Corner Accents */}
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-amber-500/10 clip-corner" />
      </div>
  );
}