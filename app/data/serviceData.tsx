import {
  ArrowRight,
  Camera,
  Code,
  Coffee,
  Code2,
  Database,
  Server,
  Lock,
  Cloud,
  Layers,
  Palette,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Rocket,
  Users,
  Workflow,
  TrendingUp,
  ShoppingCart,
  FileText,
  Search,
  BarChart,
} from "lucide-react"

import { FeatureCard } from "@/interfaces/services"

export const serviceData = [
  {
    title: "Front-End",
    route: "frontend",
    icon: <Camera className="w-8 h-8" />,
    description: "Beautiful, responsive interfaces that users love",
    features: [
      "Modern UI/UX Design",
      "Responsive Layouts",
      "React, Vue, or Vanilla JS",
      "Performance Optimization",
      "Cross-browser Compatible",
      "Accessibility Standards",
    ],
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Back-End",
    route: "backend",
    icon: <Code className="w-8 h-8" />,
    description: "Robust server-side solutions for your applications",
    features: [
      "RESTful API Development",
      "Database Design & Management",
      "Authentication & Security",
      "Server Configuration",
      "Payment Integration",
      "Scalable Architecture",
    ],
    color: "from-violet-400 to-purple-500",
  },
  {
    title: "Full-Stack",
    route: "fullstack",
    icon: <Zap className="w-8 h-8" />,
    description: "Complete end-to-end web application development",
    features: [
      "All Front-End Features",
      "All Back-End Features",
      "Database Integration",
      "Deployment & Hosting",
      "Ongoing Maintenance",
      "Priority Support",
    ],
    color: "from-pink-400 to-rose-500",
  },
  {
    title: "Web Development",
    route: "webdevelopment",
    icon: <Coffee className="w-8 h-8" />,
    description: "Custom solutions for your unique business needs",
    features: [
      "Business Websites",
      "E-commerce Platforms",
      "Content Management Systems",
      "Custom Web Applications",
      "SEO Optimization",
      "Analytics Integration",
    ],
    color: "from-amber-400 to-orange-500",
  },
]

