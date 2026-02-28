import { ArrowRight } from "lucide-react"
import { featureCards } from "@/app/data/serviceData"
import { FeatureCard } from "@/app/interfaces/services"
export default function PricingFooter({
  selectedService,
}: {
  selectedService: FeatureCard
}) {
  const serviceConfig = featureCards[selectedService]
  return (
    <footer
      className={`mt-16 bg-gradient-to-br ${serviceConfig.theme.gradient} rounded-2xl p-8 md:p-12 text-center`}
    >
      <h2 className="text-4xl font-black mb-4 text-zinc-950">
        Ready to Get Started?
      </h2>
      <p className="text-xl text-zinc-900 mb-8 max-w-2xl mx-auto">
        Let's build a website that works for your business. Get in touch to
        discuss your project.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="px-8 py-4 bg-zinc-950 text-white rounded-xl font-semibold hover:bg-zinc-900 transition-all transform hover:scale-105 flex items-center gap-2">
          Schedule a Call
          <ArrowRight className="w-5 h-5" />
        </button>
        <button className="px-8 py-4 bg-white text-zinc-950 rounded-xl font-semibold hover:bg-zinc-100 transition-all transform hover:scale-105">
          View Portfolio
        </button>
      </div>
      <div className="mt-8 text-zinc-900">
        <p className="text-lg font-semibold">
          {serviceConfig.footerPricing.pricing.startingPrice || "N/A"}{" "}
          {serviceConfig.footerPricing.pricing.description || "N/A"} / Starting
          Price
        </p>
        <p className="text-sm">Complex projects quoted individually</p>
      </div>
    </footer>
  )
}
