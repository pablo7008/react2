import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { Row } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import Loading from "../CompUniversal/Loading";
import {collection, getDocs, getFirestore} from "firebase/firestore"


export const ItemListContainer = () => {
    const [products, setProducts] = useState ([])
    const [categorys, setCategorys] = useState ([null])
    const {id} = useParams()
    useEffect(() => {
    const db = getFirestore();
    const itemcollection = collection(db, "items")
    getDocs(itemcollection)
        .then(snapshot => {
            const allData = snapshot.docs.map(document => ({id: document.id, ...document.data()}))
            const buscado = allData.map(product => product.category)
            const categorias = categoriasbebidas(buscado)
            function categoriasbebidas (buscado){
                const sinrepetir = []
                for(let i = 0; i < buscado.length; i++) {
                    if (!sinrepetir.includes(buscado[i])) {
                        sinrepetir.push(buscado[i]);
                    }
                }
                return sinrepetir
                }
            setCategorys (categorias)
            if (categorias.includes(id)){
                let productosxcategorias = allData.filter((item) => item.category === id)
                setProducts(productosxcategorias)
            }
            else(setProducts(allData))
        })
    },[id])
    
    return(
        <Container>
            <Row>
                <h3 style={{ textAlign: 'center', marginTop: "1em"}}>Estas son nuestras Bebidas</h3>
                <h5>Categorias de Bebidas</h5>
                <div className="list-group">
                    {categorys.map(cate =>(
                        <NavLink key={cate} className="nav-link" to={`/category/${cate}`} style={{ color: "black", marginLeft:"3em", marginRight:"4em", fontSize: "25px"}}>
                        <button type="button" className="list-group-item list-group-item-action">{cate}</button>
                        </NavLink>
                        ))}
                </div>
                {products.length === 0 ?(
                <Loading/>)  : 
                (<ItemList items={products} />
                )}
            </Row>
        </Container>
)}
