import { LucideIcon } from "lucide-react"
import { featureCards } from "@/app/data/serviceData"
export default function FrontEndDetailPage({
  activeTab, Camera, Check
}: {
  activeTab: string
  Camera: LucideIcon
  Check: LucideIcon
}) {

  const { frontend } = featureCards

  return (
    <div className={`min-h-screen bg-zinc-950 text-zinc-100 py-20 px-6`}>
      <div className="min-w-7xl max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1
                className="text-5xl font-black mb-2"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Front-End Development
              </h1>
              <p className="text-xl text-zinc-400">
                Beautiful, responsive interfaces that users love
              </p>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Main Description */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Transform Your Vision Into Reality
              </h2>
              <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                <p>
                  In today's digital-first world, your website or application is
                  often the first impression customers have of your brand. I
                  specialize in creating stunning, high-performance front-end
                  experiences that don't just look beautiful—they convert
                  visitors into customers and keep users engaged.
                </p>
                <p>
                  Using cutting-edge frameworks like React and Vue, combined
                  with modern CSS techniques and performance optimization
                  strategies, I build interfaces that are lightning-fast,
                  intuitive to use, and accessible to everyone. Every pixel is
                  crafted with intention, every interaction designed to delight,
                  and every line of code written with maintainability in mind.
                </p>
                <p>
                  Whether you're launching a new product, redesigning an
                  existing platform, or building a complex web application, I
                  bring 8+ years of experience and a passion for creating
                  exceptional digital experiences that users love and businesses
                  depend on.
                </p>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frontend.features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {frontend.includedServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-zinc-950" />
                    </div>
                    <span className="text-zinc-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Perfect For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {frontend.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700"
                  >
                    <h3 className="text-lg font-bold mb-2 text-cyan-400">
                      {useCase.title}
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === "process" && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Development Process</h2>
              <div className="space-y-8">
                {frontend.processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-2xl font-black">
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
                            className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-sm text-cyan-400"
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
                {frontend.timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-zinc-800/50 rounded-xl"
                  >
                    <div className="text-4xl font-black text-cyan-400 mb-2">
                      {item.duration}
                    </div>
                    <div className="text-sm text-zinc-400 mb-2">
                      {item.period}
                    </div>
                    <div className="text-zinc-300">{item.label}</div>
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

              {frontend.technologyCategories.map((category, index) => (
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
              <div className="space-y-6 text-zinc-300">
                {frontend.technologyExplanations.map((explanation, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-2 text-cyan-400">
                      {explanation.title}
                    </h3>
                    <p className="leading-relaxed">{explanation.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
