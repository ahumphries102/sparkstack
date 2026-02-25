import {
  Camera,
  Check,
  ArrowRight,
  Code2,
  Palette,
  Zap,
  Shield,
  Globe,
  Smartphone,
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

export default function FrontEndDetailPage({activeTab}: {activeTab: string}) {
  const featureCards: FeatureCard[] = [
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
  ]

  const includedServices: string[] = [
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
  ]

  const useCases: UseCase[] = [
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
  ]

  const processSteps: ProcessStep[] = [
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
  ]

  const timelineItems: TimelineItem[] = [
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
  ]

  const technologyCategories: TechnologyCategory[] = [
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
  ]

  const technologyExplanations: TechnologyExplanation[] = [
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
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-20 px-6">
      <div className="min-w-7xl max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1
                className="text-5xl font-black mb-2"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Front-End Development
              </h1>
              <p className="text-xl text-zinc-400">
                Beautiful, responsive interfaces that users love
              </p>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Main Description */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Transform Your Vision Into Reality
              </h2>
              <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                <p>
                  In today's digital-first world, your website or application is
                  often the first impression customers have of your brand. I
                  specialize in creating stunning, high-performance front-end
                  experiences that don't just look beautiful—they convert
                  visitors into customers and keep users engaged.
                </p>
                <p>
                  Using cutting-edge frameworks like React and Vue, combined
                  with modern CSS techniques and performance optimization
                  strategies, I build interfaces that are lightning-fast,
                  intuitive to use, and accessible to everyone. Every pixel is
                  crafted with intention, every interaction designed to delight,
                  and every line of code written with maintainability in mind.
                </p>
                <p>
                  Whether you're launching a new product, redesigning an
                  existing platform, or building a complex web application, I
                  bring 8+ years of experience and a passion for creating
                  exceptional digital experiences that users love and businesses
                  depend on.
                </p>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCards.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
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
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-zinc-950" />
                    </div>
                    <span className="text-zinc-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Perfect For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700"
                  >
                    <h3 className="text-lg font-bold mb-2 text-cyan-400">
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
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-2xl font-black">
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
                            className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-sm text-cyan-400"
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

            {/* Timeline */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Typical Timeline</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-zinc-800/50 rounded-xl"
                  >
                    <div className="text-4xl font-black text-cyan-400 mb-2">
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

            {/* Why These Technologies */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Why These Technologies?
              </h2>
              <div className="space-y-6 text-zinc-300">
                {technologyExplanations.map((explanation, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-2 text-cyan-400">
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
        <div className="mt-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-black mb-4 text-zinc-950">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zinc-900 mb-8 max-w-2xl mx-auto">
            Let's build something amazing together. Get in touch to discuss your
            project.
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
            <p className="text-lg font-semibold">Starting at $5,000</p>
            <p className="text-sm">Custom quotes for larger projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}
