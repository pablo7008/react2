import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { promesa } from "../Promesa/Promise";
import { ItemList } from "./ItemList";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const ItemListContainer = props => {
    const [products, setProducts] = useState ([])
    const {id} = useParams()
    useEffect(() => {
        promesa()
        .then(result => {
            if (id){
                setProducts(result.filter(product=>product.category === id))
            } else{
                setProducts(result)
            }
        })
    },[id])
    return(
        <Container>
            <Row>
                <h3>{props.greeting}</h3>
                {products.length === 0 ?(
                <div>Loading...</div>)  : 
                ( <ItemList items={products} />
                )}
            </Row>
        </Container>
)}
