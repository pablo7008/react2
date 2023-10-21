import { useContext } from "react"
import carrito from "../../logo-carro/shopping.png"
import CartContext from "../context/CartContext"

const styles = {
    img:{
        height: "2rem",
        width: "auto",
    },
    spam:{
        color: "white",
        paddingLeft: 10,
    }
}

export const CartWidget = () => {
    const { spamCart } = useContext(CartContext)
    console.log(spamCart)
    return (   
<>
<img src = {carrito} style={styles.img} alt="Carrito" /> <span style={styles.spam}> {spamCart}</span>
</>)}