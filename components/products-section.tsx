import Link from "next/link"
import { ArrowRight, Home, Banknote, FileText, Shield } from "lucide-react"

export function ProductsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Soluciones para tu tranquilidad</h2>
          <p className="text-xl text-[#009180] font-medium mb-4">
            Todo lo que necesitas para mejorar tu calidad de vida
          </p>
          <p className="text-gray-600 max-w-2xl">
            En Vittalias entendemos que cada persona tiene necesidades únicas. Por eso, ofrecemos diferentes
            alternativas para que puedas elegir la que mejor se adapte a tu situación y objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-[#e6f5f3] p-3 rounded-lg mr-4">
                <Home className="h-6 w-6 text-[#009180]" />
              </div>
              <h3 className="text-xl font-bold">Nuda Propiedad</h3>
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                Vende la propiedad de tu vivienda manteniendo el derecho a vivir en ella de por vida. Recibe un pago
                único que te permitirá disfrutar de mayor liquidez sin tener que mudarte.
              </p>
              <p>
                <Link
                  href="#"
                  className="inline-flex items-center text-[#009180] font-medium hover:text-[#007d6e] transition-colors"
                >
                  Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </p>
            </div>
          </div>

          {/*
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-[#e6f5f3] p-3 rounded-lg mr-4">
                <Banknote className="h-6 w-6 text-[#009180]" />
              </div>
              <h3 className="text-xl font-bold">Hipoteca Inversa</h3>
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                Obtén una renta mensual utilizando tu vivienda como garantía, sin perder la propiedad. Una solución
                ideal para complementar tu pensión y mantener tu nivel de vida.
              </p>
              <p>
                <Link
                  href="#"
                  className="inline-flex items-center text-[#009180] font-medium hover:text-[#007d6e] transition-colors"
                >
                  Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </p>
            </div>
          </div>
          */}

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-[#e6f5f3] p-3 rounded-lg mr-4">
                <FileText className="h-6 w-6 text-[#009180]" />
              </div>
              <h3 className="text-xl font-bold">Vivienda Inversa</h3>
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                Una alternativa flexible que combina las ventajas de la nuda propiedad y la hipoteca inversa. Recibe un
                pago inicial y una renta mensual mientras sigues viviendo en tu hogar.
              </p>
              <p>
                <Link
                  href="#"
                  className="inline-flex items-center text-[#009180] font-medium hover:text-[#007d6e] transition-colors"
                >
                  Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-[#e6f5f3] p-3 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-[#009180]" />
              </div>
              <h3 className="text-xl font-bold">Asesoramiento Personalizado</h3>
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                No estás solo en este proceso. Nuestro equipo de expertos te guiará paso a paso, explicándote todas las
                opciones disponibles y ayudándote a tomar la mejor decisión para tu caso.
              </p>
              <p>
                <Link
                  href="#contactForm"
                  className="inline-flex items-center text-[#009180] font-medium hover:text-[#007d6e] transition-colors"
                >
                  Solicitar asesoramiento <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
