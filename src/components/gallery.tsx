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
      span: "row-span-2",
    },
    {
      src: "/mostrador-farmacia-limpio-minimalista.jpg",
      alt: "Mostrador",
      span: "col-span-2",
    },
    {
      src: "/productos-farmacia-organizados-estantes-blancos.jpg",
      alt: "Productos",
      span: "",
    },
    {
      src: "/consulta-farmaceutica-profesional-amable.jpg",
      alt: "Atención personalizada",
      span: "",
    },
    {
      src: "/equipo-farmacia-sonriendo-profesional.jpg",
      alt: "Nuestro equipo",
      span: "col-span-2",
    },
  ]

  return (
    <section ref={sectionRef} id="galeria" className="w-full py-24 md:py-32 bg-secondary/30 flex justify-center">
      <div className="container px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Nuestro Espacio
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Un ambiente diseñado para tu comodidad y bienestar
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} group relative overflow-hidden rounded-3xl bg-muted transition-all duration-700 ${
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
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-medium text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
