import { useContext } from "react";
import { KartContext } from "../../Context/KartContext";

export const Kart = () => {
  const { kart, kartTotal } = useContext(KartContext);

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
        </div>
      ))}
      <hr />
      <h2>Kart total:${kartTotal()} </h2>
    </div>
  );
};
