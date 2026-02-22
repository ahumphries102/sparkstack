"use client"
import { useState } from "react"
import { serviceData } from "@/app/data/serviceData"
import dynamic from "next/dynamic"

// --- 1. THE ACTORS (Static Mapping) ---
// Define outside the component to prevent Next.js dynamic import errors
// and to keep references stable during the transition.
const COMPONENTS: Record<string, any> = {
  frontendService: dynamic(
    () => import("@/components/services/frontendService"),
    { ssr: false },
  ),
  backendService: dynamic(
    () => import("@/components/services/backendService"),
    { ssr: false },
  ),
  fullstackService: dynamic(
    () => import("@/components/services/fullstackService"),
    { ssr: false },
  ),
  webdevelopmentService: dynamic(
    () => import("@/components/services/webdevelopmentService"),
    { ssr: false },
  ),
}

export default function Services() {
  // --- 2. THE STAGE MANAGER (State) ---
  const [activeRoute, setActiveRoute] = useState<string>("") // Current "Stage" content
  const [pendingRoute, setPendingRoute] = useState<string>("") // "Backstage" waiting content
  const [isModalOpen, setIsModalOpen] = useState(false) // The "Curtain" position

  const openModal = (nextRoute: string) => {
    // If clicking the same one, just close it.
    if (activeRoute === nextRoute) {
      setIsModalOpen(false)
      return
    }

    if (isModalOpen) {
      // If a different one is open: queue the new one and start the close
      setPendingRoute(nextRoute)
      setIsModalOpen(false)
    } else {
      // If nothing is open: swap and open immediately
      setActiveRoute(nextRoute)
      setIsModalOpen(true)
    }
  }

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    // 1. Only run this if the 'closing' animation (max-height) just finished
    if (e.propertyName !== "max-height") return

    // 2. THE REBOUND: If the curtain is now closed and someone is waiting backstage...
    if (!isModalOpen && pendingRoute) {
      setActiveRoute(pendingRoute) // Swap the content while invisible
      setPendingRoute("") // Clear the waiting room

      // 3. Trigger the opening animation in the next browser frame
      requestAnimationFrame(() => {
        setIsModalOpen(true)
      })
    }
  }

  const SelectedService = COMPONENTS[activeRoute] || null

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* --- Header --- */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700 mb-6">
            <span className="text-sm text-violet-400 font-semibold">
              What I Offer
            </span>
          </div>
          <h2
            className="text-6xl font-black mb-6"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Service{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Plans
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Flexible solutions tailored to your project needs and budget.
          </p>
        </div>

        {/* --- 3. THE GRID (Parent) --- */}
        <div className="flex flex-wrap gap-4">
          {serviceData.map((service) => (
            <div
              key={service.title}
              onClick={() => openModal(service.route)}
              className="flex-1 min-w-[250px] group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              {/* Card Decoration */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />

              <div
                className={`inline-flex p-3 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-zinc-800 rounded-lg font-semibold hover:bg-zinc-700 transition-all group-hover:bg-gradient-to-r group-hover:from-zinc-700 group-hover:to-zinc-800">
                Get Started
              </button>
            </div>
          ))}

          {/* --- 4. THE CURTAIN (Item 5) --- */}
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`basis-full overflow-hidden transition-all duration-700 ease-in-out ${
              isModalOpen
                ? "max-h-[1500px] opacity-100 mt-8"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            {/* The Stage Container */}
            <div>
              {/* We use a wrapper here so the internal component's 
        padding/margins don't "pop" the height transition early.
    */}
              <div className="relative">
                {SelectedService && <SelectedService isOpen={isModalOpen} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
