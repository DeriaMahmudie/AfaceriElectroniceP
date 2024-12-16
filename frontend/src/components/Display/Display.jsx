import React, { useContext } from "react";
import "./Display.css";
import { StoreContext } from "../../Context/StoreContext";
import Product from "../Product/Product";

const Display = ({ category }) => {
  const { product_list } = useContext(StoreContext);

  return (
    <div className="display" id="display">
      <h2>Produse</h2>
      <div className="display-list">
        {product_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <Product
                key={item._id}
                image={item.image}
                name={item.name}
                desc={item.description}
                price={item.price}
                id={item._id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Display;
