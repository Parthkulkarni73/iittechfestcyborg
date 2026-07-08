import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

const steps = [
  { text: "Initializing Neural Core...", completeText: "✔ Complete" },
  { text: "Loading Quantum Modules...", completeText: "✔ Complete" },
  { text: "Connecting Satellite Network...", completeText: "✔ Complete" },
  { text: "Verifying Operator...", completeText: "✔ Complete" },
  { text: "Access Granted.", completeText: "" }
];

export default function BootSequence({ onComplete }) {
  const [activeStep, setActiveStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [completedSteps, setCompletedSteps] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Sound Synth Generator
  const playSound = (freq = 800, type = "sine", duration = 0.08, volume = 0.03) => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Browser audio policy blocks play until user interaction
    }
  };

  useEffect(() => {
    // Progress bar counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 6) + 2;
      });
    }, 80);

    return () => clearInterval(progressInterval);
  }, []);

  // Sequencer loop
  useEffect(() => {
    if (activeStep >= steps.length) {
      // Sequence completed. Wait 800ms then unmount
      const fadeTimeout = setTimeout(() => {
        setIsFading(true);
        setTimeout(onComplete, 550);
      }, 800);
      return () => clearTimeout(fadeTimeout);
    }

    const currentStep = steps[activeStep];
    let currentCharIndex = 0;
    setTypedText("");

    // Type out the active line characters
    const typingInterval = setInterval(() => {
      if (currentCharIndex < currentStep.text.length) {
        setTypedText(currentStep.text.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        
        // Subtle terminal keystroke typing click sound
        if (currentCharIndex % 3 === 0) {
          playSound(150 + Math.random() * 50, "triangle", 0.015, 0.01);
        }
      } else {
        clearInterval(typingInterval);
        
        // Typing done. Wait 250ms, play complete chirp, show status, move to next step
        setTimeout(() => {
          if (activeStep === steps.length - 1) {
            // Final Step: "Access Granted." - play dual chime
            playSound(783.99, "sine", 0.12, 0.04); // G5 note
            setTimeout(() => playSound(1046.50, "sine", 0.2, 0.04), 90); // C6 note
          } else {
            // Step complete - play short success blip
            playSound(880, "sine", 0.06, 0.035); // A5 note
          }
          
          setCompletedSteps((prev) => [...prev, activeStep]);
          
          setTimeout(() => {
            setActiveStep((prev) => prev + 1);
          }, 200);
        }, 250);
      }
    }, 18);

    return () => clearInterval(typingInterval);
  }, [activeStep, onComplete]);

  return (
    <AnimatePresence>
      {!isFading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#050816] z-[99999] flex flex-col justify-between p-6 md:p-8 font-mono text-cyber-cyan select-none"
        >
          {/* Scanline, Flicker, Noise effects */}
          <div className="crt-scanlines"></div>
          <div className="crt-flicker-overlay"></div>
          <div className="noise-overlay"></div>
          <div className="absolute inset-0 cyber-grid-bg opacity-10 pointer-events-none"></div>

          {/* Top Panel Specs */}
          <div className="flex justify-between items-center text-[9px] opacity-50 border-b border-cyber-cyan/15 pb-4">
            <div>CYBORG_X_SYS::CORE_BOOT</div>
            <div>UPLINK_STABILITY: 100% SECURE</div>
          </div>

          {/* Classified OS Terminal Console */}
          <div className="max-w-md mx-auto w-full flex-grow flex flex-col justify-center text-left">
            
            {/* Terminal Window Double Border */}
            <div className="text-[11px] leading-tight text-cyber-cyan/70 mb-4 whitespace-pre font-bold select-none text-glow-cyan">
              {`╔══════════════════════════════╗\n` +
               `  CYBORG X OPERATING SYSTEM   \n` +
               `  Neural Core Boot Sequence   \n` +
               `╚══════════════════════════════╝`}
            </div>

            {/* Logs Window */}
            <div className="space-y-3.5 h-[230px] overflow-hidden bg-black/50 border border-cyber-cyan/15 p-6 rounded shadow-[0_0_20px_rgba(0,245,255,0.05),inset_0_0_15px_rgba(0,245,255,0.03)] relative">
              <div className="absolute top-2 right-3 text-[9px] text-cyber-cyan/40">CONSOLE_OS</div>
              
              {steps.map((step, idx) => {
                const isStepActive = activeStep === idx;
                const isStepCompleted = completedSteps.includes(idx);
                const isLast = idx === steps.length - 1;

                if (idx > activeStep) return null;

                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="opacity-60">&gt;</span>
                      <span className={`${isLast && isStepCompleted ? "text-cyber-green font-bold text-glow-green" : "text-white"}`}>
                        {isStepActive ? typedText : step.text}
                      </span>
                      {isStepActive && (
                        <span className="w-1.5 h-3.5 bg-cyber-cyan animate-terminal-blink" />
                      )}
                    </div>
                    {isStepCompleted && step.completeText && (
                      <motion.div
                        initial={{ opacity: 0, x: 5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-cyber-green text-[10px] font-bold pl-5 flex items-center gap-1.5"
                      >
                        <span>{step.completeText}</span>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Loader bar and percentage footer */}
          <div className="max-w-md mx-auto w-full space-y-4">
            <div className="flex justify-between text-xs font-semibold tracking-wider">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 animate-pulse" />
                LOADING_SYNAPTIC_MATRICES
              </span>
              <span>{Math.min(progress, 100)}%</span>
            </div>

            <div className="h-2 w-full bg-white/5 border border-cyber-cyan/20 rounded p-0.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-cyan bg-[size:200%] animate-[grid-scroll_2s_linear_infinite] shadow-[0_0_8px_#00F5FF]"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>

            <div className="text-[9px] opacity-40 text-center">
              SECURE_HANDSHAKE_NODE::CALIBRATED // ACCESS CLEARANCE VERIFIED
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
