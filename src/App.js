import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { Form } from "./components/Form/Form";
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/items/:catId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />}></Route>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
