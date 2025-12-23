import Tilt from "./Tilt";

export default function SkillGroup({ title, items }) {
  return (
    <Tilt>
      <div className="relative p-1 bg-white/5 group overflow-hidden" 
           style={{ clipPath: "polygon(0 0, 95% 0, 100% 15%, 100% 100%, 5% 100%, 0 85%)" }}>
        
        {/* Hover Highlight (Amber Pulse) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-500/20 to-transparent" />

        <div className="relative z-10 p-8 bg-[#0a0a0a] h-full"
             style={{ clipPath: "polygon(0 0, 95% 0, 100% 15%, 100% 100%, 5% 100%, 0 85%)" }}>
          
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500 mb-8 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-amber-500/50" />
            {title}
          </h3>

          <div className="flex flex-wrap gap-3">
            {items.map((item) => (
              <span
                key={item}
                className="px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-white border border-white/10 hover:border-amber-500 hover:text-amber-500 transition-all duration-300 bg-white/5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  );
}