export const featureCards: FeatureCard = {
  frontend: {
    features: [
      {
        icon: Code2,
        title: "Modern Frameworks",
        description:
          "Built with React, Vue, or vanilla JavaScript. Choose the stack that best fits your needs and team expertise.",
      },
      {
        icon: Smartphone,
        title: "Responsive Design",
        description:
          "Flawless experiences across all devices. From mobile phones to 4K monitors, your site looks perfect everywhere.",
      },
      {
        icon: Zap,
        title: "Blazing Fast",
        description:
          "Optimized for speed with lazy loading, code splitting, and modern performance techniques. Your users won't wait.",
      },
      {
        icon: Shield,
        title: "Accessibility First",
        description:
          "WCAG 2.1 compliant interfaces that work for everyone. Keyboard navigation, screen readers, and semantic HTML.",
      },
      {
        icon: Globe,
        title: "Cross-Browser",
        description:
          "Tested across Chrome, Firefox, Safari, and Edge. Your application works consistently everywhere.",
      },
      {
        icon: Palette,
        title: "Pixel Perfect",
        description:
          "Faithful implementation of your designs with attention to every detail, spacing, and interaction.",
      },
    ],
    footerPricing: {
      color: " from-cyan-400 to-blue-500",
      title: "Ready to Get Started?",
      description:
        "Let's build a website that works for your business. Get in touch to discuss your project.",
      cta: {
        text: "Schedule a Call",
        icon: ArrowRight,
      },
      pricing: {
        startingPrice: "$3,000",
        description: "for simple sites",
      },
    },
    includedServices: [
      "Modern UI/UX Design Implementation",
      "Responsive Layouts (Mobile, Tablet, Desktop)",
      "React, Vue, or Vanilla JavaScript Development",
      "State Management (Redux, Vuex, Pinia)",
      "Component Library & Style Guide",
      "Performance Optimization & Code Splitting",
      "Cross-browser Testing & Compatibility",
      "Accessibility Standards (WCAG 2.1)",
      "SEO-Friendly Markup & Semantic HTML",
      "Animation & Micro-interactions",
      "API Integration & Data Fetching",
      "Form Validation & User Input Handling",
      "Progressive Web App (PWA) Features",
      "Unit Testing & End-to-End Testing",
      "Documentation & Code Comments",
      "Deployment & CI/CD Setup",
    ],
    processSteps: [
      {
        number: "01",
        title: "Discovery & Planning",
        description:
          "We start by understanding your goals, target audience, and technical requirements. I review any existing designs, discuss your vision, and create a detailed development plan.",
        deliverables: [
          "Project scope document",
          "Technical architecture plan",
          "Timeline and milestones",
        ],
      },
      {
        number: "02",
        title: "Design Review & Setup",
        description:
          "I analyze your designs (Figma, Sketch, Adobe XD) and set up the project structure. This includes choosing the right framework, setting up build tools, and creating the component architecture.",
        deliverables: [
          "Development environment",
          "Component structure",
          "Design system foundation",
        ],
      },
      {
        number: "03",
        title: "Development & Iteration",
        description:
          "Building your application feature by feature with regular check-ins. You'll see progress every week and can provide feedback as we go, ensuring the final product matches your vision perfectly.",
        deliverables: [
          "Working features",
          "Weekly progress updates",
          "Staging environment",
        ],
      },
      {
        number: "04",
        title: "Testing & Optimization",
        description:
          "Comprehensive testing across devices, browsers, and screen sizes. Performance optimization, accessibility audits, and bug fixing to ensure everything works flawlessly.",
        deliverables: [
          "Test reports",
          "Performance metrics",
          "Bug-free application",
        ],
      },
      {
        number: "05",
        title: "Launch & Support",
        description:
          "Deploying your application to production with proper monitoring and analytics. I provide documentation, training if needed, and ongoing support to ensure long-term success.",
        deliverables: [
          "Production deployment",
          "Documentation",
          "Post-launch support",
        ],
      },
    ],
    service: "frontend",
    technologyCategories: [
      {
        title: "Core Technologies",
        color: "text-cyan-400",
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript (ES6+)",
          "TypeScript",
          "JSON",
          "XML",
        ],
      },
      {
        title: "Frameworks & Libraries",
        color: "text-cyan-400",
        technologies: [
          "React",
          "Vue.js",
          "Next.js",
          "Nuxt.js",
          "Redux",
          "Vuex",
          "Pinia",
          "React Query",
          "SWR",
        ],
      },
      {
        title: "Styling & Design",
        color: "text-cyan-400",
        technologies: [
          "Tailwind CSS",
          "SASS/SCSS",
          "CSS Modules",
          "Styled Components",
          "Emotion",
          "Framer Motion",
          "GSAP",
        ],
      },
      {
        title: "Build Tools & Testing",
        color: "text-cyan-400",
        technologies: [
          "Vite",
          "Webpack",
          "Jest",
          "Vitest",
          "React Testing Library",
          "Cypress",
          "Playwright",
          "ESLint",
          "Prettier",
        ],
      },
      {
        title: "Development Tools",
        color: "text-cyan-400",
        technologies: [
          "Git",
          "GitHub",
          "Figma",
          "VS Code",
          "Chrome DevTools",
          "Postman",
          "npm/yarn/pnpm",
        ],
      },
    ],
    technologyExplanations: [
      {
        title: "React & Vue",
        description:
          "Industry-standard frameworks with massive communities, extensive ecosystems, and proven track records. They enable building complex, maintainable applications that scale with your business.",
      },
      {
        title: "TypeScript",
        description:
          "Catch errors before they reach production. TypeScript adds type safety to JavaScript, making code more reliable, easier to refactor, and better documented for your team.",
      },
      {
        title: "Tailwind CSS",
        description:
          "Rapid development without sacrificing customization. Tailwind's utility-first approach means faster prototyping, smaller CSS bundles, and consistent design systems.",
      },
      {
        title: "Modern Build Tools",
        description:
          "Vite and modern bundlers provide lightning-fast development experience with hot module replacement, optimized production builds, and minimal configuration required.",
      },
    ],
    timelineItems: [
      {
        duration: "2-4",
        period: "WEEKS",
        label: "Small Projects",
        description: "Landing pages, marketing sites",
      },
      {
        duration: "4-8",
        period: "WEEKS",
        label: "Medium Projects",
        description: "Business sites, simple apps",
      },
      {
        duration: "8-16",
        period: "WEEKS",
        label: "Large Projects",
        description: "Complex applications, dashboards",
      },
    ],
    useCases: [
      {
        title: "Startups & MVPs",
        description:
          "Launch your product quickly with a polished, professional interface that attracts early adopters and investors.",
      },
      {
        title: "Business Redesigns",
        description:
          "Modernize your existing website with a fresh look, better performance, and improved user experience.",
      },
      {
        title: "SaaS Applications",
        description:
          "Build complex dashboards and admin panels with intuitive interfaces that make data actionable.",
      },
      {
        title: "E-commerce Platforms",
        description:
          "Create shopping experiences that convert visitors into customers with fast, beautiful product pages.",
      },
      {
        title: "Marketing Campaigns",
        description:
          "Launch high-converting landing pages that capture leads and drive business growth.",
      },
      {
        title: "Legacy Migrations",
        description:
          "Upgrade from outdated frameworks to modern, maintainable code that's easier to work with.",
      },
    ],
  },
  backend: {
    features: [
      {
        icon: Database,
        title: "Database Architecture",
        description:
          "Design and implement scalable database schemas with PostgreSQL, MongoDB, or MySQL. Optimized queries and proper indexing.",
      },
      {
        icon: Server,
        title: "RESTful APIs",
        description:
          "Build robust, well-documented APIs that are easy to consume. Following REST best practices and industry standards.",
      },
      {
        icon: Lock,
        title: "Security First",
        description:
          "Authentication, authorization, encryption, and protection against common vulnerabilities. Your data stays safe.",
      },
      {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description:
          "Deploy on AWS, Google Cloud, or Azure. Containerized with Docker, orchestrated with Kubernetes when needed.",
      },
      {
        icon: Layers,
        title: "Microservices",
        description:
          "Break monoliths into manageable services. Independent deployment, better scalability, easier maintenance.",
      },
      {
        icon: Zap,
        title: "High Performance",
        description:
          "Caching strategies, background jobs, optimized queries. Built to handle high traffic and scale with demand.",
      },
    ],
    footerPricing: {
      color: " from-violet-400 to-purple-500",
      title: "Ready to Get Started?",
      description:
        "Let's build a solid foundation for your application. Get in touch to discuss your project.",
      cta: {
        text: "Schedule a Call",
        icon: ArrowRight,
      },
      pricing: {
        startingPrice: "$5,000",
        description: "for simple sites",
      },
    },
    includedServices: [
      "RESTful API Design & Development",
      "GraphQL API Implementation",
      "Database Design & Optimization",
      "User Authentication & Authorization (JWT, OAuth, Sessions)",
      "Payment Gateway Integration (Stripe, PayPal, Square)",
      "Third-Party API Integrations",
      "File Upload & Cloud Storage (S3, Cloudinary)",
      "Email Service Integration (SendGrid, Mailgun)",
      "Background Job Processing & Task Queues",
      "Caching Strategies (Redis, Memcached)",
      "Security Best Practices & Data Encryption",
      "Rate Limiting & DDoS Protection",
      "API Documentation (Swagger/OpenAPI)",
      "Performance Monitoring & Logging",
      "Database Migrations & Seeding",
      "Unit & Integration Testing",
    ],
    processSteps: [
      {
        number: "01",
        title: "Requirements Analysis",
        description:
          "Deep dive into your business logic, data models, and system requirements. We define endpoints, data flows, and technical specifications together.",
        deliverables: [
          "API specification document",
          "Database schema design",
          "System architecture diagram",
        ],
      },
      {
        number: "02",
        title: "Architecture Design",
        description:
          "Design a scalable, maintainable system architecture. Choose the right databases, define microservices boundaries, and plan for growth.",
        deliverables: [
          "Technical architecture document",
          "Infrastructure plan",
          "Security strategy",
        ],
      },
      {
        number: "03",
        title: "Development & Testing",
        description:
          "Build APIs with comprehensive test coverage. Implement business logic, integrate third-party services, and ensure everything works flawlessly.",
        deliverables: ["Working APIs", "Test suite", "API documentation"],
      },
      {
        number: "04",
        title: "Security Audit",
        description:
          "Thorough security review and penetration testing. Implement best practices for authentication, authorization, and data protection.",
        deliverables: [
          "Security audit report",
          "Vulnerability fixes",
          "Security documentation",
        ],
      },
      {
        number: "05",
        title: "Deployment & Monitoring",
        description:
          "Deploy to production with CI/CD pipelines. Set up monitoring, alerting, and logging to ensure system health and performance.",
        deliverables: [
          "Production deployment",
          "Monitoring dashboards",
          "Operations documentation",
        ],
      },
    ],
    service: "backend",
    technologyCategories: [
      {
        title: "Runtime & Languages",
        color: "text-violet-400",
        technologies: ["Node.js", "TypeScript", "JavaScript", "Python"],
      },
      {
        title: "Frameworks",
        color: "text-violet-400",
        technologies: ["Express.js", "NestJS", "Fastify", "Koa"],
      },
      {
        title: "Databases",
        color: "text-violet-400",
        technologies: [
          "PostgreSQL",
          "MongoDB",
          "MySQL",
          "Redis",
          "Elasticsearch",
        ],
      },
      {
        title: "Authentication & Security",
        color: "text-violet-400",
        technologies: [
          "JWT",
          "OAuth 2.0",
          "Passport.js",
          "bcrypt",
          "Helmet.js",
        ],
      },
      {
        title: "APIs & Integrations",
        color: "text-violet-400",
        technologies: [
          "REST",
          "GraphQL",
          "WebSockets",
          "gRPC",
          "Stripe",
          "SendGrid",
        ],
      },
      {
        title: "DevOps & Infrastructure",
        color: "text-violet-400",
        technologies: [
          "Docker",
          "Kubernetes",
          "AWS",
          "GitHub Actions",
          "Nginx",
          "PM2",
        ],
      },
      {
        title: "Testing & Quality",
        color: "text-violet-400",
        technologies: ["Jest", "Mocha", "Supertest", "Artillery", "Postman"],
      },
    ],
    technologyExplanations: [
      {
        title: "Node.js & Express",
        description:
          "JavaScript on the server means full-stack consistency. Node.js is proven at scale (Netflix, PayPal, NASA), and Express provides a lightweight, flexible foundation for building APIs.",
      },
      {
        title: "PostgreSQL",
        description:
          "The world's most advanced open-source relational database. ACID compliance, complex queries, JSON support, and proven reliability for mission-critical applications.",
      },
      {
        title: "TypeScript",
        description:
          "Type safety catches errors at compile time, not in production. Better IDE support, self-documenting code, and easier refactoring as your codebase grows.",
      },
      {
        title: "Docker & Kubernetes",
        description:
          "Containerization ensures consistency across environments. Kubernetes provides orchestration, auto-scaling, and self-healing for production workloads.",
      },
    ],
    timelineItems: [
      {
        duration: "3-5",
        period: "WEEKS",
        label: "Simple APIs",
        description: "Basic CRUD operations, authentication",
      },
      {
        duration: "6-10",
        period: "WEEKS",
        label: "Complex Systems",
        description: "Multiple integrations, business logic",
      },
      {
        duration: "12-20",
        period: "WEEKS",
        label: "Enterprise Solutions",
        description: "Microservices, high availability",
      },
    ],
    useCases: [
      {
        title: "Mobile App Backend",
        description:
          "Power your iOS and Android apps with reliable, fast APIs that handle authentication, data storage, and real-time updates.",
      },
      {
        title: "SaaS Platforms",
        description:
          "Build multi-tenant architectures with subscription management, user permissions, and scalable infrastructure.",
      },
      {
        title: "E-commerce Systems",
        description:
          "Handle product catalogs, inventory management, order processing, and payment integration for online stores.",
      },
      {
        title: "Data Processing",
        description:
          "Process large datasets, generate reports, and provide analytics through efficient background jobs and APIs.",
      },
      {
        title: "IoT Applications",
        description:
          "Collect, process, and store data from IoT devices. Real-time monitoring and data visualization.",
      },
      {
        title: "Legacy Modernization",
        description:
          "Replace outdated backend systems with modern, maintainable APIs that integrate with existing infrastructure.",
      },
    ],
  },
  fullstack: {
    features: [
      {
        icon: Layers,
        title: "End-to-End Development",
        description:
          "Complete ownership from database to UI. One developer, one vision, seamless integration across every layer.",
      },
      {
        icon: Rocket,
        title: "Faster Time to Market",
        description:
          "No coordination overhead between front-end and back-end teams. Build features faster with unified architecture.",
      },
      {
        icon: Users,
        title: "Consistent Vision",
        description:
          "Single point of accountability ensures your product vision is maintained throughout the entire stack.",
      },
      {
        icon: Workflow,
        title: "Seamless Integration",
        description:
          "APIs designed for the front-end that uses them. No miscommunication, no integration surprises.",
      },
      {
        icon: Shield,
        title: "Full-Stack Security",
        description:
          "Security implemented at every layer—from SQL injection prevention to XSS protection and beyond.",
      },
      {
        icon: TrendingUp,
        title: "Built to Scale",
        description:
          "Architecture designed for growth. Start simple, scale when needed, without rebuilding from scratch.",
      },
    ],
    footerPricing: {
      color: " from-pink-400 to-rose-500",
      title: "Ready to Get Started?",
      description:
        "Let's build your complete application from start to finish. Get in touch to discuss your project.",
      cta: {
        text: "Schedule a Call",
        icon: ArrowRight,
      },
      pricing: {
        startingPrice: "$10,000",
        description: "for simple sites",
      },
    },
    includedServices: [
      "Complete UI/UX Implementation",
      "Responsive Front-End Development",
      "RESTful or GraphQL API Development",
      "Database Design & Implementation",
      "User Authentication & Authorization",
      "Admin Dashboard & Content Management",
      "Real-Time Features (WebSockets, Live Updates)",
      "Payment Processing & Subscriptions",
      "Email Notifications & Communications",
      "File Upload & Media Management",
      "Search Functionality & Filtering",
      "Analytics Integration & Reporting",
      "Deployment & Hosting Setup",
      "CI/CD Pipeline Configuration",
      "Performance Optimization",
      "Security Hardening",
      "Documentation & Training",
      "Ongoing Maintenance & Support",
    ],
    processSteps: [
      {
        number: "01",
        title: "Product Planning",
        description:
          "Comprehensive planning session to understand your vision, users, and requirements. We define features, user flows, data models, and create a complete technical roadmap.",
        deliverables: [
          "Product requirements document",
          "User stories and flows",
          "Technical architecture",
          "Project timeline",
        ],
      },
      {
        number: "02",
        title: "Design & Architecture",
        description:
          "Create wireframes and design system. Plan database schema, API endpoints, and component structure. Everything aligned before writing code.",
        deliverables: [
          "Wireframes/mockups",
          "Database schema",
          "API specifications",
          "Component architecture",
        ],
      },
      {
        number: "03",
        title: "Iterative Development",
        description:
          "Build features in sprints with regular demos. You see working software every week and provide feedback. Continuous integration ensures quality.",
        deliverables: [
          "Working features",
          "Weekly demos",
          "Test coverage",
          "Progress reports",
        ],
      },
      {
        number: "04",
        title: "Testing & Refinement",
        description:
          "Comprehensive testing across the stack. Performance optimization, security hardening, and user acceptance testing to ensure everything works perfectly.",
        deliverables: [
          "Test reports",
          "Performance metrics",
          "Security audit",
          "Bug fixes",
        ],
      },
      {
        number: "05",
        title: "Launch & Support",
        description:
          "Production deployment with monitoring and analytics. Training documentation for your team. Ongoing support to ensure long-term success.",
        deliverables: [
          "Production deployment",
          "User documentation",
          "Admin training",
          "Support plan",
        ],
      },
    ],
    service: "fullstack",
    technologyCategories: [
      {
        title: "Front-End",
        color: "text-pink-400",
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Next.js",
          "Redux",
          "React Query",
        ],
      },
      {
        title: "Back-End",
        color: "text-pink-400",
        technologies: ["Node.js", "Express", "NestJS", "GraphQL", "WebSockets"],
      },
      {
        title: "Database & Storage",
        color: "text-pink-400",
        technologies: [
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "AWS S3",
          "Cloudinary",
        ],
      },
      {
        title: "Authentication & Security",
        color: "text-pink-400",
        technologies: [
          "JWT",
          "OAuth 2.0",
          "Passport.js",
          "bcrypt",
          "CORS",
          "Helmet",
        ],
      },
      {
        title: "Payments & Communications",
        color: "text-pink-400",
        technologies: ["Stripe", "PayPal", "SendGrid", "Twilio", "Socket.io"],
      },
      {
        title: "DevOps & Deployment",
        color: "text-pink-400",
        technologies: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx"],
      },
      {
        title: "Testing & Quality",
        color: "text-pink-400",
        technologies: ["Jest", "Vitest", "Cypress", "Playwright", "Supertest"],
      },
    ],
    technologyExplanations: [
      {
        title: "React + Node.js Stack",
        description:
          "JavaScript everywhere means your full-stack application uses one language. Easier to maintain, faster to develop, and better team collaboration.",
      },
      {
        title: "TypeScript Throughout",
        description:
          "End-to-end type safety from database to UI. Share types between front-end and back-end, catch errors at compile time, self-documenting code.",
      },
      {
        title: "Next.js Framework",
        description:
          "React framework with server-side rendering, API routes, and optimal performance out of the box. SEO-friendly and production-ready.",
      },
      {
        title: "PostgreSQL + Redis",
        description:
          "PostgreSQL for relational data, Redis for caching and sessions. Best of both worlds for performance and data integrity.",
      },
    ],
    timelineItems: [
      {
        duration: "6-8",
        period: "WEEKS",
        label: "Simple MVPs",
        description: "Basic CRUD apps, simple workflows",
      },
      {
        duration: "10-16",
        period: "WEEKS",
        label: "Medium Apps",
        description: "Multi-user systems, dashboards",
      },
      {
        duration: "16-24",
        period: "WEEKS",
        label: "Complex Platforms",
        description: "Advanced features, integrations",
      },
    ],
    useCases: [
      {
        title: "Startup MVPs",
        description:
          "Launch your product quickly with a complete, production-ready application. Perfect for validating ideas and attracting investors.",
      },
      {
        title: "SaaS Platforms",
        description:
          "Build subscription-based applications with user management, billing, and feature-rich dashboards.",
      },
      {
        title: "Internal Tools",
        description:
          "Create custom business applications for inventory management, CRM, project management, or workflow automation.",
      },
      {
        title: "Marketplace Applications",
        description:
          "Two-sided marketplaces connecting buyers and sellers with payments, messaging, and review systems.",
      },
      {
        title: "Social Platforms",
        description:
          "Community-driven applications with user profiles, feeds, messaging, and social interactions.",
      },
      {
        title: "System Replacements",
        description:
          "Modernize legacy systems with new full-stack applications that are easier to maintain and extend.",
      },
    ],
  },
  webdevelopment: {
    features: [
      {
        icon: Globe,
        title: "WordPress Expertise",
        description:
          "Custom themes, plugins, and full WordPress development. From simple blogs to complex business sites.",
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Ready",
        description:
          "WooCommerce and Shopify integration. Complete online stores with payment processing and inventory management.",
      },
      {
        icon: FileText,
        title: "Easy Content Management",
        description:
          "User-friendly CMS that you can manage yourself. No coding required for updates, blog posts, or page edits.",
      },
      {
        icon: Palette,
        title: "Custom Design",
        description:
          "Unique, branded designs that stand out. No cookie-cutter templates—your site reflects your business.",
      },
      {
        icon: Search,
        title: "SEO Optimized",
        description:
          "Built for search engines from day one. Proper structure, fast loading, and optimized content for better rankings.",
      },
      {
        icon: BarChart,
        title: "Analytics & Insights",
        description:
          "Track visitors, conversions, and user behavior. Make data-driven decisions to grow your business.",
      },
    ],
    footerPricing: {
      color: " from-amber-400 to-orange-500",
      title: "Ready to Get Started?",
      description:
        "Let's build a website that works for your business. Get in touch to discuss your project.",
      cta: {
        text: "Schedule a Call",
        icon: ArrowRight,
      },
      pricing: {
        startingPrice: "$3,000",
        description: "for simple sites",
      },
    },
    includedServices: [
      "Custom WordPress Theme Development",
      "WordPress Plugin Development & Customization",
      "WooCommerce & E-commerce Setup",
      "Responsive, Mobile-First Design",
      "Custom Post Types & Taxonomies",
      "Advanced Custom Fields (ACF) Implementation",
      "Page Builder Setup (Elementor, Gutenberg)",
      "Blog Setup & Content Strategy",
      "Contact Forms & Lead Capture",
      "Newsletter Integration (Mailchimp, ConvertKit)",
      "SEO Optimization & Meta Tags",
      "Google Analytics & Tracking Setup",
      "Security Hardening & SSL",
      "Performance Optimization & Caching",
      "Backup & Maintenance Setup",
      "Content Migration from Old Sites",
      "Training & Documentation",
      "Ongoing Support & Updates",
    ],
    processSteps: [
      {
        number: "01",
        title: "Discovery & Strategy",
        description:
          "Understanding your business, goals, and target audience. We discuss your brand, competition, and what success looks like for your website.",
        deliverables: [
          "Project brief",
          "Competitor analysis",
          "Content strategy",
          "Sitemap",
        ],
      },
      {
        number: "02",
        title: "Design & Planning",
        description:
          "Create mockups that reflect your brand. Plan the site structure, choose colors and fonts, and get your approval before development.",
        deliverables: [
          "Design mockups",
          "Style guide",
          "Content outline",
          "Technical plan",
        ],
      },
      {
        number: "03",
        title: "Development & Build",
        description:
          "Build your WordPress site with custom theme and necessary plugins. Implement all features, forms, and integrations.",
        deliverables: [
          "Working WordPress site",
          "Custom theme",
          "Plugin setup",
          "Staging site",
        ],
      },
      {
        number: "04",
        title: "Content & Testing",
        description:
          "Add your content, optimize images, test on all devices and browsers. SEO optimization and performance tuning.",
        deliverables: [
          "Content added",
          "SEO optimization",
          "Cross-device testing",
          "Performance report",
        ],
      },
      {
        number: "05",
        title: "Launch & Training",
        description:
          "Deploy to your hosting, configure domain and email. Train you on managing content, making updates, and using WordPress.",
        deliverables: [
          "Live website",
          "Training videos",
          "Documentation",
          "Support plan",
        ],
      },
    ],
    service: "webdevelopment",
    technologyCategories: [
      {
        title: "CMS Platforms",
        color: "text-amber-400",
        technologies: [
          "WordPress",
          "WooCommerce",
          "Shopify",
          "Webflow",
          "Ghost",
        ],
      },
      {
        title: "WordPress Ecosystem",
        color: "text-amber-400",
        technologies: [
          "ACF Pro",
          "Elementor",
          "Yoast SEO",
          "WPForms",
          "Wordfence",
          "WP Rocket",
        ],
      },
      {
        title: "Development Tools",
        color: "text-amber-400",
        technologies: [
          "PHP",
          "JavaScript",
          "SASS",
          "Composer",
          "Local by Flywheel",
          "Git",
        ],
      },
      {
        title: "Design & Styling",
        color: "text-amber-400",
        technologies: [
          "Tailwind CSS",
          "Bootstrap",
          "Figma",
          "Adobe XD",
          "Photoshop",
        ],
      },
      {
        title: "Marketing & SEO",
        color: "text-amber-400",
        technologies: [
          "Google Analytics",
          "Google Search Console",
          "Mailchimp",
          "Hotjar",
          "Schema.org",
        ],
      },
      {
        title: "Hosting & Performance",
        color: "text-amber-400",
        technologies: [
          "Cloudflare",
          "AWS",
          "Kinsta",
          "WP Engine",
          "Imagify",
          "Redis",
        ],
      },
    ],
    technologyExplanations: [
      {
        title: "WordPress - The Industry Standard",
        description:
          "Powers 43% of all websites globally. Massive plugin ecosystem, SEO-friendly, and perfect for businesses that want control over their content. It's proven, reliable, and scales with your growth.",
      },
      {
        title: "WooCommerce for E-commerce",
        description:
          "The most popular e-commerce platform with 6+ million installations. Flexible, extensible, and integrates with all major payment gateways. Perfect for selling physical or digital products.",
      },
      {
        title: "Custom Themes vs Builders",
        description:
          "I develop custom WordPress themes when you need maximum performance and control, or configure page builders like Elementor when you want easier content editing. The right tool for the right job.",
      },
      {
        title: "Performance & Security",
        description:
          "WordPress sites get a bad reputation for speed and security—but only when built poorly. I implement caching, CDN, optimized images, and security hardening so your site is fast and safe.",
      },
    ],
    timelineItems: [
      {
        duration: "2-3",
        period: "WEEKS",
        label: "Simple Sites",
        description: "Brochure sites, landing pages",
      },
      {
        duration: "4-6",
        period: "WEEKS",
        label: "Business Sites",
        description: "Multi-page sites with forms, blog",
      },
      {
        duration: "6-10",
        period: "WEEKS",
        label: "E-commerce Sites",
        description: "Online stores with WooCommerce",
      },
    ],
    useCases: [
      {
        title: "Small Business Websites",
        description:
          "Professional websites for service businesses, consultants, and local companies. Showcase your services and attract customers.",
      },
      {
        title: "E-commerce Stores",
        description:
          "Online shops with product catalogs, shopping carts, payment processing, and inventory management using WooCommerce.",
      },
      {
        title: "Blogs & Content Sites",
        description:
          "Publishing platforms for bloggers, creators, and media companies. Easy-to-manage content with powerful features.",
      },
      {
        title: "Portfolio Websites",
        description:
          "Showcase your work with beautiful galleries, case studies, and project displays. Perfect for creatives and agencies.",
      },
      {
        title: "Membership Sites",
        description:
          "Subscription-based sites with member-only content, courses, or communities. Recurring revenue made easy.",
      },
      {
        title: "Landing Pages",
        description:
          "High-converting pages for campaigns, product launches, or lead generation. Optimized for maximum conversions.",
      },
    ],
  },
}
