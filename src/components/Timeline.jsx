import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2025",
    title: "AI Genesis",
    desc: "First autonomous cognitive learning matrix compiled. Initial model runs, demonstrating self-correcting neural paths without supervision.",
    color: "cyan",
    glow: "shadow-cyber-cyan/30"
  },
  {
    year: "2028",
    title: "Neural Evolution",
    desc: "Establishment of high-speed synaptic links connecting brainwaves directly to digital processing hubs. Sensory feedback becomes bidirectional.",
    color: "purple",
    glow: "shadow-cyber-purple/30"
  },
  {
    year: "2032",
    title: "Human Enhancement",
    desc: "Cyborg X v1.0 biological implant goes live. Humans gain access to localized calculations, optical HUD overlays, and microsecond reaction states.",
    color: "green",
    glow: "shadow-cyber-green/30"
  },
  {
    year: "2040",
    title: "Cyber Civilization",
    desc: "Complete integration of decentralized cloud intellect. Collective consciousness grids allow instant knowledge sync across all certified nodes.",
    color: "cyan",
    glow: "shadow-cyber-cyan/30"
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 px-6 z-10 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-heading text-xs font-bold tracking-widest text-cyber-cyan uppercase mb-3 text-glow-cyan"
        >
          PROJECT ROADMAP
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-wider"
        >
          THE CYBERNETIC TIMELINE
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true, margin: "-100px" }}
          className="h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto mt-4"
        />
      </div>

      <div className="relative">
        {/* Central glowing vertical timeline line (Desktop) / Left line (Mobile) */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyber-cyan via-cyber-purple to-cyber-green opacity-40 shadow-[0_0_10px_rgba(0,245,255,0.3)]"></div>

        <div className="space-y-16 md:space-y-24">
          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            const accentColor = 
              event.color === "cyan" 
                ? "text-cyber-cyan" 
                : event.color === "purple" 
                  ? "text-cyber-purple" 
                  : "text-cyber-green";

            const borderGlow = 
              event.color === "cyan" 
                ? "border-cyber-cyan/30 shadow-[0_0_15px_rgba(0,245,255,0.05)]" 
                : event.color === "purple" 
                  ? "border-cyber-purple/30 shadow-[0_0_15px_rgba(123,47,247,0.05)]" 
                  : "border-cyber-green/30 shadow-[0_0_15px_rgba(0,255,156,0.05)]";

            return (
              <div key={event.year} className="relative flex flex-col md:flex-row items-start md:items-center">
                {/* Connector Dot */}
                <div className="absolute left-[9px] md:left-1/2 md:-translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.15 }}
                    className={`w-4 h-4 rounded-full bg-cyber-bg border-2 flex items-center justify-center ${
                      event.color === "cyan" 
                        ? "border-cyber-cyan shadow-[0_0_8px_#00F5FF]" 
                        : event.color === "purple" 
                          ? "border-cyber-purple shadow-[0_0_8px_#7B2FF7]" 
                          : "border-cyber-green shadow-[0_0_8px_#00FF9C]"
                    }`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-1.5 h-1.5 rounded-full ${
                        event.color === "cyan" ? "bg-cyber-cyan" : event.color === "purple" ? "bg-cyber-purple" : "bg-cyber-green"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Left side empty space (Desktop only) */}
                <div className={`hidden md:block w-1/2 ${isLeft ? "pr-12 text-right" : "pl-12 order-2 text-left"}`}>
                  {isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className={`font-heading text-5xl font-black ${accentColor} text-glow opacity-30 select-none`}>
                        {event.year}
                      </span>
                    </motion.div>
                  ) : null}
                </div>

                {/* Right side card (Desktop) / Full width card (Mobile) */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? "md:pl-12" : "md:pr-12 md:order-1"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`glass-panel p-6 md:p-8 rounded border ${borderGlow} relative hover:border-white/20 transition-all duration-300`}
                  >
                    {/* Corner accent bracket */}
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10"></div>

                    {/* Mobile Year Tag */}
                    <div className="md:hidden flex items-center gap-2 mb-2">
                      <span className={`font-heading text-xl font-black ${accentColor} text-glow`}>
                        {event.year}
                      </span>
                      <span className="w-1.5 h-[1px] bg-white/20"></span>
                    </div>

                    {/* Desktop Year subtitle */}
                    <div className="hidden md:block mb-1">
                      <span className={`font-heading text-sm font-bold tracking-widest ${accentColor}`}>
                        PHASE {index + 1}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wider mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="font-body text-gray-400 text-sm leading-relaxed">
                      {event.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Left side year placeholder (Desktop only, if isRight) */}
                <div className={`hidden md:block w-1/2 ${!isLeft ? "pl-12 text-left" : ""}`}>
                  {!isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className={`font-heading text-5xl font-black ${accentColor} text-glow opacity-30 select-none`}>
                        {event.year}
                      </span>
                    </motion.div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
