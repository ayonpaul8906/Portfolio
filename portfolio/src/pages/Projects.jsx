import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Section id="repertoire">
      {/* HEADER: MISSION PARAMETERS */}
      <div className="mb-20 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">
            [ Database: Full Repertoire ]
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">
            Winning <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700 italic">Moves.</span>
          </h1>
          <p className="text-gray-400 mt-8 max-w-xl text-lg font-medium leading-relaxed">
            A specialized collection of frontend-heavy and full-stack scenarios 
            focusing on <span className="text-white">AI integration</span>, 
            <span className="text-white">Web3 security</span>, and scalable user experiences.
          </p>
        </motion.div>

        {/* Decorative Grid Counter */}
        <div className="absolute top-0 right-0 hidden lg:block text-white/5 font-mono text-xs">
          TOTAL_SCENARIOS: {projects.length.toString().padStart(2, '0')}
        </div>
      </div>

      {/* PROJECT GRID: THE TACTICAL BOARD */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((p, index) => (
          <ProjectCard
            key={p.slug}
            index={index}
            title={p.title}
            desc={p.tagline}
            tech={p.tech}
            image={p.image}
            github={p.github}
            live={p.live}
            /* IMPORTANT: Use the slug here to fix navigation */
            slug={p.slug}
          />
        ))}
      </div>

      {/* FOOTER: THE NEXT CHALLENGE */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 p-12 border border-white/5 bg-[#0f0f0f] text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4">Interested in a Collaboration?</h3>
        <p className="text-gray-500 text-sm mb-8">Currently analyzing new opportunities for 2025 development cycles.</p>
        <a 
          href="/contact" 
          className="text-amber-500 font-mono text-xs uppercase tracking-[0.3em] hover:text-white transition-colors"
        >
          Initiate Briefing →
        </a>
      </motion.div>
    </Section>
  );
}