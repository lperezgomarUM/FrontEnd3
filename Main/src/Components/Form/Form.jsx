import { useState } from 'react'

const Form = () => {

    // Guardo todo en un estado único
    const [cliente, setCliente] = useState({
        nombre: '',
        direccion: '',
    })

    // const [nombre, setNombre] = useState('')
    // const [direccion, setDireccion] = useState('')

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const numberRegex = /[0-9]/g
        console.log(cliente.direccion.match(numberRegex))
        if(cliente.nombre.length > 3 && cliente.direccion.match(numberRegex)) {
            setShow(true)
            setError(false)
        } else {
            setShow(false)
            setError(true)
        }
    }

    const handleChange = (event) => setCliente({...cliente, nombre: event.target.value})
    console.log(cliente)
  return (
    <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" onChange={handleChange}/>
        <label>Dirección: </label>
        <input type="text" onChange={(event) => setCliente({...cliente, direccion: event.target.value})}/>
        <button>Mandar pedido</button>
    
        {error && <h6>Por favor coloque bien la información</h6>}

        {show ? <>
            <h4>Gracias {cliente.nombre}!</h4>
            <h4>Te estaremos enviando tu pedido a {cliente.direccion}</h4>
        </>
        : null
        }
        {/* {condicion ? true : false} */}
       {/* Libreria para el manejo de formularios: Formik y yup - react hook form - zod*/}
    </form>
  )
}

export default Form