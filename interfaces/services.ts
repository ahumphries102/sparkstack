import { LucideIcon } from "lucide-react"

type AddOn = {
  id: string
  name: string
  price: number
  description: string
  category: string
}

type Features = {
  icon: LucideIcon
  title: string
  description: string
}

type Feature = {
  addOns: AddOn[]
  features: Features[]
  footerPricing: FooterPricing
  hero: Hero
  icon: LucideIcon
  includedServices: string[]
  overview: Overview
  packages: Package[]
  processSteps: ProcessStep[]
  service: string
  technologyCategories: TechnologyCategory[]
  technologyExplanations: TechnologyExplanation[]
  theme: Theme
  timelineItems: TimelineItems[]
  useCases: UseCase[]
}

type FeatureCard = {
  [key: string]: Feature
  frontend: Feature
  backend: Feature
  fullstack: Feature
  webDev: Feature
}

type FinalQuote = {
  clientName: string
  clientPhone: string
  clientEmail: string
  service: string
  package: Package
  addOns: AddOn[]
  total: number
  submittedAt: string
}

type FooterPricing = {
  color: string
  title: string
  description: string
  cta: {
    text: string
    icon: LucideIcon
  }
  pricing: {
    startingPrice: string
    description: string
  }
}

type Hero = {
  title: string
  subtitle: string
  icon: string
}

type UseCase = {
  title: string
  description: string
}

type Overview = {
  heading: string
  paragraphs: string[]
}

type Package = {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  popular?: boolean
}

type ProcessStep = {
  number: string
  title: string
  description: string
  deliverables: string[]
}
type ServicePricingData = {
  serviceId: string
  serviceName: string
  icon: LucideIcon
  gradient: string
  tagline: string
  packages: Package[]
  addOns: AddOn[]
}
type Tabs = {
  id: string
  label: string
}

type TechnologyCategory = {
  title: string
  color: string
  technologies: string[]
}

type TechnologyExplanation = {
  title: string
  description: string
}

type Theme = {
  gradient: string
  textPrimary: string
  bgPrimary: string
  iconBg: string
  hoverBorder: string
  pillBg: string
  pillBorder: string
}

type TimelineItems = {
  duration: string
  period: string
  label: string
  description: string
}

export {
  type AddOn,
  type FeatureCard,
  type FinalQuote,
  type Package,
  type ServicePricingData,
  type Tabs,
}
