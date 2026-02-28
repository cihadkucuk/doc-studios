"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash

    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
        return
      }
    }

    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
