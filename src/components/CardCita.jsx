import { Card, Image, Col, Row, ListGroup, Button } from "react-bootstrap";

const CardCita = ({citaRegistrada}) => {
    console.log(citaRegistrada)
    return (
        <Card className="px-0">
            <Card.Header>
                <Row>
                    <Col>
                        <Image src="https://media.istockphoto.com/id/1214084790/vector/black-cat-circle-symbol.jpg?s=170667a&w=0&k=20&c=UZ8hq6tSfSUsWEHTfN5xKmb1TvZmQ_3yoy1iY3BwZYU=" roundedCircle thumbnail></Image>
                    </Col>
                    <Col>
                        <Row>
                            <p className="fs-6"></p>
                        </Row>
                        <Row>
                            <p className="text-secondary fw-light">Nombre Dueño</p>
                        </Row>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Fecha: dd/mm/aaaa</ListGroup.Item>
                    <ListGroup.Item>Hora: hh:mm</ListGroup.Item>
                    <ListGroup.Item>Sintomas: descripcion de los sintomas</ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <Button variant="outline-danger" type="button">Borrar</Button>
            </Card.Footer>
        </Card>
    );
};

export default CardCita;