import React from "react";
import { motion } from "framer-motion";
import { Cpu, Share2, ShieldAlert, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Artificial Intelligence",
    icon: Cpu,
    color: "cyan",
    desc: "Deploying self-learning deep cognitive matrices designed to replicate, adapt, and advance beyond standard analytical constraints. Experience intelligence at speed.",
    metric: "0.15ms Latency",
    glowClass: "glass-card hover:shadow-cyber-cyan/15",
    textClass: "text-cyber-cyan text-glow-cyan",
    borderClass: "border-cyber-cyan/30"
  },
  {
    title: "Neural Networks",
    icon: Share2,
    color: "purple",
    desc: "Synchronizing human brainwave patterns with quantum silicon synapses to establish high-fidelity biological links, transforming communication and interaction.",
    metric: "1024TB/s Bandwidth",
    glowClass: "glass-card-purple hover:shadow-cyber-purple/15",
    textClass: "text-cyber-purple text-glow-purple",
    borderClass: "border-cyber-purple/30"
  },
  {
    title: "Cyber Security",
    icon: ShieldAlert,
    color: "green",
    desc: "Forging impenetrable cryptographic shields powered by autonomous cyber threat response systems, halting breach attempts before they can even materialize.",
    metric: "Zero-Day Immunity",
    glowClass: "glass-card-green hover:shadow-cyber-green/15",
    textClass: "text-cyber-green text-glow-green",
    borderClass: "border-cyber-green/30"
  }
];

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="about" className="relative py-28 px-6 z-10 max-w-7xl mx-auto border-t border-white/5">
      {/* Grid background segment */}
      <div className="absolute inset-0 cyber-grid-bg opacity-10 pointer-events-none"></div>

      <div className="text-center mb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-heading text-xs font-bold tracking-widest text-cyber-cyan uppercase mb-3 text-glow-cyan"
        >
          COGNITIVE MATRIX
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-wider"
        >
          COGNITIVE CORE SERVICES
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true, margin: "-100px" }}
          className="h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto mt-4"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="font-body text-gray-400 text-lg max-w-xl mx-auto mt-4"
        >
          Pioneering the boundary where cybernetics and neuro-computational power unite. Our core operations power tomorrow's cybernetic infrastructure.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20"
      >
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`${card.glowClass} flex flex-col p-8 rounded-lg relative overflow-hidden group`}
            >
              {/* Corner accent lines */}
              <div className="absolute top-0 right-0 w-8 h-[1px] bg-white/10 group-hover:bg-cyber-cyan/50 transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-[1px] h-8 bg-white/10 group-hover:bg-cyber-cyan/50 transition-colors duration-300"></div>

              {/* Glowing Icon Container */}
              <div className="mb-6 self-start p-3 rounded bg-white/5 border border-white/10 relative group-hover:border-white/20 transition-all duration-300">
                <Icon className={`w-8 h-8 ${card.textClass}`} />
                {/* Glow ring */}
                <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 blur-md rounded transition-opacity duration-300" style={{ color: card.color === "cyan" ? "#00F5FF" : card.color === "purple" ? "#7B2FF7" : "#00FF9C" }} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-white mb-4 tracking-wider uppercase group-hover:text-glow-cyan transition-all">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-body text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {card.desc}
              </p>

              {/* Divider */}
              <div className="h-[1px] bg-white/5 my-4" />

              {/* Footer details */}
              <div className="flex justify-between items-center mt-auto">
                <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                  {card.metric}
                </span>
                
                <span className="flex items-center gap-1 font-heading text-xs font-bold uppercase tracking-widest text-white group-hover:translate-x-1 transition-transform duration-300">
                  Access <ArrowRight className="w-3.5 h-3.5 text-cyber-cyan" />
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
