import React from 'react'
import '../Estilos/Header.css'
import {NavLink} from 'react-router-dom'



export const Header = () => {
  return (
    <div className='header'>
      <picture className='header-logo'>
        {/* <img src='' alt='Logo' /> */}Logo
      </picture>
      <section className='header-links'>
        <ul>
          <li>
            <NavLink className='titles header-enlace' 
            activeClassName='active' to='/productos'
            >Productos</NavLink>
          </li>
          <li>
            <NavLink className='enlace titles header-enlace' 
            activeClassName='active' to='/home'
            >Inicio</NavLink>
          </li>
          <li>
            <NavLink className='enlace titles header-enlace' 
            activeClassName='active' to='/contacto'
            >Contacto</NavLink>
          </li>
          <li>
            <NavLink className='enlace titles header-enlace' 
            activeClassName='active' to='/perfil'
            >Perfil</NavLink>
          </li>
        </ul>
      </section>
      <div class="search-container">
        <input type="text" className="search-input" placeholder="Buscador"/>
        <button class="search-button"><i class="bi bi-search"></i></button>
      </div>
    </div>
  )
}
