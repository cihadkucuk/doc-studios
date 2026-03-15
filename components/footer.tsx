import Link from "next/link"
import { defaultLocale, toLocalizedPath, type SiteLocale } from "@/lib/i18n"
import { getSiteCopy } from "@/lib/site-copy"

type FooterProps = {
  locale?: SiteLocale
}

export function Footer({ locale = defaultLocale }: FooterProps) {
  const copy = getSiteCopy(locale).footer
  const homePath = toLocalizedPath(locale, "/")
  const licensingPath = toLocalizedPath(locale, "/licensing")
  const blogPath = toLocalizedPath(locale, "/blog")
  const filmScoringPath = toLocalizedPath(locale, "/film-scoring-prague")
  const gameMusicPath = toLocalizedPath(locale, "/game-music-composer-prague")
  const advertisingMusicPath = toLocalizedPath(locale, "/advertising-music-production-prague")

  return (
    <footer className="w-full border-t border-slate-700 bg-slate-900 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-2xl text-white mb-2">DOC Studios s.r.o.</h3>
            <p className="font-sans text-slate-400">{copy.tagline}</p>
          </div>

          <div className="flex flex-col items-center gap-y-3 md:items-end">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-end">
              <Link href={`${homePath}#services`} className="font-sans text-slate-400 hover:text-primary transition-colors">
                {copy.links.services}
              </Link>
              <Link href={licensingPath} className="font-sans text-slate-400 hover:text-primary transition-colors">
                {copy.links.licensing}
              </Link>
              <Link href={blogPath} className="font-sans text-slate-400 hover:text-primary transition-colors">
                {copy.links.blog}
              </Link>
              <Link href={`${homePath}#contact`} className="font-sans text-slate-400 hover:text-primary transition-colors">
                {copy.links.contact}
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
              <Link href={filmScoringPath} className="font-sans text-xs text-slate-500 hover:text-red-200 transition-colors">
                Film Scoring Prague
              </Link>
              <Link href={gameMusicPath} className="font-sans text-xs text-slate-500 hover:text-red-200 transition-colors">
                Game Music Composer Prague
              </Link>
              <Link
                href={advertisingMusicPath}
                className="font-sans text-xs text-slate-500 hover:text-red-200 transition-colors"
              >
                Advertising Music Production Prague
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="font-sans text-slate-500 text-sm">{copy.copyright}</p>
          <p className="font-sans text-slate-500 text-sm mt-2">{copy.vat}</p>
        </div>
      </div>
    </footer>
  )
}
