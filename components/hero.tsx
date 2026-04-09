export default function hero({}) {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6"
    >
      <div className="text-center w-full">
        <div
          role="img"
          aria-label="Spark Stack Logo"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-80 lg:w-96 lg:h-96 mx-auto logo-mask"
          style={{
            maskImage: "url(/spark_stack_logo1.svg)",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-black"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Build Better. <span className="text-zinc-100">Deliver Faster.</span>
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-zinc-400 mb-6 sm:mb-12 max-w-3xl mx-auto px-2">
          Transform your ideas into powerful web applications with cutting-edge
          technology and creative excellence
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center px-2">
          <a
            href="#services"
            className="px-6 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold
                          hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105 text-sm sm:text-base"
          >
            View Services
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-2 sm:py-4 bg-zinc-800 border border-zinc-700 rounded-lg font-semibold hover:bg-zinc-700 transition-all text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
