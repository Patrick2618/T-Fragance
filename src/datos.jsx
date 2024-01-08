
const perfumes = [
    {
      id: 1,
      nombre: "Perfume Floral",
      marca: "Elegance",
      img:'https://i.ibb.co/Q8PmLY1/producto1.webp',
      categoria: "Floral",
      precio: 49.99,
      descripcion: "Una fragancia floral delicada y fresca, perfecta para cualquier ocasión."
    },
    {
      id: 2,
      nombre: "Perfume Amaderado",
      marca: "Luxury Scents",
      img:'https://i.ibb.co/nRGShH6/producto2.webp',
      categoria: "Amaderado",
      precio: 74.99,
      descripcion: "Un aroma amaderado cálido y sofisticado que perdura a lo largo del día."
    },
    {
      id: 3,
      nombre: "Perfume i",
      marca: "Citrus Bliss",
      img:'https://i.ibb.co/XS0fh7R/generica3.webp',
      categoria: "Citrico",
      precio: 39.99,
      descripcion: "Una explosión de notas cítricas refrescantes que te energizará durante todo el día."
    },
    {
      id: 4,
      nombre: "Perfume Oriental",
      marca: "Mystique",
      img:'https://i.ibb.co/PWX86RS/generica2.webp',
      categoria: "Oriental",
      precio: 89.99,
      descripcion: "Una fragancia oriental rica y seductora, ideal para ocasiones especiales."
    },
    {
      id: 5,
      nombre: "Perfume Dulce",
      marca: "Sweet Essence",
      img:'https://i.ibb.co/Q8PmLY1/producto1.webp',
      categoria: "Aromatico",
      precio: 59.99,
      descripcion: "Un perfume con notas dulces que te envolverá en un aura deliciosamente irresistible."
    },
    {
      id: 6,
      nombre: "Perfume Fresco",
      marca: "Aquatic Breeze",
      img:'https://i.ibb.co/nRGShH6/producto2.webp',
      categoria: "Citrico",
      precio: 49.99,
      descripcion: "Una fragancia fresca y revitalizante que evoca la brisa del océano en un día soleado."
    },
    {
      id: 7,
      nombre: "Perfume Frutal",
      marca: "Fruit Fusion",
      img:'https://i.ibb.co/XS0fh7R/generica3.webp',
      categoria: "Frutal",
      precio: 34.99,
      descripcion: "Una mezcla de aromas frutales que te transportará a un exuberante huerto en verano."
    },
    {
      id: 8,
      nombre: "Perfume Aromático",
      marca: "Aroma Bliss",
      img:'https://i.ibb.co/PWX86RS/generica2.webp',
      categoria: "Aromatico",
      precio: 44.99,
      descripcion: "Un perfume con notas aromáticas que te envolverá en una atmósfera relajante y reconfortante."
    },
    {
      id: 9,
      nombre: "Perfume Seductor",
      marca: "Sultry Scent",
      img:'https://i.ibb.co/Q8PmLY1/producto1.webp',
      categoria: "Amaderado",
      precio: 64.99,
      descripcion: "Una fragancia seductora con notas amaderadas que dejará una impresión duradera."
    },
    {
      id: 10,
      nombre: "Perfume Clásico",
      marca: "Timeless Elegance",
      img:'https://i.ibb.co/nRGShH6/producto2.webp',
      categoria: "Floral",
      precio: 79.99,
      descripcion: "Un perfume clásico con una mezcla de flores atemporales, perfecto para ocasiones especiales."
    },
    {
        id: 11,
        nombre: "Perfume Floral",
        marca: "Elegance",
        img:'https://i.ibb.co/Q8PmLY1/producto1.webp',
        categoria: "Floral",
        precio: 49.99,
        descripcion: "Una fragancia floral delicada y fresca, perfecta para cualquier ocasión."
      },
      {
        id: 12,
        nombre: "Perfume Amaderado",
        marca: "Luxury Scents",
        img:'https://i.ibb.co/nRGShH6/producto2.webp',
        categoria: "Amaderado",
        precio: 74.99,
        descripcion: "Un aroma amaderado cálido y sofisticado que perdura a lo largo del día."
      },
      {
        id: 13,
        nombre: "Perfume i",
        marca: "Citrus Bliss",
        img:'https://i.ibb.co/XS0fh7R/generica3.webp',
        categoria: "Citrico",
        precio: 39.99,
        descripcion: "Una explosión de notas cítricas refrescantes que te energizará durante todo el día."
      },
      {
        id: 14,
        nombre: "Perfume Oriental",
        marca: "Mystique",
        img:'https://i.ibb.co/PWX86RS/generica2.webp',
        categoria: "Oriental",
        precio: 89.99,
        descripcion: "Una fragancia oriental rica y seductora, ideal para ocasiones especiales."
      },
      {
        id: 15,
        nombre: "Perfume Dulce",
        marca: "Sweet Essence",
        img:'https://i.ibb.co/Q8PmLY1/producto1.webp',
        categoria: "Aromatico",
        precio: 59.99,
        descripcion: "Un perfume con notas dulces que te envolverá en un aura deliciosamente irresistible."
      },
      {
        id: 16,
        nombre: "Perfume Fresco",
        marca: "Aquatic Breeze",
        img:'https://i.ibb.co/nRGShH6/producto2.webp',
        categoria: "Citrico",
        precio: 49.99,
        descripcion: "Una fragancia fresca y revitalizante que evoca la brisa del océano en un día soleado."
      },
      {
        id: 17,
        nombre: "Perfume Frutal",
        marca: "Fruit Fusion",
        img:'https://i.ibb.co/XS0fh7R/generica3.webp',
        categoria: "Frutal",
        precio: 34.99,
        descripcion: "Una mezcla de aromas frutales que te transportará a un exuberante huerto en verano."
      },
      {
        id: 18,
        nombre: "Perfume Aromático",
        marca: "Aroma Bliss",
        img:'https://i.ibb.co/PWX86RS/generica2.webp',
        categoria: "Aromatico",
        precio: 44.99,
        descripcion: "Un perfume con notas aromáticas que te envolverá en una atmósfera relajante y reconfortante."
      },
      {
        id: 19,
        nombre: "Perfume Seductor",
        marca: "Sultry Scent",
        img:'https://i.ibb.co/Q8PmLY1/producto1.webp',
        categoria: "Amaderado",
        precio: 64.99,
        descripcion: "Una fragancia seductora con notas amaderadas que dejará una impresión duradera."
      },
      {
        id: 20,
        nombre: "Perfume Clásico",
        marca: "Timeless Elegance",
        img:'https://i.ibb.co/nRGShH6/producto2.webp',
        categoria: "Floral",
        precio: 79.99,
        descripcion: "Un perfume clásico con una mezcla de flores atemporales, perfecto para ocasiones especiales."
      },
      {
        id: 21,
        nombre: "Perfume Cítrico Vibrante",
        marca: "Citrus Burst",
        categoria: "Citrico",
        img:'https://i.ibb.co/XS0fh7R/generica3.webp',
        precio: 54.99,
        descripcion: "Una explosión vibrante de cítricos que te envolverá en una frescura revitalizante."
      },
      {
        id: 22,
        nombre: "Perfume Cítrico Dulce",
        marca: "Sweet Citrus",
        categoria: "Citrico",
        img:'https://i.ibb.co/PWX86RS/generica2.webp',
        precio: 49.99,
        descripcion: "Un perfume cítrico con toques dulces que crea una experiencia refrescante y deliciosa."
      },
      {
        id: 23,
        nombre: "Perfume Floral Romántico",
        marca: "Romantic Blooms",
        categoria: "Floral",
        img:'https://i.ibb.co/Q8PmLY1/producto1.webp',
        precio: 69.99,
        descripcion: "Una fragancia floral con un toque romántico, perfecta para momentos especiales."
      },
      {
        id: 24,
        nombre: "Perfume Floral Suave",
        marca: "Gentle Petals",
        categoria: "Floral",
        img:'https://i.ibb.co/nRGShH6/producto2.webp',
        precio: 59.99,
        descripcion: "Un perfume floral suave que emana elegancia y sofisticación."
      },
      {
        id: 25,
        nombre: "Perfume Amaderado Intenso",
        marca: "Bold Wood",
        categoria: "Amaderado",
        img:'https://i.ibb.co/XS0fh7R/generica3.webp',
        precio: 79.99,
        descripcion: "Una fragancia amaderada con una intensidad que deja una impresión duradera."
      },
      {
        id: 26,
        nombre: "Perfume Amaderado Fresco",
        marca: "Cool Timber",
        categoria: "Amaderado",
        img:'https://i.ibb.co/PWX86RS/generica2.webp',
        precio: 69.99,
        descripcion: "Un perfume amaderado con notas frescas que aportan vitalidad y energía."
      },
      {
        id: 27,
        nombre: "Perfume Oriental Sensual",
        marca: "Sensual Mystique",
        categoria: "Oriental",
        img:'https://i.ibb.co/Q8PmLY1/producto1.webp',
        precio: 99.99,
        descripcion: "Una fragancia oriental sensual que cautiva los sentidos con su misterio y calidez."
      },
      {
        id: 28,
        nombre: "Perfume Oriental Exótico",
        marca: "Exotic Elegance",
        categoria: "Oriental",
        img:'https://i.ibb.co/nRGShH6/producto2.webp',
        precio: 89.99,
        descripcion: "Un perfume oriental con toques exóticos que transportan a lugares lejanos."
      },
      {
        id: 29,
        nombre: "Perfume Aromático Relajante",
        marca: "Relaxing Aroma",
        categoria: "Aromatico",
        img:'https://i.ibb.co/XS0fh7R/generica3.webp',
        precio: 54.99,
        descripcion: "Un perfume aromático que crea una atmósfera relajante y tranquilizadora."
      },
      {
        id: 30,
        nombre: "Perfume Aromático Energizante",
        marca: "Energizing Scent",
        categoria: "Aromatico",
        img:'https://i.ibb.co/PWX86RS/generica2.webp',
        precio: 59.99,
        descripcion: "Una fragancia aromática que brinda energía y vitalidad con cada aplicación."
      }
  ];
  
export default perfumes