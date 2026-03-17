import { LucideIcon } from 'lucide-react';
import { Camera, Code, Zap, Coffee } from 'lucide-react';

export interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export type AddOn = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'performance' | 'features' | 'design' | 'testing' | 'infrastructure' | 'integration' | 'content';
}

export interface ServicePricingData {
  serviceId: string;
  serviceName: string;
  icon: LucideIcon;
  gradient: string;
  tagline: string;
  packages: Package[];
  addOns: AddOn[];
}

export const pricingData: Record<string, ServicePricingData> = {
  frontend: {
    serviceId: 'frontend',
    serviceName: 'Front-End Development',
    icon: Camera,
    gradient: 'from-cyan-400 to-blue-500',
    tagline: 'Beautiful, responsive interfaces that users love',
    packages: [
      {
        id: 'starter',
        name: 'Starter',
        price: 1500,
        description: 'Perfect for simple landing pages and small sites',
        features: [
          'Up to 3 responsive pages',
          'Mobile-first responsive design',
          'Basic HTML/CSS/JavaScript',
          'Contact form integration',
          'Google Analytics setup',
          'Cross-browser testing',
          '2 rounds of revisions',
          '30 days post-launch support'
        ]
      },
      {
        id: 'standard',
        name: 'Standard',
        price: 3500,
        description: 'Great for business sites and marketing pages',
        features: [
          'Up to 8 responsive pages',
          'React or Vue.js framework',
          'Component-based architecture',
          'State management (Redux/Vuex)',
          'API integration (REST)',
          'Form validation & handling',
          'SEO optimization',
          'Performance optimization',
          'Cross-browser & device testing',
          '3 rounds of revisions',
          '60 days post-launch support'
        ],
        popular: true
      },
      {
        id: 'professional',
        name: 'Professional',
        price: 6500,
        description: 'For complex applications and dashboards',
        features: [
          'Unlimited pages/components',
          'Advanced React/Vue.js patterns',
          'TypeScript implementation',
          'Complex state management',
          'Multiple API integrations',
          'Advanced routing & navigation',
          'Component library/design system',
          'Comprehensive testing suite',
          'Accessibility compliance (WCAG 2.1)',
          'Performance monitoring setup',
          'Security best practices',
          'Deployment & CI/CD setup',
          '5 rounds of revisions',
          '90 days post-launch support'
        ]
      }
    ],
    addOns: [
      // Performance
      {
        id: 'pwa',
        name: 'Progressive Web App (PWA)',
        price: 800,
        description: 'Offline support, install prompt, app-like experience',
        category: 'performance'
      },
      {
        id: 'lazy-loading',
        name: 'Advanced Lazy Loading',
        price: 400,
        description: 'Image optimization, code splitting, route-based loading',
        category: 'performance'
      },
      {
        id: 'caching',
        name: 'Advanced Caching Strategy',
        price: 500,
        description: 'Service workers, local storage, optimized API caching',
        category: 'performance'
      },
      // Features
      {
        id: 'auth',
        name: 'User Authentication UI',
        price: 800,
        description: 'Login/signup forms, password reset, profile management UI',
        category: 'features'
      },
      {
        id: 'realtime',
        name: 'Real-Time Updates UI',
        price: 1000,
        description: 'Live notifications, instant data updates, websocket integration',
        category: 'features'
      },
      {
        id: 'search',
        name: 'Advanced Search & Filters',
        price: 900,
        description: 'Auto-complete, faceted search, dynamic filtering',
        category: 'features'
      },
      {
        id: 'i18n',
        name: 'Multi-Language Support',
        price: 1000,
        description: 'Translation management, locale switching, RTL support',
        category: 'features'
      },
      {
        id: 'analytics',
        name: 'Advanced Analytics',
        price: 600,
        description: 'Custom event tracking, heat maps, user journey analysis',
        category: 'features'
      },
      // Design
      {
        id: 'animations',
        name: 'Advanced Animations',
        price: 800,
        description: 'Complex transitions, scroll effects, micro-interactions',
        category: 'design'
      },
      {
        id: 'dark-mode',
        name: 'Dark Mode',
        price: 500,
        description: 'Theme switching, persistent preferences, optimized colors',
        category: 'design'
      },
      {
        id: 'custom-illustrations',
        name: 'Custom Illustrations',
        price: 1200,
        description: 'Unique SVG graphics, icons, branded visual elements',
        category: 'design'
      },
      // Testing
      {
        id: 'e2e-testing',
        name: 'End-to-End Testing',
        price: 1000,
        description: 'Cypress/Playwright tests, automated user flows',
        category: 'testing'
      },
      {
        id: 'visual-testing',
        name: 'Visual Regression Testing',
        price: 700,
        description: 'Screenshot comparison, UI consistency checks',
        category: 'testing'
      }
    ]
  },

  backend: {
    serviceId: 'backend',
    serviceName: 'Back-End Development',
    icon: Code,
    gradient: 'from-violet-400 to-purple-500',
    tagline: 'Robust server-side solutions for your applications',
    packages: [
      {
        id: 'starter',
        name: 'Starter API',
        price: 2000,
        description: 'Simple REST API for basic applications',
        features: [
          'Up to 5 API endpoints',
          'Basic CRUD operations',
          'User authentication (JWT)',
          'PostgreSQL or MongoDB database',
          'Basic error handling',
          'API documentation',
          '2 rounds of revisions',
          '30 days post-launch support'
        ]
      },
      {
        id: 'standard',
        name: 'Standard API',
        price: 4500,
        description: 'Comprehensive API for business applications',
        features: [
          'Up to 15 API endpoints',
          'Advanced business logic',
          'User auth & role-based access',
          'Database design & optimization',
          'File upload handling',
          'Email integration',
          'Background job processing',
          'Caching implementation',
          'Security hardening',
          'Comprehensive API docs',
          '3 rounds of revisions',
          '60 days post-launch support'
        ],
        popular: true
      },
      {
        id: 'professional',
        name: 'Enterprise API',
        price: 8000,
        description: 'Scalable, production-ready backend systems',
        features: [
          'Unlimited endpoints',
          'Microservices architecture',
          'GraphQL implementation',
          'Advanced authentication (OAuth 2.0)',
          'Multi-database support',
          'Real-time capabilities (WebSockets)',
          'Advanced caching strategies',
          'Queue management (Bull/Redis)',
          'Rate limiting & security',
          'Monitoring & logging setup',
          'CI/CD pipeline',
          'Load testing & optimization',
          '5 rounds of revisions',
          '90 days post-launch support'
        ]
      }
    ],
    addOns: [
      // Infrastructure
      {
        id: 'docker',
        name: 'Docker Containerization',
        price: 600,
        description: 'Docker setup, docker-compose, deployment configs',
        category: 'infrastructure'
      },
      {
        id: 'kubernetes',
        name: 'Kubernetes Orchestration',
        price: 1500,
        description: 'K8s deployment, auto-scaling, load balancing',
        category: 'infrastructure'
      },
      {
        id: 'monitoring',
        name: 'Advanced Monitoring',
        price: 800,
        description: 'APM tools, error tracking, performance dashboards',
        category: 'infrastructure'
      },
      // Integration
      {
        id: 'payment',
        name: 'Payment Processing',
        price: 1200,
        description: 'Stripe/PayPal integration, subscriptions, invoicing',
        category: 'integration'
      },
      {
        id: 'email-service',
        name: 'Email Service',
        price: 700,
        description: 'SendGrid/Mailgun, templates, delivery tracking',
        category: 'integration'
      },
      {
        id: 'sms',
        name: 'SMS Integration',
        price: 600,
        description: 'Twilio integration, notifications, 2FA',
        category: 'integration'
      },
      {
        id: 'cloud-storage',
        name: 'Cloud Storage',
        price: 800,
        description: 'S3/Cloudinary setup, CDN, image processing',
        category: 'integration'
      },
      // Features
      {
        id: 'search-engine',
        name: 'Search Engine',
        price: 1500,
        description: 'Elasticsearch/Algolia, full-text search, filters',
        category: 'features'
      },
      {
        id: 'admin-api',
        name: 'Admin API Endpoints',
        price: 1000,
        description: 'Admin CRUD, analytics, user management',
        category: 'features'
      },
      {
        id: 'notifications',
        name: 'Notification System',
        price: 1200,
        description: 'Push notifications, email, in-app alerts',
        category: 'features'
      },
      {
        id: 'export',
        name: 'Data Export/Import',
        price: 900,
        description: 'CSV/Excel export, bulk import, data migration',
        category: 'features'
      },
      // Testing
      {
        id: 'api-testing',
        name: 'API Testing Suite',
        price: 1000,
        description: 'Unit tests, integration tests, 80%+ coverage',
        category: 'testing'
      },
      {
        id: 'load-testing',
        name: 'Load Testing',
        price: 800,
        description: 'Performance testing, stress tests, optimization',
        category: 'testing'
      }
    ]
  },

  fullstack: {
    serviceId: 'fullstack',
    serviceName: 'Full-Stack Development',
    icon: Zap,
    gradient: 'from-pink-400 to-rose-500',
    tagline: 'Complete end-to-end web application development',
    packages: [
      {
        id: 'mvp',
        name: 'MVP Package',
        price: 5000,
        description: 'Launch your product quickly',
        features: [
          'Up to 5 key features',
          'Responsive front-end (React/Vue)',
          'RESTful API backend',
          'User authentication',
          'Database setup & design',
          'Basic admin panel',
          'Deployment setup',
          'Basic analytics',
          '2 rounds of revisions',
          '30 days post-launch support'
        ]
      },
      {
        id: 'standard',
        name: 'Standard App',
        price: 10000,
        description: 'Complete web application',
        features: [
          'Up to 12 features',
          'Advanced front-end (TypeScript)',
          'Robust API with validation',
          'User roles & permissions',
          'Payment integration',
          'Email notifications',
          'Comprehensive admin dashboard',
          'File uploads & storage',
          'Search functionality',
          'Analytics & reporting',
          'CI/CD pipeline',
          'Performance optimization',
          '4 rounds of revisions',
          '60 days post-launch support'
        ],
        popular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise Solution',
        price: 20000,
        description: 'Scalable, production-ready platform',
        features: [
          'Unlimited features',
          'Advanced front-end architecture',
          'Microservices backend',
          'Advanced authentication (OAuth/SSO)',
          'Multi-tenant support',
          'Real-time features',
          'Advanced admin & analytics',
          'Third-party integrations',
          'Automated testing suite',
          'Security hardening',
          'Load balancing & auto-scaling',
          'Monitoring & alerting',
          'Documentation & training',
          '6 rounds of revisions',
          '90 days post-launch support'
        ]
      }
    ],
    addOns: [
      // All previous add-ons from front-end and back-end are available
      // Plus full-stack specific ones:
      {
        id: 'pwa',
        name: 'Progressive Web App',
        price: 1200,
        description: 'Offline support, installable, push notifications',
        category: 'features'
      },
      {
        id: 'realtime-full',
        name: 'Real-Time Features',
        price: 2000,
        description: 'WebSockets, live updates, chat, notifications',
        category: 'features'
      },
      {
        id: 'multi-language',
        name: 'Multi-Language (i18n)',
        price: 1500,
        description: 'Front-end + back-end translation support',
        category: 'features'
      },
      {
        id: 'mobile-responsive',
        name: 'Mobile App (React Native)',
        price: 5000,
        description: 'iOS/Android app using shared backend',
        category: 'features'
      },
      {
        id: 'advanced-search',
        name: 'Advanced Search',
        price: 2000,
        description: 'Full-text search, filters, Elasticsearch integration',
        category: 'features'
      },
      {
        id: 'payment-full',
        name: 'Payment Processing',
        price: 1800,
        description: 'Stripe/PayPal, subscriptions, invoicing, UI',
        category: 'integration'
      },
      {
        id: 'social-auth',
        name: 'Social Login',
        price: 1000,
        description: 'Google, Facebook, GitHub authentication',
        category: 'integration'
      },
      {
        id: 'analytics-full',
        name: 'Analytics Dashboard',
        price: 2500,
        description: 'Custom analytics, charts, reports, insights',
        category: 'features'
      },
      {
        id: 'backup-system',
        name: 'Automated Backups',
        price: 800,
        description: 'Database backups, disaster recovery, restore',
        category: 'infrastructure'
      },
      {
        id: 'cdn',
        name: 'CDN Setup',
        price: 600,
        description: 'Cloudflare/CloudFront, global distribution',
        category: 'infrastructure'
      },
      {
        id: 'testing-full',
        name: 'Full-Stack Testing',
        price: 2000,
        description: 'Front-end + back-end + E2E test coverage',
        category: 'testing'
      }
    ]
  },

  webdev: {
    serviceId: 'webdev',
    serviceName: 'Web Development',
    icon: Coffee,
    gradient: 'from-amber-400 to-orange-500',
    tagline: 'WordPress & CMS solutions for your business',
    packages: [
      {
        id: 'basic',
        name: 'Basic Site',
        price: 1200,
        description: 'Simple WordPress site for small businesses',
        features: [
          'Up to 5 pages',
          'Responsive WordPress theme',
          'Contact form',
          'Google Maps integration',
          'Basic SEO setup',
          'Social media links',
          'Mobile-friendly design',
          'Content upload (text & images)',
          '2 rounds of revisions',
          '30 days support'
        ]
      },
      {
        id: 'business',
        name: 'Business Site',
        price: 2500,
        description: 'Professional site with blog and customization',
        features: [
          'Up to 12 pages',
          'Custom WordPress theme',
          'Blog setup & RSS',
          'Advanced contact forms',
          'Newsletter integration',
          'Google Analytics',
          'SEO optimization',
          'Speed optimization',
          'Security hardening',
          'Backup system',
          'Training session',
          '3 rounds of revisions',
          '60 days support'
        ],
        popular: true
      },
      {
        id: 'ecommerce',
        name: 'E-commerce',
        price: 4500,
        description: 'Full online store with WooCommerce',
        features: [
          'Unlimited pages/products',
          'WooCommerce setup',
          'Product catalog',
          'Shopping cart & checkout',
          'Payment gateway (Stripe/PayPal)',
          'Shipping configurations',
          'Tax calculations',
          'Order management',
          'Customer accounts',
          'Email notifications',
          'Inventory management',
          'Analytics & reports',
          'Security & SSL',
          '4 rounds of revisions',
          '90 days support'
        ]
      }
    ],
    addOns: [
      // Content
      {
        id: 'copywriting',
        name: 'Professional Copywriting',
        price: 800,
        description: '5 pages of SEO-optimized content writing',
        category: 'content'
      },
      {
        id: 'photography',
        name: 'Professional Photography',
        price: 1200,
        description: 'Product/business photography, editing',
        category: 'content'
      },
      {
        id: 'logo-design',
        name: 'Logo Design',
        price: 600,
        description: 'Custom logo, 3 concepts, unlimited revisions',
        category: 'design'
      },
      // Features
      {
        id: 'booking',
        name: 'Booking System',
        price: 1000,
        description: 'Appointment scheduling, calendar, notifications',
        category: 'features'
      },
      {
        id: 'membership',
        name: 'Membership Site',
        price: 1500,
        description: 'Member registration, protected content, subscriptions',
        category: 'features'
      },
      {
        id: 'multilingual',
        name: 'Multi-Language',
        price: 800,
        description: 'WPML/Polylang setup, 2 languages',
        category: 'features'
      },
      {
        id: 'custom-plugin',
        name: 'Custom Plugin',
        price: 1200,
        description: 'Custom WordPress plugin for specific needs',
        category: 'features'
      },
      {
        id: 'forum',
        name: 'Community Forum',
        price: 1000,
        description: 'bbPress/BuddyPress integration',
        category: 'features'
      },
      // Performance
      {
        id: 'speed-optimization',
        name: 'Advanced Speed Optimization',
        price: 500,
        description: 'Caching, CDN, image optimization, lazy loading',
        category: 'performance'
      },
      {
        id: 'security-pro',
        name: 'Security Pro Package',
        price: 600,
        description: 'Firewall, malware scan, hardening, monitoring',
        category: 'performance'
      },
      // Integration
      {
        id: 'crm',
        name: 'CRM Integration',
        price: 800,
        description: 'HubSpot, Salesforce, or Zoho integration',
        category: 'integration'
      },
      {
        id: 'email-marketing',
        name: 'Email Marketing',
        price: 600,
        description: 'Mailchimp/ConvertKit, forms, automation',
        category: 'integration'
      },
      {
        id: 'social-feed',
        name: 'Social Media Feed',
        price: 400,
        description: 'Instagram/Facebook feed integration',
        category: 'integration'
      },
      // Maintenance
      {
        id: 'maintenance',
        name: 'Monthly Maintenance',
        price: 150,
        description: 'Updates, backups, security, support (per month)',
        category: 'features'
      }
    ]
  }
};

export const categoryLabels: Record<AddOn['category'], string> = {
  performance: 'Performance Enhancements',
  features: 'Additional Features',
  design: 'Design Upgrades',
  testing: 'Quality Assurance',
  infrastructure: 'Infrastructure & DevOps',
  integration: 'Third-Party Integrations',
  content: 'Content & Design Services'
};

export const getServiceData = (serviceId: string): ServicePricingData | undefined => {
  return pricingData[serviceId];
};

export const getAllServices = (): ServicePricingData[] => {
  return Object.values(pricingData);
};