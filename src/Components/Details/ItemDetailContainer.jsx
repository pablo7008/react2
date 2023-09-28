import React, { useEffect, useState } from 'react'
import Bebidas from '../../data/products.json';
import ItemDetail from '../Details/ItemDetail';

const ItemDetailContainer = ({id}) => {
    const [item, setItems] = useState ([])

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Bebidas)
            }, 2000)
        })
        promesa.then(result => {
            setItems(result.find(item=>item.category === id));
            console.log("si" + item)
        })
    },[])
/*Hola, no puedo lograr hacer andar esto ya que en el setItems 
no se agrega ningun valor a mi variable item, y si esta no tiene valor
no puedo pasarla al componente ItemDetail para conseguir el detalle
del producto en especifico..*/

    return (
        <>
        <h3>Detalle</h3>
        {item.length == 0 ?(
            <div>Loading...</div>)
        : ( <ItemDetail item={item} />
            )}
        </>
    )
    }

export default ItemDetailContainer
