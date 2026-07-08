import React, { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Mission", href: "#home" },
  { name: "Evolution Analysis", href: "#about" },
  { name: "Technology", href: "#features" },
  { name: "Neural Core", href: "#timeline" },
  { name: "Command Center", href: "#gallery" },
  { name: "Transmission", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cyber-bg/75 backdrop-blur-md border-b border-cyber-cyan/15 py-3 shadow-lg shadow-cyber-cyan/5"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center gap-2 font-heading font-black text-2xl tracking-widest text-white group"
        >
          <Cpu className="w-6 h-6 text-cyber-cyan group-hover:rotate-180 transition-transform duration-500 filter drop-shadow-[0_0_8px_#00F5FF]" />
          <span>
            CYBORG <span className="text-cyber-cyan text-glow-cyan">X</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative font-heading text-sm font-semibold tracking-wider transition-colors duration-300 hover:text-cyber-cyan ${
                  isActive ? "text-cyber-cyan" : "text-gray-400"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyber-cyan shadow-[0_0_8px_#00F5FF]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-heading font-bold tracking-widest text-white uppercase rounded border border-cyber-cyan/30 hover:border-cyber-cyan bg-transparent transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] px-4 py-2"
          >
            <span className="relative">Launch HUD</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors duration-300 filter drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cyber-bg/95 border-b border-cyber-cyan/15 backdrop-blur-lg"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-heading text-lg font-semibold tracking-widest py-2 border-b border-white/5 flex items-center justify-between ${
                      isActive ? "text-cyber-cyan text-glow-cyan" : "text-gray-400"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-cyber-cyan shadow-[0_0_6px_#00F5FF]" />
                    )}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="mt-4 w-full text-center font-heading font-bold tracking-widest text-white uppercase rounded border border-cyber-cyan/50 bg-cyber-cyan/10 hover:bg-cyber-cyan/25 py-3 transition-all"
              >
                Launch HUD
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
