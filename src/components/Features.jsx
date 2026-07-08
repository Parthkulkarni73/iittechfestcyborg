import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Layers, Zap, Fingerprint, Sliders, Activity, ChevronDown, Terminal, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Vision AI",
    icon: Eye,
    desc: "Real-time spatial mapping, object localization, and targeting telemetry with instant HUD overlays at ultra-low latency.",
    color: "cyan",
    glowColor: "rgba(0, 245, 255, 0.4)",
    borderColor: "border-cyber-cyan/20 hover:border-cyber-cyan/50",
    subsystems: "Optical_HUD_Mapping [v3.0.1]",
    latency: "0.12ms",
    status: "100% Calibrated",
    techLog: "Spatial data tracking locks are fully integrated. Neural overlays are streaming without interruption."
  },
  {
    title: "Machine Learning",
    icon: Layers,
    desc: "Self-training models that optimize operational procedures dynamically, adapting system parameters in response to network fluctuations.",
    color: "purple",
    glowColor: "rgba(123, 47, 247, 0.4)",
    borderColor: "border-cyber-purple/20 hover:border-cyber-purple/50",
    subsystems: "Self_Optimizer_Node [v4.1.8]",
    latency: "0.45ms",
    status: "Self-Training Active",
    techLog: "Real-time procedural parameter adjustments compiled successfully. Adaptive matrices are synched."
  },
  {
    title: "Quantum Computing",
    icon: Activity,
    desc: "Harnessing multi-state qubits to compute cryptographic equations and massive simulations that would paralyze standard silicon cores.",
    color: "green",
    glowColor: "rgba(0, 255, 156, 0.4)",
    borderColor: "border-cyber-green/20 hover:border-cyber-green/50",
    subsystems: "Qubits_Engine [v9.0.2]",
    latency: "0.01ms",
    status: "Entangled & Stable",
    techLog: "Simulated cryptographic grids completed without error. Multi-state superposition paths calibrated."
  },
  {
    title: "Neural Interface",
    icon: Zap,
    desc: "Seamless, bio-integrated brain-to-machine linking protocols enabling direct, thought-speed telemetry synchronization.",
    color: "purple",
    glowColor: "rgba(123, 47, 247, 0.4)",
    borderColor: "border-cyber-purple/20 hover:border-cyber-purple/50",
    subsystems: "Bio_Connector_Sync [v1.0.4]",
    latency: "0.08ms",
    status: "Secure Connection established",
    techLog: "Sensory pathways are fully bidirectional. Sub-dermal sync holds at optimal rates."
  },
  {
    title: "Biometric Security",
    icon: Fingerprint,
    desc: "Next-gen authentication systems reading unique DNA frequencies and sub-dermal biometric markers for maximum vault security.",
    color: "green",
    glowColor: "rgba(0, 255, 156, 0.4)",
    borderColor: "border-cyber-green/20 hover:border-cyber-green/50",
    subsystems: "DNA_Frequency_Scanner [v2.2.0]",
    latency: "1.15ms",
    status: "Locked & Verified",
    techLog: "Sub-dermal scanning mapped credentials successfully. Operator clearance matched to core index."
  },
  {
    title: "Smart Automation",
    icon: Sliders,
    desc: "Deploying autonomous software agent swarms that maintain, repair, and deploy application modules without developer intervention.",
    color: "cyan",
    glowColor: "rgba(0, 245, 255, 0.4)",
    borderColor: "border-cyber-cyan/20 hover:border-cyber-cyan/50",
    subsystems: "Autonomous_Swarm_Agent [v7.5.3]",
    latency: "0.88ms",
    status: "Patrolling Grid Nodes",
    techLog: "Self-maintenance routines completed across node arrays. Swarms executing node optimization checks."
  }
];

export default function Features() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="features" className="relative py-28 px-6 z-10 max-w-7xl mx-auto border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-cyber-purple/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-heading text-xs font-bold tracking-widest text-cyber-purple uppercase mb-3 text-glow-purple"
        >
          CORE MODULES
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-wider"
        >
          CORE TECHNOLOGY CAPABILITIES
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true, margin: "-100px" }}
          className="h-[2px] bg-gradient-to-r from-transparent via-cyber-purple to-transparent mx-auto mt-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="font-body text-gray-400 text-lg max-w-xl mx-auto mt-4"
        >
          Click on any holographic module to initiate deep diagnostics and explore system parameters.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isExpanded = expandedIndex === index;
          const itemColor = 
            feature.color === "cyan" 
              ? "text-cyber-cyan" 
              : feature.color === "purple" 
                ? "text-cyber-purple" 
                : "text-cyber-green";

          return (
            <motion.div
              key={feature.title}
              layout="position"
              whileHover={!isExpanded ? { 
                scale: 1.02,
                boxShadow: `0 0 25px ${feature.glowColor}`,
                transition: { duration: 0.3 }
              } : {}}
              onClick={() => toggleExpand(index)}
              className={`p-6 rounded border ${feature.borderColor} bg-cyber-bg/40 backdrop-blur-md transition-all duration-300 relative overflow-hidden group flex flex-col cursor-pointer ${
                isExpanded ? "border-cyber-cyan/50 shadow-[0_0_20px_rgba(0,245,255,0.15)] bg-cyber-bg/60" : ""
              }`}
            >
              {/* Scanline light overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none card-scan-line"></div>

              {/* Glowing Corner Accents */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-cyber-cyan/30 group-hover:border-cyber-cyan transition-colors"></div>
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-cyber-cyan/30 group-hover:border-cyber-cyan transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-cyber-cyan/30 group-hover:border-cyber-cyan transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-cyber-cyan/30 group-hover:border-cyber-cyan transition-colors"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded bg-white/5 border border-white/10 relative group-hover:border-white/20">
                    <Icon className={`w-6 h-6 ${itemColor}`} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                    {feature.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500 hover:text-white"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </div>

              <p className="font-body text-gray-400 text-sm leading-relaxed mb-4">
                {feature.desc}
              </p>

              {/* Accordion Expanded Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-white/5 pt-4 mt-2 space-y-4 text-left"
                    onClick={(e) => e.stopPropagation()} // Stop click bubbling to avoid auto-close
                  >
                    <div className="grid grid-cols-2 gap-3 font-mono text-[10px] text-gray-500">
                      <div>
                        <span className="block opacity-60">SUBSYSTEM</span>
                        <span className="text-white font-semibold">{feature.subsystems}</span>
                      </div>
                      <div>
                        <span className="block opacity-60">LATENCY_CORE</span>
                        <span className={`${itemColor} font-semibold`}>{feature.latency}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="block opacity-60">NODE_STATUS</span>
                        <span className="text-cyber-green font-bold flex items-center gap-1.5 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {feature.status}
                        </span>
                      </div>
                    </div>

                    <div className="bg-black/40 border border-white/5 rounded p-3 font-mono text-[10px] space-y-1.5">
                      <div className="flex items-center gap-1.5 text-cyber-cyan border-b border-white/5 pb-1">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>DIAGNOSTIC_TRANSMISSION</span>
                      </div>
                      <p className="text-gray-400 leading-normal">
                        {feature.techLog}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Sub-system details */}
              <div className="flex items-center justify-between mt-4 font-mono text-[9px] text-gray-600">
                <span>SYSTEM_TYPE::AUTO</span>
                <span>MODULE_ID::#{1000 + index}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
