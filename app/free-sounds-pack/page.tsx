import { FreeSoundsPackContent } from "@/components/free-sounds-pack-content"
import { createPageMetadata } from "@/lib/seo"

const pageTitle = "Free Sounds Pack for Filmmakers & Creators | DOC Studios"

export const metadata = {
  ...createPageMetadata({
    title: pageTitle,
    description:
      "Get a free sounds pack from DOC Studios and explore cinematic, advertising, and game-ready audio inspired by our Prague production workflow.",
    path: "/free-sounds-pack",
    includeAlternates: true,
  }),
  title: { absolute: pageTitle },
}

export default function FreeSoundsPackPage() {
  return <FreeSoundsPackContent locale="en" />
}
