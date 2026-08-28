import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';



const ContactFooter = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name.';
    if (!form.email.trim()) newErrors.email = 'Please enter your email.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Please enter a valid email address.';
    if (!form.message.trim()) newErrors.message = 'Please enter a message.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <footer id="contact" className="pt-24 pb-12 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Call to Action Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Have a problem worth <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">solving?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Whether you are looking for a software engineer for your team, launching a new SaaS product, or exploring technical collaboration, let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Form Column */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 text-slate-100 dark:text-slate-100 light-mode:text-slate-900">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light-mode:text-slate-700 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950 dark:bg-slate-950 light-mode:bg-slate-50 border ${
                    errors.name ? 'border-red-500' : 'border-slate-800 dark:border-slate-800 light-mode:border-slate-300'
                  } text-slate-100 dark:text-slate-100 light-mode:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors text-sm`}
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light-mode:text-slate-700 uppercase tracking-wider mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@company.com"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950 dark:bg-slate-950 light-mode:bg-slate-50 border ${
                    errors.email ? 'border-red-500' : 'border-slate-800 dark:border-slate-800 light-mode:border-slate-300'
                  } text-slate-100 dark:text-slate-100 light-mode:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors text-sm`}
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light-mode:text-slate-700 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, team opportunity, or inquiry..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950 dark:bg-slate-950 light-mode:bg-slate-50 border ${
                    errors.message ? 'border-red-500' : 'border-slate-800 dark:border-slate-800 light-mode:border-slate-300'
                  } text-slate-100 dark:text-slate-100 light-mode:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors text-sm`}
                ></textarea>
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}
            </form>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:joshuaollaoluwa@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email Me</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">joshuaollaoluwa@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+2348166378009"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Phone / WhatsApp</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">(+234) 816 637 8009</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-slate-200">Magodo Phase 2, Lagos, Nigeria</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect Online</span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com/StackCodeArtisan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center space-x-2 text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4 text-blue-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/joshua-olaoluwa-b65009167/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center space-x-2 text-xs font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://x.com/olajosh_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center space-x-2 text-xs font-semibold"
                >
                  <TwitterIcon className="w-4 h-4 text-blue-400" />
                  <span>Twitter/X</span>
                </a>
              </div>
            </div>


          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 text-center flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <div>
            &copy; 2026 <strong className="text-slate-300 font-semibold">Joshua Olaoluwa Idowu</strong>. All rights reserved.
          </div>
          <div className="text-slate-400">
            Software Engineer &bull; Product Builder &bull; Founder of Vendora
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactFooter;