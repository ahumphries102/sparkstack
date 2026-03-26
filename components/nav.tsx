import Link from "next/link"
import { Menu } from "lucide-react"

export default function Navigation() {
  const navLinks = ["About", "Contact", "Services"]

  return (
    <nav
  className="sticky top-0 w-full z-50 bg-zinc-900/50 backdrop-blur-sm"
>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div
            className="w-20 h-15 logo-mask bg-white"
            style={{
              maskImage: "url(/spark_stack_logo1.svg)",
              maskRepeat: "no-repeat",
              maskSize: "contain",
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-wider hover:text-cyan-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Menu className="w-6 h-6" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-4 mt-4 shadow bg-zinc-900 rounded-box w-52 gap-4 border border-zinc-800"
          >
            {navLinks.map((item) => (
              <li key={item}>
                <Link
                  href={`/#${item.toLowerCase()}`}
                  className="text-base uppercase tracking-wider hover:text-cyan-400"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
