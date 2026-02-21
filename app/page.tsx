"use client"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Contact from "@/components/contact"

export default function SparkStack() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  )
}
