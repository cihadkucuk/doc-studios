import { ServiceLandingPage } from "@/components/service-landing-page"
import { createPageMetadata } from "@/lib/seo"
import { servicePages } from "@/lib/service-pages"

const content = servicePages["advertising-music-production-prague"]
const pageTitle = content.title

export const metadata = {
  ...createPageMetadata({
    title: pageTitle,
    description: content.description,
    path: "/advertising-music-production-prague",
    includeAlternates: true,
    keywords: [
      "advertising music production Prague",
      "commercial music",
      "brand audio",
      "sonic branding",
      "campaign music",
      "product storytelling",
    ],
  }),
  title: { absolute: pageTitle },
}

export default function AdvertisingMusicProductionPraguePage() {
  return <ServiceLandingPage content={content} locale="en" />
}
