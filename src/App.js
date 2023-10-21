import { ItemListContainer } from "../src/Components/Items/ItemListContainer";
import { NavBar1 } from "./Components/NavBar/NavBar1";
import Detail from "./Components/Details/Detail";
import { Route, Routes } from "react-router-dom";
import CartContextProvider from "./Components/context/CartContextProvider";
import { Cart } from "./Components/Cart/Cart";
import { Compra } from "./Components/Cart/Compra";

const Error404 = () => <h2>Error, no se encuentra la pagina solicitada, por favor volver a una anterior</h2>

function App() {
  return(  
    <>
      <CartContextProvider>
        <NavBar1 />
        <Routes>
          <Route path="/home" element={<ItemListContainer/>}></Route>
          <Route path="/Bebidas" element={<ItemListContainer/>}></Route>
          <Route path="/category/:id" element= {<ItemListContainer greeting = "Estas son nuestras bebidas encontradas"/>}/>
          <Route path='/detail/:id' element= {<Detail />}></Route>
          <Route path="/cart" element= {<Cart/>}></Route>
          <Route path="/compra/:id" element= {<Compra/>}></Route>
          <Route path="*" element= {<Error404 />}/>
        </Routes>
        </CartContextProvider>
    </>
  )
}

export default App;
