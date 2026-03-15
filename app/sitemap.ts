import type { MetadataRoute } from "next"
import { getAllBlogSlugs } from "@/lib/blog"
import { locales, toLocalizedPath } from "@/lib/i18n"
import { absoluteUrl } from "@/lib/seo"

const staticPaths = ["/", "/licensing", "/doc", "/free-sounds-pack", "/blog"]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPaths = getAllBlogSlugs().map((slug) => `/blog/${slug}`)
  const allPaths = [...staticPaths, ...blogPaths]
  const now = new Date()

  return locales.flatMap((locale) =>
    allPaths.map((path) => ({
      url: absoluteUrl(toLocalizedPath(locale, path)),
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "/" ? 1 : 0.8,
    })),
  )
}
