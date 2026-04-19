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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Create a hidden iframe to handle the submission without redirecting the user
    const iframeId = "hidden_iframe_submission";
    let iframe = document.getElementById(iframeId) as HTMLIFrameElement;

    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = iframeId;
      iframe.name = iframeId;
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }

    // Configure the form to post to the hidden iframe
    form.target = iframeId;
    form.action = "https://script.google.com/macros/s/AKfycbyriCz1FaiK27AGg8VPNPn3H0nzZ6adhYLRnSXZm-pYwuaqJpUoeeRIsjxizeI9HXA5Qw/exec";
    form.method = "POST";

    // Execute the submission
    form.submit();

    // Update UI state immediately
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-x-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #00B4D8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-[40rem] h-[40rem] bg-brand-blue/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-[35rem] h-[35rem] bg-cyan-100/30 rounded-full blur-[120px]"
        />

        {/* HUD Scan Line */}
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent"
        />
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
            className="text-5xl sm:text-6xl md:text-8xl font-black text-brand-dark mb-8 tracking-tighter uppercase leading-none"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400 drop-shadow-[0_0_15px_rgba(0,180,216,0.3)]">Touch</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-slate-500 text-lg sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            We are here to help you navigate your child's journey into the world of technology. Whether you have questions about our curriculum, class schedules, or which level is right for your student, our team of industry professionals is ready to assist.
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
              <div className="flex items-center gap-3 mb-8 text-left">
                <div className="w-10 h-[2px] bg-brand-blue" />
                <h2 className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-[0.3em]">Contact Information</h2>
              </div>
              <div className="space-y-8">
                {[
                  { icon: <Mail size={24} />, title: "Email", detail: "genesisitacademy00@gmail.com", sub: "Response within 24 hours", glow: "hover:shadow-brand-blue/10" },
                  { icon: <Phone size={24} />, title: "Phone", detail: "Available on Inquiry", sub: "Mon-Sat, 9AM-7PM", glow: "hover:shadow-emerald-500/10" },
                  { icon: <MapPin size={24} />, title: "Location", detail: "137, George E.De Silva Mawatha,", sub: "Kandy, Sri Lanka.", glow: "hover:shadow-rose-500/10" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 15 }}
                    className="flex items-start gap-6 group cursor-pointer text-left"
                  >
                    <div className={cn(
                      "p-5 rounded-2xl transition-all duration-500 bg-white shadow-xl border border-slate-100 text-brand-blue group-hover:bg-brand-blue group-hover:text-white",
                      item.glow
                    )}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-brand-dark mb-1 uppercase tracking-wider group-hover:text-brand-blue transition-colors">{item.title}</h4>
                      <p className="text-slate-500 font-medium mb-1 text-sm sm:text-base">{item.detail}</p>
                      <p className="text-[10px] text-brand-blue font-black uppercase tracking-[0.2em]">{item.sub}</p>
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
              className="bg-white/80 backdrop-blur-3xl p-6 sm:p-14 relative z-10 rounded-[3.5rem] shadow-2xl border border-white overflow-hidden shadow-brand-blue/5"
            >
              {/* Scanning HUD line */}
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent z-20 pointer-events-none"
              />
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-8 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3 group text-left">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 group-focus-within:text-brand-blue transition-colors">Full Name</label>
                        <input required name="name" type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent text-brand-dark focus:border-brand-blue focus:bg-white outline-none transition-all shadow-inner placeholder:text-slate-300" />
                      </div>
                      <div className="space-y-3 group text-left">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 group-focus-within:text-brand-blue transition-colors">Email Address</label>
                        <input required name="email" type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent text-brand-dark focus:border-brand-blue focus:bg-white outline-none transition-all shadow-inner placeholder:text-slate-300" />
                      </div>
                    </div>
                    <div className="space-y-3 group text-left">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 group-focus-within:text-brand-blue transition-colors">Student's Age</label>
                      <input required name="age" type="text" placeholder="e.g. 12" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent text-brand-dark focus:border-brand-blue focus:bg-white outline-none transition-all shadow-inner placeholder:text-slate-300" />
                    </div>
                    <div className="space-y-3 group text-left">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 group-focus-within:text-brand-blue transition-colors">Interested Course</label>
                      <div className="relative">
                        <select name="course" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent text-slate-600 focus:border-brand-blue focus:bg-white outline-none transition-all appearance-none cursor-pointer shadow-inner font-medium">
                          <option value="" disabled selected>Select Course</option>
                          <option>AI from the Scratch (Ages 8–11)</option>
                          <option>Python (Ages 11–17)</option>
                          <option>Robotics (Ages 11–17)</option>
                        </select>
                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-brand-blue">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 group text-left">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 group-focus-within:text-brand-blue transition-colors">Message</label>
                      <textarea required name="message" rows={4} placeholder="How can we assist your child's journey?" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent text-brand-dark focus:border-brand-blue focus:bg-white outline-none transition-all resize-none shadow-inner placeholder:text-slate-300"></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: "#0096C7" }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="relative overflow-hidden bg-brand-blue text-white w-full py-6 rounded-2xl text-xs uppercase tracking-[0.3em] font-black flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(0,180,216,0.2)] group"
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>SENDING...</span>
                        </div>
                      ) : (
                        <>
                          <Send size={20} />
                          SEND MESSAGE
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

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-40 p-12 sm:p-20 rounded-[4rem] bg-slate-50 border border-slate-100 relative overflow-hidden group text-center shadow-2xl shadow-slate-200"
        >
          <motion.div animate={{ left: ["-100%", "100%"] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 h-1 bg-brand-blue w-full shadow-[0_0_20px_#00B4D8]" />
          <h2 className="text-4xl sm:text-7xl font-black text-brand-dark uppercase tracking-tighter mb-12 leading-none">
            Join our Advanced <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">Coding course</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#0096C7" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-brand-blue text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-xl shadow-brand-blue/20"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
