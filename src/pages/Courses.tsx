import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Terminal, 
  Clock, 
  ArrowRight, 
  Code2, 
  Rocket, 
  Activity,
  CircuitBoard,
  SquareCode,
  Braces,
  Binary
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, index }: { course: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? 15 : -15 }}
    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
    whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 20 }}
    className="group relative bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-brand-blue/30 transition-all duration-500 perspective-1000"
  >
    {/* Animated background patterns */}
    <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
       <div className="absolute inset-0 bg-[radial-gradient(#00B4D8_1px,transparent_1px)] bg-[size:20px_20px]" />
    </div>

    {/* Decorative Accent */}
    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/5 rounded-full translate-x-10 -translate-y-10 group-hover:bg-brand-blue/20 transition-colors blur-3xl" />
    
    <div className="p-8 md:p-12 relative z-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 1 }}
            className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-inner"
          >
            {course.icon}
          </motion.div>
          <div>
            <p className="text-brand-blue text-[10px] font-black uppercase tracking-[0.2em] mb-1">{course.age}</p>
            <h3 className="text-2xl md:text-3xl font-black text-brand-dark tracking-tighter uppercase">{course.title}</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-200">
          <Clock size={14} className="text-brand-blue" />
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{course.duration}</span>
        </div>
      </div>

      <div className="space-y-4 mb-10">
        {course.points.map((point: string, i: number) => (
          <motion.div 
            key={i} 
            whileHover={{ x: 10 }}
            className="flex gap-4 items-start group/item cursor-default"
          >
            <div className="mt-1.5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue group-hover/item:scale-150 transition-transform shadow-[0_0_8px_rgba(0,180,216,0.3)]" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed group-hover/item:text-brand-dark transition-colors">
              <span className="text-brand-dark font-bold">{point.split(':')[0]}:</span> {point.split(':')[1]}
            </p>
          </motion.div>
        ))}
      </div>

      <Link 
        to="/contact" 
        className="btn-primary !rounded-md !px-8 !py-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:shadow-brand-blue/50"
      >
        ENROLL IN MODULE <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </motion.div>
);

export default function Courses() {
  const courses = [
    {
      title: "AI from the scratch",
      age: "Ages 8 – 11",
      icon: <Cpu size={32} />,
      duration: "3 Months",
      points: [
        "From Scratch to AI: Master the basics of block-based coding and progress to advanced Artificial Intelligence.",
        "Game Development: Build exciting projects like Mario Dash, Shark Surge, and the classic Snake Game.",
        "Smart Technology: Explore real-world AI applications including Speech Recognition, Home Automation, and Machine Learning.",
        "Interactive Innovation: Create video-sensing adventures and gesture-based gameplay using cutting-edge AI tools."
      ]
    },
    {
      title: "Python",
      age: "Ages 11 – 17",
      icon: <Terminal size={32} />,
      duration: "3 Months",
      points: [
        "Core Programming: Learn the industry-standard language, focusing on operators, data types, and complex decision-making.",
        "Logic & Loops: Master conditional statements and advanced loops to build efficient, powerful programs.",
        "Data Structures: Understand how to organize and manipulate information using Python Lists, Tuples, and Dictionaries.",
        "Functional Coding: Advance your skills by creating custom functions and utilizing professional Python packages."
      ]
    },
    {
      title: "Robotics",
      age: "Ages 11 – 17",
      icon: <CircuitBoard size={32} />,
      duration: "3 Months",
      points: [
        "Computer Vision: Dive deep into Image Processing and OpenCV for professional-grade object tracking.",
        "Advanced AI: Build sophisticated systems for face detection, recognition, and emotion tracking.",
        "Robotics & IoT: Interface with Arduino hardware to create smart systems like Automatic Street Lights and Fire Alarms.",
        "Professional Projects: Complete a major Capstone Project to showcase your ability to solve real-world tech challenges."
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background Decor & Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Floating Icons */}
        {[SquareCode, Braces, Binary, Code2].map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.1, 0.05],
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 45, 0]
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 3 
            }}
            className="absolute text-brand-blue"
            style={{ 
              top: `${20 + i * 20}%`, 
              left: `${10 + i * 25}%`,
            }}
          >
            <Icon size={40 + i * 20} />
          </motion.div>
        ))}

        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-cyan-100/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-brand-blue font-black tracking-[0.3em] text-[10px] uppercase mb-6 block"
          >
            Professional Excellence
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-dark tracking-tighter uppercase mb-8 leading-none">
            OUR EXPERT-LED <span className="text-brand-blue">COURSES</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
            We offer specialized tracks designed to transition students from digital consumers to digital creators. Every course is taught by qualified professionals currently working in the IT industry, ensuring your child learns the most relevant, up-to-date skills.
          </p>
        </motion.div>

        {/* Courses List */}
        <div className="space-y-12 mb-32">
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course} index={idx} />
          ))}
        </div>

        {/* Why Learn with Us? */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase mb-4">WHY LEARN <span className="text-brand-blue">WITH US?</span></h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Code2 className="w-8 h-8" />, 
                title: "Industry-Standard", 
                desc: "We use the same tools professionals use, from Python to Arduino hardware suites." 
              },
              { 
                icon: <Rocket className="w-8 h-8" />, 
                title: "Hands-on Learning", 
                desc: "Every lesson is project-based, ensuring students 'learn by doing' with real outcomes." 
              },
              { 
                icon: <Activity className="w-8 h-8" />, 
                title: "Future-Proof Skills", 
                desc: "We cover the latest in Self-Driving technology, Image Processing, and IoT integration." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:border-brand-blue/20 transition-all text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-black text-brand-dark text-sm uppercase mb-3 tracking-widest">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-600 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-brand-dark p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,180,216,0.3)]"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,180,216,0.2),transparent)]" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-10 leading-none">READY TO <br/>UPGRADE YOUR SKILLS?</h2>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-blue text-white px-12 py-5 rounded-md font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Join our Advanced Coding courses <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
