"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Inicializamos el tema directamente en el useState
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    return savedTheme === "dark" || (!savedTheme && prefersDark)
  })

  // Efecto para aplicar el tema al montar
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDark])

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen])

  // Alternar tema
  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  // Cerrar menú al hacer click en un link
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
          scrolled ? "w-[95%] md:w-auto" : "w-[95%] md:w-auto"
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-full border border-border/50 bg-background dark:bg-background backdrop-blur-xl shadow-lg transition-all duration-700 ease-out ${
            scrolled ? "shadow-xl" : ""
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-50" />

          <div className="relative px-6 py-4 flex items-center justify-between gap-4 md:gap-8">
            <Link href="/" className="flex items-center group">
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent">
                Farmacia Willging
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="#servicios"
                className="px-4 py-2 text-sm font-medium text-primary hover:primary transition-all duration-300 rounded-full hover:bg-secondary/50"
              >
                Servicios
              </Link>
              <Link
                href="#galeria"
                className="px-4 py-2 text-sm font-medium text-primary hover:primary transition-all duration-300 rounded-full hover:bg-secondary/50"
              >
                Galería
              </Link>
              <Link
                href="#nosotros"
                className="px-4 py-2 text-sm font-medium text-primary hover:primary transition-all duration-300 rounded-full hover:bg-secondary/50"
              >
                Nosotros
              </Link>
              <Link
               href="#products"
               className="px-4 py-2 text-sm font-medium text-primary hover:primary transition-all duration-300 rounded-full hover:bg-secondary/50"
               >Ofertas
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-secondary/50 hover:bg-secondary dark:bg-primary dark:hover:bg-primary transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              {/* Hamburger Menu Button - Solo mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2.5 rounded-full bg-secondary/50 hover:bg-secondary dark:bg-primary dark:hover:bg-primary transition-all duration-300 hover:scale-110"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      menuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      menuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <nav
        className={`fixed top-24 right-6 z-40 md:hidden transition-all duration-500 ease-out ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="bg-background dark:bg-background border border-border/50 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden min-w-[250px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-50" />
          
          <div className="relative p-6 flex flex-col gap-2">
            <Link
              href="#servicios"
              onClick={closeMenu}
              className="px-6 py-3 text-base font-medium text-primary hover:text-accent transition-all duration-300 rounded-2xl hover:bg-secondary/50 transform hover:scale-105"
            >
              Servicios
            </Link>
            <Link
              href="#galeria"
              onClick={closeMenu}
              className="px-6 py-3 text-base font-medium text-primary hover:text-accent transition-all duration-300 rounded-2xl hover:bg-secondary/50 transform hover:scale-105"
            >
              Galería
            </Link>
            <Link
              href="#nosotros"
              onClick={closeMenu}
              className="px-6 py-3 text-base font-medium text-primary hover:text-accent transition-all duration-300 rounded-2xl hover:bg-secondary/50 transform hover:scale-105"
            >
              Nosotros
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}