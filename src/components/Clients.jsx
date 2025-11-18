import React from 'react';

const Clients = () => {
  const clients = [
    { id: 1, alt: 'Keyle Store', url: 'https://keyle-store.web.app/', img: "/KeyleStore.jpg" },
    { id: 2, alt: 'TuMercado', url: 'https://keyle-store.web.app/', img: "/salespointLogo.svg" },
    { id: 3, alt: 'SalesPoint', url: 'https://keyle-store.web.app/', img: "/tumercadoLogo.svg" }
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
            <div className='clients__card'>
              <div className='clients__imgContent'>
                <img
                  key={client.id}
                  src={client.img}
                  alt={client.alt}
                />
              </div>
            <a  target="_blank" rel="noopener noreferrer" href={client.url}> Visitar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;