import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* PLAYER IDENTITY */}
          <div className="md:col-span-2">
            <Link to="/" className="group flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-amber-500 rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[225deg] duration-500">
                <span className="text-black font-bold text-[10px] -rotate-45 group-hover:rotate-[-225deg] transition-transform">A</span>
              </div>
              <span className="font-black text-xl tracking-tighter uppercase text-white">
                Ayon <span className="text-amber-500">Paul</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-6 font-medium">
              B.Tech in Computer Science and Engineering. 
              Specializing in the intersection of <span className="text-white">AI-driven interfaces</span> and 
              <span className="text-white"> decentralized protocols</span>[cite: 11, 20].
            </p>
            <div className="flex gap-4">
               {/* Social Move Links */}
               <a href="https://github.com/ayonpaul8906" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-amber-500 transition-colors">
                 <span className="font-mono text-[10px] uppercase tracking-widest underline decoration-white/10 underline-offset-4">GitHub</span>
               </a>
               <a href="https://www.linkedin.com/in/ayon2407s/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-amber-500 transition-colors">
                 <span className="font-mono text-[10px] uppercase tracking-widest underline decoration-white/10 underline-offset-4">LinkedIn</span>
               </a>
            </div>
          </div>

          {/* QUICK REPERTOIRE (Navigation) */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-6">Navigation</h4>
            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest text-gray-500">
              <li><Link to="/projects" className="hover:text-amber-500 transition-colors">Tactics</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">Opening</Link></li>
              <li><Link to="/skills" className="hover:text-amber-500 transition-colors">Skills</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Endgame</Link></li>
            </ul>
          </div>

          {/* CONTACT BRIEFING */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-6">Briefing</h4>
            <div className="space-y-4">
              <p className="text-[10px] font-mono text-gray-500 uppercase leading-relaxed">
                Primary_Secure_Line: <br />
                <span className="text-white">+91 9749315446</span> 
              </p>
              <p className="text-[10px] font-mono text-gray-500 uppercase leading-relaxed">
                Establish_Sync: <br />
                <span className="text-white">ayonpaul8906@gmail.com</span> 
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIPE: MATCH STATUS */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System_Active</span>
             </div>
             <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
               © {currentYear} Ayon Paul. All Tactics Reserved.
             </p>
          </div>

          {/* Education Signature */}
          <div className="bg-white/5 px-4 py-2 border border-white/10 rounded-sm">
             <p className="text-[9px] font-mono text-gray-500 uppercase tracking-tighter">
                Trained_At: <span className="text-white">Dr. BC. Roy Engineering College</span> 
             </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/5 blur-[120px] -z-10 pointer-events-none" />
    </footer>
  );
}