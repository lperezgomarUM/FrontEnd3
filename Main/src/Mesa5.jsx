import { useState } from 'react'

const Mesa5 = () => {

    const [lista, setLista] = useState([])

    const agregar = (item) => {
        setLista([...lista, item])
    }

  return (
    <div>
        <button onClick={() => agregar('🐶')}>🐶</button>
        <button onClick={() => agregar('🐱')}>🐱</button>
        <button onClick={() => agregar('🐨')}>🐨</button>

        {lista.map((item, index) =>  <li key={index}>Se ha añadido {item} a la lista</li>)}
       
    </div>
  )
}

export default Mesa5