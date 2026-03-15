"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { defaultLocale, type SiteLocale, toLocalizedPath } from "@/lib/i18n"

const copy: Record<
  SiteLocale,
  {
    backToHome: string
    titleLead: string
    titleAccent: string
    description: string
    formNote: string
    loading: string
    submittedHint: string
    submittedButton: string
    thanks: string
    thanksBody: string
    downloadCta: string
    retryHint: string
  }
> = {
  en: {
    backToHome: "Back to Home",
    titleLead: "Free Sounds Pack for",
    titleAccent: "Film, Games & Advertising",
    description: "Get exclusive access to our premium sound collection. Fill out the form below to receive your free download.",
    formNote: "Complete the form below to unlock your free download",
    loading: "Loading...",
    submittedHint: "After submitting the form, click the button below.",
    submittedButton: "I completed the form",
    thanks: "Thank You!",
    thanksBody: "Your registration is complete. Download your free sounds pack below.",
    downloadCta: "Download Sounds Pack",
    retryHint: "If the download does not start, click the button again.",
  },
  cs: {
    backToHome: "Zpet na domovskou stranku",
    titleLead: "ZDARMA",
    titleAccent: "SOUND PACK",
    description: "Ziskejte exkluzivni pristup k nasemu premiovemu zvukovemu balicku. Vyplnte formular a stahnete si obsah zdarma.",
    formNote: "Vyplnte formular nize a odemknete bezplatne stazeni",
    loading: "Nacitani...",
    submittedHint: "Po odeslani formulare kliknete na tlacitko nize.",
    submittedButton: "Formular jsem vyplnil(a)",
    thanks: "Dekujeme!",
    thanksBody: "Registrace je hotova. Nize si stahnete svuj bezplatny zvukovy balicek.",
    downloadCta: "Stahnout sound pack",
    retryHint: "Pokud se stahovani nespusti, kliknete na tlacitko znovu.",
  },
  es: {
    backToHome: "Volver al inicio",
    titleLead: "PACK",
    titleAccent: "DE SONIDOS GRATIS",
    description: "Obten acceso exclusivo a nuestra coleccion premium. Completa el formulario para recibir tu descarga gratuita.",
    formNote: "Completa el formulario para desbloquear tu descarga",
    loading: "Cargando...",
    submittedHint: "Despues de enviar el formulario, pulsa el boton de abajo.",
    submittedButton: "Ya complete el formulario",
    thanks: "Gracias!",
    thanksBody: "Tu registro esta completo. Descarga tu pack de sonidos gratuito.",
    downloadCta: "Descargar pack de sonidos",
    retryHint: "Si la descarga no empieza, pulsa el boton otra vez.",
  },
  de: {
    backToHome: "Zur Startseite",
    titleLead: "KOSTENLOSES",
    titleAccent: "SOUND-PAKET",
    description: "Erhalten Sie exklusiven Zugang zu unserer Premium-Sound-Sammlung. Formular ausfullen und kostenlos herunterladen.",
    formNote: "Fullen Sie das Formular aus, um den Download freizuschalten",
    loading: "Wird geladen...",
    submittedHint: "Klicken Sie nach dem Absenden auf die Schaltflache unten.",
    submittedButton: "Formular abgeschlossen",
    thanks: "Vielen Dank!",
    thanksBody: "Ihre Registrierung ist abgeschlossen. Laden Sie Ihr Sound-Paket jetzt herunter.",
    downloadCta: "Sound-Paket herunterladen",
    retryHint: "Falls der Download nicht startet, klicken Sie erneut.",
  },
}

type FreeSoundsPackContentProps = {
  locale?: SiteLocale
}

export function FreeSoundsPackContent({ locale = defaultLocale }: FreeSoundsPackContentProps) {
  const texts = copy[locale]
  const homePath = toLocalizedPath(locale, "/")
  const [formCompleted, setFormCompleted] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900" lang={locale}>
      <nav className="p-6">
        <Link href={homePath} className="inline-flex items-center text-gray-300 hover:text-red-500 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span className="font-sans text-sm uppercase tracking-wide">{texts.backToHome}</span>
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif font-light text-4xl md:text-5xl text-white mb-6 chaos-glitch">
            {texts.titleLead} <span className="font-bold text-red-500 minimal-glow">{texts.titleAccent}</span>
          </h1>
          <div className="w-24 h-px bg-red-500 mx-auto mb-8 subtle-pulse" />
          <p className="font-sans text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">{texts.description}</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-sm p-8 minimal-glow">
          <div className="text-center mb-6">
            <p className="font-sans text-sm text-gray-400 uppercase tracking-wide">{texts.formNote}</p>
          </div>

          <div className="flex justify-center">
            <iframe
              title="DOC Studios Free Sounds Pack Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeuQjlSPDyyYJCsXewRWQcOVWPzAquEiG6kn72JySsEZw5TUA/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-sm"
              style={{ maxWidth: "700px" }}
            >
              {texts.loading}
            </iframe>
          </div>

          <div className="text-center mt-6">
            <p className="font-sans text-xs text-gray-500 mb-3">{texts.submittedHint}</p>
            <button
              onClick={() => setFormCompleted(true)}
              className="font-sans text-xs text-gray-400 hover:text-red-500 transition-colors uppercase tracking-wide"
            >
              {texts.submittedButton}
            </button>
          </div>
        </div>

        {formCompleted && (
          <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/50 rounded-sm p-12 minimal-glow text-center mt-8">
            <div className="mb-8">
              <div className="mx-auto mb-6 p-4 bg-red-600/10 rounded-sm w-fit border border-red-500/20">
                <Download className="h-8 w-8 text-red-500" />
              </div>
              <h2 className="font-serif font-medium text-2xl text-white mb-4">{texts.thanks}</h2>
              <p className="font-sans text-gray-300 mb-8 leading-relaxed">{texts.thanksBody}</p>
            </div>

            <a
              href="/sounds-pack/DOC-Studios-Free-Pack.zip"
              download="DOC-Studios-Free-Pack.zip"
              className="inline-flex items-center font-sans bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm transition-all duration-300 uppercase tracking-wide text-sm font-medium minimal-glow hover:shadow-lg hover:shadow-red-500/25"
            >
              <Download className="h-4 w-4 mr-2" />
              {texts.downloadCta}
            </a>

            <p className="font-sans text-xs text-gray-500 mt-6">{texts.retryHint}</p>
          </div>
        )}
      </div>
    </div>
  )
}
