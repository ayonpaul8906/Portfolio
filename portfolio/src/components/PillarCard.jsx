import { motion } from "framer-motion";

export default function PillarCard({ title, description, index }) {
  // Mapping index to Chess Coordinates for that extra "Chess Lover" detail
  const coordinates = ["A1", "B2", "C3", "D4", "E5", "F6"];
  const coord = coordinates[index] || "G7";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-8 bg-[#0f0f0f] border-l-4 border-l-transparent border-r border-t border-b border-white/5 hover:border-l-amber-500 hover:bg-amber-500/5 transition-all duration-500 overflow-hidden"
    >
      {/* Chess Coordinate Overlay */}
      <span className="absolute top-2 right-4 font-mono text-xs text-white/10 group-hover:text-amber-500/30 transition-colors">
        {coord}
      </span>

      {/* Background Decorative "Piece" Silhouette */}
      <div className="absolute -bottom-4 -right-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="white">
          <path d="M19 22H5V20H19V22M17 10C17 12.82 15 15.18 12.5 15.82V18H15V20H9V18H11.5V15.82C9 15.18 7 12.82 7 10V4H17V10Z" />
        </svg>
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-4 group-hover:text-amber-500 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed font-medium">
          {description}
        </p>

        {/* The "Power Level" Bar */}
        <div className="mt-6 w-full h-[2px] bg-white/5 overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-amber-500 to-transparent w-full"
          />
        </div>
      </div>
    </motion.div>
  );
}