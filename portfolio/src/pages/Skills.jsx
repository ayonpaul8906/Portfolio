import { motion, useScroll, useSpring } from "framer-motion";
import Section from "../components/Section";
import SkillGroup from "../components/SkillGroup";
import Tilt from "../components/Tilt";
import { skills } from "../data/skills";
import { experience } from "../data/experience";

export default function Skills() {
  // Setup for the vertical timeline progress line
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Section id="repertoire">
        {/* HEADER: MISSION PARAMETERS */}
        <div className="mb-24 relative">
          <span className="absolute -top-16 left-0 text-8xl font-black text-white/5 select-none tracking-tighter uppercase">
            Repertoire
          </span>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase">
              Technical <br />
              <span className="text-amber-500 italic">Assets</span>
            </h1>

            <p className="text-gray-400 mt-8 max-w-xl text-lg font-medium leading-relaxed">
              A comprehensive breakdown of the tools and frameworks utilized in the 
              development of AI-driven interfaces and decentralized systems[cite: 6, 8, 12, 17].
            </p>
          </motion.div>
        </div>

        {/* SKILLS GRID: TACTICAL SUITES */}
        <div className="grid md:grid-cols-2 gap-10 mb-40">
          <SkillGroup title="Frontend Strategy" items={skills.frontend} />
          <SkillGroup title="Logic & AI Core" items={skills.backend_ai} />
          <SkillGroup title="Blockchain Suite" items={skills.web3} />
          <SkillGroup title="DevOps & Tools" items={skills.tools} />
        </div>

        {/* TOURNAMENT HISTORY: VERTICAL TIMELINE */}
        <div className="relative mt-32 max-w-5xl mx-auto">
          <span className="absolute -top-16 right-0 text-8xl font-black text-white/5 select-none tracking-tighter uppercase">
            History
          </span>

          <div className="mb-20 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              Tournament <br />
              <span className="text-amber-500 italic">Timeline</span>
            </h2>
            <p className="text-gray-500 mt-4 font-mono text-[10px] uppercase tracking-[0.2em]">
              Verified growth through high-pressure competitive environments[cite: 32, 34, 37].
            </p>
          </div>

          {/* The Timeline Tracker Line */}
          <div className="absolute left-4 md:left-1/2 top-40 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-24 relative z-10">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Match Node */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-amber-500 rounded-full -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(245,158,11,0.8)] border-4 border-[#0a0a0a]" />

                {/* Content Card */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <Tilt>
                    <div className="relative p-8 bg-[#0f0f0f] border border-white/5 hover:border-amber-500/50 transition-all duration-500 group overflow-hidden"
                         style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)" }}>
                      
                      {/* Corner HUD Data */}
                      <span className="absolute top-2 right-4 font-mono text-[9px] text-white/5 group-hover:text-amber-500/20">
                        MATCH_LOG::0{index + 1}
                      </span>

                      <div className="relative z-10">
                        <h3 className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-amber-500 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-amber-500/80 mt-1 font-mono text-[10px] uppercase tracking-widest font-bold">
                          {exp.org} [cite: 31, 33, 36]
                        </p>
                        
                        <div className="mt-6 pt-6 border-t border-white/5">
                          <p className="text-gray-500 text-sm font-medium leading-relaxed">
                            {exp.desc} [cite: 32, 35, 37]
                          </p>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FOOTER: THE NEXT CHALLENGE */}
      <Section>
        <div className="border-t border-white/10 py-20 text-center">
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4">
            End of Record
          </p>
          <a href="/contact" className="text-2xl font-black uppercase tracking-tighter text-white hover:text-amber-500 transition-colors">
            Initiate New Project Sync →
          </a>
        </div>
      </Section>
    </div>
  );
}