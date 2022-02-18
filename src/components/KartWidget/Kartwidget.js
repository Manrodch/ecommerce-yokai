import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { KartContext } from "../../Context/KartContext";

export const KartWidget = () => {
  const { kartAmount } = useContext(KartContext);

  return (
    <Link to="/kart" className="kart-widget">
      <BsFillCartFill />
      <span>{kartAmount()}</span>
    </Link>
  );
};
