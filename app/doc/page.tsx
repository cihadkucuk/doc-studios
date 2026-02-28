import Link from "next/link"
import { MapPin, Music, Users } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function DocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-red-950/20">
      <Navigation />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h1 className="font-serif font-bold text-5xl md:text-7xl text-white mb-6 blood-text-glow">
                  ABOUT <span className="text-red-500">US</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-transparent mb-8" />
              </div>

              <div className="space-y-6 text-red-100 leading-relaxed">
                <p className="text-xl">
                  Born in the shadows of Prague&apos;s ancient streets,{" "}
                  <span className="text-red-500 font-semibold">DOC Studios s.r.o.</span> emerged from the collision of
                  classical tradition and modern rebellion.
                </p>

                <p className="text-lg">
                  We are artists united by a singular vision: to create music that doesn&apos;t just accompany stories. It
                  becomes the very soul of them. Our compositions bleed emotion, our arrangements breathe life into
                  silence, and our productions transform ordinary moments into extraordinary experiences.
                </p>

                <p className="text-lg">
                  From the haunting corridors of film scores to the pulsing energy of game soundtracks, from the
                  sophisticated elegance of advertisement music to the raw power of brand anthems. We forge sonic
                  landscapes that linger long after the last note fades.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2 blood-glow" />
                    <h3 className="font-serif font-bold text-white mb-1">Vinohrady / Prague 10</h3>
                    <p className="text-red-300 text-sm">Czech Republic</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-red-500 mx-auto mb-2 blood-glow" />
                    <h3 className="font-serif font-bold text-white mb-1">Artists</h3>
                    <p className="text-red-300 text-sm">Collective Chaos</p>
                  </div>
                  <div className="text-center">
                    <Music className="h-8 w-8 text-red-500 mx-auto mb-2 blood-glow" />
                    <h3 className="font-serif font-bold text-white mb-1">Multiple Genres</h3>
                    <p className="text-red-300 text-sm">Unlimited Vision</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-950/30 to-transparent border-l-4 border-red-600 pl-6 py-4">
                  <p className="text-xl italic text-red-200">
                    &quot;In chaos, we find order. In darkness, we discover light. In silence, we create symphonies that
                    echo through eternity.&quot;
                  </p>
                  <p className="text-red-400 mt-2 font-semibold">- Drive of Chaos Manifesto</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-red-950/30 to-black border border-red-600/30 rounded-lg p-12 blood-glow">
              <h2 className="font-serif font-bold text-4xl text-white mb-6 blood-text-glow">
                Ready to Create Something <span className="text-red-500">Extraordinary?</span>
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Let&apos;s collaborate and bring your vision to life through the power of chaotic creativity.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-serif font-bold px-8 py-4 text-lg blood-glow blood-pulse"
              >
                <Link href="/#contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
