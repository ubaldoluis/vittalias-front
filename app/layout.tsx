import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Importaciones de los componentes comunes
import { ContactBar } from '@/components/contact-bar'; // Ajusta la ruta si es necesario
import { Navbar } from "@/components/navbar";       // Ajusta la ruta si es necesario (asumiendo que es tu nav principal)
import { Footer } from "@/components/footer";       // Ajusta la ruta si es necesario
import WhatsAppButton from '@/components/whatsapp-button'; // Ajusta la ruta si es necesario
import CookieManagerWrapper from '@/components/cookie-manager-wrapper'; // <- 1. Importar el wrapper
import "react-cookie-manager/style.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vittalias - Contigo",
  description: "Providing exceptional care and trusted services for elderly and vulnerable adults",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-100`}>
      {/* Header Section */}
        <header>
          <ContactBar />
          <Navbar />
        </header>

        {/* Contenido Principal de la Página */}
        {/* 'flex-grow' hace que el main ocupe el espacio disponible empujando el footer hacia abajo */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer Section */}
        <Footer />

        {/* Botón flotante */}
        <WhatsAppButton />
        <CookieManagerWrapper /> {/* <- 2. Renderizar el gestor de cookies */}

      </body>
    </html>
  )
}


import './globals.css'