import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Interfaces para los Datos (Simulando CMS/JSON) ---
interface FeaturedPostAuthor {
  name: string;
  imageUrl: string;
}

interface FeaturedPostItem {
  slug: string; // Para el enlace URL
  imageUrl: string;
  imageAlt: string;
  tag?: string; // Opcional (ej. "Destacado")
  title: string;
  date: string; // O podría ser tipo Date
  excerpt: string;
  author?: FeaturedPostAuthor; // Opcional, más común en posts secundarios
}

interface FeaturedPostsSectionProps {
  sectionTitle?: string; // Título opcional para la sección
  mainPost: FeaturedPostItem;
  secondaryPosts: [FeaturedPostItem, FeaturedPostItem]; // Aseguramos que siempre haya dos
}

// --- Componente Hijo para los Posts Secundarios (Opcional, para limpieza) ---
const SecondaryPostCard: React.FC<{ post: FeaturedPostItem }> = ({ post }) => {
  // Formatear fecha si es necesario (ej. con date-fns)
  // const formattedDate = format(new Date(post.date), 'LLL d, yyyy', { locale: es });

  return (
    <article className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full">
      {/* Puedes optar por no incluir imagen en los secundarios si quieres simplificar */}
      {/* <div className="flex-shrink-0">
        <Image
          src={post.imageUrl}
          alt={post.imageAlt}
          width={400} // Ajusta según diseño
          height={250}
          className="w-full h-48 object-cover"
        />
      </div> */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <p className="text-xs text-gray-500 mb-1">
            <time dateTime={post.date}>{post.date}</time> {/* Usar fecha formateada */}
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight hover:text-[#00a592]">
            <Link href={`/blog/${post.slug}`}> {/* Asumiendo ruta /blog/slug */}
              <span className="absolute inset-0" aria-hidden="true" /> {/* Enlace cubre toda la tarjeta */}
              {post.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3 mb-3">
            {post.excerpt}
          </p>
        </div>
        {post.author && (
          <div className="mt-3 flex items-center">
            <div className="flex-shrink-0">
              <Image
                className="h-8 w-8 rounded-full object-cover"
                src={post.author.imageUrl}
                alt={`Avatar de ${post.author.name}`}
                width={32}
                height={32}
              />
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-800">{post.author.name}</p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};


// --- Componente Principal ---
const FeaturedPostsSection: React.FC<FeaturedPostsSectionProps> = ({
  sectionTitle,
  mainPost,
  secondaryPosts,
}) => {
  // Formatear fecha si es necesario
  // const formattedMainDate = format(new Date(mainPost.date), 'LLL d, yyyy', { locale: es });

  return (
    <section className="py-12 md:py-16 bg-gray-50"> {/* Fondo ligero para la sección */}
      <div className="container mx-auto px-4">
        {/* Título Opcional de la Sección */}
        {sectionTitle && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 md:mb-14">
            {sectionTitle}
          </h2>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* === INICIO SECCIÓN MODIFICADA: Post Principal === */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Contenedor relativo para posicionar elementos absolutos */}
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 shadow-lg h-[450px] md:h-[550px]">
              {/* Imagen de fondo */}
              <Image
                src={mainPost.imageUrl}
                alt={mainPost.imageAlt}
                fill // Llena el contenedor
                className="absolute inset-0 -z-10 h-full w-full object-cover" // z-index negativo
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Overlay Gradiente */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900/80 via-gray-900/40"></div>

              {/* Contenedor para el contenido de texto */}
              <div className="z-10 p-6 md:p-8 text-white">
                {mainPost.tag && (
                  // Estilo del tag como en la imagen (fondo blanco, texto oscuro)
                  <span className="inline-block bg-white text-gray-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">
                    {mainPost.tag}
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  {/* Enlace envuelve solo el título para no interferir con el botón */}
                  <Link href={`/blog/${mainPost.slug}`} legacyBehavior>
                    <a className="hover:underline">{mainPost.title}</a>
                  </Link>
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  <time dateTime={mainPost.date}>{mainPost.date}</time> {/* Usar fecha formateada */}
                </p>
                <p className="text-base text-gray-200 line-clamp-3 mb-5"> {/* Limita las líneas */}
                  {mainPost.excerpt}
                </p>
                {/* Botón estilizado como en la imagen */}
                <Link href={`/blog/${mainPost.slug}`} legacyBehavior>
                  <a className="inline-block bg-[#00a592] hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-md shadow transition-colors">
                    Leer artículo completo
                  </a>
                </Link>
              </div>
            </article>
          </div>
          {/* === FIN SECCIÓN MODIFICADA: Post Principal === */}

          {/* Columna de Posts Secundarios (Ocupa menos espacio en LG) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
              {/* Mapeamos los dos posts secundarios */}
              {secondaryPosts.map((post) => (
                  <SecondaryPostCard key={post.slug} post={post} />
              ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsSection; 