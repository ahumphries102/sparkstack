import { featureCards } from "@/app/data/serviceData"
import { FeatureCard } from "@/interfaces/services"
import Pricing from "@/service_components/pricing"

export default function Services({
  selectedTab,
  selectedService,
}: {
  selectedTab: string
  selectedService: keyof FeatureCard
}) {
  const serviceConfig = featureCards[selectedService as keyof FeatureCard]
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6">
            <div
              className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${serviceConfig.theme.gradient} rounded-2xl flex-shrink-0 flex items-center justify-center`}
            >
              <serviceConfig.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div>
              <h1
                className="text-3xl md:text-5xl font-black mb-2 leading-tight"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {serviceConfig.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-zinc-400">
                {serviceConfig.hero.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {selectedTab === "overview" && (
          <div className="space-y-6 md:space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                {serviceConfig.overview.heading}
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-zinc-300">
                {serviceConfig.overview.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-zinc-300">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {serviceConfig.features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className={`bg-zinc-900/80 border ${serviceConfig.theme.pillBorder} rounded-2xl p-6`}
                  >
                    <div
                      className={`w-12 h-12 ${serviceConfig.theme.iconBg} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <Icon
                        className={`w-6 h-6 ${serviceConfig.theme.textPrimary}`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-zinc-400 text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Process Tab */}
        {selectedTab === "process" && (
          <div className="space-y-6 md:space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Development Process
              </h2>
              <div className="space-y-10 md:space-y-12">
                {serviceConfig.processSteps.map((step, index) => (
                  // FIX 5: Stack number on top of text for narrow mobile screens
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-4 md:gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${serviceConfig.theme.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl font-black`}
                      >
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 mb-4 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 ${serviceConfig.theme.pillBg} border ${serviceConfig.theme.pillBorder} rounded-full text-xs md:text-sm ${serviceConfig.theme.textPrimary}`}
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Technologies Tab */}
        {selectedTab === "technologies" && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>

              {serviceConfig.technologyCategories.map((category, index) => (
                <div key={index} className="mb-12 last:mb-0">
                  <h3 className={`text-xl font-bold mb-4 ${category.color}`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {selectedTab === "pricing" && (
          <div className="w-full overflow-hidden">
            <Pricing />
          </div>
        )}
      </div>
    </div>
  )
}
