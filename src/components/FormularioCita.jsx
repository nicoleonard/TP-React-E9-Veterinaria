import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import ListaCards from './ListaCards.jsx';

const FormularioCita = () => {
const [nombreAnimal, setNombreAnimal] = useState(""); 
const [nombrePersona, setNombrePersona] = useState(""); 
const [fecha, setFecha] = useState(""); 
const [hora, setHora] = useState(""); 
const [sintomas, setSintomas] = useState(""); 
const [registroCitas, setRegistroCitas] = useState([])

    const manejadorSubmit = (event)=>{
        event.preventDefault();
        setRegistroCitas([...registroCitas, {nombreAnimal, nombrePersona, fecha, hora, sintomas}])
        event.target.reset();
    }
    return (
        <>
        <Form onSubmit={manejadorSubmit}>
            <Card>
                <CardHeader className='bg-secondary bg-gradient'>
                    <h6 className='text-light text-center pt-2'>Llenar el formulario para registrar una cita</h6>
                </CardHeader>
                <Card.Body>
                    <Form.Group className="mb-3" controlId="nombreAnimal">
                        <Form.Label>Nombre del paciente</Form.Label>
                        <Form.Control type="text" placeholder="Nombre del animal" value={nombreAnimal} onChange={(event)=> setNombreAnimal(event.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nombrePersona">
                        <Form.Label>Nombre del dueño</Form.Label>
                        <Form.Control type="text" placeholder="Nombre de la persona"  value={nombrePersona} onChange={(event)=> setNombrePersona(event.target.value)}/>
                    </Form.Group>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="fecha">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" value={fecha} onChange={(event)=> setFecha(event.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="hora">
                            <Form.Label>Hora</Form.Label>
                            <Form.Control type="time" value={hora} onChange={(event)=> setHora(event.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="sintomas">
                        <Form.Label>Sintomas</Form.Label>
                        <Form.Control type="text" placeholder="Sintomas que presenta el paciente" value={sintomas} onChange={(event)=> setSintomas(event.target.value)}/>
                    </Form.Group>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-end'>
                    <Button variant="outline-info" type="submit">
                        Agregar nueva cita
                    </Button>
                </Card.Footer>
            </Card>
        </Form>
        <ListaCards registroCitas={registroCitas}></ListaCards>
        </>
        
    );
};

export default FormularioCita;