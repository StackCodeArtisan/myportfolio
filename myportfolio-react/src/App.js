import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import VendoraCaseStudy from './components/VendoraCaseStudy';
import Capabilities from './components/Capabilities';
import TechStack from './components/TechStack';
import ExperienceTimeline from './components/ExperienceTimeline';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ContactFooter from './components/ContactFooter';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('light-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 light-mode:bg-slate-50 text-slate-100 dark:text-slate-100 light-mode:text-slate-900 font-sans transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} onToggleTheme={handleToggleTheme} />
      <main>
        <Intro />
        <VendoraCaseStudy />
        <Capabilities />
        <TechStack />
        <ExperienceTimeline />
        <Portfolio />
        <About />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
