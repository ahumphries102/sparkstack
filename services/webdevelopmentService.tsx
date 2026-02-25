import { LucideIcon } from "lucide-react"
import { featureCards } from "@/app/data/serviceData"
export default function WebDevelopmentDetailPage({
  activeTab,
  Coffee,
  Check,
}: {
  activeTab: string
  Coffee: LucideIcon
  Check: LucideIcon
  ArrowRight: LucideIcon
}) {
  const { webdevelopment } = featureCards

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-20 px-6">
      <div className="min-w-7xl max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center">
              <Coffee className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1
                className="text-5xl font-black mb-2"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Web Development
              </h1>
              <p className="text-xl text-zinc-400">
                Custom solutions for your unique business needs
              </p>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                The Right Solution for Your Business
              </h2>
              <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Not every business needs a complex custom application.
                  Sometimes what you need is a professional website you can
                  manage yourself, an online store to sell products, or a blog
                  to share your expertise. That's where WordPress and modern CMS
                  platforms shine—powerful enough for anything you need, simple
                  enough that you can manage it without a developer.
                </p>
                <p>
                  I specialize in WordPress development, from simple business
                  sites to complex e-commerce stores. Whether you need a custom
                  theme built from scratch, WooCommerce integration for selling
                  products, or a content-rich blog with advanced features, I
                  deliver solutions that are fast, secure, and easy for you to
                  manage.
                </p>
                <p>
                  What makes my approach different? I don't just install a theme
                  and call it done. I build custom solutions tailored to your
                  brand, optimize for speed and SEO, implement proper security,
                  and train you on managing your site. You get a professional
                  website that works for your business, not against it.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webdevelopment.features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-amber-400/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-amber-400" />
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
                {webdevelopment.includedServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center mt-1">
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
                {webdevelopment.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700"
                  >
                    <h3 className="text-lg font-bold mb-2 text-amber-400">
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
                {webdevelopment.processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl font-black">
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
                            className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full text-sm text-amber-400"
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
                {webdevelopment.timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-zinc-800/50 rounded-xl"
                  >
                    <div className="text-4xl font-black text-amber-400 mb-2">
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

              {webdevelopment.technologyCategories.map((category, index) => (
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
                {webdevelopment.technologyExplanations.map(
                  (explanation, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold mb-2 text-amber-400">
                        {explanation.title}
                      </h3>
                      <p className="leading-relaxed">
                        {explanation.description}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
