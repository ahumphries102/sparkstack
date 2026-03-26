"use client"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/heroServices"
import Contact from "@/components/contact"

export default function SparkStack() {
  return (
    // Changed min-h-screen to min-h-[100dvh]
    <div className="min-h-[100dvh]">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  )
}