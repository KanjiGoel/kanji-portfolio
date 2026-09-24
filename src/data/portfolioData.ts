import { SkillItem, ProjectItem, CertificateItem, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Kanji',
  headline: 'Software Engineer & AI Application Developer',
  subheadline:
    'Specializing in Flutter cross-platform mobile apps, Python/Flask backend microservices, AI/ML computer vision applications, and business computing systems.',
  bio: 'Dedicated software engineer with a strong foundation in computer science, machine learning, and cross-platform mobile engineering. Passionate about building impactful applications that address real-world challenges, such as healthcare diagnostics, modern web systems, e-commerce stores, and computerized financial accounting. Committed to practical, code-first engineering and continuous learning.',
  email: 'goilkanji681@gmail.com',
  github: 'https://github.com/goilkanji',
  linkedin: 'https://linkedin.com/in/goilkanji',
  location: 'Available for Remote & On-site Opportunities',
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    category: 'development',
    categoryLabel: 'Engineering',
    level: 'Core Proficiency',
    description: 'Modern full-stack web engineering with responsive architecture, component modularity, and clean API integration.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'REST APIs'],
    practicalApplication: 'Engineered responsive single-page applications with performant DOM updates and accessible user interfaces.',
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'development',
    categoryLabel: 'Mobile',
    level: 'Core Proficiency',
    description: 'Cross-platform mobile application development for Android and iOS using Dart and declarative widget hierarchies.',
    tools: ['Dart', 'Flutter SDK', 'State Management', 'HTTP Networking', 'Camera API', 'Material Design 3'],
    practicalApplication: 'Developed the primary mobile client interface for the AI-Based Child Malnutrition Detection final year project.',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'development',
    categoryLabel: 'Core Language',
    level: 'Advanced',
    description: 'General-purpose programming, object-oriented design, algorithm implementation, and data manipulation.',
    tools: ['Python 3', 'OOP', 'NumPy', 'Pandas', 'File I/O', 'Virtualenv', 'Automated Scripts'],
    practicalApplication: 'Implemented core image pre-processing scripts, diagnostic scoring formulas, and backend server business logic.',
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'development',
    categoryLabel: 'Backend',
    level: 'Core Proficiency',
    description: 'Lightweight RESTful API microservice development, request routing, JSON serialization, and ML model serving.',
    tools: ['Flask', 'Flask-RESTful', 'Werkzeug', 'CORS', 'Gunicorn', 'JSON APIs'],
    practicalApplication: 'Constructed the backend inference endpoints serving real-time child malnutrition assessments to the mobile client.',
  },
  {
    id: 'ai-ml',
    name: 'AI/ML',
    category: 'ai',
    categoryLabel: 'Intelligence',
    level: 'Applied Specialist',
    description: 'Machine learning fundamentals, computer vision feature extraction, classification models, and dietary recommendation algorithms.',
    tools: ['Computer Vision', 'Image Feature Extraction', 'Scikit-learn', 'Predictive Modeling', 'Heuristic Recommenders'],
    practicalApplication: 'Designed image analysis routines and rule-based diagnostic systems to classify stunting, wasting, and underweight indicators.',
  },
  {
    id: 'database',
    name: 'Database',
    category: 'development',
    categoryLabel: 'Data Systems',
    level: 'Core Proficiency',
    description: 'Relational database architecture, normalized schema design, SQL query formulation, and data persistence.',
    tools: ['PostgreSQL', 'MySQL', 'SQLite', 'Relational Modeling', 'Foreign Keys & Constraints', 'Indexing'],
    practicalApplication: 'Architected structured relational schemas for storing patient growth metrics, diet catalogs, and application records.',
  },
  {
    id: 'shopify',
    name: 'Shopify',
    category: 'business',
    categoryLabel: 'E-Commerce',
    level: 'Practical Knowledge',
    description: 'E-commerce platform deployment, theme customization, catalog configuration, and checkout optimization.',
    tools: ['Liquid Theme Engine', 'Product Collections', 'Inventory Management', 'Payment Gateways', 'SEO Settings'],
    practicalApplication: 'Configured and tested live-ready storefronts with categorized inventory, multi-variant products, and responsive navigation.',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'business',
    categoryLabel: 'Growth & Strategy',
    level: 'Practical Knowledge',
    description: 'Search engine optimization, AI-assisted content strategy, audience persona mapping, and conversion funnel planning.',
    tools: ['SEO Auditing', 'Keyword Research', 'AI Content Generation', 'Google Analytics Basics', 'Social Ad Strategy'],
    practicalApplication: 'Formulated organic search optimization blueprints and automated copy generation pipelines for digital campaigns.',
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    category: 'business',
    categoryLabel: 'Financial Systems',
    level: 'Practical Knowledge',
    description: 'Computerized accounting, chart of accounts setup, journal entries, and financial statement generation.',
    tools: ['General Ledger', 'Invoicing & Receivables', 'Accounts Payable', 'Bank Reconciliation', 'P&L Statements'],
    practicalApplication: 'Created simulated business accounting records, performed monthly reconciliations, and generated trial balances.',
  },
  {
    id: 'peachtree',
    name: 'Peachtree',
    category: 'business',
    categoryLabel: 'Financial Systems',
    level: 'Practical Knowledge',
    description: 'Sage 50 (Peachtree) computerized accounting workflows, inventory tracking, and double-entry bookkeeping.',
    tools: ['Sage 50 / Peachtree', 'Double-Entry Bookkeeping', 'Voucher Entry', 'Inventory Costing', 'Financial Auditing'],
    practicalApplication: 'Executed end-to-end commercial accounting cycles including purchase orders, sales journals, and balance sheet auditing.',
  },
  {
    id: 'ms-excel',
    name: 'MS Excel',
    category: 'tools',
    categoryLabel: 'Productivity & Analytics',
    level: 'Advanced',
    description: 'Advanced spreadsheet modeling, statistical calculation, data consolidation, and dynamic dashboard creation.',
    tools: ['XLOOKUP & VLOOKUP', 'Pivot Tables & Charts', 'Nested Logic (IFS)', 'Data Validation', 'Conditional Formatting'],
    practicalApplication: 'Built financial projection models, inventory tracking sheets, and patient diagnostic statistical matrices.',
  },
  {
    id: 'powerpoint',
    name: 'PowerPoint',
    category: 'tools',
    categoryLabel: 'Communication',
    level: 'Advanced',
    description: 'Executive presentation design, technical architecture diagramming, and academic project defense slides.',
    tools: ['Slide Master Design', 'Visual Hierarchy', 'System Architecture Diagrams', 'Data Storytelling', 'Technical Defense Decks'],
    practicalApplication: 'Crafted the official technical defense and proposal presentations for the Final Year Project and academic reviews.',
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'tools',
    categoryLabel: 'Security & Systems',
    level: 'Foundational Knowledge',
    description: 'Secure application coding, OWASP Top 10 mitigation awareness, input sanitization, and credential safety.',
    tools: ['OWASP Principles', 'Input Sanitization', 'JWT & Auth Hygiene', 'HTTPS / TLS Concepts', 'Role-Based Access Control'],
    practicalApplication: 'Enforced strict parameter validation and safe API token handling between the Flutter mobile client and Flask backend.',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-web-dev',
    title: 'Web Development Practice',
    period: '2024 – Present',
    category: 'Hands-on Engineering Practice',
    summary:
      'Intensive independent and coursework practice designing and coding responsive web applications with modern frontend frameworks and modular CSS systems.',
    outcomes: [
      'Built multi-section responsive web layouts utilizing React, TypeScript, and Tailwind CSS.',
      'Implemented clean client-side routing, interactive state management, and modal dialog systems.',
      'Optimized asset loading, web typography hierarchy, and accessibility standards (WCAG AA).',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'REST APIs', 'Vite'],
  },
  {
    id: 'exp-mobile-dev',
    title: 'Mobile Application Development',
    period: '2024 – Present',
    category: 'Mobile Systems Engineering',
    summary:
      'Hands-on mobile architecture development focused on Flutter and Dart, constructing intuitive touch-friendly interfaces and asynchronous API clients.',
    outcomes: [
      'Mastered declarative UI building, custom reusable widgets, and state lifecycle management.',
      'Integrated native device capabilities including camera capture and gallery file selection.',
      'Configured asynchronous HTTP requests with structured JSON serialization and error handling.',
    ],
    technologies: ['Flutter', 'Dart', 'Android Studio', 'REST Client', 'Camera Plugin', 'Provider / State'],
  },
  {
    id: 'exp-fyp',
    title: 'FYP Development',
    period: '2024 – 2025',
    category: 'Capstone Engineering Research & Development',
    summary:
      'Led the end-to-end technical development of "AI-Based Mobile Application for Early Detection of Child Malnutrition and Diet Recommendation System".',
    outcomes: [
      'Engineered a complete mobile-to-cloud architecture bridging Flutter frontend with Python/Flask backend services.',
      'Implemented image analysis pipeline for visual indicators and anthropometric nutrition assessment.',
      'Developed an automated diet formulation module recommending culturally accessible, nutrient-dense meal plans.',
    ],
    technologies: ['Flutter', 'Python', 'Flask', 'AI/ML Image Processing', 'RESTful API', 'SQLite'],
  },
  {
    id: 'exp-shopify',
    title: 'Shopify Store Practice',
    period: '2024',
    category: 'E-Commerce Platform Development',
    summary:
      'Hands-on sandbox store setup, product information architecture, and digital merchandising configuration for modern retail.',
    outcomes: [
      'Structured complete product catalogs with complex variant options (sizes, materials, colorways).',
      'Configured automated collection rules, header navigation hierarchies, and filter parameters.',
      'Simulated checkout funnels, testing payment gateways, shipping zones, and automated order confirmations.',
    ],
    technologies: ['Shopify', 'Liquid Themes', 'Catalog Architecture', 'E-Commerce UX', 'Conversion Testing'],
  },
  {
    id: 'exp-digital-marketing',
    title: 'Digital Marketing with AI',
    period: '2024',
    category: 'Applied Marketing & Growth Practice',
    summary:
      'Leveraged modern generative AI tools and analytical methods to conceptualize, write, and structure digital marketing campaigns and organic search strategies.',
    outcomes: [
      'Conducted competitive keyword discovery and structured technical on-page SEO meta elements.',
      'Utilized AI prompts to formulate high-converting product descriptions, ad copy variants, and email drip outlines.',
      'Mapped customer acquisition funnels from social discovery to conversion action.',
    ],
    technologies: ['AI Copywriting', 'SEO Research', 'Content Architecture', 'Audience Segmentation', 'Funnel Analytics'],
  },
  {
    id: 'exp-accounting',
    title: 'QuickBooks / Peachtree Practice',
    period: '2023 – 2024',
    category: 'Computerized Accounting & Financial Systems',
    summary:
      'Practical software laboratory training and simulation in financial ledger management, double-entry bookkeeping, and business reporting.',
    outcomes: [
      'Created standardized Chart of Accounts and recorded sales, purchase, and general journal vouchers.',
      'Performed bank and credit reconciliation procedures to ensure zero-discrepancy ledgers.',
      'Generated financial audit statements including Trial Balance, Profit & Loss, and Balance Sheets.',
    ],
    technologies: ['QuickBooks Desktop/Online', 'Peachtree (Sage 50)', 'MS Excel', 'Financial Statements', 'Voucher Systems'],
  },
  {
    id: 'exp-university',
    title: 'University Projects',
    period: '2022 – 2025',
    category: 'Computer Science Academic Projects',
    summary:
      'Comprehensive academic software projects covering relational database design, algorithms, object-oriented systems, and software engineering methodologies.',
    outcomes: [
      'Designed normalized (3NF) relational database schemas with foreign key integrity and complex join queries.',
      'Implemented data structure algorithms (sorting, searching, graph traversal) with complexity analysis.',
      'Co-authored comprehensive Software Requirements Specifications (SRS) and technical architecture documents.',
    ],
    technologies: ['SQL', 'C++', 'Python', 'Software Engineering (SRS)', 'Database Design', 'UML Diagrams'],
  },
];

