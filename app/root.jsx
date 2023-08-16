import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
  useRouteError,
  isRouteErrorResponse
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
  return [
    { charset: 'utf-8' },
    { title: 'GuitarCO - Remix' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' }
  ]
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&family=Quicksand:wght@500&family=Rubik+Dirt&family=Share+Tech+Mono&display=swap'
    },
    { rel: 'stylesheet', href: styles }
  ]
}
export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang='es'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
/** MANEJO DE ERRORES **/
export function ErrorBoundary() {
  const error = useRouteError()

  console.log(error)

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <h1 className='error-title'>{error.status}</h1>
        <p className='error'>{error.statusText}</p>
        <Link to='/' className='error-enlace'>
          Tal vez quieras volver a la página principal
        </Link>
      </Document>
    )
  } else {
    return (
      <Document>
        <p className='error'>Otro tipo de error</p>
        <Link to='/' className='error-enlace'>
          Tal vez quieras volver a la página principal
        </Link>
      </Document>
    )
  }
}
