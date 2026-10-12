export const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nuestra identidad', href: '#identidad' },
  { label: 'Artesanía', href: '#artesania' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

const basketryPhoto = '/images/20260821_201055%20-%20lidia%20huechan%20cavieres.jpg';
const basketryPhotoAlt = 'Canasto de cestería con asa y detalle decorativo central.';

export const works = [
  {
    title: 'Cestería',
    description: 'Espacio para presentar trabajos de cestería.',
    tone: 'cesteria',
    image: basketryPhoto,
    imageAlt: basketryPhotoAlt,
  },
];

export const gallery = [
  { title: 'Cestería', tone: 'cesteria', image: basketryPhoto, imageAlt: basketryPhotoAlt },
  { title: 'Detalle', tone: 'cesteria' },
  { title: 'Proceso cestero', tone: 'proceso' },
  { title: 'Territorio', tone: 'territorio' },
];

export const referenceImages = {
  hero: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=85',
};
