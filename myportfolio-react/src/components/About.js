import React from 'react';
import { Code2, MessageSquare, CheckCircle2 } from 'lucide-react';


const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 dark:bg-slate-950 light-mode:bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo & Quick Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              <div className="relative rounded-3xl bg-slate-900 dark:bg-slate-900 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 overflow-hidden shadow-2xl p-4">
                <img
                  src="img/testimonial-2.jpeg"
                  alt="Joshua Olaoluwa Idowu"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-md"
                />
                
                <div className="pt-6 px-2 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs text-slate-400">Full Name</span>
                    <span className="text-sm font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">Joshua Olaoluwa Idowu</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs text-slate-400">Primary Role</span>
                    <span className="text-xs font-semibold text-emerald-400">Founder & Software Engineer</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs text-slate-400">Flagship Product</span>
                    <span className="text-xs font-bold text-blue-400">Vendora (60+ Active Users)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Degree</span>
                    <span className="text-xs text-slate-300">B.Sc. Mass Communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
                Behind the Code
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 dark:text-slate-100 light-mode:text-slate-900 tracking-tight">
                Engineering Software with <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Product Purpose</span>
              </h2>
            </div>

            <p className="text-base text-slate-300 dark:text-slate-300 light-mode:text-slate-700 leading-relaxed">
              I am a <strong>Software Engineer, Product Builder, and the Founder of Vendora</strong>. My focus lies at the intersection of technical software development, product architecture, and user-centric problem solving.
            </p>

            <p className="text-base text-slate-300 dark:text-slate-300 light-mode:text-slate-700 leading-relaxed">
              Rather than viewing code as abstract algorithms, I view software as a tool to solve tangible operational bottlenecks. This approach led me to conceptualize, engineer, and launch <strong>Vendora</strong>—a business management platform that gained <strong>60 active SME business users in its very first month</strong>.
            </p>

            {/* Strategic Advantage Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 shadow-md space-y-2">
                <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm">
                  <Code2 className="w-4 h-4" />
                  <span>Technical Execution</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Proficient in full-stack engineering with Python (FastAPI/Django), React, SQL databases, multi-tenancy, and cloud infrastructure.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 shadow-md space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                  <MessageSquare className="w-4 h-4" />
                  <span>Mass Communication Advantage</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  My Mass Communication background from Caleb University gives me deep user empathy, intuitive UI clarity, and effective team collaboration.
                </p>
              </div>
            </div>

            {/* Key Takeaways Checklist */}
            <div className="pt-4 space-y-2 border-t border-slate-800 dark:border-slate-800 light-mode:border-slate-200">
              {[
                'Proven track record of turning problem statements into live, user-adopted SaaS software.',
                'Strong full-stack technical foundation paired with clear product communication.',
                'Focused on clean architecture, database integrity, security, and performance.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light-mode:text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;