    // app/quienes-somos/page.tsx
    import React from 'react';
    import Image from 'next/image';
    // Importa cualquier otro componente específico que necesites para esta página

    // Opcional: Define Metadata específica para esta página (ver punto 4)
    export const metadata = {
      title: "Quiénes Somos - Vittalias",
      description: "Conoce más sobre Vittalias, nuestra misión y valores...",
      // ... otros metadatos ...
    };

    export default function QuienesSomosPage() {
      return (
        
        <main className="container mx-auto px-4 py-12"> {/* Estructura básica */}
          <h1 className="text-3xl font-bold mb-6">Quiénes Somos</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/equipo.jpg" // Asegúrate de tener esta imagen en public/images
                alt="Equipo de Vittalias"
                width={600}
                height={400}
                className="rounded shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 space-y-4 text-lg">
              <p>
                En Vittalias, nuestra misión es proporcionar cuidado excepcional...
              </p>
              <p>
                Creemos firmemente en los valores de respeto, empatía y profesionalidad...
              </p>
              {/* Más contenido sobre la empresa */}
            </div>
          </div>
        </main>
      );
    }