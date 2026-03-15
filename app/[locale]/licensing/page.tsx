import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { additionalLocales, defaultLocale, isSiteLocale, type SiteLocale, toLocalizedPath } from "@/lib/i18n"
import { createPageMetadata } from "@/lib/seo"
import { getSiteCopy } from "@/lib/site-copy"

type Params = {
  locale: string
}

const badgeIcons = [FileCheck2, ShieldCheck, CheckCircle2]

const toValidLocale = (value: string): SiteLocale | null => {
  if (!isSiteLocale(value) || value === defaultLocale) {
    return null
  }

  return value
}

export function generateStaticParams() {
  return additionalLocales.map((locale) => ({ locale }))
}

export function generateMetadata({ params }: { params: Params }) {
  const locale = toValidLocale(params.locale)

  if (!locale) {
    return createPageMetadata({
      title: "Licensing | DOC Studios",
      description: "Licensing structure details.",
      path: "/licensing",
      noIndex: true,
    })
  }

  const copy = getSiteCopy(locale).licensingPreview

  return createPageMetadata({
    locale,
    title: `${copy.headingLead} ${copy.headingAccent} | DOC Studios`,
    description: copy.description,
    path: "/licensing",
    includeAlternates: true,
    keywords: ["music licensing structure", "claim-free licensing", "sync rights"],
  })
}

export default function LocalizedLicensingPage({ params }: { params: Params }) {
  const locale = toValidLocale(params.locale)

  if (!locale) {
    notFound()
  }

  const copy = getSiteCopy(locale).licensingPreview
  const homeContactPath = `${toLocalizedPath(locale, "/")}#contact`

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-950 to-black" lang={locale}>
      <Navigation locale={locale} />

      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <section className="text-center mb-14">
            <h1 className="font-serif font-light text-5xl md:text-7xl text-white mb-6 chaos-glitch">
              {copy.headingLead} <span className="font-bold text-red-500 minimal-glow">{copy.headingAccent}</span>
            </h1>
            <div className="w-24 h-px bg-red-500 mx-auto mb-8 subtle-pulse" />
            <p className="font-sans text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">{copy.description}</p>
          </section>

          <section className="grid md:grid-cols-3 gap-4 mb-10">
            {copy.badges.map((badge, index) => {
              const BadgeIcon = badgeIcons[index]

              return (
                <article key={badge.title} className="border border-red-500/25 bg-black/60 rounded-sm p-5 minimal-glow">
                  <div className="flex items-start gap-3">
                    <BadgeIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h2 className="font-serif text-lg text-white">{badge.title}</h2>
                      <p className="font-sans text-sm text-gray-400 mt-1 leading-relaxed">{badge.description}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-14">
            {copy.highlights.map((item) => (
              <article key={item.title} className="border border-gray-700 bg-black/70 rounded-sm p-6 h-full">
                <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                <p className="font-sans text-gray-300 text-sm leading-relaxed">{item.content}</p>
              </article>
            ))}
          </section>

          <section className="border border-red-500/35 bg-gradient-to-r from-red-950/30 to-black rounded-sm p-8 text-center">
            <Link
              href={homeContactPath}
              className="inline-flex items-center gap-2 font-sans bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wide text-sm font-medium"
            >
              {copy.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
