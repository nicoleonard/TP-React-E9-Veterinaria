import { Container, Col, Row } from 'react-bootstrap'
import './App.css'
import FormularioCita from './components/FormularioCita.jsx'

function App() {
  return (
    <>
      <main className='w-100 m-0'>
        <Container className='text-start text-dark-emphasis py-5'>
          <h1>Administrador de pacientes de veterinaria</h1>
          <hr />
        </Container>

        <Container className='py-3'>
          <FormularioCita/>
        </Container>

      </main>
      <footer className='bg-dark bg-gradient text-center text-light py-5 w-100'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
