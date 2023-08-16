import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return [
    {
      title: 'GuitarCO - Sobre Nosotros',
      description: 'Venta de guitarras, blog de música'
    }
  ]
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    { rel: 'preload', href: imagen, as: 'image' }
  ]
}
function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img src={imagen} alt='Imagen sobre nosostros' />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            obcaecati similique nostrum accusamus culpa debitis est maxime fuga
            deserunt, magni aperiam quod cum doloremque tempora sint? Cum
            obcaecati optio numquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            obcaecati similique nostrum accusamus culpa debitis est maxime fuga
            deserunt, magni aperiam quod cum doloremque tempora sint? Cum
            obcaecati optio numquam?
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
