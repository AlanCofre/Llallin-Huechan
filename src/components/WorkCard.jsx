import { ArrowUpRight, ImagePlus } from 'lucide-react';

export default function WorkCard({ work, index }) {
  return (
    <article className="work-card">
      <a className="work-card__image-link" href="#contacto" aria-label={`Consultar por ${work.title}`}>
        <div
          className={`work-card__visual work-card__visual--${work.tone}`}
          role="img"
          aria-label={`Fotografía pendiente para ${work.title}`}
        >
          <span className="work-card__placeholder-mark" aria-hidden="true">
            <ImagePlus size={22} />
          </span>
          <span className="image-note">Fotografía por agregar</span>
        </div>
        <span className="work-card__arrow" aria-hidden="true">
          <ArrowUpRight size={19} />
        </span>
      </a>
      <div className="work-card__body">
        <div>
          <p className="eyebrow">Trabajo hecho a mano</p>
          <h3>{work.title}</h3>
          <p>{work.description}</p>
        </div>
        <a className="text-link" href="#contacto">
          Conocer más <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}