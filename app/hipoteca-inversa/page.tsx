import React from 'react';
import type { Metadata } from 'next';

// Importar los componentes de sección creados
import ImageTextSection from '@/components/image-text-section';
import BlurbGridSection from '@/components/blurb-grid-section';
import TwoColumnTextSection from '@/components/two-column-text-section';
import AccordionSection from '@/components/accordion-section';

// --- Simulación de Datos del CMS para Hipoteca Inversa ---
const pageData = {
  metaTitle: "Hipoteca Inversa: Qué es, Cómo Funciona y Ventajas",
  metaDescription: "Descubre cómo la hipoteca inversa te permite obtener dinero de tu casa sin venderla. Ideal para complementar tu jubilación.",
  sections: [
    // Sección 1: Qué es (Imagen Izquierda, Texto Derecha)
    {
      type: 'imageText',
      title: '¿Qué es una Hipoteca Inversa?',
      text: (
            <p>Es una forma de convertir el valor de tu casa en dinero sin tener que venderla ni mudarte. Tú sigues siendo el dueño de tu casa y puedes vivir en ella mientras recibes un ingreso mensual, un pago único o una combinación de ambos.</p>
        ),
      imageUrl: "https://www.vittalias.com/wp-content/uploads/2025/01/medium-shot-happy-old-man-outdoors-1-scaled.jpg",
      imageAlt: "Hombre mayor sonriendo al aire libre",
      imageWidth: 1280, // Usar un tamaño razonable para next/image
      imageHeight: 854,
      imagePosition: 'left',
    },
    // Sección 2: Cómo funciona (Texto Izquierda, Imagen Derecha)
    {
      type: 'imageText',
      title: '¿Cómo funciona la Hipoteca Inversa?',
      text: (
          <>
            <p><strong>Tu casa es tu garantía:</strong><br/>Pides un préstamo a un banco o entidad financiera y ellos te dan dinero basado en el valor de tu casa.<br/>Este préstamo no se paga mes a mes como una hipoteca tradicional. Solo se devuelve cuando tú fallezcas, vendas la casa o decidas mudarte.</p>
            <p><strong>Tú sigues viviendo en tu hogar:</strong><br/>No pierdes el derecho a vivir en tu casa. Es tuya mientras quieras quedarte en ella.</p>
            <p><strong>El dinero se usa como tú quieras:</strong><br/>Puedes usar el dinero para complementar tu jubilación, cubrir gastos médicos, viajar o lo que necesites.</p>
            <p><strong>¿Qué debes recordar?</strong><br/>Es una solución para obtener dinero sin vender tu casa.<br/>Sigues siendo el dueño de tu hogar.<br/>Tus herederos tienen la opción de quedarse con la casa o venderla.<br/>Solo se paga el préstamo al final, cuando ya no vivas en la casa.</p>
          </>
        ),
      imageUrl: "https://www.vittalias.com/wp-content/uploads/2025/01/medium-shot-smiley-women-nature-scaled.jpg",
      imageAlt: "Dos mujeres mayores sonriendo en la naturaleza",
      imageWidth: 1280,
      imageHeight: 854,
      imagePosition: 'right', // Imagen a la derecha
    },
     // Sección 3: Ventajas (Rejilla de Blurbs)
    {
        type: 'blurbGrid',
        title: 'Ventajas de la Hipoteca Inversa',
        blurbs: [
            { iconUrl: 'https://www.vittalias.com/wp-content/uploads/2025/01/bolsa-de-dinero-1.png', iconAlt: 'Bolsa dinero', title: 'Rentas Mensuales de por Vida', text: 'Recibe una renta mensual durante toda tu vida o el tiempo que elijas, asegurando estabilidad económica.' },
            { iconUrl: 'https://www.vittalias.com/wp-content/uploads/2025/01/ley.png', iconAlt: 'Ley', title: 'Deuda No Exigible Hasta el Fallecimiento', text: 'La deuda no será exigible hasta el fallecimiento, y los herederos podrán cancelarla o vender la propiedad.' },
            { iconUrl: 'https://www.vittalias.com/wp-content/uploads/2025/01/billete.png', iconAlt: 'Billete', title: 'Anticipo Inicial al Firmar el Contrato', text: 'Recibe un anticipo del 20% al 30% del valor de la vivienda al inicio del contrato.' },
            { iconUrl: 'https://www.vittalias.com/wp-content/uploads/2025/01/casa.png', iconAlt: 'Casa', title: 'Mantienes la Propiedad y Posibilidad de Alquilar', text: 'Sigue siendo el propietario y puedes alquilar la vivienda, generando ingresos adicionales.' },
            { iconUrl: 'https://www.vittalias.com/wp-content/uploads/2025/01/sin-dinero.png', iconAlt: 'Sin dinero', title: 'Sin Costos Iniciales', text: 'No hay costos iniciales, ya que los gastos se descuentan directamente del crédito hipotecario.' },
            { iconUrl: 'https://www.vittalias.com/wp-content/uploads/2025/01/mantenimiento-de-libros.png', iconAlt: 'Libro', title: 'Ventajas Fiscales', text: 'Los pagos periódicos no están sujetos al IRPF, lo que te permite disponer de más dinero.' }
        ],
        columns: 3 // 3 columnas para las ventajas
    },
     // Sección 4: Tipos de Hipoteca Inversa (Dos Columnas Texto)
    {
        type: 'twoColumnText',
        title: 'Tipos de Hipoteca Inversa',
        subtitle: 'Modalidades Flexibles para Adaptarse a tus Necesidades Financieras',
        columnLeft: {
            title: 'Hipoteca Inversa Vitalicia',
            content: (
                 <p>Esta modalidad garantiza una <strong>renta mensual durante toda la vida del contratante, sin importar cuánto tiempo viva.</strong> Al contratarla, se incluye un seguro de rentas vitalicias diferidas, el cual se activa cuando el crédito inicial se ha agotado. De esta forma, se asegura la continuidad de los pagos, brindando tranquilidad y estabilidad económica de por vida.<br/>Es una opción ideal para quienes buscan una solución financiera a largo plazo que no implique preocuparse por el agotamiento de los recursos en sus años de jubilación.</p>
            )
        },
        columnRight: {
            title: 'Hipoteca Inversa con Anticipo',
            content: (
                <p>Esta variante permite recibir, además de las rentas mensuales periódicas, una <strong>cantidad inicial al momento de la contratación</strong>. Este anticipo, que puede oscilar <strong>entre el 20 % y el 30 % del valor de la vivienda</strong>, es especialmente útil para cubrir gastos inmediatos o realizar inversiones puntuales. Al mismo tiempo, se mantiene el beneficio de percibir ingresos regulares mensuales que ayudan a complementar la pensión o afrontar los gastos cotidianos.</p>
            )
        },
        backgroundColor: 'bg-gray-100' // Fondo diferente para esta sección
    },
     // Sección 5: Cómo solicitar (Texto + Botón Izquierda, Imagen Derecha)
    {
      type: 'imageText',
      title: '¿Cómo solicitar una Hipoteca Inversa?',
      text: (
          <>
            <p>Solicitar una hipoteca inversa es un proceso sencillo:</p>
            <ol className="list-decimal list-inside space-y-1 my-3">
                <li><strong>Explora opciones:</strong> Busca entidades financieras que ofrezcan este producto en tu región. Muchas de ellas disponen de simuladores online para calcular tu renta potencial.</li>
                <li><strong>Consulta la viabilidad:</strong> Asegúrate de que tu vivienda cumple con los requisitos de valoración y antigüedad.</li>
                <li><strong>Reúne la documentación:</strong> Necesitarás los títulos de propiedad, identificación y detalles de la vivienda.</li>
                <li><strong>Asesoramiento profesional:</strong> Considera buscar apoyo de asesores financieros o contactar directamente con entidades especializadas.</li>
            </ol>
            <p><strong>Nota:</strong> Si bien puede solicitarse a partir de los 65 años, se recomienda hacerlo después de los 70 para maximizar el importe de la renta.</p>
          </>
        ),
      imageUrl: "https://www.vittalias.com/wp-content/uploads/2025/01/full-shot-friends-chatting-scaled.jpg",
      imageAlt: "Grupo de amigos mayores charlando",
      imageWidth: 854, // Ajustar tamaño para layout vertical
      imageHeight: 1280,
      imagePosition: 'right',
      ctaButton: { // Añadir botón
        text: 'Solicitar Información', // Texto más descriptivo
        href: '/contacto' // Enlace a la página de contacto
      }
    },
    // Sección 6: Preguntas Frecuentes (Acordeón)
    {
        type: 'accordion',
        title: 'Preguntas Frecuentes',
        items: [
            { title: '¿Qué diferencia hay entre una hipoteca inversa y una renta vitalicia?', content: <p>La hipoteca inversa permite mantener la propiedad del inmueble, mientras que la renta vitalicia implica transferir la titularidad desde el inicio.</p> },
            { title: '¿Cómo se calcula la renta?', content: <p>Se basa en el valor del inmueble, la edad y el sexo del solicitante. A mayor edad y mayor valor de la vivienda, mayor será la renta.</p> },
            { title: '¿Qué pasa si ya no vivo en la vivienda?', content: <><p>El préstamo se paga con la venta de la casa:</p><p>Cuando ya no vivas en la casa (por fallecimiento o mudanza), se vende el inmueble para pagar el préstamo.<br/>Si la casa vale más de lo que se debe, el dinero sobrante va para tus herederos.</p><p>Tus herederos pueden quedarse con la casa:</p><p>Si quieren conservarla, pueden pagar el préstamo utilizando sus propios fondos o refinanciándolo.</p></> },
            { title: '¿Puedo ampliar los beneficios?', content: <p>Sí, complementando la hipoteca inversa con un seguro de renta vitalicia diferida.</p> },
            { title: '¿Qué debo recordar?', content: <p>Es una solución para obtener dinero sin vender tu casa.<br/>Sigues siendo el dueño de tu hogar.<br/>Tus herederos tienen la opción de quedarse con la casa o venderla.<br/>Solo se paga el préstamo al final, cuando ya no vivas en la casa.</p> }
        ]
    }
  ]
};
// --- Fin Simulación ---


