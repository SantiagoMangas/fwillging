'use client'

const BRANDS = [
  { name: 'Bayer', logo: '/bayer-logo-farmaceutico.jpg' },
  { name: 'Pfizer', logo: '/pfizer-logo-farmaceutico.jpg' },
  { name: 'Roemmers', logo: '/roemmers-logo-farmaceutico.jpg' },
  { name: 'Genomma Lab', logo: '/genomma-lab-logo.jpg' },
  { name: 'La Roche-Posay', logo: '/la-roche-posay-logo.jpg' },
  { name: 'Vichy', logo: '/vichy-logo-cosmetico.jpg' },
  { name: 'Eucerin', logo: '/eucerin-logo.jpg' },
  { name: 'Neutrogena', logo: '/neutrogena-logo.jpg' },
]

export function Carousel() {
  return (
    <section className="py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-background to-secondary/20 dark:from-gray-950 dark:to-secondary/10 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 dark:bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 dark:bg-accent/3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-3 sm:mb-4">
            Marcas de Confianza
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Trabajamos con las principales marcas farmacéuticas y de cuidado personal
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays - más sutiles */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background dark:from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background dark:from-gray-950 to-transparent z-10 pointer-events-none" />
          
          {/* Carousel container */}
          <div className="flex gap-8 sm:gap-12 md:gap-16">
            {/* First set */}
            <div className="flex gap-8 sm:gap-12 md:gap-16 animate-scroll-smooth">
              {BRANDS.map((brand, index) => (
                <div
                  key={`brand-1-${index}`}
                  className="flex-shrink-0 w-32 sm:w-40 md:w-48 h-20 sm:h-24 flex items-center justify-center"
                >
                  <div className="relative w-full h-full flex items-center justify-center group">
                    <div className="absolute inset-0 bg-white dark:bg-gray-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      className="relative max-w-full max-h-full object-contain filter grayscale opacity-50 dark:opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second set - exact duplicate for seamless loop */}
            <div className="flex gap-8 sm:gap-12 md:gap-16 animate-scroll-smooth" aria-hidden="true">
              {BRANDS.map((brand, index) => (
                <div
                  key={`brand-2-${index}`}
                  className="flex-shrink-0 w-32 sm:w-40 md:w-48 h-20 sm:h-24 flex items-center justify-center"
                >
                  <div className="relative w-full h-full flex items-center justify-center group">
                    <div className="absolute inset-0 bg-white dark:bg-gray-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      className="relative max-w-full max-h-full object-contain filter grayscale opacity-50 dark:opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Third set - for extra smoothness */}
            <div className="flex gap-8 sm:gap-12 md:gap-16 animate-scroll-smooth" aria-hidden="true">
              {BRANDS.map((brand, index) => (
                <div
                  key={`brand-3-${index}`}
                  className="flex-shrink-0 w-32 sm:w-40 md:w-48 h-20 sm:h-24 flex items-center justify-center"
                >
                  <div className="relative w-full h-full flex items-center justify-center group">
                    <div className="absolute inset-0 bg-white dark:bg-gray-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      className="relative max-w-full max-h-full object-contain filter grayscale opacity-50 dark:opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional stats or additional info */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500 font-medium">
            +50 marcas disponibles en farmacia
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-smooth {
          animation: scroll-smooth 30s linear infinite;
        }

        /* Pause on hover - optional */
        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}