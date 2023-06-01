import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const FormularioCita = () => {
    return (
        <Form>
            <Card>
                <CardHeader className='bg-secondary bg-gradient'>
                    <h6 className='text-light text-center pt-2'>Llenar el formulario para registrar una cita</h6>
                </CardHeader>
                <Card.Body>
                    <Form.Group className="mb-3" controlId="nombreAnimal">
                        <Form.Label>Nombre del paciente</Form.Label>
                        <Form.Control type="text" placeholder="Nombre del animal" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nombrePersona">
                        <Form.Label>Nombre del dueño</Form.Label>
                        <Form.Control type="text" placeholder="Nombre de la persona" />
                    </Form.Group>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="fecha">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="hora">
                            <Form.Label>Hora</Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>
                    </Row>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-end'>
                    <Button variant="outline-info" type="submit">
                        Agregar nueva cita
                    </Button>
                </Card.Footer>
            </Card>
        </Form>
    );
};

export default FormularioCita;