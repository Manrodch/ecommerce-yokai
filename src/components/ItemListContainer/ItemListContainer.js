import "./ItemList.scss";
import Sepuku from "./Sepuku.png";
export const ItemListContainer = ({ greeting }) => {
  return (
    <section className="item-list-container">
      <h2> {greeting} </h2>
      <img src={Sepuku} alt="imagen de samurai antes de ritual sepuku"></img>
    </section>
  );
};
