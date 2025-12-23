import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-32 px-6 text-center bg-[#0a0a0a] min-h-screen">
        <h1 className="text-amber-500 font-mono italic">ERR: SCENARIO_NOT_FOUND</h1>
        <Link to="/projects" className="text-white underline mt-4 block">Return to Repertoire</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <div className="max-w-6xl mx-auto py-24 px-6 lg:px-12">
        
        {/* ================= HEADER: MISSION BRIEF ================= */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-l-4 border-amber-500 pl-8"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-mono">
            Analysis Mode: Detailed Review
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-4 uppercase tracking-tighter">
            {project.title}
          </h1>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl font-medium leading-relaxed italic">
            "{project.tagline}"
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-amber-500 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-colors"
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%)" }}
            >
              Live Operation
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-colors"
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%)" }}
            >
              Access Source
            </a>
          </div>
        </motion.header>

        {/* ================= VISUAL: SCENARIO OVERVIEW ================= */}
        <div className="relative group overflow-hidden border border-white/10 bg-white/5 p-1">
           <div className="absolute top-4 left-4 z-10 font-mono text-[10px] bg-black/80 px-2 py-1 border border-amber-500/50 text-amber-500">
             SITUATION_VISUAL_01
           </div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* ================= CONTENT: THE POST-GAME ANALYSIS ================= */}
        <div className="grid lg:grid-cols-3 gap-16 mt-24">
          
          {/* Main Content (The Move-by-Move Story) */}
          <div className="lg:col-span-2 space-y-24">
            
            {/* Context/Problem */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-amber-500/50" />
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-amber-500">The Problem</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* Approach/Solution */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-amber-500/50" />
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-amber-500">The Strategy</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* Key Features (Winning Tactics) */}
            <section className="bg-white/5 p-10 relative border border-white/5">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/5 uppercase">Tactics_Log</div>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 italic">Key Features</h2>

              <ul className="space-y-6">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-gray-400 group">
                    <span className="mt-1.5 w-2 h-2 bg-amber-500 shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="group-hover:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar (Technical Repertoire) */}
          <aside className="space-y-12">
            
            {/* Tech Stack Widget */}
            <div className="border border-white/10 p-8 bg-[#0f0f0f] relative overflow-hidden">
               <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-500/5 clip-corner" />
               <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Engine_Specs</h3>
               <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-amber-200"
                  >
                    {t}
                  </span>
                ))}
               </div>
            </div>

            {/* Outcome Log */}
            <div className="border-l-2 border-amber-500/30 pl-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-4">Post-Match Result</h3>
              <p className="text-gray-400 text-sm leading-relaxed italic">
                {project.outcome}
              </p>
            </div>

            {/* Resume-specific Callout */}
            <div className="bg-amber-500/5 p-6 border border-amber-500/20">
               <p className="text-[10px] font-mono text-amber-500 leading-tight uppercase">
                 Verified during: <br />
                 <span className="text-white font-bold">Hackathon Prototype V.1</span>
               </p>
            </div>
          </aside>

        </div>

        {/* ================= NAVIGATION: NEXT MOVE ================= */}
        <div className="mt-32 pt-12 border-t border-white/10 flex justify-between items-center">
           <Link to="/projects" className="text-xs font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]">
             ← Return to Analysis
           </Link>
           <Link to="/contact" className="text-xs font-mono text-amber-500 hover:text-white transition-colors uppercase tracking-[0.2em]">
             Request Briefing →
           </Link>
        </div>
      </div>
    </div>
  );
}