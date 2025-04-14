// src/components/comparison-table.tsx

import type React from "react";

// Define los datos de la tabla para facilitar la gestión
const tableData = {
  headers: ["Renta Vitalicia", "Hipoteca Inversa", "Venta tradicional"],
  features: [
    {
      name: "Ingresos",
      values: ["Renta mensual garantizada de por vida", "Préstamo limitado en el tiempo", "Pago único"],
      icons: ["info", "info", "info"] // Tipo de icono para cada valor (info, check, cross, warning)
    },
    {
      name: "¿Sigues en tu casa?",
      values: ["Sí, toda la vida", "Sí, temporalmente", "No, debes mudarte"],
      icons: ["check", "check", "cross"]
    },
    {
      name: "Genera deuda",
      values: ["No", "Sí, con intereses", "No"],
      icons: ["cross", "check", "cross"]
    },
    {
      name: "Impacto fiscal",
      values: ["Favorable, parte exenta", "Complejo", "Alto impacto"],
      icons: ["check", "warning", "warning_heavy"] // Usamos warning_heavy para 'Alto'
    },
    {
      name: "Gestión de gastos",
      values: ["Simplificados", "Se mantienen", "Eliminados"],
      icons: ["check", "info", "check"] // 'Se mantienen' podría ser 'info' o 'warning' según el contexto
    },
    {
      name: "Impacto en herencia",
      values: ["Opciones flexibles", "Deuda acumulada", "Sin vivienda"],
      icons: ["info", "warning", "warning_heavy"]
    },
  ],
  highlightedColumnIndex: 0, // Índice de la columna a destacar (0 = Renta Vitalicia)
  ctaButtons: [
    { text: "Saber Más", link: "#" }, // Puedes poner enlaces reales aquí
    { text: "Consultar", link: "#" },
    { text: "Ver Detalles", link: "#" },
  ],
};

// Componente para renderizar los iconos SVG
const FeatureIcon: React.FC<{ type: string; className?: string }> = ({ type, className = "" }) => {
  switch (type) {
    case "check":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`h-5 w-5 flex-shrink-0 mt-0.5 ${className}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      );
    case "cross":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`h-5 w-5 flex-shrink-0 mt-0.5 ${className}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    case "warning":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`h-5 w-5 flex-shrink-0 mt-0.5 ${className}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      );
     case "warning_heavy": // Icono rojo para impacto alto/negativo
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`h-5 w-5 flex-shrink-0 mt-0.5 ${className}`}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      );
    case "info":
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`h-5 w-5 flex-shrink-0 mt-0.5 ${className}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
       </svg>
      );
  }
};

