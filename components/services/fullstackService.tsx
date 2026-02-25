import { Zap, Check, ArrowRight, Layers, Rocket, Users, Workflow, Shield, TrendingUp, LucideIcon } from 'lucide-react';
interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

interface TimelineItem {
  duration: string;
  period: string;
  label: string;
  description: string;
}

interface TechnologyCategory {
  title: string;
  color: string;
  technologies: string[];
}

interface TechnologyExplanation {
  title: string;
  description: string;
}

export default function FullStackDetailPage({activeTab}: {activeTab: string}) {

  const featureCards: FeatureCard[] = [
    {
      icon: Layers,
      title: 'End-to-End Development',
      description: 'Complete ownership from database to UI. One developer, one vision, seamless integration across every layer.'
    },
    {
      icon: Rocket,
      title: 'Faster Time to Market',
      description: 'No coordination overhead between front-end and back-end teams. Build features faster with unified architecture.'
    },
    {
      icon: Users,
      title: 'Consistent Vision',
      description: 'Single point of accountability ensures your product vision is maintained throughout the entire stack.'
    },
    {
      icon: Workflow,
      title: 'Seamless Integration',
      description: 'APIs designed for the front-end that uses them. No miscommunication, no integration surprises.'
    },
    {
      icon: Shield,
      title: 'Full-Stack Security',
      description: 'Security implemented at every layer—from SQL injection prevention to XSS protection and beyond.'
    },
    {
      icon: TrendingUp,
      title: 'Built to Scale',
      description: 'Architecture designed for growth. Start simple, scale when needed, without rebuilding from scratch.'
    }
  ];

  const includedServices: string[] = [
    'Complete UI/UX Implementation',
    'Responsive Front-End Development',
    'RESTful or GraphQL API Development',
    'Database Design & Implementation',
    'User Authentication & Authorization',
    'Admin Dashboard & Content Management',
    'Real-Time Features (WebSockets, Live Updates)',
    'Payment Processing & Subscriptions',
    'Email Notifications & Communications',
    'File Upload & Media Management',
    'Search Functionality & Filtering',
    'Analytics Integration & Reporting',
    'Deployment & Hosting Setup',
    'CI/CD Pipeline Configuration',
    'Performance Optimization',
    'Security Hardening',
    'Documentation & Training',
    'Ongoing Maintenance & Support'
  ];

  const useCases: UseCase[] = [
    {
      title: 'Startup MVPs',
      description: 'Launch your product quickly with a complete, production-ready application. Perfect for validating ideas and attracting investors.'
    },
    {
      title: 'SaaS Platforms',
      description: 'Build subscription-based applications with user management, billing, and feature-rich dashboards.'
    },
    {
      title: 'Internal Tools',
      description: 'Create custom business applications for inventory management, CRM, project management, or workflow automation.'
    },
    {
      title: 'Marketplace Applications',
      description: 'Two-sided marketplaces connecting buyers and sellers with payments, messaging, and review systems.'
    },
    {
      title: 'Social Platforms',
      description: 'Community-driven applications with user profiles, feeds, messaging, and social interactions.'
    },
    {
      title: 'System Replacements',
      description: 'Modernize legacy systems with new full-stack applications that are easier to maintain and extend.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Product Planning',
      description: 'Comprehensive planning session to understand your vision, users, and requirements. We define features, user flows, data models, and create a complete technical roadmap.',
      deliverables: ['Product requirements document', 'User stories and flows', 'Technical architecture', 'Project timeline']
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'Create wireframes and design system. Plan database schema, API endpoints, and component structure. Everything aligned before writing code.',
      deliverables: ['Wireframes/mockups', 'Database schema', 'API specifications', 'Component architecture']
    },
    {
      number: '03',
      title: 'Iterative Development',
      description: 'Build features in sprints with regular demos. You see working software every week and provide feedback. Continuous integration ensures quality.',
      deliverables: ['Working features', 'Weekly demos', 'Test coverage', 'Progress reports']
    },
    {
      number: '04',
      title: 'Testing & Refinement',
      description: 'Comprehensive testing across the stack. Performance optimization, security hardening, and user acceptance testing to ensure everything works perfectly.',
      deliverables: ['Test reports', 'Performance metrics', 'Security audit', 'Bug fixes']
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Production deployment with monitoring and analytics. Training documentation for your team. Ongoing support to ensure long-term success.',
      deliverables: ['Production deployment', 'User documentation', 'Admin training', 'Support plan']
    }
  ];

  const timelineItems: TimelineItem[] = [
    {
      duration: '6-8',
      period: 'WEEKS',
      label: 'Simple MVPs',
      description: 'Basic CRUD apps, simple workflows'
    },
    {
      duration: '10-16',
      period: 'WEEKS',
      label: 'Medium Apps',
      description: 'Multi-user systems, dashboards'
    },
    {
      duration: '16-24',
      period: 'WEEKS',
      label: 'Complex Platforms',
      description: 'Advanced features, integrations'
    }
  ];

  const technologyCategories: TechnologyCategory[] = [
    {
      title: 'Front-End',
      color: 'text-pink-400',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'React Query']
    },
    {
      title: 'Back-End',
      color: 'text-pink-400',
      technologies: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'WebSockets']
    },
    {
      title: 'Database & Storage',
      color: 'text-pink-400',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS S3', 'Cloudinary']
    },
    {
      title: 'Authentication & Security',
      color: 'text-pink-400',
      technologies: ['JWT', 'OAuth 2.0', 'Passport.js', 'bcrypt', 'CORS', 'Helmet']
    },
    {
      title: 'Payments & Communications',
      color: 'text-pink-400',
      technologies: ['Stripe', 'PayPal', 'SendGrid', 'Twilio', 'Socket.io']
    },
    {
      title: 'DevOps & Deployment',
      color: 'text-pink-400',
      technologies: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Nginx']
    },
    {
      title: 'Testing & Quality',
      color: 'text-pink-400',
      technologies: ['Jest', 'Vitest', 'Cypress', 'Playwright', 'Supertest']
    }
  ];

  const technologyExplanations: TechnologyExplanation[] = [
    {
      title: 'React + Node.js Stack',
      description: 'JavaScript everywhere means your full-stack application uses one language. Easier to maintain, faster to develop, and better team collaboration.'
    },
    {
      title: 'TypeScript Throughout',
      description: 'End-to-end type safety from database to UI. Share types between front-end and back-end, catch errors at compile time, self-documenting code.'
    },
    {
      title: 'Next.js Framework',
      description: 'React framework with server-side rendering, API routes, and optimal performance out of the box. SEO-friendly and production-ready.'
    },
    {
      title: 'PostgreSQL + Redis',
      description: 'PostgreSQL for relational data, Redis for caching and sessions. Best of both worlds for performance and data integrity.'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-20 px-6">
      <div className="min-w-7xl max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-black mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                Full-Stack Development
              </h1>
              <p className="text-xl text-zinc-400">Complete end-to-end web application development</p>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Everything You Need, One Developer</h2>
              <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Why coordinate between multiple developers when one expert can handle it all? Full-stack development means seamless integration, faster communication, and a cohesive vision from database to deployment. No miscommunication between teams, no integration headaches—just clean code that works together harmoniously.
                </p>
                <p>
                  I've spent years mastering both the client and server sides of web development, allowing me to architect complete solutions that work together seamlessly. From initial concept to production deployment, I manage every aspect of your application, ensuring consistency, quality, and performance at every layer of the stack.
                </p>
                <p>
                  Whether you're an entrepreneur with a product vision, a startup building an MVP, or a business replacing legacy systems, I deliver fully functional web applications that are ready to scale. You get a complete solution—front-end, back-end, database, deployment, and ongoing support—all from one experienced developer who understands the full picture.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCards.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-pink-400/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-pink-400/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-pink-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center mt-1">
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
                  <div key={index} className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
                    <h3 className="text-lg font-bold mb-2 text-pink-400">{useCase.title}</h3>
                    <p className="text-zinc-400 text-sm">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Development Process</h2>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center text-2xl font-black">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-zinc-400 mb-4 leading-relaxed">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <span key={idx} className="px-3 py-1 bg-pink-400/10 border border-pink-400/20 rounded-full text-sm text-pink-400">
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
                  <div key={index} className="text-center p-6 bg-zinc-800/50 rounded-xl">
                    <div className="text-4xl font-black text-pink-400 mb-2">{item.duration}</div>
                    <div className="text-sm text-zinc-400 mb-2">{item.period}</div>
                    <div className="text-zinc-300">{item.label}</div>
                    <div className="text-sm text-zinc-500 mt-2">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Technologies Tab */}
        {activeTab === 'technologies' && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
              
              {technologyCategories.map((category, index) => (
                <div key={index} className="mb-12 last:mb-0">
                  <h3 className={`text-xl font-bold mb-4 ${category.color}`}>{category.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.technologies.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Why These Technologies?</h2>
              <div className="space-y-6 text-zinc-300">
                {technologyExplanations.map((explanation, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-2 text-pink-400">{explanation.title}</h3>
                    <p className="leading-relaxed">{explanation.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-black mb-4 text-zinc-950">Ready to Get Started?</h2>
          <p className="text-xl text-zinc-900 mb-8 max-w-2xl mx-auto">
            Let's build your complete application from start to finish. Get in touch to discuss your project.
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
            <p className="text-lg font-semibold">Starting at $10,000 for MVPs</p>
            <p className="text-sm">Custom quotes for complex applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};