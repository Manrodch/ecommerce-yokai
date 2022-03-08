import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { KartProvider } from "./Context/KartContext";
import { Kart } from "./components/Kart/kart";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  return (
    <KartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/items/:catId" element={<ItemListContainer />} />
          <Route
            path="/detail/:itemId"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="/kart" element={<Kart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </KartProvider>
  );
}

export default App;
