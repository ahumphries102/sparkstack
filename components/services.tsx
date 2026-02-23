"use client"
import { serviceData } from "@/app/data/serviceData"
import Link from "next/link"
export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* --- Header --- */}
        <Link href="#services2" className="text-center mb-20">
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
        </Link>

        <div className="flex flex-wrap gap-4">
          {serviceData.map((service) => (
            <Link className="flex-1" href={`/services/${service.route}`} key={service.title}>
              <div className="min-w-[250px] group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
