import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const CartDetail = () => {
    const { cart, removeItem, clear } = useContext (CartContext)
    const [dataComprador, setDataComprador] = useState({name: "",email:""});
    const navigate = useNavigate()
    function borrar(){
        clear()
    }
    const addToCart = () => {
        console.log(dataComprador)
        let reduce = cart.reduce((acumulador, actual) => acumulador + actual.preciototal, 0);
        const comprar = {
            comprador:{
                id: 1,
                name: dataComprador.name,
                email: dataComprador.email
            },
            items: cart,
            date: new Date(),
            total: reduce
        };
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        borrar()
        addDoc(orderCollection, comprar)
            .then(res => navigate(`/compra/${res.id}`))
            .catch(err => console.log(err))
    }
    const datos = (e) => {
        const {target} = e;
        if (target.type === "email"){
            setDataComprador({...dataComprador, email: target.value})
        } else setDataComprador({...dataComprador, name: target.value})
    } 
    const carritoVacio = () => {
        if (cart.length < 1){
            return(<div>
                <p style={{ fontSize: '2em', marginTop: '2em', textAlign: 'center' }}>Por favor volver al apartado de Productos para comprar una bebida, gracias!</p>
            </div>)
        }
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '2em' }}>Carro de Compras</h1>
            {
                carritoVacio()
            }
            <div style={{display: 'flex'}}>
            {
                cart.map(prod => (
                    <Card key={prod.item.id} style={{ width: '18rem', marginTop: '2em', marginLeft: '2em' }}>
                    <Card.Img variant="top" src={prod.item.img}/>
                    <Card.Body>
                        <Card.Title>{prod.item.name}</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Precio {prod.item.price}</ListGroup.Item>
                            <ListGroup.Item>Cantidad {prod.cantidad}</ListGroup.Item>
                        </ListGroup>
                        <div>
                            <Button onClick={() => removeItem(prod.item.id)} variant="primary">Eliminar</Button>                        </div>
                    </Card.Body>
                    </Card>
                ))
            }
            </div>
            <div>
                {cart.length > 0 &&
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{marginTop: '2em', marginLeft: '2em', marginRight: '60em' }}>
                        <Form.Label >Nombre y Apellido</Form.Label>
                        <Form.Control onChange={datos} type="text" placeholder="Nombre Completo"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{marginTop: '2em', marginLeft: '2em', marginRight: '60em' }}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={datos} type="email" placeholder="name@example.com"/>
                    </Form.Group>
                </Form>}
            </div>
            <div>
                {
                    cart.length > 0 &&
                    <Button onClick={addToCart} style={{marginTop: '2em', marginLeft: '2em' }}>Crear Orden</Button>
                }
                {
                    cart.length > 0 &&
                    <Button onClick={clear} style={{marginTop: '2em', marginLeft: '2em' }}>Borrar Orden</Button>
                }
            </div>
            
        </div>
    )
}

export default CartDetail