"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

const desktopLinkClass = "text-white hover:text-red-500 transition-colors font-serif font-semibold"
const mobileLinkClass =
  "w-full rounded-sm border border-gray-800/80 bg-black/40 px-4 py-3 text-left font-serif text-lg text-white transition-colors hover:border-red-500/50 hover:text-red-100"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

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
    if (window.location.pathname === "/") {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
        return
      }
    }
    router.push("/#contact")
  }

  const scrollToOurCraft = () => {
    closeMenu()
    if (window.location.pathname === "/") {
      const ourCraftSection = document.getElementById("services")
      if (ourCraftSection) {
        ourCraftSection.scrollIntoView({ behavior: "smooth" })
        return
      }
    }
    router.push("/#services")
  }

  const navSurfaceClass = isScrolled || isMenuOpen ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"

  return (
    <>
      <nav className={`fixed top-0 right-0 z-50 p-4 md:p-6 transition-all duration-300 ${navSurfaceClass}`}>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className={desktopLinkClass}>
            Home
          </Link>

          <button onClick={scrollToOurCraft} className={desktopLinkClass}>
            Services
          </button>

          <Link href="/licensing" className={desktopLinkClass}>
            Licensing
          </Link>

          <Link href="/doc" className="text-red-500 hover:text-red-400 transition-colors font-serif font-semibold blood-text-glow">
            DOC
          </Link>

          <button onClick={scrollToContact} className={desktopLinkClass}>
            Contact
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-red-600/35 bg-black/70 p-2 text-red-100 transition-colors hover:border-red-500 hover:text-white md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="font-serif text-xl text-white">Menu</p>
          <button
            type="button"
            onClick={closeMenu}
            className="rounded-sm border border-red-600/35 p-2 text-red-100 transition-colors hover:border-red-500 hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/" onClick={closeMenu} className={mobileLinkClass}>
            Home
          </Link>

          <button type="button" onClick={scrollToOurCraft} className={mobileLinkClass}>
            Services
          </button>

          <Link href="/licensing" onClick={closeMenu} className={mobileLinkClass}>
            Licensing
          </Link>

          <Link
            href="/doc"
            onClick={closeMenu}
            className="w-full rounded-sm border border-red-600/45 bg-red-950/20 px-4 py-3 text-left font-serif text-lg text-red-200 transition-colors hover:border-red-500 hover:text-white"
          >
            DOC
          </Link>

          <button type="button" onClick={scrollToContact} className={mobileLinkClass}>
            Contact
          </button>
        </div>
      </aside>
    </>
  )
}
