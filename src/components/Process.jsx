import React from 'react';
import ProcessStep from './ProcessStep';

const Process = () => {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Descubrimiento',
      description: 'Analizamos tu negocio, necesidades y visión.',
    },
    {
      id: 2,
      number: '02',
      title: 'Diseño UX/UI',
      description: 'Interfaces claras, elegantes y funcionales.',
    },
    {
      id: 3,
      number: '03',
      title: 'Desarrollo',
      description: 'Construimos usando metodologías ágiles.',
    },
    {
      id: 4,
      number: '04',
      title: 'Despliegue',
      description: 'Tu producto en la nube, optimizado y seguro.',
    },
  ];

  return (
    <section id="process">
      <div className="container">
        <h2 className="section-title reveal">Nuestro Proceso</h2>
        <p className="section-subtitle reveal">
          Transparente, profesional y orientado a resultados.
        </p>

        <div className="process-grid">
          {steps.map((step) => (
            <ProcessStep
              key={step.id}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;