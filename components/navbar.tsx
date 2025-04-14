import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="bg-white py-4 px-6 md:px-12 relative z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex">
          <Link href="/">
          <Image
                src="https://res.cloudinary.com/dlfkgdrbs/image/upload/v1744195515/FP/mclsoci3vmm4fkgl36hj.webp"
                alt="Logotipo de Vittalias"
                width={50}
                height={50}
                className="rounded-lg object-cover mb-4"
              />
          </Link>
          </div>
          <span className="font-bold text-sm">VITTALIAS</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
{/*          
        <Link href="/nuda-propiedad" className="text-sm text-gray-600 hover:text-gray-900">
            Nuda propiedad
          </Link>
*/}
          <Link href="/vivienda-inversa" className="text-sm text-gray-600 hover:text-gray-900">
            Vivienda inversa
          </Link>
          {/*<Link href="/hipoteca-inversa" className="text-sm text-gray-600 hover:text-gray-900">
            Hipoteca Inversa
          </Link>*/}
          <Link href="/renta-vitalicia" className="text-sm text-gray-600 hover:text-gray-900">
            Renta Vitalicia
          </Link>
          <Link href="/hipoteca-inversa" className="text-sm text-gray-600 hover:text-gray-900">
            Hipoteca Inversa
          </Link>
{/*          

          <Link href="/preguntas-frecuentes" className="text-sm text-gray-600 hover:text-gray-900">
            Preguntas frecuentes
          </Link>
*/}
          <Link
            href="/contacto"
            className="text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-full px-4 py-1"
          >
            Contacto
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
