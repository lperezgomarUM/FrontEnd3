import React from 'react'
import { titleStyles } from './Navbar.styles'


const Navbar = () => {
  console.log('Se renderizó el navbar')
    const titulos = ['Home', 'Shop', 'Contact', 'About']

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        {titulos.map((titulo, indice) => <h4 style={titleStyles} key={indice}>{titulo}</h4>)}
    </div>
  )
}

export default Navbar