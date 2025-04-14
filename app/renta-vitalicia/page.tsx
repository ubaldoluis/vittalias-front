    // app/quienes-somos/page.tsx
    import React from 'react';
    import Image from 'next/image';
    // Importa cualquier otro componente específico que necesites para esta página
    import { PartnerLogos } from "@/components/partner-logos"
    import { ComparisonTable } from '@/components/comparison-table'; 
    import { ArrowRight, CheckCircle } from "lucide-react";
    import { TestimonialSimple } from "@/components/testimonial-simple"
    import { TestimonialSimple2 } from "@/components/testimonial-simple-2"
    import { TestimonialSimple3 } from "@/components/testimonial-simple-3"
    import { ContactFormSection } from "@/components/contact-form-section"
    import { ProductsSection } from "@/components/products-section"
    import { HowItWorks } from "@/components/how-it-works"
    import { FaqSection } from "@/components/faq-section"


    // Opcional: Define Metadata específica para esta página (ver punto 4)
    export const metadata = {
      title: "Renta Vitalicia - Vittalias",
      description: "¿Te preocupa llegar a fin de mes? ¿Buscas ingresos adicionales sin dejar tu hogar? Con la Renta Vitalicia Inmobiliaria de Vittalias, transformamos el valor de tu vivienda en ingresos mensuales garantizados sin que tengas que mudarte ni preocuparte por el futuro.",
      // ... otros metadatos ...
    };

    export default function RentaVitalicia() {
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
                  ¿Te preocupa llegar a fin de mes? 
                </h1>
                <h2 className="text-2xl md:text-4xl leading-tight text-gray-900 pt-4">
                  ¿Buscas ingresos adicionales sin dejar tu hogar?
                </h2>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-full overflow-hidden">
                    {/* Reemplaza el placeholder con tu imagen real */}
                    <Image
                      src="https://www.fifty-five-plus.com/wp-content/uploads/2020/03/vfvvtyct.png" // Cambia esta ruta a donde guardes tu imagen
                      alt="Persona mayor sonriendo"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="rounded-full overflow-hidden mt-8">
                    {/* Puedes mantener esta imagen o también reemplazarla */}
                    <Image
                      src="https://res.cloudinary.com/dlfkgdrbs/image/upload/c_scale,h_200,w_300/v1744664734/FP/rkg0idahniupjnrdumaj.webp"
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
                    <div className="text-sm text-gray-600">contigo</div>
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
              Descubre cómo podemos ayudarte a vivir una jubilación más tranquila con ingresos mensuales garantizados.

              </p>
              <p className="text-sm mb-1">En Vittalias entendemos tus inquietudes.</p>
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
                  Muchas personas mayores viven con una <span className="font-semibold text-[#009180]">pensión</span>{" "}
                   que no siempre alcanza para cubrir todos los gastos.
                </p>
                <p className="text-xl text-gray-800 leading-relaxed">
                  Los años pasan, pero tu hogar sigue siendo {" "}
                  <span className="font-semibold">tu refugio, lleno de recuerdos y comodidad</span>.
                </p>
                <p className="text-gray-900 leading-relaxed">
                  A veces los hijos quieren <span className="font-semibold">ayudar a sus padres</span>, pero no saben
                  por dónde empezar.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-gray-800 leading-relaxed ">
                Con la <span className="font-semibold">Renta Vitalicia Inmobiliaria</span> de <span className="font-bold text-[#009180]">Vittalias</span>, transformamos el valor de tu vivienda en ingresos mensuales garantizados sin que tengas que mudarte ni preocuparte por el futuro  ofrecemos{" "}
                </p>
                <p className="text-gray-800 leading-relaxed text-lg">
                  La renta vitalicia consiste en  <span className="font-semibold">recibir un ingreso mensual garantizado de por vida</span> {" "}
                  utilizando <span className="font-semibold">el valor de tu vivienda</span>.
                </p>

                {/* Lista de beneficios con bullet points */}
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#009180] mr-2">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <span className="text-gray-800">
                      <span className="font-medium">Recibes una renta mensual fija durante toda tu vida.</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#009180] mr-2">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <span className="text-gray-800">
                      <span className="font-medium">Sigues viviendo en tu casa como hasta ahora.</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#009180] mr-2">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <span className="text-gray-800">
                      <span className="font-medium">No generas deudas que puedan afectar a tu familia.</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#009180] mr-2">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <span className="text-gray-800">
                      <span className="font-medium">Mejoras tu calidad de vida con total tranquilidad.</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="https://res.cloudinary.com/dlfkgdrbs/image/upload/c_scale,h_333,w_500/v1744664994/FP/unwcd6zrzwssxvwfpnve.webp"
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
          <h2 className="text-2xl font-bold mb-8">Seguridad y tranquilidad con Vittalias</h2>
          <TestimonialSimple3 />
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

          <ComparisonTable />


        {/* Testimonials Section */}
        <section className="container mx-auto px-6 md:px-12 py-12">
          <h2 className="text-2xl font-bold mb-8">Mi casa me da libertad gracias a Vittalias</h2>
          <TestimonialSimple />
        </section>

        {/* Contact Form Section */}
        <section id="contactForm">
          <ContactFormSection />
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-6 md:px-12 py-12">
          <h2 className="text-2xl font-bold mb-8">¿Qué opinan de nosotros nuestros clientes?</h2>
          <TestimonialSimple2 />
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Partner Logos Section */}
        <PartnerLogos logos={partnerLogos} />


        </main>
      );
    }