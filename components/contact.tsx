import { contact } from "@/components/emailServer"
import { useState } from "react"

export default function Contact({}) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault()
    const finalQuote = {
      email: email,
      message: message,
      submittedAt: new Date().toLocaleString("en-US", {
        hour12: true,
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    }
    await contact(finalQuote)
  }
  return (
    <section id="contact" className="relative py-32 sm:px-2 md:px-0">
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
          Have a project in mind? Let's discuss how we can bring your vision to
          life with cutting-edge technology and creative excellence.
        </p>

        <form
          onSubmit={handleContact}
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto"
        >
          <fieldset className="card-body">
            <label className="label">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="input validator"
              placeholder="Email"
              required
            />
            <label className="label">Message</label>
            <label className="fieldset">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea validator"
                minLength={10}
                placeholder="Your message here..."
                rows={4}
                required
              />
            </label>
            <button
              type="submit"
              className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg font-semibold
              hover:shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-105
              "
            >
              Submit
            </button>
          </fieldset>
        </form>

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
  )
}
