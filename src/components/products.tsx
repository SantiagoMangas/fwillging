'use client'

import { useState } from 'react'
import { ShoppingBag, Percent } from 'lucide-react'

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
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section id="products" className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 transition-all duration-500">
            <Percent className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Ofertas Especiales
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white text-balance">
            Productos en{' '}
            <span className="text-emerald-600 dark:text-emerald-400">Descuento</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-pretty">
            Aprovechá nuestras ofertas mensuales en productos seleccionados
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Discount Badge */}
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-xl shadow-emerald-500/30 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <span className="text-2xl font-bold leading-none">-{product.discount}%</span>
                </div>
              </div>

              {/* Product Card */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20 hover:-translate-y-2">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-gray-900">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-balance">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-pretty">
                    {product.description}
                  </p>

                  {/* Prices */}
                  <div className="flex items-end gap-3 pt-2">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 dark:text-gray-500 line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                        ${product.discountPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-4 py-3 px-6 bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30">
                    <ShoppingBag className="w-5 h-5" />
                    Consultar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            ¿Buscás algo en particular?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-1"
          >
            Contactanos para más ofertas
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
