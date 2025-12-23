import Section from "../components/Section";
import Tilt from "../components/Tilt";
import profile from "/ayon.jpg";

export default function About() {
  return (
    <Section id="opening">
      {/* THE PLAYER PROFILE: IMAGE + BIOGRAPHY */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Tactical Image Frame */}
        <Tilt>
          <div className="relative w-full max-w-sm mx-auto group">
            {/* Geometric Accent behind image */}
            <div className="absolute -inset-4 bg-amber-500/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
            
            {/* Sharp Corner Frame */}
            <div className="relative border border-white/10 p-2 bg-[#0a0a0a]"
                 style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }}>
              <img
                src={profile}
                alt="Ayon Paul"
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }}
              />
              
              {/* HUD Coordinate Label */}
              <div className="absolute bottom-6 right-6 font-mono text-[10px] text-amber-500 bg-black/80 px-2 py-1 border border-amber-500/50">
                PLAYER_ID: AYON_2407S
              </div>
            </div>
          </div>
        </Tilt>

        {/* Tactical Story */}
        <div>
          <h2 className="text-amber-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
            [ Phase I: The Opening ]
          </h2>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8">
            Analyzing the <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 italic">
              Digital Board.
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
            Currently pursuing a B.Tech in Computer Science at <span className="text-white underline decoration-amber-500/50 underline-offset-4">Dr. BC. Roy Engineering College</span>[cite: 25, 26, 27]. 
            I am a full-stack engineer who treats code like a grandmaster treats a game—every line is a calculated move toward a seamless user experience.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6 border-l-2 border-white/10 pl-6 italic">
            "My strategy involves merging clean, high-performance frontend interfaces with the 
            uncompromising logic of AI and the transparency of Web3".
          </p>

          <p className="text-gray-400 leading-relaxed">
            I’ve refined my tactics through intensive 24-hour sprints [cite: 33] and 
            global-scale hackathons[cite: 31, 32], building everything from AI-driven 
            neurodivergent-friendly productivity tools [cite: 16, 17] to decentralized 
            fintech prototypes[cite: 20, 21].
          </p>
        </div>
      </div>

      {/* PLAYER STATS: TOURNAMENT SUMMARY */}
      <div className="grid md:grid-cols-3 gap-6 mt-32">
        {/* Stat 1: Projects */}
        <div className="relative p-8 bg-[#0f0f0f] border border-white/5 hover:border-amber-500/30 transition-all group overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-white/5 uppercase">Endgame_Count</div>
          <h3 className="text-4xl font-black text-white mb-2 group-hover:text-amber-500 transition-colors">03</h3>
          <p className="text-gray-500 font-mono text-[11px] uppercase tracking-widest mb-4">Live Deployments</p>
          <p className="text-gray-400 text-xs leading-relaxed">
            From Gemini AI career mentors [cite: 11, 12] to secure P2P lending protocols on Base Sepolia[cite: 20, 21].
          </p>
        </div>

        {/* Stat 2: Hackathons */}
        <div className="relative p-8 bg-[#0f0f0f] border border-white/5 hover:border-amber-500/30 transition-all group overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-white/5 uppercase">Pressure_Test</div>
          <h3 className="text-4xl font-black text-white mb-2 group-hover:text-amber-500 transition-colors">48h+</h3>
          <p className="text-gray-500 font-mono text-[11px] uppercase tracking-widest mb-4">Tournament Hours</p>
          <p className="text-gray-400 text-xs leading-relaxed">
            Active competitor in HackHazards [cite: 31] and OSSDC Code for Change [cite: 33], delivering solutions under strict time constraints[cite: 35].
          </p>
        </div>

        {/* Stat 3: Open Source */}
        <div className="relative p-8 bg-[#0f0f0f] border border-white/5 hover:border-amber-500/30 transition-all group overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-white/5 uppercase">Global_Collab</div>
          <h3 className="text-4xl font-black text-white mb-2 group-hover:text-amber-500 transition-colors">OS</h3>
          <p className="text-gray-500 font-mono text-[11px] uppercase tracking-widest mb-4">Contribution Mentee</p>
          <p className="text-gray-400 text-xs leading-relaxed">
            Actively collaborating with maintainers in programs like JGEC Winter of Code [cite: 36, 37] to refine open-source project structures.
          </p>
        </div>
      </div>
    </Section>
  );
}