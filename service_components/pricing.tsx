import { useState } from "react"
import { AddOn, Package } from "@/interfaces/services"
import { Check, Sparkles } from "lucide-react"
import { featureCards } from "@/app/data/serviceData"
import { useService } from "@/app/data/serviceContext"

export default function Pricing() {
  const [] = useState<string>()
  const {
    selectedService,
    selectedAddOns,
    selectedPackage,
    setSelectedAddOns,
    setSelectedPackage,
  } = useService()

  const togglePackages = (
    clickedPackage: Partial<Package>,
  ): Partial<Package> => {
    // 1. Compare the name of what was clicked to what is already in state
    const isAlreadySelected = selectedPackage.name === clickedPackage.name

    if (isAlreadySelected) {
      // 2. If it's the same, "unselect" it by setting it to an empty object
      return {}
    } else {
      // 3. If it's different, select the new one
      return clickedPackage
    }
  }

  const toggleAddOn = (id: AddOn) => {
    setSelectedAddOns((prev) => {
      return prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    })
  }

  const getAddOnsByCategory = (category: AddOn["category"]) => {
    return featureCards[selectedService].addOns.filter(
      (addon) => addon.category === category,
    )
  }

  const categoryLabels: Record<AddOn["category"], string> = {
    performance: "Performance Enhancements",
    features: "Additional Features",
    design: "Design Upgrades",
    testing: "Quality Assurance",
  }
  const bgGradient = featureCards[selectedService].theme.gradient
  const bgTheme = featureCards[selectedService].theme.bgPrimary
  const textTheme = featureCards[selectedService].theme.textPrimary
  const pillBg = featureCards[selectedService].theme.pillBg
  const pillBorder = featureCards[selectedService].theme.pillBorder
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Base Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Choose Your Base Package
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featureCards[selectedService].packages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() =>
                  setSelectedPackage(
                    togglePackages({
                      name: pkg.name,
                      price: pkg.price,
                    }),
                  )
                }
                className={`relative bg-zinc-900/80 border-2 rounded-2xl p-6 cursor-pointer transition-all
                  ${
                    selectedPackage.name === pkg.name
                      ? ` shadow-lg`
                      : "border-zinc-800 hover:border-zinc-700"
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span
                      className={`px-4 py-1 ${bgGradient} rounded-full text-sm font-bold text-white flex items-center gap-1`}
                    >
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-2">
                    <span className={`text-4xl font-black ${textTheme}`}>
                      ${pkg.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`w-5 h-5 ${textTheme} flex-shrink-0 mt-0.5`}
                      />
                      <span className="">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all`}
                ></button>
              </div>
            ))}
          </div>
        </div>

        {/* Add-Ons */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Customize with Add-Ons
          </h2>

          {(Object.keys(categoryLabels) as Array<AddOn["category"]>).map(
            (category) => {
              const categoryAddOns = getAddOnsByCategory(category)

              return (
                <div key={category} className="mb-8">
                  <h3 className={`text-xl font-bold mb-4  ${textTheme}`}>
                    {categoryLabels[category]}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryAddOns.map((addon) => {
                      const isSelected = selectedAddOns.some(
                        (selectedAddon) => selectedAddon.id === addon.id,
                      )
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddOn(addon)}
                          className={`bg-zinc-900/80 border-2 rounded-xl p-4 cursor-pointer transition-all
                          ${
                            isSelected
                              ? `${pillBg} ${pillBorder}`
                              : "border-zinc-800 hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold text-lg">{addon.name}</h4>
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0
                            ${isSelected ? `${pillBorder} ${bgTheme}` : "border-zinc-600"}`}
                            >
                              {isSelected && <Check className="w-4 h-4 " />}
                            </div>
                          </div>
                          <p className="text-sm text-zinc-400">
                            {addon.description}
                          </p>
                          <div className={`text-xl font-bold  ${textTheme}`}>
                            +${addon.price.toLocaleString()}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            },
          )}
        </div>
      </div>
    </div>
  )
}
