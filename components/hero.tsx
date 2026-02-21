
export default function hero({}) {
  return (
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
          Build Better. <span className="text-zinc-100">Deliver Faster.</span>
        </h3>
        <p
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto
                        animate-[fadeIn_1s_ease-out_0.4s_backwards]"
        >
          Transform your ideas into powerful web applications with cutting-edge
          technology and creative excellence
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
  )
}
