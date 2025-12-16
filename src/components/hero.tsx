"use client";

import { useState, useEffect } from 'react';

function PillShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  color1 = "#ef4444",
  color2 = "#ffffff",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  color1?: string;
  color2?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [animationState, setAnimationState] = useState({
    opacity: 0,
    y: -150,
    rotate: rotate - 15,
    floatY: 0,
  });

  useEffect(() => {
    setMounted(true);
    
    // Detectar dark mode
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Observer para detectar cambios en dark mode
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    // Animación inicial
    const initialTimer = setTimeout(() => {
      setAnimationState(prev => ({
        ...prev,
        opacity: 1,
        y: 0,
        rotate: rotate,
      }));
    }, delay * 1000);

    // Animación de flotación
    let floatValue = 0;
    const floatInterval = setInterval(() => {
      floatValue += 0.05;
      setAnimationState(prev => ({
        ...prev,
        floatY: Math.sin(floatValue) * 15,
      }));
    }, 50);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(floatInterval);
      observer.disconnect();
    };
  }, [delay, rotate]);

  if (!mounted) return null;

  const finalColor1 = color1;
  const finalColor2 = color2;

  return (
    <div
      className={`absolute ${className}`}
      style={{
        opacity: animationState.opacity,
        transform: `translateY(${animationState.y + animationState.floatY}px) rotate(${animationState.rotate}deg)`,
        transition: 'opacity 1.2s ease-out, transform 2.4s cubic-bezier(0.23, 0.86, 0.39, 0.96)',
      }}
    >
      <div
        style={{
          width,
          height,
          position: 'relative',
        }}
      >
        {/* Pastilla con dos colores */}
        <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl transition-all duration-300">
          {/* Lado izquierdo con color1 */}
          <div
            className="absolute left-0 top-0 bottom-0 rounded-l-full"
            style={{
              width: '50%',
              background: finalColor1,
              borderTopLeftRadius: '9999px',
              borderBottomLeftRadius: '9999px',
              boxShadow: isDark 
                ? '0 10px 40px rgba(0, 0, 0, 0.5), inset 0 2px 10px rgba(255, 255, 255, 0.1)'
                : '0 10px 40px rgba(0, 0, 0, 0.2), inset 0 2px 10px rgba(255, 255, 255, 0.3)',
            }}
          />
          
          {/* Lado derecho con color2 */}
          <div
            className="absolute right-0 top-0 bottom-0 rounded-r-full"
            style={{
              width: '50%',
              background: finalColor2,
              borderTopRightRadius: '9999px',
              borderBottomRightRadius: '9999px',
              boxShadow: isDark 
                ? '0 10px 40px rgba(0, 0, 0, 0.5), inset 0 2px 10px rgba(255, 255, 255, 0.1)'
                : '0 10px 40px rgba(0, 0, 0, 0.2), inset 0 2px 10px rgba(255, 255, 255, 0.3)',
            }}
          />

          {/* Brillo superior izquierdo */}
          <div
            className="absolute top-0 left-0 h-1/3 rounded-tl-full"
            style={{
              width: '50%',
              background: `linear-gradient(180deg, ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.4)'} 0%, transparent 100%)`,
              pointerEvents: 'none',
            }}
          />
          
          {/* Brillo superior derecho */}
          <div
            className="absolute top-0 right-0 h-1/3 rounded-tr-full"
            style={{
              width: '50%',
              background: `linear-gradient(180deg, ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.4)'} 0%, transparent 100%)`,
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function HeroFarmacia() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const fadeUpStyle = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 1s ease-out ${0.5 + delay * 0.2}s, transform 1s cubic-bezier(0.25, 0.4, 0.25, 1) ${0.5 + delay * 0.2}s`,
  });

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 transition-colors duration-500">
      {/* Degradado suave de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-green-100/30 dark:from-blue-900/20 dark:via-transparent dark:to-green-900/20 transition-colors duration-500" />

      {/* Pastillas flotantes - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pastilla roja/blanca grande - Superior izquierda */}
        <PillShape
          delay={0.3}
          width={400}
          height={80}
          rotate={12}
          color1="#ef4444"
          color2="#ffffff"
          className="left-[-30%] sm:left-[-10%] md:left-[-5%] top-[15%] sm:top-[15%] md:top-[20%]"
        />

        {/* Pastilla amarilla/blanca pequeña - Superior derecha */}
        <PillShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          color1="#f59e0b"
          color2="#ffffff"
          className="right-[-10%] sm:right-[15%] md:right-[20%] top-[18%] sm:top-[10%] md:top-[15%]"
        />

        {/* Pastilla rosa/blanca - Izquierda centro */}
        <PillShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          color1="#ec4899"
          color2="#ffffff"
          className="left-[-5%] sm:left-[20%] md:left-[25%] top-[35%] sm:top-[15%] md:top-[30%]"
        />

        {/* Pastilla verde/blanca - Inferior derecha */}
        <PillShape
          delay={0.5}
          width={400}
          height={100}
          rotate={-15}
          color1="#10b981"
          color2="#ffffff"
          className="right-[-20%] sm:right-[-5%] md:right-[0%] bottom-[15%] sm:bottom-[20%] md:top-[75%]"
        />

        {/* Pastilla azul/blanca - Inferior izquierda */}
        <PillShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          color1="#3b82f6"
          color2="#ffffff"
          className="left-[-10%] sm:left-[5%] md:left-[10%] bottom-[2%] md:bottom-[10%]"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div style={fadeUpStyle(0)}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800 mb-6 sm:mb-8 md:mb-12 shadow-lg transition-colors duration-300">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-medium tracking-wide">Tu salud, nuestra prioridad</span>
            </div>
          </div>

          {/* Título */}
          <div style={fadeUpStyle(1)}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-tight">
              <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">Farmacia</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-700 to-blue-600 dark:from-green-400 dark:via-blue-500 dark:to-blue-400 font-serif italic">
                Willging
              </span>
            </h1>
          </div>

          {/* Subtítulo */}
          <div style={fadeUpStyle(2)}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-2 sm:px-4 transition-colors duration-300">
              Experiencia, compromiso y cercanía al servicio de tu salud y bienestar
            </p>
          </div>
        </div>
      </div>

      {/* Degradado inferior */}
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-white dark:from-gray-900 via-white/50 dark:via-gray-900/50 to-transparent pointer-events-none transition-colors duration-500" />
    </div>
  );
}