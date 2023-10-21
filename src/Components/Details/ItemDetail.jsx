import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../context/CartContext";

const ItemDetail = (item) => {
    const { addItem } = useContext(CartContext)
    function NoStock(stock){
        if (stock < 1){
            return alert (`No tenemos unidades disponibles`)
        }
        else return onAdd
    }
    const onAdd = (cantidad) => {
        let totalprecio = item.price * cantidad
        addItem (item, cantidad, totalprecio)
        alert (`Acabas de comprar ${cantidad} de productos`)

    }

    return(
        <>
        <div style={{marginLeft:"4em"}}>
        <div>{item.name}</div>
        <div>{item.category}</div>
        <div>{item.price}</div>
        <img src={item.img} alt={item.name}/>
        <div>Stock actual = {item.quantity}</div>
        <ItemCount initial={1} stock={item.quantity} onAdd={NoStock (item.quantity)} />
        </div>
    </>
);
}

export default ItemDetail
