import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Users, Rocket, Trophy, Play, CheckCircle2, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Hero = () => (
  <section className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-google-blue/5 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -right-24 w-80 h-80 bg-google-yellow/5 rounded-full blur-3xl"
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-google-blue/10 text-google-blue text-sm font-bold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-google-blue"></span>
            </span>
            Admissions Open for 2026 Batch
          </motion.span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-google-dark leading-[1.1] mb-8">
            Master <span className="text-google-blue">Real-World</span> Coding Skills
          </h1>
          <p className="text-lg md:text-xl text-google-gray mb-12 leading-relaxed max-w-xl">
            Join our industry-level coding academy where students learn through real coding practice, live mentorship, and project-based learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link to="/contact" className="btn-primary group flex items-center justify-center gap-2 text-base sm:text-lg py-3 sm:py-4 px-8 sm:px-10">
              Start Learning 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </Link>
            <Link to="/coding-test" className="btn-outline flex items-center justify-center gap-2 text-base sm:text-lg py-3 sm:py-4 px-8 sm:px-10">
              Take Live Coding Test <Code size={20} />
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white p-2">
            <img 
              src="https://kidsparkeducation.org/hubfs/Featured%20Image%20-%20What%20is%20Coding_.jpg" 
              alt="Coding Class" 
              className="w-full h-auto rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-google flex items-center gap-4 z-20"
          >
            <div className="bg-google-green p-3 rounded-xl shadow-lg shadow-green-100">
              <Users className="text-white" />
            </div>
            <div>
              <p className="font-bold text-google-dark text-lg leading-none">500+ Students</p>
              <p className="text-sm text-google-gray mt-1">Learning daily</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-google flex items-center gap-4 z-20"
          >
            <div className="bg-google-yellow p-3 rounded-xl shadow-lg shadow-yellow-100">
              <Trophy className="text-white" />
            </div>
            <div>
              <p className="font-bold text-google-dark text-lg leading-none">98% Success</p>
              <p className="text-sm text-google-gray mt-1">Placement rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Showcase = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-google-dark mb-6">Academy Environment</h2>
        <p className="text-google-gray max-w-2xl mx-auto text-lg">
          Our classrooms simulate a real software development environment where students collaborate, build projects, and solve real coding challenges.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { img: "https://media.licdn.com/dms/image/v2/C5612AQFQ_9qZNjTw5w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1624640033126?e=2147483647&t=Ga1cswFKSP6hL308qzKW0qT3f4fpkPruCrDemwOqdmU&v=beta", title: "Collaborative Labs", color: "border-google-blue" },
          { img: "https://cdn.prod.website-files.com/618d852d383de946ce0e3fa5/67fe0fe2fa1a399a75a9e853_IMG_0957.JPG", title: "Mentor Support", color: "border-google-red" },
          { img: "https://resources.finalsite.net/images/f_auto%2Cq_auto%2Ct_image_size_2/v1569520149/marlborough/spuqptbjgx01pkknl1jy/CodingClass-342.jpg", title: "Project Discussions", color: "border-google-yellow" },
          { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop", title: "Real-world Setup", color: "border-google-green" }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn("google-card overflow-hidden border-b-4", item.color)}
          >
            <div className="relative h-56 overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-google-dark text-lg">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-24 flex justify-center"
      >
        <div className="relative group cursor-pointer w-full max-w-5xl rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
            alt="Video Tour" 
            className="w-full h-[20rem] sm:h-[30rem] object-cover brightness-75 group-hover:brightness-50 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-google-blue p-6 sm:p-8 rounded-full mb-4 sm:mb-6 shadow-2xl shadow-blue-500/50"
            >
              <Play fill="white" className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Watch Academy Tour</h3>
            <p className="text-base sm:text-lg opacity-80 text-center">Experience the vibe in 60 seconds</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Curriculum = () => (
  <section className="py-32 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-google-dark mb-6">Structured Curriculum</h2>
        <p className="text-google-gray text-lg">Master technologies that companies actually use.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            level: "Beginner",
            color: "border-google-blue",
            icon: <Code className="text-google-blue" />,
            topics: ["Programming Fundamentals", "Python Basics", "Logic Building", "Git & GitHub"]
          },
          {
            level: "Intermediate",
            color: "border-google-yellow",
            icon: <Rocket className="text-google-yellow" />,
            topics: ["Web Development (React)", "Database Design (SQL/NoSQL)", "APIs & Integration", "State Management"]
          },
          {
            level: "Advanced",
            color: "border-google-green",
            icon: <Trophy className="text-google-green" />,
            topics: ["System Design", "Cloud Deployment (AWS/GCP)", "Real-world Projects", "Microservices Architecture"]
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={cn("google-card p-10 border-t-8", item.color)}
          >
            <div className="mb-8 flex justify-between items-center">
              <h3 className="text-3xl font-bold">{item.level}</h3>
              <div className="p-3 bg-gray-50 rounded-2xl">{item.icon}</div>
            </div>
            <ul className="space-y-6">
              {item.topics.map((topic, j) => (
                <li key={j} className="flex items-center gap-4 text-google-gray text-lg">
                  <CheckCircle2 className="text-google-green w-6 h-6 flex-shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="py-32 bg-google-dark text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-google-blue rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-google-red rounded-full blur-[120px]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {[
          { icon: <Code className="w-10 h-10" />, title: "Real Coding Practice", desc: "Students spend 70% of their time writing actual code, not just watching videos." },
          { icon: <Users className="w-10 h-10" />, title: "Industry Mentors", desc: "Learn directly from senior engineers working at top tech companies." },
          { icon: <Rocket className="w-10 h-10" />, title: "Project-Based", desc: "Build a professional portfolio with real-world applications and tools." },
          { icon: <Trophy className="w-10 h-10" />, title: "Weekly Challenges", desc: "Participate in coding contests and hackathons to sharpen your skills." }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center group"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-white/10 w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-google-blue group-hover:bg-google-blue group-hover:text-white transition-all duration-300"
            >
              {item.icon}
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Outcomes = () => (
  <section className="py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-google-dark mb-6">Student Outcomes</h2>
        <p className="text-google-gray text-lg">Real results from our graduates.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          {
            title: "E-commerce Platform",
            desc: "A full-stack React & Node.js application with Stripe integration and real-time inventory.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2066&auto=format&fit=crop"
          },
          {
            title: "AI Chat Assistant",
            desc: "Real-time chat application powered by Gemini API with multimodal support.",
            tech: ["Python", "WebSocket", "React", "Gemini"],
            img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2062&auto=format&fit=crop"
          }
        ].map((project, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="google-card overflow-hidden group"
          >
            <div className="relative overflow-hidden h-80">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-google-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white text-google-dark p-4 rounded-full hover:bg-google-blue hover:text-white transition-colors shadow-2xl">
                  <Github size={28} />
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white text-google-dark p-4 rounded-full hover:bg-google-blue hover:text-white transition-colors shadow-2xl">
                  <ExternalLink size={28} />
                </motion.button>
              </div>
            </div>
            <div className="p-10">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-google-gray text-lg mb-8 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, j) => (
                  <span key={j} className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-bold text-google-gray">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-google-blue rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 md:p-24 text-center text-white relative overflow-hidden shadow-[0_30px_100px_rgba(66,133,244,0.3)]"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl" />
        
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 relative z-10 leading-tight">Ready to Start Your Journey?</h2>
        <p className="text-lg md:text-2xl opacity-90 mb-8 sm:mb-12 max-w-3xl mx-auto relative z-10 leading-relaxed">
          Admissions are open for the 2026 batch. Limited seats available to ensure personalized mentorship.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 relative z-10">
          <Link to="/contact" className="bg-white text-google-blue px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-2xl">
            Apply Now
          </Link>
          <Link to="/coding-test" className="bg-transparent border-2 border-white text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
            Try Coding Test
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Showcase />
      <Curriculum />
      <WhyUs />
      <Outcomes />
      <section className="py-32 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Test Your Skills Instantly</h2>
            <p className="text-google-gray text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience our browser-based coding simulator. Solve real problems and get instant feedback on your logic.
            </p>
            <Link to="/coding-test" className="btn-primary inline-flex items-center gap-3 text-xl py-5 px-12">
              Start Coding Test <Code size={24} />
            </Link>
          </motion.div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-google-blue/10 to-transparent -translate-y-1/2" />
      </section>
      <CTA />
    </div>
  );
}
