import { react, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ id, name, img, disc, price, stock, category }) => {
  const [amount, setAmount] = useState(0);

  const handleAddToKart = () => {
    if (amount === 0) return;
    const addItem = {
      id,
      name,
      price,
      stock,
      amount,
    };

    console.log(addItem);
  };

  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={name}></img>
      <p>{disc}</p>
      <h5>Precio: ${price}</h5>

      <ItemCount max={stock} counter={amount} setCounter={setAmount} />
      <button className="btn btn-success my-2 " onClick={handleAddToKart}>
        Add to kart
      </button>
    </div>
  );
};
