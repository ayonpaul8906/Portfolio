import { motion } from "framer-motion";

export default function Button({ children, href, variant = "primary", className = "" }) {
  const base = "relative px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden active:scale-95 text-xs lg:text-sm";

  // Gaming-themed styles
  const styles = {
    // The "Queen" move: Bold, prominent, and commanding
    primary: "bg-amber-500 text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]",
    // The "Knight" move: Calculated, technical, and sharp
    outline: "bg-transparent text-white border border-white/20 hover:border-amber-500/50 hover:text-amber-500",
  };

  // Custom clip-path for that "Engineered" look
  const clipPathStyle = {
    clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%)",
  };

  return (
    <motion.a
      href={href}
      style={clipPathStyle}
      className={`${base} ${styles[variant]} ${className} group`}
      whileHover={{ y: -2 }}
    >
      {/* Background Hover Animation */}
      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
      
      {/* Button Content */}
      <span className="relative flex items-center justify-center gap-2">
        {children}
        {variant === "primary" && (
          <span className="text-[10px] opacity-50 group-hover:translate-x-1 transition-transform">
            ▶
          </span>
        )}
      </span>
    </motion.a>
  );
}