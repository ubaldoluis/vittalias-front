import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Importar Link para el botón

interface ImageTextSectionProps {
  title?: string;
  text: React.ReactNode; // Aceptar ReactNode para formato enriquecido
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition?: 'left' | 'right';
  ctaButton?: { // Botón opcional
    text: string;
    href: string;
  };
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  title,
  text,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  imagePosition = 'left',
  ctaButton, // Añadir prop ctaButton
}) => {
  const imageOrderClass = imagePosition === 'left' ? 'md:order-1' : 'md:order-2';
  const textOrderClass = imagePosition === 'left' ? 'md:order-2' : 'md:order-1';

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* El título de la sección ahora está DENTRO de la columna de texto si no hay botón,
            o antes de las columnas si hay título principal de sección. Ajustar según diseño */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
          {/* Columna de Imagen */}
          <div className={`md:w-1/2 ${imageOrderClass}`}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          {/* Columna de Texto */}
          <div className={`md:w-1/2 ${textOrderClass} space-y-4`}>
            {title && <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>}
            <div className="text-gray-700 text-base md:text-lg space-y-4">
               {text}
            </div>
             {/* Renderizar botón si existe */}
             {ctaButton && (
              <div className="mt-6">
                <Link href={ctaButton.href} legacyBehavior>
                  <a className="inline-block bg-[#00a592] text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-[#008474] transition-colors">
                    {ctaButton.text}
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection; 