import React, { useContext } from "react";
import "./Product.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const Product = ({ image, name, price, desc, id }) => {
  const { cartItems, addToCart, removeFromCart, url, currency } =
    useContext(StoreContext);

  return (
    <div className="item">
      <div className="item-img-container">
        <img className="item-image" src={url + "/images/" + image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="item-info">
        <div className="item-name-rating">
          <p>{name}</p>
        </div>
        <p className="item-desc">{desc}</p>
        <p className="item-price">
          {currency}
          {price}
        </p>
      </div>
    </div>
  );
};

export default Product;
