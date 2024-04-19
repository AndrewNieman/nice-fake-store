import { Link } from "react-router-dom";
import { Searchbox } from "./search/searchbox";
import "./navigation.css";

export const Navigation = () => {
  return (
    <div className="nav">
      <Searchbox />
      <div className="items">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart" className="cart">
          <img src={require("../cart.png")} alt="logo" />
        </Link>
      </div>
    </div>
  );
};
