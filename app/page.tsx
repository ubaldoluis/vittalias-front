import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import { TestimonialSimple } from "@/components/testimonial-simple"
import { TestimonialSimple2 } from "@/components/testimonial-simple-2"
import { TestimonialSimple3 } from "@/components/testimonial-simple-3"
import { FaqSection } from "@/components/faq-section"
import { PartnerLogos } from "@/components/partner-logos"
import { ContactFormSection } from "@/components/contact-form-section"
import { HowItWorks } from "@/components/how-it-works"
import { ProductsSection } from "@/components/products-section"
import NudaPropiedadSection from '@/components/nuda-propiedad-section'; // <- 1. Importar el nuevo componente
import TrustSection from '@/components/trust-section'; // <- 1. Importar el nuevo componente

export default function Home() {
  // Sample partner logos - replace with your actual partner logos
  const partnerLogos = [
    {
      src: "http://www.vittalias.com/wp-content/uploads/2025/01/2.png",
      alt: "Logo Caser",
      url: "",
    },
    {
      src: "http://www.vittalias.com/wp-content/uploads/2025/01/11.png",
      alt: "inlegis",
      url: "",
    },
    {
      src: "http://www.vittalias.com/wp-content/uploads/2025/01/9.png",
      alt: "Vidallar",
      url: "",
    },
    {
      src: "https://www.vittalias.com/wp-content/uploads/2025/01/6.png",
      alt: "Partner 4",
      url: "",
    },
    {
      src: "https://www.vittalias.com/wp-content/uploads/2025/01/7.png",
      alt: "Partner 5",
      url: "https://partner5.com",
    },
    {
      src: "https://nudavitta.com/wp-content/uploads/2024/11/pixelcut-export-removebg-preview-e1730823722613.png",
      alt: "Partner 6",
      url: "https://partner6.com",
    },
  ]

  return (

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  ¿Te preocupa tu jubilación?
                </h1>
                <h2 className="text-2xl md:text-4xl leading-tight text-gray-900 pt-4">
                  ¿Necesitas complementar tus ingresos?
                </h2>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-full overflow-hidden">
                    {/* Reemplaza el placeholder con tu imagen real */}
                    <Image
                      src="https://us.123rf.com/450wm/fizkes/fizkes2001/fizkes200100100/137052917-disparo-en-la-cabeza-retrato-canoso-anciana-positiva-65-70-a%C3%B1os-descansando-en-el-sof%C3%A1-sonriendo.jpg" // Cambia esta ruta a donde guardes tu imagen
                      alt="Persona mayor sonriendo"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="rounded-full overflow-hidden mt-8">
                    {/* Puedes mantener esta imagen o también reemplazarla */}
                    <Image
                      src="https://st5.depositphotos.com/26089870/71314/i/450/depositphotos_713144018-stock-photo-portrait-cheerful-elderly-man-waving.jpg"
                      alt="Caregiver with client"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-4 shadow-lg">
                  <div className="text-center">
                    <div className="font-bold text-2xl">+15 años</div>
                    <div className="text-sm text-gray-600">Acompañándote</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 md:px-12 -mt-6">
          <div className="bg-[#009180] rounded-lg p-4 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-4 md:mb-0">
              <p className="text-lg font-semibold">
                Descubre cómo podemos ayudarte a vivir una jubilación más tranquila y segura.
              </p>
              <p className="text-sm mb-1">En Vittalias entendemos tus preocupaciones.</p>
            </div>
            <div className="flex gap-4">
              <a
                href="#contactForm"
                className="bg-[#00a592] hover:bg-[#009180] text-white rounded-md flex items-center gap-2 px-4 py-2 transition-colors"
              >
                Te asesoramos ahora <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="container mx-auto px-6 md:px-12 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-2xl text-gray-900 leading-relaxed text-lg">
                  Sabemos que muchas personas mayores viven con una{" "}
                  <span className="font-semibold text-[#009180]">pensión limitada</span>.
                </p>
                <p className="text-xl text-gray-800 leading-relaxed">
                  Los gastos aumentan, las ayudas no siempre alcanzan, y{" "}
                  <span className="font-semibold">dejar el hogar no es una opción</span>.
                </p>
                <p className="text-gray-900 leading-relaxed">
                  A veces los hijos quieren <span className="font-semibold">ayudar a sus padres</span>, pero no saben
                  por dónde empezar.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-gray-800 leading-relaxed ">
                  En <span className="font-bold text-[#009180]">Vittalias</span> ofrecemos{" "}
                  <span className="font-semibold">alternativas reales</span> para complementar tus ingresos, manteniendo
                  tu independencia y tu casa.
                </p>
                <p className="text-gray-800 leading-relaxed text-lg">
                  Ya sea con un <span className="font-semibold">pago único</span> o una{" "}
                  <span className="font-semibold">renta mensual</span>, siempre buscamos lo mejor para ti.
                </p>

                {/* Lista de beneficios con bullet points */}
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#009180] mr-2">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <span className="text-gray-800">
                      <span className="font-medium">Mantener el derecho a vivir en tu hogar.</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#009180] mr-2">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <span className="text-gray-800">
                      <span className="font-medium">Recibir un ingreso extra sin endeudarte.</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#009180] mr-2">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <span className="text-gray-800">
                      <span className="font-medium">Evitar decisiones apresuradas o malvender.</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#009180] mr-2">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <span className="text-gray-800">
                      <span className="font-medium">Asesoramiento claro, humano y sin compromiso.</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="https://res.cloudinary.com/dlfkgdrbs/image/upload/c_crop,w_500,h_500,g_auto/v1744193969/FP/tm9dj8c4kt4nm6ldcfcd.webp"
                alt="Caregiver with elderly person"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="container mx-auto px-6 md:px-12 py-12">
          <h2 className="text-2xl font-bold mb-8">Mi casa me da libertad gracias a Vittalias</h2>
          <TestimonialSimple />
        </section>

        {/* Products Section */}
        <ProductsSection />

        {/* How It Works Section */}
        <HowItWorks />

        {/* CTA Section (Mobile) */}
        <section className="container mx-auto px-6 md:px-12 py-6 md:hidden">
          <div className="bg-[#00a592] rounded-lg p-4 flex flex-col items-center justify-between">
            <div className="text-white mb-4">
              <p className="text-sm mb-1">En Vittalias entendemos tus preocupaciones.</p>
              <p className="text-lg font-semibold">
                Descubre cómo podemos ayudarte a vivir una jubilación más tranquila y segura.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#contactForm"
                className="bg-[#00a592] hover:bg-[#009180] text-white rounded-md flex items-center gap-2 px-4 py-2 transition-colors"
              >
                Te asesoramos ahora <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>


        {/* Trust Section */}
              {/* Aquí es donde colocas la nueva sección 
        <TrustSection /> {/* <- 2. Usar el componente */}

        {/* Services Section */}
        <section className="container mx-auto px-6 md:px-12 py-12">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">¿Por qué elegirnos?</h2>
              <p className="text-gray-800 leading-relaxed">
                En Vittalias trabajamos con dedicación y experiencia para ofrecer soluciones personalizadas. Descubre
                por qué somos la mejor opción para brindarte tranquilidad, apoyo y bienestar.
              </p>
            </div>
            <div className="order-1 md:order-2 mb-6">
              <Image
                src="https://res.cloudinary.com/dlfkgdrbs/image/upload/c_fill,h_300/v1744199210/FP/pfft2qjocgzid0060qdi.jpg"
                alt="Team of caregivers"
                width={300}
                height={600}
                className="rounded-lg object-cover ml-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Experiencia comprobada",
                description:
                  "Contamos con más de 15 años de experiencia dedicados al bienestar de las personas mayores.",
                image:
                  "https://res.cloudinary.com/dlfkgdrbs/image/upload/c_fit,h_200,w_300/v1744202127/FP/cjmakxdfhh1ljaq16v8v.webp",
              },
              {
                title: "Profesionales especializados",
                description: "Somos un equipo formado para ofrecerte el mejor servicio",
                image:
                  "https://res.cloudinary.com/dlfkgdrbs/image/upload/c_fit,h_200,w_300/v1744205491/FP/mno9fnkgxpuljnxc7r0n.webp",
              },
              {
                title: "Compromiso con la calidad de vida",
                description:
                  "Nacimos con el propósito de mejorar la calidad de vida de las personas mayores, entendiendo sus necesidades únicas.",
                image:
                  "https://res.cloudinary.com/dlfkgdrbs/image/upload/c_scale,w_300/v1744202195/FP/btylmbgbpmyym8sdc86q.webp",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden border border-gray-200">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{service.title}</h3>
                    <p className="text-xs text-gray-500">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

              {/* Aquí es donde colocas la nueva sección */}
      <NudaPropiedadSection /> {/* <- 2. Usar el componente */}


        {/* Testimonials Section */}
        <section className="container mx-auto px-6 md:px-12 py-12">
          <h2 className="text-2xl font-bold mb-8">Seguridad y tranquilidad con Vittalias</h2>
          <TestimonialSimple3 />
        </section>

        {/* Contact Form Section */}
        <section id="contactForm">
          <ContactFormSection />
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-6 md:px-12 py-12">
          <h2 className="text-2xl font-bold mb-8">Mi casa me da libertad gracias a Vittalias</h2>
          <TestimonialSimple2 />
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Partner Logos Section */}
        <PartnerLogos logos={partnerLogos} />

      </main>

  )
}
