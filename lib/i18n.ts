export const locales = ["en", "cs", "es", "de"] as const

export type SiteLocale = (typeof locales)[number]

export const defaultLocale: SiteLocale = "en"
export const additionalLocales = ["cs", "es", "de"] as const

export const localeNames: Record<SiteLocale, string> = {
  en: "English",
  cs: "Cestina",
  es: "Espanol",
  de: "Deutsch",
}

export const localeLanguageTags: Record<SiteLocale, string> = {
  en: "en-US",
  cs: "cs-CZ",
  es: "es-ES",
  de: "de-DE",
}

export const openGraphLocales: Record<SiteLocale, string> = {
  en: "en_US",
  cs: "cs_CZ",
  es: "es_ES",
  de: "de_DE",
}

export const localeCodes: Record<SiteLocale, string> = {
  en: "EN",
  cs: "CS",
  es: "ES",
  de: "DE",
}

export const isSiteLocale = (value: string): value is SiteLocale => {
  return locales.includes(value as SiteLocale)
}

const normalizePath = (path: string) => {
  if (!path || path === "/") {
    return "/"
  }

  const leadingSlashPath = path.startsWith("/") ? path : `/${path}`
  return leadingSlashPath.replace(/\/+$/, "") || "/"
}

export const toLocalizedPath = (locale: SiteLocale, path: string) => {
  const normalizedPath = normalizePath(path)

  if (locale === defaultLocale) {
    return normalizedPath
  }

  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`
}

export const stripLocaleFromPath = (pathname: string) => {
  const normalizedPath = normalizePath(pathname)
  const segments = normalizedPath.split("/").filter(Boolean)

  if (segments.length === 0) {
    return "/"
  }

  const [head, ...rest] = segments

  if (!isSiteLocale(head)) {
    return normalizedPath
  }

  return rest.length > 0 ? `/${rest.join("/")}` : "/"
}
