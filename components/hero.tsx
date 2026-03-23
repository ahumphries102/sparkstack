export default function hero({}) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center h-[100vh]">
        <div
          className="w-164 h-132 mx-auto  logo-mask"
          style={{
            maskImage: "url(/spark_stack_logo1.svg)",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
        <span className="invisible">Spark Stack</span>
        <h3
          className="text-5xl md:text-5xl font-black"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Build Better. <span className="text-zinc-100">Deliver Faster.</span>
        </h3>
        <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl">
          Transform your ideas into powerful web applications with cutting-edge
          technology and creative excellence
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold
                          hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
          >
            View Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-zinc-800 border border-zinc-700 rounded-lg font-semibold hover:bg-zinc-700 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
