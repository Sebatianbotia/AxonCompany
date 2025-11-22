import React, { useState } from 'react';

const Header = ({onOpenAbout}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <a href="#hero" className="logo">
          <img src="/ax.png" alt="Axon Company Logo" />
        </a>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#services" className="nav-link" onClick={closeMenu}>
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a href="#process" className="nav-link" onClick={closeMenu}>
              Proceso
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href= "#" onClick={() => { closeMenu(); onOpenAbout(); }}>
              Nosotros
            </a>
          </li>

          <li className="nav-item">
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/573014810079" className="nav-link btn" onClick={closeMenu}>
              Contactar
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;