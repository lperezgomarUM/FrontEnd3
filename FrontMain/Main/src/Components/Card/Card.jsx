import {useState} from 'react'
import './Card.css'

const Card = ({plato, add}) => {

  const [counter, setCounter] = useState(0)

  const sumar = () => {
    setCounter(counter+1)
  }
  const restar = () => {
    setCounter(counter-1)
  }
  console.log(counter)
  return (
    <div className='card'>
        <img src={plato.img} alt='' className='card-img'/>
        <h3>{plato.tipo}</h3>
        <h4>{plato.precio}</h4>

        <button onClick={restar}>-</button>
        <h3>{counter}</h3>
        <button onClick={sumar}>+</button>

        <br />
        <button onClick={() => add(plato)}>Añadir al carrito</button>
    </div>
  )
}

export default Card
