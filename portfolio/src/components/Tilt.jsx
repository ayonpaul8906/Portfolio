import { motion } from "framer-motion";

export default function Tilt({ children }) {
  return (
    <motion.div
      whileHover={{ 
        rotateX: 8, 
        rotateY: -8, 
        scale: 1.02,
        z: 50 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 15, // Lower damping for a punchier "game-like" feel
        mass: 1 
      }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}