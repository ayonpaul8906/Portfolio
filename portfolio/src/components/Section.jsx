import { motion } from "framer-motion";

export default function Section({ children, id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden"
    >
      {/* Tactical Grid Overlay (Subtle board pattern) */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {children}
    </motion.section>
  );
}