import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Desarrollo Web Avanzado',
      description: 'Plataformas SaaS, APIs, e-commerce y más. Rápido y escalable.',
    },
    {
      id: 2,
      title: 'Aplicaciones Móviles',
      description: 'iOS y Android con rendimiento óptimo y diseño moderno.',
    },
    {
      id: 3,
      title: 'Cloud & DevOps',
      description:
        'AWS, Google Cloud y automatización CI/CD para escalar tu negocio.',
    },
  ];

  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title reveal">
          Soluciones a la Medida de tu Negocio
        </h2>
        <p className="section-subtitle reveal">
          No creemos en soluciones genéricas. Construimos exactamente lo que tu
          empresa necesita.
        </p>

        <div className="grid-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;