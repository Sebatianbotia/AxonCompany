const Footer = ({ onOpenAbout }) => {
  return (
    <footer className="footer">
      <div className="container footer__bottom">
        <p>&copy; 2025 Axon Company. Conectando ideas, construyendo futuro.</p>

        <a className="footer__link" onClick={onOpenAbout}>
          Sobre nosotros
        </a>
      </div>
    </footer>
  );
};

export default Footer;
