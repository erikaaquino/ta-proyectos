import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-charcoal">
          TA Proyectos
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-charcoal"></div>
          <div className="w-6 h-0.5 bg-charcoal"></div>
          <div className="w-6 h-0.5 bg-charcoal"></div>
        </button>

        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-8 absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-white md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none`}>
          <li>
            <Link href="/" className="text-charcoal hover:text-rose-dark transition-colors font-semibold">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-charcoal hover:text-rose-dark transition-colors font-semibold">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-charcoal hover:text-rose-dark transition-colors font-semibold">
              Sobre Mí
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-charcoal hover:text-rose-dark transition-colors font-semibold">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
