import React from 'react';

function Contact() {
  return (
    <div className="contacto">
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Escribí aquí tu nombre" required minLength="3" />

        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" placeholder="Escribí aquí tu apellido" required minLength="3" />

        <label htmlFor="mail">Email:</label>
        <input type="email" id="mail" name="mail" placeholder="Escribí aquí tu mail" required />

        <label htmlFor="país">País:</label>
        <select name="país" id="país">
          <option value="España">España</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Argentina">Argentina</option>
          <option value="Italia">Italia</option>
        </select>

        <label htmlFor="comentario">Comentario</label>
        <textarea name="comentario" id="comentario" placeholder="Escribí aquí tu comentario"></textarea>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Contact;
