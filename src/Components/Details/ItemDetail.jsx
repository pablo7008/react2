import React from "react";

const ItemDetail = ({item}) => {
    return(
        <>
        <div>{item.id}</div>
        <div>{item.name}</div>
        <div>{item.category}</div>
        <div>{item.price}</div>
        <img src={item.img} alt={item.name}/>
    </>
);
}

export default ItemDetail