// Metadata de la página
export const metadata: Metadata = {
  title: pageData.metaTitle, // Usar título del objeto de datos
  description: pageData.metaDescription,
};

// Componente de la Página Hipoteca Inversa
export default function HipotecaInversaPage() {
  // En un caso real, obtendrías pageData de una función async que llama al CMS
  // const pageData = await getPageDataFromCMS('hipoteca-inversa');

  return (
    <main> {/* Layout global (Navbar, Footer...) viene de app/layout.tsx */}
      {/* Renderizar secciones dinámicamente */}
      {pageData.sections.map((section, index) => {
        switch (section.type) {
          case 'imageText':
            // Asegurarse de que las props opcionales se pasan correctamente
            const { ctaButton, title, ...restImageText } = section;
            return <ImageTextSection key={index} {...restImageText} title={title} ctaButton={ctaButton as any} />; // Añadir tipo si Typescript se queja
          case 'blurbGrid':
            const { blurbs, columns, ...restBlurb } = section;
            return <BlurbGridSection key={index} {...restBlurb} blurbs={blurbs as any[]} columns={columns as any} />;
          case 'twoColumnText':
             const { columnLeft, columnRight, backgroundColor, ...restTwoCol } = section;
             return <TwoColumnTextSection key={index} {...restTwoCol} columnLeft={columnLeft as any} columnRight={columnRight as any} backgroundColor={backgroundColor} />;
          case 'accordion':
            const { items, ...restAccordion } = section;
            return <AccordionSection key={index} {...restAccordion} items={items as any[]} />;
          default:
            console.warn(`Tipo de sección desconocido: ${section.type}`);
            return null; // O renderizar un componente placeholder/error
        }
      })}
    </main>
  );
}