import Link from "next/link"
import { ArrowRight, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { defaultLocale, toLocalizedPath, type SiteLocale } from "@/lib/i18n"
import { getSiteCopy } from "@/lib/site-copy"

type LicensingPreviewProps = {
  locale?: SiteLocale
}

const badgeIcons = [FileCheck2, ShieldCheck, CheckCircle2]

export function LicensingPreview({ locale = defaultLocale }: LicensingPreviewProps) {
  const copy = getSiteCopy(locale).licensingPreview
  const licensingPath = toLocalizedPath(locale, "/licensing")

  return (
    <section id="licensing" className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(95%_75%_at_50%_45%,rgba(120,0,0,0.14),transparent_74%)]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-serif font-light text-5xl md:text-6xl text-white mb-6 chaos-glitch">
            {copy.headingLead} <span className="font-bold text-red-500 minimal-glow">{copy.headingAccent}</span>
          </h2>
          <div className="w-24 h-px bg-red-500 mx-auto mb-8 subtle-pulse" />
          <p className="font-sans text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            {copy.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {copy.badges.map((item, index) => {
            const BadgeIcon = badgeIcons[index]

            return (
              <div
                key={item.title}
                className="border border-red-500/25 bg-black/60 backdrop-blur-sm px-5 py-5 rounded-sm minimal-glow"
              >
                <div className="flex items-start gap-3">
                  <BadgeIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-white text-lg">{item.title}</p>
                    <p className="font-sans text-sm text-gray-400 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {copy.highlights.map((highlight) => (
            <Card key={highlight.title} className="bg-gradient-to-br from-gray-900 to-black border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="font-serif text-white text-2xl">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-gray-300 text-sm leading-relaxed">{highlight.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={licensingPath}
            className="inline-flex items-center gap-2 font-sans bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wide text-sm font-medium minimal-glow hover:shadow-lg hover:shadow-red-500/25"
          >
            {copy.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
