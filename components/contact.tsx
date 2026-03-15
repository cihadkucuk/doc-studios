"use client"

import type { ChangeEvent, FormEvent } from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail } from "lucide-react"
import { defaultLocale, type SiteLocale } from "@/lib/i18n"
import { getSiteCopy } from "@/lib/site-copy"

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  projectType: "",
  description: "",
  website: "",
}

type ContactProps = {
  locale?: SiteLocale
}

export function Contact({ locale = defaultLocale }: ContactProps) {
  const copy = getSiteCopy(locale).contact
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (submitState !== "idle") {
      setSubmitState("idle")
      setSubmitMessage("")
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setSubmitState("idle")
    setSubmitMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const responseBody = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(responseBody?.error ?? copy.genericErrorMessage)
      }

      setSubmitState("success")
      setSubmitMessage(copy.successMessage)
      setFormData(initialFormData)
    } catch (error) {
      setSubmitState("error")
      setSubmitMessage(error instanceof Error ? error.message : copy.genericErrorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6 bg-transparent overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_70%_at_50%_50%,rgba(120,0,0,0.2),transparent_76%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif font-light text-5xl md:text-6xl text-white mb-6 chaos-glitch">
            {copy.headingLead} <span className="font-bold text-red-500 minimal-glow">{copy.headingAccent}</span>
          </h2>
          <div className="w-24 h-px bg-red-500 mx-auto mb-8 subtle-pulse" />
          <p className="font-sans text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            {copy.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 minimal-glow">
            <CardHeader>
              <CardTitle className="font-serif font-bold text-2xl text-white">{copy.cardTitle}</CardTitle>
              <CardDescription className="font-sans text-gray-300">
                {copy.cardDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder={copy.placeholders.firstName}
                    required
                    className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                  />
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder={copy.placeholders.lastName}
                    required
                    className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={copy.placeholders.email}
                  type="email"
                  required
                  className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Input
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  placeholder={copy.placeholders.projectType}
                  required
                  className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Input
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder={copy.placeholders.description}
                  rows={6}
                  required
                  className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-sans uppercase tracking-wide text-sm font-medium py-3 minimal-glow hover:shadow-lg hover:shadow-red-500/25"
                >
                  {isSubmitting ? copy.submitLoading : copy.submitIdle}
                </Button>
                {submitState !== "idle" ? (
                  <p
                    className={`font-sans text-sm ${submitState === "success" ? "text-emerald-400" : "text-red-400"}`}
                    role="status"
                  >
                    {submitMessage}
                  </p>
                ) : null}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 minimal-glow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-600/20 rounded-full">
                    <MapPin className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-white text-lg">{copy.locationTitle}</h3>
                    <p className="font-sans text-gray-300">{copy.locationLabel}</p>
                  </div>
                </div>
                <p className="font-sans text-gray-400 text-sm">
                  {copy.locationDescription}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 minimal-glow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-600/20 rounded-full">
                    <Mail className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-white text-lg">{copy.emailTitle}</h3>
                    <span className="font-sans text-gray-300">info@docstudios.eu</span>
                  </div>
                </div>
                <p className="font-sans text-gray-400 text-sm">
                  {copy.emailDescription}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
