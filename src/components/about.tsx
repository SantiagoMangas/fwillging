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
      className="w-full flex justify-center py-16 md:py-24 lg:py-32 bg-secondary/30 dark:bg-gray-800"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          
          <div
            className={`relative h-[400px] md:h-[500px] lg:h-[550px] rounded-2xl md:rounded-3xl overflow-hidden bg-muted shadow-xl group transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="/farmacia-moderna-atencion-personal.jpg"
              alt="Farmacia Willging"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div
            className={`flex flex-col gap-6 md:gap-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance leading-tight">
              Una farmacia de{" "}
              <span className="text-blue-600 dark:text-blue-400">
                confianza
              </span>
            </h2>

            <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed">
              <p className="text-base md:text-lg">
                En Farmacia Willging llevamos años al servicio de nuestra comunidad, brindando no solo medicamentos,
                sino también cercanía y atención personalizada.
              </p>
              <p className="text-base md:text-lg">
                Creemos que la salud va más allá de la medicina: es cuidado, confianza y estar cerca cuando más lo
                necesitás.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
              <div className="flex flex-col gap-2 p-5 md:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <span className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-300 inline-block">
                  25+
                </span>
                <span className="text-sm md:text-base text-muted-foreground font-light">Años de experiencia</span>
              </div>
              <div className="flex flex-col gap-2 p-5 md:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <span className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-300 inline-block">
                  100%
                </span>
                <span className="text-sm md:text-base text-muted-foreground font-light">Compromiso con vos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}