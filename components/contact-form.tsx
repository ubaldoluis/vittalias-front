"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Opciones de texto para mostrar aleatoriamente
const textOptions = [
  {
    id: "opcion1",
    content: (
      <>
        <p className="mb-4">
          ¿Sabías que tu hogar puede ayudarte a vivir con más tranquilidad? Muchas personas mayores, o sus familias,
          buscan una forma de completar los ingresos sin tener que mudarse ni endeudarse. Hoy existen soluciones
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
        <p className="mb-4">
          Si tienes una vivienda en propiedad y tu pensión no es suficiente para cubrir tus gastos o darte los pequeños
          gustos que mereces, existen formas de obtener un ingreso extra sin dejar tu casa. Estas soluciones están
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
        <p className="mb-4">
          En Vittalias llevamos más de 15 años ayudando a personas mayores a vivir con más tranquilidad sin tener que
          renunciar a lo que más valoran: su casa. Si estás pensando en cómo mejorar tu situación económica, o ayudar a
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

export function ContactForm() {
  const [selectedOption, setSelectedOption] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    privacyPolicy: false,
    textOption: "",
  })

  // Seleccionar una opción aleatoria al cargar el componente
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * textOptions.length)
    const option = textOptions[randomIndex].id
    setSelectedOption(option)
    setFormData((prev) => ({ ...prev, textOption: option }))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí iría la lógica para enviar los datos del formulario
    alert("Formulario enviado con éxito")
  }

  return (
    <form className="bg-[#e6f5f3] p-6 md:p-8 rounded-lg shadow-sm" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="name"
          id="floating_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#009180] peer"
          placeholder=" "
          required
          value={formData.name}
          onChange={handleChange}
        />
        <label
          htmlFor="floating_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#009180] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Nombre completo
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#009180] peer"
          placeholder=" "
          required
          value={formData.email}
          onChange={handleChange}
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#009180] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Correo electrónico
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          name="phone"
          id="floating_phone"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#009180] peer"
          placeholder=" "
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <label
          htmlFor="floating_phone"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#009180] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Teléfono
        </label>
      </div>

      {/* Campo oculto para guardar la opción de texto mostrada */}
      <input type="hidden" name="textOption" value={formData.textOption} />

      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="privacy_policy"
            name="privacyPolicy"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-[#009180]"
            required
            checked={formData.privacyPolicy}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="privacy_policy" className="ms-2 text-sm font-medium text-gray-900">
          Acepto la{" "}
          <Link href="/politica-privacidad" className="text-[#009180] hover:underline">
            política de privacidad
          </Link>
        </label>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#009180] hover:bg-[#007d6e] text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Solicitar información
      </Button>
    </form>
  )
}
