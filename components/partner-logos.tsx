"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface PartnerLogosProps {
  title?: string
  logos: {
    src: string
    alt: string
    url?: string
  }[]
}

export function PartnerLogos({ title = "Empresas que colaboran con nosotros", logos }: PartnerLogosProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollInterval: NodeJS.Timeout

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
          // Reset to start when reaching the end
          carousel.scrollLeft = 0
        } else {
          // Scroll by one logo width
          carousel.scrollLeft += carousel.clientWidth / 4
        }
      }, 3000)
    }

    startAutoScroll()

    // Pause on hover or touch
    const pauseScroll = () => clearInterval(scrollInterval)
    const resumeScroll = () => {
      clearInterval(scrollInterval)
      startAutoScroll()
    }

    carousel.addEventListener("mouseenter", pauseScroll)
    carousel.addEventListener("mouseleave", resumeScroll)
    carousel.addEventListener("touchstart", pauseScroll)
    carousel.addEventListener("touchend", resumeScroll)

    return () => {
      clearInterval(scrollInterval)
      carousel.removeEventListener("mouseenter", pauseScroll)
      carousel.removeEventListener("mouseleave", resumeScroll)
      carousel.removeEventListener("touchstart", pauseScroll)
      carousel.removeEventListener("touchend", resumeScroll)
    }
  }, [])

  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8 items-center">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 md:text-right">{title}</h2>
          </div>

          <div className="md:col-span-3">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto scrollbar-hide space-x-8 pb-4"
              style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg p-4 transition-all hover:shadow-md"
                >
                  {logo.url ? (
                    <a
                      href={logo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center"
                    >
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        alt={logo.alt}
                        width={100}
                        height={60}
                        className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
                      />
                    </a>
                  ) : (
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={100}
                      height={60}
                      className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
