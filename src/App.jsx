import { Container, Col, Row } from 'react-bootstrap'
import './App.css'
import FormularioCita from './components/FormularioCita.jsx'
import CardCita from './components/CardCita.jsx'


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
        <Container className='py-3'>
          <Row className='mx-0' xs={1} sm={2} md={3} lg={4} xl={5}>
            <CardCita></CardCita>
          </Row>

        </Container>
      </main>
      <footer className='bg-dark bg-gradient text-center text-light py-5 w-100'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
