import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  Globe,
  Code2,
  MessageSquare,
  ArrowUp,
  MapPin,
  ArrowRight,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

const CursorFollower = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = React.useState(false);
  const cursorRef = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full hidden lg:block border border-brand-blue/50"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? 'rgba(0, 180, 216, 0.2)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-blue pointer-events-none z-[9999] rounded-full hidden lg:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 500, mass: 0.1 }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-[9998] opacity-30"
        style={{
          background: `radial-gradient(circle 400px at ${position.x}px ${position.y}px, rgba(0, 180, 216, 0.05), transparent)`
        }}
      />
    </>
  );
};

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
    { name: 'Courses', path: '/courses' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isCodingTest = location.pathname === '/coding-test';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled || isCodingTest
        ? "bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
        : "bg-brand-dark/40 backdrop-blur-sm py-5"
    )}>
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-brand-blue origin-left z-50 shadow-[0_0_15px_rgba(0,180,216,0.8)]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-3 group min-w-max">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl overflow-hidden"
            >
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </motion.div>
            <span className={cn(
              "text-lg sm:text-2xl font-black tracking-tighter transition-colors leading-none",
              "text-white group-hover:text-cyan-400 flex items-center gap-2"
            )}>
              <span>Genesis <span className="text-brand-blue">IT</span> Academy</span>
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
                  location.pathname === link.path ? "text-cyan-400" : "text-gray-300 group-hover:text-cyan-400"
                )}>
                  {link.name}
                </span>
                <motion.div
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-cyan-400 rounded-full",
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  )}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-sm shadow-brand-blue/20">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
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
            className="md:hidden absolute top-full left-0 right-0 bg-brand-dark shadow-2xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-12 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-6 py-5 rounded-3xl text-xl font-black transition-all border border-transparent",
                      location.pathname === link.path
                        ? "text-cyan-400 bg-brand-blue/10 border-brand-blue/20"
                        : "text-gray-300 hover:bg-white/5 active:scale-95"
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={20} className={cn("transition-transform", location.pathname === link.path ? "opacity-100" : "opacity-0")} />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-10"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-blue text-white py-6 rounded-[2rem] text-lg font-black uppercase tracking-widest shadow-xl shadow-brand-blue/20 active:scale-95 transition-all"
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

  return (
    <footer className="relative bg-brand-darker text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue rounded-full blur-[150px]" />
        <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 12, repeat: Infinity, delay: 2 }} className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-700 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="space-y-8">
            <Link to="/" className="flex items-center space-x-4 group whitespace-nowrap">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl overflow-hidden"
              >
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </motion.div>
              <span className="text-xl font-black tracking-tighter leading-none flex items-center gap-2 text-white">
                <span>Genesis <span className="text-brand-blue">IT</span> Academy</span>
              </span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              Empowering the next generation of developers through hands-on mentorship and industry-standard projects.
            </p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Globe size={20} className="text-brand-blue" />
              Programs
            </h4>
            <ul className="space-y-4">
              {['Artificial intelligence', 'Python', 'Robotics'].map((item) => (
                <li key={item}>
                  <Link to="/courses" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Code2 size={20} className="text-brand-blue" />
              Quick links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Courses', path: '/courses' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="space-y-8">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <MessageSquare size={20} className="text-brand-blue" />
              Get in Touch
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-blue/20 transition-colors">
                  <Mail size={18} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm font-bold text-gray-300">genesisitacademy00@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-blue/20 transition-colors">
                  <Phone size={18} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:0760501061" className="text-sm font-bold text-gray-300 hover:text-brand-blue transition-colors">076 050 1061</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-blue/20 transition-colors">
                  <MapPin size={18} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-sm font-bold text-gray-300 leading-tight">137, George E.De Silva Mawatha, Kandy, Sri Lanka.</p>
                </div>
              </div>

              {/* Social Icons Moved Here */}
              <div className="flex space-x-4 pt-4">
                {[
                  { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/genesisitacademy/", color: "hover:text-pink-500 hover:border-pink-500" },
                  { icon: <Facebook size={20} />, label: "Facebook", href: "https://www.facebook.com/GenesisITacademy", color: "hover:text-blue-500 hover:border-blue-500" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      "p-4 sm:p-3 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 text-gray-400",
                      social.color
                    )}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-gray-500 text-sm font-medium">
            © 2026 GenesisITAcademy. Built with passion for the next generation.
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-6 text-sm font-bold text-gray-400">
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/94760501061"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-28 right-8 z-[100] p-4 bg-[#25D366] text-white rounded-2xl shadow-2xl shadow-green-500/30 flex items-center justify-center transition-all group border border-white/10"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      <span className="absolute right-full mr-4 bg-brand-dark/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-xl pointer-events-none border border-white/10 uppercase tracking-widest hidden sm:block">
        Chat with us
      </span>
    </motion.a>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] p-4 bg-brand-blue text-white rounded-2xl shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-hover transition-all flex items-center justify-center border border-white/10"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CursorFollower />
      <WhatsAppButton />
      <ScrollToTopButton />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export { Navbar, Footer, Layout };
