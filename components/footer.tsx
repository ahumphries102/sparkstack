import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer({}) {
  return (
    <footer className="relative border-t border-zinc-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" aria-label="Spark Stack Home">
            <div
              className="w-20 h-15 logo-mask"
              style={{
                maskImage: "url(/spark_stack_logo1.svg)",
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            />
          </Link>

          {/* 1. Added nav and ul/li for Footer Links */}
          <nav aria-label="Footer Links">
            <ul className="flex gap-6 text-sm text-zinc-400 list-none">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </nav>

          {/* 2. Added ul/li for Social Links */}
          <nav aria-label="Social Media Links">
            <ul className="flex gap-4 list-none">
              <li>
                <a
                  href="https://github.com/ahumphries102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-cyan-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/ahumphriesprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:ahumphries102@gmail.com"
                  className="p-2 hover:text-cyan-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
          © 2026 Spark Stack. Crafted with passion by Andrew Humphries.
        </div>
      </div>
    </footer>
  )
}
