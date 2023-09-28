import { ItemListContainer } from "../src/Components/Items/ItemListContainer";
import { NavBar1 } from "./Components/NavBar/NavBar1";
import Detail from "./Components/Details/Detail";
import { Route, Routes } from "react-router-dom";
//import Form from "./Components/Contact/Form";

const Error404 = () => <h2>Error, no se encuentra la pagina solicitada, por favor volver a una anterior</h2>

function App() {
  return(  
    <>
      <NavBar1 />
      <Routes>
        <Route path="/"></Route>
        <Route path="/Bebidas" element={<ItemListContainer greeting = "Total de Bebidas"/>}></Route>
        <Route path="/category/:id" element= {<ItemListContainer greeting = "Estas son nuestras bebidas encontradas"/>}/>
        <Route path='/detail/:id' element= {<Detail />}></Route>
        <Route path="*" element= {<Error404 />}/>
        
      </Routes>
    </>
  )
}

export default App;
