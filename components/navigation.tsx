"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import {
  defaultLocale,
  localeCodes,
  locales,
  stripLocaleFromPath,
  toLocalizedPath,
  type SiteLocale,
} from "@/lib/i18n"
import { getSiteCopy } from "@/lib/site-copy"

const desktopLinkClass = "text-white hover:text-red-500 transition-colors font-serif font-semibold"
const mobileLinkClass =
  "w-full rounded-sm border border-gray-800/80 bg-black/40 px-4 py-3 text-left font-serif text-lg text-white transition-colors hover:border-red-500/50 hover:text-red-100"

type NavigationProps = {
  locale?: SiteLocale
}

export function Navigation({ locale = defaultLocale }: NavigationProps) {
  const copy = getSiteCopy(locale).nav
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const homePath = toLocalizedPath(locale, "/")
  const licensingPath = toLocalizedPath(locale, "/licensing")
  const docPath = toLocalizedPath(locale, "/doc")
  const blogPath = toLocalizedPath(locale, "/blog")
  const pathWithoutLocale = stripLocaleFromPath(pathname)
  const languagePath = (targetLocale: SiteLocale) => toLocalizedPath(targetLocale, pathWithoutLocale)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const originalOverflow = document.body.style.overflow
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  const scrollToContact = () => {
    closeMenu()
    if (window.location.pathname === homePath) {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
        return
      }
    }
    router.push(`${homePath}#contact`)
  }

  const scrollToOurCraft = () => {
    closeMenu()
    if (window.location.pathname === homePath) {
      const ourCraftSection = document.getElementById("services")
      if (ourCraftSection) {
        ourCraftSection.scrollIntoView({ behavior: "smooth" })
        return
      }
    }
    router.push(`${homePath}#services`)
  }

  const navSurfaceClass = isScrolled || isMenuOpen ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"

  return (
    <>
      <nav className={`fixed top-0 right-0 z-50 p-4 md:p-6 transition-all duration-300 ${navSurfaceClass}`}>
        <div className="hidden items-center gap-8 md:flex">
          <Link href={homePath} className={desktopLinkClass}>
            {copy.home}
          </Link>

          <button onClick={scrollToOurCraft} className={desktopLinkClass}>
            {copy.services}
          </button>

          <Link href={licensingPath} className={desktopLinkClass}>
            {copy.licensing}
          </Link>

          <Link href={blogPath} className={desktopLinkClass}>
            {copy.blog}
          </Link>

          <Link href={docPath} className="text-red-500 hover:text-red-400 transition-colors font-serif font-semibold blood-text-glow">
            {copy.doc}
          </Link>

          <button onClick={scrollToContact} className={desktopLinkClass}>
            {copy.contact}
          </button>

          <div className="flex items-center gap-2 border-l border-red-500/30 pl-4">
            <span className="font-sans text-xs uppercase tracking-[0.18em] text-gray-300">{copy.languageLabel}</span>
            {locales.map((item) => (
              <Link
                key={item}
                href={languagePath(item)}
                className={`font-sans text-xs uppercase tracking-[0.12em] transition-colors ${
                  locale === item ? "text-red-300" : "text-gray-400 hover:text-red-200"
                }`}
                aria-current={locale === item ? "page" : undefined}
              >
                {localeCodes[item]}
              </Link>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-red-600/35 bg-black/70 p-2 text-red-100 transition-colors hover:border-red-500 hover:text-white md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? copy.closeNavigation : copy.openNavigation}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        className={`fixed top-0 right-0 z-[60] h-dvh w-[min(82vw,320px)] border-l border-red-600/35 bg-black/95 p-6 backdrop-blur-md transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0 visible pointer-events-auto" : "translate-x-full invisible pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={copy.menu}
        aria-hidden={!isMenuOpen}
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="font-serif text-xl text-white">{copy.menu}</p>
          <button
            type="button"
            onClick={closeMenu}
            className="rounded-sm border border-red-600/35 p-2 text-red-100 transition-colors hover:border-red-500 hover:text-white"
            aria-label={copy.closeMenu}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <Link href={homePath} onClick={closeMenu} className={mobileLinkClass}>
            {copy.home}
          </Link>

          <button type="button" onClick={scrollToOurCraft} className={mobileLinkClass}>
            {copy.services}
          </button>

          <Link href={licensingPath} onClick={closeMenu} className={mobileLinkClass}>
            {copy.licensing}
          </Link>

          <Link href={blogPath} onClick={closeMenu} className={mobileLinkClass}>
            {copy.blog}
          </Link>

          <Link
            href={docPath}
            onClick={closeMenu}
            className="w-full rounded-sm border border-red-600/45 bg-red-950/20 px-4 py-3 text-left font-serif text-lg text-red-200 transition-colors hover:border-red-500 hover:text-white"
          >
            {copy.doc}
          </Link>

          <button type="button" onClick={scrollToContact} className={mobileLinkClass}>
            {copy.contact}
          </button>
        </div>

        <div className="mt-8 border-t border-red-600/30 pt-5">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-gray-300">{copy.languageLabel}</p>
          <div className="flex items-center gap-2">
            {locales.map((item) => (
              <Link
                key={item}
                href={languagePath(item)}
                className={`rounded-sm border px-3 py-2 font-sans text-xs uppercase tracking-[0.12em] transition-colors ${
                  locale === item
                    ? "border-red-500/60 text-red-200"
                    : "border-gray-700 text-gray-300 hover:border-red-400/60 hover:text-red-100"
                }`}
                onClick={closeMenu}
                aria-current={locale === item ? "page" : undefined}
              >
                {localeCodes[item]}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
