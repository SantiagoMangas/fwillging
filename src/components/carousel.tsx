"use client";

import Image from 'next/image';

const logosData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

export function Carousel() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-green-50 dark:from-blue-950 dark:via-gray-800 dark:to-gray-950 border-b pb-16 lg:pb-24">
      <div className="px-4 md:px-6 lg:px-8 container mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="flex max-w-xl flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900">
              Marcas con las que trabajamos
            </h2>
          </div>

          <div className="relative w-full overflow-hidden">
            <div 
              className="flex w-max items-center"
              style={{
                animation: 'infinite-scroll 20s linear infinite',
                willChange: 'transform'
              }}
            >
              {[...logosData, ...logosData].map((logoItem, index) => {
                const uniqueKey = `logo-wrapper-${logoItem.id}-${index}`;
                return (
                  <div
                    key={uniqueKey}
                    className="w-48 flex-shrink-0 flex items-center justify-center px-4"
                  >
                    <Image 
                      src="/marcas/Dove_logo.png"
                      alt="Dove Logo"
                      width={144}
                      height={80}
                      className="w-36 h-auto object-contain"
                    />
                  </div>
                );
              })}
            </div>
            
            {/* Gradiente de máscara en los bordes */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-100 dark:from-gray-800 to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-100 dark:from-gray-800 to-transparent" />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50%));
          }
        }
      `}</style>
    </section>
  );
}