"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Phone, MessageCircle } from "lucide-react"

export function ContactBar() {
  const [visible, setVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Solo mostrar cuando hacemos scroll hacia arriba y no estamos en la parte superior
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`w-full bg-[#009180] text-white transition-transform duration-300 fixed top-0 left-0 z-50 ${
        visible ? "transform-none" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 py-2">
        <div className="flex justify-end items-center space-x-4 text-sm flex-wrap">
          <Link
            href="https://api.whatsapp.com/send?phone=34698443653"
            className="flex items-center hover:text-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4 mr-1" />
            <span>698 44 3 653</span>
          </Link>
          <Link href="tel:+34932182654" className="flex items-center hover:text-gray-200 transition-colors">
            <Phone className="h-4 w-4 mr-1" />
            <span>93 218 26 54</span>
          </Link>
          <Link href="mailto:info@vittalias.com" className="flex items-center hover:text-gray-200 transition-colors">
            <Mail className="h-4 w-4 mr-1" />
            <span>info@vittalias.com</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
