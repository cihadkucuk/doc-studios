import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { additionalLocales, defaultLocale, isSiteLocale, type SiteLocale, toLocalizedPath } from "@/lib/i18n"
import { getLocalizedBlogList } from "@/lib/blog"
import { createPageMetadata } from "@/lib/seo"
import { getSiteCopy } from "@/lib/site-copy"

type Params = {
  locale: string
}

const toValidLocale = (value: string): SiteLocale | null => {
  if (!isSiteLocale(value) || value === defaultLocale) {
    return null
  }

  return value
}

export function generateStaticParams() {
  return additionalLocales.map((locale) => ({ locale }))
}

export function generateMetadata({ params }: { params: Params }) {
  const locale = toValidLocale(params.locale)

  if (!locale) {
    return createPageMetadata({
      title: "Blog | DOC Studios",
      description: "Articles.",
      path: "/blog",
      noIndex: true,
    })
  }

  const copy = getSiteCopy(locale).blog

  return createPageMetadata({
    locale,
    title: `DOC Studios ${copy.indexAccent}`,
    description: copy.indexDescription,
    path: "/blog",
    includeAlternates: true,
  })
}

export default function LocalizedBlogIndexPage({ params }: { params: Params }) {
  const locale = toValidLocale(params.locale)

  if (!locale) {
    notFound()
  }

  const copy = getSiteCopy(locale).blog
  const posts = getLocalizedBlogList(locale)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-950 to-black" lang={locale}>
      <Navigation locale={locale} />

      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-14">
            <h1 className="font-serif font-light text-5xl md:text-7xl text-white mb-6 chaos-glitch">
              {copy.indexLead} <span className="font-bold text-red-500 minimal-glow">{copy.indexAccent}</span>
            </h1>
            <div className="w-24 h-px bg-red-500 mx-auto mb-8 subtle-pulse" />
            <p className="font-sans text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">{copy.indexDescription}</p>
          </header>

          <section className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-sm p-7 minimal-glow h-full"
              >
                <p className="font-sans text-xs uppercase tracking-[0.12em] text-red-300 mb-3">
                  {copy.published}: {post.publishedAt}
                </p>
                <h2 className="font-serif text-3xl text-white mb-3">{post.title}</h2>
                <p className="font-sans text-sm text-gray-400 mb-4">{post.description}</p>
                <p className="font-sans text-gray-300 leading-relaxed mb-6">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <p className="font-sans text-xs text-gray-500">
                    {post.readingMinutes} {copy.minutesLabel}
                  </p>
                  <Link
                    href={toLocalizedPath(locale, `/blog/${post.slug}`)}
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-red-300 hover:text-red-100 transition-colors"
                  >
                    {copy.readArticle}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
