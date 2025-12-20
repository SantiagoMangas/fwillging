"use client"

import { useEffect, useRef, useState } from "react"

export function Gallery() {
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

  const images = [
    {
      src: "/farmacia-moderna-interior-luz-natural.jpg",
      alt: "Interior farmacia",
      mobileSpan: "col-span-2",
      desktopSpan: "md:row-span-2",
    },
    {
      src: "/mostrador-farmacia-limpio-minimalista.jpg",
      alt: "Mostrador de atención",
      mobileSpan: "col-span-1",
      desktopSpan: "md:col-span-2",
    },
    {
      src: "/productos-farmacia-organizados-estantes-blancos.jpg",
      alt: "Productos farmacéuticos",
      mobileSpan: "col-span-1",
      desktopSpan: "md:col-span-2",
    },
    {
      src: "/consulta-farmaceutica-profesional-amable.jpg",
      alt: "Atención personalizada",
      mobileSpan: "col-span-2",
      desktopSpan: "",
    },
    {
      src: "/equipo-farmacia-sonriendo-profesional.jpg",
      alt: "Nuestro equipo profesional",
      mobileSpan: "col-span-2",
      desktopSpan: "md:col-span-2",
    },
  ]

  return (
    <section ref={sectionRef} id="galeria" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30 dark:bg-blue-950 flex justify-center">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Nuestro Espacio
          </h2>
          <p
            className={`text-base sm:text-lg text-muted-foreground max-w-2xl px-4 transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Un ambiente diseñado para tu salud, comodidad y bienestar
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[180px] lg:auto-rows-[200px] gap-3 md:gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.mobileSpan} ${image.desktopSpan} group relative overflow-hidden rounded-2xl md:rounded-3xl bg-muted transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-light text-xl md:text-lg drop-shadow-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}