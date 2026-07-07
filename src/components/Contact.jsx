import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Terminal, RefreshCw, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setStatus("sending");

    // Simulate cybernetic transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-6 z-10 max-w-7xl mx-auto border-t border-white/5">
      {/* Floating Glowing Shapes */}
      <div className="absolute top-1/4 left-[5%] w-[100px] h-[100px] border border-cyber-cyan/15 rounded-lg rotate-45 animate-float pointer-events-none blur-[1px]"></div>
      <div className="absolute bottom-1/4 right-[5%] w-[120px] h-[120px] border border-cyber-purple/15 rounded-full animate-float-slow pointer-events-none blur-[1px]" style={{ animationDelay: "-2s" }}></div>
      <div className="absolute top-[60%] left-[85%] w-[80px] h-[80px] border border-cyber-green/10 rounded-lg rotate-12 animate-float pointer-events-none blur-[2px]" style={{ animationDelay: "-4s" }}></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and Info */}
        <div className="lg:col-span-5 text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-xs font-bold tracking-widest text-cyber-cyan uppercase mb-3 text-glow-cyan"
          >
            COMMUNICATION PORTAL
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-6"
          >
            LAUNCH MISSION
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-gray-400 text-base leading-relaxed mb-8"
          >
            Ready to enhance your digital infrastructure? Initiate secure contact. Our central intelligence node will review your coordinates and reply via holographic uplink.
          </motion.p>

          {/* Technical Connection Info Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-cyber-bg/70 border border-white/5 p-5 rounded relative overflow-hidden font-mono text-[10px] text-gray-500 space-y-2.5 max-w-sm hidden md:block"
          >
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-cyan/30"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-cyan/30"></div>

            <div className="flex items-center gap-2 text-cyber-cyan font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>TERMINAL_TUNNEL::STATUS</span>
            </div>
            
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span>PROTOCOL:</span>
              <span className="text-white">QUANTUM_SSL_v4.2</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span>IP_ADDRESS:</span>
              <span className="text-white">192.168.99.254</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span>SYNC_STABILITY:</span>
              <span className="text-cyber-green font-bold animate-pulse">99.98% OK</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Glassmorphic Form Card */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-10 rounded-lg border border-white/10 relative shadow-[0_15px_30px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Tech Corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan"></div>

            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Name Input */}
                  <div className="text-left flex flex-col">
                    <label className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      OPERATOR NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="e.g. Commander Sheppard"
                      className="w-full bg-cyber-bg/60 border border-white/10 focus:border-cyber-cyan/60 rounded px-4 py-3 font-body text-white placeholder-gray-600 focus:outline-none focus:shadow-[0_0_12px_rgba(0,245,255,0.15)] transition-all duration-300 disabled:opacity-50 text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="text-left flex flex-col">
                    <label className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      COMMS LINK ADDRESS (EMAIL)
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="e.g. commander@alliance.net"
                      className="w-full bg-cyber-bg/60 border border-white/10 focus:border-cyber-purple/60 rounded px-4 py-3 font-body text-white placeholder-gray-600 focus:outline-none focus:shadow-[0_0_12px_rgba(123,47,247,0.15)] transition-all duration-300 disabled:opacity-50 text-sm"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="text-left flex flex-col">
                    <label className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      MISSION COGNITIVE DISPATCH
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Write your transmission contents..."
                      className="w-full bg-cyber-bg/60 border border-white/10 focus:border-cyber-green/60 rounded px-4 py-3 font-body text-white placeholder-gray-600 focus:outline-none focus:shadow-[0_0_12px_rgba(0,255,156,0.15)] transition-all duration-300 disabled:opacity-50 text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded font-heading font-black tracking-widest text-sm uppercase bg-cyber-cyan text-cyber-bg font-bold cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] disabled:opacity-50 flex items-center justify-center gap-2 relative overflow-hidden group shadow-[0_0_10px_rgba(0,245,255,0.2)]"
                  >
                    {status === "sending" ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Transmitting Core Link...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Launch Mission
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="p-4 rounded-full bg-cyber-green/10 border border-cyber-green/40 shadow-[0_0_15px_rgba(0,255,156,0.2)] animate-pulse">
                    <CheckCircle2 className="w-12 h-12 text-cyber-green text-glow-green" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-black text-white uppercase tracking-wider">
                      TRANSMISSION SUCCESS
                    </h3>
                    <p className="font-body text-gray-400 text-sm max-w-sm">
                      Quantum uplink handshake completed. Your dispatch has been added to the target core queue.
                    </p>
                  </div>

                  {/* Success technical log */}
                  <div className="bg-cyber-bg/90 border border-cyber-green/20 p-4 rounded font-mono text-[9px] text-cyber-green text-left space-y-1 max-w-md w-full">
                    <div>[SYS_HANDSHAKE] CONNECTING_TO_COGNITIVE_NODE_A...</div>
                    <div>[SYS_HANDSHAKE] LINK_ESTABLISHED (ENCRYPTED_AES256)</div>
                    <div>[SYS_HANDSHAKE] DISPATCH_ADDED_TO_NODE_SCHEDULER</div>
                    <div>[SYS_HANDSHAKE] STATUS_OK</div>
                  </div>

                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 border border-cyber-cyan/30 rounded text-cyber-cyan font-heading text-xs font-bold tracking-widest uppercase hover:bg-cyber-cyan/10 transition-colors"
                  >
                    Open New Link
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
