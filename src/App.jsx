import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

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
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Add cursor class to body
    if (window.innerWidth >= 1024) {
      document.body.classList.add("custom-cursor-active");
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  useEffect(() => {
    // Setup cursor hover effects
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

      if (isClickable) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <div className="relative min-h-screen bg-cyber-bg text-white selection:bg-cyber-cyan/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-green z-50 origin-left shadow-[0_0_8px_#00F5FF]"
        style={{ scaleX }}
      />

      {/* Futuristic Target Reticle Cursor (Desktop Only) */}
      {!isMobile && (
        <>
          {/* Inner Dot */}
          <div
            className={`fixed w-1.5 h-1.5 rounded-full bg-cyber-cyan pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ${
              isHovered ? "scale-[2.5] bg-cyber-green shadow-[0_0_8px_#00FF9C]" : "shadow-[0_0_6px_#00F5FF]"
            }`}
            style={{ left: cursorPos.x, top: cursorPos.y }}
          />
          {/* Outer Ring */}
          <motion.div
            className="fixed w-7 h-7 rounded-full border border-cyber-cyan/50 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            animate={{
              x: cursorPos.x,
              y: cursorPos.y,
              scale: isHovered ? 1.5 : 1,
              borderColor: isHovered ? "#00FF9C" : "#00F5FF",
              rotate: isHovered ? 90 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
              mass: 0.2
            }}
          >
            {/* HUD reticle ticks */}
            <div className="absolute top-0 w-[1px] h-[3px] bg-current"></div>
            <div className="absolute bottom-0 w-[1px] h-[3px] bg-current"></div>
            <div className="absolute left-0 h-[1px] w-[3px] bg-current"></div>
            <div className="absolute right-0 h-[1px] w-[3px] bg-current"></div>
          </motion.div>
        </>
      )}

      {/* Global Background Particles & Grids */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navbar />

      {/* Landing Page Content Sections */}
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
    </div>
  );
}
