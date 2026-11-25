// Every statement here is verified against the project itself. Keep status lines honest:
// update them when something launches, never before.
export const projects = [
  {
    slug: 'vendoracrm',
    name: 'VendoraCRM',
    tagline: 'Business management for small businesses that sell online and in person',
    status: 'Live',
    statusDetail: '60+ initial sign-ups. No established paying customer base yet.',
    role: 'Founder, product developer and technical lead',
    link: { href: 'https://www.vendoracrm.com.ng/', label: 'Visit vendoracrm.com.ng' },
    summary:
      'A SaaS platform that gives small and medium-sized businesses one place to manage customers, sales, stock, finances, online orders and bookings.',
    problem:
      'Many Nigerian SMEs, especially those selling through social media and informal channels, keep customer, order and stock records by hand. That makes it hard to see what is selling, what is running out and whether the business is actually profitable.',
    stack: ['Python', 'FastAPI', 'Vue.js', 'SQLAlchemy', 'PostgreSQL / SQLite', 'Alembic', 'Render', 'Vercel', 'Cloudinary', 'Resend', 'Paystack'],
    capabilities: [
      ['Customers', 'Customer records and relationship management'],
      ['Sales and orders', 'Order recording and sales management'],
      ['Inventory', 'Stock tracking with product variants and low-stock alerts'],
      ['Finance', 'Expense management, invoice generation, revenue and profit tracking'],
      ['Analytics', 'Business reporting on sales and performance'],
      ['Storefronts', 'Public business storefronts with shopping cart and guest checkout'],
      ['Bookings', 'Online booking with email notifications and reminders'],
      ['Accounts', 'Authentication, user access management and subscriptions'],
    ],
    responsibilities: [
      'Defined the product from the operational problems of small vendors, then designed the data model, API and interface around them.',
      'Built the FastAPI backend and REST API, with SQLAlchemy models and schema changes managed through Alembic migrations.',
      'Built the Vue.js frontend, including the business dashboard and the public storefront and checkout.',
      'Integrated Paystack for subscriptions, Resend for transactional email and Cloudinary for media.',
      'Deployed the API on Render and the frontend on Vercel, and continue to maintain and improve both.',
    ],
    decisions: [
      ['Split hosting', 'The API and the frontend deploy independently, so each can be released and scaled on its own.'],
      ['Migrations from day one', 'Every schema change is an Alembic migration, so the live database can evolve without manual edits.'],
      ['Third-party services at the edges', 'Payments, email and media sit behind integrations rather than inside business logic.'],
    ],
  },
  {
    slug: 'tesselix-learn',
    name: 'Tesselix Learn',
    tagline: 'A multi-tenant learning platform for schools, academies and independent educators',
    status: 'In development',
    statusDetail: 'Core data foundation complete. Not launched.',
    role: 'Founder, product architect and developer',
    link: null,
    privateNote: 'The source code is private. This page describes the architecture, not the implementation.',
    summary:
      'An education technology SaaS platform that will let institutions and instructors run their own branded online school, with courses, instructors, learners, materials, subscriptions and progress tracking, on shared infrastructure.',
    problem:
      'Educators who teach structured courses online often rely on video-conferencing and file-sharing tools that were never designed to manage content, access, payment or progress. The idea came from the practical limits of teaching online with those tools.',
    stack: ['Python', 'FastAPI', 'SQLAlchemy 2 (async)', 'Alembic', 'PostgreSQL 17', 'Vue.js 3', 'Vite', 'Pytest', 'Vitest', 'GitHub Actions', 'Render', 'Vercel'],
    capabilitiesTitle: 'What the platform is designed to do',
    capabilities: [
      ['Multi-tenancy', 'Many organisations on one platform, each with its own portal and data'],
      ['Data isolation', 'Organisation-level isolation enforced in the application and in the database'],
      ['Access control', 'Role-based permissions for administrators, instructors and learners'],
      ['Content', 'Architecture for courses, programmes, lessons and learning materials'],
      ['Subscriptions', 'Plan-based access for institutions, kept separate from course payments'],
      ['Quality', 'Automated tests, strict type checking, linting and CI on every change'],
    ],
    responsibilities: [
      'Wrote the product requirements, software architecture, database design, security requirements and API architecture before building.',
      'Designed the multi-tenant data model and the database roles and policies that isolate each organisation.',
      'Built the backend foundation in FastAPI and PostgreSQL and the Vue 3 frontend shell.',
      'Run development in formally reviewed stages, each with acceptance criteria that must pass before the next begins.',
    ],
    decisions: [
      ['Isolation in three layers', 'Organisation data is separated in service logic, through composite foreign keys, and by PostgreSQL Row-Level Security. If no organisation is set, the database returns nothing.'],
      ['Least-privilege database roles', 'The API and the background worker connect with separate roles that hold only the permissions they need.'],
      ['Decisions on record', '39 Architectural Decision Records explain what was chosen, what was rejected and why.'],
    ],
    milestone: {
      title: 'Stage 03 review',
      body: '223 backend tests (unit, integration with real database roles, job queue and backup/restore) and 43 frontend tests passing on native PostgreSQL 17.11. Strict type checking and linting clean. Migrations verified upgrading and downgrading.',
    },
  },
  {
    slug: 'tesselix-website',
    name: 'Tesselix LTD website',
    tagline: 'The corporate website for my software company',
    status: 'Built, not yet deployed',
    statusDetail: 'Waiting on the enquiry endpoint and domain before launch.',
    role: 'Founder and project lead',
    link: null,
    summary:
      'A 24-page corporate website presenting Tesselix LTD’s services, focus industries, products and articles, prerendered to static HTML for speed and search.',
    problem:
      'A new software company needs a credible public presence that explains what it does without overstating what it has done.',
    stack: ['Vue.js 3', 'TypeScript', 'Vite (static prerendering)', 'Tailwind CSS', 'Playwright', 'axe-core'],
    capabilities: [
      ['Pages', '24 prerendered pages: services, industries, work, insights, contact and legal'],
      ['Enquiries', 'Validated enquiry form that only reports success when the server confirms it'],
      ['Search', 'Per-page titles, descriptions, canonical URLs and structured data'],
      ['Security', 'Content Security Policy and security headers generated at build time'],
    ],
    responsibilities: [
      'Led the project from brief to a production-ready build.',
      'Removed unverifiable claims, placeholder figures and invented case studies, or labelled them clearly as concepts.',
    ],
    decisions: [
      ['Static by default', 'Every page is HTML at build time, so the site is fast on slow connections and easy to host.'],
      ['Tested like an application', '76 automated browser tests on desktop and mobile; build, type-check and lint all pass; no violations in automated accessibility checks.'],
    ],
  },
  {
    slug: 'hh-marine',
    name: 'H.H. Marine & Logistics',
    tagline: 'Corporate website for a marine and logistics company in Lagos',
    status: 'In progress',
    statusDetail: 'Client engagement. Pages built; awaiting client content before launch.',
    role: 'Freelance web developer, through Tesselix LTD',
    link: null,
    summary:
      'A corporate website for H.H. Marine & Logistics Ltd, built as a fast static site with working quote and contact forms.',
    problem:
      'The company needs a professional website that explains its services and lets prospective clients request quotes directly.',
    stack: ['Astro', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Zod', 'Cloudflare Pages Functions', 'Resend'],
    capabilities: [
      ['Pages', 'Home, About, Services, Operations & Capabilities, Projects, Request a Quote and Contact'],
      ['Forms', 'Quote and contact forms with spam protection and email delivery'],
      ['Profile', 'A redesigned, downloadable company profile'],
    ],
    responsibilities: [
      'Architecture, implementation, testing and deployment preparation.',
      'A release check that blocks the production build until all outstanding client content is confirmed.',
    ],
    decisions: [
      ['Static first', 'JavaScript loads only where a visitor interacts, such as the mobile menu and forms.'],
      ['One set of validation rules', 'The same rules check form input in the browser and again on the server.'],
    ],
  },
];

// Earlier public repositories. Shown briefly; they are not presented as current products.
export const earlierWork = [
  {
    name: 'MyLawyerApp',
    href: 'https://github.com/StackCodeArtisan/mylawyerapp',
    stack: 'Python, Flask, SQLAlchemy, Alembic',
    body: 'A Flask application connecting clients with lawyers, with separate client, lawyer and admin areas and a data model for appointments, cases, documents, payments and reviews.',
  },
  {
    name: 'MarketTodo',
    href: 'https://github.com/StackCodeArtisan/markettodo',
    stack: 'React, Vite',
    body: 'A recipe app that consumes a public API, with a merged contribution from another developer.',
  },
  {
    name: 'WeatherApp',
    href: 'https://github.com/StackCodeArtisan/weatherapp',
    stack: 'React, Vite',
    body: 'A weather lookup app built on a third-party weather API.',
  },
];
