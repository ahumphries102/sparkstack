"use client"

import { Mail, Github, Linkedin } from "lucide-react"

import Nav from "./components/nav"
import Hero from "./components/hero"
import About from "./components/about"
import Services from "./components/services"
export default function SparkStack() {
  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
        <Nav />
        <Hero />
        <About />
        <Services />
        

        {/* Contact Section */}
        <section id="contact" className="relative py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700 mb-6">
              <span className="text-sm text-pink-400 font-semibold">
                Let's Connect
              </span>
            </div>

            <h2
              className="text-6xl font-black mb-6"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Ready to{" "}
              <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Collaborate?
              </span>
            </h2>

            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your vision
              to life with cutting-edge technology and creative excellence.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:ahumphries102@gmail.com"
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg font-semibold
                          hover:shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-105
                          flex items-center gap-2"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                ahumphries102@gmail.com
              </a>
              <a
                href="https://github.com/ahumphries102"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-zinc-800 border border-zinc-700 rounded-lg font-semibold
                          hover:bg-zinc-700 transition-all flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View Portfolio
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <div className="text-cyan-400 text-2xl mb-2">⚡</div>
                <div className="text-sm text-zinc-500 mb-1">Response Time</div>
                <div className="font-semibold">Within 24 hours</div>
              </div>
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <div className="text-violet-400 text-2xl mb-2">🌍</div>
                <div className="text-sm text-zinc-500 mb-1">Location</div>
                <div className="font-semibold">McMinnville, OR</div>
              </div>
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <div className="text-pink-400 text-2xl mb-2">💼</div>
                <div className="text-sm text-zinc-500 mb-1">Availability</div>
                <div className="font-semibold">Open for projects</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-zinc-800 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                ⚡ Spark Stack
              </div>

              <div className="flex gap-6 text-sm text-zinc-400">
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/ahumphries102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/ahumphriesprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ahumphries102@gmail.com"
                  className="p-2 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
              © 2026 Spark Stack. Crafted with passion by Andrew Humphries.
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
