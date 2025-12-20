'use client'

import { useState, useEffect, useRef } from 'react'
import { Instagram } from 'lucide-react'

const PRODUCTS = [
  {
    id: 1,
    name: 'Protector Solar SPF 50+',
    description: 'Protección avanzada para toda la familia',
    originalPrice: 15990,
    discountPrice: 11990,
    discount: 25,
    image: '/protector-solar-minimalista-fondo-blanco.jpg'
  },
  {
    id: 2,
    name: 'Vitamina C + Zinc',
    description: 'Refuerza tu sistema inmunológico',
    originalPrice: 8990,
    discountPrice: 6490,
    discount: 28,
    image: '/vitaminas-modernas-fondo-blanco.jpg'
  },
  {
    id: 3,
    name: 'Crema Hidratante Facial',
    description: 'Hidratación profunda 24 horas',
    originalPrice: 12990,
    discountPrice: 8990,
    discount: 31,
    image: '/crema-facial-elegante-fondo-blanco.jpg'
  },
  {
    id: 4,
    name: 'Omega 3 Premium',
    description: 'Salud cardiovascular y cerebral',
    originalPrice: 18990,
    discountPrice: 13990,
    discount: 26,
    image: '/suplemento-omega-3-moderno-fondo-blanco.jpg'
  }
]

export function Products() {
  const [visibleProducts, setVisibleProducts] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            PRODUCTS.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProducts((prev) => [...prev, index])
              }, index * 100)
            })
          }
        })
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
      id="products" 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-t from-secondary/30 via-white to-green-50 dark:from-blue-950 dark:via-gray-800 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
            Productos destacados 
          </h2>
          
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-light">
            Selección especial con los mejores precios del mes para vos!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={`group transition-all duration-500 ${
                visibleProducts.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300">
                
                <div className="relative aspect-square bg-gray-50 dark:bg-gray-800 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute top-3 right-3">
                    <div className="bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      -{product.discount}%
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white leading-snug">
                      {product.name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-xs text-gray-400 line-through font-light">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400">
                      ${product.discountPrice.toLocaleString()}
                    </span>
                  </div>

                  <button className="w-full mt-3 py-2.5 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium transition-colors duration-200 active:bg-blue-100 dark:active:bg-blue-900 flex items-center justify-center gap-2">
                    <Instagram className="w-4 h-4" />
                    Consultar disponibilidad
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}