import { Row } from "react-bootstrap";
import CardCita from "./CardCita.jsx";

const ListaCards = ({registroCitas}) => {
    return (
        <>  
            <Row className='mx-0' xs={1} sm={2} md={3} lg={4} xl={5}>
                {registroCitas.map(({cita})=><CardCita citaRegistrada={cita}></CardCita>)}
            </Row>
        </>
    );
};

export default ListaCards;