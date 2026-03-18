import { featureCards } from "@/app/data/serviceData"
import { FeatureCard } from "@/interfaces/services"
import Pricing from "@/service_components/pricing"
export default function Services({
  activeTab,
  selectedService,
}: {
  activeTab: string
  selectedService: keyof FeatureCard
}) {
  const serviceConfig = featureCards[selectedService as keyof FeatureCard]
  return (
    <div className={`min-h-screen bg-zinc-950 text-zinc-100 py-20 px-6`}>
      <div className="min-w-7xl max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-20 h-20 bg-gradient-to-br ${serviceConfig.theme.gradient} rounded-2xl flex items-center justify-center`}
            >
              <serviceConfig.icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1
                className="text-5xl font-black mb-2"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {serviceConfig.hero.title}
              </h1>
              <p className="text-xl text-zinc-400">
                {serviceConfig.hero.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="darkBg space-y-8">
            {/* Main Description */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                {serviceConfig.overview.heading}
              </h2>
              <div className="space-y-4  text-lg leading-relaxed">
                {serviceConfig.overview.paragraphs.map((para, idx) => (
                  <p key={idx} className="block mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceConfig.features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className={`bg-zinc-900/80 border ${serviceConfig.theme.pillBorder} rounded-2xl p-6 ${serviceConfig.theme.hoverBorder} transition-colors`}
                  >
                    <div className={`w-12 h-12 ${serviceConfig.theme.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${serviceConfig.theme.textPrimary}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}


        {/* Process Tab */}
        {activeTab === "process" && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Development Process</h2>
              <div className="space-y-8">
                {serviceConfig.processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${serviceConfig.theme.gradient} rounded-2xl flex items-center justify-center text-2xl font-black`}>
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-zinc-400 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 ${serviceConfig.theme.pillBg} border ${serviceConfig.theme.pillBorder} rounded-full text-sm ${serviceConfig.theme.textPrimary}`}
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

            {/* Timeline */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Typical Timeline</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {serviceConfig.timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-zinc-800/50 rounded-xl"
                  >
                    <div className={`text-4xl font-black ${serviceConfig.theme.textPrimary} mb-2`}>
                      {item.duration}
                    </div>
                    <div className="text-sm text-zinc-400 mb-2">
                      {item.period}
                    </div>
                    <div className="">{item.label}</div>
                    <div className="text-sm text-zinc-500 mt-2">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Technologies Tab */}
        {activeTab === "technologies" && (
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

            {/* Why These Technologies */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Why These Technologies?
              </h2>
              <div className="space-y-6 ">
                {serviceConfig.technologyExplanations.map((explanation, index) => (
                  <div key={index}>
                    <h3 className={`text-xl font-bold mb-2 ${serviceConfig.theme.textPrimary}`}>
                      {explanation.title}
                    </h3>
                    <p className="leading-relaxed">{explanation.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        
        {/* Services Tab */}
        {activeTab === "pricing" && (
          <Pricing />
        )}
      </div>
    </div>
  )
}
