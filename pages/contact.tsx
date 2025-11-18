import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@/components/Icons';

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">Hablemos de tu Proyecto</h1>
          <p className="mt-4 max-w-3xl mx-auto text-charcoal/70 text-lg">
            Estoy emocionada de escuchar sobre tus ideas. Contáctame para comenzar a dar vida a tu visión.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-semibold text-charcoal border-b-2 border-rose pb-4">Información de Contacto</h2>
            <div className="flex items-center space-x-4">
              <EnvelopeIcon className="w-8 h-8 text-rose-dark" />
              <div>
                <h3 className="text-lg font-semibold text-charcoal">Email</h3>
                <a href="mailto:info@taproyectos.com" className="text-charcoal/80 hover:text-rose-dark transition-colors">info@taproyectos.com</a>
              </div>
            </div>
             <div className="flex items-center space-x-4">
              <PhoneIcon className="w-8 h-8 text-rose-dark" />
              <div>
                <h3 className="text-lg font-semibold text-charcoal">Teléfono</h3>
                <p className="text-charcoal/80">+595 981 123 456</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPinIcon className="w-8 h-8 text-rose-dark" />
              <div>
                <h3 className="text-lg font-semibold text-charcoal">Ubicación</h3>
                <p className="text-charcoal/80">Asunción, Paraguay (Trabajo remoto disponible)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-cream p-8 rounded-lg">
            <h2 className="text-3xl font-serif font-semibold text-charcoal border-b-2 border-rose pb-4">Para agilizar la comunicación</h2>
            <p className="mt-4 text-charcoal/70">
              Al contactarme por correo, por favor incluye la siguiente información para que pueda entender mejor tus necesidades:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-charcoal/80 marker:text-rose-dark">
              <li>Tu nombre completo</li>
              <li>Nombre de tu empresa (si aplica)</li>
              <li>Tipo de proyecto (Residencial, Comercial, etc.)</li>
              <li>Una breve descripción de tu visión y requisitos.</li>
            </ul>
            <p className="mt-6 text-charcoal/90 font-semibold italic">
              Reviso los mensajes regularmente y me pondré en contacto contigo a la brevedad posible. ¡Espero que colaboremos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
