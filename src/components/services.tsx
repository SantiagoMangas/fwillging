"use client"

import { useEffect, useRef, useState } from "react"

export function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      number: "01",
      title: "Asesoramiento profesional",
      description: "Farmacéuticos especializados para resolver tus dudas y orientarte en el cuidado de tu salud.",
    },
    {
      number: "02",
      title: "Medicamentos y tratamientos",
      description: "Amplio catálogo de medicamentos con receta y venta libre, siempre con la mejor calidad.",
    },
    {
      number: "03",
      title: "Productos de bienestar",
      description: "Dermocosméticos, suplementos y productos naturales para tu cuidado integral.",
    },
    {
      number: "04",
      title: "Atención personalizada",
      description: "Servicios de control y monitoreo para el cuidado continuo de tu salud.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="flex justify-center w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/30 to-background dark:from-secondary/20 dark:to-black relative overflow-hidden"
    >

      <div className="container px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col gap-12 sm:gap-14 md:gap-16 items-center">

          <div className="flex flex-col gap-3 sm:gap-4 max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-foreground dark:text-white">
              Lo que hacemos por vos
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed px-4">
              Atención integral y cercana, porque tu salud merece lo mejor
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full max-w-6xl">
            {services.map((service, index) => (
              <div
                key={service.number}
                className={`flex flex-col gap-3 sm:gap-4 group p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-black backdrop-blur-sm border border-border/50 dark:border-gray-800/50 hover:border-primary/40 dark:hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-700 ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary bg-[length:200%_auto] bg-clip-text text-transparent group-hover:animate-gradient-shift transition-all duration-300 inline-block">
                  {service.number}
                </span>

                <h3 className="text-xl sm:text-2xl font-semibold text-foreground dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed text-pretty">
                  {service.description}
                </p>

                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary rounded-full transition-all duration-700 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}