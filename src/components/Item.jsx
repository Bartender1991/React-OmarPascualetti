import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({ prod }) {
    return (
        <Card style={{ width: '15rem', height: '22rem' }}> {/* ancho y alto fijos */}
            <Card.Img
                variant="top"
                src={prod.img}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>${prod.price}</Card.Text>

                {/* El margin-top-auto empuja el botón al fondo */}
                {/* <Button variant="primary" className="mt-auto">Ver más</Button> */}
                {/* <Link className='btn btn-primary mt-auto' to={'/item/' + prod.id} >Ver más</Link> */}
                <Link className='btn btn-primary mt-auto' to={`/item/${prod.id}`} >Ver más</Link>
            </Card.Body>
        </Card>
    );
}

export default Item;