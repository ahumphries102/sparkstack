'use client';

import { FeatureCard } from '@/interfaces/services';
import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Define your 4 specific outcomes
type ServiceType = keyof FeatureCard;

interface ServiceContextType {
  selectedService: ServiceType;
  selectedAddOns: string[];
  setSelectedService: (service: ServiceType) => void;
  setSelectedAddOns: (addOns: string[]) => void;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export function ServiceProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState<ServiceType>('frontend');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

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