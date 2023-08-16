import Navegacion from './navegacion'

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <div className='contenedor contenido'>
          <Navegacion />
          <p className='copyright'>
            Todos los derechos reservados &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
