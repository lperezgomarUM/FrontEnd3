import React from 'react'
import imgpizza from '../assets/pizza_de_mozzarella.jpg'
import Card from '../Components/Card/Card'
import styles from  './Home.module.css'

const Home = ({add}) => {
  console.log('Se renderizó el home')
    let pizzas = [
        { id: 1, tipo: 'Muzzarella', precio: '$1200', img: imgpizza },
        { id: 2, tipo: 'Fugazza', precio: '$1250', img: 'https://cdn0.recetasgratis.net/es/posts/7/0/2/pizza_fugazza_7207_600.webp' },
        { id: 3, tipo: 'Napolitana', precio: '$1350', img: 'https://img-global.cpcdn.com/recipes/5fb5d55852fa8d06/640x640sq70/photo.webp' },
        { id: 4, tipo: 'Rucula y crudo', precio: '$1500', img: 'https://pizzasargentinas.com/wp-content/uploads/2020/12/rucula-y-jamon-crudo.jpg' },
        { id: 5, tipo: 'Especial', precio: '$1400', img: 'https://saboresmendoza.com/wp-content/uploads/2019/09/pizza.jpg' },
    ]

  return (
    <div className={styles.home}>
        {pizzas.map((pizza) => {
            return <Card plato={pizza} add={add} key={pizza.id}/>
        })}
    </div>
  )
}

export default Home