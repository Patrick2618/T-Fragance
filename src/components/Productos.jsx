import React, { useContext, useEffect, useRef, useState } from 'react';
import { Contexto } from '../Context/Contexto';
// import perfumesData from '../datos';
import { NavLink } from 'react-router-dom';
import '../Estilos/Productos.css';
 
export const Productos = () => {
  const { genericaImages, perfume, marcasUnicas, tipoUnicas} = useContext(Contexto);
  const [filtrado, setFiltrado] = useState('');
  const [cont, setCont] = useState('');
  const [textoPrecio, setTextoPrecio] = useState('');
  const [perfumeFiltrado, setPerfumeFiltrado] = useState([]);
  const [filtradoVisible, setFiltradoVisible] = useState(true);
  


  const filtrarPerfumes = (filtro) => {
    const filtroLowerCase = filtro.toLowerCase().trim();

    const perfumesFiltrados = filtroLowerCase
      ? perfume.filter(perfume =>
          (perfume.marca.toLowerCase().includes(filtroLowerCase) ||
          perfume.categoria.toLowerCase().includes(filtroLowerCase))
        )
      : perfume;
  
    setPerfumeFiltrado(perfumesFiltrados);
  };


  useEffect(() => {
    filtrarPerfumes(filtrado);
    setFiltradoVisible(true)
  }, [filtrado, perfume, cont]);


  const handleBuscar = (filtro) => {
    setFiltrado(filtro);
  };

  const handleFiltrarPrecio = (e, min, max) => {
    e.preventDefault();
    if(min !== '' && max !== '' && min !== 0 && max !== 0){
      
      let s = 'Min: '+min+', Max: '+max
      setTextoPrecio(s)
      
      const preciosFiltrados = perfume.filter(perfume =>
        perfume.precio >= min && perfume.precio <= max
      );
      setPerfumeFiltrado(preciosFiltrados)
    }else{
      let elementosPrecio = document.getElementsByClassName("productos-precio");
      for (let i = 0; i < elementosPrecio.length; i++) {
        elementosPrecio[i].style.border = '2px solid #5e2129';
      }
    }
};


  return (
    <div className='cont-productos'>
      <section className='productos-banner'>
        <img src={genericaImages[1]} alt='' />
        <div className='mascara'>
          <h2 className='title'>¿Qué marca buscas?</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleBuscar(e.target[0].value); }}>
            <input type="text" placeholder='Marca' id='productos-buscar'/>
            <input type='submit' value='Buscar' className='boton boton2'/>
          </form>
        </div>
      </section>

      <section className='productos-principal'>
        <aside className='productos-lateral'>
          <h3>Filtrar por:</h3>
          {filtrado != '' &&
            <p className={`productos-ya-filtrados ${filtradoVisible  ? 'faded-in' : ''}`}
            onClick={e => {
              e.preventDefault();
              document.getElementById("productos-buscar").value = ''
              setFiltrado('')
              setFiltradoVisible(false);
            }}>{filtrado}</p>
          }
          {textoPrecio != '' &&
            <p className={`productos-ya-filtrados ${filtradoVisible  ? 'faded-in' : ''}`}
            onClick={e => {
              e.preventDefault();
              let elementosPrecio = document.getElementsByClassName("productos-precio");
              for (let i = 0; i < elementosPrecio.length; i++) {
                elementosPrecio[i].value = '';
                elementosPrecio[i].style.border = '';
              }
              setCont(cont+1)
              setFiltradoVisible(false);
              setTextoPrecio('')
            }}>{textoPrecio}</p>
          }

          <h5
            data-bs-toggle="collapse"
            data-bs-target="#collapseMarca"
            aria-expanded="false"
            aria-controls="collapseMarca"
          >
            Marca
          </h5>
          <div className="collapse" id="collapseMarca">
            {marcasUnicas.map((marca, index) => (
              <NavLink
                key={index}
                onClick={() => handleBuscar(marca)}
                className={({ isActive }) =>
                  `producto-enlace header-enlace ${isActive ? "activado" : ""}`}
              >
                {marca}
              </NavLink>
            ))}
          </div>

          <div className='productos-division' />

          <h5
            data-bs-toggle="collapse"
            data-bs-target="#collapseTipos"
            aria-expanded="false"
            aria-controls="collapseTipos"
          >
            Tipos
          </h5>
          <div className="collapse" id="collapseTipos">
            {tipoUnicas.map((tipo, index) => (
              <NavLink
                key={index}
                onClick={() => handleBuscar(tipo)}
                className={({ isActive }) =>
                  `header-enlace producto-enlace ${isActive ? "activado" : ""}`}
              >
                {tipo}
              </NavLink>
            ))}
          </div>

          <div className='productos-division' />

          <h5>Precio</h5>
          <form onSubmit={(e) => handleFiltrarPrecio(e, e.target[0].value, e.target[1].value)}>
            <input type='number' name='min' placeholder='Min.' className='productos-precio' />
            <input type='number' name='max' placeholder='Max.' className='productos-precio' />
            <input type='submit' value='Actualizar' className='boton' />
          </form>
        </aside>

        <div className='cont-main-productos'>
          {perfumeFiltrado.map((perfume, index) => (
            <div key={index} className='productos-card'>
              <div className='card-img-productos'>
                <img src={perfume.img} alt={perfume.nombre} />
              </div>
              <h5>{perfume.marca}</h5>
              <p className='card-descripcion'>{perfume.descripcion}</p>
              <h5 className='titles card-precio'><b>{perfume.precio}</b></h5>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
