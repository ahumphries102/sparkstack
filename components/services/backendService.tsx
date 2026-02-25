import {
  Code,
  Check,
  ArrowRight,
  Database,
  Lock,
  Server,
  Cloud,
  Layers,
  Zap,
  LucideIcon,
} from "lucide-react"

interface FeatureCard {
  icon: LucideIcon
  title: string
  description: string
}

interface UseCase {
  title: string
  description: string
}

interface ProcessStep {
  number: string
  title: string
  description: string
  deliverables: string[]
}

interface TimelineItem {
  duration: string
  period: string
  label: string
  description: string
}

interface TechnologyCategory {
  title: string
  color: string
  technologies: string[]
}

interface TechnologyExplanation {
  title: string
  description: string
}
export default function BackEndDetailPage({activeTab}: {activeTab: string}) {

  const featureCards: FeatureCard[] = [
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
  ]

  const includedServices: string[] = [
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
  ]

  const useCases: UseCase[] = [
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
  ]

  const processSteps: ProcessStep[] = [
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
  ]

  const timelineItems: TimelineItem[] = [
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
  ]

  const technologyCategories: TechnologyCategory[] = [
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
      technologies: ["JWT", "OAuth 2.0", "Passport.js", "bcrypt", "Helmet.js"],
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
  ]

  const technologyExplanations: TechnologyExplanation[] = [
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
  ]
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-20 px-6">
      <div className="min-w-7xl max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center">
              <Code className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1
                className="text-5xl font-black mb-2"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Back-End Development
              </h1>
              <p className="text-xl text-zinc-400">
                Robust server-side solutions for your applications
              </p>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                The Engine That Powers Everything
              </h2>
              <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Your back-end is the invisible engine that makes everything
                  work. It needs to be fast, secure, reliable, and built to
                  scale as your business grows. A poorly designed back-end leads
                  to slow performance, security vulnerabilities, and technical
                  debt that becomes expensive to fix.
                </p>
                <p>
                  I architect and develop server-side solutions using Node.js
                  and modern best practices, ensuring your data is protected,
                  your APIs are performant, and your infrastructure can handle
                  whatever comes its way. From authentication systems to complex
                  business logic, payment processing to real-time features—I
                  build production-ready code that's maintainable and
                  well-documented.
                </p>
                <p>
                  Whether you're building a simple API or a complex
                  microservices architecture, I bring 8+ years of experience in
                  designing scalable systems that handle millions of requests,
                  protect sensitive data, and provide the solid foundation your
                  application needs to succeed.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCards.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-violet-400/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-violet-400/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-violet-400 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-zinc-950" />
                    </div>
                    <span className="text-zinc-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Perfect For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700"
                  >
                    <h3 className="text-lg font-bold mb-2 text-violet-400">
                      {useCase.title}
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === "process" && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Development Process</h2>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center text-2xl font-black">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-zinc-400 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-violet-400/10 border border-violet-400/20 rounded-full text-sm text-violet-400"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Typical Timeline</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-zinc-800/50 rounded-xl"
                  >
                    <div className="text-4xl font-black text-violet-400 mb-2">
                      {item.duration}
                    </div>
                    <div className="text-sm text-zinc-400 mb-2">
                      {item.period}
                    </div>
                    <div className="text-zinc-300">{item.label}</div>
                    <div className="text-sm text-zinc-500 mt-2">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Technologies Tab */}
        {activeTab === "technologies" && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>

              {technologyCategories.map((category, index) => (
                <div key={index} className="mb-12 last:mb-0">
                  <h3 className={`text-xl font-bold mb-4 ${category.color}`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Why These Technologies?
              </h2>
              <div className="space-y-6 text-zinc-300">
                {technologyExplanations.map((explanation, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-2 text-violet-400">
                      {explanation.title}
                    </h3>
                    <p className="leading-relaxed">{explanation.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-black mb-4 text-zinc-950">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zinc-900 mb-8 max-w-2xl mx-auto">
            Let's build a solid foundation for your application. Get in touch to
            discuss your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-zinc-950 text-white rounded-xl font-semibold hover:bg-zinc-900 transition-all transform hover:scale-105 flex items-center gap-2">
              Schedule a Call
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-zinc-950 rounded-xl font-semibold hover:bg-zinc-100 transition-all transform hover:scale-105">
              View Portfolio
            </button>
          </div>
          <div className="mt-8 text-zinc-900">
            <p className="text-lg font-semibold">Starting at $6,000</p>
            <p className="text-sm">Complex systems quoted individually</p>
          </div>
        </div>
      </div>
    </div>
  )
}
