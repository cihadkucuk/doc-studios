import { notFound } from "next/navigation"
import { FreeSoundsPackContent } from "@/components/free-sounds-pack-content"
import { additionalLocales, defaultLocale, isSiteLocale, type SiteLocale } from "@/lib/i18n"
import { createPageMetadata } from "@/lib/seo"

type Params = {
  locale: string
}

const descriptions: Record<SiteLocale, string> = {
  en: "Free sound pack download from DOC Studios.",
  cs: "Bezplatny sound pack od DOC Studios.",
  es: "Pack de sonidos gratuito de DOC Studios.",
  de: "Kostenloses Sound-Paket von DOC Studios.",
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
      title: "Free Sounds Pack | DOC Studios",
      description: descriptions.en,
      path: "/free-sounds-pack",
      noIndex: true,
    })
  }

  return createPageMetadata({
    locale,
    title: "Free Sounds Pack | DOC Studios",
    description: descriptions[locale],
    path: "/free-sounds-pack",
    includeAlternates: true,
  })
}

export default function LocalizedFreeSoundsPage({ params }: { params: Params }) {
  const locale = toValidLocale(params.locale)

  if (!locale) {
    notFound()
  }

  return <FreeSoundsPackContent locale={locale} />
}
