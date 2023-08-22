import { useState } from 'react'
import { useLoaderData, useOutletContext } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export async function loader({ params }) {
  const { guitarraUrl } = params

  const guitarra = await getGuitarra(guitarraUrl)

  if (guitarra.data.length === 0)
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra No Encontrada'
    })

  return guitarra
}
export function meta({ data }) {
  if (!data) {
    return [
      { title: 'GuitarCO - Guitarra No Encontrada' },
      { description: 'Guitarras, venta de guitarras, guitarra no encontrada' }
    ]
  }
  return [
    {
      title: `GuitarCO - ${data.data[0].attributes.nombre}`,
      description: `Guitarras, venta de guitarras, guitarra de ${data.data[0].attributes.nombre}`
    }
  ]
}
export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

function Guitarra() {
  const { agregarCarrito } = useOutletContext()

  const [cantidad, setCantidad] = useState(1)
  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes
  const handleSubmit = (e) => {
    e.preventDefault()
    if (cantidad < 1) {
      alert('Debes seleccionar una cantidad')
      return
    }
    const guitarraSelect = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSelect)
  }
  return (
    <main className='contenedor guitarra'>
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>${precio}</p>
        <form onSubmit={handleSubmit} className='formulario'>
          <label htmlFor='cantidad'>Cantidad</label>
          <select onChange={(e) => setCantidad(+e.target.value)} id='cantidad'>
            <option value='0'>--Seleccione--</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>

          <input type='submit' value='Agregar al carrito' />
        </form>
      </div>
    </main>
  )
}

export default Guitarra
