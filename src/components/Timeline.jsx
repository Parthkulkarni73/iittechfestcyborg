import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2025",
    title: "AI Genesis",
    desc: "First autonomous cognitive learning matrix compiled. Initial model runs, demonstrating self-correcting neural paths without supervision.",
    color: "cyan",
    yPos: 120
  },
  {
    year: "2028",
    title: "Neural Evolution",
    desc: "Establishment of high-speed synaptic links connecting brainwaves directly to digital processing hubs. Sensory feedback becomes bidirectional.",
    color: "purple",
    yPos: 320
  },
  {
    year: "2032",
    title: "Human Enhancement",
    desc: "Cyborg X v1.0 biological implant goes live. Humans gain access to localized calculations, optical HUD overlays, and microsecond reaction states.",
    color: "green",
    yPos: 520
  },
  {
    year: "2040",
    title: "Cyber Civilization",
    desc: "Complete integration of decentralized cloud intellect. Collective consciousness grids allow instant knowledge sync across all certified nodes.",
    color: "cyan",
    yPos: 720
  }
];

export default function Timeline() {
  const height = 840;

  // Generate rungs for the DNA double-helix strand
  const rungs = [];
  for (let y = 40; y < height - 40; y += 30) {
    const angle = (y * Math.PI) / 100;
    const x1 = 50 + 20 * Math.sin(angle);
    const x2 = 50 - 20 * Math.sin(angle);
    rungs.push({ y, x1, x2 });
  }

  return (
    <section id="timeline" className="relative py-28 px-6 z-10 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-heading text-xs font-bold tracking-widest text-cyber-cyan uppercase mb-3 text-glow-cyan"
        >
          COGNITIVE EVOLUTION
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-wider"
        >
          THE NEURAL CORE PATHWAY
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true, margin: "-100px" }}
          className="h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto mt-4"
        />
      </div>

      <div className="relative min-h-[840px]">
        
        {/* DNA SVG double helix vertical pathway (Desktop: centered, Mobile: left aligned) */}
        <motion.div 
          style={{ perspective: 400 }}
          animate={{ 
            rotateY: 360,
            y: [0, -8, 0]
          }}
          transition={{ 
            rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[100px] z-10 pointer-events-none"
        >
          <svg viewBox={`0 0 100 ${height}`} className="w-full h-full">
            {/* Strand 1 (Sine wave) */}
            <motion.path
              d={`M 50,0 Q 75,100 50,200 T 50,400 T 50,600 T 50,800 T 50,${height}`}
              fill="none"
              stroke="var(--cyber-cyan)"
              animate={{ 
                strokeWidth: [1.5, 2.5, 1.5],
                opacity: [0.45, 0.85, 0.45] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            {/* Strand 2 (Offset Sine wave) */}
            <motion.path
              d={`M 50,0 Q 25,100 50,200 T 50,400 T 50,600 T 50,800 T 50,${height}`}
              fill="none"
              stroke="var(--cyber-purple)"
              animate={{ 
                strokeWidth: [1.5, 2.5, 1.5],
                opacity: [0.45, 0.85, 0.45] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1.5
              }}
            />
            
            {/* Connecting DNA Rungs */}
            {rungs.map((rung, index) => (
              <line
                key={index}
                x1={rung.x1}
                y1={rung.y}
                x2={rung.x2}
                y2={rung.y}
                stroke="rgba(0, 245, 255, 0.25)"
                strokeWidth="1"
              />
            ))}

            {/* Glowing DNA Particles Dust */}
            {Array.from({ length: 14 }).map((_, i) => {
              const y = (i * height) / 14 + 30;
              const x = 50 + Math.sin(i * 1.8) * 35;
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={Math.random() * 2 + 1}
                  fill={i % 2 === 0 ? "var(--cyber-cyan)" : "var(--cyber-purple)"}
                  animate={{ 
                    opacity: [0.2, 0.9, 0.2],
                    scale: [0.8, 1.35, 0.8],
                    x: [0, (Math.random() - 0.5) * 12, 0]
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              );
            })}
          </svg>
        </motion.div>

        <div className="space-y-16 md:space-y-0 relative">
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
              <div 
                key={event.year} 
                className="relative flex flex-col md:flex-row items-start md:items-center"
                style={{ height: "180px" }}
              >
                
                {/* Connector Node Circle */}
                <div 
                  className="absolute left-[42px] md:left-1/2 md:-translate-x-1/2 z-20"
                  style={{ top: "45%" }}
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
                    className={`w-4 h-4 rounded-full bg-cyber-bg border-2 flex items-center justify-center ${
                      event.color === "cyan" 
                        ? "border-cyber-cyan shadow-[0_0_8px_#00F5FF]" 
                        : event.color === "purple" 
                          ? "border-cyber-purple shadow-[0_0_8px_#7B2FF7]" 
                          : "border-cyber-green shadow-[0_0_8px_#00FF9C]"
                    }`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.35, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-1.5 h-1.5 rounded-full ${
                        event.color === "cyan" ? "bg-cyber-cyan" : event.color === "purple" ? "bg-cyber-purple" : "bg-cyber-green"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Left side empty space / Year marker (Desktop) */}
                <div className={`hidden md:block w-1/2 ${isLeft ? "pr-16 text-right" : "pl-16 order-2 text-left"}`}>
                  {isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className={`font-heading text-5xl font-black ${accentColor} text-glow opacity-30 select-none`}>
                        {event.year}
                      </span>
                    </motion.div>
                  ) : null}
                </div>

                {/* Right side card (Desktop) / Full width card (Mobile) */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? "md:pl-16" : "md:pr-16 md:order-1"}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`glass-panel p-5 md:p-6 rounded border ${borderGlow} relative hover:border-white/20 transition-all duration-300 text-left`}
                  >
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyber-cyan/30"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyber-cyan/30"></div>

                    {/* Mobile Year Tag */}
                    <div className="md:hidden flex items-center gap-2 mb-2">
                      <span className={`font-heading text-xl font-black ${accentColor} text-glow`}>
                        {event.year}
                      </span>
                      <span className="w-1.5 h-[1px] bg-white/20"></span>
                    </div>

                    <div className="hidden md:block mb-0.5">
                      <span className={`font-heading text-[10px] font-bold tracking-widest ${accentColor}`}>
                        PHASE_0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="font-body text-gray-400 text-xs leading-relaxed">
                      {event.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Left side year placeholder (Desktop only, if isRight) */}
                <div className={`hidden md:block w-1/2 ${!isLeft ? "pl-16 text-left" : ""}`}>
                  {!isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
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
