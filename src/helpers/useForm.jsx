import React, { useState } from 'react';


export const useForm = (objetoInicial = {}) => {

    const [formulario, setFormulario] = useState(objetoInicial)

    const serialFormulario = (formulario) => {
        const formData = new FormData(formulario)
        const objetoCompleto = {}

        for(let [name, value] of formData){
            objetoCompleto[name] = value
        }
        return objetoCompleto
    }

    const envio = (e) => {
        e.preventDefault()
        let curso = serialFormulario(e.target)
        setFormulario(curso)
    }

    const cambiado = ({target}) => {
        const {name, value} = target
        setFormulario({
            ...formulario,
            [name]: value
        })
    }


  return {
    formulario,
    envio,
    cambiado
  }
}
