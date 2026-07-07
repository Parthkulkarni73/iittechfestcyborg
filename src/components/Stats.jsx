import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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

  return <span ref={elementRef}>{count}</span>;
}

const statsData = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    desc: "Autonomous and neural-assisted integrations worldwide",
    color: "cyan",
    shadow: "shadow-cyber-cyan/10"
  },
  {
    value: 120,
    suffix: "+",
    label: "AI Researchers",
    desc: "Elite neural scientists working on deep cybernetic evolution",
    color: "purple",
    shadow: "shadow-cyber-purple/10"
  },
  {
    value: 98,
    suffix: "%",
    label: "Cognitive Accuracy",
    desc: "Precision rating verified across heavy testing environments",
    color: "green",
    shadow: "shadow-cyber-green/10"
  },
  {
    value: 24,
    suffix: "/7",
    label: "Neural Operations",
    desc: "Non-stop computational matrix diagnostics and support",
    color: "cyan",
    shadow: "shadow-cyber-cyan/10"
  }
];

export default function Stats() {
  return (
    <section className="relative py-20 px-6 z-10 max-w-7xl mx-auto border-t border-white/5">
      <div className="glass-panel p-10 md:p-14 rounded-lg relative overflow-hidden">
        {/* Radial backing light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-cyber-purple/5 blur-[100px] pointer-events-none"></div>

        {/* Framing border indicators */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10 text-center">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div 
                className={`font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-3 select-none flex items-center justify-center ${
                  stat.color === "cyan" 
                    ? "text-cyber-cyan text-glow-cyan" 
                    : stat.color === "purple" 
                      ? "text-cyber-purple text-glow-purple" 
                      : "text-cyber-green text-glow-green"
                }`}
              >
                <Counter end={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              
              <h4 className="font-heading text-xs font-bold tracking-widest text-white uppercase mb-2">
                {stat.label}
              </h4>
              
              <p className="font-body text-gray-500 text-xs max-w-[200px] leading-relaxed">
                {stat.desc}
              </p>
              
              {index < statsData.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-white/5" style={{ left: `${(index + 1) * 25}%` }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
