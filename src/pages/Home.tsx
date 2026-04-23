import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Users, Rocket, Trophy, Play, CheckCircle2, Github, ExternalLink, Globe, ArrowUp, Terminal, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Hero = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  return (
    <section
      className="relative min-h-[55vh] flex items-center overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 scale-105">
        <img
          src="/hero-bg.png"
          alt="Futuristic IT Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[1px]" />

        {/* Futuristic Grid Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #00B4D8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Animated HUD Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <motion.div
            animate={{ x: [-1000, 2000] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] left-0 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-brand-blue to-transparent"
          />
          <motion.div
            animate={{ x: [2000, -1000] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[30%] left-0 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        </div>

        {/* Ambient Glow that follows mouse */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-brand-blue/15 blur-[150px] pointer-events-none transition-opacity duration-500"
          animate={{
            x: mousePos.x - 400,
            y: mousePos.y - 400,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10 w-full pt-16 sm:pt-20 pb-20 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 text-brand-blue mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                className="h-[2px] bg-brand-blue shadow-[0_0_10px_rgba(0,180,216,0.8)]"
              />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] overflow-hidden">
                <motion.span
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block text-brand-blue group-hover:text-cyan-400 transition-colors"
                >
                  Experience The Best IT Mentorship
                </motion.span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] sm:leading-[1.05] mb-8 uppercase tracking-tighter">
              Empowering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-cyan-400 to-brand-blue bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_15px_rgba(0,180,216,0.3)]">Next Generation</span> <br />
              of Tech Innovators
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl font-medium opacity-90 border-l-2 border-brand-blue/30 pl-6">
              Welcome to the future of learning. We provide industry-leading IT courses designed specifically for young minds, bridging the gap between curiosity and professional-grade skills. From the fundamentals of AI to mastering Python, we prepare students for a digital-first world.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,180,216,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/courses" className="btn-primary group !rounded-none border-b-4 border-cyan-700 px-10 py-5 flex items-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">VIEW ALL COURSES</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Image on Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 p-4 bg-white/10 backdrop-blur-md rounded-[3rem] border-2 border-white/20 shadow-2xl">
              <img
                src="/hero-students.png"
                alt="Our Students"
                className="rounded-[2.5rem] w-full object-cover shadow-2xl border-4 border-white"
              />

              {/* Stats Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-slate-100"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <Trophy size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Success Rate</p>
                  <p className="text-2xl font-black text-brand-dark">99%</p>
                </div>
              </motion.div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Side HUD */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 opacity-20 group">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ width: [20, 40, 20] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            className="h-1 bg-brand-blue rounded-full"
          />
        ))}
      </div>
    </section>
  );
};

