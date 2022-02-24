import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { KartContext } from "../../Context/KartContext";

export const KartWidget = () => {
  const { kartAmount, kart } = useContext(KartContext);

  return (
    <Link
      to="/kart"
      className={`kart-widget ${kart.length === 0 ? "kart-hidden" : ""}`}
    >
      <BsFillCartFill />
      <span>{kartAmount()}</span>
    </Link>
  );
};
