"use client"
import { useService } from "@/app/data/serviceContext"
import Services from "@/service_components/services"
import ServiceSelection from "@/service_components/serviceSelection"
export default function ServicePage() {
  const { selectedService, selectedTab } = useService()
  return (
    <div className="h-min-screen pt-20 flex justify-center">
      <ServiceSelection />
      <div className="bg-zinc-850 text-zinc-100 px-6">
        <Services selectedService={selectedService} selectedTab={selectedTab} />
      </div>
    </div>
  )
}
