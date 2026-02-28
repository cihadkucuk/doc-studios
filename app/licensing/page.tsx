import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Globe2,
  Infinity,
  ShieldCheck,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const badgeItems = [
  {
    icon: FileCheck2,
    title: "Structured Licensing",
    description: "Contracts map directly to your usage architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Claim-Free",
    description: "Delivery model designed for frictionless distribution.",
  },
  {
    icon: CheckCircle2,
    title: "Defined Scope",
    description: "Boundaries are explicit, measurable, and enforceable.",
  },
]

const scopeDetails = [
  "Media format: Film, Series, Game, Advertisement, Digital Campaign",
  "Distribution channels: Theatrical, Streaming, Broadcast, Social",
  "Synchronization rights",
  "Master usage rights",
  "Adaptation permissions (when granted)",
]

const exclusivityModels = [
  {
    title: "Full Exclusive",
    description:
      "The composition is reserved entirely for your project within the defined scope, territory, and term.",
  },
  {
    title: "Category Exclusive",
    description:
      "The track remains exclusive inside a specific market category such as Automotive, Tech, or Luxury.",
  },
  {
    title: "Non-Exclusive",
    description: "Optimized for efficiency and speed, suited for campaigns with limited exclusivity requirements.",
  },
]

const claimFreeDetails = [
  "No hidden third-party ownership",
  "Clear master control",
  "Transparent authorship structure",
  "Defined usage boundaries",
]

const termOptions = ["1 Year", "3 Years", "5 Years", "Perpetual"]
const territoryOptions = [
  "Local (Single Country)",
  "Multi-Country (Selected Regions)",
  "European Union",
  "North America",
  "EMEA",
  "Worldwide",
]

