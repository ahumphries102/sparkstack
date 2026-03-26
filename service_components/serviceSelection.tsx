import { featureCards, tabs } from "@/app/data/serviceData"
import { useService } from "@/app/data/serviceContext"

export default function ServiceSelection({}) {
  const { selectedService, setSelectedService, selectedTab, setSelectedTab } =
    useService()
  const serviceConfig = featureCards[selectedService]
  const featureCardsToArray = Object.values(featureCards).map((value) => value)

  return (
    <div className="flex flex-col gap-5 md:gap-6 mb-10 md:mb-12">
      
      {/* ROW 1: Service Icons */}
      <div className="flex gap-4 overflow-x-auto pb-2 w-full no-scrollbar">
        {featureCardsToArray.map((item, index) => {
          return (
            <div
              key={index}
              className={`${selectedService !== item.service ? "opacity-50" : ""} w-12 h-12 md:w-14 md:h-14 shrink-0 bg-gradient-to-br ${item.theme.gradient} rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out`}
              onClick={() => setSelectedService(item.service)}
            >
              <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          )
        })}
      </div>

      {/* ROW 2: Tabs (Overview, Process, Pricing, etc.) */}
      {/* Reduced the gap from gap-3 to gap-2 for mobile */}
      <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 w-full no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            // Reduced px, py, text size, and border radius for mobile
            className={`px-3 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold capitalize whitespace-nowrap transition-all text-xs sm:text-sm md:text-base shrink-0
                ${
                  selectedTab === tab.id
                    ? `${serviceConfig.theme.gradient} text-white shadow-md`
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
                }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
    </div>
  )
}