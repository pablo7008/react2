import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children}) => {
    const [cart, setCart] = useState ([]);
    const [spamCart, setSpamCart] = useState (0);
    const addItem = (item, cantidad, preciototal) => {
        const found = cart.findIndex((element) => element.item.id == item.id);
        const cantfound = cart.find((element) => element.item.id == item.id);
        setSpamCart(spamCart + cantidad)
        console.log(spamCart)
        if (cantfound){
            const valorsumado = cantfound.cantidad + cantidad;
            const preciosumado = cantfound.preciototal + preciototal
            cart[found].cantidad = valorsumado
            cart[found].preciototal = preciosumado
            setCart(cart)
            console.log("agregado",cart)}
        else return (
            setCart([
            ...cart,
            {
                item, cantidad,  preciototal
            }
        ])
        )}
        const removeItem = (id, q) => {
            const newCart = cart.filter((nc) => nc.item.id !== id);
            setCart(newCart)
            console.log(cart)
        }
        const clear = () => {
            setCart([])

        }
    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        spamCart

    }
    return (
        <CartContext.Provider value={values}>
        {children}
        </CartContext.Provider>

    )
    }
export default CartContextProvider