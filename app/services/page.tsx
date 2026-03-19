"use client"
import { useState } from "react"
import { featureCards, tabs } from "@/app/data/serviceData"
import { AddOn, Tabs } from "@/interfaces/services"
import { useService } from "@/app/data/serviceContext"
import Services from "@/service_components/service"

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState<Tabs["id"]>("overview")
  const {
    selectedAddOns,
    selectedPackage,
    selectedService,
    setSelectedService,
  } = useService()
  const serviceConfig = featureCards[selectedService]
  const featureCardsToArray = Object.values(featureCards).map((value) => value)
  const totalAddOns = () => {
    const addOnsTotal = selectedAddOns.reduce(
      (total, addon) => total + addon.price,
      0,
    )
    if (Object.keys(selectedPackage).length > 0) {
      return addOnsTotal + selectedPackage.price!
    } else {
      return addOnsTotal
    }
  }

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
                className={`card card-sm ${featureCards[selectedService].theme.gradient} rounded-2xl font-semibold`}
              >
                <div className="card-body text-zinc-900">
                  <h1 className="card-title">Your Project Total</h1>
                  <>
                    <p className="text-base">One-time projected cost</p>
                    {(selectedAddOns.length > 0 || selectedPackage?.name) && (
                      <>
                        <hr className="my-2" />

                        {Object.keys(selectedPackage).length > 0 && (
                          <p>
                            Package: {selectedPackage.name} $
                            {selectedPackage.price}
                          </p>
                        )}
                        {selectedAddOns.map((addOn: AddOn) => (
                          <ul key={addOn.id}>
                            <li>
                              {addOn.name}: ${addOn.price}
                            </li>
                          </ul>
                        ))}

                        <h1 className="text-2xl">Total: ${totalAddOns()}</h1>
                      </>
                    )}
                  </>

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
