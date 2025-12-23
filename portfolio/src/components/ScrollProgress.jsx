import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Adding "Spring" makes the bar move like a smooth gaming animation 
  // rather than a stiff linear movement.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        style={{
          scaleX: scaleX,
          background: "linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)",
        }}
        className="fixed top-0 left-0 right-0 h-[4px] origin-left z-[100] shadow-[0_0_15px_rgba(245,158,11,0.6)]"
      >
        {/* The "Active Head" of the bar - a glowing tip */}
        <div className="absolute right-0 top-0 h-full w-[10px] bg-white blur-[4px] animate-pulse" />
      </motion.div>

      {/* Optional: Coordinate Counter - Small detail for the Chess Theme */}
      <motion.div 
        className="fixed top-5 right-6 z-[100] font-mono text-[10px] text-amber-500/50 hidden lg:block"
        style={{ opacity: scrollYProgress }}
      >
        [ POSITION_ANALYSIS: {(scrollYProgress.get() * 100).toFixed(0)}% ]
      </motion.div>
    </>
  );
}