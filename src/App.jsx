import { useState } from 'react'
import './App.css'
import { MainRouter } from './Router/MainRouter'
import { Contexto } from './Context/Contexto'

function App() {

  return (
    <>
      {/* Siempre que se quiera poner la etiqueta del Context debe tener .Provider */}
      <Contexto.Provider>
        <MainRouter/>
      </Contexto.Provider>
    </>
  )
}

export default App