export const FYP_PROJECT: ProjectItem = {
  id: 'fyp-child-malnutrition',
  title: 'AI-Based Mobile Application for Early Detection of Child Malnutrition and Diet Recommendation System',
  tagline: 'Capstone Final Year Project combining Flutter mobile UI, Python/Flask backend, and AI/ML image analysis.',
  description:
    'A healthcare application designed to screen children for malnutrition indicators through mobile image capture and anthropometric input, delivering personalized dietary recommendations to caregivers.',
  fullDescription:
    'Child malnutrition is a critical global public health concern where early intervention significantly improves developmental outcomes. This final year project presents an accessible, non-invasive digital screening solution. Caregivers or community health workers capture a standardized photograph of the child along with basic anthropometric metrics (age, weight, height). The Flutter mobile client securely transmits the payload to a Python/Flask inference engine that evaluates nutritional status (identifying indicators such as stunting, wasting, or underweight categories). Based on the diagnostic assessment, the system generates targeted, culturally accessible meal plans rich in essential micronutrients and macronutrients to support healthy recovery.',
  image: '/src/assets/images/fyp_malnutrition_system_1790249507337.jpg',
  technologies: ['Flutter (Frontend)', 'Python & Flask (Backend)', 'AI/ML (Image Analysis)', 'SQLite (Local DB)', 'REST API'],
  role: 'Sole Full-Stack Developer & ML Integrator. Conceived, designed, and coded the mobile Flutter application, the Flask inference microservice, the image pre-processing pipeline, and the dietary recommendation rule engine.',
  features: [
    'Camera-based photo capture with on-screen visual framing guidelines for consistent analysis',
    'Automated anthropometric z-score calculation (weight-for-age, height-for-age, weight-for-height)',
    'AI-assisted visual feature analysis identifying physical signs of acute or chronic undernutrition',
    'Personalized, locally accessible dietary recommendation generator tailored to the child’s nutritional deficit',
    'Historical tracking log to monitor growth progression over consecutive checkups',
    'Offline-capable local storage with automatic synchronization when network is available',
  ],
  architecture: [
    'Frontend Layer: Flutter cross-platform mobile client handling user interface, camera feed, and local data persistence.',
    'API Gateway: RESTful JSON endpoints built with Flask, providing secure transport and input sanitization.',
    'Analytical Engine: Python-based computer vision routines and anthropometric diagnostic matrix.',
    'Recommendation Module: Algorithmic dietary engine mapping nutritional deficits to locally available food regimes.',
  ],
  githubUrl: 'https://github.com/goilkanji/child-malnutrition-ai-detection',
  liveUrl: '#fyp-demo',
  featured: true,
};

