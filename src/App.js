import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { KartContext } from "./Context/KartContext";
import { useState } from "react";

function App() {
  const [kart, setKart] = useState([]);

  const addToKart = (item) => {
    console.log(isInKart(item.id));
    setKart([...kart, item]);
  };

  const isInKart = (id) => {
    return kart.some((item) => item.id === id);
  };

  const kartAmount = () => {
    return kart.reduce((acc, item) => acc + item.amount, 0);
  };
  const kartTotal = () => {
    return kart.reduce((acc, item) => acc + item.amount * item.price, 0);
  };

  return (
    <KartContext.Provider
      value={{
        kart,
        addToKart,
        isInKart,
        kartAmount,
        kartTotal,
      }}
    >
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/items/:catId" element={<ItemListContainer />} />
          <Route
            path="/detail/:itemId"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </KartContext.Provider>
  );
}

export default App;
