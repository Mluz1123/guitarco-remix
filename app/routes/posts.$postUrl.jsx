import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { formatearFecha } from '~/utils/helpers'
import styles from '~/styles/blog.css'

export function meta({ data }) {
  if (!data) {
    return [
      { title: 'GuitarCO - Entrada no encontrada' },
      { description: 'Guitarras, venta de guitarras, entrada no encontrada' }
    ]
  }
  return [
    {
      title: `GuitarCO - ${data.data[0].attributes.titulo}`,
      description: `Guitarras, venta de guitarras, guitarra de ${data.data[0].attributes.titulo}`
    }
  ]
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}
export async function loader({ params }) {
  const { postUrl } = params
  const post = await getPost(postUrl)

  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada no encontrada'
    })
  }
  return post
}
function Post() {
  const post = useLoaderData()
  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes
  return (
    <article className='contenedor post mt-3'>
      <img
        className='imagen'
        src={imagen?.data?.attributes?.url}
        alt={`imagen blog ${titulo}`}
      />
      <div className='contenido'>
        <h3>{titulo}</h3>
        <p className='fecha'>{formatearFecha(publishedAt)}</p>
        <p className='texto'>{contenido}</p>
      </div>
    </article>
  )
}

export default Post
