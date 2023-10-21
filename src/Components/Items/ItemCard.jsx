import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ItemCard = ({item}) => {
    return (
        <Card style={{ width: '18rem' , marginTop: "5em", marginRight: "5em"}}>
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Img variant="top" src= {item.img}/>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Precio {item.price}</ListGroup.Item>
                <ListGroup.Item>Stock {item.quantity}</ListGroup.Item>
            </ListGroup>
            <Link to={`/Detail/${item.id}`}>
                <Button variant="primary">Ver Detalle</Button>
            </Link>
        </Card.Body>
        </Card>
    );
}