import React from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { Send, Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)', 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20 
    } 
  }
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-x-hidden bg-brand-dark/5">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-[30rem] h-[30rem] bg-brand-blue/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-[100px]" 
        />
        
        {/* Floating HUD elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-brand-blue/20 rounded-full"
              style={{
                width: 100 + i * 50,
                height: 100 + i * 50,
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16 sm:mb-24"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-brand-dark mb-6 tracking-tight uppercase"
          >
            Let's Start Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Journey</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto font-medium"
          >
            Have questions about our courses or admissions? Our team is available securely via global endpoints.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-16 items-start"
        >
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 space-y-8 sm:space-y-12"
          >
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark uppercase tracking-widest">Connect<span className="text-brand-blue">./</span></h2>
              <div className="space-y-6 sm:space-y-8">
                {[
                  { icon: <Mail size={24} />, title: "Email Us", detail: "admissions@genesisitacademy.com", sub: "Response within 24 hours", color: "text-brand-blue bg-blue-50 border-brand-blue" },
                  { icon: <Phone size={24} />, title: "Call Us", detail: "+91 98765 43210", sub: "Mon-Sat, 9am - 7pm", color: "text-emerald-500 bg-emerald-50 border-emerald-500" },
                  { icon: <MapPin size={24} />, title: "Visit Us", detail: "123 Tech Park Road, Trichy", sub: "Tamil Nadu, India", color: "text-rose-500 bg-rose-50 border-rose-500" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start gap-4 sm:gap-6 group cursor-pointer"
                  >
                    <div className={cn("p-4 sm:p-5 rounded-[1.5rem] sm:rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,180,216,0.2)] border border-transparent group-hover:border-opacity-30", item.color)}>
                      <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                        {item.icon}
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-brand-dark mb-1 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                      <p className="text-slate-500 font-medium mb-1 text-sm sm:text-base">{item.detail}</p>
                      <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-bold">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-brand-darker text-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5"
            >
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Live Support</h3>
                <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">Secure direct pipeline to our admission engineers.</p>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 text-sm sm:text-base uppercase tracking-widest"
                >
                  <MessageCircle size={20} />
                  Ping Us
                </a>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 right-0 w-40 h-40 bg-emerald-500 blur-[80px] rounded-full -mr-20 -mt-20" 
              />
            </motion.div>
          </motion.div>

          {/* Admission Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 relative"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-xl p-6 sm:p-12 relative z-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,180,216,0.1)] border border-white/50 overflow-hidden"
            >
              {/* Scanning Line Effect */}
              <motion.div 
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent z-20 pointer-events-none"
              />
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-brand-blue transition-colors">Session ID / Full Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-brand-light border-2 border-transparent focus:border-brand-blue focus:bg-white outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(0,180,216,0.15)]" />
                      </div>
                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-brand-blue transition-colors">Endpoint / Email Address</label>
                        <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-brand-light border-2 border-transparent focus:border-brand-blue focus:bg-white outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(0,180,216,0.15)]" />
                      </div>
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-brand-blue transition-colors">Comm Link / Phone Number</label>
                      <input required type="tel" placeholder="+91 98765 43210" className="w-full px-6 py-4 rounded-2xl bg-brand-light border-2 border-transparent focus:border-brand-blue focus:bg-white outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(0,180,216,0.15)]" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-brand-blue transition-colors">Primary Module</label>
                      <div className="relative">
                        <select className="w-full px-6 py-4 rounded-2xl bg-brand-light border-2 border-transparent focus:border-brand-blue focus:bg-white outline-none transition-all appearance-none cursor-pointer shadow-inner focus:shadow-[0_0_15px_rgba(0,180,216,0.15)] font-medium">
                          <option>AI Explorers (Ages 8-11)</option>
                          <option>Python Programming (Ages 11-17)</option>
                          <option>Robotics (Ages 11-17)</option>
                        </select>
                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-brand-blue">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark ml-1">Current Capability Level</label>
                      <div className="flex flex-wrap gap-4 pt-2">
                        {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                          <label key={level} className="flex-1 flex items-center justify-center gap-3 cursor-pointer group bg-brand-light border-2 border-transparent hover:border-brand-blue py-3 rounded-xl transition-all relative overflow-hidden">
                            <input type="radio" name="experience" className="absolute inset-0 opacity-0 cursor-pointer peer" />
                            <div className="w-4 h-4 rounded-full border-2 border-brand-blue peer-checked:bg-brand-blue transition-colors" />
                            <span className="text-slate-500 text-sm font-bold group-hover:text-brand-dark transition-colors peer-checked:text-brand-blue">{level}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-brand-blue transition-colors">Packet Payload (Message)</label>
                      <textarea rows={4} placeholder="How can we assist your deployment?" className="w-full px-6 py-4 rounded-2xl bg-brand-light border-2 border-transparent focus:border-brand-blue focus:bg-white outline-none transition-all resize-none shadow-inner focus:shadow-[0_0_15px_rgba(0,180,216,0.15)]"></textarea>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="relative overflow-hidden bg-brand-blue text-white w-full py-5 rounded-full text-sm uppercase tracking-widest font-black flex items-center justify-center gap-3 hover:bg-[#0096C7] transition-all shadow-lg shadow-brand-blue/30 group"
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                      
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={18} />
                          Initialize Request
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ type: "spring" }}
                    className="text-center py-24 px-6 flex flex-col items-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-24 h-24 bg-brand-blue/10 rounded-full flex items-center justify-center mb-8 relative"
                    >
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-brand-blue/20 rounded-full blur-xl" />
                      <CheckCircle2 size={48} className="text-brand-blue relative z-10" />
                    </motion.div>
                    <h3 className="text-3xl font-black text-brand-dark mb-4 uppercase tracking-tight">Transmission Complete</h3>
                    <p className="text-slate-500 mb-10 text-lg font-medium max-w-sm">Payload secured. Our engineers will establish contact within 24 hours via secure line.</p>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsSubmitted(false)}
                      className="btn-outline border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 uppercase tracking-widest text-xs"
                    >
                      Resend Packet
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            {/* Animated Glow behind form */}
            <motion.div 
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 via-cyan-400/10 to-brand-blue/5 rounded-[4rem] blur-2xl -z-10" 
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
