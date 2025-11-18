"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="w-full flex justify-center py-24 md:py-32 bg-gradient-to-b from-white to-secondary/20 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />

      <div className="container px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden bg-muted shadow-2xl group transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="/farmacia-moderna-atencion-personal.jpg"
              alt="Farmacia Willging"
              className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          <div
            className={`flex flex-col gap-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Una farmacia de{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent">
                confianza
              </span>
            </h2>

            <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed">
              <p className="text-lg md:text-xl text-pretty">
                En Farmacia Willging llevamos años al servicio de nuestra comunidad, brindando no solo medicamentos,
                sino también cercanía y atención personalizada.
              </p>
              <p className="text-lg md:text-xl text-pretty">
                Creemos que la salud va más allá de la medicina: es cuidado, confianza y estar cerca cuando más lo
                necesitás.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex flex-col gap-2 p-6 lg:p-8 rounded-3xl bg-white backdrop-blur-sm border border-gray-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 inline-block origin-left">
                  25+
                </span>
                <span className="text-sm text-muted-foreground font-medium">Años de experiencia</span>
              </div>
              <div className="flex flex-col gap-2 p-6 lg:p-8 rounded-3xl bg-white backdrop-blur-sm border border-gray-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 inline-block origin-left">
                  100%
                </span>
                <span className="text-sm text-muted-foreground font-medium">Compromiso con vos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
