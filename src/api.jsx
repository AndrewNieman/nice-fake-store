import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Listallproducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });

    /*const fetchProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response failed");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error:", error);
    } */
  };
  return (
    <div className="products">
      {product.map((value) => (
        <div className="item" key={value.id}>
          <Link to="/store">
            <img src={value.image} />
            <div className="content">
              <h4>{value.title}</h4>
              <h6>${value.price}</h6>
            </div>
          </Link>
          <p className="category">{value.category}</p>
        </div>
      ))}
    </div>
  );
};
