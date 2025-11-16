'use client'

import { useEffect, useState, useRef } from "react"

export function Services() {
    const [visibleCards, setVisibleCards] = useState<number[]>([])
    const sectionRef = useRef<(HTMLElement)>(null);

    const services = [
        {
            number: "1",
            title: "Asesoramiento personalizado",
            description: "Nuestro equipo de farmacéuticos está siempre disponible para ofrecerte consejos y recomendaciones adaptadas a tus necesidades de salud."
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
                                setVisibleCards((prev) => [...prev, index]);
                            }, index * 150);
                        })
                    }
                })
            },
            { threshold: 0.2 }
        )
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            id="services"
            className="w-full py-24 md:py-32 bg-gradient-to-t from-background to-secondary/50 dark:to-secondary/20 relative overflow-hidden"
        >
            <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl animate-float"/>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-4 group p-8 lg:p-10 rounded-3xl border border-border/50 bg-secondary/10 backdrop-blur-sm transition-all duration-500 transform ${
                            visibleCards.includes(index)
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                    >   
                    <span className="text-5xl md:text-6xl font-bold bg-background-to-br from-primary via-accent to-primary bg-[length:200%_auto] text-transparent group-hover:animate-gradient-shift transition-all duration-300 inline-block">
                        {service.number}
                    </span>
                    <h3 className="text-2xl font-semibold text-primary">
                        {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        {service.description}
                    </p>
                    </div>
                ))}
            </div>
        </section>
    )
}