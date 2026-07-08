import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldCheck } from "lucide-react";

const bootLogs = [
  "Initializing CYBORG X Core...",
  "Connecting Quantum Network...",
  "Loading Neural Interface...",
  "Verifying Operator...",
  "Access Granted."
];

export default function BootSequence({ onComplete }) {
  const [activeLogs, setActiveLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1. Output logs sequentially
    bootLogs.forEach((log, index) => {
      setTimeout(() => {
        setActiveLogs((prev) => [...prev, log]);
      }, index * 500);
    });

    // 2. Count progress from 0 to 100
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 120);

    // 3. Initiate fade out and call onComplete
    const finishTimeout = setTimeout(() => {
      setIsFading(true);
      setTimeout(onComplete, 500); // Wait for transition fade to complete
    }, 3200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-[#050816] z-[99999] flex flex-col justify-between p-8 font-mono text-cyber-cyan select-none"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 cyber-grid-bg opacity-10 pointer-events-none"></div>
          <div className="crt-scanlines"></div>
          <div className="noise-overlay"></div>

          {/* Header Metadata */}
          <div className="flex justify-between items-center text-[10px] opacity-60 border-b border-cyber-cyan/15 pb-4">
            <div>CYBORG_X_OPERATING_SYSTEM [v4.2.98]</div>
            <div>STATUS: SECURE_BOOT_ACTIVE</div>
          </div>

          {/* Core Logs Display */}
          <div className="max-w-xl mx-auto w-full flex-grow flex flex-col justify-center text-left space-y-4">
            <div className="flex items-center gap-2 mb-2 text-white">
              <Terminal className="w-5 h-5 text-cyber-cyan animate-pulse" />
              <span className="font-heading tracking-widest text-sm font-bold">BOOT SYSTEM TERMINAL</span>
            </div>

            <div className="space-y-2 h-[220px] overflow-hidden bg-black/40 border border-cyber-cyan/10 p-5 rounded font-mono text-xs shadow-[inset_0_0_15px_rgba(0,245,255,0.05)]">
              {activeLogs.map((log, index) => {
                const isLast = index === bootLogs.length - 1;
                return (
                  <motion.div
                    key={log}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex items-center gap-2 ${
                      isLast ? "text-cyber-green font-bold text-glow-green" : ""
                    }`}
                  >
                    <span>&gt;</span>
                    <span>{log}</span>
                    {isLast && <ShieldCheck className="w-4 h-4 text-cyber-green animate-bounce" />}
                  </motion.div>
                );
              })}
              {activeLogs.length < bootLogs.length && (
                <div className="w-1.5 h-3.5 bg-cyber-cyan animate-pulse inline-block ml-1"></div>
              )}
            </div>
          </div>

          {/* Progress Bar & Footer */}
          <div className="max-w-xl mx-auto w-full space-y-4">
            <div className="flex justify-between text-xs opacity-85">
              <span>LOADING_COGNITIVE_ASSETS</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            
            <div className="h-2 w-full bg-white/5 border border-cyber-cyan/20 rounded overflow-hidden p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple shadow-[0_0_10px_#00F5FF]"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>

            <div className="text-[9px] opacity-40 text-center pt-2">
              WARNING: UNAUTHORIZED UPLINK DETECTION PROTOCOLS ACTIVE. LOGS ARE COMMITTED TO CLOUD.
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
