import { useLoaderData, useOutletContext } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/listado-guitarras'
import styles from '~/styles/guitarras.css'

export function meta() {
  return [
    {
      title: 'GuitarCO - Tienda de Guitarras',
      description: 'Encuentra las mejores guitarras para toda la familia'
    }
  ]
}
export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data
}
function Tienda() {
  const guitarras = useLoaderData()
  return (
    <main className='contenedor'>
      <ListadoGuitarras context={useOutletContext} guitarras={guitarras} />
    </main>
  )
}

export default Tienda
