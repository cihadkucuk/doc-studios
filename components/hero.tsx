"use client"

export function Hero() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-transparent">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px chaos-line"
              style={{
                width: `${200 + i * 100}px`,
                top: `${20 + i * 20}%`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}

          {/* Corporate grid overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-red-500/20" />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4">
            <span className="font-sans text-red-400 text-sm font-medium tracking-[0.2em] uppercase">
              Prague | Music Production
            </span>
          </div>

          <h1 className="font-serif font-light text-7xl md:text-8xl lg:text-9xl text-white mb-6 tracking-tight chaos-glitch">
            DRIVE OF
            <br />
            <span className="font-bold text-red-500 minimal-glow">CHAOS</span>
          </h1>

          <div className="w-24 h-px bg-red-500 mx-auto mb-8 subtle-pulse" />

          <p className="font-sans text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Precision-crafted soundscapes for film, advertising, and interactive media.
            <br />
            Where corporate excellence meets creative disruption.
          </p>
        </div>
      </section>
    </>
  )
}

