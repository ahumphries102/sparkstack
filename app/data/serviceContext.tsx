'use client';
import { AddOn } from "@/interfaces/services"
import { FeatureCard } from '@/interfaces/services';
import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Define your 4 specific outcomes
type ServiceType = keyof FeatureCard;

interface ServiceContextType {
  selectedService: ServiceType;
  selectedAddOns: AddOn[];
  setSelectedService: (service: ServiceType) => void;
  setSelectedAddOns: React.Dispatch<React.SetStateAction<AddOn[]>>;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export function ServiceProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState<ServiceType>('frontend');
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([])

  return (
    <ServiceContext.Provider value={{ selectedService, setSelectedService, selectedAddOns, setSelectedAddOns }}>
      {children}
    </ServiceContext.Provider>
  );
}

// Custom hook for easy use
export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) throw new Error("useService must be used within a ServiceProvider");
  return context;
};