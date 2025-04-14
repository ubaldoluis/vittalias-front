import React from 'react';
import Image from 'next/image'; // Usamos next/image para optimización

const NudaPropiedadSection: React.FC = () => {
  return (
    // Sección principal con padding vertical y un fondo (ajusta bg-[#00a592] si prefieres otro)
    <section className="py-12 md:py-16 bg-[#00a592]">
      {/* Contenedor para centrar y limitar el ancho */}
      <div className="container mx-auto px-4">
        {/* Contenido centrado */}
        <div className="flex flex-col items-center">

          {/* Imagen */}
          <div className="mb-6 md:mb-8 max-w-3xl w-full"> {/* Limitamos el ancho máximo de la imagen */}
            <Image
              loading="lazy" // loading lazy es buena práctica
              width={800}    // Ancho original para aspect-ratio
              height={208}   // Alto original para aspect-ratio
              src="https://www.vittalias.com/wp-content/uploads/2025/01/Diseno-sin-titulo-1-e1737226803948.png"
              alt="Gráfico explicando la división entre nuda propiedad y usufructo"
              className="w-full h-auto object-contain" // Hacemos la imagen responsiva
            />
          </div>

          {/* Título */}
          <div className="mb-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Convierte tu casa en tranquilidad sin dejar de vivir en ella
            </h2>
          </div>

          {/* Párrafos de Texto */}
          {/* max-w-prose limita el ancho del texto para mejor legibilidad */}
          <div className="text-white max-w-prose space-y-4 text-base md:text-lg">
            <p>
                ¿Sabías que puedes obtener un ingreso importante sin endeudarte y seguir viviendo en tu casa como siempre?
            </p>
            <p>
                Con la venta de la <i>nuda propiedad</i>, mantienes el derecho a usar tu vivienda de por vida y recibes un pago que te permite complementar tu pensión y ganar tranquilidad.
            </p>
            <p>
                Es una opción segura, cada vez más común entre personas mayores de 65 años que quieren vivir mejor sin renunciar a su hogar.
            </p>
            <p>
              En <strong>Vittalias</strong> te acompañamos durante todo el proceso, y <strong>si tienes más de 65 años, no cobramos honorarios por nuestro servicio</strong>. Solo te escuchamos y te ayudamos a tomar la mejor decisión.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NudaPropiedadSection;