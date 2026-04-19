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

const CourseCard = ({ course, index }: { course: any, index: number }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className="group relative bg-brand-dark/40 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-brand-blue/50"
    >
      {/* Dynamic Glow Effect */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{
          x: mousePos.x - 200,
          y: mousePos.y - 200,
        }}
      />

      {/* HUD Corners */}
      <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-brand-blue/20 group-hover:border-brand-blue group-hover:w-8 group-hover:h-8 transition-all duration-500" />
      <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-brand-blue/20 group-hover:border-brand-blue group-hover:w-8 group-hover:h-8 transition-all duration-500" />
      <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-brand-blue/20 group-hover:border-brand-blue group-hover:w-8 group-hover:h-8 transition-all duration-500" />
      <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-brand-blue/20 group-hover:border-brand-blue group-hover:w-8 group-hover:h-8 transition-all duration-500" />

      {/* Scanning Line */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent pointer-events-none"
      />

      <div className="p-10 md:p-14 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-20 h-20 rounded-2xl bg-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(0,180,216,0.2)]"
            >
              {course.icon}
            </motion.div>
            <div>
              <p className="text-brand-blue text-xs font-black uppercase tracking-[0.3em] mb-2">{course.age}</p>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">{course.title}</h3>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-5 py-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md"
          >
            <Clock size={16} className="text-brand-blue" />
            <span className="text-xs font-black text-white uppercase tracking-widest">{course.duration}</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
          {course.points.map((point: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start group/item"
            >
              <div className="mt-2 shrink-0">
                <div className="w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_10px_#00B4D8] group-hover/item:scale-150 transition-transform" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                <span className="text-brand-blue font-bold tracking-wide">{point.split(':')[0]}:</span> {point.split(':')[1]}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            to="/contact"
            className="group/btn relative inline-flex items-center gap-4 bg-brand-blue text-white px-10 py-5 rounded-md font-black text-sm uppercase tracking-[0.2em] overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
            ENROLL IN MODULE <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

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
        "Interactive Innovation: Create video-sensing adventures and gesture-based gameplay using cutting-edge AI tools.",
        "Course Duration: 3 Months."
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
        "Functional Coding: Advance your skills by creating custom functions and utilizing professional Python packages.",
        "Course Duration: 3 Months."
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
        "Professional Projects: Complete a major Capstone Project to showcase your ability to solve real-world tech challenges.",
        "Course Duration: 3 Months."
      ]
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/courses-bg.png"
          alt="Courses Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-brand-dark" />

        {/* Animated HUD Grid */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #00B4D8 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      {/* Decorative Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center max-w-4xl mx-auto mb-32 pt-32"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            className="h-1 bg-brand-blue mx-auto mb-8 shadow-[0_0_15px_#00B4D8]"
          />
          <motion.span
            className="text-brand-blue font-black tracking-[0.4em] text-xs uppercase mb-6 block"
          >
            Courses
          </motion.span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8 leading-none">
            Our Expert-Led <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400 drop-shadow-[0_0_15px_rgba(0,180,216,0.3)]">Courses</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto border-l-2 border-brand-blue/20 pl-8">
            We offer specialized tracks designed to transition students from digital consumers to digital creators. Every course is taught by qualified professionals currently working in the IT industry, ensuring your child learns the most relevant, up-to-date skills.
          </p>
        </motion.div>

        {/* Courses List */}
        <div className="space-y-16 mb-40">
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course} index={idx} />
          ))}
        </div>

        {/* Why Learn with Us? */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6">Why Learn <span className="text-brand-blue">with Us</span></h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-brand-blue to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Code2 className="w-10 h-10" />,
                title: "Industry-Standard Curriculum",
                desc: "We use the same tools professionals use, from Python to Arduino."
              },
              {
                icon: <Rocket className="w-10 h-10" />,
                title: "Hands-on Learning",
                desc: 'Every lesson is project-based, ensuring students "learn by doing".'
              },
              {
                icon: <Activity className="w-10 h-10" />,
                title: "Future-Proof Skills",
                desc: "We cover the latest in Self-Driving technology and IoT integration."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] hover:bg-white/10 hover:border-brand-blue/30 transition-all text-center group"
              >
                <div className="w-20 h-20 rounded-[1.5rem] bg-brand-blue/10 flex items-center justify-center text-brand-blue mx-auto mb-8 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-lg">
                  {item.icon}
                </div>
                <h4 className="font-black text-white text-base uppercase mb-4 tracking-widest">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-dark p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,180,216,0.3)]"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,180,216,0.2),transparent)]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-10 leading-none">READY TO <br />UPGRADE YOUR SKILLS?</h2>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-blue text-white px-12 py-5 rounded-md font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Join our Advanced Coding courses <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
