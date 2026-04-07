import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X, Instagram, Facebook, Youtube, MessageSquare, ArrowUp, Globe, Mail, Phone } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Coding Test', path: '/coding-test' },
    { name: 'Contact', path: '/contact' },
  ];

  const isCodingTest = location.pathname === '/coding-test';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled || isCodingTest ? "bg-white/90 backdrop-blur-xl shadow-lg py-2" : "bg-transparent py-4"
    )}>
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-google-blue origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="bg-google-blue p-1.5 sm:p-2 rounded-xl shadow-lg shadow-google-blue/20"
            >
              <Code2 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-google-dark group-hover:text-google-blue transition-colors">
              GENESIS<span className="text-google-blue">IT</span>ACADEMY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group py-2"
              >
                <span className={cn(
                  "text-sm font-bold transition-colors",
                  location.pathname === link.path ? "text-google-blue" : "text-google-gray group-hover:text-google-blue"
                )}>
                  {link.name}
                </span>
                <motion.div 
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-google-blue rounded-full",
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  )}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            <Link to="/contact" className="btn-primary px-8 py-3 text-sm shadow-xl shadow-google-blue/20 hover:scale-105 active:scale-95 transition-all">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-google-dark p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-4 rounded-2xl text-lg font-bold transition-all",
                      location.pathname === link.path ? "text-google-blue bg-blue-50" : "text-google-gray hover:bg-gray-50"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center btn-primary py-5 text-lg shadow-xl shadow-google-blue/20"
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-google-dark text-white pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-google-blue rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-google-red rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-google-blue p-2 rounded-xl">
                <Code2 className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">GENESIS<span className="text-google-blue">IT</span>ACADEMY</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              Empowering the next generation of developers through hands-on mentorship and industry-standard projects.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram size={20} />, label: "Instagram", color: "hover:bg-pink-500" },
                { icon: <Facebook size={20} />, label: "Facebook", color: "hover:bg-blue-600" },
                { icon: <Youtube size={20} />, label: "Youtube", color: "hover:bg-red-600" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={cn(
                    "p-3 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300",
                    social.color
                  )}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Globe size={20} className="text-google-blue" />
              Academy
            </h4>
            <ul className="space-y-4">
              {['Curriculum', 'Mentors', 'Success Stories', 'Admissions'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-400 hover:text-google-blue transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-google-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Code2 size={20} className="text-google-green" />
              Resources
            </h4>
            <ul className="space-y-4">
              {['Coding Test', 'Free Brochure', 'GitHub Projects', 'Developer Blog'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Coding Test' ? '/coding-test' : '/'} className="text-gray-400 hover:text-google-green transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-google-green opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <MessageSquare size={20} className="text-google-yellow" />
              Get in Touch
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-google-blue/20 transition-colors">
                  <Mail size={18} className="text-google-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm font-bold">hello@genesisitacademy.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-google-green/20 transition-colors">
                  <Phone size={18} className="text-google-green" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-sm font-bold">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-500 text-sm font-medium">
            © 2026 GenesisITAcademy. Built with passion for the next generation.
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-6 text-sm font-bold text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/" className="hover:text-white transition-colors">Terms</Link>
            </div>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-4 bg-google-blue text-white rounded-2xl shadow-lg shadow-google-blue/20"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };
