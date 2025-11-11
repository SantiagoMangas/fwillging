export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-secondary/20 backdrop-blur-sm">
      <div className="container px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="flex flex-col gap-4 md:col-span-1">
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Farmacia Willging
            </span>
            <p className="text-sm text-black leading-relaxed max-w-xs">
              Cuidando tu salud y la de tu familia con cercanía y profesionalismo
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Horarios</h3>
            <div className="flex flex-col gap-3 text-sm text-black">
              <div>
                <p className="font-medium text-black">Lunes a Viernes</p>
                <p>8:00 - 20:00 hs</p>
              </div>
              <div>
                <p className="font-medium text-black">Sábados</p>
                <p>9:00 - 14:00 hs</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <div className="flex flex-col gap-2 text-sm text-black">
              <p>
                Av. Principal 1234
                <br />
                Tu Ciudad, Provincia
              </p>
              <p className="font-medium text-black">+54 9 11 1234-5678</p>
              <p className="font-medium text-black">info@farmaciawillging.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-black text-center">
            © 2025 Farmacia Willging. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
