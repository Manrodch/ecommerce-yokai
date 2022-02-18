import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { KartContext } from "../../Context/KartContext";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ id, name, img, disc, price, stock, category }) => {
  const [amount, setAmount] = useState(0);

  const { kart, addToKart, isInKart } = useContext(KartContext);

  console.log(kart);

  const handleAddToKart = () => {
    if (amount === 0) return;

    if (!isInKart(id)) {
      const addItem = {
        id,
        name,
        price,
        stock,
        amount,
      };

      addToKart(addItem);
    }
  };

  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={name}></img>
      <p>{disc}</p>
      <h5>Precio: ${price}</h5>

      {isInKart(id) ? (
        <Link to="./kart" className="btn btn-success my-2">
          Checkout
        </Link>
      ) : (
        <>
          <ItemCount max={stock} counter={amount} setCounter={setAmount} />
          <button className="btn btn-success my-2 " onClick={handleAddToKart}>
            Add to kart
          </button>
        </>
      )}
    </div>
  );
};
