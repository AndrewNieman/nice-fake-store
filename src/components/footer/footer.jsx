import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart" className="cart">
          Cart
        </Link>
      </div>
      <div className="logo">
        <img src={require("../../logo.png")} alt="logo" />
        <p>
          1234 Fake Street
          <br />
          Chicago, IL
          <br />
          60601
        </p>
        <p>(555)555-5555</p>
      </div>
      <div className="contactform">
        <h4>Sweet Deals</h4>
        <p>Thow us your email to hear about our upcoming deals!</p>
        <input type="email" />
      </div>
    </div>
  );
};
