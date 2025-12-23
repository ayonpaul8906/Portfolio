import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 flex items-center bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Board Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `conic-gradient(#fff 0.25turn, transparent 0.25turn 0.5turn, #fff 0.5turn 0.75turn, transparent 0.75turn)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/50 text-amber-500 font-mono text-xs rounded-full">
              ELO: 2400+ (Full-Stack Developer)
            </span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">MASTER</span> <br />
            OF <span className="italic text-amber-500 underline decoration-white/20">LOGIC.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
            I don't just write code; I orchestrate systems[cite: 35]. Currently a B.Tech student at 
            <span className="text-white"> Dr. BC. Roy Engineering College</span>[cite: 25, 26], 
            building high-stakes <span className="text-amber-500 font-bold">AI</span> and 
            <span className="text-blue-400 font-bold"> Web3</span> architectures.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors">
              See My Moves
            </button>
            <button className="px-8 py-4 border border-white/20 font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
              Analyze CV
            </button>
          </div>
        </motion.div>

        {/* The "Tactical" Visual Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative group">
             {/* Decorative Knight/Piece Shadow */}
            <div className="absolute -inset-4 bg-amber-500/20 blur-3xl group-hover:bg-amber-500/40 transition-all duration-700" />
            
            <div className="relative w-full max-w-md border border-white/10 bg-black/60 backdrop-blur-md p-8 rounded-tr-[80px] rounded-bl-[80px]">
              <div className="font-mono text-sm space-y-4">
                <p className="text-amber-500">// My Opening Repertoire</p>
                <div className="space-y-2">
                  <p><span className="text-gray-500">1.</span> <span className="text-blue-400 underline">E4</span> (Frontend: React.js, Tailwind) [cite: 7]</p>
                  <p><span className="text-gray-500">2.</span> <span className="text-indigo-400 underline">Nf3</span> (AI: Gemini, GROQ API) [cite: 12, 17]</p>
                  <p><span className="text-gray-500">3.</span> <span className="text-cyan-400 underline">Bb5</span> (Web3: Ethers.js, Sepolia) [cite: 8, 21]</p>
                </div>
                <hr className="border-white/10 my-4" />
                <div className="flex justify-between items-center text-xs">
                  <span className="text-green-500 uppercase tracking-widest animate-pulse">● Thinking...</span>
                  <span className="text-gray-500">Depth: 24/24</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}