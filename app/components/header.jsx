import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'
function Header() {
  return (
    <header className='header'>
      <div className='contenedor barra'>
        <Link to='/'>
          <img src={logo} alt='Imagen Logo' className='logo' />
        </Link>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
