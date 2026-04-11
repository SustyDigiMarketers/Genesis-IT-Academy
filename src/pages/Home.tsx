import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Users, Rocket, Trophy, Play, CheckCircle2, Github, ExternalLink, Globe, ArrowUp, Terminal, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Hero = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 scale-105">
        <img 
          src="/modern_it_office_hero_1775842278295.png" 
          alt="Office Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-[2px]" />
        
        {/* Ambient Glow that follows mouse */}
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none transition-opacity duration-500"
          animate={{
            x: mousePos.x - 300,
            y: mousePos.y - 300,
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 text-brand-blue mb-6">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              className="h-[2px] bg-brand-blue" 
            />
            <span className="text-xs font-black uppercase tracking-[0.3em] overflow-hidden">
               <motion.span
                 initial={{ y: 20 }}
                 animate={{ y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="block"
               >
                 Experience The Best IT Mentorship
               </motion.span>
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-8 uppercase tracking-tighter">
            Where <span className="text-brand-blue">Creativity</span> <br/>
            Meets Cutting-Edge <br/>
            Technology
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl font-medium opacity-90">
            Empowering the next generation of tech innovators through industry-leading IT courses designed for young minds. Bridge the gap between curiosity and professional-grade skills.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-primary group !rounded-md px-10 py-5 flex items-center gap-3">
                START LEARNING <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <Link to="/courses" className="text-white font-black text-sm uppercase tracking-widest border-b-2 border-transparent hover:border-brand-blue transition-all pb-1 hover:text-brand-blue">
              VIEW ALL COURSES
            </Link>
          </div>
        </motion.div>
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


const CoursesSec = () => (
  <section className="py-32 bg-slate-50 overflow-hidden text-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 text-left gap-8">
        <div>
          <div className="flex items-center gap-3 text-brand-blue mb-4">
            <div className="h-[2px] w-8 bg-brand-blue" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Our Specialized Modules</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase leading-none">
            Courses We Provide to <br/>
            <span className="text-brand-blue">Elevate Your Future</span>
          </h2>
        </div>
        <Link to="/courses" className="btn-primary !rounded-md px-10 py-4 shadow-xl shadow-brand-blue/20">
          VIEW ALL COURSES
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            icon: <Cpu size={32} />, 
            title: "AI Explorers", 
            desc: "Master the basics of block-based coding and progress to advanced Artificial Intelligence for Ages 8-11." 
          },
          { 
            icon: <Terminal size={32} />, 
            title: "Python Lab", 
            desc: "Learn core programming syntax and master functional coding with professional Python packages." 
          },
          { 
            icon: <Globe size={32} />, 
            title: "Robotics & IoT", 
            desc: "Interface with Arduino hardware to create smart systems and explore Computer Vision modules." 
          }
        ].map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
            className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-brand-blue/20 transition-all group text-left border border-slate-100 perspective-1000"
          >
            <div className="w-16 h-16 bg-brand-blue p-4 rounded-xl text-white mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-lg shadow-brand-blue/20">
              {course.icon}
            </div>
            <h3 className="text-xl font-black text-brand-dark uppercase mb-4 tracking-tight group-hover:text-brand-blue transition-colors">{course.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">{course.desc}</p>
            <Link to="/courses" className="inline-flex items-center gap-2 text-brand-blue font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all">
              LEARN MORE <ArrowRight size={14} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProcessSec = () => (
  <section className="py-32 bg-white overflow-hidden text-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-24">
        <div className="flex items-center justify-center gap-3 text-brand-blue mb-4">
          <div className="h-[2px] w-8 bg-brand-blue" />
          <span className="text-xs font-black uppercase tracking-[0.3em]">Our Learning Flow</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase">
          Our Proven <span className="text-brand-blue">Success Process</span>
        </h2>
      </div>

      <div className="relative">
        {/* Animated Connection Path */}
        <div className="absolute top-12 left-[10%] right-[10%] h-[2px] hidden md:block">
          <svg className="w-full h-full overflow-visible">
            <motion.path
              d="M 0 1 h 800"
              stroke="#E2E8F0"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 1 h 800"
              stroke="#00B4D8"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {[
            { n: "01", t: "Registration", d: "Join our community and select your primary module.", icon: <Users size={24} /> },
            { n: "02", t: "Live Sessions", d: "Experience 100% interactive lessons with industry mentors.", icon: <Play size={24} /> },
            { n: "03", t: "Portfolio Build", d: "Develop a tangible project to showcase your new skills.", icon: <Code size={24} /> },
            { n: "04", t: "Certification", d: "Earn a formal Online certificate recognized globally.", icon: <Trophy size={24} /> }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 200 }}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-brand-blue mb-8 relative group-hover:border-brand-blue group-hover:scale-110 transition-all shadow-lg group-hover:shadow-brand-blue/30 group-hover:rotate-[360deg] duration-700">
                {item.icon}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="absolute top-0 right-0 w-8 h-8 rounded-full bg-brand-blue text-white text-[10px] font-black flex items-center justify-center shadow-md"
                >
                  {item.n}
                </motion.div>
              </div>
              <h4 className="font-black text-brand-dark uppercase text-sm mb-3 group-hover:text-brand-blue transition-colors">{item.t}</h4>
              <p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="bg-brand-dark py-20 px-4 overflow-hidden">
     <div className="max-w-7xl mx-auto bg-brand-blue rounded-[3rem] p-12 md:p-24 text-center text-white relative group overflow-hidden">
        {/* Background Animation */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
           transition={{ duration: 5, repeat: Infinity }}
           className="absolute -top-1/2 -left-1/4 w-full h-full bg-white rounded-full blur-[120px]" 
        />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-10">
            SUCCESS BEYOND <br/>THE SCREEN
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-medium">
             Join our industry-leading coding academy where curiosity meets professional-grade skills. Get a head start on the most in-demand career paths of the 21st century.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="px-12 py-5 bg-brand-dark text-white rounded-md font-black text-sm hover:translate-y-[-4px] transition-all uppercase tracking-[0.2em] shadow-2xl">
              ENROLL NOW
            </Link>
            <Link to="/courses" className="px-12 py-5 bg-white text-brand-blue rounded-md font-black text-sm hover:translate-y-[-4px] transition-all uppercase tracking-[0.2em] shadow-2xl">
              LEARN MORE
            </Link>
          </div>
        </div>
     </div>
  </section>
);

export default function Home() {
  return (
    <div className="overflow-x-hidden pt-16">
      <Hero />
      <Ticker />
      <CoursesSec />
      <ProcessSec />
      <FinalCTA />
    </div>
  );
}
