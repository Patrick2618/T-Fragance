import React, { useState, useEffect } from 'react';
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
// import producto1 from './assets/producto1.webp';
// import producto2 from './assets/producto2.webp';
// import producto3 from './assets/producto3.webp';
// import producto4 from './assets/producto4.webp';
import {Global} from './helpers/Global'
import {GlobalM} from './helpers/GlobalM'
import {Peticion} from './helpers/Peticion'

function App() {
  const [perfume, setPerfume] = useState([])
  const [marcaCompleta, setMarcaCompleta] = useState([])
  const [image, setImage] = useState([])
  const [tipo, setTipo] = useState([])
  const [marca, setMarca] = useState([])
  const [nombre, setNombre] = useState([])
  const [precio, setPrecio] = useState([])
  const [descripcion, setDescripcion] = useState([])
  const [imagenesUnicas, setImagenesUnicas] = useState([]);
  const [marcasUnicas, setMarcasUnicas] = useState([]);
  const [tipoUnicas, setTipoUnicas] = useState([]);

  const [ejecuciones, setEjecuciones] = useState(0);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        await conseguirPerfumes();
        conseguirImages();
        conseguirTipos();
        conseguirDescripcion();
        conseguirNombre();
        conseguirPrecio();
        conseguirMarcas();
        marcasCompletas();
        setEjecuciones(prevEjecuciones => prevEjecuciones + 1);
      } catch (error) {
        console.error("Error en useEffect:", error);
      }
    };

    // Ejecutar obtenerDatos solo en las primeras 3 ejecuciones
    if (ejecuciones < 3) {
      obtenerDatos();
      }
    }, [ejecuciones]);
  

  const conseguirPerfumes = async() => {
    try {
      // En este caso no se envía el parámetro de datos a guardar
      alert(Global.url + "productos", "GET")
      const { datos, cargando } = await Peticion(Global.url + "productos", "GET");
  
      if (datos.status === "success") {
        setPerfume(datos.productos);
        console.log(datos.productos);
      } else {
        // Manejar el caso cuando datos.status no es "success"
        console.error("Error en la respuesta:", datos);
      }
    } catch (error) {
      // Manejar errores en la llamada asíncrona
      console.error("Error al obtener perfumes:", error);
    }
  }

  const conseguirImages = () => {
    let tiposObtenidos = algoritmo("img");
    setImage(tiposObtenidos);
    
    // Llamar a filtrar después de que el estado se haya actualizado
    setImagenesUnicas(filtrar(tiposObtenidos));
  }

  const conseguirMarcas = () => {
    let tiposObtenidos = algoritmo("marca");
    setMarca(tiposObtenidos);
    
    // Llamar a filtrar después de que el estado se haya actualizado
    setMarcasUnicas(filtrar(tiposObtenidos));
  }
  
  const conseguirTipos = () => {
    let tiposObtenidos = algoritmo("categoria");
    setTipo(tiposObtenidos);
    
    // Llamar a filtrar después de que el estado se haya actualizado
    setTipoUnicas(filtrar(tiposObtenidos));
  }

  const conseguirDescripcion = () => {
    let tiposObtenidos = algoritmo("descripcion");
    setDescripcion(tiposObtenidos);
  }

  const conseguirNombre = () => {
    let tiposObtenidos = algoritmo("nombre");
    setNombre(tiposObtenidos);
  }

  const conseguirPrecio = () => {
    let tiposObtenidos = algoritmo("precio");
    setPrecio(tiposObtenidos);
  }

  const marcasCompletas = async() => {
    try {
      // En este caso no se envía el parámetro de datos a guardar
      const { datos, cargando } = await Peticion(GlobalM.url + "marcas", "GET");
  
      if (datos.status === "success") {
        setMarcaCompleta(datos.marcas);
        console.log(datos.marcas);
      } else {
        // Manejar el caso cuando datos.status no es "success"
        console.error("Error en la respuesta:", datos);
      }
    } catch (error) {
      // Manejar errores en la llamada asíncrona
      console.error("Error al obtener perfumes:", error);
    }
  }


  const algoritmo = (nombre) => {
    const resultados = [];

    perfume.forEach(objeto => {
      Object.keys(objeto).forEach(key => {
          if (key === nombre) {
              resultados.push(objeto[key]);
          }

        });
    });

    return resultados;
  }


  function filtrar(dato) {
    const valoresUnicos = [];
  
    dato.forEach(elemento => {
      if (!valoresUnicos.includes(elemento)) {
        valoresUnicos.push(elemento);
      }
    });

    return valoresUnicos;
  }
  

  
  // Array de imágenes
  const genericaImages = [
    generica1, generica2, generica3, generica4, generica5, generica6, generica7, generica8
  ];
  // const productos = [producto1, producto2, producto3, producto4]

  // const marcas = ['Elegance', 'Luxury Scents', 'Citrus Bliss', 
  // 'Mystique', 'Sweet Essence', 'Aquatic Breeze', 'Fruit Fusion', 
  // 'Aroma Bliss', 'Sultry Scent', 'Timeless Elegance']

  // const tipos = ['Citrico', 'Floral', 'Amaderado', 'Oriental', 'Aromatico'];


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
      <Contexto.Provider value={{ 
        nombre, descripcion, image, precio, tipo, marca, tipoUnicas, genericaImages, 
        titulos, imagenesUnicas, marcasUnicas, marcaCompleta, perfume
      }}>
        <MainRouter />
      </Contexto.Provider>
    </>
  );
}

export default App;