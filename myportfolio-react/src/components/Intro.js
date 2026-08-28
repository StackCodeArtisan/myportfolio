import React from 'react';
import { Rocket, ArrowRight, Mail, Users, Code, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';



const Intro = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-mesh-dark">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 shadow-xl shadow-blue-950/20 backdrop-blur-md">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200 dark:text-slate-200 light-mode:text-slate-800">
              Founder of <span className="text-emerald-400 font-bold">Vendora</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light-mode:text-slate-600 font-medium">
              60 Users Acquired in Month 1
            </span>
          </div>

          {/* Main Title & Identity */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light-mode:text-slate-900 leading-[1.1]">
              Joshua Olaoluwa <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Idowu</span>
            </h1>
            <p className="text-lg sm:text-2xl font-bold tracking-tight text-blue-400 dark:text-blue-400 light-mode:text-blue-600">
              Software Engineer &bull; Product Builder &bull; Founder of Vendora
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-xl text-slate-300 dark:text-slate-300 light-mode:text-slate-700 max-w-3xl mx-auto leading-relaxed font-normal">
            I don't just write code. I identify real-world business bottlenecks, architect scalable full-stack software solutions, launch them into production, and drive real user adoption.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#vendora"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-0.5"
            >
              <Rocket className="w-5 h-5 text-emerald-300" />
              <span>Explore Vendora Case Study</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#work"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 dark:bg-slate-900 light-mode:bg-white hover:bg-slate-800 dark:hover:bg-slate-800 light-mode:hover:bg-slate-100 text-slate-100 dark:text-slate-100 light-mode:text-slate-900 font-semibold text-base border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 transition-all flex items-center justify-center space-x-2"
            >
              <span>View Selected Work</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-4 flex items-center justify-center space-x-6 text-slate-400 dark:text-slate-400 light-mode:text-slate-600">
            <a href="https://github.com/StackCodeArtisan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/joshua-olaoluwa-b65009167/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="https://x.com/olajosh_" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="mailto:joshuaollaoluwa@gmail.com" className="hover:text-blue-400 transition-colors" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>


          {/* Metrics Grid / Social Proof Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="p-5 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light-mode:bg-white border border-slate-800/80 dark:border-slate-800/80 light-mode:border-slate-200 backdrop-blur-md shadow-lg">
              <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                <Users className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">1st Month</span>
              </div>
              <div className="text-3xl font-extrabold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">60+ Users</div>
              <p className="text-xs text-slate-400 dark:text-slate-400 light-mode:text-slate-600 mt-1">Vendora SaaS launch milestone</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light-mode:bg-white border border-slate-800/80 dark:border-slate-800/80 light-mode:border-slate-200 backdrop-blur-md shadow-lg">
              <div className="flex items-center space-x-2 text-blue-400 mb-1">
                <Rocket className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Live SaaS</span>
              </div>
              <div className="text-3xl font-extrabold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">Vendora</div>
              <p className="text-xs text-slate-400 dark:text-slate-400 light-mode:text-slate-600 mt-1">Built, launched & active</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light-mode:bg-white border border-slate-800/80 dark:border-slate-800/80 light-mode:border-slate-200 backdrop-blur-md shadow-lg">
              <div className="flex items-center space-x-2 text-indigo-400 mb-1">
                <Code className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Full-Stack</span>
              </div>
              <div className="text-3xl font-extrabold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">Python/JS</div>
              <p className="text-xs text-slate-400 dark:text-slate-400 light-mode:text-slate-600 mt-1">FastAPI, React, SQL, Cloud</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light-mode:bg-white border border-slate-800/80 dark:border-slate-800/80 light-mode:border-slate-200 backdrop-blur-md shadow-lg">
              <div className="flex items-center space-x-2 text-amber-400 mb-1">
                <Award className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Background</span>
              </div>
              <div className="text-3xl font-extrabold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">B.Sc. + Tech</div>
              <p className="text-xs text-slate-400 dark:text-slate-400 light-mode:text-slate-600 mt-1">Engr & Mass Communication</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;