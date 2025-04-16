'use client';

import { useState } from 'react';
import Link from "next/link"
import Image from "next/image"
import { clsx } from 'clsx';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white py-4 px-6 md:px-12 relative z-40 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
            <Image
              src="https://res.cloudinary.com/dlfkgdrbs/image/upload/v1744195515/FP/mclsoci3vmm4fkgl36hj.webp"
              alt="Logotipo de Vittalias"
              width={40}
              height={40}
              className="rounded-lg object-cover"
            />
            <span className="font-bold text-sm">VITTALIAS</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/vivienda-inversa" className="text-sm text-gray-600 hover:text-[#00a592]">
            Vivienda inversa
          </Link>
          <Link href="/renta-vitalicia" className="text-sm text-gray-600 hover:text-[#00a592]">
            Renta Vitalicia
          </Link>
          <Link href="/hipoteca-inversa" className="text-sm text-gray-600 hover:text-[#00a592]">
            Hipoteca Inversa
          </Link>
          <Link
            href="/contacto"
            className="text-sm text-[#00a592] hover:bg-[#e6f6f4] border border-[#00a592] rounded-full px-4 py-1.5 transition-colors"
          >
            Contacto
          </Link>
        </nav>
        <button
          className="md:hidden z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <div
        className={clsx(
          "absolute top-full left-0 right-0 bg-white shadow-md md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-screen border-t border-gray-100" : "max-h-0 border-t-0"
        )}
      >
        <nav className="flex flex-col px-6 py-4 space-y-3">
          <Link href="/vivienda-inversa" className="block text-gray-700 hover:text-[#00a592]" onClick={closeMobileMenu}>
            Vivienda inversa
          </Link>
          <Link href="/renta-vitalicia" className="block text-gray-700 hover:text-[#00a592]" onClick={closeMobileMenu}>
            Renta Vitalicia
          </Link>
          <Link href="/hipoteca-inversa" className="block text-gray-700 hover:text-[#00a592]" onClick={closeMobileMenu}>
            Hipoteca Inversa
          </Link>
          <Link href="/contacto" className="block text-gray-700 hover:text-[#00a592]" onClick={closeMobileMenu}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}
