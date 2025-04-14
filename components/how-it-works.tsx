import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Home, PiggyBank } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-8 ">¿Cómo funciona?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          {/* Primer card (doble ancho) */}
          <div className="relative w-full h-auto md:col-span-2">
            <div className="bg-[#009180] rounded-xl flex justify-between flex-row flex-wrap shadow-md">
              <div className="p-5 xl:p-8 w-full md:w-1/2">
                <div className="block">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                  Cuéntanos tu situación, con calma.
                </h3>
                <p className="text-sm font-normal text-white/90 w-full mb-8 xl:w-64">
                  Te escuchamos por teléfono, sin compromiso.</p>
                <p className="text-sm font-normal text-white/90 w-full mb-8 xl:w-64">
                   Nuestro objetivo es entender bien tu caso, tus dudas y lo que necesitas.
                </p>
                <Link
                  href="#contactForm"
                  className="py-2 px-5 border border-solid border-white/30 rounded-full gap-2 text-sm text-white font-medium flex items-center justify-between transition-all duration-300 hover:bg-white/10"
                >
                  Hablemos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative hidden h-auto md:w-1/2 md:block">
                <Image
                  src="https://res.cloudinary.com/dlfkgdrbs/image/upload/v1744197540/FP/z4lvtkfx00a7rknc315n.webp"
                  alt="Asesoramiento personalizado"
                  width={300}
                  height={300}
                  className="h-full w-full rounded-r-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Segunda card */}
          <div className="relative w-full h-auto">
            <div className="bg-[#00a592] rounded-xl p-5 xl:p-8 h-full shadow-md">
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Te explicamos sin presión lo que puedes hacer.</h3>
              <p className="text-sm font-normal text-white/90 mb-8">
                Te mostraremos las alternativas disponibles para ti o tu familiar: cómo funcionan, qué ventajas tienen y qué debes tener en cuenta.
              </p>
              <Link
                href="#contactForm"
                className="py-2 px-5 border border-solid border-white/30 rounded-full gap-2 text-sm text-white font-medium flex items-center justify-between transition-all duration-300 hover:bg-white/10"
              >
                Conocer opciones
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Tercera card */}
          <div className="relative w-full h-auto">
            <div className="bg-[#007d6e] rounded-xl p-5 xl:p-8 h-full shadow-md">
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Tú eliges si quieres seguir adelante. A tu ritmo.</h3>
              <p className="text-sm font-normal text-white/90 mb-8">
                Si decides avanzar, te acompañamos paso a paso. Todo se hace con claridad, sin sorpresas y cuidando siempre tu tranquilidad.
              </p>
              <Link
                href="#contactForm"
                className="py-2 px-5 border border-solid border-white/30 rounded-full gap-2 text-sm text-white font-medium flex items-center justify-between transition-all duration-300 hover:bg-white/10"
              >
                Hablar con un asesor
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
