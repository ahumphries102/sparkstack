import { LucideIcon } from "lucide-react"

interface Features {
  icon: LucideIcon
  title: string
  description: string
}

interface Feature {
  features: Features[]
  footerPricing: FooterPricing
  hero: Hero
  icon: LucideIcon
  includedServices: string[]
  overview: Overview
  processSteps: ProcessStep[]
  service: string
  technologyCategories: TechnologyCategory[]
  technologyExplanations: TechnologyExplanation[]
  theme: Theme
  timelineItems: TimelineItems[]
  useCases: UseCase[]
}

interface FeatureCard {
  frontend: Feature
  backend: Feature
  fullstack: Feature
  webdevelopment: Feature
}
interface FooterPricing {
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

interface Hero {
  title: string
  subtitle: string
  icon: string
}

interface UseCase {
  title: string
  description: string
}

interface Overview {
  heading: string
  paragraphs: string[]
}

interface ProcessStep {
  number: string
  title: string
  description: string
  deliverables: string[]
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

interface Theme {
  gradient: string
  textPrimary: string
  bgPrimary: string
  iconBg: string
  hoverBorder: string
  pillBg: string
  pillBorder: string
}

interface TimelineItems {
  duration: string
  period: string
  label: string
  description: string
}

export { type FeatureCard }
