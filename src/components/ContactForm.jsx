import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [notice, setNotice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setNotice('Formulario de muestra: todavía no está conectado a un medio de recepción.');
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Nombre
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        Correo electrónico
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Mensaje
        <textarea name="message" rows="4" required />
      </label>
      <button className="button button--dark" type="submit">
        Preparar mensaje <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      <p className="form-notice" role="status" aria-live="polite">
        {notice}
      </p>
    </form>
  );
}