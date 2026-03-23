import profile_picture from "@/public/images/unnamed.jpg"
import Image from "next/image"

export default function about({}) {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-violet-500/20 
                                  border border-zinc-800 backdrop-blur-sm flex items-center justify-center"
            >
              <Image
                src={profile_picture}
                alt="Profile"
                className="w-3/4 h-auto aspect-square object-cover rounded-full"
              />
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
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Andrew Humphries
              </span>
            </h2>

            <div className="darkBg space-y-4  text-lg leading-relaxed">
              <p>
                A dedicated full-stack developer and graphic designer based
                right here in McMinnville, Oregon. With over 6 years of
                professional experience and a foundation in Graphic Design from
                Bellevue University, I bridge the gap between beautiful
                aesthetics and robust technical performance.
              </p>
              <p>
                I founded Spark Stack with a clear mission: to help our local
                community and businesses solve their toughest technical
                problems. Whether you need a high-speed website, a custom
                application, or help navigating complex digital hurdles, I bring
                technical excellence and a neighborly approach to every project.
                My goal is to build meaningful digital tools that help our town
                thrive in the modern web landscape.
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
  )
}
