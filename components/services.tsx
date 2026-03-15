"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Film, Megaphone, Gamepad2 } from "lucide-react"
import Link from "next/link"
import { defaultLocale, toLocalizedPath, type SiteLocale } from "@/lib/i18n"
import { getSiteCopy } from "@/lib/site-copy"

type ServicesProps = {
  locale?: SiteLocale
}

const icons = [Film, Megaphone, Gamepad2]

export function Services({ locale = defaultLocale }: ServicesProps) {
  const copy = getSiteCopy(locale).services
  const homePath = toLocalizedPath(locale, "/")
  const freePackPath = toLocalizedPath(locale, "/free-sounds-pack")
  const worksPath = `${homePath}#artists`
  const serviceLandingPaths = [
    toLocalizedPath(locale, "/film-scoring-prague"),
    toLocalizedPath(locale, "/advertising-music-production-prague"),
    toLocalizedPath(locale, "/game-music-composer-prague"),
  ]
  const serviceCtaLabels = [
    "Film Scoring Studio in Prague",
    "Advertising Music Production in Prague",
    "Game Music Composer in Prague",
  ]

  return (
    <section id="services" className="relative py-24 px-6 bg-transparent overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_40%,rgba(120,0,0,0.12),transparent_72%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif font-light text-5xl md:text-6xl text-white mb-6 chaos-glitch">
            {copy.headingLead} <span className="font-bold text-red-500 minimal-glow">{copy.headingAccent}</span>
          </h2>
          <div className="w-24 h-px bg-red-500 mx-auto mb-8 subtle-pulse" />
          <p className="font-sans text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            {copy.description}
          </p>
          <div className="mt-8">
            <Link href={freePackPath}>
              <button className="font-sans bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wide text-sm font-medium minimal-glow hover:shadow-lg hover:shadow-red-500/25">
                {copy.freePackCta}
              </button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {copy.cards.map((service, index) => {
            const ServiceIcon = icons[index]
            const landingPath = serviceLandingPaths[index]
            const ctaLabel = serviceCtaLabels[index]

            return (
              <Card
                key={service.title}
                className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-red-500/50 transition-all duration-300 group minimal-glow h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-6 p-4 bg-red-600/10 rounded-sm w-fit group-hover:bg-red-600/20 transition-colors border border-red-500/20">
                    <ServiceIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="font-serif font-medium text-xl text-white mb-3 group-hover:text-red-100 transition-colors">
                    <Link href={landingPath} className="hover:text-red-100 transition-colors">
                      {service.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="font-sans text-red-400 font-light text-sm tracking-wide uppercase">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-2">
                    <Link
                      href={landingPath}
                      className="inline-flex items-center font-sans text-xs uppercase tracking-[0.12em] text-red-200 hover:text-white transition-colors"
                    >
                      Explore {ctaLabel}
                    </Link>
                    <Link
                      href={worksPath}
                      className="inline-flex items-center font-sans text-xs uppercase tracking-[0.12em] text-gray-400 hover:text-red-200 transition-colors"
                    >
                      View Related Work References
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
