import React, { useState } from 'react'

const Imput = () => {
    const [name, setName] = useState('')

    const inputHandler = (e) => {
        console.log(e.target.value)
        let val = e.target.value
        setName(val)
    }
    const noVocales = (e) => {
        if ('aeiou'.includes(e.key.toLowerCase())){
            console.log(e.key)
            e.preventDefault()
        }
    }
    return (
        <div>
            <h1>Input</h1>
            <input type='text' placeholder='Ingrese su nombre' name='nombre-completo' onChange={inputHandler} />
            <p>{name}</p>
            <h2>No Vocales</h2>
            <input type='text' placeholder='No se permiten vocales' onChange={inputHandler} onKeyDown={noVocales} />
        </div>
    )
}

export default Imput
