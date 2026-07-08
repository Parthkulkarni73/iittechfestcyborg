import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Activity, CpuIcon } from "lucide-react";

function Counter({ end, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const steps = duration / 16; // ~60fps
    const increment = end / steps;
    
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(handle);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

export default function Stats() {
  const [barVisible, setBarVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 px-6 z-10 max-w-7xl mx-auto border-t border-white/5">
      <div className="glass-panel p-10 md:p-12 rounded-lg relative overflow-hidden bg-black/30">
        
        {/* Tech Corner brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Block: Interactive Mission Progress Bar (94%) */}
          <div ref={barRef} className="lg:col-span-6 text-left space-y-6">
            <div>
              <div className="flex items-center gap-2 text-cyber-cyan font-heading text-xs font-bold uppercase tracking-wider mb-2">
                <Shield className="w-4 h-4" />
                <span>MISSIONS COMPLETED</span>
              </div>
              <h3 className="font-heading text-3xl font-black text-white uppercase tracking-wider">
                AEGIS DEFENSE INTEGRITY
              </h3>
            </div>

            {/* Custom Unicode Block loading indicator */}
            <div className="font-mono text-base space-y-2">
              <div className="flex justify-between text-xs opacity-75">
                <span>SECTOR_CALIBRATION_PROGRESS</span>
                <span className="text-cyber-cyan font-bold text-glow-cyan">
                  {barVisible ? <Counter end={94} duration={1200} /> : "0"}%
                </span>
              </div>

              {/* Segmented block bars using CSS grid cells */}
              <div className="flex gap-1.5 h-6 bg-black/40 border border-cyber-cyan/20 p-1 rounded overflow-hidden">
                {Array.from({ length: 15 }).map((_, index) => {
                  const fillThreshold = 0.94; // 94%
                  const isFilled = (index / 15) < fillThreshold;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scaleY: 0.2 }}
                      animate={barVisible ? { opacity: isFilled ? 1 : 0.05, scaleY: 1 } : {}}
                      transition={{ delay: index * 0.05, type: "spring" }}
                      className={`flex-grow h-full rounded-sm ${
                        isFilled 
                          ? "bg-gradient-to-t from-cyber-cyan to-cyber-purple shadow-[0_0_8px_#00F5FF]" 
                          : "bg-white/10"
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            <p className="font-body text-gray-500 text-xs leading-relaxed max-w-md">
              Tactical operations are actively logged to secure the human defense framework. Cybernetic units are deployed autonomously across deep network grids.
            </p>
          </div>

          {/* Right Block: Telemetry Matrix HUD Indicators */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            
            {/* Cyber Units */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-5 rounded border border-white/5 relative flex flex-col justify-center h-[140px]"
            >
              <Cpu className="w-5 h-5 text-cyber-purple mx-auto mb-2 opacity-65" />
              <div className="font-heading text-3xl font-black text-cyber-purple text-glow-purple mb-1">
                <Counter end={1456} />
              </div>
              <div className="font-heading text-[10px] font-bold text-white tracking-widest uppercase">
                Cyber Units
              </div>
            </motion.div>

            {/* Neural Nodes */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-5 rounded border border-white/5 relative flex flex-col justify-center h-[140px]"
            >
              <CpuIcon className="w-5 h-5 text-cyber-cyan mx-auto mb-2 opacity-65" />
              <div className="font-heading text-2xl font-black text-cyber-cyan text-glow-cyan mb-1">
                <Counter end={98431} />
              </div>
              <div className="font-heading text-[10px] font-bold text-white tracking-widest uppercase">
                Neural Nodes
              </div>
            </motion.div>

            {/* System Stability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-5 rounded border border-white/5 relative flex flex-col justify-center h-[140px]"
            >
              <Activity className="w-5 h-5 text-cyber-green mx-auto mb-2 opacity-65" />
              <div className="font-heading text-2xl font-black text-cyber-green text-glow-green mb-1">
                99.98%
              </div>
              <div className="font-heading text-[10px] font-bold text-white tracking-widest uppercase">
                System Stability
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
