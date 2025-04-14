'use client'; // Marcar como Componente de Cliente

import React, { useEffect } from 'react';
// Asumiendo que la librería exporta un componente o función principal
// REVISA LA DOCUMENTACIÓN de 'react-cookie-manager' para ver qué exporta y cómo se usa.
// Lo siguiente es un EJEMPLO basado en cómo funcionan librerías similares.
import { CookieManager } from 'react-cookie-manager'; // Corrección: Importación nombrada

const CookieManagerWrapper = () => {
  // La configuración y la inicialización dependerán de la librería específica.
  // Consulta la documentación de 'react-cookie-manager'.
  // Es posible que necesites pasarle props de configuración al componente CookieManager.

  // Ejemplo MUY genérico (podría no ser así como funciona esta librería):
  const config = {
    // Opciones de configuración: colores, texto, botón, enlace a política...
    backgroundColor: "#000",
    textColor: "#fff",
    buttonColor: "#00a592",
    buttonText: "Aceptar Cookies",
    policyLink: "/politica-privacidad", // Necesitarás crear esta página
    policyLinkText: "Leer más",
     // ... otras opciones de la librería ...
  };

  // A veces, estas librerías se inicializan en un useEffect, otras veces son solo un componente.
  // useEffect(() => {
  //   // Código de inicialización si es necesario
  // }, []);

  // Renderiza el componente que proporciona la librería (si lo hay)
  // Puede que el componente en sí renderice el banner.
  // OJO: La implementación real depende 100% de cómo esté hecha 'react-cookie-manager'.
  // Si no exporta un componente, quizás exporte una función para inicializar.
  return <CookieManager cookieKitId="67fd7d3a8f3a761d176ab7e5"       translations={{
    title: "Nos encantan las Cookies 🍪",
    message:
      "Utilizamos tecnologías como las cookies para almacenar y/o acceder a la información del dispositivo. Lo hacemos para mejorar la experiencia de navegación y para mostrar anuncios personalizados. El consentimiento a estas tecnologías nos permitirá procesar datos como el comportamiento de navegación o los ID's únicos en este sitio. No consentir o retirar el consentimiento, puede afectar negativamente a ciertas características y funciones.",
    buttonText: "Aceptar",
    declineButtonText: "Rechazar",
    manageButtonText: "Gestionar Cookies",
    privacyPolicyText: "Política de privacidad",
  }}
  showManageButton={true}
  privacyPolicyUrl="https://vittalias.com/politica-privacidad"
  theme="light"
  displayType="modal"
  onManage={(preferences) => {
    if (preferences) {
      console.log("Cookie preferences updated:", preferences);
    }
  }}
  onAccept={() => {
    console.log("User accepted all cookies");
    // Analytics tracking can be initialized here
    console.log("All cookies accepted");
    // Initialize analytics tools
    // window.gtag?.("consent", "update", { analytics_storage: "granted" });

  }}
  onDecline={() => {
    console.log("User declined all cookies");
    console.log("All cookies declined");
    // Ensure tracking is disabled
    // window.gtag?.("consent", "update", { analytics_storage: "denied" });
  }}
enableFloatingButton={true}
  classNames={{
    // Banner style (bottom of screen)
    bannerContainer:
      "bg-white/90 border-2 border-blue-200 shadow-xl rounded-xl",
    bannerContent: "p-6 space-y-4",
    bannerTitle: "text-lg font-bold text-blue-800",
    bannerMessage: "text-sm text-gray-700",

    // Floating cookie button (appears after consent is given)
    floatingButton: "bg-blue-500 text-white shadow-lg hover:bg-blue-600",
    floatingButtonCloseButton: "bg-red-500 text-white",

    // Manage Cookie UI elements
    manageCookieContainer: "space-y-6",
    manageCookieTitle: "text-xl font-bold text-blue-800",
    manageCookieMessage: "text-gray-700",
    manageCookieCategory: "border-b border-gray-200 pb-4",
    manageCookieCategoryTitle: "font-bold text-gray-800",
    manageCookieCategorySubtitle: "text-gray-600",
    manageCookieStatusText: "text-xs text-gray-500 italic",
    manageCookieToggle: "bg-gray-300",
    manageCookieToggleChecked: "bg-green-500",
    manageCancelButton:
      "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded",
    manageSaveButton:
      "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",

    // Other elements
    privacyPolicyLink: "text-blue-600 underline hover:text-blue-800",
    poweredByLink: "text-gray-400 hover:text-gray-600",
  }}>{null}</CookieManager>;
};

export default CookieManagerWrapper; 