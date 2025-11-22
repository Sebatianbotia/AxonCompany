import React from 'react'

const About = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className="about-overlay">

      <div className="about-panel reveal active">
        
        <button className="about-close" onClick={onClose}>×</button>

        <div className="about-logo">
          <img src="/axonBakground.png" alt="Axon Logo" />
        </div>

        <h2 className="about-title">Sobre Axon Company</h2>
        <p className="about-desc">
          Inspirados en los axones neuronales: rápidos, precisos y conectados.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h3>Propósito</h3>
            <p>Conectar el mundo mediante soluciones tecnológicas inteligentes.</p>
          </div>

          <div className="about-card">
            <h3>Misión</h3>
            <p>
              Desarrollar herramientas digitales que impulsen la innovación, 
              eficiencia y automatización en múltiples industrias.
            </p>
          </div>

          <div className="about-card">
            <h3>Valores</h3>
            <ul>
              <li>Innovación constante</li>
              <li>Precisión</li>
              <li>Conectividad</li>
              <li>Confianza</li>
              <li>Sostenibilidad</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  )
}

export default About
