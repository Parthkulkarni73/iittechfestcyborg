import React from "react";
import { motion } from "framer-motion";
import imgCore from "../assets/gallery_core.png";
import imgHud from "../assets/gallery_hud.png";
import imgBio from "../assets/gallery_bio.png";
import imgCyberware from "../assets/gallery_cyberware.png";

const galleryItems = [
  {
    title: "Quantum Core Matrix",
    tag: "SYS_CORE",
    desc: "Active sub-zero calculation core driving multi-threaded deep neural learning algorithms.",
    img: imgCore,
    color: "cyan",
    borderClass: "hover:border-cyber-cyan/40 hover:shadow-cyber-cyan/15"
  },
  {
    title: "Holographic HUD Diagnostics",
    tag: "HUD_SYS",
    desc: "Real-time diagnostic floating dashboard display tracking synaptic synchronization rates.",
    img: imgHud,
    color: "purple",
    borderClass: "hover:border-cyber-purple/40 hover:shadow-cyber-purple/15"
  },
  {
    title: "Biometric Telemetry",
    tag: "SEC_VAULT",
    desc: "Multi-layered facial scanning and sub-dermal mesh node tracking mapping credentials.",
    img: imgBio,
    color: "green",
    borderClass: "hover:border-cyber-green/40 hover:shadow-cyber-green/15"
  },
  {
    title: "Cybernetic Integration",
    tag: "BIO_PHYS",
    desc: "Sleek carbon-fiber prosthetic integration featuring tactile micro-sensory transmitters.",
    img: imgCyberware,
    color: "cyan",
    borderClass: "hover:border-cyber-cyan/40 hover:shadow-cyber-cyan/15"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 px-6 z-10 max-w-7xl mx-auto border-t border-white/5">
      {/* Background element */}
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-cyber-cyan/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-heading text-xs font-bold tracking-widest text-cyber-cyan uppercase mb-3 text-glow-cyan"
        >
          SECURE ARCHIVES
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-wider"
        >
          COMMAND CENTER RECORDS
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true, margin: "-100px" }}
          className="h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto mt-4"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className={`glass-panel p-4 rounded-lg border border-white/5 ${item.borderClass} transition-all duration-500 overflow-hidden group flex flex-col`}
          >
            {/* Image Wrapper */}
            <div className="relative aspect-video rounded overflow-hidden mb-6 bg-cyber-bg">
              {/* Scanline HUD effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hud-scanline z-20"></div>

              {/* Tag marker overlay */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[9px] bg-cyber-bg/85 border border-cyber-cyan/30 text-cyber-cyan px-2 py-0.5 rounded tracking-widest uppercase shadow-[0_0_8px_rgba(0,245,255,0.1)]">
                {item.tag}
              </div>

              {/* Grid corners */}
              <div className="absolute inset-0 border border-white/5 group-hover:border-cyber-cyan/20 transition-all pointer-events-none z-10"></div>

              {/* Hover Zoom & Rotate */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1.5"
              />
            </div>

            {/* Content info */}
            <div className="px-2 flex-grow flex flex-col">
              <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wider mb-2 group-hover:text-cyber-cyan transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {item.desc}
              </p>
              
              <div className="h-[1px] bg-white/5 my-2" />
              
              <div className="flex justify-between items-center font-mono text-[9px] text-gray-500 mt-2">
                <span>SECTOR_INDEX::00{index + 1}</span>
                <span>SECURE::TRUE</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
