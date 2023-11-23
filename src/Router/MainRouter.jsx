import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Home} from '../components/Home'
import {Perfume} from '../components/Perfume'
import {Contacto} from '../components/Contacto'
import {Productos} from '../components/Productos'
import {Perfil} from '../components/Perfil'
import {Error} from '../components/Error'
import {Header} from '../components/Header'


export const MainRouter = () => {

  

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/perfume' element={<Perfume/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}
