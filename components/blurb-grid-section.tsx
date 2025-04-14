import React from 'react';
import Image from 'next/image';

interface Blurb {
  iconUrl: string;
  iconAlt: string;
  title: string;
  text: string;
}

interface BlurbGridSectionProps {
  title?: string;
  blurbs: Blurb[];
  columns?: 2 | 3 | 4; // Número de columnas (ej: 3 por defecto)
}

const BlurbGridSection: React.FC<BlurbGridSectionProps> = ({
  title,
  blurbs,
  columns = 3, // Por defecto 3 columnas
}) => {
  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns];

  return (
    <section className="py-12 md:py-16 bg-gray-50"> {/* Fondo ligero */}
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10 md:mb-14">
            {title}
          </h2>
        )}
        <div className={`grid grid-cols-1 ${gridColsClass} gap-8 lg:gap-10`}>
          {blurbs.map((blurb, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="mb-4">
                <Image
                  src={blurb.iconUrl}
                  alt={blurb.iconAlt}
                  width={64} // Tamaño icono ajustado (era 256, muy grande)
                  height={64}
                  className="object-contain" // Asegura que el icono no se distorsione
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{blurb.title}</h4>
              <p className="text-gray-600 text-base">{blurb.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlurbGridSection; 