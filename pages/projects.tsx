import React from 'react';
import ProjectsClient from '@/components/ProjectsClient';

export default function ProjectsPage() {
  return <ProjectsClient />;
}

export async function getServerSideProps() {
  return { props: {} };
}
