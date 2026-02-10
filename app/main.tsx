"use client"
import profile_picture from "./images/unnamed.jpg"
import Image from "next/image"
import { Camera, Code, Zap, Mail, Github, Linkedin, Coffee } from "lucide-react"

export default function SparkStack() {
  const services = [
    {
      title: "Front-End",
      icon: <Camera className="w-8 h-8" />,
      description: "Beautiful, responsive interfaces that users love",
      features: [
        "Modern UI/UX Design",
        "Responsive Layouts",
        "React, Vue, or Vanilla JS",
        "Performance Optimization",
        "Cross-browser Compatible",
        "Accessibility Standards",
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Back-End",
      icon: <Code className="w-8 h-8" />,
      description: "Robust server-side solutions for your applications",
      features: [
        "RESTful API Development",
        "Database Design & Management",
        "Authentication & Security",
        "Server Configuration",
        "Payment Integration",
        "Scalable Architecture",
      ],
      color: "from-violet-400 to-purple-500",
    },
    {
      title: "Full-Stack",
      icon: <Zap className="w-8 h-8" />,
      description: "Complete end-to-end web application development",
      features: [
        "All Front-End Features",
        "All Back-End Features",
        "Database Integration",
        "Deployment & Hosting",
        "Ongoing Maintenance",
        "Priority Support",
      ],
      color: "from-pink-400 to-rose-500",
    },
    {
      title: "Web Development",
      icon: <Coffee className="w-8 h-8" />,
      description: "Custom solutions for your unique business needs",
      features: [
        "Business Websites",
        "E-commerce Platforms",
        "Content Management Systems",
        "Custom Web Applications",
        "SEO Optimization",
        "Analytics Integration",
      ],
      color: "from-amber-400 to-orange-500",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300`}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              ⚡ Spark Stack
            </div>
            <div className="hidden md:flex gap-8">
              {["About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm uppercase tracking-wider hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center px-6"
        >
          <div className="max-w-5xl mx-auto text-center z-10">
            <div
              className="inline-block mb-6 px-4 py-2 bg-zinc-800/50 backdrop-blur-sm rounded-full border border-zinc-700
                          animate-[fadeIn_0.6s_ease-out]"
            >
              <span className="text-sm text-zinc-400">
                Innovative Web Solutions
              </span>
            </div>

            <h1
              className="text-7xl md:text-8xl font-black mb-6 leading-tight
                         animate-[fadeIn_0.8s_ease-out_0.2s_backwards]"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                Spark Stack
              </span>
            </h1>
            <h3
              className="text-5xl md:text-5xl font-black mb-6 leading-tight
                         animate-[fadeIn_0.8s_ease-out_0.2s_backwards]"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Build Better. <span className="text-zinc-100">Ship Faster.</span>
            </h3>
            <p
              className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto
                        animate-[fadeIn_1s_ease-out_0.4s_backwards]"
            >
              Transform your ideas into powerful web applications with
              cutting-edge technology and creative excellence
            </p>

            <div
              className="flex flex-wrap gap-4 justify-center
                          animate-[fadeIn_1.2s_ease-out_0.6s_backwards]"
            >
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold
                          hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
              >
                View Services
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-zinc-800 border border-zinc-700 rounded-lg font-semibold
                          hover:bg-zinc-700 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div
                  className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-violet-500/20 
                              border border-zinc-800 backdrop-blur-sm"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <Image
                        src={profile_picture}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div
                  className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-800 rounded-xl p-6 
                              backdrop-blur-sm shadow-xl"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    8+
                  </div>
                  <div className="text-sm text-zinc-400">Years Experience</div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700 mb-4">
                  <span className="text-sm text-cyan-400 font-semibold">
                    Meet the Developer
                  </span>
                </div>

                <h2
                  className="text-5xl font-black mb-6"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Hi, I'm
                  <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    Andrew Humphries
                  </span>
                </h2>

                <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                  <p>
                    A dedicated full-stack developer and graphic designer based
                    right here in McMinnville, Oregon. With over 6 years of
                    professional experience and a foundation in Graphic Design
                    from Bellevue University, I bridge the gap between beautiful
                    aesthetics and robust technical performance.
                  </p>
                  <p>
                    I founded Spark Stack with a clear mission: to help our
                    local community and businesses solve their toughest
                    technical problems. Whether you need a high-speed website, a
                    custom application, or help navigating complex digital
                    hurdles, I bring technical excellence and a neighborly
                    approach to every project. My goal is to build meaningful
                    digital tools that help our town thrive in the modern web
                    landscape.
                  </p>
                </div>

                {/* Skills */}
                <div className="pt-6">
                  <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-4">
                    Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Node.js",
                      "PostgreSQL",
                      "GraphQL",
                      "Next.js",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-zinc-800/50 rounded-full text-sm border border-zinc-700
                                                 hover:border-cyan-400/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-32 px-6">
          <div className="max-w-7xl mx-auto">
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
                Flexible solutions tailored to your project needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8
                           hover:border-zinc-700 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 
                                group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 bg-gradient-to-br ${service.color} rounded-xl mb-6
                                group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-zinc-300"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`}
                        ></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => {
                      const element = document.getElementById("contact")
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="w-full py-3 bg-zinc-800 rounded-lg font-semibold
                                   hover:bg-zinc-700 transition-all group-hover:bg-gradient-to-r 
                                   group-hover:from-zinc-700 group-hover:to-zinc-800"
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

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
