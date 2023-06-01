import { Container } from 'react-bootstrap'
import './App.css'
import FormularioCita from './components/FormularioCita'

function App() {
  return (
    <>
      <main className='w-100 m-0'>
        <Container className='text-start text-dark-emphasis py-5'>
          <h1>Administrador de pacientes de veterinaria</h1>
          <hr />
        </Container>

        <Container>
          <FormularioCita/>
        </Container>
        <Container>

        </Container>
      </main>
      <footer className='bg-dark bg-gradient text-center text-light py-5 w-100'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
