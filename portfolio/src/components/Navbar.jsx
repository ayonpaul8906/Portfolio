import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* The King - Brand Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-sm rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[225deg] duration-500">
             <span className="text-black font-bold -rotate-45 group-hover:rotate-[-225deg] transition-transform">A</span>
          </div>
          <span className="font-black text-xl tracking-tighter uppercase text-white">
            Ayon <span className="text-amber-500">Paul</span>
          </span>
        </Link>

        {/* The Repertoire - Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
          {[
            { name: "Tactics", path: "/projects" }, // Projects renamed to Tactics
            { name: "Opening", path: "/about" },    // About renamed to Opening
            { name: "Skills", path: "/skills" },
            { name: "Endgame", path: "/contact" }   // Contact renamed to Endgame
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className="px-5 py-2 hover:text-white hover:bg-white/5 rounded-sm transition-all relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* The Winning Move - Resume Button */}
        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            download="Ayon_Paul_Resume.pdf"
            className="relative group px-6 py-2 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full border border-amber-500/50 group-hover:border-amber-500 transition-colors" />
            <span className="absolute bottom-0 left-0 w-full h-0 bg-amber-500 group-hover:h-full transition-all duration-300 -z-10" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 group-hover:text-black transition-colors">
              Download CV
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}