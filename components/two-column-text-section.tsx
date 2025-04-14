import React from 'react';

interface TextColumn {
    title?: string;
    content: React.ReactNode;
}

interface TwoColumnTextSectionProps {
  title?: string; // Título principal opcional
  subtitle?: string; // Subtítulo principal opcional
  columnLeft: TextColumn;
  columnRight: TextColumn;
  backgroundColor?: string; // Ejemplo: 'bg-white', 'bg-gray-100'
}

const TwoColumnTextSection: React.FC<TwoColumnTextSectionProps> = ({
  title,
  subtitle,
  columnLeft,
  columnRight,
  backgroundColor = 'bg-white', // Fondo blanco por defecto
}) => {
  return (
    <section className={`py-12 md:py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h2>
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
          </div>
        )}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Columna Izquierda */}
          <div className="md:w-1/2 space-y-3">
            {columnLeft.title && <h3 className="text-2xl font-semibold text-gray-800 mb-3">{columnLeft.title}</h3>}
            <div className="text-gray-700 text-base md:text-lg space-y-3">
                {columnLeft.content}
            </div>
          </div>
          {/* Columna Derecha */}
          <div className="md:w-1/2 space-y-3">
             {columnRight.title && <h3 className="text-2xl font-semibold text-gray-800 mb-3">{columnRight.title}</h3>}
             <div className="text-gray-700 text-base md:text-lg space-y-3">
                {columnRight.content}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnTextSection; 