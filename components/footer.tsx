import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import { Mail, Phone, MessageCircle } from "lucide-react"



export function Footer() {
  return (
    <footer className="bg-[#009180] py-8 border-t border-[#00a592]/20 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 mb-8">          
             <Image
                src="https://res.cloudinary.com/dlfkgdrbs/image/upload/c_scale,h_50/v1744199745/FP/hovnwrxloba39brrbmxr.webp"
                alt="Logotipo de Vittalias"
                width={254}
                height={50}
                className="rounded-lg object-cover mb-4"
              />

        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-medium text-sm mb-4 text-white">Enlaces útiles</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contacta con nuestro equipo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Únete a nuestro equipo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4 text-white">Dirección</h3>
            <address className="not-italic text-sm text-white/80 space-y-1">
              <p>Vittalias</p>
              <p>Rambla Catalunya, 98, 5º1ª, 08008, Barcelona.</p>
              <p>Barcelona</p>
              <p>08001</p>
              <p>España</p>
            </address>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4 text-white">Contacto</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="tel:+34932182654" className="flex items-center hover:text-gray-200 transition-colors">
                  <Phone className="h-4 w-4 mr-1" />
                  <span>93 218 26 54</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://api.whatsapp.com/send?phone=34698443653"
                  className="flex items-center hover:text-gray-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  <span>698 44 3 653</span>
                </Link>
              </li>
              <li>
              <Link href="mailto:info@vittalias.com" className="flex items-center hover:text-gray-200 transition-colors">
                <Mail className="h-4 w-4 mr-1" />
                <span>info@vittalias.com</span>
              </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4 text-white">Información</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-[#00a592]/20 text-sm text-white/80">
          <div>© 2025 vittalias.com</div>
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/company/vittaliasv/" className="hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://www.facebook.com/vittalias/" className="hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/vittaliasv/" className="hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  )
}
