"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container px-6 lg:px-8 py-32 relative z-10">
        <div className="flex flex-col items-center text-center gap-12">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-sm font-medium text-primary/80">Tu farmacia de confianza desde 1985</span>
          </div>

          <div
            className={`transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter leading-[0.9] text-balance">
              <span className="block bg-gradient-to-br from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent">
                Farmacia
              </span>
              <span className="block bg-gradient-to-br from-secondary via-primary to-secondary bg-[length:200%_auto] animate-gradient-shift-reverse bg-clip-text text-transparent">
                Willging
              </span>
            </h1>
          </div>

          <p
            className={`text-xl md:text-2xl text-gray-400 leading-relaxed text-balance max-w-2xl transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Experiencia, compromiso y cercanía al servicio de tu salud y bienestar
          </p>

          <div
            className={`mt-16 flex flex-col items-center gap-2 animate-float transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Descubre más</span>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
