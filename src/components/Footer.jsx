import React from "react";
import { Cpu, MessageSquare } from "lucide-react";

// Inline brand SVGs for reliability and style consistency
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-cyber-bg/95 border-t border-white/5 pt-16 pb-12 z-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-2 text-left space-y-4">
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="flex items-center gap-2 font-heading font-black text-2xl tracking-widest text-white group"
          >
            <Cpu className="w-6 h-6 text-cyber-cyan group-hover:rotate-180 transition-transform duration-500 filter drop-shadow-[0_0_8px_#00F5FF]" />
            <span>
              CYBORG <span className="text-cyber-cyan text-glow-cyan">X</span>
            </span>
          </a>
          
          <p className="font-body text-gray-500 text-sm max-w-sm leading-relaxed">
            The premium next-generation computational platform merging biological cognitive frameworks with advanced silicon neural processors.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: GithubIcon, href: "https://github.com", name: "GitHub" },
              { icon: TwitterIcon, href: "https://twitter.com", name: "Twitter" },
              { icon: LinkedinIcon, href: "https://linkedin.com", name: "LinkedIn" },
              { icon: MessageSquare, href: "https://discord.com", name: "Discord" }
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded bg-white/5 border border-white/10 text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-[0_0_12px_rgba(0,245,255,0.2)] transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              );
            })}
          </div>
        </div>


        {/* Resources Column */}
        <div className="text-left space-y-4">
          <h4 className="font-heading text-xs font-bold tracking-widest text-white uppercase">
            RESOURCES
          </h4>
          <ul className="space-y-2.5 font-body text-sm text-gray-500">
            {["Developer Docs", "API Interface", "Cyberware Safety", "Whitepaper"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-cyber-cyan transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Column */}
        <div className="text-left space-y-4">
          <h4 className="font-heading text-xs font-bold tracking-widest text-white uppercase">
            SECURE LINK
          </h4>
          <ul className="space-y-2.5 font-body text-sm text-gray-500">
            {["Security Audits", "Privacy Core", "Operator Terms", "Network Status"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-cyber-purple transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
        <div>
          &copy; {new Date().getFullYear()} CYBORG X COGNITIVE NETWORKS. ALL LOGS DECRYPTED.
        </div>
        
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse shadow-[0_0_6px_#00FF9C]"></span>
          <span>POWERED BY CYBORG X CORE AI</span>
        </div>
      </div>
    </footer>
  );
}
