"use client"
import { useService } from "@/app/data/serviceContext"
import Services from "@/service_components/services"
export default function ServicePage() {
  const { selectedService, selectedTab } = useService()
  return (
    <div>
      <Services selectedService={selectedService} selectedTab={selectedTab} />
    </div>
  )
}
