import { ServiceLandingPage } from "@/components/service-landing-page"
import { createPageMetadata } from "@/lib/seo"
import { servicePages } from "@/lib/service-pages"

const content = servicePages["game-music-composer-prague"]
const pageTitle = content.title

export const metadata = {
  ...createPageMetadata({
    title: pageTitle,
    description: content.description,
    path: "/game-music-composer-prague",
    includeAlternates: true,
    keywords: [
      "game music composer Prague",
      "adaptive music",
      "interactive soundtrack",
      "indie game audio",
      "thematic scoring",
      "gameplay immersion",
    ],
  }),
  title: { absolute: pageTitle },
}

export default function GameMusicComposerPraguePage() {
  return <ServiceLandingPage content={content} locale="en" />
}
