import Link from "next/link"
import { HelpCircle, CheckCircle } from "lucide-react"

export function FaqSection() {
  const faqs = [
    {
      question: "¿Cómo vende la nuda propiedad de una vivienda?",
      answer:
        "La venta de nuda propiedad se realiza ante notario, dejando constancia en el Registro de la propiedad. Para llevar a cabo esta operación, desde el blog del banco online N26 destacan tres vías diferentes: Un pago único, una renta mensual o una modalidad mixta.",
    },
    {
      question: "¿Qué es la renta vitalicia inmoviliaria y quién puede optar?",
      answer:
        "La Renta Vitalicia Inmobiliaria es un contrato dirigido a mayores de 70 años que, a cambio de ceder la propiedad de su vivienda, reciben una renta mensual de por vida conservando el derecho de uso y disfrute de la casa. Está regulada en el Código Civil (arts. 1.802-1.808) y exige:/n - Ser mayor de 70 años./n - Tener una vivienda en propiedad./n - Transmitir la nuda propiedad, pero mantener el usufructo vitalicio.",
    },
    {
      question: "¿El usufructuario puede vender la propiedad?",
      answer:
        "No, el usufructuario solo tiene el derecho de usar y disfrutar el bien, pero no puede venderlo ni hipotecarlo, ya que la propiedad pertenece al titular.",
    },
    {
      question: "¿Quién paga los impuestos y gastos del bien?",
      answer:
        "El usufructuario suele hacerse cargo de los gastos ordinarios (como mantenimiento y servicios), mientras que los impuestos y gastos extraordinarios suelen ser responsabilidad del propietario.",
    },
    {
      question: "¿Qué pasa al terminar el usufructo?",
      answer:
        "El usufructo termina por causas como la muerte del usufructuario (si es vitalicio) o el vencimiento del plazo estipulado. En ese caso, el bien regresa completamente al propietario.",
    },
    {
      question: "¿Cómo se calcula la Renta Vitalicia?",
      answer:
        "Se determina en base a la edad, la esperanza de vida, el valor de la vivienda y lo que desees dejar a tus herederos. Un equipo de expertos analiza cada caso de forma personalizada.",
    },
    {
      question: "¿Qué necesito para obtener una valoración?",
      answer:
        "Solo debes proporcionar datos como tu edad, el valor de tu vivienda y tus datos de contacto. Recibirás un cálculo sin compromiso con nuestra calculadora gratuita de renta vitalicia.",
    },
    {
      question: "¿Puedo confiar en el proceso?",
      answer:
        "Sí, economistas, asistentes sociales y expertos legales supervisan todo para garantizar transparencia y seguridad.",
    },

  ]

  // Dentro del componente FaqSection, añade esta función para procesar respuestas con listas
  const renderAnswer = (answer) => {
    if (typeof answer !== "string") {
      return answer
    }

    // Verifica si la respuesta contiene una lista (identificada por "/n -")
    if (answer.includes("/n -")) {
      const parts = answer.split("/n -")
      const introText = parts[0]
      const listItems = parts.slice(1)

      return (
        <>
          <p className="mb-4">{introText}</p>
          <ul className="list-none space-y-2 mb-2">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-[#009180] mr-2">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>{item.trim()}</span>
              </li>
            ))}
          </ul>
        </>
      )
    }

    return <p>{answer}</p>
  }

  // Split the FAQs into two columns
  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2))
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2))

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-8">Preguntas Fecuentes</h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
          <div>
            {leftColumnFaqs.map((faq, index) => (
              <div key={index} className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  <HelpCircle className="flex-shrink-0 mr-2 w-5 h-5 text-[#009180]" />
                  {faq.question}
                </h3>
                <div className="text-gray-600">{renderAnswer(faq.answer)}</div>
              </div>
            ))}
          </div>
          <div>
            {rightColumnFaqs.map((faq, index) => (
              <div key={index} className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  <HelpCircle className="flex-shrink-0 mr-2 w-5 h-5 text-[#009180]" />
                  {faq.question}
                </h3>
                <div className="text-gray-600">{renderAnswer(faq.answer)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
