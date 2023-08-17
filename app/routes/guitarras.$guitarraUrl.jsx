import { useLoaderData } from '@remix-run/react'
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
  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes
  return (
    <main className='contenedor guitarra'>
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
        srcset=''
      />
      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>${precio}</p>
      </div>
    </main>
  )
}

export default Guitarra
