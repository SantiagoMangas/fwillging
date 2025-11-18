"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/DSCN0630.jpg" 
          alt="Farmacia Willging" 
          className="w-full h-full object-cover dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-transparent dark:from-black/90 dark:via-black/80" />
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/20 dark:bg-blue-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/25 dark:bg-blue-300/35 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      {/* Efecto de fusión hacia abajo */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-secondary/50 to-secondary dark:via-secondary/30 dark:to-black pointer-events-none" />

      <div className="container px-6 lg:px-8 py-32 relative z-10">
        <div className="flex flex-col items-center text-center gap-12">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/20 backdrop-blur-sm border border-border/50 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary/80">Tu farmacia de confianza desde 1985</span>
          </div>

          <div
            className={`transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter text-balance">
              <span className="block bg-gradient-to-br from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent">
                Farmacia
              </span>
              <span className="bg-gradient-to-br from-secondary via-primary to-secondary bg-[length:200%_auto] animate-gradient-shift-reverse bg-clip-text text-transparent">
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradient-shift-reverse {
          0% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }
        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 3s ease infinite;
        }
      `}</style>
    </section>
  )
}