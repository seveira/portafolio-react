import React from 'react';

function MainContent() {
  return (
    <section className="content">
      <aside className="left-column">
        <div className="fotodeperfil">
          <img src="/img/FOTOPERFIL.jpg" alt="foto de perfil" />
        </div>
      </aside>
      <article className="article-derecha">
        <p>DIGITALEVOLUTION S.A</p>
      </article>
      <section id="contact-btn">
        <h1 className="c-b-heading">¿Tienes algún proyecto en mente?</h1>
        <a href="/contactos">
          <button>Escríbeme</button>
        </a>
      </section>
    </section>
  );
}

export default MainContent;
