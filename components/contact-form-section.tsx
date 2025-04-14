"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ContactForm } from "@/components/contact-form"

// Opciones de texto para mostrar aleatoriamente
const textOptions = [
  {
    id: "opcion1",
    content: (
      <>
        <p className="mb-4 text-xl">
          ¿Sabías que tu hogar puede ayudarte a vivir con más tranquilidad? Muchas personas mayores, o sus familias,
          buscan una forma de completar los ingresos sin tener que mudarse ni endeudarse. 
        </p>
        <p className="mb-4">
          Hoy existen soluciones
          pensadas para quienes quieren seguir disfrutando de su casa mientras obtienen un apoyo económico que marque la
          diferencia.
        </p>
        <p className="mb-4">
          Pedir información no compromete a nada. Es solo el primer paso para entender qué opciones existen, cómo
          funcionan y cuál se ajusta mejor a cada situación.
        </p>
        <p className="font-medium">Cuanto antes lo sepas, mejor podrás decidir.</p>
      </>
    ),
  },
  {
    id: "opcion2",
    content: (
      <>
        <p className="mb-4 text-xl">
          Si tienes una vivienda en propiedad y tu pensión no es suficiente para cubrir tus gastos o darte los pequeños
          gustos que mereces, existen formas de obtener un ingreso extra sin dejar tu casa.
        </p> 
        <p className="mb-4">
          Estas soluciones están
          pensadas tanto para personas mayores como para familias que quieren ayudar a sus padres a vivir con más
          tranquilidad.
        </p>
        <p className="mb-4">
          En pocos minutos, podemos explicarte cómo funcionan y qué ventajas ofrecen. Sin letra pequeña, sin presión, y
          con respuestas claras a tus dudas.
        </p>
        <p className="font-medium">Déjanos tus datos y te llamamos para ayudarte a encontrar la mejor opción.</p>
      </>
    ),
  },
  {
    id: "opcion3",
    content: (
      <>
        <p className="mb-4 text-xl">
          En Vittalias llevamos más de 15 años ayudando a personas mayores a vivir con más tranquilidad sin tener que
          renunciar a lo que más valoran: su casa.
        </p>
        <p className="mb-4">          
          Si estás pensando en cómo mejorar tu situación económica, o ayudar a
          un ser querido a hacerlo, puede que haya una solución más sencilla de lo que imaginas.
        </p>
        <p className="mb-4">
          Nuestro equipo está para escucharte y explicarte, sin compromiso, qué opciones existen y cómo podrían ayudarte
          a ti o a tu familia.
        </p>
        <p className="font-medium">Cuanto antes lo explores, antes podrás tomar una buena decisión.</p>
      </>
    ),
  },
]

interface ContactFormSectionProps {
  title?: string
  className?: string
}

export function ContactFormSection({ title = "Nuestro compromiso es tu bienestar", className = "" }: ContactFormSectionProps) {
  const [selectedTextOption, setSelectedTextOption] = useState<React.ReactNode | null>(null)

  // Seleccionar una opción aleatoria al cargar el componente
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * textOptions.length)
    setSelectedTextOption(textOptions[randomIndex].content)
  }, [])

  return (
    <section className={`py-12 bg-white ${className}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Columna de texto */}
            <div className="text-gray-700 leading-relaxed">{selectedTextOption}</div>

            {/* Columna del formulario */}
            <div className="align-middle  shadow-md shadow-green-200/50">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
