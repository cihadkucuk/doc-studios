"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Film, Megaphone, Gamepad2 } from "lucide-react"
import Link from "next/link"

export function Services() {
  const scrollToWorks = () => {
    const worksSection = document.getElementById("artists")
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" })
      return
    }
    window.location.href = "/#artists"
  }

  const services = [
    {
      icon: Film,
      title: "Film Scores",
      subtitle: "Cinematic precision meets creative disruption",
      description:
        "Professional orchestral compositions for feature films, documentaries, and streaming content. Delivering emotional impact through controlled sonic architecture.",
    },
    {
      icon: Megaphone,
      title: "Advertisement",
      subtitle: "Brand identity through strategic sound design",
      description:
        "Commercial audio solutions that elevate brand messaging. From 30-second spots to comprehensive sonic branding campaigns.",
    },
    {
      icon: Gamepad2,
      title: "Game Music",
      subtitle: "Interactive audio for immersive experiences",
      description:
        "Dynamic soundscapes and adaptive music systems for gaming platforms. Creating memorable audio experiences that enhance gameplay.",
    },
  ]

  return (
    <section id="services" className="relative py-24 px-6 bg-transparent overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_40%,rgba(120,0,0,0.12),transparent_72%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif font-light text-5xl md:text-6xl text-white mb-6 chaos-glitch">
            OUR <span className="font-bold text-red-500 minimal-glow">CRAFT</span>
          </h2>
          <div className="w-24 h-px bg-red-500 mx-auto mb-8 subtle-pulse" />
          <p className="font-sans text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Three specialized divisions delivering premium audio solutions for entertainment and commercial industries.
          </p>
          <div className="mt-8">
            <Link href="/free-sounds-pack">
              <button className="font-sans bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wide text-sm font-medium minimal-glow hover:shadow-lg hover:shadow-red-500/25">
                Get Free Sounds Pack
              </button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-red-500/50 transition-all duration-300 group cursor-pointer minimal-glow h-full"
              role="button"
              tabIndex={0}
              onClick={scrollToWorks}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  scrollToWorks()
                }
              }}
              aria-label={`Go to Our Works from ${service.title}`}
            >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-6 p-4 bg-red-600/10 rounded-sm w-fit group-hover:bg-red-600/20 transition-colors border border-red-500/20">
                    <service.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="font-serif font-medium text-xl text-white mb-3 group-hover:text-red-100 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-sans text-red-400 font-light text-sm tracking-wide uppercase">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
