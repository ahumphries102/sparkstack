"use client"
import { featureCards, tabs } from "@/app/data/serviceData"
import { AddOn, Tabs } from "@/interfaces/services"
import { useService } from "@/app/data/serviceContext"
import { useState } from "react"
import Services from "@/service_components/service"

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState<Tabs["id"]>("overview")
  const { selectedService, setSelectedService, selectedAddOns } = useService()

  const serviceConfig = featureCards[selectedService]
  const featureCardsToArray = Object.values(featureCards).map((value) => value)
  return (
    <>
      <div className="h-min-screen pt-20 flex justify-center">
        <div className="h-[100%] sticky top-45 flex justify-end">
          <div className="flex-col">
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
                    ? `${serviceConfig.theme.gradient} text-white`
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Pricing */}
            {activeTab === "pricing" && (
              <div
                className={`card card-sm ${featureCards[selectedService].theme.gradient} rounded-2xl`}
              >
                <div className="card-body">
                  <h1 className="card-title">Your Project Total</h1>
                  <p>Package</p>
                  <div>
                    <div className="text-5xl"></div>
                    <p className="text-sm">One-time projected cost</p>
                    {selectedAddOns.length > 0 && (
                      <>
                        <hr className="my-2" />

                        {selectedAddOns.map((addOn: AddOn) => (
                          <div key={addOn.id}>
                            <p>
                              {addOn.name}: ${addOn.price}
                            </p>
                          </div>
                        ))}

                        <h1 className="card-title">
                          Total: $
                          {selectedAddOns.reduce((a, b) => a + b.price, 0)}
                        </h1>
                      </>
                    )}
                  </div>

                  <button className="px-8 py-4 bg-zinc-950 text-white rounded-xl font-semibold hover:bg-zinc-900 transition-all transform hover:scale-105 flex items-center gap-2">
                    Get Started
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-zinc-850 text-zinc-100 px-6">
          <Services selectedService={selectedService} activeTab={activeTab} />
        </div>
      </div>
    </>
  )
}
