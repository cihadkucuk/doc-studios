import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { additionalLocales, defaultLocale, isSiteLocale, type SiteLocale, toLocalizedPath } from "@/lib/i18n"
import { getAllBlogSlugs, getLocalizedBlogPost } from "@/lib/blog"
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/seo"
import { getSiteCopy } from "@/lib/site-copy"

type Params = {
  locale: string
  slug: string
}

const toValidLocale = (value: string): SiteLocale | null => {
  if (!isSiteLocale(value) || value === defaultLocale) {
    return null
  }

  return value
}

export function generateStaticParams() {
  return additionalLocales.flatMap((locale) => getAllBlogSlugs().map((slug) => ({ locale, slug })))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const locale = toValidLocale(params.locale)

  if (!locale) {
    return createPageMetadata({
      title: "Article Not Found | DOC Studios",
      description: "The requested article does not exist.",
      path: "/blog",
      noIndex: true,
    })
  }

  const post = getLocalizedBlogPost(params.slug, locale)

  if (!post) {
    return createPageMetadata({
      title: "Article Not Found | DOC Studios",
      description: "The requested article does not exist.",
      path: "/blog",
      noIndex: true,
    })
  }

  return createPageMetadata({
    locale,
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    includeAlternates: true,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  })
}

export default function LocalizedBlogArticlePage({ params }: { params: Params }) {
  const locale = toValidLocale(params.locale)

  if (!locale) {
    notFound()
  }

  const post = getLocalizedBlogPost(params.slug, locale)

  if (!post) {
    notFound()
  }

  const copy = getSiteCopy(locale).blog
  const articlePath = toLocalizedPath(locale, `/blog/${post.slug}`)
  const blogPath = toLocalizedPath(locale, "/blog")

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon-512.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(articlePath),
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-950 to-black" lang={locale}>
      <Navigation locale={locale} />

      <main className="flex-1 pt-28 pb-20 px-6">
        <article className="max-w-4xl mx-auto border border-gray-700 bg-black/60 rounded-sm p-8 md:p-10">
          <Link
            href={blogPath}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-gray-300 hover:text-red-200 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {copy.backToBlog}
          </Link>

          <h1 className="font-serif font-light text-4xl md:text-6xl text-white mb-6">{post.title}</h1>
          <p className="font-sans text-lg text-gray-300 mb-10">{post.description}</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.12em] text-gray-400 mb-10 border-y border-gray-800 py-4">
            <span>
              {copy.published}: {post.publishedAt}
            </span>
            <span>
              {copy.updated}: {post.updatedAt}
            </span>
            <span>
              {post.readingMinutes} {copy.minutesLabel}
            </span>
          </div>

          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-3xl text-white mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="font-sans text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Footer locale={locale} />
    </div>
  )
}
