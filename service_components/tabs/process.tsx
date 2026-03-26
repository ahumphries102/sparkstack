import { Feature } from "@/interfaces/services"


export default function Process({ serviceConfig }: { serviceConfig: Feature }) {
  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-700">
      <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Development Process
        </h2>
        <div className="space-y-10 md:space-y-12">
          {serviceConfig.processSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 md:gap-6"
            >
              <div className="flex-shrink-0">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${serviceConfig.theme.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl font-black text-white`}
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
  )
}