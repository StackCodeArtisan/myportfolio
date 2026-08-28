import React from 'react';
import { Building2, Rocket, Server, Layout, Cpu, ArrowRight } from 'lucide-react';

const Capabilities = () => {
  const capabilities = [
    {
      icon: Building2,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
      title: 'Business Applications',
      description: 'Building software that helps SMEs and organizations manage operations, eliminate manual record-keeping, and make data-driven decisions.',
      examples: ['Inventory Systems', 'CRM Software', 'POS & Invoicing Tools']
    },
    {
      icon: Rocket,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
      title: 'SaaS Products',
      description: 'Designing and engineering scalable multi-tenant software products from initial concept and database design to live production launch.',
      examples: ['Multi-tenant Architectures', 'Subscription Platforms', 'User Onboarding Flows']
    },
    {
      icon: Server,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20',
      title: 'Backend Systems & APIs',
      description: 'Architecting fast RESTful APIs, multi-tenant database models, secure JWT authentication, and reliable server infrastructure using Python & SQL.',
      examples: ['FastAPI & Django', 'PostgreSQL Schema Design', 'JWT & RBAC Security']
    },
    {
      icon: Layout,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
      title: 'Full-Stack Engineering',
      description: 'Creating complete web products from interactive frontend interfaces to robust backend API integrations and responsive UI components.',
      examples: ['React & Vue.js', 'Tailwind CSS UI', 'State Management']
    },
    {
      icon: Cpu,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
      title: 'Automation & Integrations',
      description: 'Streamlining business workflows by integrating digital payment gateways, automated notifications (WhatsApp/Email), and third-party APIs.',
      examples: ['Payment Gateways', 'Notification Pipelines', 'Workflow Automation']
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-mesh-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
            Core Engineering Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 dark:text-slate-100 light-mode:text-slate-900 tracking-tight">
            What I <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light-mode:text-slate-700">
            Engineering real-world software solutions that combine product thinking, clean code, and measurable business impact.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 shadow-xl hover:border-slate-700 hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${cap.bg} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${cap.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-300 dark:text-slate-300 light-mode:text-slate-700 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 dark:border-slate-800 light-mode:border-slate-100 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light-mode:text-slate-500">Key Output</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.examples.map((ex, exIdx) => (
                      <span key={exIdx} className="text-xs px-2.5 py-1 rounded-lg bg-slate-950 dark:bg-slate-950 light-mode:bg-slate-100 text-slate-300 dark:text-slate-300 light-mode:text-slate-800 font-medium">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Callout Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 via-indigo-950/60 to-slate-900 border border-blue-500/30 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Engineering Philosophy</span>
              <h3 className="text-2xl font-bold text-slate-100">Product-Minded Engineering</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Code is a vehicle for solving problems. Every line of code should deliver user value, operational efficiency, and business growth.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center space-x-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Discuss a project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Capabilities;
