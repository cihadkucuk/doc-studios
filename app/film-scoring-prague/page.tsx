import { ServiceLandingPage } from "@/components/service-landing-page"
import { createPageMetadata } from "@/lib/seo"
import { servicePages } from "@/lib/service-pages"

const content = servicePages["film-scoring-prague"]
const pageTitle = content.title

export const metadata = {
  ...createPageMetadata({
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

export default function FilmScoringPraguePage() {
  return <ServiceLandingPage content={content} locale="en" />
}
