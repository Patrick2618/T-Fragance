import React, { useState, useContext, useEffect } from 'react';
import { Contexto } from '../Context/Contexto';
import '../Estilos/Carrousel.css';

export const Carrousel = () => {
  // Se utiliza useContext para acceder a los datos del contexto (genericaImages y titulos)
  const { genericaImages, titulos } = useContext(Contexto);
  const imagenes_array = genericaImages.slice(0,4)

  // Estado para mantener el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Función para manejar el cambio a la siguiente imagen
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes_array.length);
  };

  // Función para manejar el cambio a la imagen anterior
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagenes_array.length) % imagenes_array.length
    );
  };

  // Efecto para cambiar automáticamente de imagen cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      onTouchStart={(e) => {
        const touchStartX = e.changedTouches[0].clientX;
        document.addEventListener(
          'touchend',
          (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            if (touchEndX < touchStartX) {
              handleNext();
            } else if (touchEndX > touchStartX) {
              handlePrev();
            }
          },
          { once: true }
        );
      }}
    >
      {/* Indicadores de la posición actual en el carousel */}
      <div className="carousel-indicators">
        {imagenes_array.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === currentIndex ? 'active' : ''}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      {/* Contenedor para las imágenes y títulos */}
      <div className="carousel-inner">
        {imagenes_array.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            {/* Imagen del carousel */}
            <img src={image} className={`img-carousel imagen-carousel${index+1}`} alt={`Generica ${index + 1}`} />
            {/* Capa overlay con el título centrado */}
            <div className="overlay">
              <h2 className='titles'>{titulos[index]}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};