import {doc, getDoc, getFirestore} from "firebase/firestore"
import React, { useReducer } from "react";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../CompUniversal/Loading";
import Accordion from 'react-bootstrap/Accordion';

export const Compra = () => {
    const {id} = useParams();
    const [products, setProducts] = useState ([])
    const [itemName, setItemName] = useState ([])
    const [push, setPush] = useState ([])
    const [cant, setCant] = useState (0)
    const [costo, setCosto] = useState (0)
    const [any, forceUpdate] = useReducer(num => num + 1, 0);
    function handleChange(){
    forceUpdate();
    setPush (products.items.map(result => {return ( setCosto(result.item.price), setCant(result.cantidad), setItemName(result.item.name))}));
    console.log("cantidad" + costo)
    console.log("itemname" + itemName)
    }
    console.log(products)
    useEffect(() => {
        const db = getFirestore();
        const itemref = doc(db, "orders", id)
        getDoc(itemref)
        .then(snapshot => {
            if (snapshot.exists()){
                setProducts({id: snapshot.id, ...snapshot.data()})
                if (products.length === 0){
                    console.log("No hay Productos")
                    }
                else return (
                    console.log("llegue")
                    )
                
            }
            else return (console.log("no se encontro la orden"))})
        .catch((error) => console.log(error))
    },[id])
    return (
        <Row>
                {products.length === 0 ?(
                <Loading/>)  : 
                (<div>
                    <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Comprador de la Orden: {id}</Accordion.Header>
                    <Accordion.Body>
                        <li> Nombre: {products.comprador.name}</li>
                        <li> Email: {products.comprador.email}</li>
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={() => handleChange()}> Datos de la Orden: {id}</Accordion.Header>
                    <Accordion.Body>
                        <li> Nombre de Producto: {itemName}</li>
                        <li> Precio de Producto: {costo}</li>
                        <li> Cantidad de Producto: {cant}</li>
                        <li> Total Gastado: {products.total}</li>
                    </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                    <h3 style={{textAlign: "center", marginTop: "4em"}} >Gracias por Comprar en Vinoteca Maipu!!!</h3>
                </div>
                )}
            </Row>
    )
}

