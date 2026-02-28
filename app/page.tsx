import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Services } from "@/components/services"
import { LicensingPreview } from "@/components/licensing-preview"
import { Artists } from "@/components/artists"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="relative flex-1 overflow-hidden bg-[radial-gradient(120%_90%_at_50%_0%,rgba(120,0,0,0.22)_0%,rgba(2,6,23,0.9)_45%,#020202_100%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[rgba(120,0,0,0.24)] blur-3xl" />
          <div className="absolute top-[36%] -left-36 h-[30rem] w-[30rem] rounded-full bg-[rgba(120,0,0,0.16)] blur-3xl" />
          <div className="absolute -bottom-28 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[rgba(120,0,0,0.2)] blur-3xl" />
        </div>

        <div className="relative z-10">
          <Navigation />
          <Hero />
          <Services />
          <LicensingPreview />
          <Artists />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
