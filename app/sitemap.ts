import type { MetadataRoute } from "next"
import { getAllBlogSlugs } from "@/lib/blog"
import { localeLanguageTags, locales, toLocalizedPath } from "@/lib/i18n"
import { absoluteUrl } from "@/lib/seo"

const staticPaths = [
  "/",
  "/licensing",
  "/doc",
  "/free-sounds-pack",
  "/blog",
  "/film-scoring-prague",
  "/game-music-composer-prague",
  "/advertising-music-production-prague",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPaths = getAllBlogSlugs().map((slug) => `/blog/${slug}`)
  const allPaths = [...staticPaths, ...blogPaths]
  const now = new Date()

  return allPaths.map((path) => {
    const languages: Record<string, string> = {}
    for (const locale of locales) {
      languages[localeLanguageTags[locale]] = absoluteUrl(toLocalizedPath(locale, path))
    }

    return {
      url: absoluteUrl(toLocalizedPath("en", path)),
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "/" ? 1 : 0.8,
      alternates: { languages },
    }
  })
}
