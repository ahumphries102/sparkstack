import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer({}) {
  return (
    <footer className="relative border-t border-zinc-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/">
            <div
              className="w-20 h-15 logo-mask"
              style={{
                maskImage: "url(/spark_stack_logo1.svg)",
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            />
          </Link>

          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
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
  )
}
