'use client';

import { FeatureCard } from '@/interfaces/services';
import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Define your 4 specific outcomes
type ServiceType = keyof FeatureCard;

interface ServiceContextType {
  selectedService: ServiceType;
  setSelectedService: (service: ServiceType) => void;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export function ServiceProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState<ServiceType>('frontend');

  return (
    <ServiceContext.Provider value={{ selectedService, setSelectedService }}>
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