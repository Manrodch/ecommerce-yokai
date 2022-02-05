import "../ItemListContainer/ItemList.scss";
import { Item } from "../Item/Item";

export const ItemList = ({ Items }) => {
  return (
    <section className="item-list-container">
      {Items.map((el, i) => (
        <Item key={i} {...el} />
      ))}
    </section>
  );
};
