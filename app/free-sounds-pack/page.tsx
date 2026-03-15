import { FreeSoundsPackContent } from "@/components/free-sounds-pack-content"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Free Sounds Pack | DOC Studios",
  description: "Download a free sounds pack from DOC Studios.",
  path: "/free-sounds-pack",
  includeAlternates: true,
})

export default function FreeSoundsPackPage() {
  return <FreeSoundsPackContent locale="en" />
}
