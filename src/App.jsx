import { ArrowDownRight, ArrowUpRight, Camera, Leaf, Recycle } from 'lucide-react';
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
            <h1 id="hero-title">Cestería tejida con memoria y tradición.</h1>
            <p className="hero__lead">
              Artesanía cestera vinculada a la identidad Mapuche y al territorio de Curarrehue y Reigolil.
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
              <span>Cestería y territorio</span>
              <span>01 / 04</span>
            </div>
          </div>
          <div className="hero__index" aria-hidden="true">LH — 01</div>
        </section>

        <section className="identity section-shell" id="identidad" aria-labelledby="identity-title">
          <div className="identity__intro">
            <p className="eyebrow">01 — Nuestra identidad</p>
            <h2 id="identity-title">Una identidad vinculada al lugar.</h2>
          </div>
          <div className="identity__body">
            <p>
              Llallin Huechan presenta trabajos de cestería con una identidad vinculada a la
              cultura Mapuche y al territorio de Curarrehue y Reigolil.
            </p>
            <p>
              La figura de la araña —Llallin / Llallin Kuze— forma parte de esta identidad.
              La creación manual se comparte desde su propio contexto cultural y territorial.
            </p>
            <a className="text-link" href="#territorio">
              Conocer el territorio <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <aside className="identity__recognition" aria-labelledby="recognition-title">
            <div className="identity__recognition-heading">
              <p className="eyebrow">Hito de la artesana</p>
              <h3 id="recognition-title">Reconocimiento a la Excelencia Artesanal</h3>
              <p className="identity__recognition-award">
                Mención Honrosa en el Sello de Excelencia a la Artesanía
              </p>
            </div>
            <div
              className="identity__recognition-photo"
              role="img"
              aria-label="Espacio reservado para una fotografía de Lidia Huechan Cavieres"
            >
              <Camera size={24} strokeWidth={1.5} aria-hidden="true" />
              <span>Fotografía de la artesana</span>
            </div>
            <blockquote>
              El trabajo de <strong>Lidia Huechan Cavieres</strong> preserva la memoria viva del
              tejido en cestería. Su dedicación y maestría en el manejo de fibras naturales han sido
              distinguidas con la <strong>Mención Honrosa del Sello de Excelencia a la Artesanía</strong>,
              reconocimiento que distingue la autenticidad, innovación respetuosa y calidad técnica
              de sus obras, posicionando el arte de Curarrehue y Reigolil en el mapa cultural de Chile.
            </blockquote>
          </aside>
          <div className="identity__mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="pita section-shell" id="pita" aria-labelledby="pita-title">
          <div className="pita__heading">
            <SectionHeading eyebrow="02 — Materia prima" title="La nobleza de una fibra silvestre." light>
              <p>
                La pita es una fibra vegetal ancestral, apreciada en la cestería del sur de Chile
                por su flexibilidad y resistencia.
              </p>
            </SectionHeading>
          </div>
          <div className="pita__details">
            <article className="pita__card">
              <span className="pita__icon" aria-hidden="true">
                <Leaf size={20} strokeWidth={1.5} />
              </span>
              <h3>De la planta al hilo</h3>
              <p>
                La pita (<i>Aechmea magdalenae</i> o plantas de las familias de las bromelias y los
                agaves, según la zona) se recolecta de forma silvestre en los bosques del territorio.
                Tras un proceso respetuoso de extracción, desfibrado, lavado y secado al sol, sus
                hebras se transforman en hilos flexibles y sumamente resistentes, ideales para el
                entramado fino de piezas únicas de cestería.
              </p>
            </article>
            <article className="pita__card pita__card--sustainability">
              <span className="pita__icon" aria-hidden="true">
                <Recycle size={20} strokeWidth={1.5} />
              </span>
              <h3>Recolección con respeto</h3>
              <p>
                Nuestra recolección sigue el ciclo natural de la tierra y los principios ancestrales
                del respeto (<i>az mapu</i>). Extraemos la materia prima de manera selectiva, sin dañar
                la planta madre y permitiendo su regeneración natural. Como fibra 100% biodegradable,
                trabajada manualmente y sin químicos ni contaminantes, cada pieza expresa una
                relación sustentable y armónica con la naturaleza.
              </p>
            </article>
          </div>
        </section>

        <section className="craft section-shell" id="artesania" aria-labelledby="craft-title">
          <div className="craft__heading">
            <SectionHeading eyebrow="03 — Artesanía" title="Cestería con identidad.">
              <p>
                Una primera mirada a la cestería de Llallin Huechan. La imagen y el texto son
                referenciales y están preparados para reemplazarse por contenido propio.
              </p>
            </SectionHeading>
            <a className="text-link craft__all-link" href="#contacto">
              Consultar <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className={`work-grid${works.length === 1 ? ' work-grid--single' : ''}`}>
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
            <p className="eyebrow">04 — Territorio</p>
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
          <span className="territory__number" aria-hidden="true">04</span>
        </section>

        <section className="gallery-section section-shell" id="galeria" aria-labelledby="gallery-title">
          <SectionHeading eyebrow="05 — Galería" title="Una mirada en proceso.">
            <p>Espacios listos para fotografías de cestería, procesos y territorio.</p>
          </SectionHeading>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <figure className={`gallery-tile gallery-tile--${item.tone}`} key={item.title}>
                {item.image ? (
                  <img
                    className="gallery-tile__art gallery-tile__photo"
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                  />
                ) : (
                  <div className="gallery-tile__art" role="img" aria-label={`Fotografía pendiente: ${item.title}`}>
                    <span className="gallery-tile__code">LH / 0{index + 1}</span>
                    <span className="gallery-tile__placeholder">Fotografía<br />por agregar</span>
                    <span className="gallery-tile__shape" aria-hidden="true" />
                  </div>
                )}
                <figcaption>
                  <span>{item.title}</span>
                  <span>Imagen pendiente</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="care section-shell" id="cuidados" aria-labelledby="care-title">
          <SectionHeading eyebrow="06 — Cuidados" title="Cuidar cada tejido.">
            <p>
              Recomendaciones sencillas para acompañar la vida de tus piezas de cestería.
            </p>
          </SectionHeading>
          <div className="care__tips">
            <article className="care__tip">
              <span className="care__number" aria-hidden="true">01</span>
              <h3>Mantenla seca</h3>
              <p>
                Evita la humedad prolongada. Si la pieza se moja, déjala secar al aire en un lugar
                ventilado, lejos del calor directo.
              </p>
            </article>
            <article className="care__tip">
              <span className="care__number" aria-hidden="true">02</span>
              <h3>Limpia con suavidad</h3>
              <p>
                Retira el polvo con un paño seco o un cepillo de cerdas suaves. Evita sumergirla y
                no apliques detergentes ni productos químicos.
              </p>
            </article>
            <article className="care__tip">
              <span className="care__number" aria-hidden="true">03</span>
              <h3>Guárdala con cuidado</h3>
              <p>
                Conserva la pieza en un espacio seco y ventilado, sin peso encima para ayudar a
                mantener su forma.
              </p>
            </article>
          </div>
        </section>

        <section className="contact" id="contacto" aria-labelledby="contact-title">
          <div className="contact__intro">
            <p className="eyebrow">07 — Contacto</p>
            <h2 id="contact-title">Conversemos.</h2>
            <p>
              Este espacio está preparado para recibir consultas cuando se incorpore el medio
              de contacto de Llallin Huechan.
            </p>
            <div className="contact__details">
              <div>
                <span className="eyebrow">Correo</span>
                <span>Lidiahuechan@gmail.com</span>
              </div>
              <div>
                <span className="eyebrow">Redes sociales</span>
                <span>9 38844685</span>
              </div>
              <div>
                <span className="eyebrow">Horario de atención</span>
                <span>10 a 18 hrs</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__top">
          <div className="site-footer__brands">
            <Brand light />
            <img className="site-footer__seal" src="/images/logo.png" alt="Sello de Excelencia a la Artesanía de Chile" />
          </div>
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
          <span>Identidad, cestería y territorio</span>
        </div>
      </footer>
    </>
  );
}

export default App;