// Componente Principal de la Tabla Comparativa
export function ComparisonTable() {
  const accentColor = "#009180"; // Color principal
  const accentColorDark = "#00796B"; // Variante oscura para texto sobre blanco
  const accentColorLight = "#A0D6CF"; // Variante clara para etiquetas en columna destacada

  return (
    // Contenedor opcional para centrar y añadir padding si es necesario en la página
    // Puedes quitar este div si el layout padre ya lo maneja
    <section className="bg-white py-12 md:py-16">
    <div className="container mx-auto px-6 md:px-12">
      <h2 className="text-3xl font-bold mb-8">¿Es mejor la Renta Vitalicia que la Hipoteca Inversa?</h2>
    <div className="container mx-auto px-4 py-10 md:py-16">
      {/* Grid para las columnas */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {tableData.headers.map((header, colIndex) => {
          const isHighlighted = colIndex === tableData.highlightedColumnIndex;

          // Clases base para todas las columnas
          let columnClasses = "bg-white rounded-xl shadow-lg p-6 flex flex-col gap-y-6 transition duration-300 ease-in-out hover:shadow-2xl h-full"; // h-full para igualar altura

          // Clases específicas para la columna destacada
          if (isHighlighted) {
            columnClasses = `relative bg-[${accentColor}] text-white rounded-xl shadow-2xl border-2 border-[${accentColor}] md:-mt-4 z-10 p-6 flex flex-col gap-y-6 transition duration-300 ease-in-out h-full`; // Añadimos -mt-4 para que sobresalga en desktop
          }

          return (
            <div key={header} className={columnClasses}>
              {/* Etiqueta "Recomendado" para la columna destacada */}
              {isHighlighted && (
                <div className="absolute top-0 right-0 mr-4 -mt-3">
                  <span className="bg-yellow-400 text-gray-900 text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">
                    Recomendado
                  </span>
                </div>
              )}

              {/* Parte Superior (Icono y Título) */}
              <div className="upper-part flex flex-col gap-y-4">
                <div className={`circle h-10 w-10 rounded-full flex items-center justify-center ${
                    isHighlighted
                      ? 'bg-gradient-to-r from-white/30 to-white/10'
                      : 'bg-gradient-to-r from-gray-500 to-gray-200'
                  }`}
                >
                  <div className={`h-4 w-4 rounded-full ${isHighlighted ? 'bg-white' : 'bg-white'}`}></div>
                </div>
                <div className="account-and-description">
                  <h3 className={`text-xl font-semibold ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                    {header}
                  </h3>
                  {/* Podrías añadir una descripción corta aquí si la tuvieras */}
                  {/* <p className={`text-sm ${isHighlighted ? `text-[${accentColorLight}]` : 'text-gray-500'}`}>Descripción corta...</p> */}
                </div>
              </div>

              {/* Características */}
              <div className="account-features flex flex-col gap-y-5"> {/* Aumentado gap */}
                {tableData.features.map((feature) => {
                  const value = feature.values[colIndex];
                  const iconType = feature.icons[colIndex];

                  // Define colores de icono basados en el tipo y si la columna está destacada
                  let iconColorClass = "";
                  if (isHighlighted) {
                    switch (iconType) {
                      case "check": iconColorClass = "text-green-300"; break;
                      case "cross": iconColorClass = "text-red-300"; break;
                      case "warning": iconColorClass = "text-yellow-300"; break;
                      case "warning_heavy": iconColorClass = "text-red-300"; break; // Mismo que cross destacado
                      case "info":
                      default: iconColorClass = "text-white"; break;
                    }
                  } else {
                     switch (iconType) {
                      case "check": iconColorClass = "text-green-600"; break;
                      case "cross": iconColorClass = "text-red-600"; break;
                      case "warning": iconColorClass = "text-orange-500"; break; // Naranja para advertencia normal
                      case "warning_heavy": iconColorClass = "text-red-600"; break; // Rojo para advertencia fuerte
                      case "info":
                      default: iconColorClass = "text-gray-500"; break;
                    }
                  }


                  return (
                    <div key={feature.name}>
                      <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${
                          isHighlighted ? `text-[${accentColorLight}]/80` : 'text-gray-500'
                        }`}
                      >
                        {feature.name}
                      </p>
                      <div className="feature flex items-start gap-x-3">
                        <FeatureIcon type={iconType} className={iconColorClass} />
                        <p className={`text-sm ${isHighlighted ? 'text-white' : 'text-gray-800'}`}>
                          {value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Botón CTA (Call To Action) */}
              {/*
              <div className="mt-auto pt-4">  Empuja el botón hacia abajo 
                <a // Usamos <a> si tienes links, o <button> si son acciones
                  href={tableData.ctaButtons[colIndex].link}
                  className={`cta-button block py-2.5 px-4 rounded-md text-center font-semibold transition duration-200 ease-in-out w-full ${
                    isHighlighted
                      ? `bg-white text-[${accentColorDark}] hover:bg-gray-100 font-bold`
                      : `border-2 border-[${accentColor}] text-[${accentColor}] hover:bg-[${accentColor}] hover:text-white`
                  }`}
                >
                  {tableData.ctaButtons[colIndex].text}
                </a>
              </div>
              */}
            </div>
          );
        })}
      </div>
    </div>
    <h3 className="text-3xl font-bold mb-8">¿Por qué Vittalias recomienda la Renta Vitalicia?</h3>
    <p className="text-gray-900 text-md">
      Después de más de 15 años asesorando a personas mayores, hemos comprobado que la Renta Vitalicia ofrece <strong>la combinación perfecta de seguridad, tranquilidad y beneficios económicos</strong>. 
      <br />
      A diferencia de la Hipoteca Inversa, que funciona como un préstamo con todas sus complicaciones, la Renta Vitalicia es una solución clara, directa y sin sorpresas desagradables.
    </p>
    <p className="text-gray-900 text-md">
      Nuestros asesores están disponibles para explicarte en detalle cómo la Renta Vitalicia puede adaptarse específicamente a tu situación y necesidades particulares.
    </p>
    </div>
    </section>
  );
}