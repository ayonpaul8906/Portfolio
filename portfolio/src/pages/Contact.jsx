import Section from "../components/Section";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Section id="endgame">
      <div className="max-w-6xl mx-auto">
        {/* HEADER: MISSION OBJECTIVE */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-amber-500 font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            [ Final Phase: The Endgame ]
          </motion.h2>
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter text-white">
            MAKE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700">MOVE.</span>
          </h1>

          <p className="text-gray-400 text-xl mt-8 max-w-2xl leading-relaxed">
            Ready to integrate <span className="text-white">AI intelligence</span> or 
            <span className="text-white"> Web3 security</span> into your next project? 
            Let's discuss how we can engineer the future together. [cite: 8, 11]
          </p>
        </div>

        {/* PRIMARY ACTION: THE DIRECT GAMBIT */}
        <a
          href="mailto:ayonpaul8906@gmail.com"
          className="group relative block p-1 bg-white/5 overflow-hidden transition-all duration-500 hover:bg-amber-500/10"
          style={{ clipPath: "polygon(0 0, 97% 0, 100% 20%, 100% 100%, 3% 100%, 0 80%)" }}
        >
          <div 
            className="relative z-10 p-12 bg-[#0a0a0a]"
            style={{ clipPath: "polygon(0 0, 97% 0, 100% 20%, 100% 100%, 3% 100%, 0 80%)" }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-amber-500 mb-4">
                  Establish Connection
                </p>
                <h2 className="text-3xl md:text-5xl font-black text-white group-hover:text-amber-500 transition-colors">
                  ayonpaul8906@gmail.com 
                </h2>
                <p className="text-gray-500 mt-4 font-mono text-xs uppercase tracking-widest">
                  Response latency: &lt; 24 HOURS
                </p>
              </div>
              
              <div className="text-5xl group-hover:translate-x-4 transition-transform text-amber-500">
                →
              </div>
            </div>
          </div>
        </a>

        {/* SECONDARY COORDINATES: SOCIAL REPERTOIRE */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* GitHub */}
          <a
            href="https://github.com/ayonpaul8906"
            target="_blank"
            rel="noreferrer"
            className="relative p-8 bg-[#0f0f0f] border border-white/5 hover:border-amber-500/50 transition-all group"
          >
            <span className="absolute top-2 right-4 font-mono text-[10px] text-white/10 uppercase">Code_Base</span>
            <h3 className="text-xl font-bold text-white mb-2">GitHub [cite: 5]</h3>
            <p className="text-gray-500 text-xs uppercase tracking-tighter">Analyze my repositories [cite: 9]</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ayon2407s/"
            target="_blank"
            rel="noreferrer"
            className="relative p-8 bg-[#0f0f0f] border border-white/5 hover:border-amber-500/50 transition-all group"
          >
            <span className="absolute top-2 right-4 font-mono text-[10px] text-white/10 uppercase">Intel_Network</span>
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn </h3>
            <p className="text-gray-500 text-xs uppercase tracking-tighter">Professional synchronization</p>
          </a>

          {/* Direct Line */}
          <div className="relative p-8 bg-[#0f0f0f] border border-white/5 group">
            <span className="absolute top-2 right-4 font-mono text-[10px] text-white/10 uppercase">Secure_Line</span>
            <h3 className="text-xl font-bold text-white mb-2">Voice </h3>
            <p className="text-gray-500 text-xs uppercase tracking-tighter">+91 9749315446 </p>
          </div>
        </div>
      </div>
    </Section>
  );
}