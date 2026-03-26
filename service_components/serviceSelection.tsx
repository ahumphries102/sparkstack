import { featureCards, tabs } from "@/app/data/serviceData"
import { useService } from "@/app/data/serviceContext"

export default function ServiceSelection({}) {
  const { selectedService, setSelectedService, selectedTab, setSelectedTab } =
    useService()
  const serviceConfig = featureCards[selectedService]
  const featureCardsToArray = Object.values(featureCards).map((value) => value)

  return (
    <div className="flex">
      <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
        <div className="flex gap-4 p-1">
          {featureCardsToArray.map((item, index) => {
            return (
              <div
                key={index}
                className={`${selectedService !== item.service ? "opacity-50" : ""} w-10 h-10 bg-gradient-to-br ${item.theme.gradient} rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out`}
                onClick={() => setSelectedService(item.service)}
              >
                <item.icon className="w-6 h-6 text-white " />
              </div>
            )
          })}
        </div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-semibold capitalize whitespace-nowrap transition-all
                ${
                  selectedTab === tab.id
                    ? `${serviceConfig.theme.gradient} text-white`
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
