import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Brand from './components/Brand.jsx';
import ContactForm from './components/ContactForm.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import WorkCard from './components/WorkCard.jsx';
import { gallery, navigation, referenceImages, works } from './data/content.js';

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader />
      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">Curarrehue · Reigolil · Chile</p>
            <h1 id="hero-title">Tramas que nacen del territorio.</h1>
            <p className="hero__lead">
              Tejido y cestería en diálogo con la identidad Mapuche y el trabajo hecho a mano.
            </p>
            <a className="button button--light" href="#artesania">
              Explorar la artesanía <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <span className="hero__side-note">Imagen de referencia · no es local · reemplazable</span>
          </div>
          <div className="hero__image-wrap">
            <img
              className="hero__image"
              src={referenceImages.hero}
              alt="Paisaje cordillerano de referencia; no corresponde a una fotografía del proyecto"
              fetchPriority="high"
            />
            <div className="hero__image-caption">
              <span>Un territorio, muchas tramas</span>
              <span>01 / 04</span>
            </div>
          </div>
          <div className="hero__index" aria-hidden="true">LH — 01</div>
        </section>

        <section className="identity section-shell" id="identidad" aria-labelledby="identity-title">
          <div className="identity__intro">
            <p className="eyebrow">01 — Nuestra identidad</p>
            <h2 id="identity-title">Un entramado de saberes, creación y lugar.</h2>
          </div>
          <div className="identity__body">
            <p>
              Llallin Huechan reúne el lenguaje del tejido y la cestería con una identidad
              vinculada a la cultura Mapuche y al territorio de Curarrehue y Reigolil.
            </p>
            <p>
              La figura de la araña tejedora —Llallin / Llallin Kuze— inspira una mirada sobre
              el entramado, el telar y las formas de la cordillera. Una invitación a valorar la
              creación manual desde su propio contexto.
            </p>
            <a className="text-link" href="#territorio">
              Conocer el territorio <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="identity__mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="craft section-shell" id="artesania" aria-labelledby="craft-title">
          <div className="craft__heading">
            <SectionHeading eyebrow="02 — Artesanía" title="Hecho a mano, con identidad.">
              <p>
                Una primera mirada a los trabajos de Llallin Huechan. Las imágenes y textos son
                referenciales y están preparados para reemplazarse por contenido propio.
              </p>
            </SectionHeading>
            <a className="text-link craft__all-link" href="#contacto">
              Consultar <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="work-grid">
            {works.map((work, index) => (
              <WorkCard key={work.title} work={work} index={index} />
            ))}
          </div>
        </section>

        <section className="territory" id="territorio" aria-labelledby="territory-title">
          <div className="territory__image-wrap">
            <div
              className="territory__texture"
              role="img"
              aria-label="Espacio reservado para una fotografía real del territorio"
            >
              <span className="territory__texture-code">LH / TERRITORIO</span>
              <span className="image-note">Fotografía local por agregar</span>
            </div>
          </div>
          <div className="territory__copy">
            <p className="eyebrow">03 — Territorio</p>
            <h2 id="territory-title">Curarrehue y Reigolil.</h2>
            <p>
              La identidad de Llallin Huechan se vincula a este territorio cordillerano del sur
              de Chile. Aquí, el lugar forma parte del diálogo entre cultura, creación y trabajo
              hecho a mano.
            </p>
            <div className="territory__places">
              <span>Curarrehue</span>
              <span aria-hidden="true">/</span>
              <span>Reigolil</span>
              <span aria-hidden="true">/</span>
              <span>Chile</span>
            </div>
          </div>
          <span className="territory__number" aria-hidden="true">03</span>
        </section>

        <section className="gallery-section section-shell" id="galeria" aria-labelledby="gallery-title">
          <SectionHeading eyebrow="04 — Galería" title="Una mirada en proceso.">
            <p>Espacios listos para fotografías de textiles, cestería, procesos y territorio.</p>
          </SectionHeading>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <figure className={`gallery-tile gallery-tile--${item.tone}`} key={item.title}>
                <div className="gallery-tile__art" role="img" aria-label={`Fotografía pendiente: ${item.title}`}>
                  <span className="gallery-tile__code">LH / 0{index + 1}</span>
                  <span className="gallery-tile__placeholder">Fotografía<br />por agregar</span>
                  <span className="gallery-tile__shape" aria-hidden="true" />
                </div>
                <figcaption>
                  <span>{item.title}</span>
                  <span>Imagen pendiente</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="contact" id="contacto" aria-labelledby="contact-title">
          <div className="contact__intro">
            <p className="eyebrow">05 — Contacto</p>
            <h2 id="contact-title">Conversemos.</h2>
            <p>
              Este espacio está preparado para recibir consultas cuando se incorpore el medio
              de contacto de Llallin Huechan.
            </p>
            <div className="contact__details">
              <div>
                <span className="eyebrow">Correo</span>
                <span>Por agregar</span>
              </div>
              <div>
                <span className="eyebrow">Redes sociales</span>
                <span>Por agregar</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__top">
          <Brand light />
          <nav aria-label="Navegación del pie de página">
            {navigation.slice(1).map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a className="back-to-top" href="#inicio" aria-label="Volver al inicio">
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Llallin Huechan</span>
          <span>Curarrehue · Reigolil · Chile</span>
          <span>Identidad, tejido y territorio</span>
        </div>
      </footer>
    </>
  );
}

export default App;