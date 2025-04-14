'use client' // Necesario para usar estado (useState)

import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-5 text-left text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {/* Icono simple para indicar abierto/cerrado */}
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {/* Animación simple de altura */}
      <div
         className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
       >
        <div className="px-5 pb-4 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
};


interface AccordionSectionProps {
  title?: string;
  items: Array<{
    title: string;
    content: React.ReactNode;
  }>;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, items }) => {
  // Estado para controlar qué item está abierto (-1 significa ninguno)
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index); // Abre/cierra el item
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10 md:mb-14">
            {title}
          </h2>
        )}
        <div className="max-w-3xl mx-auto border border-gray-200 rounded-md shadow-sm">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            >
              {item.content}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection; 