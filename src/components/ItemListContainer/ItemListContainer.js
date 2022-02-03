import "./ItemList.scss";
import { Product } from "../Product/Product";
import Sepuku from "./Sepuku.png";

export const ItemListContainer = ({ greeting }) => {
  return (
    <section className="item-list-container">
      <Product title="Sepuku" content="Ritual de Sepuku" />
      <Product title="Tengu" content="Ritual de Sepuku" />
      <Product title="Sepuku" content="Ritual de Sepuku" />
    </section>
  );
};
