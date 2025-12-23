import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import SkillGroup from "../components/SkillGroup";
import Button from "../components/Button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* PHASE 1: THE OPENING (HERO) */}
      <Hero />

      {/* PHASE 2: TACTICAL FOCUS (CORE STRENGTHS) */}
      <Section id="focus">
        <div className="relative">
          <span className="absolute -top-12 left-0 text-8xl font-black text-white/5 select-none tracking-tighter uppercase">
            Strategy
          </span>

          <div className="grid md:grid-cols-2 gap-16 items-start relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black leading-tight uppercase tracking-tighter text-white">
                Engineered <br />
                <span className="text-amber-500 italic">Excellence</span>
              </h2>
              <p className="text-gray-400 mt-8 text-lg max-w-md leading-relaxed font-medium">
                I specialize in high-stakes frontend products where 
                <span className="text-white"> AI logic</span> meets 
                <span className="text-white"> Web3 transparency</span>.
              </p>
            </motion.div>

            <div className="space-y-6 relative">
              <div className="p-8 border-l-4 border-amber-500 bg-[#0f0f0f] border-r border-y border-white/5 hover:bg-amber-500/5 transition-all">
                <h3 className="text-xs font-mono text-amber-500 uppercase tracking-[0.3em] mb-2">Requirement 01</h3>
                <h4 className="text-xl font-bold text-white uppercase">Frontend Engineering</h4>
                <p className="text-gray-500 mt-2 text-sm font-medium">React, Tailwind CSS, and Vite-driven interfaces optimized for professional performance.</p>
              </div>

              <div className="p-8 border-l-4 border-white/20 bg-[#0f0f0f] border-r border-y border-white/5 hover:border-amber-500 transition-all ml-4 md:ml-8">
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-2">Requirement 02</h3>
                <h4 className="text-xl font-bold text-white uppercase">AI Integration</h4>
                <p className="text-gray-500 mt-2 text-sm font-medium">Implementing Gemini and GROQ APIs as core tactical features for career guidance and accessibility.</p>
              </div>

              <div className="p-8 border-l-4 border-white/20 bg-[#0f0f0f] border-r border-y border-white/5 hover:border-amber-500 transition-all ml-8 md:ml-16">
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-2">Requirement 03</h3>
                <h4 className="text-xl font-bold text-white uppercase">On-Chain Logic</h4>
                <p className="text-gray-500 mt-2 text-sm font-medium">Developing decentralized prototypes using Ethers.js and Base Sepolia Testnet.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PHASE 3: WINNING SCENARIOS (PROJECTS) */}
      <Section id="projects">
        <div className="relative">
          <span className="absolute -top-16 right-0 text-8xl font-black text-white/5 select-none tracking-tighter uppercase">
            Scenarios
          </span>

          <div className="mb-20">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white">
              Tactical <br />
              <span className="text-amber-500 italic">Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              index={0}
              title="Career Compass"
              desc="AI-powered platform using Gemini AI for personalized career roadmaps and real-time tracking via Firestore."
              tech={["React", "Firebase", "Gemini AI"]}
              link="/projects/careercompass"
              image="/projects/careercompass.png"
              github="https://github.com/ayonpaul8906"
              live="https://vercel.com"
            />
            <ProjectCard 
              index={1}
              title="ZenCue"
              desc="Neurodivergent-friendly tool featuring GROQ API and voice feedback for a distraction-free experience."
              tech={["React", "Flask", "GROQ"]}
              link="/projects/zencue"
              image="/projects/zencue.png"
              github="https://github.com/ayonpaul8906"
              live="https://render.com"
            />
            <ProjectCard 
              index={2}
              title="TrustBridge"
              desc="Decentralized P2P lending platform with wallet-based login and dynamic trust scoring on Sepolia."
              tech={["Web3", "Ethers.js", "Firebase"]}
              link="/projects/trustbridge"
              image="/projects/trustbridge.png"
              github="https://github.com/ayonpaul8906"
              live="https://vercel.com"
            />
          </div>
        </div>
      </Section>

      {/* PHASE 4: TOURNAMENT HISTORY (EXPERIENCE) */}
      <Section id="experience">
        <div className="relative">
          <span className="absolute -top-16 left-0 text-8xl font-black text-white/5 select-none tracking-tighter uppercase">
            Ranked
          </span>

          <div className="mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white">
              Tournament <br />
              <span className="text-amber-500 italic">History</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-[#0f0f0f] border border-white/5 hover:border-amber-500/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-white/10 uppercase">Event_01</div>
              <span className="text-amber-500 font-mono text-[10px] uppercase tracking-widest font-bold">April 2025</span>
              <h3 className="text-2xl font-black text-white uppercase mt-2">HackHazards</h3>
              <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                Global hackathon focused on AI, Web3, and Infra. Competed as part of Team The Eaglites.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-[#0f0f0f] border border-white/5 hover:border-amber-500/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-white/10 uppercase">Event_02</div>
              <span className="text-amber-500 font-mono text-[10px] uppercase tracking-widest font-bold">March 2025</span>
              <h3 className="text-2xl font-black text-white uppercase mt-2">Code for Change</h3>
              <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                24-Hour sprint at NSHM Knowledge Campus focusing on real-world problem solving.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 p-8 bg-[#0f0f0f] border border-white/5 hover:border-amber-500/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-white/10 uppercase">Event_03</div>
              <span className="text-amber-500 font-mono text-[10px] uppercase tracking-widest font-bold">Feb - Mar 2025</span>
              <h3 className="text-2xl font-black text-white uppercase mt-2">JGEC Winter of Code</h3>
              <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                Open-source contribution program; collaborated with maintainers on diverse codebases.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA: THE CHECKMATE */}
      <Section>
        <div className="relative bg-[#0d0d0d] p-16 text-center border border-white/10 overflow-hidden" 
             style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)" }}>
          
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-50" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
              Found a <br />
              <span className="text-amber-500 italic">Winning Move?</span>
            </h2>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Button href="/contact" variant="primary">Establish Connection</Button>
              <Button href="/projects" variant="outline">Analyze Repertoire</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}