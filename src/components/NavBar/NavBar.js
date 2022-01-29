import "./NavBar.css";
import Yokai from "./Yokai.png";
import Cart from "./Cart.png";
export const NavBar = () => {
  return (
    <header className="header">
      <img src={Yokai}></img>
      <nav className="header-nav ">
        <p className="Header-link">Enlace 1</p>
        <p className="Header-link">Enlace 2</p>
        <p className="Header-link">Enlace 3</p>
      </nav>
      <img src={Cart}></img>
    </header>
  );
};
