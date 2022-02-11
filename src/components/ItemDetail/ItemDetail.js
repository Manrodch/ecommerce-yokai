import { react } from "react";

export const ItemDetail = ({ id, name, img, disc, price, stock, category }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={name}></img>
      <p>{disc}</p>
      <h5>Precio: ${price}</h5>
    </div>
  );
};
