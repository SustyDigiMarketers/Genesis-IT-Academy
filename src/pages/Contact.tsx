import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

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
    <div className="min-h-screen pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-google-dark mb-6"
          >
            Let's Start Your <span className="text-google-blue">Journey</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-google-gray text-lg sm:text-xl max-w-2xl mx-auto"
          >
            Have questions about our courses or admissions? Our team is here to help you every step of the way.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8 sm:space-y-12"
          >
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-google-dark">Contact Information</h2>
              <div className="space-y-6 sm:space-y-8">
                {[
                  { icon: <Mail size={24} />, title: "Email Us", detail: "admissions@devacademy.com", sub: "Response within 24 hours", color: "text-google-blue bg-blue-50" },
                  { icon: <Phone size={24} />, title: "Call Us", detail: "+91 98765 43210", sub: "Mon-Sat, 9am - 7pm", color: "text-google-green bg-green-50" },
                  { icon: <MapPin size={24} />, title: "Visit Us", detail: "123 Tech Park Road, Trichy", sub: "Tamil Nadu, India", color: "text-google-red bg-red-50" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 sm:gap-6 group"
                  >
                    <div className={cn("p-4 sm:p-5 rounded-[1.5rem] sm:rounded-[2rem] transition-transform duration-500 group-hover:rotate-12 shadow-md", item.color)}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-google-dark mb-1">{item.title}</h4>
                      <p className="text-google-gray font-medium mb-1 text-sm sm:text-base">{item.detail}</p>
                      <p className="text-xs sm:text-sm text-gray-400">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-google-dark text-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Chat with us on WhatsApp</h3>
                <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">Get instant answers to your queries from our admission counselors.</p>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-google-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-google-green/20 text-sm sm:text-base"
                >
                  <MessageCircle size={20} />
                  Message Now
                </a>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-google-green blur-[80px] rounded-full -mr-20 -mt-20 opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
          </motion.div>

          {/* Admission Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            <div className="google-card p-6 sm:p-12 relative z-10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-google-gray ml-1">Full Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-google-blue focus:bg-white outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-google-gray ml-1">Email Address</label>
                        <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-google-blue focus:bg-white outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-google-gray ml-1">Phone Number</label>
                      <input required type="tel" placeholder="+91 98765 43210" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-google-blue focus:bg-white outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-google-gray ml-1">Interested Course</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-google-blue focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                        <option>Full Stack Web Development</option>
                        <option>Python Data Science</option>
                        <option>UI/UX Design</option>
                        <option>Mobile App Development</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-google-dark ml-1">Coding Experience</label>
                      <div className="flex flex-wrap gap-6 pt-2">
                        {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                          <label key={level} className="flex items-center gap-3 cursor-pointer group">
                            <input type="radio" name="experience" className="w-5 h-5 text-google-blue focus:ring-google-blue border-gray-300" />
                            <span className="text-google-gray font-medium group-hover:text-google-dark transition-colors">{level}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-google-gray ml-1">Message (Optional)</label>
                      <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-google-blue focus:bg-white outline-none transition-all resize-none"></textarea>
                    </div>
                    <button 
                      disabled={isSubmitting}
                      className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={20} />
                          Submit Application
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-google-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={48} className="text-google-green" />
                    </div>
                    <h3 className="text-3xl font-bold text-google-dark mb-4">Application Received!</h3>
                    <p className="text-google-gray mb-10 text-lg">Thank you for your interest. Our admission counselor will contact you within 24 hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-google-blue font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-google-blue/10 via-google-red/10 to-google-yellow/10 rounded-[4rem] blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
