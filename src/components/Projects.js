import React from "react";

const Projects = () => {
  return (
    <section className="contentproyecto">
      {/* Proyecto 1 */}
      <div className="proyecto1">
        <h2>Mi Portafolio Personal</h2>
        <p>
          Un sitio web en HTML y CSS que muestra mi experiencia y proyectos.
        </p>
        <details>
          <summary>Ver detalles</summary>
          <p>Este portafolio fue desarrollado en HTML5 y CSS3 como parte de la asignatura de Lenguaje de Marcas. Incluye un diseño responsivo para garantizar una experiencia de usuario óptima tanto en dispositivos móviles como en computadoras de escritorio. Cuenta con secciones como "Sobre mí", "Proyectos" y "Contacto".</p>

          {/* Enlace al archivo en GitHub */}
          <a
            href="https://github.com/seveira/proyecto-portafolio/blob/master/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Ver en GitHub</button>
          </a>
        </details>
      </div>

      {/* Proyecto 2 */}
      <div className="Detalle">
        <h2>Tienda Online</h2>
        <p>
          Tienda online para ropa y accesorios con integración de pagos.
        </p>
        <details>
          <summary>Ver detalles</summary>
          <p>
            Actualmente me encuentro trabajando en este proyecto, que incluirá la creación de un frontend desarrollado con React y un backend con Express.js. Se está integrando Stripe para los pagos y se está optimizando el SEO de la plataforma. Además, contará con un carrito de compras dinámico y administración de usuarios.
          </p>
          <p>
            Una vez finalizado, planeo subir este proyecto a GitHub, al igual que el primer proyecto que ya está publicado.
          </p>
        </details>
      </div>
    </section>
  );
};

export default Projects;