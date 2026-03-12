import Link from "next/link"

export default function Navigation() {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-zinc-900/50 backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
        >
          <div
            className="w-20 h-15 logo-mask"
            style={{
              maskImage: "url(/spark_stack_logo1.svg)",
              maskRepeat: "no-repeat",
              maskSize: "contain",
            }}
          />
        </Link>

        <div className="hidden md:flex gap-8">
          {["About", "Contact", "Services"].map((item) => (
            <span key={item}>
              <Link
                href={`/#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-wider hover:text-cyan-400 transition-colors"
              >
                {item}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </nav>
  )
}
