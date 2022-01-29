import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "./styles.css";

function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer greeting="Hello yokai!!! here will be displayed our last nft collection" />
    </>
  );
}

export default App;
