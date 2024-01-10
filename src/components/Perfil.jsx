import React from 'react'
import desarrollador from '../assets/desarrollador.webp'
import '../Estilos/Perfil.css'

export const Perfil = () => {
  return (
    <>
      <section className='cont-perfil'>
        <div className='perfil-nombre'>
          <picture>
            <img src={desarrollador} alt='Imagen de perfil'/>
          </picture>
          <h1>Jose Efrain Gonzalo Paco</h1>
        </div>
        <div className='perfil-datos'>
          <input type='text' placeholder='Nombre' name='nombre'/>
          <input type='text' placeholder='Apellido paterno' name='apellidop'/>
          <input type='text' placeholder='Apellido materno' name='apellidom'/>
          <div>
            <input type='text' placeholder='Codigo postal' name='codigop'/>
            <select id="miSelect" name="opciones">
              <option disabled >Sexo</option>
              <option value="h">Hombre</option>
              <option value="m">Mujer</option>
              <option value="nobin">No binario</option>
            </select>
          </div>
        </div>
        <div className='perfil-actualizar'>
          <button className='boton btn2' type='button' name='logout'>Cerrar Sesión</button>
          <button className='boton btn2' type='button' name='actualizar'>Actualizar</button>
        </div>
      </section>

      <section className='perfil-botones'>
        <button className='boton btn2 btn3' type='button' name='privacidad'>Código de Privacidad</button>
        <button className='boton btn2 btn3' type='button' name='tema'>Tema: Claro</button>
        <button className='boton btn2 btn3' type='button' name='info'>Información extra</button>
        <button className='boton btn2 btn3' type='button' name='funciones'>Nuevas funciones</button>
      </section>
    </>
  )
}
