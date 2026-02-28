"use client"
import { featureCards } from "@/app/data/serviceData"
import { useService } from "@/app/data/serviceContext"
import { useState } from "react"
import FooterPricing from "@/components/footerPricing"
import Services from "@/services/service"
type TabType = "overview" | "services" | "process" | "technologies"

export default function ServiceSlugPage() {
  const [activeTab, setActiveTab] = useState<TabType>("overview")
  const { selectedService, setSelectedService } = useService()
  const tabs: Array<{ id: TabType; label: string }> = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "technologies", label: "Technologies" },
  ]
  const serviceConfig = featureCards[selectedService]
  const featureCardsToArray = Object.values(featureCards).map((value) => value)
  return (
    <>
      <div className="min-h-screen pt-20 flex justify-center">
        <div className="h-100 sticky top-45 flex justify-end">
          <div className="flex flex-col gap-4 mb-12 overflow-x-auto pb-2">
            <div className="flex gap-4 p-1">
              {featureCardsToArray.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`w-10 h-10 bg-gradient-to-br ${item.theme.gradient} rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out`}
                  >
                    <item.icon
                      className="w-6 h-6 text-white"
                      onClick={() => setSelectedService(item.service)}
                    />
                  </div>
                )
              })}
            </div>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold capitalize whitespace-nowrap transition-all
                ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${serviceConfig.theme.gradient} text-white`
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="min-h-screen bg-zinc-950 text-zinc-100 py-20 px-6">
          <Services selectedService={selectedService} activeTab={activeTab} />

          <FooterPricing selectedService={selectedService} />
        </div>
      </div>
    </>
  )
}
