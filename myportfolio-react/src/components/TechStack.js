import React from 'react';
import { Code2, Server, Layout, Database, Cloud, Terminal, CheckCircle2 } from 'lucide-react';

const TechStack = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'text-blue-400',
      skills: ['Python', 'JavaScript (ES6+)', 'SQL', 'HTML5 & CSS3']
    },
    {
      title: 'Backend Engineering',
      icon: Server,
      color: 'text-emerald-400',
      skills: ['FastAPI', 'Django', 'Flask', 'RESTful APIs', 'JWT Auth & Security']
    },
    {
      title: 'Frontend Development',
      icon: Layout,
      color: 'text-indigo-400',
      skills: ['React.js', 'Vue.js', 'Tailwind CSS', 'Responsive UI/UX Design']
    },
    {
      title: 'Database Systems',
      icon: Database,
      color: 'text-purple-400',
      skills: ['PostgreSQL', 'MySQL', 'Relational Database Design', 'Multi-tenant Schemas']
    },
    {
      title: 'DevOps & Cloud Tools',
      icon: Cloud,
      color: 'text-amber-400',
      skills: ['Git & GitHub', 'Docker', 'Render Deployment', 'Vercel', 'CI/CD Pipelines']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/40 dark:bg-slate-900/40 light-mode:bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20">
            Production-Ready Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 dark:text-slate-100 light-mode:text-slate-900 tracking-tight">
            Technical <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light-mode:text-slate-700">
            Technologies and frameworks I utilize to build performant, maintainable full-stack software.
          </p>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 shadow-xl hover:border-slate-700 transition-all"
              >
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800 dark:border-slate-800 light-mode:border-slate-100">
                  <div className="p-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light-mode:bg-slate-100 border border-slate-800 dark:border-slate-800 light-mode:border-slate-200">
                    <Icon className={`w-6 h-6 ${cat.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light-mode:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light-mode:border-slate-200 text-sm font-medium text-slate-200 dark:text-slate-200 light-mode:text-slate-800">
                      <span className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{skill}</span>
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">
                        Active
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Core Highlights Summary Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Terminal className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-bold text-slate-100">Development Philosophy</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                I prioritize clean architecture, strict database integrity, modular frontend components, and lightweight dependencies to deliver fast, reliable user experiences.
              </p>
            </div>
            <div className="pt-4 border-t border-indigo-500/20 text-xs font-mono text-emerald-400 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Python &bull; FastAPI &bull; React &bull; SQL</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechStack;
