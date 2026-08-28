import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';


const ExperienceTimeline = () => {
  const experiences = [
    {
      role: 'Founder & Lead Software Engineer',
      company: 'Vendora',
      period: '2026 – Present',
      highlightBadge: '60 Users in Month 1',
      description: 'Single-handedly architected, engineered, and launched Vendora—an all-in-one business management and CRM platform for SMEs.',
      responsibilities: [
        'Designed full-stack multi-tenant system architecture and database schema in PostgreSQL.',
        'Engineered high-performance RESTful APIs using Python and FastAPI with JWT authentication.',
        'Built dynamic frontend modules for POS checkout, inventory deductions, and automated invoicing.',
        'Integrated automated notifications and digital receipt generation via WhatsApp/email.',
        'Successfully onboarded 60 SMEs within the first 30 days of product launch.'
      ]
    },
    {
      role: 'Full-Stack Software Engineer',
      company: 'Freelance & Independent Contracts',
      period: '2024 – Present',
      description: 'Engineered web applications, custom digital solutions, and backend services for diverse clients and business operations.',
      responsibilities: [
        'Developed custom business applications tailored to client operational workflows.',
        'Built responsive web interfaces using React.js, Vue.js, and modern CSS frameworks.',
        'Designed relational database structures ensuring strict data integrity and query optimization.',
        'Managed application deployments on cloud platforms (Render, Vercel, Docker).'
      ]
    }
  ];

  const timelineMilestones = [
    {
      year: '2019',
      title: 'B.Sc. Mass Communication',
      institution: 'Caleb University',
      desc: 'Graduated with strong foundations in strategic communication, audience perception, and user messaging.'
    },
    {
      year: '2024',
      title: 'Full-Stack Web Engineering Certification',
      institution: 'Professional Engineering Training',
      desc: 'Mastered modern full-stack software development, software engineering principles, and database management.'
    },
    {
      year: '2024–2025',
      title: 'Professional Software Engineering',
      institution: 'Full-Stack Development & Client Projects',
      desc: 'Engineered web applications and legal technology tools, refining backend systems and database design.'
    },
    {
      year: '2026',
      title: 'Founded & Launched Vendora',
      institution: 'Production SaaS Launch',
      desc: 'Brought Vendora from initial problem discovery to live multi-tenant production software.'
    },
    {
      year: '2026 Milestone',
      title: '60 Users Acquired in Month 1',
      institution: 'Vendora SaaS Growth',
      desc: 'Achieved 60 active SME business users within the first 30 days of launch.'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 dark:bg-slate-950 light-mode:bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            Track Record & Progression
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 dark:text-slate-100 light-mode:text-slate-900 tracking-tight">
            Engineering <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light-mode:text-slate-700">
            From technical software engineering to product launch and user growth.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 shadow-xl relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800 dark:border-slate-800 light-mode:border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">
                      {exp.role}
                    </h3>
                    {exp.highlightBadge && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
                        🚀 {exp.highlightBadge}
                      </span>
                    )}
                  </div>
                  <div className="text-blue-400 font-semibold text-base flex items-center space-x-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-950 dark:bg-slate-950 light-mode:bg-slate-100 border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 text-xs font-semibold text-slate-300 dark:text-slate-300 light-mode:text-slate-700">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light-mode:text-slate-700 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light-mode:text-slate-500">Key Engineering Impact</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light-mode:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light-mode:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light-mode:text-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Progression */}
        <div className="pt-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">Career & Growth Journey</h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light-mode:text-slate-600 mt-1">A timeline of continuous learning, product building, and milestone execution.</p>
          </div>

          <div className="relative border-l-2 border-slate-800 dark:border-slate-800 light-mode:border-slate-300 ml-4 sm:ml-32 space-y-10">
            {timelineMilestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                {/* Year Marker on Left for Desktop */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-28 font-mono text-xs font-bold text-blue-400">
                  {m.year}
                </div>

                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 dark:bg-slate-950 light-mode:bg-white border-2 border-blue-500 group-hover:border-emerald-400 group-hover:scale-125 transition-all"></div>

                <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light-mode:bg-white border border-slate-800/80 dark:border-slate-800/80 light-mode:border-slate-200 shadow-md hover:border-slate-700 transition-all">
                  <div className="sm:hidden text-xs font-mono font-bold text-blue-400 mb-1">{m.year}</div>
                  <h4 className="text-lg font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">{m.title}</h4>
                  <div className="text-xs font-semibold text-emerald-400 mb-2">{m.institution}</div>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light-mode:text-slate-700 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceTimeline;
