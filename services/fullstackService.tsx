import { LucideIcon } from "lucide-react"
import { featureCards } from "@/app/data/serviceData"

export default function FullStackDetailPage({
  activeTab,
  ArrowRight,
  Check,
  Zap,
}: {
  activeTab: string
  ArrowRight: LucideIcon
  Check: LucideIcon
  Zap: LucideIcon
}) {
  const { fullstack } = featureCards

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-20 px-6">
      <div className="min-w-7xl max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1
                className="text-5xl font-black mb-2"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Full-Stack Development
              </h1>
              <p className="text-xl text-zinc-400">
                Complete end-to-end web application development
              </p>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Everything You Need, One Developer
              </h2>
              <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Why coordinate between multiple developers when one expert can
                  handle it all? Full-stack development means seamless
                  integration, faster communication, and a cohesive vision from
                  database to deployment. No miscommunication between teams, no
                  integration headaches—just clean code that works together
                  harmoniously.
                </p>
                <p>
                  I've spent years mastering both the client and server sides of
                  web development, allowing me to architect complete solutions
                  that work together seamlessly. From initial concept to
                  production deployment, I manage every aspect of your
                  application, ensuring consistency, quality, and performance at
                  every layer of the stack.
                </p>
                <p>
                  Whether you're an entrepreneur with a product vision, a
                  startup building an MVP, or a business replacing legacy
                  systems, I deliver fully functional web applications that are
                  ready to scale. You get a complete solution—front-end,
                  back-end, database, deployment, and ongoing support—all from
                  one experienced developer who understands the full picture.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fullstack.features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-pink-400/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-pink-400/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-pink-400" />
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
                {fullstack.includedServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-zinc-950" />
                    </div>
                    <span className="text-zinc-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Perfect For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {fullstack.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700"
                  >
                    <h3 className="text-lg font-bold mb-2 text-pink-400">
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
                {fullstack.processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center text-2xl font-black">
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
                            className="px-3 py-1 bg-pink-400/10 border border-pink-400/20 rounded-full text-sm text-pink-400"
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

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Typical Timeline</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {fullstack.timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-zinc-800/50 rounded-xl"
                  >
                    <div className="text-4xl font-black text-pink-400 mb-2">
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

              {fullstack.technologyCategories.map((category, index) => (
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

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Why These Technologies?
              </h2>
              <div className="space-y-6 text-zinc-300">
                {fullstack.technologyExplanations.map((explanation, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-2 text-pink-400">
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
