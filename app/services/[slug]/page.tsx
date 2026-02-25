"use client"
import { use } from "react"
import { notFound } from "next/navigation"
import { useState } from "react"
import { Camera, Code, Zap, Coffee } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"
type TabType = "overview" | "services" | "process" | "technologies"
const SERVICE_COMPONENTS: Record<string, any> = {
  // Ensure these keys match the 'route' in your serviceData.ts
  frontend: dynamic(() => import("@/components/services/frontendService")),
  backend: dynamic(() => import("@/components/services/backendService")),
  fullstack: dynamic(() => import("@/components/services/fullstackService")),
  webdevelopment: dynamic(
    () => import("@/components/services/webdevelopmentService"),
  ),
}

export default function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const [activeTab, setActiveTab] = useState<TabType>("overview")
  const { slug } = use(params)
  const SelectedService = SERVICE_COMPONENTS[slug]
  if (!SelectedService) return notFound()
  const tabs: Array<{ id: TabType; label: string }> = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "technologies", label: "Technologies" },
  ]

  const icons = [
    {
      icon: Camera,
      colorFrom: "from-cyan-400",
      colorTo: " to-blue-500",
      route: "frontend",
    },
    {
      icon: Code,
      colorFrom: "from-violet-400",
      colorTo: "to-purple-500",
      route: "backend",
    },
    {
      icon: Zap,
      colorFrom: "from-pink-400",
      colorTo: "to-rose-500",
      route: "fullstack",
    },
    {
      icon: Coffee,
      colorFrom: "from-amber-400",
      colorTo: "to-orange-500",
      route: "webdevelopment",
    },
  ]

  return (
    <div className="min-h-screen pt-20 flex justify-center">
      <div className="h-screen sticky top-50 flex justify-end">
        <div className="flex flex-col gap-4 mb-12 overflow-x-auto pb-2">
          <div className="flex gap-4 p-1">
            {icons.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className={`w-10 h-10 bg-gradient-to-br ${item.colorFrom} ${item.colorTo} rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out`}
                >
                  <Link href={`/services/${item.route}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </Link>

                </div>
              )
            })}
          </div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold capitalize whitespace-nowrap transition-all
                ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <SelectedService activeTab={activeTab} />
    </div>
  )
}
