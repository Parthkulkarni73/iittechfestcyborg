import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Terminal, Shield, ArrowUpRight } from "lucide-react";
import cyborgHero from "../assets/cyborg_hero.png";

const typingPhrases = [
  "Initializing Neural Core...",
  "Establishing Secure Cybernetic Uplink...",
  "Syncing Synaptic Pathways...",
  "Calibrating Quantum Core...",
  "Interface Status: ONLINE"
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Mouse Parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / (innerWidth / 2); // -1 to 1
      const y = (clientY - innerHeight / 2) / (innerHeight / 2); // -1 to 1
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax transform offsets
  const robotX = useTransform(mouseX, [-1, 1], [-25, 25]);
  const robotY = useTransform(mouseY, [-1, 1], [-25, 25]);
  const bgGlowX = useTransform(mouseX, [-1, 1], [-50, 50]);
  const bgGlowY = useTransform(mouseY, [-1, 1], [-50, 50]);
  const HUDX = useTransform(mouseX, [-1, 1], [-15, 15]);
  const HUDY = useTransform(mouseY, [-1, 1], [-15, 15]);

  // Typing effect logic
  useEffect(() => {
    let timer;
    const currentPhrase = typingPhrases[phraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 30);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 70);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden z-10 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col text-left z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-heading text-xs font-semibold tracking-widest uppercase mb-6 self-start shadow-[0_0_15px_rgba(0,245,255,0.1)] animate-pulse"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>WELCOME TO THE FUTURE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-4"
          >
            CYBORG <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-cyan bg-[size:200%] animate-[grid-scroll_5s_linear_infinite] text-glow-cyan">X</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl font-body font-semibold tracking-wide text-gray-300 max-w-xl mb-4"
          >
            Where Human Intelligence Meets Artificial Intelligence. Unlock the ultimate neural enhancement architecture built for next-generation cybernetic development.
          </motion.p>

          {/* Typing log screen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="bg-cyber-bg/90 border border-cyber-cyan/20 p-3 rounded mb-8 font-mono text-xs text-cyber-cyan/90 flex items-center gap-3 shadow-[inset_0_0_10px_rgba(0,245,255,0.05)] w-full max-w-md"
          >
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
            </div>
            <span className="text-gray-500 border-r border-gray-800 pr-2">SYS_LOG</span>
            <div className="flex items-center gap-1">
              <span>{typedText}</span>
              <span className="w-1.5 h-3.5 bg-cyber-cyan animate-pulse"></span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => handleScrollToSection("about")}
              className="relative group overflow-hidden px-8 py-3 rounded font-heading font-extrabold tracking-widest text-sm text-cyber-bg bg-cyber-cyan shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.7)] transition-all duration-300 uppercase cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="flex items-center justify-center gap-2">
                Explore Now <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>

            <button
              onClick={() => handleScrollToSection("contact")}
              className="relative px-8 py-3 rounded font-heading font-extrabold tracking-widest text-sm text-white border border-cyber-purple/50 bg-cyber-purple/10 hover:bg-cyber-purple/35 transition-all duration-300 uppercase cursor-pointer flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(123,47,247,0.4)]"
            >
              <Shield className="w-4 h-4 text-cyber-purple" />
              Join Mission
            </button>
          </motion.div>
        </div>

        {/* Right Cyborg/Illustration Area */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[400px] lg:h-[600px] z-15">
          {/* Neon Ring Backgrounds */}
          <motion.div
            style={{ x: bgGlowX, y: bgGlowY }}
            className="absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full border border-cyber-cyan/15 shadow-[inset_0_0_30px_rgba(0,245,255,0.05)] flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-cyber-purple/20 flex items-center justify-center"
            >
              {/* Pulsing glow point */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyber-cyan shadow-[0_0_10px_#00F5FF]"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyber-purple shadow-[0_0_8px_#7B2FF7]"></div>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[70%] h-[70%] rounded-full border border-double border-cyber-green/10"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyber-green shadow-[0_0_6px_#00FF9C]"></div>
            </motion.div>
          </motion.div>

          {/* Glowing Radial Orb */}
          <motion.div
            style={{ x: bgGlowX, y: bgGlowY }}
            className="absolute w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full bg-gradient-to-tr from-cyber-cyan/10 to-cyber-purple/15 blur-[50px] animate-pulse-slow"
          />

          {/* Interactive Floating Cyborg Image */}
          <motion.div
            style={{ x: robotX, y: robotY }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-[320px] lg:w-[480px] z-10 flex justify-center items-center drop-shadow-[0_15px_35px_rgba(0,245,255,0.15)] pointer-events-none"
          >
            {/* Main Image */}
            <img
              src={cyborgHero}
              alt="Cyborg X Core Intelligence"
              className="w-full h-auto object-contain select-none"
            />

            {/* Glowing HUD Bracket Overlay */}
            <motion.div
              style={{ x: HUDX, y: HUDY }}
              className="absolute inset-[-10px] lg:inset-[-20px] border border-cyber-cyan/10 pointer-events-none rounded-lg"
            >
              {/* Cyber Corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyber-cyan filter drop-shadow-[0_0_5px_#00F5FF]"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyber-cyan filter drop-shadow-[0_0_5px_#00F5FF]"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyber-cyan filter drop-shadow-[0_0_5px_#00F5FF]"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyber-cyan filter drop-shadow-[0_0_5px_#00F5FF]"></div>

              {/* Futuristic text indicator */}
              <div className="absolute -top-6 left-4 font-mono text-[9px] text-cyber-cyan/60 tracking-widest uppercase">
                TARGET_LOCK::SYSTEM_ACTIVE
              </div>
              <div className="absolute -bottom-6 right-4 font-mono text-[9px] text-cyber-purple/60 tracking-widest uppercase">
                NEURAL_LINK::98.76%
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