export default function LicensingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-950 to-black">
      <Navigation />

      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <section className="text-center mb-16">
            <h1 className="font-serif font-light text-5xl md:text-7xl text-white mb-6 chaos-glitch">
              CLARITY IN <span className="font-bold text-red-500 minimal-glow">EVERY RIGHT</span>
            </h1>
            <div className="w-24 h-px bg-red-500 mx-auto mb-8 subtle-pulse" />
            <p className="font-sans text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Every license is designed around concrete usage realities. You know exactly what you are authorized to do
              and where your rights apply.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-4 mb-16">
            {badgeItems.map((item) => (
              <div
                key={item.title}
                className="border border-red-500/25 bg-black/60 backdrop-blur-sm px-5 py-5 rounded-sm minimal-glow"
              >
                <div className="flex items-start gap-3">
                  <item.icon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-white text-lg">{item.title}</p>
                    <p className="font-sans text-sm text-gray-400 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-4xl text-white mb-5">Scope of Rights</h2>
                <p className="font-sans text-gray-300 leading-relaxed mb-4">
                  We define what you receive and where you can use it. Every agreement is built around usage clarity
                  from day one.
                </p>
                <p className="font-sans text-gray-400 leading-relaxed">
                  No ambiguous clauses. No undefined exploitation. Rights are explicit, production-ready, and aligned
                  with your release plan.
                </p>
              </div>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700">
                <CardHeader>
                  <CardTitle className="font-serif text-white text-2xl">Defined Permissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {scopeDetails.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <p className="font-sans text-gray-300 text-sm leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-20">
            <Card className="bg-gradient-to-br from-gray-900/80 to-black border-red-900/40">
              <CardContent className="p-8">
                <h2 className="font-serif text-4xl text-white mb-4">Term & Territory</h2>
                <p className="font-sans text-gray-300 leading-relaxed mb-8">
                  Time, geography, and control are calibrated to your project lifecycle. Whether your campaign runs six
                  months or your series streams globally for years, the agreement mirrors your distribution strategy.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-700 bg-black/60 rounded-sm p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock3 className="h-5 w-5 text-red-500" />
                      <h3 className="font-serif text-white text-xl">Term Options</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {termOptions.map((term) => (
                        <span
                          key={term}
                          className="font-sans text-xs uppercase tracking-wide border border-red-500/30 text-red-200 px-3 py-1 rounded-sm"
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border border-gray-700 bg-black/60 rounded-sm p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe2 className="h-5 w-5 text-red-500" />
                      <h3 className="font-serif text-white text-xl">Territory Options</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {territoryOptions.map((territory) => (
                        <span
                          key={territory}
                          className="font-sans text-xs uppercase tracking-wide border border-red-500/30 text-red-200 px-3 py-1 rounded-sm"
                        >
                          {territory}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="font-sans text-gray-400 text-sm mt-6">
                  Territory is aligned with actual distribution, not assumptions.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-20">
            <h2 className="font-serif text-4xl text-white mb-4">Exclusivity Models</h2>
            <p className="font-sans text-gray-300 leading-relaxed mb-8">
              Different productions require different levels of protection. Each structure is priced according to its
              strategic value.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {exclusivityModels.map((model) => (
                <Card key={model.title} className="bg-gradient-to-br from-gray-900 to-black border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="font-serif text-white text-2xl">{model.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-gray-300 text-sm leading-relaxed">{model.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="font-serif text-4xl text-white mb-4">Claim-Free Guarantee</h2>
            <p className="font-sans text-gray-300 leading-relaxed mb-8">
              Our compositions are delivered with structured agreements designed to prevent unexpected digital claims or
              distribution interruptions.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {claimFreeDetails.map((item) => (
                <div key={item} className="border border-red-500/20 bg-black/60 rounded-sm px-4 py-4">
                  <p className="font-sans text-sm text-gray-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {badgeItems.map((item) => (
                <div key={item.title} className="border border-gray-700 bg-black/70 rounded-sm px-5 py-4">
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-red-500" />
                    <p className="font-serif text-white text-lg">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="border border-red-500/40 bg-gradient-to-r from-red-950/30 to-black rounded-sm p-8 minimal-glow">
              <div className="flex items-center gap-2 mb-4">
                <Infinity className="h-5 w-5 text-red-500" />
                <h2 className="font-serif text-4xl text-white">Perpetual Campaign Offer</h2>
              </div>

              <p className="font-sans text-gray-300 leading-relaxed mb-4">
                Defined scope. Timeless usage. For selected projects, we offer a Perpetual License with Defined Scope.
              </p>
              <p className="font-sans text-gray-300 leading-relaxed mb-6">
                This model is not unlimited and not vague. It is strategically defined and offered selectively based on
                project fit.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="border border-gray-700 bg-black/50 rounded-sm p-4">
                  <p className="font-sans text-gray-100 text-sm">Long-term usage rights</p>
                </div>
                <div className="border border-gray-700 bg-black/50 rounded-sm p-4">
                  <p className="font-sans text-gray-100 text-sm">Clearly structured boundaries</p>
                </div>
                <div className="border border-gray-700 bg-black/50 rounded-sm p-4">
                  <p className="font-sans text-gray-100 text-sm">Limited, selective availability</p>
                </div>
              </div>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 font-sans bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-sm transition-all duration-300 uppercase tracking-wide text-sm font-medium"
              >
                Request Perpetual Option Availability
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <div className="border-l-2 border-red-500 pl-6 py-2">
              <p className="font-serif text-xl leading-relaxed">
                DOC Studios is a boutique cinematic composition studio built for professional release workflows.
              </p>
              <p className="font-serif text-red-300 text-xl leading-relaxed">
                Art with discipline. Emotion with precision. Clarity without compromise.
              </p>
            </div>
          </section>

          <section className="text-center border border-gray-700 bg-black/60 rounded-sm p-10">
            <h2 className="font-serif text-4xl text-white mb-4">Need a Licensing Structure for Your Project?</h2>
            <p className="font-sans text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Share your format, distribution plan, and exclusivity needs. We will define a licensing architecture that
              matches your release strategy.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 font-sans bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wide text-sm font-medium minimal-glow hover:shadow-lg hover:shadow-red-500/25"
            >
              Start Licensing Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
