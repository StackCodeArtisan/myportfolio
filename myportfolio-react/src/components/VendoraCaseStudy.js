import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Layers, 
  CheckCircle, 
  ShoppingBag, 
  Receipt, 
  BarChart3, 
  Lock, 
  Sparkles
} from 'lucide-react';


const VendoraCaseStudy = () => {
  const [activeTab, setActiveTab] = useState('sales');

  const featureTabs = [
    {
      id: 'sales',
      label: 'Sales & Inventory',
      title: 'Real-Time Sales & Stock Synchronization',
      description: 'Streamlined checkout, automated inventory deductions, low-stock warnings, and barcode-ready product catalog management designed for fast-paced retail operations.',
      highlights: [
        'Instant stock deduction on checkout',
        'Multi-category product catalog',
        'Low-stock threshold alerts',
        'Quick barcode & item search'
      ],
      metrics: 'Over 60 active businesses cataloging inventory in Month 1'
    },
    {
      id: 'crm',
      label: 'CRM & Invoicing',
      title: 'Customer Relations & Professional Invoicing',
      description: 'Centralized customer database tracking purchase histories, outstanding balances, custom receipts, and automated payment reminders via digital channels.',
      highlights: [
        'Instant PDF & WhatsApp invoice generation',
        'Customer credit & debt tracking',
        'Purchase history & loyalty insights',
        'Digital receipt delivery'
      ],
      metrics: 'Automated receipt generation & debt reminders'
    },
    {
      id: 'analytics',
      label: 'Business Analytics',
      title: 'Actionable Financial & Operational Insights',
      description: 'Visual dashboards detailing daily gross revenue, net profit margins, top-performing product categories, and expense breakdowns for smarter business decisions.',
      highlights: [
        'Real-time revenue & profit dashboards',
        'Expense vs income comparison',
        'Best-selling product ranking',
        'Daily & monthly business performance logs'
      ],
      metrics: 'Clear profitability tracking for non-technical business owners'
    },
    {
      id: 'architecture',
      label: 'SaaS Architecture',
      title: 'Multi-Tenant Enterprise Architecture',
      description: 'Engineered from scratch with strict tenant isolation, JWT authentication, scalable API endpoints, automated backups, and cloud deployment pipelines.',
      highlights: [
        'Isolated multi-tenant data architecture',
        'FastAPI async backend & PostgreSQL',
        'Role-based access control (RBAC)',
        'Containerized Docker & Render deployment'
      ],
      metrics: '99.9% operational uptime across active tenant accounts'
    }
  ];

  const currentTab = featureTabs.find(t => t.id === activeTab);

  return (
    <section id="vendora" className="py-24 bg-slate-900/50 dark:bg-slate-900/50 light-mode:bg-slate-100/70 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Flagship SaaS Case Study</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 dark:text-slate-100 light-mode:text-slate-900 tracking-tight">
            Building <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">Vendora</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light-mode:text-slate-700">
            From initial problem discovery and multi-tenant software engineering to live deployment and rapid initial user adoption.
          </p>
        </div>

        {/* Storytelling Grid: Problem, Solution, Build, Result */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Problem */}
          <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">The Problem</h3>
              <p className="text-sm text-slate-300 dark:text-slate-300 light-mode:text-slate-700 leading-relaxed">
                Small & Medium Enterprises (SMEs) face operational chaos—managing inventory, customer debts, and sales across paper notebooks, memory, and fragmented spreadsheets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 dark:border-slate-800 light-mode:border-slate-100 text-xs text-red-400 font-medium">
              Loss of sales data, stock leaks & debt friction.
            </div>
          </div>

          {/* Card 2: Solution */}
          <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">The Solution</h3>
              <p className="text-sm text-slate-300 dark:text-slate-300 light-mode:text-slate-700 leading-relaxed">
                Vendora unites core operations into an easy-to-use business management suite: inventory control, POS sales, invoicing, debt tracking, CRM, and analytics.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 dark:border-slate-800 light-mode:border-slate-100 text-xs text-blue-400 font-medium">
              All business operations unified under one roof.
            </div>
          </div>

          {/* Card 3: The Build */}
          <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">The Engineering</h3>
              <p className="text-sm text-slate-300 dark:text-slate-300 light-mode:text-slate-700 leading-relaxed">
                Built with a high-performance Python FastAPI backend, modern JS frontend, PostgreSQL, multi-tenant database isolation, JWT auth, and Dockerized cloud hosting.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 dark:border-slate-800 light-mode:border-slate-100 text-xs text-indigo-400 font-medium">
              Architected & coded entirely from scratch.
            </div>
          </div>

          {/* Card 4: Result */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-900 dark:from-emerald-950/40 dark:to-slate-900 light-mode:bg-white border border-emerald-500/40 shadow-xl shadow-emerald-950/30 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                04
              </div>
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">The Milestone</h3>
              <p className="text-sm text-slate-300 dark:text-slate-300 light-mode:text-slate-700 leading-relaxed">
                Within the first 30 days of launch, Vendora acquired <strong className="text-emerald-400">60 active business users</strong> who actively use the platform to manage daily operations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-500/30 text-xs text-emerald-400 font-bold flex items-center space-x-1">
              <CheckCircle className="w-4 h-4" />
              <span>60 Users in Month 1</span>
            </div>
          </div>

        </div>

        {/* Product Showcase / Interactive Tab Preview */}
        <div className="rounded-3xl bg-slate-900 dark:bg-slate-900 light-mode:bg-white border border-slate-800 dark:border-slate-800 light-mode:border-slate-200 shadow-2xl p-6 sm:p-10 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800 dark:border-slate-800 light-mode:border-slate-200">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Product Capabilities</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">
                Inside the Vendora Platform
              </h3>
            </div>

            {/* Tab Controls */}
            <div className="flex flex-wrap gap-2 bg-slate-950/70 dark:bg-slate-950/70 light-mode:bg-slate-100 p-1.5 rounded-2xl border border-slate-800 dark:border-slate-800 light-mode:border-slate-200">
              {featureTabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === t.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20'
                      : 'text-slate-400 dark:text-slate-400 light-mode:text-slate-600 hover:text-white dark:hover:text-white light-mode:hover:text-slate-900'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <h4 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light-mode:text-slate-900">
                {currentTab.title}
              </h4>
              <p className="text-slate-300 dark:text-slate-300 light-mode:text-slate-700 leading-relaxed text-sm sm:text-base">
                {currentTab.description}
              </p>

              <div className="space-y-3 pt-2">
                {currentTab.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-slate-300 dark:text-slate-300 light-mode:text-slate-800">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20">
                <TrendingUp className="w-4 h-4" />
                <span>{currentTab.metrics}</span>
              </div>
            </div>

            {/* Right Mockup Display Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-950 dark:bg-slate-950 light-mode:bg-slate-900 border border-slate-800 p-6 shadow-2xl relative">
                {/* Mockup Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="text-xs font-mono text-slate-500 ml-2">vendora-app/v1/{currentTab.id}</span>
                  </div>
                  <span className="text-[10px] font-mono bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">STATUS: 200 OK</span>
                </div>

                {/* Simulated UI Content */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="text-slate-400">Total Registered Tenants</div>
                      <div className="text-xl font-bold text-slate-100">60 SMEs</div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400">Growth Rate</div>
                      <div className="text-emerald-400 font-bold">+100% Month 1</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <div className="flex justify-between text-slate-300 text-xs">
                      <span>Core Services</span>
                      <span className="text-blue-400">Active</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">&bull; Inventory Sync</div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">&bull; Digital Receipts</div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">&bull; Debt Tracker</div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">&bull; Multi-Tenant DB</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-center font-sans font-medium text-xs">
                    "Founder & Lead Software Engineer: Joshua Olaoluwa Idowu"
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Feature List Overview Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: ShoppingBag, name: 'Sales POS' },
            { icon: Layers, name: 'Inventory' },
            { icon: Receipt, name: 'Invoicing' },
            { icon: BarChart3, name: 'Analytics' },
            { icon: Users, name: 'Customer CRM' },
            { icon: Lock, name: 'Multi-Tenant' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light-mode:bg-white border border-slate-800/60 dark:border-slate-800/60 light-mode:border-slate-200 flex flex-col items-center justify-center space-y-2 text-center">
                <Icon className="w-6 h-6 text-blue-400" />
                <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light-mode:text-slate-800">{item.name}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default VendoraCaseStudy;
