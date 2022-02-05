import "./NavBar.scss";
import Yokai from "./Yokai.png";
import Cart from "./Cart.png";
export const NavBar = () => {
  return (
    <header className="header">
      <img src={Yokai}></img>
      <nav className="header-nav ">
        <p className="header-link">About us</p>
        <p className="header-link">For your walls</p>
        <p className="header-link">Clothing</p>
      </nav>
      <img src={Cart}></img>
    </header>
  );
};
