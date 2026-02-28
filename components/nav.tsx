import Link from "next/link"

const services = [
  { name: "Frontend", href: "/services/frontend" },
  { name: "Backend", href: "/services/backend" },
  { name: "Full-Stack", href: "/services/fullstack" },
  { name: "Web Dev", href: "/services/webdevelopment" },
]

export default function Navigation() {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-zinc-900/50 backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
        >
          ⚡ Spark Stack
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
