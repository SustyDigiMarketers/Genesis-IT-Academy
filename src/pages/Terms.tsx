import React from 'react';
import { motion } from 'motion/react';
import { FileText, ShieldCheck, CreditCard, Scale, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Terms() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-cyan-100/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-brand-blue/10 rounded-full mb-6">
            <Scale className="text-brand-blue w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter uppercase mb-6">Terms and <span className="text-brand-blue">Conditions</span></h1>
          <p className="text-slate-600 text-xl leading-relaxed font-medium">
            Welcome to our platform. By enrolling in our courses, you agree to the following terms and conditions designed to ensure a professional and effective learning environment for all students.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-slate-50 border border-slate-100 rounded-[2.5rem] relative group overflow-hidden"
          >
            {/* Metadata Label */}
            <div className="absolute top-4 right-8 text-[10px] font-black text-slate-300 uppercase tracking-widest pointer-events-none">
              SEC_PROTOCOL // v2.4
            </div>
            
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-blue font-black border border-slate-100">01</div>
            <h3 className="text-xl font-black text-brand-dark uppercase mb-6 flex items-center gap-4">
              <ShieldCheck className="text-brand-blue" size={24} />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Course Enrollment and Eligibility
              </motion.span>
            </h3>
            <div className="space-y-4">
               <div className="bg-white/50 p-6 rounded-2xl border border-white">
                 <p className="text-brand-dark font-black text-base uppercase mb-3">Age Requirements:</p>
                 <p className="text-slate-700 text-base leading-relaxed italic">Courses are strictly categorized by age groups to ensure curriculum suitability: AI from the scratch is for ages 8 to 11, while Python and Advanced Robotics courses are designed for ages 11 to 17.</p>
               </div>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="p-8 md:p-12 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl relative group overflow-hidden"
          >
            <div className="absolute top-4 left-8 text-[10px] font-black text-slate-200 uppercase tracking-widest pointer-events-none">
              DATA_OWNERSHIP // CRYPTO_SIGN
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center shadow-lg text-white font-black">02</div>
            <h3 className="text-xl font-black text-brand-dark uppercase mb-8 flex items-center gap-4">
              <FileText className="text-brand-blue" size={24} />
              Curriculum and Projects
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Project Ownership", desc: "Students retain ownership of the logic and code created during projects such as the 'Self-Driving Car' or 'Smart Home Automation'." },
                { title: "Completion", desc: "To receive a course certificate, students must successfully complete their designated Projects." },
                { title: "Content Updates", desc: "We reserve the right to modify curriculum modules to stay current with IT industry standards, such as updating Machine Learning." }
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-brand-dark font-black text-sm uppercase mb-1">{item.title}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-slate-50 border border-slate-100 rounded-[2.5rem] relative overflow-hidden"
          >
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-2xl" />
            <h3 className="text-xl font-black text-brand-dark uppercase mb-6">3. Privacy and Safety</h3>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.01, x: 5 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <p className="text-brand-dark font-black text-base uppercase mb-3">Video Sensing:</p>
                <p className="text-slate-700 text-base leading-relaxed">Some AI modules involve video sensing and face recognition technologies for educational purposes only.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.01, x: 5 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <p className="text-brand-dark font-black text-base uppercase mb-3">Data Security:</p>
                <p className="text-slate-700 text-base leading-relaxed">We do not store biometric data from AI exercises; all recognition tasks are performed locally within the learning environment for training purposes.</p>
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
            <h3 className="text-2xl font-black text-brand-dark uppercase mb-8 flex items-center gap-4">
               <CreditCard className="text-brand-blue" size={28} />
               4. Payment Terms
            </h3>
            <p className="text-slate-600 mb-10 leading-relaxed font-bold">To ensure our industry-expert-led courses remain accessible, we offer flexible payment structures. All fees must be settled according to one of the following plans to maintain active enrolment and access to our learning platforms:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Full Payment",
                  features: ["Discounted Rate", "Immediate Access", "Best available rate upfront"],
                  accent: "bg-brand-blue"
                },
                {
                  title: "Two-Installment",
                  features: ["50% Registration deposit", "50% Mid-point payment", "Monthly flexibility"],
                  accent: "bg-brand-dark"
                },
                {
                  title: "Three-Installment",
                  features: ["40% Initial Deposit", "30% Monthly payments", "Final 30% project phase"],
                  accent: "bg-cyan-600"
                }
              ].map((plan, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-brand-blue/20 transition-all cursor-default"
                >
                  <div className={`w-12 h-1 ${plan.accent} rounded-full mb-6`} />
                  <h4 className="font-black text-brand-dark uppercase text-sm mb-6">{plan.title}</h4>
                  <ul className="space-y-4">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex gap-2 text-xs font-black text-slate-500 uppercase tracking-widest leading-relaxed">
                        <ArrowRight size={14} className="text-brand-blue mt-1 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="bg-brand-blue/5 p-8 md:p-12 rounded-[2.5rem] border border-brand-blue/10 relative overflow-hidden group">
               <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue/20" />
               <h4 className="text-lg font-black text-brand-dark uppercase mb-6 tracking-tight">Important Billing Policies</h4>
               <ul className="space-y-6">
                 {[
                   { t: "Late Payments", d: "Failure to meet instalment deadlines may result in a temporary suspension of access to live sessions." },
                   { t: "Certification", d: "Certificates of Completion and final projects will only be issued once the total balance is cleared." },
                   { t: "Refunds", d: "Please contact our Admin team for specific refund eligibility windows prior to the course start date." }
                 ].map((policy, i) => (
                   <li key={i} className="flex gap-4 group">
                     <div className="w-2 h-2 rounded-full bg-brand-blue mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                     <div>
                       <p className="text-brand-dark font-black text-sm uppercase mb-1 group-hover:text-brand-blue transition-colors">{policy.t}</p>
                       <p className="text-slate-700 text-base leading-relaxed font-medium">{policy.d}</p>
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
