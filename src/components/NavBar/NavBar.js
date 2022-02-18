import "./NavBar.scss";
import Yokai from "./Yokai.png";
import { Link } from "react-router-dom";
import { KartWidget } from "../KartWidget/Kartwidget";

export const NavBar = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={Yokai}></img>
      </Link>

      <nav className="header-nav ">
        <Link to="/items/yokais" className="header-link">
          Yokais
        </Link>
        <Link to="/items/kugosan" className="header-link">
          Kugosan
        </Link>
        <Link to="/items/redfang" className="header-link">
          Red Fang
        </Link>
        <KartWidget />
      </nav>
    </header>
  );
};
