import React from 'react';

const Clients = () => {
  const clients = [
    {
      id: 1,
      alt: 'Keyle Store',
      url: 'https://keyle-store.web.app/',
      img: "/KeyleStore.jpg",
      name: "Keyle' Store",
      description:
        "Concepción, diseño, implementación y pruebas de la plataforma WEB de Keyle' Store, un catálogo digital de productos."
    }
  ];

  return (
    <section id="clients">
      <div className="container reveal">
        <h3
          style={{
            textAlign: 'center',
            color: 'var(--text-secondary)',
            marginBottom: '30px',
          }}
        >
          Empresas que confían en nuestra tecnología
        </h3>

        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.id} className="client-card">

              <div className="client-img">
                <img src={client.img} alt={client.alt} />
              </div>

              <h4 className="client-name">{client.name}</h4>

              <p className="client-desc">{client.description}</p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={client.url}
                className="client-btn"
              >
                Visitar
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
