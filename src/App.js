import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Home } from "./pages/home/home";
import { Cart } from "./pages/cart/cart";
import { Store } from "./pages/store/store";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/productdetails" />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}
