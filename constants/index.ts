import type { Project, Service } from '@/types';

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Proyecto 1',
    description: 'Descripción del proyecto',
    category: 'Residencial',
    imageUrl: 'https://i.imgur.com/u1VLbFv.png',
  },
  {
    id: '2',
    title: 'Proyecto 2',
    description: 'Descripción del proyecto',
    category: 'Comercial',
    imageUrl: 'https://i.imgur.com/u1VLbFv.png',
  },
  {
    id: '3',
    title: 'Proyecto 3',
    description: 'Descripción del proyecto',
    category: 'Residencial',
    imageUrl: 'https://i.imgur.com/u1VLbFv.png',
  },
];

export const SERVICES_DATA: Service[] = [
  {
    title: 'Diseño Arquitectónico',
    description: 'Soluciones innovadoras adaptadas a tus necesidades.',
    icon: '🏗️',
  },
  {
    title: 'Visualización 3D',
    description: 'Renderizados fotorrealistas con Lumion.',
    icon: '🎨',
  },
  {
    title: 'Consultoría',
    description: 'Asesoramiento profesional en proyectos arquitectónicos.',
    icon: '💡',
  },
  {
    title: 'Gestión de Proyectos',
    description: 'Coordinación integral de tu proyecto desde inicio a fin.',
    icon: '📋',
  },
];
