import React from 'react';

export default function About() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight">
              Tatiana Aquino: Pasión por el Diseño, Compromiso con la Excelencia.
            </h1>
            <div className="w-24 h-1 bg-rose-dark my-6"></div>
            <div className="space-y-4 text-charcoal/80 text-lg">
              <p>
                Bienvenida a TA Proyectos. Soy Tatiana Aquino, arquitecta y fundadora, con la profunda convicción de que un gran diseño puede transformar vidas. Mi trabajo está impulsado por la pasión de crear espacios que no solo son hermosos y funcionales, sino que también resuenan con las personas que los habitan.
              </p>
              <p>
                Apoyada por un equipo talentoso, combinamos la experiencia en arquitectura tradicional con herramientas de visualización de vanguardia como Lumion para cerrar la brecha entre la imaginación y la realidad. Nuestro enfoque es colaborativo y centrado en el cliente, asegurando que cada proyecto sea un fiel reflejo de su visión y aspiraciones.
              </p>
              <p>
                Ya sea un hogar acogedor, un espacio comercial dinámico o una experiencia virtual inmersiva, nuestro objetivo es ofrecer soluciones innovadoras que superen las expectativas y resistan el paso del tiempo.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative p-4 border-8 border-cream rounded-lg">
               <img 
                src="https://i.imgur.com/u1VLbFv.png" 
                alt="Tatiana Aquino, fundadora de TA Proyectos" 
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal">Nuestra Filosofía</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-charcoal">Innovación</h3>
                    <p className="mt-2 text-charcoal/70">Adoptar nuevas tecnologías y pensamiento creativo para ampliar los límites del diseño.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-charcoal">Colaboración</h3>
                    <p className="mt-2 text-charcoal/70">Trabajar en estrecha colaboración con los clientes para garantizar que su visión esté en el centro de cada proyecto.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-charcoal">Sostenibilidad</h3>
                    <p className="mt-2 text-charcoal/70">Diseñar con respeto por el medio ambiente para crear espacios responsables y resilientes.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
