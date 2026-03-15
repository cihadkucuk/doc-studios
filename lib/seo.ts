import type { Metadata } from "next"
import {
  defaultLocale,
  localeLanguageTags,
  locales,
  openGraphLocales,
  type SiteLocale,
  toLocalizedPath,
} from "@/lib/i18n"

const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
const normalizedEnvSiteUrl = envSiteUrl?.replace(/\/+$/, "")

export const siteConfig = {
  name: "DOC Studios s.r.o.",
  shortName: "DOC Studios",
  url: normalizedEnvSiteUrl || "https://docstudios.eu",
  description: "Music production for film, advertising, and games with structured, claim-free licensing.",
  defaultKeywords: [
    "music production Prague",
    "film score production",
    "advertising music studio",
    "game music composition",
    "music licensing",
    "claim-free music licensing",
    "DOC Studios",
  ],
  ogImage: "/icon-512.png",
}

type MetadataOptions = {
  title: string
  description: string
  path: string
  locale?: SiteLocale
  keywords?: string[]
  includeAlternates?: boolean
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  noIndex?: boolean
}

const buildAlternates = (path: string, locale: SiteLocale, includeAlternates: boolean) => {
  const canonical = toLocalizedPath(locale, path)

  if (!includeAlternates) {
    return { canonical }
  }

  const languages: Record<string, string> = {}

  for (const item of locales) {
    languages[localeLanguageTags[item]] = toLocalizedPath(item, path)
  }

  languages["x-default"] = toLocalizedPath(defaultLocale, path)

  return {
    canonical,
    languages,
  }
}

export const createPageMetadata = ({
  title,
  description,
  path,
  locale = defaultLocale,
  keywords = [],
  includeAlternates = false,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: MetadataOptions): Metadata => {
  const mergedKeywords = Array.from(new Set([...siteConfig.defaultKeywords, ...keywords]))

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: buildAlternates(path, locale, includeAlternates),
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
    openGraph: {
      type,
      title,
      description,
      siteName: siteConfig.name,
      url: toLocalizedPath(locale, path),
      locale: openGraphLocales[locale],
      images: [
        {
          url: siteConfig.ogImage,
          width: 512,
          height: 512,
          alt: `${siteConfig.shortName} logo`,
        },
      ],
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  }
}

export const absoluteUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`
}
