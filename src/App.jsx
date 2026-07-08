import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp, ShieldAlert } from "lucide-react";
import BootSequence from "./components/BootSequence";
import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [booting, setBooting] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorTrail, setCursorTrail] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [clickPulse, setClickPulse] = useState(false);
  
  // Easter Egg states & keystroke ref
  const [showDevToast, setShowDevToast] = useState(false);
  const keysRef = useRef("");

  // Back-to-Top states
  const [showRocket, setShowRocket] = useState(false);
  const [isRocketLaunching, setIsRocketLaunching] = useState(false);

  // Scroll Progress logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Track mouse cursor
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Update trail points
      setCursorTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        if (newTrail.length > 8) newTrail.shift();
        return newTrail;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Track clicks for pulse animation
    const handleMouseDown = () => {
      setClickPulse(true);
      setTimeout(() => setClickPulse(false), 300);
    };
    window.addEventListener("mousedown", handleMouseDown);

    // Add cursor class to body if not mobile
    if (window.innerWidth >= 1024) {
      document.body.classList.add("custom-cursor-active");
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  // Hover detection for cursor scaling
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.classList.contains("clickable");

      setIsHovered(!!isClickable);
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  // Keyboard Easter Egg listener: "override"
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (booting) return;
      
      const key = e.key.toLowerCase();
      if (key.length === 1) {
        keysRef.current = (keysRef.current + key).slice(-8); // Keep last 8 chars
        if (keysRef.current === "override") {
          toggleDevMode();
          keysRef.current = "";
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [booting]);

  const toggleDevMode = () => {
    const isActive = document.body.classList.contains("dev-mode-active");
    if (!isActive) {
      document.body.classList.add("dev-mode-active");
      setShowDevToast(true);
      setTimeout(() => setShowDevToast(false), 5000);
    } else {
      document.body.classList.remove("dev-mode-active");
    }
  };

  // Scroll visibility for back-to-top rocket
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 400) {
        setShowRocket(true);
      } else {
        setShowRocket(false);
      }
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const handleRocketLaunch = () => {
    setIsRocketLaunching(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Reset rocket visual position after scroll completes
    setTimeout(() => {
      setIsRocketLaunching(false);
    }, 1000);
  };

  const handleBootComplete = () => {
    setBooting(false);
  };

  return (
    <div className="relative min-h-screen bg-cyber-bg text-white selection:bg-cyber-cyan/30 selection:text-white">
      {/* Cinematic Startup Loader */}
      {booting && <BootSequence onComplete={handleBootComplete} />}

      {/* Retro overlays (CRT Scanlines and Noise) */}
      <div className="crt-scanlines"></div>
      <div className="crt-flicker-overlay"></div>
      <div className="noise-overlay"></div>

      {/* Top Scroll Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-green z-50 origin-left shadow-[0_0_8px_#00F5FF]"
        style={{ scaleX }}
      />

      {/* Dynamic Cursor Trail & Target Reticle (Desktop Only) */}
      {!isMobile && !booting && (
        <>
          {/* Trail Particles */}
          {cursorTrail.map((dot, index) => (
            <div
              key={dot.id}
              className="fixed w-1 h-1 rounded-full bg-cyber-cyan pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 opacity-30"
              style={{
                left: dot.x,
                top: dot.y,
                transform: `translate(-50%, -50%) scale(${1 - (cursorTrail.length - index) * 0.1})`,
                opacity: index / cursorTrail.length * 0.4
              }}
            />
          ))}

          {/* Core Pointer Dot */}
          <div
            className={`fixed w-1.5 h-1.5 rounded-full bg-cyber-cyan pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ${
              isHovered ? "scale-[2.5] bg-cyber-green shadow-[0_0_8px_#00FF9C]" : "shadow-[0_0_6px_#00F5FF]"
            }`}
            style={{ left: cursorPos.x, top: cursorPos.y }}
          />

          {/* Outer Rotating Reticle */}
          <motion.div
            className="fixed w-7 h-7 rounded-full border border-cyber-cyan/50 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            animate={{
              x: cursorPos.x,
              y: cursorPos.y,
              scale: clickPulse ? 0.75 : isHovered ? 1.4 : 1,
              borderColor: isHovered ? "#00FF9C" : "#00F5FF",
              rotate: isHovered ? 90 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 18,
              mass: 0.15
            }}
          >
            {/* Ticks */}
            <div className="absolute top-0 w-[1px] h-[3.5px] bg-current"></div>
            <div className="absolute bottom-0 w-[1px] h-[3.5px] bg-current"></div>
            <div className="absolute left-0 h-[1px] w-[3.5px] bg-current"></div>
            <div className="absolute right-0 h-[1px] w-[3.5px] bg-current"></div>
          </motion.div>
        </>
      )}

      {/* Global Background Grid & Blobs */}
      <BackgroundEffects />

      {/* Navigation Menu */}
      <Navbar />

      {/* Core Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Features />
        <Stats />
        <Timeline />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Easter Egg Dev Mode Toast */}
      <AnimatePresence>
        {showDevToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-[9999] bg-[#050816]/95 border-2 border-cyber-green p-4 rounded shadow-[0_0_25px_rgba(0,255,156,0.35)] flex items-center gap-4 text-cyber-green max-w-sm w-full font-mono text-xs crt-flicker"
          >
            <div className="p-2 rounded bg-cyber-green/10 border border-cyber-green/45">
              <ShieldAlert className="w-5 h-5 animate-pulse text-glow-green" />
            </div>
            <div>
              <div className="font-heading font-black tracking-widest uppercase">ACCESS GRANTED</div>
              <div className="text-[10px] text-gray-400 mt-1 uppercase">Developer Mode Activated successfully.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back-To-Top Rocket Scroller */}
      <AnimatePresence>
        {showRocket && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: isRocketLaunching ? -100 : 0,
              scale: isRocketLaunching ? 1.4 : 1
            }}
            exit={{ opacity: 0, y: 20 }}
            onClick={handleRocketLaunch}
            className="fixed bottom-6 right-6 z-40 p-3 rounded bg-cyber-bg/95 border border-cyber-cyan hover:border-cyber-green hover:shadow-[0_0_15px_#00FF9C] transition-all text-cyber-cyan hover:text-cyber-green shadow-[0_0_10px_rgba(0,245,255,0.15)] flex items-center justify-center cursor-pointer"
            aria-label="Launch to top"
          >
            <ArrowUp className={`w-5 h-5 ${isRocketLaunching ? "animate-bounce" : ""}`} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