export const PROJECTS_DATA: ProjectItem[] = [
  FYP_PROJECT,
  {
    id: 'proj-web-platform',
    title: 'Modern Full-Stack Web Application Suite',
    tagline: 'High-performance interactive web portal with modern component architecture and clean state workflows.',
    description:
      'A responsive web application featuring component modularity, fluid responsive layouts, real-time client state, and REST API communications.',
    fullDescription:
      'Engineered to demonstrate modern frontend engineering principles, this project implements a clean web architecture utilizing React, TypeScript, and Tailwind CSS. It highlights single-line control discipline, responsive grid math, seamless dark-mode themes, and zero-latency user interactions. The application communicates with backend endpoints to manage dynamic data records with full validation.',
    image: '/src/assets/images/project_web_portfolio_1790249526704.jpg',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'REST API', 'Modern UX'],
    role: 'Lead Frontend Developer. Architected the design system, component hierarchy, accessibility compliance, and state management.',
    features: [
      'Responsive design adapting flawlessly from mobile viewports to 1440px+ desktop baselines',
      'Interactive modal dialogs with keyboard trap (ESC key) and focus-visible indicators',
      'Clean unboxed metadata presentation eliminating generic pill clutter',
      'Optimized performance with zero layout shift and sub-100ms interaction feedback',
    ],
    githubUrl: 'https://github.com/goilkanji/web-application-suite',
    liveUrl: '#',
  },
  {
    id: 'proj-shopify-store',
    title: 'E-Commerce Shopify Store & Catalog System',
    tagline: 'Structured digital commerce storefront optimized for high conversion and clear merchandise navigation.',
    description:
      'A practical e-commerce storefront configured with multi-tier product hierarchies, variant management, promotional sections, and frictionless checkout.',
    fullDescription:
      'Created as a comprehensive demonstration of commercial e-commerce systems, this store features curated product collections, automated inventory classification, multi-attribute variants, and an optimized mobile purchasing funnel. Special attention was paid to clean image framing, quick search capability, and secure checkout simulation.',
    image: '/src/assets/images/project_shopify_store_1790249539920.jpg',
    technologies: ['Shopify', 'Liquid', 'HTML5/CSS3', 'Catalog UX', 'Conversion Architecture'],
    role: 'Store Architect & Merchandiser. Configured product collections, inventory taxonomy, Liquid theme adjustments, and payment test flows.',
    features: [
      'Curated product hierarchy with multi-variant options (colors, dimensions, inventory counts)',
      'Optimized mobile-first storefront navigation with rapid category filtering',
      'Integrated test payment gateways and automated order confirmation templates',
      'Structured meta tags and clean product URLs for organic search visibility',
    ],
    githubUrl: 'https://github.com/goilkanji/shopify-storefront-practice',
    liveUrl: '#',
  },
  {
    id: 'proj-database-system',
    title: 'Relational Database & Inventory Management System',
    tagline: 'Normalized relational database model with complex queries and ACID transactional integrity.',
    description:
      'A computerized inventory and records system designed with 3NF relational tables, foreign key constraints, and stored queries for rapid data retrieval.',
    fullDescription:
      'Developed as part of practical database systems work, this project implements a complete relational model for tracking inventory, customer transactions, and stock re-order thresholds. It includes advanced SQL queries, multi-table joins, subqueries, and data sanitization routines to prevent SQL injection.',
    image: '/src/assets/images/project_web_portfolio_1790249526704.jpg',
    technologies: ['PostgreSQL / MySQL', 'SQL', 'Python Scripting', 'Relational Modeling (3NF)', 'Data Integrity'],
    role: 'Database Architect & Backend Engineer. Authored the ER diagrams, DDL table definitions, indexing strategy, and Python connectivity scripts.',
    features: [
      'Third Normal Form (3NF) relational architecture avoiding data redundancy',
      'Optimized multi-table JOIN queries and indexed search performance',
      'Strict constraint validation ensuring referential integrity across all records',
      'Audit log tables recording timestamps and user modification history',
    ],
    githubUrl: 'https://github.com/goilkanji/relational-inventory-database',
    liveUrl: '#',
  },
  {
    id: 'proj-accounting-system',
    title: 'Financial Accounting & Ledger Integration Model',
    tagline: 'Computerized ledger accounting with QuickBooks, Peachtree, and automated Excel models.',
    description:
      'A business accounting model integrating automated double-entry journal vouchers, trial balance reconciliations, and financial reporting.',
    fullDescription:
      'This project unites practical computerized accounting systems (QuickBooks and Sage 50 / Peachtree) with advanced Microsoft Excel financial modeling. It provides an automated chart of accounts, cash flow reconciliation matrices, accounts receivable aging schedules, and instant balance sheet compilation.',
    image: '/src/assets/images/project_shopify_store_1790249539920.jpg',
    technologies: ['QuickBooks', 'Peachtree (Sage 50)', 'MS Excel (Advanced)', 'Financial Modeling', 'Trial Balance'],
    role: 'Financial Systems Analyst. Built chart of accounts, reconciliation templates, and automated profit-and-loss calculation sheets.',
    features: [
      'Standardized double-entry transaction posting across sales, purchase, and cash journals',
      'Automated bank reconciliation workbook identifying variances and uncleared checks',
      'Dynamic Excel models utilizing XLOOKUP, nested conditionals, and dynamic summary tables',
      'Comprehensive financial statements: Income Statement, Balance Sheet, and Cash Flow analysis',
    ],
    githubUrl: 'https://github.com/goilkanji/accounting-ledger-systems',
    liveUrl: '#',
  },
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'cert-python-ai',
    name: 'Python for Artificial Intelligence & Data Science',
    organization: 'Technical Academic Certification',
    date: 'Completed 2025 · Verified',
    credentialId: 'PY-AI-2025-0891',
    image: '/src/assets/images/certificate_credential_doc_1790249554470.jpg',
    skillsLearned: ['Python 3 Programming', 'NumPy & Pandas', 'Data Analysis', 'ML Algorithm Basics', 'Data Pre-processing'],
    summary:
      'Comprehensive certification covering advanced Python syntax, object-oriented concepts, statistical data manipulation with NumPy/Pandas, and foundational machine learning techniques for practical applications.',
  },
  {
    id: 'cert-flutter-mobile',
    name: 'Cross-Platform Mobile App Development with Flutter & Dart',
    organization: 'Mobile Development Learning Academy',
    date: 'Completed 2025 · Verified',
    credentialId: 'FLT-MOB-2025-4412',
    image: '/src/assets/images/certificate_credential_doc_1790249554470.jpg',
    skillsLearned: ['Dart Programming', 'Flutter Widget Tree', 'State Management', 'REST API Client', 'Native Device Access'],
    summary:
      'Credential demonstrating mastery in developing performant, cross-platform Android and iOS applications using the Flutter framework, state lifecycle management, and asynchronous network communication.',
  },
  {
    id: 'cert-digital-marketing',
    name: 'Digital Marketing & AI-Assisted Business Strategy',
    organization: 'Digital Marketing & E-Commerce Institute',
    date: 'Completed 2024 · Verified',
    credentialId: 'DM-AI-2024-3382',
    image: '/src/assets/images/certificate_credential_doc_1790249554470.jpg',
    skillsLearned: ['Search Engine Optimization (SEO)', 'AI Content Workflows', 'Audience Analytics', 'Conversion Funnels'],
    summary:
      'Practical credential validating skills in digital market analysis, modern search engine optimization, content strategy execution, and leveraging artificial intelligence for marketing asset generation.',
  },
  {
    id: 'cert-accounting-systems',
    name: 'Computerized Accounting & Financial Systems (QuickBooks & Peachtree)',
    organization: 'Professional Accounting Software Association',
    date: 'Completed 2024 · Verified',
    credentialId: 'ACC-QB-2024-7719',
    image: '/src/assets/images/certificate_credential_doc_1790249554470.jpg',
    skillsLearned: ['QuickBooks Accounting', 'Sage 50 / Peachtree', 'Double-Entry Bookkeeping', 'Financial Statements', 'Ledger Audit'],
    summary:
      'Accreditation in computerized accounting procedures, automated ledger entries, reconciliation of bank statements, inventory valuation methods, and generation of certified financial reports.',
  },
  {
    id: 'cert-cybersecurity',
    name: 'Cybersecurity Fundamentals & Secure Software Practices',
    organization: 'Cybersecurity Learning Network',
    date: 'Completed 2025 · Verified',
    credentialId: 'SEC-CYB-2025-1029',
    image: '/src/assets/images/certificate_credential_doc_1790249554470.jpg',
    skillsLearned: ['OWASP Top 10 Security', 'Input Sanitization', 'Authentication Principles', 'Network Security', 'Data Protection'],
    summary:
      'Training on secure software development lifecycles, identifying common web and mobile vulnerabilities (injection, cross-site scripting, broken auth), and implementing defensive programming controls.',
  },
];
