import React from 'react';
import './App.css';
import { MainRouter } from './Router/MainRouter';
import { Contexto } from './Context/Contexto';
import generica1 from './assets/generica1.webp';
import generica2 from './assets/generica2.webp';
import generica3 from './assets/generica3.webp';
import generica4 from './assets/generica4.webp';
import generica5 from './assets/generica5.webp';
import generica6 from './assets/generica6.webp';
import generica7 from './assets/generica7.webp';
import generica8 from './assets/generica8.webp';
import producto1 from './assets/producto1.webp';
import producto2 from './assets/producto2.webp';
import producto3 from './assets/producto3.webp';
import producto4 from './assets/producto4.webp';

function App() {
  // Array de imágenes
  const genericaImages = [
    generica1, generica2, generica3, generica4, generica5, generica6, generica7, generica8
  ];
  const productos = [producto1, producto2, producto3, producto4]

  const marcas = ['Elegance', 'Luxury Scents', 'Citrus Bliss', 
  'Mystique', 'Sweet Essence', 'Aquatic Breeze', 'Fruit Fusion', 
  'Aroma Bliss', 'Sultry Scent', 'Timeless Elegance']

  const tipos = ['Citrico', 'Floral', 'Amaderado', 'Oriental', 'Aromatico'];


  // Array de títulos correspondientes a cada imagen
  const titulos = [
    "Cautiva con tu esencia.",
    "Sé inolvidable, elige un aroma que hable por ti.",
    "Descubre el arte de seducir con cada gota de perfume.",
    "El perfume es la firma invisible de quien realmente eres."
  ];

  return (
    <>
      {/* Se utiliza el componente Provider del contexto para proveer las imágenes y títulos */}
      <Contexto.Provider value={{ tipos, genericaImages, titulos, productos, marcas }}>
        <MainRouter />
      </Contexto.Provider>
    </>
  );
}

export default App;