import React, { useState } from "react";
import styles from "./cart.module.css";

const Cart = ({ elem, visible }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const getCardStyle = () => {
    let cardStyle = {};
    if (hovered) {
      switch (elem.id) {
        case 1:
          cardStyle = {
            background:
              "linear-gradient(rgba(1, 201, 156, 0.15) 0%, rgba(1, 201, 156, 0) 100%) transparent",
            outline: "1px solid rgb(1, 201, 155)",
          };
          break;
        case 2:
          cardStyle = {
            background:
              "linear-gradient(rgba(3, 177, 249, 0.2) 0%, rgba(63, 189, 241, 0) 100%) transparent",
            outline: "1px solid rgb(63, 189, 241)",
          };
          break;
        case 3:
          cardStyle = {
            background:
              "linear-gradient(rgba(255, 107, 102, 0.2) 0%, rgba(0, 0, 0, 0) 100%) transparent",
            outline: "1px solid rgb(255, 96, 95)",
          };
          break;
        case 4:
          cardStyle = {
            background:
              "linear-gradient(rgba(255, 159, 49, 0.15) 0%, rgba(255, 159, 49, 0) 100%) transparent",
            outline: "1px solid rgb(255, 159, 49)",
          };
          break;
        default:
          break;
      }
    }
    return cardStyle;
  };

  return (
    <div
      className={styles.cartContainer}
      onMouseEnter={handleHover}
      style={getCardStyle()}
      onMouseLeave={handleHover}
    >
      <h1>{elem.title}</h1>
      <div className={styles.imageDiv}>
        <img
          className={`${styles.cartImage} ${
            !visible && !hovered ? styles.hidden : ""
          }`}
          src={elem.imgUrl}
          alt="img1"
        />
      </div>
      <p className={styles.cartDetails}>{elem.disc}</p>
    </div>
  );
};

export default Cart;
