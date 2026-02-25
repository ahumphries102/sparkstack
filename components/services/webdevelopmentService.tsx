import { Coffee, Check, ArrowRight, Globe, ShoppingCart, FileText, Palette, Search, BarChart, LucideIcon } from 'lucide-react';

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

export default function WebDevelopmentDetailPage({activeTab}: {activeTab: string}) {

  const featureCards: FeatureCard[] = [
    {
      icon: Globe,
      title: 'WordPress Expertise',
      description: 'Custom themes, plugins, and full WordPress development. From simple blogs to complex business sites.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Ready',
      description: 'WooCommerce and Shopify integration. Complete online stores with payment processing and inventory management.'
    },
    {
      icon: FileText,
      title: 'Easy Content Management',
      description: 'User-friendly CMS that you can manage yourself. No coding required for updates, blog posts, or page edits.'
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Unique, branded designs that stand out. No cookie-cutter templates—your site reflects your business.'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built for search engines from day one. Proper structure, fast loading, and optimized content for better rankings.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Track visitors, conversions, and user behavior. Make data-driven decisions to grow your business.'
    }
  ];

  const includedServices: string[] = [
    'Custom WordPress Theme Development',
    'WordPress Plugin Development & Customization',
    'WooCommerce & E-commerce Setup',
    'Responsive, Mobile-First Design',
    'Custom Post Types & Taxonomies',
    'Advanced Custom Fields (ACF) Implementation',
    'Page Builder Setup (Elementor, Gutenberg)',
    'Blog Setup & Content Strategy',
    'Contact Forms & Lead Capture',
    'Newsletter Integration (Mailchimp, ConvertKit)',
    'SEO Optimization & Meta Tags',
    'Google Analytics & Tracking Setup',
    'Security Hardening & SSL',
    'Performance Optimization & Caching',
    'Backup & Maintenance Setup',
    'Content Migration from Old Sites',
    'Training & Documentation',
    'Ongoing Support & Updates'
  ];

  const useCases: UseCase[] = [
    {
      title: 'Small Business Websites',
      description: 'Professional websites for service businesses, consultants, and local companies. Showcase your services and attract customers.'
    },
    {
      title: 'E-commerce Stores',
      description: 'Online shops with product catalogs, shopping carts, payment processing, and inventory management using WooCommerce.'
    },
    {
      title: 'Blogs & Content Sites',
      description: 'Publishing platforms for bloggers, creators, and media companies. Easy-to-manage content with powerful features.'
    },
    {
      title: 'Portfolio Websites',
      description: 'Showcase your work with beautiful galleries, case studies, and project displays. Perfect for creatives and agencies.'
    },
    {
      title: 'Membership Sites',
      description: 'Subscription-based sites with member-only content, courses, or communities. Recurring revenue made easy.'
    },
    {
      title: 'Landing Pages',
      description: 'High-converting pages for campaigns, product launches, or lead generation. Optimized for maximum conversions.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Understanding your business, goals, and target audience. We discuss your brand, competition, and what success looks like for your website.',
      deliverables: ['Project brief', 'Competitor analysis', 'Content strategy', 'Sitemap']
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Create mockups that reflect your brand. Plan the site structure, choose colors and fonts, and get your approval before development.',
      deliverables: ['Design mockups', 'Style guide', 'Content outline', 'Technical plan']
    },
    {
      number: '03',
      title: 'Development & Build',
      description: 'Build your WordPress site with custom theme and necessary plugins. Implement all features, forms, and integrations.',
      deliverables: ['Working WordPress site', 'Custom theme', 'Plugin setup', 'Staging site']
    },
    {
      number: '04',
      title: 'Content & Testing',
      description: 'Add your content, optimize images, test on all devices and browsers. SEO optimization and performance tuning.',
      deliverables: ['Content added', 'SEO optimization', 'Cross-device testing', 'Performance report']
    },
    {
      number: '05',
      title: 'Launch & Training',
      description: 'Deploy to your hosting, configure domain and email. Train you on managing content, making updates, and using WordPress.',
      deliverables: ['Live website', 'Training videos', 'Documentation', 'Support plan']
    }
  ];

  const timelineItems: TimelineItem[] = [
    {
      duration: '2-3',
      period: 'WEEKS',
      label: 'Simple Sites',
      description: 'Brochure sites, landing pages'
    },
    {
      duration: '4-6',
      period: 'WEEKS',
      label: 'Business Sites',
      description: 'Multi-page sites with forms, blog'
    },
    {
      duration: '6-10',
      period: 'WEEKS',
      label: 'E-commerce Sites',
      description: 'Online stores with WooCommerce'
    }
  ];

  const technologyCategories: TechnologyCategory[] = [
    {
      title: 'CMS Platforms',
      color: 'text-amber-400',
      technologies: ['WordPress', 'WooCommerce', 'Shopify', 'Webflow', 'Ghost']
    },
    {
      title: 'WordPress Ecosystem',
      color: 'text-amber-400',
      technologies: ['ACF Pro', 'Elementor', 'Yoast SEO', 'WPForms', 'Wordfence', 'WP Rocket']
    },
    {
      title: 'Development Tools',
      color: 'text-amber-400',
      technologies: ['PHP', 'JavaScript', 'SASS', 'Composer', 'Local by Flywheel', 'Git']
    },
    {
      title: 'Design & Styling',
      color: 'text-amber-400',
      technologies: ['Tailwind CSS', 'Bootstrap', 'Figma', 'Adobe XD', 'Photoshop']
    },
    {
      title: 'Marketing & SEO',
      color: 'text-amber-400',
      technologies: ['Google Analytics', 'Google Search Console', 'Mailchimp', 'Hotjar', 'Schema.org']
    },
    {
      title: 'Hosting & Performance',
      color: 'text-amber-400',
      technologies: ['Cloudflare', 'AWS', 'Kinsta', 'WP Engine', 'Imagify', 'Redis']
    }
  ];

  const technologyExplanations: TechnologyExplanation[] = [
    {
      title: 'WordPress - The Industry Standard',
      description: 'Powers 43% of all websites globally. Massive plugin ecosystem, SEO-friendly, and perfect for businesses that want control over their content. It\'s proven, reliable, and scales with your growth.'
    },
    {
      title: 'WooCommerce for E-commerce',
      description: 'The most popular e-commerce platform with 6+ million installations. Flexible, extensible, and integrates with all major payment gateways. Perfect for selling physical or digital products.'
    },
    {
      title: 'Custom Themes vs Builders',
      description: 'I develop custom WordPress themes when you need maximum performance and control, or configure page builders like Elementor when you want easier content editing. The right tool for the right job.'
    },
    {
      title: 'Performance & Security',
      description: 'WordPress sites get a bad reputation for speed and security—but only when built poorly. I implement caching, CDN, optimized images, and security hardening so your site is fast and safe.'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-20 px-6">
      <div className="min-w-7xl max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center">
              <Coffee className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-black mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                Web Development
              </h1>
              <p className="text-xl text-zinc-400">Custom solutions for your unique business needs</p>
            </div>
          </div>
        </div>


        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">The Right Solution for Your Business</h2>
              <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Not every business needs a complex custom application. Sometimes what you need is a professional website you can manage yourself, an online store to sell products, or a blog to share your expertise. That's where WordPress and modern CMS platforms shine—powerful enough for anything you need, simple enough that you can manage it without a developer.
                </p>
                <p>
                  I specialize in WordPress development, from simple business sites to complex e-commerce stores. Whether you need a custom theme built from scratch, WooCommerce integration for selling products, or a content-rich blog with advanced features, I deliver solutions that are fast, secure, and easy for you to manage.
                </p>
                <p>
                  What makes my approach different? I don't just install a theme and call it done. I build custom solutions tailored to your brand, optimize for speed and SEO, implement proper security, and train you on managing your site. You get a professional website that works for your business, not against it.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCards.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-amber-400/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-amber-400" />
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
                    <div className="flex-shrink-0 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center mt-1">
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
                    <h3 className="text-lg font-bold mb-2 text-amber-400">{useCase.title}</h3>
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
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl font-black">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-zinc-400 mb-4 leading-relaxed">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <span key={idx} className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full text-sm text-amber-400">
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
                    <div className="text-4xl font-black text-amber-400 mb-2">{item.duration}</div>
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
                    <h3 className="text-xl font-bold mb-2 text-amber-400">{explanation.title}</h3>
                    <p className="leading-relaxed">{explanation.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-black mb-4 text-zinc-950">Ready to Get Started?</h2>
          <p className="text-xl text-zinc-900 mb-8 max-w-2xl mx-auto">
            Let's build a website that works for your business. Get in touch to discuss your project.
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
            <p className="text-lg font-semibold">Starting at $3,000 for simple sites</p>
            <p className="text-sm">Complex projects quoted individually</p>
          </div>
        </div>
      </div>
    </div>
  );
};
