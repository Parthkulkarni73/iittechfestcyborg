import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import avatar1 from "../assets/avatar_1.png";
import avatar2 from "../assets/avatar_2.png";
import avatar3 from "../assets/avatar_3.png";

const testimonials = [
  {
    name: "Dr. Evelyn Vance",
    role: "Director of Cognitive Systems",
    company: "Aether AI Labs",
    quote: "Integrating CYBORG X's neural core architecture transformed our AI modeling capabilities. We witnessed an immediate 64% reduction in training latency and a dramatic increase in pathway adaptability.",
    img: avatar1,
    color: "cyan",
    rating: "9.8/10",
    glowClass: "glass-card hover:shadow-cyber-cyan/10"
  },
  {
    name: "Jax Thorne",
    role: "Lead Cybersecurity Architect",
    company: "OmniShield Security",
    quote: "The autonomous quantum threat prevention engine stopped multiple zero-day breach attempts in our sandbox trials. An absolute must-have security layer for modern cyber operations.",
    img: avatar2,
    color: "green",
    rating: "SECURE",
    glowClass: "glass-card-green hover:shadow-cyber-green/10"
  },
  {
    name: "Kiara Liang",
    role: "Head of Quantum Operations",
    company: "Singularity Core Group",
    quote: "CYBORG X's multi-state neural link protocols made brain-computer interfaces feel organic and reliable. The computational speed is nothing short of science fiction made reality.",
    img: avatar3,
    color: "purple",
    rating: "1024 QUBITS",
    glowClass: "glass-card-purple hover:shadow-cyber-purple/10"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-28 px-6 z-10 max-w-7xl mx-auto border-t border-white/5">
      {/* Background element */}
      <div className="absolute top-[10%] left-[5%] w-[250px] h-[250px] bg-cyber-purple/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-heading text-xs font-bold tracking-widest text-cyber-purple uppercase mb-3 text-glow-purple"
        >
          USER LOG FILES
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-wider"
        >
          NEURAL LINK VERIFICATIONS
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true, margin: "-100px" }}
          className="h-[2px] bg-gradient-to-r from-transparent via-cyber-purple to-transparent mx-auto mt-4"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test, index) => {
          const accentText = 
            test.color === "cyan" 
              ? "text-cyber-cyan" 
              : test.color === "purple" 
                ? "text-cyber-purple" 
                : "text-cyber-green";

          const accentBorder = 
            test.color === "cyan" 
              ? "border-cyber-cyan/30" 
              : test.color === "purple" 
                ? "border-cyber-purple/30" 
                : "border-cyber-green/30";

          return (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`${test.glowClass} p-8 rounded-lg relative overflow-hidden flex flex-col group`}
            >
              {/* Corner tech indicators */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-white/20 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-white/20 transition-colors"></div>

              {/* Quote icon */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none" />

              {/* Quote Text */}
              <p className="font-body text-gray-300 text-base leading-relaxed italic mb-8 relative z-10">
                "{test.quote}"
              </p>

              {/* Client Info Row */}
              <div className="flex items-center gap-4 mt-auto relative z-10">
                {/* Avatar */}
                <div className={`w-12 h-12 rounded border p-0.5 ${accentBorder} overflow-hidden bg-cyber-bg`}>
                  <img
                    src={test.img}
                    alt={test.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                
                {/* Info details */}
                <div className="flex-grow">
                  <h4 className="font-heading text-sm font-bold text-white tracking-wide uppercase">
                    {test.name}
                  </h4>
                  <p className="font-body text-[11px] text-gray-500 font-semibold tracking-wider uppercase">
                    {test.role}
                  </p>
                  <p className={`font-body text-[11px] ${accentText} font-bold tracking-wider uppercase`}>
                    {test.company}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-white/5 my-4" />

              {/* Metric verify rating */}
              <div className="flex justify-between items-center font-mono text-[9px] text-gray-600">
                <span>METRIC_RATING</span>
                <span className={`${accentText} font-bold`}>{test.rating}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
