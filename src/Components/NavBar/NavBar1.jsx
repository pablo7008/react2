import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../logo-carro/LogoVino.png";
import { CartWidget } from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

export const NavBar1 = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <>
                <img src={Logo} alt='Logo' />
                <Link style={{ color: "white", marginRight:"4em", fontSize: "30px", marginLeft: "3em"}} to="/Bebidas">Vinoteca Maipu</Link>
                </>
                <Nav className='me-auto'>
                        <NavLink className="nav-link" to={`./Bebidas`} style={{ color: "white", marginLeft:"3em", marginRight:"4em", fontSize: "25px"}}> Productos
                        </NavLink>
                        <NavLink className="nav-link" to={`/cart`} style={{ color: "white", marginLeft:"3em", marginRight:"4em", fontSize: "25px"}}> Carrito
                        </NavLink>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>);
};
