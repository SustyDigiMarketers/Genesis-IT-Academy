import React from 'react';
import { motion } from 'motion/react';
import { FileText, ShieldCheck, CreditCard, Scale, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Terms() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #00B4D8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-cyan-100/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        {/* Animated HUD line */}
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-brand-blue/10 rounded-2xl mb-8 shadow-xl shadow-brand-blue/5 border border-brand-blue/10">
            <Scale className="text-brand-blue w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-brand-dark tracking-tighter uppercase mb-8 leading-none">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Conditions</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto border-l-2 border-brand-blue/20 pl-8 text-left">
            Welcome to our platform. By enrolling in our courses, you agree to the following terms and conditions designed to ensure a professional and effective learning environment for all students.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-white/70 backdrop-blur-3xl border border-slate-100 rounded-[3rem] shadow-2xl shadow-slate-200 relative group overflow-hidden hover:border-brand-blue/30 transition-all duration-500"
          >
            {/* Metadata Label */}
            <div className="absolute top-6 right-10 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] pointer-events-none">
              SEC_PROTOCOL // v2.4
            </div>

            <div className="absolute -top-4 -left-4 w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center shadow-lg text-white font-black">01</div>

            {/* HUD Corner Deco */}
            <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-slate-100 group-hover:border-brand-blue group-hover:w-6 group-hover:h-6 transition-all" />

            <h3 className="text-2xl font-black text-brand-dark uppercase mb-8 flex items-center gap-4">
              <ShieldCheck className="text-brand-blue" size={28} />
              Course Enrollment and Eligibility
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-white transition-colors cursor-default">
                <p className="text-brand-blue font-black text-sm uppercase tracking-[0.2em] mb-4">Age Requirements:</p>
                <p className="text-slate-500 text-lg leading-relaxed font-medium italic">Courses are strictly categorized by age groups to ensure curriculum suitability: AI from the scratch is for ages 8 to 11, while Python and Advanced Robotics courses are designed for ages 11 to 17.</p>
              </div>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-white/70 backdrop-blur-3xl border border-slate-100 rounded-[3rem] shadow-2xl shadow-slate-200 relative group overflow-hidden hover:border-brand-blue/30 transition-all duration-500"
          >
            <div className="absolute top-6 left-10 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] pointer-events-none">
              DATA_OWNERSHIP // CRYPTO_SIGN
            </div>
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center shadow-lg text-white font-black">02</div>

            <h3 className="text-2xl font-black text-brand-dark uppercase mb-10 flex items-center gap-4">
              <FileText className="text-brand-blue" size={28} />
              Curriculum and Projects
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Project Ownership", desc: 'Students retain ownership of the logic and code created during projects such as the "Self-Driving Car" or "Smart Home Automation".' },
                { title: "Completion", desc: "To receive a course certificate, students must successfully complete their designated Projects." },
                { title: "Content Updates", desc: "We reserve the right to modify curriculum modules to stay current with IT industry standards, such as updating Machine Learning or OpenCV libraries" }
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex gap-4 p-6 rounded-2xl hover:bg-slate-50 transition-all group/item border border-transparent hover:border-slate-100"
                >
                  <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-brand-dark font-black text-sm uppercase tracking-widest mb-2 group-hover/item:text-brand-blue transition-colors">{item.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-white/70 backdrop-blur-3xl border border-slate-100 rounded-[3rem] shadow-2xl shadow-slate-200 relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-blue/5 rounded-full blur-[80px]" />
            <h3 className="text-2xl font-black text-brand-dark uppercase mb-8 tracking-tight">3. Privacy and Safety</h3>
            <div className="space-y-6 text-left">
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-blue/30 transition-all"
              >
                <p className="text-brand-blue font-black text-sm uppercase tracking-widest mb-3">Video Sensing:</p>
                <p className="text-slate-600 text-base leading-relaxed font-medium">Some AI modules involve video sensing and face recognition technologies for educational purposes only.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-blue/30 transition-all"
              >
                <p className="text-brand-blue font-black text-sm uppercase tracking-widest mb-3">Data Security:</p>
                <p className="text-slate-600 text-base leading-relaxed font-medium">We do not store biometric data from AI exercises; all recognition tasks are performed locally within the learning environment for training purposes.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pt-12"
          >
            <h3 className="text-3xl md:text-5xl font-black text-brand-dark uppercase mb-8 flex items-center gap-6">
              <CreditCard className="text-brand-blue" size={36} />
              4. Payment Terms
            </h3>
            <p className="text-slate-500 mb-12 leading-relaxed font-bold border-l-4 border-brand-blue pl-6 text-lg">To ensure our industry-expert-led courses remain accessible, we offer flexible payment structures. All fees must be settled according to one of the following plans to maintain active enrolment and access to our learning platforms:</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "1. Full Payment (Standard)",
                  features: [
                    "Discounted Rate: Pay the full course fee upfront to secure the best available rate.",
                    "Immediate Access: Receive instant access to all curriculum materials, including project guides for tracks like AI with Scratch or Python Essentials.",
                    "Due Date: Must be completed at least 48 hours before the first scheduled session."
                  ],
                  accent: "bg-brand-blue"
                },
                {
                  title: "2. Two-Installment Plan",
                  features: [
                    "First Installment: 50% of the total fee is due upon registration to secure the student's seat.",
                    "Second Installment: The remaining 50% is due at the midpoint of the course.",
                    "Flexibility: Ideal for parents who prefer to split costs across two months."
                  ],
                  accent: "bg-brand-dark"
                },
                {
                  title: "3. Three-Installment Plan",
                  features: [
                    "Initial Deposit: 40% due at registration.",
                    "Second Payment: 30% due after the first 30 days of the course.",
                    "Final Payment: 30% due before the commencement of the final modules and Projects.",
                    "Suitability: Designed for our more comprehensive tracks, such as the Advanced Robotics or AI & Game Development courses."
                  ],
                  accent: "bg-cyan-600"
                }
              ].map((plan, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200 hover:border-brand-blue/40 transition-all cursor-default relative group"
                >
                  <div className={`w-16 h-1.5 ${plan.accent} rounded-full mb-8 shadow-lg`} />
                  <h4 className="font-black text-brand-dark uppercase text-base mb-8 tracking-widest group-hover:text-brand-blue transition-colors">{plan.title}</h4>
                  <ul className="space-y-6">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex gap-3 text-[11px] font-black text-slate-400 uppercase tracking-[0.1em] leading-relaxed">
                        <ArrowRight size={16} className="text-brand-blue mt-1 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="bg-slate-50 p-10 md:p-14 rounded-[3.5rem] border border-slate-100 relative overflow-hidden group shadow-inner text-left">
              <motion.div animate={{ left: ["-100%", "100%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 h-1.5 bg-brand-blue w-full shadow-[0_0_20px_#00B4D8]" />
              <h4 className="text-2xl font-black text-brand-dark uppercase mb-10 tracking-tight">Important Billing Policies</h4>
              <ul className="space-y-8">
                {[
                  { t: "Late Payments", d: "Failure to meet instalment deadlines may result in a temporary suspension of access to live sessions and the learning portal." },
                  { t: "Certification", d: "Certificates of Completion and final project showcases (like the Self-Driving Car or IoT integration projects) will only be issued once the total balance is cleared." },
                  { t: "Refunds", d: "Please contact our Admin team for specific refund eligibility windows prior to the course start date." }
                ].map((policy, i) => (
                  <li key={i} className="flex gap-6 group">
                    <div className="w-3 h-3 rounded-full bg-brand-blue mt-2 shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_10px_#00B4D8]" />
                    <div>
                      <p className="text-brand-dark font-black text-base uppercase mb-2 tracking-widest group-hover:text-brand-blue transition-colors">{policy.t}</p>
                      <p className="text-slate-500 text-lg leading-relaxed font-medium">{policy.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
