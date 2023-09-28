import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/LogoVino.png";
import { CartWidget } from "./CartWidget";
import Bebidas from '../../data/products.json'
import { Link, NavLink } from "react-router-dom";

const buscado = Bebidas.map(product => product.category)
let categorias = categoriasbebidas(buscado)
function categoriasbebidas (buscado){
    const sinrepetir = []
    for(let i = 0; i < buscado.length; i++) {
        if (!sinrepetir.includes(buscado[i])) {
            sinrepetir.push(buscado[i]);
        }
    }
    return sinrepetir
}
console.log(categorias)
export const NavBar1 = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <>
                <img src={Logo} alt='Logo' />
                <Link style={{ color: "white", marginRight:"4em", fontSize: "30px"}} to="/Bebidas">Vinoteca Maipu</Link>
                </>
                <Nav className='me-auto'>
                    {categorias.map(cate =>(
                        <NavLink
                        key={cate}
                        className="nav-link" to={`./category/${cate}`} style={{ color: "white", marginLeft:"3em", marginRight:"4em", fontSize: "25px"}}>
                        {cate}
                        </NavLink>
                        ))}
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>);
};