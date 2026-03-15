import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { defaultLocale, toLocalizedPath, type SiteLocale } from "@/lib/i18n"
import type { ServicePageContent } from "@/lib/service-pages"

type ServiceLandingPageProps = {
  content: ServicePageContent
  locale?: SiteLocale
}

export function ServiceLandingPage({ content, locale = defaultLocale }: ServiceLandingPageProps) {
  const homePath = toLocalizedPath(locale, "/")
  const contactPath = `${homePath}#contact`
  const worksPath = `${homePath}#artists`
  const licensingPath = toLocalizedPath(locale, "/licensing")

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-950 to-black" lang={locale}>
      <Navigation locale={locale} />

      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <section className="text-center mb-16">
            <h1 className="font-serif font-light text-5xl md:text-7xl text-white mb-6 chaos-glitch">{content.h1}</h1>
            <div className="w-24 h-px bg-red-500 mx-auto mb-8 subtle-pulse" />
            <p className="font-sans text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">{content.heroIntro}</p>
            <Link
              href={contactPath}
              className="inline-flex items-center gap-2 font-sans bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wide text-sm font-medium minimal-glow hover:shadow-lg hover:shadow-red-500/25"
            >
              {content.heroCtaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-4xl text-white mb-5">{content.overviewHeading}</h2>
            <div className="space-y-5">
              {content.overviewParagraphs.map((paragraph) => (
                <p key={paragraph} className="font-sans text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {content.slug === "film-scoring-prague" ? (
                <p className="font-sans text-gray-300 leading-relaxed">
                  For release planning and rights scope, review our{" "}
                  <Link href={licensingPath} className="text-red-200 hover:text-white transition-colors">
                    film and series music licensing framework
                  </Link>
                  . If your project also requires interactive soundtrack work, explore our{" "}
                  <Link
                    href={toLocalizedPath(locale, "/game-music-composer-prague")}
                    className="text-red-200 hover:text-white transition-colors"
                  >
                    game music composer in Prague service
                  </Link>
                  .
                </p>
              ) : null}
              {content.slug === "game-music-composer-prague" ? (
                <p className="font-sans text-gray-300 leading-relaxed">
                  Before launch, align usage scope in our{" "}
                  <Link href={licensingPath} className="text-red-200 hover:text-white transition-colors">
                    game-ready music licensing framework
                  </Link>
                  . If your title also needs strong narrative trailer support, review our{" "}
                  <Link
                    href={toLocalizedPath(locale, "/film-scoring-prague")}
                    className="text-red-200 hover:text-white transition-colors"
                  >
                    film scoring studio in Prague page
                  </Link>
                  .
                </p>
              ) : null}
              {content.slug === "advertising-music-production-prague" ? (
                <p className="font-sans text-gray-300 leading-relaxed">
                  For campaign rollout clarity, define channels, territories, and term in our{" "}
                  <Link href={licensingPath} className="text-red-200 hover:text-white transition-colors">
                    advertising music licensing framework
                  </Link>
                  . If the same brand world extends into cinematic storytelling, see our{" "}
                  <Link
                    href={toLocalizedPath(locale, "/film-scoring-prague")}
                    className="text-red-200 hover:text-white transition-colors"
                  >
                    film scoring studio in Prague service
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-4xl text-white mb-5">{content.useCasesHeading}</h2>
            <p className="font-sans text-gray-300 leading-relaxed mb-6">{content.useCasesIntro}</p>
            <ul className="grid md:grid-cols-2 gap-4">
              {content.useCases.map((item) => (
                <li key={item} className="border border-red-500/20 bg-black/60 rounded-sm px-5 py-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="font-sans text-gray-200 leading-relaxed">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-4xl text-white mb-5">{content.processHeading}</h2>
            <p className="font-sans text-gray-300 leading-relaxed mb-6">{content.processIntro}</p>
            <ol className="grid md:grid-cols-2 gap-5">
              {content.processSteps.map((step) => (
                <li key={step.title} className="border border-gray-700 bg-black/65 rounded-sm p-5">
                  <h3 className="font-serif text-2xl text-white mb-2">{step.title}</h3>
                  <p className="font-sans text-gray-300 leading-relaxed">{step.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-4xl text-white mb-5">{content.deliverablesHeading}</h2>
            <p className="font-sans text-gray-300 leading-relaxed mb-6">{content.deliverablesIntro}</p>
            <ul className="grid md:grid-cols-2 gap-3">
              {content.deliverables.map((item) => (
                <li key={item} className="border border-red-500/20 bg-black/60 rounded-sm px-4 py-3 font-sans text-gray-200">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-4xl text-white mb-5">{content.exampleHeading}</h2>
            <p className="font-sans text-gray-300 leading-relaxed mb-6">{content.exampleIntro}</p>
            <div className="space-y-6">
              {content.exampleWorks.map((work) => (
                <article
                  key={work.title}
                  className="border border-gray-700 bg-gradient-to-br from-gray-900 to-black rounded-sm overflow-hidden"
                >
                  <div className="grid lg:grid-cols-[280px_1fr] gap-0">
                    <div className="border-b lg:border-b-0 lg:border-r border-gray-800">
                      <img src={work.image} alt={work.imageAlt} className="w-full h-full object-cover min-h-[200px]" />
                    </div>
                    <div className="p-6">
                      <p className="font-sans text-xs uppercase tracking-[0.14em] text-red-300 mb-3">{work.label}</p>
                      <h3 className="font-serif text-3xl text-white mb-3">{work.title}</h3>
                      <p className="font-sans text-gray-300 leading-relaxed mb-3">{work.overview}</p>
                      <p className="font-sans text-gray-300 leading-relaxed mb-5">{work.details}</p>
                      <Link
                        href={worksPath}
                        className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-red-300 hover:text-red-100 transition-colors"
                      >
                        View Selected Work Context
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-4xl text-white mb-5">{content.faqHeading}</h2>
            <div className="space-y-3">
              {content.faqs.map((item) => (
                <details key={item.question} className="group border border-gray-700 bg-black/65 rounded-sm p-5">
                  <summary className="cursor-pointer list-none font-serif text-white text-xl flex items-center justify-between">
                    <span>{item.question}</span>
                    <span className="font-sans text-xs uppercase tracking-[0.12em] text-red-300 group-open:text-red-100">
                      Open
                    </span>
                  </summary>
                  <p className="font-sans text-gray-300 leading-relaxed mt-4">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mb-16 border border-red-500/35 bg-gradient-to-r from-red-950/30 to-black rounded-sm p-8">
            <h2 className="font-serif text-4xl text-white mb-4">{content.closingHeading}</h2>
            <p className="font-sans text-gray-300 leading-relaxed mb-6">{content.closingBody}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={contactPath}
                className="inline-flex items-center gap-2 font-sans bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wide text-sm font-medium"
              >
                {content.closingCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={licensingPath}
                className="inline-flex items-center gap-2 font-sans border border-red-500/50 text-red-200 hover:text-white hover:bg-red-950/35 px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wide text-sm font-medium"
              >
                Review Licensing
              </Link>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-3xl text-white mb-4">{content.relatedLinksHeading}</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {content.relatedLinks.map((link) => (
                <li key={link.href} className="border border-gray-700 bg-black/60 rounded-sm px-4 py-3">
                  <Link
                    href={toLocalizedPath(locale, link.href)}
                    className="font-sans text-red-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
