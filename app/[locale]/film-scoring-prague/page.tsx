import { notFound } from "next/navigation"
import { ServiceLandingPage } from "@/components/service-landing-page"
import { additionalLocales, defaultLocale, isSiteLocale, type SiteLocale } from "@/lib/i18n"
import { createPageMetadata } from "@/lib/seo"
import { servicePages } from "@/lib/service-pages"

type Params = {
  locale: string
}

const content = servicePages["film-scoring-prague"]
const pageTitle = content.title

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
      title: pageTitle,
      description: content.description,
      path: "/film-scoring-prague",
      noIndex: true,
    })
  }

  return {
    ...createPageMetadata({
      locale,
      title: pageTitle,
      description: content.description,
      path: "/film-scoring-prague",
      includeAlternates: true,
      keywords: [
        "film scoring studio Prague",
        "original score",
        "documentary music",
        "trailer music",
        "streaming productions",
        "cinematic composition",
      ],
    }),
    title: { absolute: pageTitle },
  }
}

export default function LocalizedFilmScoringPraguePage({ params }: { params: Params }) {
  const locale = toValidLocale(params.locale)

  if (!locale) {
    notFound()
  }

  return <ServiceLandingPage content={content} locale={locale} />
}
