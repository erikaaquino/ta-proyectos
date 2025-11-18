'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PROJECTS_DATA } from '@/constants';
import type { Project } from '@/types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group overflow-hidden rounded-lg shadow-lg bg-white transform hover:-translate-y-2 transition-transform duration-300">
    <div className="relative">
      <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <p className="text-sm text-rose-dark font-semibold uppercase tracking-wider">{project.category}</p>
      <h3 className="mt-2 text-2xl font-serif font-bold text-charcoal">{project.title}</h3>
      <p className="mt-2 text-charcoal/70">{project.description}</p>
    </div>
  </div>
);

const StatsSection: React.FC = () => (
    <div className="bg-white rounded-lg shadow-md p-8 my-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-rose/20">
            <div className="flex flex-col justify-center p-2">
                <p className="text-4xl md:text-5xl font-serif font-bold text-rose-dark">30+</p>
                <p className="mt-2 text-sm text-charcoal/70 uppercase tracking-wider">Proyectos</p>
            </div>
            <div className="flex flex-col justify-center p-2">
                <p className="text-4xl md:text-5xl font-serif font-bold text-rose-dark">15+</p>
                <p className="mt-2 text-sm text-charcoal/70 uppercase tracking-wider">Clientes</p>
            </div>
            <div className="flex flex-col justify-center p-2">
                <p className="text-4xl md:text-5xl font-serif font-bold text-rose-dark">5+</p>
                <p className="mt-2 text-sm text-charcoal/70 uppercase tracking-wider">Años de Exp.</p>
            </div>
            <div className="flex flex-col justify-center p-2">
                <p className="text-4xl md:text-5xl font-serif font-bold text-rose-dark">200+</p>
                <p className="mt-2 text-sm text-charcoal/70 uppercase tracking-wider">Renders</p>
            </div>
        </div>
    </div>
);

export default function ProjectsClient() {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', ...Array.from(new Set(PROJECTS_DATA.map(p => p.category)))];
  
  const filteredProjects = useMemo(() => {
    if (filter === 'Todos') return PROJECTS_DATA;
    return PROJECTS_DATA.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">Nuestro Portafolio</h1>
          <p className="mt-4 max-w-2xl mx-auto text-charcoal/70">
            Una muestra de nuestra dedicación a la creación de espacios que inspiran, funcionan y perduran.
          </p>
        </div>
        
        <StatsSection />
        
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-colors ${
                filter === category
                  ? 'bg-rose-dark text-white'
                  : 'bg-white text-charcoal hover:bg-rose/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-24 text-center bg-white p-10 md:p-16 rounded-lg shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-charcoal">¿Tienes un proyecto en mente?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-charcoal/70">
              Si quieres un presupuesto o estás listo para empezar a trabajar juntos, estoy aquí para ayudarte a materializar tus ideas.
            </p>
            <Link href="/contact" className="mt-8 inline-block bg-rose-dark text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-rose-darker transition-transform hover:scale-105">
                Contactar Ahora
            </Link>
        </div>
      </div>
    </div>
  );
}
