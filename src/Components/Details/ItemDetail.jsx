import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (item) => {
    console.log(Object.values(item));
    const onAdd = (cantidad) => {
        alert (`Acabas de comprar ${cantidad} de productos`)
    }
    function NoStock(stock){
        if (stock < 1){
            return alert (`No tenemos unidades disponibles`)
        }
        else return onAdd
    }
    return(
        <>
        <div style={{marginLeft:"4em"}}>
        <div>{item.name}</div>
        <div>{item.category}</div>
        <div>{item.price}</div>
        <img src={item.img} alt={item.name}/>
        <div>Stock actual = {item.stock}</div>
        <ItemCount initial={1} stock={item.stock} onAdd={NoStock} />
        </div>
    </>
);
}

export default ItemDetail