const Ticker = () => (
  <div className="bg-brand-blue py-6 overflow-hidden border-y border-white/10 shadow-2xl relative z-20">
    <motion.div
      animate={{ x: [0, -1000] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex whitespace-nowrap gap-12 items-center"
    >
      {[...Array(10)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="text-white text-lg font-black uppercase tracking-[0.2em] flex items-center gap-8">
            AI EXPLORERS <Rocket className="w-6 h-6 rotate-45" />
          </span>
          <span className="text-white text-lg font-black uppercase tracking-[0.2em] flex items-center gap-8">
            PYTHON PROGRAMMING <Terminal className="w-6 h-6" />
          </span>
          <span className="text-white text-lg font-black uppercase tracking-[0.2em] flex items-center gap-8">
            ROBOTICS LAB <Cpu className="w-6 h-6" />
          </span>
          <span className="text-xl text-white/50 font-black">*</span>
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const WhyChooseUs = () => (
  <section className="py-32 bg-white overflow-hidden relative">
    {/* Animated DNA/Circuit patterns */}
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <motion.path
          d="M 10 50 Q 25 20 50 50 T 90 50"
          stroke="#00B4D8"
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-6xl font-black text-brand-dark tracking-tighter uppercase mb-6">
            Why <span className="text-brand-blue drop-shadow-[0_0_8px_rgba(0,180,216,0.3)]">Choose Us?</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-brand-blue to-cyan-400 mx-auto rounded-full shadow-lg" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            title: "Industry Experts",
            desc: "Learn directly from qualified tutors currently working in the IT industry.",
            icon: <Users size={32} />
          },
          {
            title: "Practical Skills",
            desc: "We focus on real-world applications, not just theory.",
            icon: <Code size={32} />
          },
          {
            title: "Future-Ready",
            desc: "Equipping students with the tools to lead in the age of AI.",
            icon: <Rocket size={32} />
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
            whileHover={{ y: -15, transition: { duration: 0.2 } }}
            className="group flex flex-col items-center text-center p-8 sm:p-12 rounded-[2.5rem] bg-white border border-slate-100 hover:border-brand-blue/30 transition-all duration-500 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(0,180,216,0.15)] relative overflow-hidden"
          >
            {/* HUD Corner Decorations */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-slate-100 group-hover:border-brand-blue group-hover:w-6 group-hover:h-6 transition-all" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-slate-100 group-hover:border-brand-blue group-hover:w-6 group-hover:h-6 transition-all" />

            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              className="w-20 h-20 bg-brand-blue/5 rounded-[1.5rem] flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-inner"
            >
              {item.icon}
            </motion.div>
            <h3 className="text-2xl font-black text-brand-dark uppercase mb-4 tracking-tight group-hover:text-brand-blue transition-colors">{item.title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed text-sm group-hover:text-slate-600 transition-colors">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CoursesSec = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let intervalId: NodeJS.Timeout;
    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (window.innerWidth >= 768) return; // Only on mobile

        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollBy({ left: clientWidth * 0.8, behavior: 'smooth' });
        }
      }, 4000);
    };

    startAutoScroll();

    const handleTouch = () => {
      if (intervalId) clearInterval(intervalId);
    };

    scrollContainer.addEventListener('touchstart', handleTouch);

    return () => {
      if (intervalId) clearInterval(intervalId);
      scrollContainer.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <section className="py-32 bg-slate-50 overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 text-left gap-8 px-4">
          <div>
            <div className="flex items-center gap-3 text-brand-blue mb-4">
              <motion.div
                animate={{ width: [32, 64, 32] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-[2px] bg-brand-blue"
              />
              <span className="text-xs font-black uppercase tracking-[0.3em] active:text-cyan-400 transition-colors">Our Specialized Modules</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase leading-none">
              Courses We Provide to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">Elevate Your Future</span>
            </h2>
          </div>
          <Link to="/courses" className="btn-primary !rounded-md px-10 py-4 shadow-xl shadow-brand-blue/20 hidden md:inline-block">
            VIEW ALL COURSES
          </Link>
        </div>

        <div className="relative group/slider">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-16 snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 px-6 sm:px-10 lg:px-8 no-scrollbar scroll-smooth"
          >
            {[
              {
                icon: <Cpu size={32} />,
                title: "AI with SCRATCH PROGRAMMING",
                age: "Ages 8 – 11",
                desc: "AI Explorers | Visual learning tools | Built for beginners",
                accent: "from-rose-500/20 to-transparent",
                glow: "group-hover:shadow-rose-500/10"
              },
              {
                icon: <Terminal size={32} />,
                title: "Python",
                age: "Ages 11 – 17",
                desc: "Core programming syntax | Industry-standard logic | Project-based curriculum",
                accent: "from-brand-blue/20 to-transparent",
                glow: "group-hover:shadow-brand-blue/20"
              },
              {
                icon: <Globe size={32} />,
                title: "Robotics",
                age: "Ages 11 – 17",
                desc: "Arduino Robotics | Complex problem solving | Software dev principles",
                accent: "from-emerald-500/20 to-transparent",
                glow: "group-hover:shadow-emerald-500/10"
              }
            ].map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px -50px" }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex-shrink-0 w-[90%] sm:w-[60%] md:w-full snap-center bg-white p-8 sm:p-12 rounded-[3rem] sm:rounded-[3.5rem] shadow-2xl transition-all duration-700 border border-slate-100 relative group overflow-hidden",
                  "md:bg-white/70 md:backdrop-blur-xl md:border-white/50 active:border-brand-blue/50",
                  course.glow
                )}
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 md:hidden transition-opacity duration-500", course.accent)} />
                <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-slate-50 group-hover:border-brand-blue transition-all" />

                <div className="w-20 h-20 bg-brand-blue p-5 rounded-3xl text-white mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg shadow-brand-blue/30 relative z-10">
                  {course.icon}
                </div>
                <div className="relative z-10 text-left">
                  <p className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em] mb-3">{course.age}</p>
                  <h3 className="text-2xl md:text-3xl font-black text-brand-dark uppercase mb-4 tracking-tighter leading-none">{course.title}</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 font-medium">{course.desc}</p>
                  <Link to="/courses" className="inline-flex items-center gap-4 text-brand-blue font-black text-xs uppercase tracking-[0.2em] hover:gap-6 transition-all group/link">
                    EXPLORE MODULE
                    <div className="p-2.5 rounded-full border-2 border-brand-blue/10 group-hover/link:bg-brand-blue group-hover/link:text-white transition-all shadow-sm">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                </div>
                <motion.div
                  animate={{ top: ["-100%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent z-20 pointer-events-none md:hidden"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex md:hidden justify-center items-center gap-3 absolute bottom-4 left-1/2 -translate-x-1/2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-1 rounded-full bg-brand-blue/20"
                animate={{
                  width: [16, 32, 16],
                  backgroundColor: ["#00B4D820", "#00B4D8", "#00B4D820"]
                }}
                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
              />
            ))}
          </div>
        </div>

        <div className="md:hidden mt-8 px-4">
          <Link to="/courses" className="btn-primary w-full !rounded-xl py-4 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest">
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProcessSec = () => (
  <section className="py-32 bg-slate-50 overflow-hidden relative">
    {/* Floating HUD Particles */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.2, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, delay: i * 1.5 }}
          className="absolute w-2 h-2 bg-brand-blue rounded-full"
          style={{ left: `${15 + i * 15}%`, bottom: '20%' }}
        />
      ))}
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 text-brand-blue mb-4">
            <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#00B4D8]" />
            <span className="text-xs font-black uppercase tracking-[0.4em]">The Learning Experience</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-brand-dark tracking-tighter uppercase mb-6">
            How We <span className="text-brand-blue drop-shadow-[0_0_10px_rgba(0,180,216,0.2)]">Educate</span>
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {[
          {
            t: "Small Groups",
            d: "We maintain small class sizes to ensure every student receives personalized attention from our industry tutors.",
            icon: <Users size={28} />
          },
          {
            t: "Interactive & Live",
            d: "No pre-recorded videos—our lessons are 100% live and interactive, fostering real-time collaboration.",
            icon: <Play size={28} />
          },
          {
            t: "Portfolio Building",
            d: "Students don't just learn; they build. Every course concludes with a tangible project to showcase their skills.",
            icon: <Code size={28} />
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="flex flex-col items-center group p-8 sm:p-12 bg-white rounded-[3rem] shadow-xl hover:shadow-[0_30px_70px_-20px_rgba(0,180,216,0.15)] transition-all duration-500 border border-slate-100 relative overflow-hidden"
          >
            {/* Scanning Line Effect */}
            <motion.div
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: idx * 1.3 }}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent z-20 pointer-events-none"
            />

            <div className="w-24 h-24 rounded-3xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-10 group-hover:bg-brand-blue group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-inner">
              {item.icon}
            </div>
            <h4 className="font-black text-brand-dark uppercase text-sm mb-5 tracking-widest text-center group-hover:text-brand-blue transition-colors">{item.t}</h4>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[280px] text-center group-hover:text-slate-600 transition-colors">{item.d}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SuccessBeyondScreen = () => (
  <section className="bg-brand-dark py-40 px-4 overflow-hidden relative">
    {/* Tech Circle Decoration */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full border-dashed pointer-events-none"
    />

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            Success Beyond <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">The Screen</span>
          </h2>
          <div className="w-40 h-2 bg-brand-blue mx-auto rounded-full shadow-[0_0_15px_#00B4D8]" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-28">
        {[
          {
            t: "Logical Thinking",
            d: "Beyond code, we teach students how to deconstruct complex problems and think critically.",
            icon: <Globe size={28} />
          },
          {
            t: "Career Foundation",
            d: "Get a head start on the most in-demand career paths of the 21st century.",
            icon: <Database size={28} />
          },
          {
            t: "Certificate of Completion",
            d: "Celebrate milestones with a formal Online certificate recognized by our industry partners.",
            icon: <Trophy size={28} />
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.08)' }}
            className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 transition-all duration-500 group cursor-default backdrop-blur-sm"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 flex items-center justify-center text-brand-blue mb-10 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] transition-all">
              {item.icon}
            </div>
            <h4 className="text-white font-black uppercase text-base mb-5 tracking-widest">{item.t}</h4>
            <p className="text-gray-400 text-sm font-medium leading-relaxed group-hover:text-gray-300 transition-colors">{item.d}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block relative"
        >
          {/* Animated Button Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

          <Link
            to="/contact"
            className="relative px-16 py-7 bg-brand-blue text-white rounded-md font-black text-sm uppercase tracking-[0.3em] flex items-center gap-4 transition-all hover:bg-[#0096C7] shadow-[0_20px_50px_-15px_rgba(0,180,216,0.5)]"
          >
            Join our Advanced Coding courses <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="overflow-x-hidden pt-16">
      <Hero />
      <Ticker />
      <WhyChooseUs />
      <CoursesSec />
      <ProcessSec />
      <SuccessBeyondScreen />
    </div>
  );
}
