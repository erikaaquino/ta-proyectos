import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { SERVICES_DATA, PROJECTS_DATA } from '@/constants';
import { fetchPageBySlug } from '@/lib/wp-client';

interface HomeProps {
  heroTitle?: string;
  heroExcerpt?: string;
  heroImageUrl?: string;
}

const Hero = ({ heroTitle, heroExcerpt, heroImageUrl }: HomeProps) => {
  const title = heroTitle || 'Diseñando Visiones, Construyendo Futuros';
  const excerpt = heroExcerpt || 'Soluciones Arquitectónicas Innovadoras y Visualizaciones Inmersivas con Lumion para Empresas Modernas.';
  const imageUrl = heroImageUrl || 'https://i.imgur.com/u1VLbFv.png';

  return (
    <div className="relative bg-gradient-to-br from-rose-light via-cream to-lavender overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-rose/30 via-transparent to-mint/40 opacity-70"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal leading-tight">
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </h1>
            <div className="mt-4 text-lg text-charcoal/80" dangerouslySetInnerHTML={{ __html: excerpt }} />
            <Link href="/projects" className="mt-8 inline-block bg-rose-dark text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-rose-darker transition-transform hover:scale-105">
              Explorar Proyectos
            </Link>
          </div>
          <div className="relative h-64 md:h-auto min-h-[400px] flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-rose to-rose-dark rounded-full blur-2xl opacity-30"></div>
              <img src={imageUrl} alt="Hero image" className="relative rounded-full object-cover w-full aspect-square shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">Nuestros Servicios</h2>
        <p className="mt-4 max-w-3xl mx-auto text-charcoal/70 text-lg">
          Desde el concepto inicial hasta la visualización final, ofrecemos soluciones integrales para dar vida a tus proyectos arquitectónicos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 max-w-5xl mx-auto">
        {SERVICES_DATA.map((service, index) => (
          <div key={index} className="flex items-start space-x-6">
            <div className="flex-shrink-0 text-rose-dark mt-1 text-3xl">{service.icon}</div>
            <div>
              <h3 className="text-2xl font-serif font-semibold text-charcoal">{service.title}</h3>
              <p className="mt-2 text-charcoal/70">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 bg-cream rounded-lg p-10 md:p-16 text-center">
          <h3 className="text-3xl font-serif font-bold text-charcoal">¿Trabajamos a Distancia? ¡Claro que sí!</h3>
          <p className="mt-4 max-w-3xl mx-auto text-charcoal/70">
              Ofrezco servicios de renderizado y visualización 3D de forma remota para clientes en todo el mundo. Solo necesitas enviarme tus planos o modelos 3D, y me encargaré de transformar tus ideas en imágenes y animaciones fotorrealistas de alta calidad.
          </p>
          <Link href="/contact" className="mt-8 inline-block bg-rose-dark text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-rose-darker transition-transform hover:scale-105">
              Contactar Ahora
          </Link>
      </div>
    </div>
  </section>
);

const AboutPreview = () => (
  <section className="py-16 md:py-24 bg-cream">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative p-2 border-4 border-white/50 rounded-lg shadow-lg">
          <img 
            src="https://i.imgur.com/u1VLbFv.png" 
            alt="Tatiana Aquino, Arquitecta" 
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal">Soy Tatiana Aquino</h2>
          <div className="w-20 h-1 bg-rose-dark my-4"></div>
          <p className="text-charcoal/70 mb-4 text-lg">
            La arquitecta y fundadora detrás de TA Proyectos. Con un equipo de profesionales apasionados, nos dedicamos a transformar ideas en espacios funcionales y estéticamente inspiradores.
          </p>
          <p className="text-charcoal/70 mb-6">
            Nuestra filosofía se basa en la colaboración estrecha con nuestros clientes para materializar sus sueños.
          </p>
          <Link href="/about" className="font-semibold text-rose-dark hover:text-rose-darker transition-colors">
            Leer más sobre mí &rarr;
          </Link>
        </div>
      </div>
    </div>
  </section>
);


const ProjectsPreview = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center">Trabajos Recientes</h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.slice(0, 3).map((project) => (
          <div key={project.id} className="group overflow-hidden rounded-lg shadow-lg bg-white">
            <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <p className="text-sm text-rose-dark font-semibold">{project.category}</p>
              <h3 className="mt-2 text-xl font-serif font-bold text-charcoal">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/projects" className="bg-charcoal text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider hover:bg-charcoal/80 transition-colors">
          Ver Todos los Proyectos
        </Link>
      </div>
    </div>
  </section>
);

export default function Home({ heroTitle, heroExcerpt, heroImageUrl }: HomeProps) {
  return (
    <>
      <Hero heroTitle={heroTitle} heroExcerpt={heroExcerpt} heroImageUrl={heroImageUrl} />
      <ServicesSection />
      <AboutPreview />
      <ProjectsPreview />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const defaultTitle = 'Diseñando Visiones, Construyendo Futuros';
  const defaultExcerpt = 'Soluciones Arquitectónicas Innovadoras y Visualizaciones Inmersivas con Lumion para Empresas Modernas.';
  const defaultImageUrl = 'https://i.imgur.com/u1VLbFv.png';

  try {
    const homePage = await fetchPageBySlug('home');

    let heroTitle = defaultTitle;
    let heroExcerpt = defaultExcerpt;
    let heroImageUrl = defaultImageUrl;

    if (homePage) {
      heroTitle = homePage.title.rendered || defaultTitle;
      heroExcerpt = homePage.excerpt?.rendered || defaultExcerpt;
      
      // Extract featured image URL from embedded data
      if (homePage._embedded?.['wp:featuredmedia']?.[0]) {
        heroImageUrl = homePage._embedded['wp:featuredmedia'][0].source_url || defaultImageUrl;
      }
    }

    return {
      props: {
        heroTitle,
        heroExcerpt,
        heroImageUrl,
      },
      revalidate: 60, // ISR: revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching home page from WordPress:', error);
    return {
      props: {
        heroTitle: defaultTitle,
        heroExcerpt: defaultExcerpt,
        heroImageUrl: defaultImageUrl,
      },
      revalidate: 60,
    };
  }
};
