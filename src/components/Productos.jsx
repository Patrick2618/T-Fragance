import React, { useContext } from 'react';
import { Contexto } from '../Context/Contexto';
import perfumes from '../datos'
import { NavLink } from 'react-router-dom';
import '../Estilos/Productos.css';

export const Productos = () => {
  const { genericaImages, marcas } = useContext(Contexto);
  const tipos = [
    'Cítricos', 'Florales', 'Amaderados', 'Orientales', 'Aromáticos'
  ]


  const filtrarMarca = () => {
    alert("Marca");
  };

  const filtrarTipo = () => {
    alert("Tipo")
  }

  const filtrarPrecio = () => {
    alert("Precio")
  }

  return (
    <div className='cont-productos'>
      <section className='productos-banner'>
        <img src={genericaImages[1]} alt='' />
        <div className='mascara'>
          <h2 className='title'>¿Qué marca buscas?</h2>
          <form onSubmit={filtrarMarca}>
            <input type="text" placeholder='Marca' />
            <input type='submit' value='Buscar' className='boton boton2' />
          </form>
        </div>
      </section>

      <section className='productos-principal'>
        <aside className='productos-lateral' id="stickySidebar">
          <h3>Filtrar por:</h3>
          <p className='productos-ya-filtrados'></p>

          <h5 
            data-bs-toggle="collapse"
            data-bs-target="#collapseMarca" 
            aria-expanded="false" 
            aria-controls="collapseMarca" 
          >
            Marca
          </h5>
          <div className="collapse" id="collapseMarca">
            {marcas.map((marca, index) => (
              <NavLink
                key={index}
                onClick={filtrarMarca}
                className={({ isActive }) => 
                  `producto-enlace header-enlace ${isActive ? "activado" : ""}`}
              >
                {marca}
              </NavLink>
            ))}
          </div>

          <div className='productos-division'/>

          <h5 
            data-bs-toggle="collapse"
            data-bs-target="#collapseTipos" 
            aria-expanded="false" 
            aria-controls="collapseTipos" 
          >
            Tipos
          </h5>
          <div className="collapse" id="collapseTipos">
            {tipos.map((tipo, index) => (
              <NavLink
                key={index}
                onClick={filtrarTipo}
                className={({ isActive }) => 
                  `header-enlace producto-enlace ${isActive ? "activado" : ""}`}
              >
                {tipo}
              </NavLink>
            ))}
          </div>

          <div className='productos-division'/>

          <h5>Precio</h5>
          <form onSubmit={filtrarPrecio}>
            <input type='number' placeholder='Min.' className='productos-precio'/>
            <input type='number' placeholder='Max.' className='productos-precio'/>
            <input type='submit' value='Actualizar' className='boton'/>
          </form>
        </aside>


        <div className='cont-main-productos'>
          {
            perfumes.map((perfume, index) => (
              <div key={index} className='productos-card'>
                <div className='card-img-productos'>
                  <img src={perfume.img} alt={perfume.nombre} />
                </div>
                <h5>{perfume.marca}</h5>
                <p className='card-descripcion'>{perfume.descripcion}</p>
                <h5 className='titles card-precio'><b>{perfume.precio}</b></h5>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
};
