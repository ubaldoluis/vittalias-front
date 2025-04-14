"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function TestimonialSimple() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  // Manejar el cierre del modal con la tecla Escape
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false)
      }
    }

    window.addEventListener("keydown", handleEsc)

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  // Evitar scroll cuando el modal está abierto
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isVideoOpen])

  const openVideo = () => {
    setIsVideoOpen(true)
  }

  const closeVideo = () => {
    setIsVideoOpen(false)
  }

  return (
    <>
      <div className="w-full bg-[#00a592] rounded-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Testimonial Text Block */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-white text-xl font-medium mb-6">
              "Estaba atrapada en un callejón sin salida. Con mi pensión, no tenía opciones... hasta que di con
              Vittalias. Tras años buscando una solución, su equipo me guió con humanidad y profesionalismo. Si estás en
              una situación similar, mi consejo es claro: confía en ellos. Cambiaron mi vida, y pueden cambiar la tuya."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-white">
                <Image
                  src="https://res.cloudinary.com/dlfkgdrbs/image/upload/c_scale,h_48,w_48/v1744221564/FP/hqhnfmruxdio6etohprp.webp"
                  alt="Client"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="text-white">
                <p className="font-medium">Dolores</p>
                <p className="text-sm opacity-80">85 años, Tarragona</p>
              </div>
            </div>
          </div>

          {/* Image/Video Block */}
          <div className="bg-[#009180] flex items-center justify-center p-8 md:p-0">
            <div className="relative w-full h-full min-h-[300px]">
              <Image
                src="https://www.vittalias.com/wp-content/uploads/2025/01/anycript_thumbnail_2.jpg"
                alt="Testimonial"
                fill
                className="object-cover"
              />
              {/* Video Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={openVideo}
                  className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all"
                  aria-label="Reproducir vídeo testimonial"
                >
                  <svg className="w-6 h-6 text-[#009180]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Video */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Botón de cierre */}
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Cerrar vídeo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Contenedor del iframe con proporción 16:9 */}
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/xj5FDUTQrCM?autoplay=1"
                title="Testimonial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
