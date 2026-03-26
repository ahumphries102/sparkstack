import { featureCards } from "@/app/data/serviceData"
import { FeatureCard } from "@/interfaces/services"
import Pricing from "@/service_components/tabs/pricing"
import ServiceSelection from "./serviceSelection"
import Overview from "@/service_components/tabs/overview"
import Process from "@/service_components/tabs/process"
import Technologies from "@/service_components/tabs/technologies"
import ShoppingCart from "@/service_components/shoppingCart"

export default function Services({
  selectedTab,
  selectedService,
}: {
  selectedTab: string
  selectedService: keyof FeatureCard
}) {
  const serviceConfig = featureCards[selectedService]
  return (
    // 1. Changed to flex-col for mobile, lg:flex-row for desktop
    <div className="min-h-[100dvh] text-zinc-100 py-10 md:py-20 px-4 md:px-6 flex flex-col lg:flex-row relative">
      
      {/* 2. Hidden on mobile, flex-1 on desktop to keep centering */}
      <span className="hidden lg:block lg:flex-1" />
      
      {/* Main Content */}
      {/* 3. Added w-full for mobile, changed flex-2 to lg:flex-[2] */}
      <div className="w-full max-w-7xl lg:flex-[2]">
        
        {/* Hero Section */}
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6">
            <div
              className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${serviceConfig.theme.gradient} rounded-2xl flex-shrink-0 flex items-center justify-center`}
            >
              <serviceConfig.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-black mb-2 leading-tight">
                {serviceConfig.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-zinc-400">
                {serviceConfig.hero.subtitle}
              </p>
            </div>
          </div>
        </div>

        <ServiceSelection />

        {/* Tab Content Container */}
        <>
          {/* Shared Width Sections */}
          {(selectedTab === "overview" ||
            selectedTab === "process" ||
            selectedTab === "technologies") && (
            <div className="max-w-5xl mx-auto">
              {selectedTab === "overview" && (
                <Overview serviceConfig={serviceConfig} />
              )}
              {selectedTab === "process" && (
                <Process serviceConfig={serviceConfig} />
              )}
              {selectedTab === "technologies" && (
                <Technologies serviceConfig={serviceConfig} />
              )}
            </div>
          )}

          {/* Full Width Section */}
          {selectedTab === "pricing" && (
            <div className="w-full overflow-hidden">
              <Pricing />
            </div>
          )}
        </>
      </div>
      
      {/* 4. Added w-full for mobile, lg:flex-1 for desktop, and margin top for mobile spacing */}
      <div className="w-full mt-12 lg:mt-0 lg:flex-1">
        {/* Shopping Cart */}
        {selectedTab === "pricing" && <ShoppingCart />}
      </div>
    </div>
  )
}