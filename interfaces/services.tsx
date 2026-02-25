import { LucideIcon } from "lucide-react"

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

interface TechnologyCategory {
  title: string
  color: string
  technologies: string[]
}

interface TechnologyExplanation {
  title: string
  description: string
}

interface TimelineItems {
  duration: string
  period: string
  label: string
  description: string
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

interface Features {
  features: {
    icon: LucideIcon
    title: string
    description: string
  }[]
  footerPricing: FooterPricing,
  includedServices: string[]
  processSteps: ProcessStep[]
  service: string
  technologyCategories: TechnologyCategory[]
  technologyExplanations: TechnologyExplanation[]
  timelineItems: TimelineItems[]
  useCases: UseCase[]
}

interface FeatureCard {
  frontend: Features
  backend: Features
  fullstack: Features
  webdevelopment: Features
}

export { type FeatureCard }
