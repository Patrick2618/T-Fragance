import React, { useState, useEffect, useContext } from 'react';
import { Contexto } from '../Context/Contexto';
import { Carrousel } from './carrousel';
import '../Estilos/Home.css';
import desarrollador from '../assets/desarrollador.webp'

export const Home = () => {

  const perfumes = [
    'Elegante y atemporal, Chanel No. 5 es un clásico de la perfumería. Su fragancia floral con toques de rosas y jazmines, combinados con notas cálidas de almizcle, crea una experiencia olfativa única y sofisticada.', 
    'Light Blue evoca la frescura de un día de verano italiano con su mezcla cítrica y afrutada. Notas de manzana, cedro y limón se entrelazan para crear una fragancia refrescante y vibrante, perfecta para un estilo de vida activo y lleno de energía.', 
    'Sensual y misterioso, Black Orchid de Tom Ford es una fragancia lujosa y cautivadora. Las notas ricas de orquídea negra, especias y chocolate negro se combinan para crear una experiencia olfativa intensa y seductora, perfecta para ocasiones especiales.', 
    ]
  const {nombre, descripcion, image, marcasUnicas, genericaImages, marcaCompleta} = useContext(Contexto)

  const soloVip = marcaCompleta.filter(marca => marca.vip == "true");

  return (
    <>
    <Carrousel/>

    <section className='cont-home'>

    <div className='home-evento'>
          <div className='img-evento'>
            <img src={image[14]} />
          </div>
          <div className='evento-texto'>
            <h3 className='titles'>¡Descubre la nueva fragancia! </h3>
            <p>
              {/* Esta exquisita combinación de notas florales y amaderadas ha sido cuidadosamente diseñada para llevar tu experiencia de fragancias a un nivel completamente nuevo. */}
              {descripcion[14]}  
            </p>
          </div>
      </div>

      <div className='home-mejores'>
        <h2 className='titles'>LAS MEJORES MARCAS</h2>
        {soloVip.map((marca, index) => (
          <div className={`mejores-img vip ${marca.nombre === "Gucci Gang" ? 'vvip' : ''}`} key={index}>
            <img src={marca.img} className="mejores-img__img" alt={`Producto ${index + 1}`} />
            <div className="mejores-img__titulo">
              <h2 className='titles'>{marca.nombre}</h2>
            </div>
          </div>
        ))}
      </div>


      <h2 className='home-titulo-fragancias titles'>LAS FRAGANCIAS MAS SOLICITADAS</h2>
      <div className='home-principales'>
        <div className='home-mascara'></div>
        {perfumes.map((perfume, index) => (
          <section className='principales-card' key={index}>
            <div className='principales-img'>
              <img src={genericaImages[index]} alt={`Perfume Mas vendido ${index + 1}`} />
            </div>
            <h3>{nombre[index]}</h3>
            <p>{perfume}</p>
          </section>
        ))}
      </div>

      <section className='home-desarrolladores'>
        <div className='desarrolladores-card'>
          <div className='desarrolladores-img'>
            <img src={desarrollador} alt='desarroollador 1' />
          </div>
          <h3 className='titles'>Daniel Camacho</h3>
          <p className='desarrolladores-texto titles'>El desarrollador, hábil constructor digital, fusiona ingenio y precisión en cada línea de código. En un mundo impulsado por la tecnología, este experto crea soluciones informáticas que trascienden, convirtiendo desafíos en oportunidades y códigos en experiencias excepcionales.</p>
        </div>
        <div className='desarrolladores-card'>
          <div className='desarrolladores-img'>
            <img src={desarrollador} alt='desarroollador 1' />
          </div>
          <h3 className='titles'>Francisco Castillo</h3>
          <p className='desarrolladores-texto titles'>Un desarrollador apasionado por la innovación y el código limpio. Siempre en busca de soluciones creativas, este profesional de la programación es experto en transformar ideas en aplicaciones robustas y eficientes que impulsan el progreso tecnológico.</p>
        </div>
      </section>

    </section>
    
    
    </>
  );
};
