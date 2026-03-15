import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { additionalLocales, defaultLocale, isSiteLocale, type SiteLocale, toLocalizedPath } from "@/lib/i18n"
import { createPageMetadata } from "@/lib/seo"

type Params = {
  locale: string
}

const copy: Record<
  SiteLocale,
  {
    title: string
    intro: string
    body: string
    cta: string
  }
> = {
  en: {
    title: "About DOC Studios",
    intro: "DOC Studios is a Prague-based production house for film, advertising, and game music.",
    body: "We combine cinematic composition, modern production standards, and release-ready licensing clarity in one workflow.",
    cta: "Start Your Project",
  },
  cs: {
    title: "O DOC Studios",
    intro: "DOC Studios je pražské produkční studio zaměřené na hudbu pro film, reklamu a hry.",
    body: "Spojujeme filmovou kompozici, moderní produkční standardy a licenční jasnost připravenou pro profesionální vydání.",
    cta: "Začít projekt",
  },
  es: {
    title: "Sobre DOC Studios",
    intro: "DOC Studios es un estudio de producción en Praga especializado en música para cine, publicidad y videojuegos.",
    body: "Unimos composición cinematográfica, estándares de producción modernos y licencias claras listas para publicación.",
    cta: "Iniciar proyecto",
  },
  de: {
    title: "Über DOC Studios",
    intro: "DOC Studios ist ein Prager Produktionsstudio für Film-, Werbe- und Game-Musik.",
    body: "Wir verbinden cineastische Komposition, moderne Produktionsstandards und klare, release-taugliche Lizenzstrukturen.",
    cta: "Projekt starten",
  },
}

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
      title: "About DOC Studios",
      description: "About DOC Studios.",
      path: "/doc",
      noIndex: true,
    })
  }

  return createPageMetadata({
    locale,
    title: `${copy[locale].title} | DOC Studios`,
    description: copy[locale].intro,
    path: "/doc",
    includeAlternates: true,
  })
}

export default function LocalizedDocPage({ params }: { params: Params }) {
  const locale = toValidLocale(params.locale)

  if (!locale) {
    notFound()
  }

  const pageCopy = copy[locale]
  const homeContactPath = `${toLocalizedPath(locale, "/")}#contact`

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-red-950/20" lang={locale}>
      <Navigation locale={locale} />

      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto border border-red-600/30 bg-black/60 rounded-sm p-8 md:p-12">
          <h1 className="font-serif font-bold text-5xl md:text-6xl text-white mb-6 blood-text-glow">{pageCopy.title}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-transparent mb-8" />
          <p className="text-xl text-red-100 mb-6 leading-relaxed">{pageCopy.intro}</p>
          <p className="text-lg text-red-200 leading-relaxed mb-10">{pageCopy.body}</p>

          <Link
            href={homeContactPath}
            className="inline-flex items-center font-serif font-bold bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm transition-colors"
          >
            {pageCopy.cta}
          </Link>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
