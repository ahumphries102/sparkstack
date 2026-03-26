import { Feature } from "@/interfaces/services"


export default function Overview({ serviceConfig }: { serviceConfig: Feature }) {
  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-700 darkBg">
      {/* Main Description Card - Base Card Pattern */}
      <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          {serviceConfig.overview.heading}
        </h2>
        <div className="space-y-4 text-base md:text-lg leading-relaxed">
          {serviceConfig.overview.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      {/* Key Features Grid - Standard Grid Pattern */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {serviceConfig.features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className={`bg-zinc-900/80 border ${serviceConfig.theme.pillBorder} rounded-2xl p-6 hover:border-zinc-600 transition-colors duration-300`}
            >
              <div
                className={`w-12 h-12 ${serviceConfig.theme.iconBg} rounded-xl flex items-center justify-center mb-4`}
              >
                <Icon className={`w-6 h-6 ${serviceConfig.theme.textPrimary}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}