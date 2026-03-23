"use client"
import { AddOn } from "@/interfaces/services"
import { FeatureCard, Package } from "@/interfaces/services"
import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react"

// 1. Define your 4 specific outcomes
type ServiceType = keyof FeatureCard

interface ServiceContextType {
  selectedAddOns: AddOn[]
  selectedPackage: any
  selectedService: ServiceType
  setSelectedAddOns: React.Dispatch<React.SetStateAction<AddOn[]>>
  setSelectedPackage: (Package: any) => any
  setSelectedService: (service: ServiceType) => void
}
const ServiceContext = createContext<ServiceContextType | undefined>(undefined)

export function ServiceProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] =
  useState<ServiceType>("frontend")
  const [selectedPackage, setSelectedPackage] = useState(
  {},
  )
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([])
  return (
    <ServiceContext.Provider
      value={{
        selectedService,
        setSelectedService,
        selectedAddOns,
        setSelectedAddOns,
        selectedPackage,
        setSelectedPackage,
      }}
    >
      {children}
    </ServiceContext.Provider>
  )
}

// Custom hook for easy use
export const useService = () => {
  const context = useContext(ServiceContext)
  if (!context)
    throw new Error("useService must be used within a ServiceProvider")
  return context
}
