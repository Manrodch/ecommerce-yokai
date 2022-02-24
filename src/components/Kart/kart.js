import { useContext } from "react";
import { KartContext } from "../../Context/KartContext";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Kart = () => {
  const { kart, kartTotal, EmptyKart, RemoveItem } = useContext(KartContext);

  if (kart.length === 0) {
    return (
      <div className="container my-4">
        <h2>Your shopping kart is Empty</h2>
        <Link to="/" className="btn btn-primary">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2>You shopping kart</h2>
      <hr />
      {kart.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Amount:{item.amount}</p>
          <p>Price:${item.price}</p>
          <p>Price:${item.price * item.amount}</p>
          <button
            className="btn btn-danger"
            onClick={() => RemoveItem(item.id)}
          >
            <BsTrashFill />
          </button>
        </div>
      ))}
      <hr />
      <h2>Kart total:${kartTotal()} </h2>

      <div className="my-2">
        <button className="btn btn-danger" onClick={EmptyKart}>
          Empty Kart
        </button>

        <button className="btn btn-success mx-2">Finish shopping</button>
      </div>
    </div>
  );
};
