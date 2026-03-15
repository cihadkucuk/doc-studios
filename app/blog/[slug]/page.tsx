import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getAllBlogSlugs, getLocalizedBlogPost } from "@/lib/blog"
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/seo"
import { getSiteCopy } from "@/lib/site-copy"

type Params = {
  slug: string
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getLocalizedBlogPost(params.slug, "en")

  if (!post) {
    return createPageMetadata({
      title: "Article Not Found | DOC Studios",
      description: "The requested article does not exist.",
      path: "/blog",
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    includeAlternates: true,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  })
}

export default function BlogArticlePage({ params }: { params: Params }) {
  const copy = getSiteCopy("en").blog
  const post = getLocalizedBlogPost(params.slug, "en")

  if (!post) {
    notFound()
  }

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
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-950 to-black">
      <Navigation locale="en" />

      <main className="flex-1 pt-28 pb-20 px-6">
        <article className="max-w-4xl mx-auto border border-gray-700 bg-black/60 rounded-sm p-8 md:p-10">
          <Link
            href="/blog"
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
      <Footer locale="en" />
    </div>
  )
}
