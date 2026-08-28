import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';


const Navbar = ({ isDarkMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Vendora', href: '#vendora', highlight: true },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Selected Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass-nav shadow-lg' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#home" className="group flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              JI
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900 text-base tracking-tight group-hover:text-blue-400 transition-colors">
                Joshua Idowu
              </span>
              <span className="text-xs text-emerald-400 font-medium flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Founder of Vendora</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 dark:bg-slate-900/60 light-mode:bg-white/80 p-1.5 rounded-full border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  link.highlight
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 hover:shadow-blue-600/50'
                    : 'text-slate-300 dark:text-slate-300 light-mode:text-slate-700 hover:text-white dark:hover:text-white light-mode:hover:text-slate-950 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light-mode:hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Theme Toggle */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 text-slate-300 hover:text-white dark:hover:text-white light-mode:text-slate-700 light-mode:hover:text-slate-950 transition-all shadow-sm hover:border-slate-700"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light-mode:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-800 light-mode:hover:bg-slate-200 text-slate-100 dark:text-slate-100 light-mode:text-slate-900 border border-slate-800 dark:border-slate-800 light-mode:border-slate-300 text-sm font-semibold transition-all shadow-sm hover:scale-[1.02]"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4 text-blue-400" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-slate-950/95 dark:bg-slate-950/95 light-mode:bg-white/95 backdrop-blur-xl border-b border-slate-800 dark:border-slate-800 light-mode:border-slate-200 py-6 px-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  link.highlight
                    ? 'bg-blue-600 text-white font-semibold text-center'
                    : 'text-slate-300 dark:text-slate-300 light-mode:text-slate-700 hover:bg-slate-900 dark:hover:bg-slate-900 light-mode:hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 dark:border-slate-800 light-mode:border-slate-200 flex flex-col space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-center shadow-lg shadow-blue-600/30"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;