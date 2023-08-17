import { useLoaderData } from '@remix-run/react'
import { getPosts } from '~/models/posts.server'
import styles from '~/styles/blog.css'
import ListadoPost from '~/components/listado-posts'

export function meta() {
  return [
    { title: 'GuitarCO - Nuestro Blog' },
    { description: 'GuirarCO - Blog de música y venta de guitarras' }
  ]
}
export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}
function Blog() {
  const posts = useLoaderData()
  return (
    <main className='contenedor'>
      <ListadoPost posts={posts} />
    </main>
  )
}

export default Blog
