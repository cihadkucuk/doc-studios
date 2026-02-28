"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Film, Gamepad2, Megaphone, Play } from "lucide-react"
import { VideoPlayerModal } from "./video-player-modal"

type WorkSample = {
  title: string
  productType: string
  theme: string
  quote: string
  thumbnail: string
  videoUrl: string
  description: string
  artistInfo: string
  icon: typeof Film
}

const workSamples: WorkSample[] = [
  {
    title: "Maria",
    productType: "Film Score Sample",
    theme: "Melancholy, Sorrow, Liberation",
    quote: "His war was for freedom; his peace was her name.",
    thumbnail: "/images/maria.jpg",
    videoUrl: "/videos/maria.mp4",
    description:
      "A melancholic orchestral composition that captures the deep sorrow of a woman left behind as her love chose liberation over their bond.",
    artistInfo: "An intimate portrait of heartbreak and sacrifice, composed with raw emotional depth.",
    icon: Film,
  },
  {
    title: "Apple Iphone XR",
    productType: "Advertisement Sample",
    theme: "Minimal, Premium, Product Focused",
    quote: "Innovation meets sonic precision.",
    thumbnail: "/images/apple-iphone-xr.jpg",
    videoUrl: "/videos/apple-iphone-xr.mp4",
    description: "Modern, sleek commercial music designed to support premium technology storytelling.",
    artistInfo: "Built for brand campaigns that require clean structure and strong product framing.",
    icon: Megaphone,
  },
  {
    title: "Doerfield",
    productType: "Game Music Sample",
    theme: "Game, Military, Honor",
    quote: "Victory is written in blood and brass.",
    thumbnail: "/images/doerfield.jpg",
    videoUrl: "/videos/doerfield.mp4",
    description: "Epic battle music combining orchestral scale with modern interactive pacing.",
    artistInfo: "Designed for AAA gaming experiences with tactical intensity and cinematic motion.",
    icon: Gamepad2,
  },
]

export function Artists() {
  const [selectedVideo, setSelectedVideo] = useState<WorkSample | null>(null)
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)

  return (
    <>
      <section id="artists" className="relative py-24 px-6 bg-transparent overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_72%_at_50%_45%,rgba(120,0,0,0.16),transparent_74%)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif font-light text-5xl md:text-6xl text-white mb-6 chaos-glitch">
              OUR <span className="font-bold text-red-500 minimal-glow">WORKS</span>
            </h2>
            <div className="w-24 h-px bg-red-500 mx-auto mb-8 subtle-pulse" />
            <p className="font-sans text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Selected cinematic and commercial productions developed for film, advertising, and interactive media.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workSamples.map((sample, index) => (
              <Card
                key={sample.title}
                className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-red-500/50 transition-all duration-300 group cursor-pointer minimal-glow h-full overflow-hidden"
                role="button"
                tabIndex={0}
                onMouseEnter={() => setHoveredVideo(index)}
                onMouseLeave={() => setHoveredVideo(null)}
                onClick={() => setSelectedVideo(sample)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setSelectedVideo(sample)
                  }
                }}
                aria-label={`Play ${sample.title} sample`}
              >
                <div className="relative h-48 overflow-hidden border-b border-gray-800">
                  <img
                    src={sample.thumbnail}
                    alt={sample.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredVideo === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="p-3 border border-red-500/40 bg-black/70 rounded-sm">
                      <Play className="h-5 w-5 text-red-500" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3">
                    <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-red-200 border border-red-500/30 bg-black/65 px-2 py-1 rounded-sm">
                      {sample.theme}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <sample.icon className="h-4 w-4 text-red-500" />
                    <CardDescription className="font-sans text-red-400 font-light text-xs tracking-wide uppercase">
                      {sample.productType}
                    </CardDescription>
                  </div>
                  <CardTitle className="font-serif font-medium text-xl text-white group-hover:text-red-100 transition-colors">
                    {sample.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="font-sans text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                    {sample.description}
                  </p>
                  <p className="font-sans text-gray-500 text-xs italic mt-4">"{sample.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <VideoPlayerModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.videoUrl}
        poster={selectedVideo?.thumbnail}
        title={selectedVideo?.title}
        description={selectedVideo?.description}
        artistInfo={selectedVideo?.artistInfo}
      />
    </>
  )
}
