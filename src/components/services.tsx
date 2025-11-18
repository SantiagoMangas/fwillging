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
      className="flex justify-center w-full pt-0 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-gradient-to-b from-secondary/30 via-background to-background dark:from-secondary/20 dark:via-black dark:to-black relative overflow-hidden"
    >
      {/* Efecto de fusión desde arriba */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-secondary/30 to-transparent dark:from-secondary/20 dark:to-transparent pointer-events-none" />
      
      {/* Efectos visuales sutiles */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-300/10 rounded-full blur-3xl" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-12 sm:gap-14 md:gap-16 items-center pt-16 sm:pt-20 md:pt-24 lg:pt-32">

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
                className={`flex flex-col gap-3 sm:gap-4 group p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/40 dark:hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 hover:-translate-y-1 hover:bg-white dark:hover:bg-gray-900 transition-all duration-700 ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-600 via-blue-400 to-blue-600 dark:from-blue-400 dark:via-blue-200 dark:to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent group-hover:animate-gradient-shift transition-all duration-300 inline-block">
                  {service.number}
                </span>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed text-pretty">
                  {service.description}
                </p>

                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 dark:from-blue-400 dark:via-blue-200 dark:to-blue-400 rounded-full transition-all duration-700 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}