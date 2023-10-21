import React, { useEffect, useState } from 'react';
import ItemDetail from '../Details/ItemDetail';
import { useParams } from "react-router-dom";
import Loading from '../CompUniversal/Loading';
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item, setItems] = useState({});
    const [entro, setEntro] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        setEntro(true);
        const db = getFirestore();
        const itemref = doc(db, "items", id)
        getDoc(itemref)
        .then(snapshot => {
            if (snapshot.exists()){
            setItems({id: snapshot.id, ...snapshot.data()})
        }})
        .catch((error) => console.log(error))
        .finally(() => setEntro(false));
    },[id])

    return (
        <>
        <h3 style={{marginLeft:"4em"}}>Detalle</h3>
        {entro ? (<Loading/>)
        :  <ItemDetail {...item} />
            }
        </>
    )
    }

export default ItemDetailContainer
