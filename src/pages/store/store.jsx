import "./store.css";
import { Listallproducts } from "../../api";
import { Announcement } from "../../components/announcement/announcement";
import { Footer } from "../../components/footer/footer";

export const Store = () => {
  return (
    <div className="store">
      <Announcement />
      <div className="storeTitle">
        <h1>Store</h1>
      </div>
      <h2>Our Products</h2>
      <Listallproducts />
      <Footer />
    </div>
  );
};
