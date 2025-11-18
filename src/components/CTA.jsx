import React from 'react';

const CTA = () => {
  return (
    <section id="cta-section" className="container">
      <div id="cta" className="reveal">
        <h2>¿Tienes una idea? Construyámosla juntos.</h2>
        <p className="cta__pharagraph">
          Hablemos y llevemos tu proyecto al siguiente nivel.
        </p>
        <a  target="_blank" rel="noopener noreferrer" href="https://wa.me/573014810079" className="btn">
          Agenda una reunión
        </a>
      </div>
    </section>
  );
};

export default CTA;