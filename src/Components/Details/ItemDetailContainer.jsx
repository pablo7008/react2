import React, { useEffect, useState } from 'react';
import ItemDetail from '../Details/ItemDetail';
import { useParams } from "react-router-dom";
import { promesa } from '../Promesa/Promise';

const ItemDetailContainer = () => {
    const [item, setItems] = useState({});
    const [entro, setEntro] = useState(false);
    const {id} = useParams();
    const integer = parseInt(id)

    useEffect(() => {
        setEntro(true);
        promesa()
        .then((result) => 
            setItems(result.find((item) => item.id === integer)))
        .catch((error) => console.log(error))
        .finally(() => setEntro(false));
    },[integer])

    return (
        <>
        <h3 style={{marginLeft:"4em"}}>Detalle</h3>
        {entro ? (<div>Loading...</div>)
        :  <ItemDetail {...item} />
            }
        </>
    )
    }

export default ItemDetailContainer
