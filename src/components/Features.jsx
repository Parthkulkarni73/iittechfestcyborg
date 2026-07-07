import React from "react";
import { motion } from "framer-motion";
import { Eye, Layers, Zap, Fingerprint, Sliders, Activity } from "lucide-react";

const features = [
  {
    title: "Vision AI",
    icon: Eye,
    desc: "Real-time spatial mapping, object localization, and targeting telemetry with instant HUD overlays at ultra-low latency.",
    color: "cyan",
    glowColor: "rgba(0, 245, 255, 0.4)",
    borderColor: "border-cyber-cyan/20 hover:border-cyber-cyan/50"
  },
  {
    title: "Machine Learning",
    icon: Layers,
    desc: "Self-training models that optimize operational procedures dynamically, adapting system parameters in response to network fluctuations.",
    color: "purple",
    glowColor: "rgba(123, 47, 247, 0.4)",
    borderColor: "border-cyber-purple/20 hover:border-cyber-purple/50"
  },
  {
    title: "Quantum Computing",
    icon: Activity,
    desc: "Harnessing multi-state qubits to compute cryptographic equations and massive simulations that would paralyze standard silicon cores.",
    color: "green",
    glowColor: "rgba(0, 255, 156, 0.4)",
    borderColor: "border-cyber-green/20 hover:border-cyber-green/50"
  },
  {
    title: "Neural Interface",
    icon: Zap,
    desc: "Seamless, bio-integrated brain-to-machine linking protocols enabling direct, thought-speed telemetry synchronization.",
    color: "purple",
    glowColor: "rgba(123, 47, 247, 0.4)",
    borderColor: "border-cyber-purple/20 hover:border-cyber-purple/50"
  },
  {
    title: "Biometric Security",
    icon: Fingerprint,
    desc: "Next-gen authentication systems reading unique DNA frequencies and sub-dermal biometric markers for maximum vault security.",
    color: "green",
    glowColor: "rgba(0, 255, 156, 0.4)",
    borderColor: "border-cyber-green/20 hover:border-cyber-green/50"
  },
  {
    title: "Smart Automation",
    icon: Sliders,
    desc: "Deploying autonomous software agent swarms that maintain, repair, and deploy application modules without developer intervention.",
    color: "cyan",
    glowColor: "rgba(0, 245, 255, 0.4)",
    borderColor: "border-cyber-cyan/20 hover:border-cyber-cyan/50"
  }
];

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
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
          CORE UTILITIES
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-wider"
        >
          CYBERNETIC CAPABILITIES
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
          Engineered to push parameters. Harness the absolute edge of high-performance cybernetic automation.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: `0 0 30px ${feature.glowColor}`,
                transition: { duration: 0.3 }
              }}
              className={`p-6 rounded border ${feature.borderColor} bg-cyber-bg/40 backdrop-blur-md transition-all duration-300 relative overflow-hidden group flex flex-col`}
            >
              {/* Scanline overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hud-scanline"></div>

              {/* Glowing Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-cyber-cyan transition-colors"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-cyber-cyan transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-cyber-cyan transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-cyber-cyan transition-colors"></div>

              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded bg-white/5 border border-white/10 relative group-hover:border-white/20`}>
                  <Icon className={`w-6 h-6 ${
                    feature.color === "cyan" ? "text-cyber-cyan" : feature.color === "purple" ? "text-cyber-purple" : "text-cyber-green"
                  }`} />
                </div>
                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                  {feature.title}
                </h3>
              </div>

              <p className="font-body text-gray-400 text-sm leading-relaxed flex-grow">
                {feature.desc}
              </p>

              {/* Sub-system details */}
              <div className="flex items-center justify-between mt-6 font-mono text-[9px] text-gray-600">
                <span>SYSTEM_TYPE::AUTO</span>
                <span>VAULT_ID::#{1000 + index}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
