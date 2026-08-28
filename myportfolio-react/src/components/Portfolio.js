import React, { useState } from 'react';
import { CheckCircle, ArrowUpRight, X } from 'lucide-react';



const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'mylawyer',
      title: 'MYLAWYEr',
      subtitle: 'Legal Technology & Assistance Platform',
      category: 'Full-Stack Software Engineering',
      date: '2024',
      badge: 'Legal Tech',
      image: 'img/work-1.jpg',
      summary: 'A web platform engineered to bridge the gap between individuals and professional legal representation through streamlined matching and consultation tools.',
      description: 'MYLAWYEr is a web application designed to bridge the gap between individuals and professional legal assistance. It features an intuitive user interface and exceptional usability, empowering users to access legal expertise seamlessly. The solution was designed to improve access to justice and simplify legal consultations.',
      techStack: ['Python', 'JavaScript', 'SQL', 'Bootstrap/CSS', 'Database Design', 'REST Services'],
      keyFeatures: [
        'User-centered lawyer discovery and consultation booking',
        'Relational database architecture for user and case data integrity',
        'Secure multi-tier role access for clients and legal professionals',
        'Intuitive GUI optimized for non-technical users'
      ]
    }
  ];

  return (
    <section id="work" className="py-24 bg-slate-900/60 dark:bg-slate-900/60 light-mode:bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
            Selected Work & Case Studies
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 dark:text-slate-100 light-mode:text-slate-900 tracking-tight">
            Curated <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light-mode:text-slate-700">
            Engineered solutions demonstrating software architecture, UI design, and problem solving.
          </p>
        </div>

        {/* Projects Display Grid */}
        <div className="max-w-4xl mx-auto space-y-12">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-slate-900 dark:bg-slate-900 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:border-slate-700 transition-all"
            >
              {/* Left Image Preview */}
              <div className="lg:col-span-5 relative overflow-hidden bg-slate-950 min-h-[260px] flex items-center justify-center p-6">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                    {proj.badge}
                  </span>
                </div>
              </div>

              {/* Right Details */}
              <div className="lg:col-span-7 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-400">{proj.category}</span>
                    <span className="text-xs font-mono text-slate-500">{proj.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">
                    {proj.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-400">{proj.subtitle}</div>

                  <p className="text-sm text-slate-300 dark:text-slate-300 light-mode:text-slate-700 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Tech Stack</span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 dark:bg-slate-950 light-mode:bg-slate-100 text-slate-300 dark:text-slate-300 light-mode:text-slate-800 text-xs font-medium border border-slate-800 dark:border-slate-800 light-mode:border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center space-x-2 shadow-md"
                  >
                    <span>View Project Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Detailed View */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-2xl w-full rounded-3xl bg-slate-900 dark:bg-slate-900 light-mode:bg-white border border-slate-800 p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{selectedProject.category}</span>
              <h3 className="text-3xl font-extrabold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">{selectedProject.title}</h3>
              <p className="text-xs text-slate-400">{selectedProject.subtitle}</p>
            </div>

            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-2xl border border-slate-800" />

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-200">Overview & Purpose</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.description}</p>

              <h4 className="text-sm font-bold text-slate-200 pt-2">Key Engineering Capabilities</h4>
              <div className="space-y-2">
                {selectedProject.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-3 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Portfolio;