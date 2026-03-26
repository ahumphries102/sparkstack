import { Feature } from "@/interfaces/services"
export default function Technologies({ serviceConfig }: { serviceConfig: Feature }) {
  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-700">
      <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Technology Stack
        </h2>

        {serviceConfig.technologyCategories.map((category, index) => (
          <div key={index} className="mb-12 last:mb-0">
            <h3 className={`text-xl font-bold mb-4 ${category.color}`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-4">
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
  )
}
